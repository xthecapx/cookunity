import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
const portStr = process.env['PORT'] || '8080';
const port = parseInt(portStr, 10);

if (isNaN(port)) {
  console.error(`Invalid port: ${portStr}`);
  process.exit(1);
}

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
