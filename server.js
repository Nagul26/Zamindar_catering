import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

// Resolve paths in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the local data directory exists to store booking entries
const DATA_DIR = path.join(__dirname, 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(BOOKINGS_FILE)) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2));
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve production build files
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// API Booking Route
app.post('/api/booking', async (req, res) => {
  const { name, phone, email, eventType, eventDate, guestCount, location, message } = req.body;

  // Simple Validation
  if (!name || !phone || !email || !eventType || !eventDate || !guestCount || !location) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields (except message) are required to complete the booking inquiry.'
    });
  }

  const newBooking = {
    id: Date.now().toString(),
    name,
    phone,
    email,
    eventType,
    eventDate,
    guestCount: parseInt(guestCount, 10),
    location,
    message: message || '',
    createdAt: new Date().toISOString()
  };

  try {
    // 1. Read existing bookings
    const fileContent = fs.readFileSync(BOOKINGS_FILE, 'utf8');
    const bookings = JSON.parse(fileContent);

    // 2. Append new booking
    bookings.push(newBooking);

    // 3. Write back to file
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));

    console.log(`[SERVER] Success: Recorded booking for ${name} - ${eventType} on ${eventDate}`);

    /* =========================================================================
       Nodemailer Email Notification (Optional - Uncomment & Configure SMTP below)
       =========================================================================
       
       const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST || 'smtp.gmail.com',
         port: process.env.SMTP_PORT || 587,
         secure: false, // true for 465, false for other ports
         auth: {
           user: process.env.SMTP_USER || 'your-email@gmail.com',
           pass: process.env.SMTP_PASS || 'your-app-password',
         },
       });

       const mailOptions = {
         from: '"Zamindar Catering" <no-reply@zamindarcatering.com>',
         to: process.env.ADMIN_EMAIL || 'concierge@zamindarcatering.com',
         subject: `New Booking Inquiry - ${name} (${eventType})`,
         html: `
           <h2>New Booking Inquiry Received</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Event Type:</strong> ${eventType}</p>
           <p><strong>Event Date:</strong> ${eventDate}</p>
           <p><strong>Guest Count:</strong> ${guestCount}</p>
           <p><strong>Venue Location:</strong> ${location}</p>
           <p><strong>Message / Requirements:</strong> ${message || 'None'}</p>
           <hr />
           <p>Logged in local database: <code>data/bookings.json</code></p>
         `
       };

       await transporter.sendMail(mailOptions);
       console.log('[SERVER] Email notification sent successfully.');
       
       ========================================================================= */

    return res.status(200).json({
      status: 'success',
      message: 'Your booking inquiry was recorded successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('[SERVER] Booking error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error while saving the booking inquiry. Please try again.'
    });
  }
});

// Fallback route to serve frontend index.html for Single Page Application
app.get(/.*/, (req, res) => {
  const indexHtmlPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    res.sendFile(indexHtmlPath);
  } else {
    res.status(404).send('Application builds are not ready yet. Please run "npm run build" first.');
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`[SERVER] Zamindar Catering backend API listening on port ${PORT}`);
});
