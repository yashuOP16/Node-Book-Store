const Transaction = require('../Modules/transacition');


const defaultController = async (req, res) => {
        const transactions = await Transaction.find();
        res.render('index', { transactions });
};

const newaddController = (req, res) => {
    res.render('addTransaction', { transaction: {} });
};


const editTransactionController = async (req, res) => {
        const transaction = await Transaction.findById(req.params.id);

        res.render('addTransaction', { transaction });
   
};


const updateTransactionController = async (req, res) => {
    const { type, category, amount, description, date } = req.body;
        if (req.params.id) {
            // Update existing transaction
            await Transaction.findByIdAndUpdate(req.params.id, { type, category, amount, description, date });
        } else {
            // Create new transaction
            await Transaction.create({ type, category, amount, description, date });
        }
        res.redirect('/');
};

const deleteTransactionController = async (req, res) => {
        await Transaction.findByIdAndDelete(req.params.id);
        res.redirect('/');
};

module.exports = {
    defaultController,
    newaddController,
    editTransactionController,
    updateTransactionController,
    deleteTransactionController
};
