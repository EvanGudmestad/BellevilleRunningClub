import { MongoClient, ObjectId } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();
import debug from 'debug';
const debugDb = debug('app:Database');
let _db = null;

async function connectToDatabase() {
    if(!_db){
        const connectionString = process.env.DB_URL;
        const dbName = process.env.DB_NAME;
        console.log(`Connecting to database ${connectionString} and db ${dbName}`);
        const client = await MongoClient.connect(connectionString);
        _db = client.db(dbName);
    }

    return _db;
}

async function ping(){
    const db = await connectToDatabase();
    await db.command({ ping: 1 });
    debugDb('Pinged the database');
}

async function GetAllUsers(){
    const db = await connectToDatabase();
    const users = await db.collection('User').find({}).toArray();
    return users;
}

async function GetUserById(id){
    const db = await connectToDatabase();
    const user = await db.collection('User').findOne({_id: new ObjectId(id)});
    return user;
}

async function updateUser(user){
    const db = await connectToDatabase();
    const result = await db.collection('User').updateOne({_id: new ObjectId(user._id)}, {$set: user});
    //debugDb(`The DB result is ${JSON.stringify(result)}`);
    return result;
}

//add user to database
async function addUser(user){
    const db = await connectToDatabase();
    const result = await db.collection('User').insertOne(user);
    //debugDb(`The DB result is ${JSON.stringify(result)}`);
    return result;
}

//get user by email
async function GetUserByEmail(email){
    const db = await connectToDatabase();
    const user = await db.collection('User').findOne({email: email});
    return user;
}

ping();

export { connectToDatabase, ping,GetAllUsers, GetUserById, updateUser, addUser, GetUserByEmail };