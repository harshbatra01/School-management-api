const express = require('express');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/api', schoolRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
