import sharp, {OutputInfo, Sharp} from "sharp";
import fileExist from "./fileExist";

type DataFormat = {
    fileName: string,
    width: number,
    height: number
}

const writeData = async (imageData: DataFormat): Promise<sharp.OutputInfo | undefined> => {
    const isFileExist = fileExist(`thumb/${imageData.fileName}-${imageData.width}-${imageData.height}.jpg`)
    try {
        if (!isFileExist) {
           const result =  await sharp(`images/${imageData.fileName}.jpg`)
                .resize(imageData.width, imageData.height, {fit: "contain"})
                .jpeg({quality: 100})
                .toFile(`thumb/${imageData.fileName}-${imageData.width}-${imageData.height}.jpg`);
           return result
        } else {
            const result =  await sharp(`thumb/${imageData.fileName}-${imageData.width}-${imageData.height}.jpg`)
                .resize(imageData.width, imageData.height, {fit: "contain"})
                .jpeg({quality: 100})
                .toFile(`thumb/${imageData.fileName}-${imageData.width}-${imageData.height}.jpg`);
            return result
        }
    } catch (err) {
        console.log(err)
    }
};

export default writeData
