const express = require('express');
const { addSchool, listSchools } = require('../controllers/schoolController');
const router = express.Router();

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools); // Take care of how it is singular 'School' in the get request and 'Schools' in the post request.

module.exports = router;
