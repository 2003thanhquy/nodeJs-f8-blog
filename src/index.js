
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import express, { urlencoded } from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
// 
import{ route} from "./resources/routes/index.js";
const app = express();
const port = 3000;
// update Change
app.use(morgan('combined'));
// 
app.use(express.urlencoded({
  extended:true
}));//html
app.use(express.json());//js


app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname, "./resources/views"));


route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})