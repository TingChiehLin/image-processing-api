import express from 'express';
import path from "path";
import writeData from "../utilities/writeData";

const imageProcess = express.Router();

imageProcess.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
        const fileName = String(req.query.filename);
        const width = Number(req.query.width) || null;
        const height = Number(req.query.height) || null;

        if (height && width && fileName) {
            const result = await writeData({
                fileName,
                width,
                height
            })
            res.status(200).sendFile(path.join(__dirname, '../../', 'thumb', `/${fileName}-${width}-${height}.jpg`));
        } else {
            const error = new Error('Input format errors');
            next(error);
            res.status(404).send("Error Input Format");
            return
        }
    }
);


export default imageProcess;
