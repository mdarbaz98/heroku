const express = require("express");
const router = express.Router();
const {getAllInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice} = require("../controllers/invoiceController.js");

// get all invoices from database
router.get("/", getAllInvoices);

//get one invoice from database
router.get("/:id", getInvoice);

//create new invoice
router.post("/", createInvoice);

//update invoice
router.put("/:id", updateInvoice);

//delete invoice
router.delete("/:id", deleteInvoice);

module.exports = router;