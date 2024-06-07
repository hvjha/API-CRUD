const express = require('express');
const router = express.Router();

// Sample user data
const users = [
    { userid: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890' },
    { userid: 2, name: 'Jane Doe', email: 'jane@example.com', mobile: '0987654321' },
    { userid: 3, name: 'Jane Doe', email: 'jane@example.com', mobile: '0987654321' },
    { userid: 4, name: 'Jane Doe', email: 'jane@example.com', mobile: '0987654321' },
    { userid: 5, name: 'Jane Doe', email: 'jane@example.com', mobile: '0987654321' },
];

// GET /api/users
router.get('/', (req, res) => {
    res.json(users);
});
// POST /api/users
router.post('/', (req, res) => {
    const newUser = req.body;
    // newUser.userId = users.length + 1; // Assign a new userId
    newUser.userid = users.length ? users[users.length - 1].userid + 1 : 1;
    users.push(newUser);
    res.status(201).json(newUser); // Respond with the newly created user
});
// PUT /api/users/:id
router.put('/:id', (req, res) => {
    const userid = parseInt(req.params.id);
    const updateUser = req.body;
    const userIndex = users.findIndex(user => user.userid === userid);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updateUser };
        res.status(200).json(users[userIndex]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});
// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
    const userid = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.userid === userid);

    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.status(200).json(deletedUser[0]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

module.exports = router;
