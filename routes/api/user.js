import express from 'express';
import debug from 'debug';
const debugUser = debug('app:User');

const router = express.Router();

router.get('/list', (req, res) => {
    debugUser('User list');
    res.status(200).send('User list');
});

router.get('/:userId', (req, res) => {
    const id = req.params.userId;
    debugUser('User profile');
    res.status(200).send('User profile');
});

router.post('/update', (req, res) => {
    const obj = req.body;
    debugUser('User update');
    res.status(200).send('User update');
});

export {router as userRouter}; //Export the router as a named export