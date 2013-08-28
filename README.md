# cujotest

[![MIT License](http://b.repl.ca/v1/License-MIT-blue.png)](LICENSE)

A toy repo demonstrating how to use the cujojs curl loader with commonjs
modules for shared `require()` code between node and the browser.

## Includes:
- An AMD style module
- bare CommonJS `require()` using modules
- npm installed dependencies
- shared code between the server and client
- A minified version of the client code.

# Usage:

```bash
# required for cram
npm install -g bower
npm install
npm run cram
node app.js
```

unminified -> http://localhost:3000
minified -> http://localhost:3000/min.html
