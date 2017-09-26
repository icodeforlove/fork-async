# fork-async [![Build Status](https://travis-ci.org/icodeforlove/fork-async.png?branch=master)](https://travis-ci.org/icodeforlove/fork-async)

### run a async function in a forked process

It will properly handle uncaught errors, and use nodes built in communication channels which can send fairly large messages.

## install

```
npm install --save fork-async
```

## usage

you can compose colored template literals in many ways

```javascript

import forkAsync from 'fork-async';

(async () => {


    let result = await forkAsync(`async (one, two, done) => {
        let Promise = require('bluebird');

        await Promise.delay(1000);

        done(one + two);
    }`, [1, 2]);

    console.log(result); // returns 3


})().catch(console.error);
```

method signature

`forkAsync(function:String, arguments:[])`