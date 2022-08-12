const { MongoClient } = require('mongodb');


const DB_URL = "mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/iphone_posts?retryWrites=true&w=majority";

const DB_NAME = "iphone_posts"

const client = new MongoClient(DB_URL); //connect()  db() 

const mongo = {
    db: null,
    iphones_details: null,

    async connect() {
        await client.connect();

        this.db = client.db(DB_NAME);// db create
        this.iphones_details = this.db.collection("iphones_details"); // colloection create

        console.log("db is connected successfully ", DB_NAME)
    }
}

module.exports = mongo;