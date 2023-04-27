const express = require("express");
const rotas = express.Router();
const AguaController = require("./controllers/AguaController");

rotas.post('/agua', AguaController.create);
rotas.get('/agua', AguaController.read);
rotas.delete('/agua/:id', AguaController.delete);
rotas.post('/agua/:id', AguaController.update);
rotas.get('/agua/:id', AguaController.procura);

module.exports = rotas;

