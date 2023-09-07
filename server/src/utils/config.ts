import 'dotenv/config';

const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable required in .env');
}

export default {
  PORT,
  MONGODB_URI,
};
