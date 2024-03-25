const Deepanshu = require("mongoose");
const dbConnect = ()=>{
    Deepanshu.connect("mongodb+srv://deepanshushukla9585:3zqQGp9g9XmkMYAS@cluster0.30m4y4d.mongodb.net/UserData")
    .then(()=>console.log("DB connection Successful"))
    .catch((error) => {
        console.log("Issue in DB Connection")
        console.error(error.message);
        process.exit(1);
    })
}
module.exports = dbConnect;