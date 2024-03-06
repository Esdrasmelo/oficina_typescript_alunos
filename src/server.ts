import express from "express";
import routes from "./routes/assembleRoutes.routes";
import 'dotenv/config'

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(process.env.APP_PORT, () =>
  console.log(
    "O servidor está sendo executado no endereço: http://localhost:3000"
  )
);
