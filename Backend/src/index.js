import express from "express";
import cors from "cors";
import "dotenv/config";
import http from "http";
import UserRoute from "./Routes/UserRoute.js";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
app.use(UserRoute);

server.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
