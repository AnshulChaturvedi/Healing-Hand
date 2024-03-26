import { connect } from "mongoose";

//database connection
require("dotenv").config();

const connectDB = () => {
    connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log("Databse connected Successfully."))
    .catch((err) => console.log(err));
}

export default connectDB;