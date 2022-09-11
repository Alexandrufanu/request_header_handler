"use strict";
// import express from "express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express
// const port = 3000
// express().get('/', (req: any, res: { send: (arg0: string) => void }) => {
//   res.send('Hello World!')
// })
// express().listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(express_1.default.urlencoded({
    extended: true
}));
const port = process.env.PORT || 5456;
app.get('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    res.status(200).send(
    // {"ipaddress":req.socket.remoteAddress}
    req.headers);
});
app.get("/api/whoami", (req, res) => {
    console.log({
        "ipaddress": req.socket.remoteAddress,
        "software": req.headers["user-agent"],
        "language": req.headers["accept-language"]
    });
    res.send({
        "ipaddress": req.socket.remoteAddress,
        "software": req.headers["user-agent"],
        "language": req.headers["accept-language"]
    });
});
app.post('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    res.send("Heres");
});
function stringIsAValidUrl(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}
let urlShortenedCount = 0;
app.post("/api/shorturl", (req, res) => {
    url: 'https://requestheaderhandler-2.alexandrufanu1.repl.co/?v=1662825721969';
    let urlToShorten = req.body["url"];
    console.log(urlToShorten);
    console.log(req.body);
    // dns.lookup(urlToShorten , (error,address,family)=>{
    if (!stringIsAValidUrl(urlToShorten)) {
        console.log("Here in error");
        // console.log(error)
        res.send({ error: 'invalid url' });
    }
    else {
        app.get('/api/shorturl/' + urlShortenedCount, (req, res) => {
            res.redirect(urlToShorten);
        });
        res.send({ original_url: urlToShorten, short_url: urlShortenedCount++ });
    }
    //  }
    // );
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
// import express, { Request, Response } from 'express';
// const app = express();
// const port = 3000;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });
