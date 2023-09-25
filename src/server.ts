import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
const portStr = process.env['PORT'] || '8080';
const port = parseInt(portStr, 10);

if (isNaN(port)) {
  console.error(`Invalid port: ${portStr}`);
  process.exit(1);
}

console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV !== 'production') {
dotenv.config();
// }

console.log(process.env.DATA_FIXER_KEY, 'DATA_FIXER_KEY');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
