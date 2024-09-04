const express = require('express');
const router = express.Router();
const controller = require('../Controllers/myControllers')

router.get('/',controller.defaultController);
router.get('/newadd',controller.newaddController);
router.get('/transactions/:id/edit', controller.editTransactionController);
router.post('/:id?', controller.updateTransactionController);
router.post('/transactions/:id/delete', controller.deleteTransactionController);

module.exports = router;
