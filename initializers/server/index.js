import express from 'express';
import path from 'path';
import render from './render';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(process.cwd(), 'public')));
app.set('views', path.resolve(process.cwd(), 'public'));
app.set('views engine', 'ejs');

app.get(
  '*',
  (req, res) => {
    const content = render(req,res);

    res.status(200);
    res.render('index', { content });
  }
)

app.listen(PORT,
  () => console.log(`Server is listening on port ${PORT}`)
);