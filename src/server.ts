import express, { Request, Response } from 'express';

const app = express();
const portStr = process.env['PORT'] || '8080';
const port = parseInt(portStr, 10);

if (isNaN(port)) {
  console.error(`Invalid port: ${portStr}`);
  process.exit(1);
}

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
