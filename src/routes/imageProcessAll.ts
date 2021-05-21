import express from 'express';
import fs from 'fs';
import sharp from "sharp";
import path from 'path';

const imageProcessAll = express.Router();

const directory_name = "images";
const fileNames = fs.readdirSync(directory_name);

const getExtension = async (fileNmae: string) => {
    let ext = path.extname(fileNmae || '').split('.');
    return ext[ext.length - 1];
}

const writeData = async () => {
    try {
        await fileNames.forEach(async (file) => {
            const fileFormat = await getExtension(file);
            if (fileFormat === 'svg') {
                return
            } else {
                await sharp(`images/${file}`)
                    .resize({fit: "contain"})
                    .jpeg({quality: 100})
                    .toFile(`thumb/${file}`);
            }
        })
    } catch (err) {
        console.log(err)
    }
};

imageProcessAll.get('/', (req:express.Request, res: express.Response):any => {
    if (res.status(200)) {
        writeData();
    } else {
        res.status(400);
        res.sendFile(path.join(__dirname, '../', 'views', '404.html'));
    }
});


export default imageProcessAll;
