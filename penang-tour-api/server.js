const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const { body, param, validationResult } = require('express-validator');
const TouristSpot = require('./models/TouristSpot'); // Import model
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Support loading port from environment variables

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure file upload path
const upload = multer({ dest: './uploads/' });

// Default tourist spot data
const defaultTouristSpots = [
    { id: 1, name: 'Penang Street Art', description: 'Famous street art walls in George Town, Penang.', location: 'George Town', image: 'url_to_image_1', comments: [] },
    { id: 2, name: 'Penang Hill', description: 'The highest mountain in Penang with panoramic city views.', location: 'Air Itam', image: 'url_to_image_2', comments: [] },
    { id: 3, name: 'Penang National Park', description: 'The smallest national park in Malaysia with rich natural landscapes.', location: 'Teluk Bahang', image: 'url_to_image_3', comments: [] },
];

// Initialize database default data
const initializeDatabase = async () => {
    try {
        const count = await TouristSpot.countDocuments();
        if (count === 0) {
            await TouristSpot.insertMany(defaultTouristSpots);
            console.log('Default tourist spot data successfully inserted into database!');
        } else {
            console.log('Database already has data, skipping initialization.');
        }
    } catch (error) {
        console.error('Error initializing database:', error.message);
    }
};

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/penangTour')
    .then(() => {
        console.log('Database connection successful!');
        initializeDatabase(); // Initialize default data
    })
    .catch((err) => console.error('Database connection failed:', err));

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Penang Tourism API!</h1>
        <p>Please visit the following paths to view data:</p>
        <ul>
            <li><a href="/api/tourist-spots">Get all tourist spots data</a></li>
        </ul>
    `);
});

// Get all tourist spots (supports pagination)
app.get('/api/tourist-spots', async (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Default 10 items per page
    try {
        const spots = await TouristSpot.find()
            .skip((page - 1) * limit)
            .limit(Number(limit));
        const total = await TouristSpot.countDocuments();
        res.json({ total, page: Number(page), limit: Number(limit), data: spots });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get tourist spots data', error: err.message });
    }
});

// Get single tourist spot details
app.get(
    '/api/tourist-spots/:id',
    param('id').isMongoId().withMessage('Invalid tourist spot ID'), // Validate ID
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const spot = await TouristSpot.findById(req.params.id);
            if (!spot) {
                return res.status(404).json({ message: 'Tourist spot not found' });
            }
            res.json(spot);
        } catch (err) {
            res.status(500).json({ message: 'Failed to get tourist spot details', error: err.message });
        }
    }
);

// Add new tourist spot
app.post(
    '/api/tourist-spots',
    [
        body('name').notEmpty().withMessage('Tourist spot name cannot be empty'),
        body('description').notEmpty().withMessage('Description cannot be empty'),
        body('location').notEmpty().withMessage('Location cannot be empty'),
        body('image').notEmpty().withMessage('Image URL cannot be empty'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, location, image } = req.body;

        try {
            const newSpot = new TouristSpot({ name, description, location, image });
            const savedSpot = await newSpot.save();
            res.status(201).json(savedSpot);
        } catch (err) {
            res.status(500).json({ message: 'Failed to add tourist spot', error: err.message });
        }
    }
);

// Upload image interface
app.post('/api/upload', upload.single('image'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: 'File upload failed' });
    }
    res.json({ message: 'File upload successful', filePath: `/uploads/${file.filename}` });
});

// Delete tourist spot
app.delete(
    '/api/tourist-spots/:id',
    param('id').isMongoId().withMessage('Invalid tourist spot ID'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const spot = await TouristSpot.findByIdAndDelete(req.params.id);
            if (!spot) {
                return res.status(404).json({ message: 'Tourist spot not found' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ message: 'Failed to delete tourist spot', error: err.message });
        }
    }
);

// Global error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running! Access at: http://localhost:${PORT}`);
});
