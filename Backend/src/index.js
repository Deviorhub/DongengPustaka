import express from "express";
import cors from "cors";
import "dotenv/config";
import http from "http";
import UserRoute from "./Routes/UserRoute.js";
import KategoriRoute from "./Routes/KategoriRoute.js";
import CeritaRoute from "./Routes/CeritaRoute.js";
import logRequest from "./Middleware/log.js";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(logRequest);
app.use(express.json());

const server = http.createServer(app);
app.use(UserRoute, KategoriRoute, CeritaRoute);

server.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
