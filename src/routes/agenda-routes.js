const express = require('express');
const router = express.Router();
const controller = require('../controllers/agenda-controller')

router.get('/', controller.getStart)
router.get('/agenda', controller.getAgenda)
router.get('/agenda/nome/:nome', controller.getAgendaByName)
router.get('/agenda/nome/:id', controller.getAgendaById)

router.post('/agenda/criar', controller.addAgenda)

router.delete('/agenda/deletar/:id', controller.deleteAgenda)

router.put('/agenda/atualizar/:id', controller.updateAgendaById)
router.put('/agenda/atualizar/telefone/:id', controller.updateAgendaCell)

module.exports = router;