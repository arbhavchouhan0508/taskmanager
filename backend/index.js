const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;
const API = "mongodb://127.0.0.1:27017/taskmanager";

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();