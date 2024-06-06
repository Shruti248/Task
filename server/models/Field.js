const mongoose = require('mongoose');

// Schema for individual fields in a form
const FieldSchema = new mongoose.Schema({
  fieldName: {
    type: String,
    required: true,
  },
  fieldType: {
    type: String,
    required: true,
    enum: ['Input', 'Select', 'Radio', 'Checkbox', 'File Upload'],
  },
});

// Schema for a form, which includes an array of fields
const FormSchema = new mongoose.Schema({
  formName: {
    type: String,
    required: true,
  },
  fields: [FieldSchema],
});

// Schema for storing form data submissions
const FormDataSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
    required: true,
  },
  data: {
    type: Map,
    of: String,
    required: true,
  },
});

module.exports = {
  Field: mongoose.model('Field', FieldSchema),
  Form: mongoose.model('Form', FormSchema),
  FormData: mongoose.model('FormData', FormDataSchema),
};
