import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true })); //Treat the body of the URL as a JSON objects

app.use(express.static('frontend/dist')); //Serve the static files from the React app

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
