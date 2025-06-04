import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // OVO MORA DA BI RADIO POST SA REQ BODY
 

app.use('/api/posts', posts);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})