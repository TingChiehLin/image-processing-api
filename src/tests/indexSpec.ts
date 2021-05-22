import request from "supertest";
import {app} from '../index';

import fileExist from '../utilities/fileExist';
import writeData from '../utilities/writeData';
import getRandomInt from '../utilities/getRandomInt';

//Test single image file
describe("image file", () => {
    const width = getRandomInt(1500)
    const height = getRandomInt(1500)
    it('should generate testFile image with random width and height on imageProcess function correctly',async (done) => {
        await request(app).get(`/image-process?filename=test&width=${width}&height=${height}`).send();
        expect(fileExist(`thumb/test-${width}-${height}.jpg`)).toBe(true)
        done();
    });

    it('should run correctly on writeData function correctly',async (done) => {
        const imageData = writeData({
            fileName: "fjord",
            width: 200,
            height: 200
        });
        expect(imageData).toBeTruthy(true);
        done();
    });

    it('should not include a list of image files name. Wrong parameter filename name', async (done) => {
        const fileName = await request(app).get('/image-process').query('filename');
        expect(fileName).not.toMatch('apple');
        done();
    });
});

describe('Testing GET / endpoint', () => {
    it('it should return status code 404 status. If filename is not included', async (done) => {
        const result = await request(app).get('/image-process?filename=apple&width=200&height=200').send();
        expect(result.status).not.toBe(200);
        done();
    });
});



