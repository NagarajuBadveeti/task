// routes/languageRoute.ts
import express, { Request, Response } from 'express';
 import Anusha from '../db/models/anusha';

const anushaRoute = express.Router();

anushaRoute.use(express.json());

anushaRoute.get('/anu', async (req: Request, res: Response) => {
  try {
    const anusha = await Anusha.findAll();
    res.json(anusha);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

anushaRoute.post('/anu', async (req: Request, res: Response) => {
  const {id, name, address,contact} = req.body;

  try {
    const newHospital = await Anusha.create({id, name, address,contact});
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});



export default  anushaRoute;
