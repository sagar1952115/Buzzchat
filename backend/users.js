const { ConnectionStates } = require("mongoose");

let onlineUsers = [];
let unpairedUsers = [];
// Use Reddis

const addUser = (userId, socketId) => {
    const existingUser = onlineUsers.find(user => user.userId == userId)
    const existingUser_ = onlineUsers.find(user => user.socketId == socketId)

    if (existingUser) {
        return { error: "Userid is taken" }
    }
    if (existingUser_) {
        removeUser(socketId)
    }

    const user = { userId, socketId }
    onlineUsers.push(user)

    return { user }
}

const addUnpairedUser = (userId) => {
    const existingUser = unpairedUsers.find(user => user === userId)

    if (existingUser) {
        return { error: "User already unPaired" }
    }

    unpairedUsers.push(userId)

    return {}
}

const removeUser = (socketId) => {
    console.log(onlineUsers)
    const allOnlineUsers = [...onlineUsers]

    console.log(allOnlineUsers)
    console.log("this is my socket id ",socketId)
    const filteredOnlineUsers = onlineUsers.filter(user => user.socketId != socketId)

    onlineUsers = filteredOnlineUsers

    return allOnlineUsers.find((user) => user.socketId == socketId)
}

const removeUnpairedUser = (userId) => {
    const filteredUnpairedUsers = unpairedUsers.filter((user) => user != userId)

    unpairedUsers = filteredUnpairedUsers
}

const getUser = (userId) => onlineUsers.find(user => user.userId === userId)

const getUsers = () => onlineUsers

const getUnpairedUsers = () => unpairedUsers

module.exports = {
    getUser, removeUser, addUser, getUsers, addUnpairedUser, getUnpairedUsers, removeUnpairedUser
}