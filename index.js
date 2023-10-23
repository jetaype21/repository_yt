import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Hola mundo");
});

app.listen(port, () => {
  console.log(`el servidor esta corriendo en el puerto ${port}`);
});
