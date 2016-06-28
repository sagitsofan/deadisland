﻿var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema( {
    text : String,
    lastplayerwon : mongoose.Schema.Types.ObjectId,
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }]
});

module.exports = mongoose.model('games', GameSchema);
