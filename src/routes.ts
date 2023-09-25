import express, { Request, Response, NextFunction } from 'express';
import { getStatistics, postTraces } from './services';

const router = express.Router();

router.post('/traces', async(req: Request, res: Response, next: NextFunction) => {
  const { ip } = req.body;

  try {
    res.status(200).json(await postTraces(ip));
  } catch (e) {
    next(e);
  }
});

router.get('/statistics', (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(getStatistics());
  } catch(e) {
    next(e);
  }
});

export default router;
