## CHANGELOG

### Version 0.2.0
- Fixed a bug where other ticker requests would stream in. For example, if a client requested GOOG, and then another client connected requesting MSFT, the first connected client would see MSFT stream in.

- Changed `index.html` to request the socket.io javascript file, and connect on `localhost`, instead of hard-coding the NodeSocket demo machine.

### Version 0.1.1
- Added `clearInterval()` on `socket.disconnect()`

### Version 0.1.0
- Initial release