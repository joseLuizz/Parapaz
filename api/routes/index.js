const express = require('express')
const perfil = require('./perfilRoute')
const relatorio = require('./relatorioRoute')
const funcionario = require('./funcionarioRoute')
const atendimento = require('./atendimentoRoute')
const vitimaCrianca = require('./vitimaCriancaRoute')
const vitimaMulher = require('./vitimaMulherRoute')
const violenciaCrianca = require('./violenciaCrincaRoute')
const usuarioCrianca = require('./ususarioCriancaRoute')
const socioEconomicoCrianca = require('./socioEconomicoCriancaRoute')
const violenciaMulher = require('./violenciaMulherRoute')
const usuariaMulher = require('./usuariaMulherRoute')
const socioEconomicoMulher = require('./socioEconomicoMulherRoute')
const funcionario_atendimento = require('../models/funcionario_atendimento')




module.exports = app => {
    app.use(express.json())
    app.use(perfil,
    relatorio,
    funcionario,
    atendimento,
    vitimaCrianca,
    vitimaMulher,
    violenciaCrianca,
    usuarioCrianca,
    socioEconomicoCrianca,
    violenciaMulher,
    usuariaMulher,
    socioEconomicoMulher,
    funcionario_atendimento)
   
}