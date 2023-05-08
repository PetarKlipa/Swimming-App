require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//connect to db
const connectDB = require("./db/connect");

//routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
//app.use('/api/v1/swimmers',)
//app.use('/api/v1/competitions',)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

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
