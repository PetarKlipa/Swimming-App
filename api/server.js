require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//connect to db
const connectDB = require("./db/connect");

//routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const competitionRoute = require("./routes/competitions");
const swimmersRoute = require("./routes/swimmers");

//middlewares
const {errorStatus} = require('./middleware/errorStatus')

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/competitions", competitionRoute);
app.use("/api/v1/swimmers", swimmersRoute);

app.use(errorStatus);

//port
const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
