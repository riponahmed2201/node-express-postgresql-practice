const express = require("express");

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

//GET /books -> return all the books
app.get('/books', (req, res) => {
    try {
        res.status(200).json({ message: "Books are returned!" });
    } catch (error) {
        return res.json({ error: error.message });
    }
});

//GET /books/:id -> return a specific book
app.get('/books/:id', (req, res) => {
    try {
        const { id } = req.params;

        res.status(200).json({ message: `Specific book is returned with id: ${id}` });
    } catch (error) {
        return res.json({ error: error.message });
    }
});

//POST /books -> Create a book
app.post('/books', (req, res) => {
    try {
        const { name, description } = req.body;

        res.status(201).json({ message: "Book was created" });

    } catch (error) {
        return res.json({ error: error.message });
    }
});

//DELETE /books/:id -> Delete a book
app.delete('/books/:id', (req, res) => {
    try {
        const { id } = req.params;

        res.status(200).json({ message: `Delete a specific book with id: ${id}` });
    } catch (error) {
        return res.json({ error: error.message });
    }
});

//PUT /book/:id -> return all the book
app.put('/books/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        res.status(200).json({ message: "Books was updated" });
    } catch (error) {
        return res.json({ error: error.message });
    }
});