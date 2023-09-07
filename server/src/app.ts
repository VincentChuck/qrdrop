import config from '~/utils/config';
import express from 'express';
import 'express-async-errors';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
import middleware from './utils/middleware';

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());

// app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
