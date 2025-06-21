const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3002;

// Enable CORS for all routes
app.use(cors());

// Ensure the 'public/photos' directory exists
const photosDir = path.join(__dirname, 'public/photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
}

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/photos/');
  },
  filename: (req, file, cb) => {
    // Sanitize the filename
    const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
    cb(null, `${Date.now()}-${sanitizedFilename}`);
  },
});

const upload = multer({ storage });

// Define the file upload endpoint
app.post('/upload', upload.single('media'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  // Return the public path to the uploaded file
  res.json({ path: `/photos/${req.file.filename}` });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
