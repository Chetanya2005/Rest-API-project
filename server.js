const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

const FILE = "./data/users.json";

function readUsers() {
    return JSON.parse(fs.readFileSync(FILE));
}

function writeUsers(users) {
    fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
}

app.get("/users", (req, res) => {
    res.json(readUsers());
});

app.get("/users/:id", (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

app.post("/users", (req, res) => {
    const users = readUsers();
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
    const users = readUsers();
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "User not found" });

    users[index] = { ...users[index], ...req.body };
    writeUsers(users);
    res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
    const users = readUsers();
    const updated = users.filter(u => u.id !== parseInt(req.params.id));
    if (updated.length === users.length) {
        return res.status(404).json({ message: "User not found" });
    }
    writeUsers(updated);
    res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});


console.log("Hello from server.js");

