const Invoice = require("../models/invoiceModel");

//get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json({ invoices });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get single invoice
const getInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await Invoice.findById(id);
    if (!invoice) {
      return res.status(404).json({ msg: `No invoice with id: ${id}` });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create invoice
const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//update invoice
const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = req.body;
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      { ...invoice, id },
      { new: true }
    );
    if (!updateInvoice) return res.status(404).send(`No invoice with id: ${id}`);
    res.json(updatedInvoice);
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
};

//delete invoice
const deleteInvoice = async (req, res) => {
  try {
    const { id: invoiceID } = req.params;
    const invoice = await Invoice.findByIdAndDelete({ _id: invoiceID });
    if (!invoice)
      return res.status(404).json({ msg: `No invoice with id: ${invoiceID}` });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};