const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agendaSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    },
    dataNascimento:{
        type: Date,
        required: true
    },
    fotoPerfil:{
        type: String,
        required: false
    }
},
{ 
    collection: 'agenda',
    versionKey: false
}
);

const agendaCollection = mongoose.model('agenda', agendaSchema)

module.exports = {
    agendaCollection
}