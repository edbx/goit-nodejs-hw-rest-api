require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts/contactsRouter");
const authRouter = require("./routes/api/auth/authRouter");

const mongoose = require("mongoose");
const { protect } = require("./middlewares/auth/protect");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

mongoose
  .connect(process.env.MONGO_CONTACTS_URL)
  .then(() => {
    console.log("Mongo Contacts DB is successfully connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);

app.use("/", protect);

app.use("/api/contacts", contactsRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status } = err;
  res.status(status || 500).json({ message: err.message });
});

module.exports = app;
