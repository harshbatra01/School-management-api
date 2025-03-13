const db = require('../db');

// Function to add a school
exports.addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const sql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
        await db.execute(sql, [name, address, latitude, longitude]);

        res.status(201).json({ message: 'School added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding school', error: error.message });
    }
};

// Function to list schools sorted by proximity
exports.listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ message: 'Latitude and longitude are required' });
        }

        const sql = "SELECT *, (6371 * ACOS(COS(RADIANS(?)) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(?)) + SIN(RADIANS(?)) * SIN(RADIANS(latitude)))) AS distance FROM schools ORDER BY distance ASC";
        
        const [schools] = await db.execute(sql, [latitude, longitude, latitude]);

        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving schools', error: error.message });
    }
};
