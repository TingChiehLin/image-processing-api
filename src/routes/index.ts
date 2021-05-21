import express from 'express';
import imageProcess from "./imageProcess";
import imageProcessAll from "./imageProcessAll";
import logger from "../utilities/logger";

import path from 'path';

const routes = express.Router();

//To create other Routes for middleware
routes.use('/image-process', imageProcess);
routes.use('/image-process-all', imageProcessAll)

//endPoints
routes.get('/', logger, (req:express.Request, res:express.Response, next: express.NextFunction):void => {
    res.sendFile(path.join(__dirname, '../', 'views', 'Home.html'));
});

export default routes;
