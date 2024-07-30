// // routes/hospitalroute.ts
// import express, { Request, Response } from 'express';
// import Hospital from '../db/models/hospital';

// const hospitalRoute = express.Router();

// hospitalRoute.use(express.json());

// hospitalRoute.get('/hospitals', async (req: Request, res: Response) => {
//   try {
//     const hospitals = await Hospital.findAll();
//     res.json(hospitals);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });

// hospitalRoute.post('/hospitals1', async (req: Request, res: Response) => {
//   const { id, languagename, languagecode } = req.body;

//   try {
//     const newHospital = await Hospital.create({ id, languagename, languagecode });
//     res.status(201).json(newHospital);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });



// export default hospitalRoute;
