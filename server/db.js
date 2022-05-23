const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedToplogy: true,
        };
        await mongoose.connect("mongodb+srv://todo-list-app:DAJfeIMcsxfS5tvs@todo-list.ma8ql.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log('Connected to database');
    } catch (error) {
        console.log(`Could not connect to database. ${error}`);
    }
};
