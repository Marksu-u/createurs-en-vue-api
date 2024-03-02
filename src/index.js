import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectToMongoDB from './db/mongodb';

import apiRoutes from './routes/index.routes';

dotenv.config();
connectToMongoDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
