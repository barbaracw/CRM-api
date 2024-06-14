const Customer = require('../models/customerModel');

const createCustomer = async (customerData) => {
  const customer = new Customer(customerData);
  return await customer.save();
};

const getCustomers = async () => {
  return await Customer.find();
};

const getCustomerById = async (id) => {
  return await Customer.findById(id);
};

const updateCustomer = async (id, customerData) => {
  return await Customer.findByIdAndUpdate(id, customerData, { new: true });
};

const deleteCustomer = async (id) => {
  return await Customer.findByIdAndDelete(id);
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
