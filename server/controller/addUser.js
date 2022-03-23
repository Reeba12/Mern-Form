const express = require('express')
const mongoose = require('mongoose')

const formData=mongoose.Schema({
    clientAgency: String,
    email: String,
    name: String,
    uniqueIdentifier: String,
    govwinId: Number,
    opportunityDesc: String,
    anticipatedSubDate: String,
    leadAndSupport: String,
    personName: Array,
    Inputdate:Date
})
const dataModel=mongoose.model('formData',formData);
module.exports=dataModel;