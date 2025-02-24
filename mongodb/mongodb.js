const mongoose = require('mongoose');
const connectionString = "mongodb+srv://waqasmuhammad5254:0CQSGRCDi6ZJXk2Z@cluster0.nk012.mongodb.net/";
const connectDB = async () => {
    try {
        const con = await mongoose.connect(connectionString, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
        console.log(con.connection.host);
    }

    catch (error) {
        console.log("error while connecting mongoDB", error);
    }
}
module.exports = connectDB;