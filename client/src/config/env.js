// Centralized Client Configuration
// This prevents scattering `import.meta.env` throughout the codebase

const config = {
  env: import.meta.env.VITE_APP_ENV,
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,

  // Feature Flags or other configurations can go here
  isDev: import.meta.env.VITE_APP_ENV === 'development',
  isProd: import.meta.env.VITE_APP_ENV === 'production',
};

// Freeze the object to prevent accidental modifications during runtime
export default Object.freeze(config);
