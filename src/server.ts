import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';

const app = express();
app.use(express.json());
const portStr = process.env['PORT'] || '8080';
const port = parseInt(portStr, 10);

if (isNaN(port)) {
  console.error(`Invalid port: ${portStr}`);
  process.exit(1);
}

dotenv.config();

app.use('/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
