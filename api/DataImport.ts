import express from "express";
import users from "./src/data/users";
import User from "./src/models/User";





const ImportData = express.Router()

ImportData.post("/user", async(req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser })
})

export default ImportData;