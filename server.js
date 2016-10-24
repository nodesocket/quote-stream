'use strict';

/*
Copyright 2016 Justin Keller

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

////
// CONFIGURATION SETTINGS
////
var FETCH_INTERVAL = 5000;
var PRETTY_PRINT_JSON = true;

////
// START
////
var express = require('express');
var http = require('http');
var https = require('https');
var io = require('socket.io');
var cors = require('cors');

function getQuote(socket, ticker) {
    https.get({
        port: 443,
        method: 'GET',
        hostname: 'www.google.com',
        path: '/finance/info?client=ig&q=' + ticker,
        timeout: 1000
    }, function(response) {
        response.setEncoding('utf8');
        var data = '';

        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function() {
            if(data.length > 0) {
                var dataObj;

                try {
                    dataObj = JSON.parse(data.substring(3));
                } catch(e) {
                    return false;
                }

                var quote = {};
                quote.ticker = dataObj[0].t;
                quote.exchange = dataObj[0].e;
                quote.price = dataObj[0].l_cur; // jshint ignore:line
                quote.change = dataObj[0].c;
                quote.change_percent = dataObj[0].cp; // jshint ignore:line
                quote.last_trade_time = dataObj[0].lt; // jshint ignore:line
                quote.dividend = dataObj[0].div;
                quote.yield = dataObj[0].yld;

                socket.emit(ticker, PRETTY_PRINT_JSON ? JSON.stringify(quote, null, 4) : JSON.stringify(quote));
            }
        });
    });
}

function trackTicker(socket, ticker) {
    // run the first time immediately
    getQuote(socket, ticker);

    // every N seconds
    var timer = setInterval(function() {
        getQuote(socket, ticker);
    }, FETCH_INTERVAL);

    socket.on('disconnect', function () {
        clearInterval(timer);
    });
}

var app = express();
app.use(cors());
var server = http.createServer(app);

var io = io.listen(server);
io.set('origins', '*:*');

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
    socket.on('ticker', function(ticker) {
        trackTicker(socket, ticker);
    });
});

server.listen(process.env.PORT || 4000);
