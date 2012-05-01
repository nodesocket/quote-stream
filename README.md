# Quote Stream

### A node.js application that pushes real-time stock quotes in JSON over web-sockets.

## Usage

**Apple Inc. (AAPL)**
### <http://localhost:4000/AAPL>

Simply replace **AAPL** in the URL with a **valid ticker symbol**. Currently, Quote Stream only supports passing a single ticker symbol. Stock quotes are pulled from <http://finance.google.com> and are real-time.

## Additional Details

By default stock quotes are fetched every **5 seconds**, and pushed to the client. The fetch interval can be adjusted, and if you want the JSON response pretty-printed or not.

## Example Screen-Shot

![alt Screen-Shot](http://i.imgur.com/FgTAW.png "Screen-Shot")

## Example JSON Response

    {
        "ticker": "AAPL",
        "exchange": "NASDAQ",
        "price": "608.34",
        "change": "-1.36",
        "change_percent": "-0.22",
        "last_trade_time": "Apr 18, 4:00PM EDT",
        "dividend": "2.65",
        "yield": ""
    }

## Author / Contact

**Created and coded by the NodeSocket team.**

_Website: <http://www.nodesocket.com>_<br />
_Twitter: <http://www.twitter.com/nodesocket>_<br />
_E-Mail: <hello@nodesocket.com>_

## License & Legal

*Copyright (C) 2012 NodeSocket LLC*

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:*

*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*