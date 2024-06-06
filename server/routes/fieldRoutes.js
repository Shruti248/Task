const express = require('express');
const router = express.Router();
const { createField, getAllFields } = require('../controllers/fieldController');

/**
 * @route   POST /fields/add
 * @desc    Add a new field to the field master
 * @body    { "fieldName": "string", "fieldType": "string" }
 *          - fieldName: The name of the field (e.g., "Name", "Email")
 *          - fieldType: The type of the field (e.g., "Input", "Select", "Radio", "Checkbox", "File Upload")
 * @access  Public
 */
router.post('/add', createField);

/**
 * @route   GET /fields
 * @desc    Get all fields from the field master
 * @access  Public
 */
router.get('/', getAllFields);

module.exports = router;
