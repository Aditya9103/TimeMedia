import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import config from './config/env.js';

import adminRoutes from './routes/admin.routes.js';
import contactRoutes from './routes/contact.routes.js';
import nominationRoutes from './routes/nomination.routes.js';
import blogRoutes from './routes/blog.routes.js';
import awardRoutes from './routes/award.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
// Professional CORS Configuration
const allowedOrigins = [
  config.clientUrl,
].filter(Boolean); // Remove undefined values

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['set-cookie']
};

app.use(cors(corsOptions));

app.use(morgan('dev'));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/nominations', nominationRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/awards', awardRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;
