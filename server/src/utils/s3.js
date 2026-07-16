import { S3Client } from '@aws-sdk/client-s3';
import config from '../config/env.js';

let s3Client = null;

if (config.aws.accessKeyId && config.aws.secretAccessKey && config.aws.region) {
  s3Client = new S3Client({
    region: config.aws.region,
    credentials: {
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
    },
  });
} else {
  console.warn("⚠️ AWS S3 credentials missing. File uploads will fail if attempted.");
}

export default s3Client;
