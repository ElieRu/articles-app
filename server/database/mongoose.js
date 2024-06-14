const express = require("express")
const mongoose = require("mongoose")

async function connection_database() {
    await mongoose.connect(process.env.MONGO_URL);
}

module.exports = {
    connection_database
}