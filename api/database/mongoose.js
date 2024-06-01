const express = require("express")
const mongoose = require("mongoose")

async function connection_database() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connect');
}

module.exports = {
    connection_database
}