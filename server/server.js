import connectDB from './src/config/db.js';
import app from './src/app.js';
import config from './src/config/env.js';

const PORT = config.port;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${config.env} mode on port ${PORT}`);
  });
});
