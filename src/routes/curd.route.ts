import express, { Request, Response } from 'express';
import curd from '../db/models/curd';
import Hospital from '../db/models/hospital';

const userrouter = express.Router();

userrouter.use(express.json());

userrouter.get('/hospitals', async (req: Request, res: Response) => {
  try {
    const hospitals = await Hospital.findAll();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});


export default userrouter;


