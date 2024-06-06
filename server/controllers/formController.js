const { Field, Form, FormData } = require('../models/Field');

// Function to create a new form
exports.createForm = async (req, res) => {
    // Extract formName and fields from the request body
    const { formName, fields } = req.body;

    try {
        // Create a new form with the provided formName and fields
        const newForm = new Form({
            formName,
            fields,
        });

        // Save the new form to the database
        await newForm.save();

        // Respond with a success message and the created form
        res.status(201).json({ message: 'Form created successfully', form: newForm });
    } catch (error) {
        // If there's an error, respond with a 500 status and the error message
        res.status(500).json({ error: error.message });
    }
}

// Function to get a form by its ID
exports.getFormById = async (req, res) => {
    try {
        // Find the form by its ID from the request parameters
        const form = await Form.findById(req.params.id);

        // Respond with the found form
        return res.status(200).json(form);
    } catch (error) {
        // If there's an error, respond with a 500 status and the error message
        return res.status(500).json({ error: error.message });
    }
}

// Function to submit form data
exports.submitFormData = async (req, res) => {
    // Extract the data from the request body
    const { data } = req.body;

    try {
        // Create a new formData with the form ID from the request parameters and the data
        const formData = new FormData({
            formId: req.params.id,
            data,
        });

        // Save the formData to the database
        await formData.save();

        // Respond with a success message
        return res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        // If there's an error, respond with a 500 status and the error message
        return res.status(500).json({ error: error.message });
    }
}
