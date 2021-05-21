import express, {Application} from 'express';
import routes from './routes/index';
import path from "path";

export const app:Application = express();
const port = 3000;

app.use(express.static('public'));

//Use middleware by use from routes
app.use('/', routes);

//404 Not Found Page
app.use((req: express.Request,res: express.Response) => {
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//start the Express server
app.listen(port, () => {
   console.log(`Server is working. Port is ${port}`);
});
