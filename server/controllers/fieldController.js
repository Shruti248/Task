const Field = require('../models/Field');

// Function to create a new field
exports.createField = async (req, res) => {
    try {
        // Extract fieldName and fieldType from the request body
        const { fieldName, fieldType } = req.body;

        // Check if both fieldName and fieldType are provided
        if (!fieldName || !fieldType) {
            // If not, respond with a 400 status and an error message
            return res.status(400).json({ msg: 'Missing required fields: fieldName and fieldType', status: false });
        }

        // Create a new field with the provided fieldName and fieldType
        const newField = new Field({ fieldName, fieldType });

        // Save the new field to the database
        await newField.save();

        // Respond with a success message and a status of 201 (Created)
        return res.status(201).json({ msg: 'Field created successfully!', status: true });
    } catch (err) {
        // If there's an error, log it and respond with a 500 status and an error message
        console.error('Error creating field:', err);
        return res.status(500).json({ msg: 'Error creating field', status: false });
    }
}

// Function to get all fields
exports.getAllFields = async (req, res) => {
    try {
        // Find all fields in the database
        const fields = await Field.find();

        // Respond with the found fields and a status of 200 (OK)
        res.status(200).json(fields);
    } catch (error) {
        // If there's an error, respond with a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
};
