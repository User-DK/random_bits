const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  const { name, phone, email, address } = req.body;
  console.log('Received contact data:', req.body); // Log the received payload
  try {
    const contact = await Contact.create({ userId: req.user.userId, name, phone, email, address });
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error creating contact:', error); // Log the error
    res.status(400).json({ error: error.message });
  }
};

const getContacts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const contacts = await Contact.find({ userId: req.user.userId })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  res.json(contacts);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    res.json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createContact, getContacts, updateContact, deleteContact };