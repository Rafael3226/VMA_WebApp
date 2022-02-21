import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import testMongoConnection from './services/testMongoConnection';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 5000;

testMongoConnection();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
