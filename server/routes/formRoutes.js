const express = require('express');
const router = express.Router();
const { createForm, getFormById, submitFormData } = require('../controllers/formController');

/**
 * @route   POST /forms/create
 * @desc    Create a new form
 * @body    { "formName": "string", "fields": [ { "fieldName": "string", "fieldType": "string" } ] }
 *          - formName: The name of the form (e.g., "User Registration")
 *          - fields: An array of field objects, each containing fieldName and fieldType
 * @access  Public
 */
router.post('/create', createForm);

/**
 * @route   GET /forms/:id
 * @desc    Get a form by ID
 * @param   {String} id - The ID of the form to retrieve
 * @access  Public
 */
router.get('/:id', getFormById);

/**
 * @route   POST /forms/submit/:id
 * @desc    Submit data for a specific form
 * @body    { "data": { "field1": "value1", "field2": "value2", ... } }
 *          - data: An object containing key-value pairs where the key is the field name and the value is the field value
 * @param   {String} id - The ID of the form to submit data for
 * @access  Public
 */
router.post('/submit/:id', submitFormData);

module.exports = router;
