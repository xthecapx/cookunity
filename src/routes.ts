import express, { Request, Response, NextFunction } from 'express';
import { getStatistics, postTraces } from './services';

const router = express.Router();

router.post('/traces', async(req: Request, res: Response, next: NextFunction) => {
    /* #swagger.parameters['obj'] = { 
      in: 'body',
      description: 'Get traces from IP',
      '@schema': { 
          "required": ["ip"], 
          "properties": { 
              "ip": { 
                  "type": "string", 
                  "example": "210.138.184.59" 
              } 
          } 
      } 
  } */
  const { ip } = req.body;

  try {
    res.status(200).json(await postTraces(ip));
  } catch (e) {
    next(e);
  }
});

router.get('/statistics', (_req: Request, res: Response, next: NextFunction) => {
  // #swagger.summary = 'Get statistics of the traces'
  try {
    res.status(200).json(getStatistics());
  } catch(e) {
    next(e);
  }
});

export default router;
