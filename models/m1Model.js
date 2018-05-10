import mongoose from 'mongoose';

const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose);

const M1Schema = new Schema({
	m1Name: String,
    m1Descricao : String,
    m1tipo : String,
    m1NomeResponsavel : String,
    m1TipoIntegracao : String
});

mongoose.model('M1', M1Schema);