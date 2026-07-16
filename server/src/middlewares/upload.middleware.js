import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import s3Client from '../utils/s3.js';
import config from '../config/env.js';
import fs from 'fs';

// If S3 is configured, use it. Otherwise, use local fallback.
let storage;

if (s3Client && config.aws.bucket) {
  storage = multerS3({
    s3: s3Client,
    bucket: config.aws.bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `nominations/${uniqueSuffix}${path.extname(file.originalname)}`);
    },
  });
} else {
  // Local fallback if AWS S3 isn't configured yet
  const uploadDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, `nomination-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
  });
}

// File filter to allow only specific types (e.g., images, PDFs)
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, PDF, and Word docs are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: fileFilter,
});

export default upload;
