import express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import { NextFunction } from '../../node_modules/@types/connect';
import get from './routes/get'
import save from './routes/save'

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/get", get)
app.use("/api/save", save)

//send index.html
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/index.html"))
// })

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = { ...new Error('Not Found'), status: 404 };
    next(err);
});

// error handler
app.use(function (err: { status: number }, req: express.Request, res: express.Response, next: NextFunction) {
    res.send(err.status)
});

export { app };
