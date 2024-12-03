import express from "express";
import petsRoutes from "./routes/pets.routes.js";
const app = express();


app.use('/TecWebFinal/API/v1/',petsRoutes);
app.listen(3000);
console.log('Server running on port 3000')