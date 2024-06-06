const express = require('express')
require('dotenv').config();
const connectDB = require('./db');
const morgan = require('morgan');

const app = express();

app.use(express.json())
app.use(morgan("dev"));

connectDB();

app.use('/fields', require('./server/routes/fieldRoutes'))
app.use('/forms', require('./server/routes/formRoutes'))

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})

// Handling Error
// process.on("unhandledRejection", err => {
//     console.log(`An error occurred: ${err.message}`)
//     server.close(() => process.exit(1))
// })
