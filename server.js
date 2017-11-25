//const express = require ('express')
//const hello = require('./src/hello')
import express from 'express'
import hello from './src/handler'

const app = express()

app.listen(4000)
console.log('listening...')
function toCallBack(promise) {
  return function () {
    const done = arguments[arguments.length - 1];
    promise.apply(this, arguments).then(() => done()).catch((err) => done(err));
  };
}

// app.use((req, res, next) => {
//   const time = Date.now();
//   req.time = () => time;

//   res.on('finish', () => {
//     switch (http.STATUS_CODES[res.statusCode]) {
//       case 'Internal Server Error':
//         error(req, res, res.error, next);
//         break;
//       case 'Bad Request':
//       case 'Not Acceptable':
//       case 'Not Found':
//         warn(req, res, res.error, next);
//     }
//   });

//   next();
// });

app.get('/hello', toCallBack(hello))
