import mongoose from 'mongoose';
require('../models/m1Model');
const m1Model = mongoose.model('M1');

module.exports.save = (req, res) => {
    console.log(req.body.m1Name)
    m1Model.findOne({
        m1Name : req.body.m1Name
    }, (err,m1) => {
        if (err) res.status(500).send(err);
        if (m1){
            res.status(400).send('modelo1 ja cadastrado');
        } else {
            m1Model.create({
                m1Name : req.body.m1Name,
                m1Descricao : req.body.m1Descricao,
                m1tipo : req.body.m1tipo,
                m1NomeResponsavel : req.body.m1NomeResponsavel,
                m1TipoIntegracao : req.body.m1TipoIntegracao
            }, (err,m1) => {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.status(200).send(m1);
                }
            })
        }
    })
}
module.exports.getAll = (req,res) => {
    m1Model.find((err,m1)=> {
        if(err){
            res.status(500).send(err)
        }
        if(m1){
            res.status(200).send(m1)          
        }
    });
}
module.exports.edit = (req,res) => {
    m1Model.update({
        _id: req.body.m1_id
    },{
        $set: {m1Name : req.body.m1Name,
                m1Descricao : req.body.m1Descricao,
                m1tipo : req.body.m1tipo,
                m1NomeResponsavel : req.body.m1NomeResponsavel,
                m1TipoIntegracao : req.body.m1TipoIntegracao}
    },
        (err,m1) => {
            if(err){
                res.status(500).send(err)
            }
            if(servico){
                res.status(200).send(m1)
            }
    })
}
module.exports.delete = (req,res) => {
    m1Model.remove({
        _id: req.body.m1_id
    }, (err,m1) => {
        if(err) {
            res.status(500).send(err)
        }
        if(servico) {
            res.status(200).send(m1)
        }
    })
}