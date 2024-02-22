import express from 'express';
import debug from 'debug';
const debugUser = debug('app:User');
import { GetAllUsers, GetUserById, updateUser, addUser,GetUserByEmail } from '../../database.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/list', async (req, res) => {
     const users = await GetAllUsers();
    if(users){
        res.status(200).json(users);
    }else{
        res.status(500).send('Error getting users');
    }
});

router.get('/:userId', async (req, res) => {
    const id = req.params.userId;
    debugUser(`Getting user By Id ${id}`);

    const user = await GetUserById(id);
    
    if(user){
        res.status(200).json(user);
    }else{
        res.status(500).send('Error getting user');
    }
   
});

router.post('/update/:userId', async (req, res) => {
    const id = req.params.userId;
    //Object to update
    const currentUser = await GetUserById(id);
    
    //Object with the new values
    const updatedUser = req.body;

    //Merge the two objects
    const user = {...currentUser, ...updatedUser};

    const dbResult = await updateUser(user);

    if(dbResult.modifiedCount === 1){
        res.status(200).send(`User ${user._id} updated successfully`);
    }else{
        res.status(500).send('Error updating user');
    }
});

router.post('/add', async (req, res) => {
    //User who wants to register from the front end
    const user = req.body;
    //Hash the password
    user.password = await bcrypt.hash(user.password,10);

    try{
        
        const existingUser = await GetUserByEmail(user.email);
        
        if(existingUser){
            res.status(500).send('User already exists');
            return;
        }
        const dbResult = await addUser(user);
        debugUser(`The DB result is ${JSON.stringify(dbResult)}`);
        if(dbResult.acknowledged === true){
            res.status(200).send(`User ${user._id} added successfully`);
        }else{
            res.status(500).send('Error adding user');
        }
    }catch(e){
        res.status(500).send('Error adding user');
    }
});

router.post('/login', async (req, res) => { 
    const user = req.body;
    try{
        const existingUser = await GetUserByEmail(user.email);
        if(existingUser){
            const match = await bcrypt.compare(user.password, existingUser.password);
            if(match){
                res.status(200).send('Login successful');
            }else{
                res.status(500).send('User password does not match. Please try again.');
            }
        }else{
            res.status(500).send('User Email Not Found. Please register first.');
        }
    }catch(e){
        res.status(500).send('Error logging in');
    }
});

export {router as userRouter}; //Export the router as a named export