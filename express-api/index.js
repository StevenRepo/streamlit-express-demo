import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());


app.get('/hello', (req, res) => {
  const name = req.query.name || 'CSA';
  res.json({ ok: true, greeting: `Hello ${name}` });
});


// Health for CI/containers
app.get('/health', (_req, res) => res.json({ status: 'ok' }));


if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Express API running on :${port}`));
}


export default app;
