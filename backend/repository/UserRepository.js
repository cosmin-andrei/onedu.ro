const fs = require('fs');
const path = require('path');
const User = require('../models/User');

const filePath = path.join(__dirname, '../data/users.json');

class UserRepository {
  constructor() {
    this.users = this.loadUsers();
  }

  loadUsers() {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  }

  saveUsers() {
    fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2));
  }

  addUser(user) {
    this.users.push(user);
    this.saveUsers();
    return user;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id, updatedData) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    this.users[index] = { ...this.users[index], ...updatedData };
    this.saveUsers();
    return this.users[index];
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    const deletedUser = this.users.splice(index, 1);
    this.saveUsers();
    return deletedUser;
  }

  getAllUsers() {
    return this.users;
  }

  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }
}

module.exports = UserRepository;
