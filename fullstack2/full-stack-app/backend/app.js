import { main } from "./Db.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { User } from "./Schema.js";
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/signupDetails", async (req, res) => {
  const data = req.body;
  const { name, phoneNumber, email, password } = data;

  try {
    const collection = await main();

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    const newUser = new User({ name, phoneNumber, email, password });
    await collection.insertOne(newUser);
    console.log("newUser", newUser);
    res.status(200).json({ message: "Succesfully inserted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});






app.post("/signinDetails", async (req, res) => {
  const collection = await main();
  const data = req.body;
  const { email, password } = data;

  try {
    const user = await collection.findOne({ email: email });

    console.log(user);
    if (!user) {
      res.status(400).send({ message: "User not Found in the Database" });
    }

    if (user.password === password) {
      res.status(200).send({ message: "User in the Database" });
    } else {
      res.status(400).send({ message: "Invalid Password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});







main();
app.listen(3820, () => {
  console.log("3820");
});
