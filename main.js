import express from "express";
import routerApi from "./routers/Demo.routers.js";
import connectDb from "./lib/db.js";
const app = express();
const port = 4000;

app.use('/api',routerApi);

connectDb();
app.listen(port,() => {
    console.log(`The server is running at http://localhost:${port}`);
})