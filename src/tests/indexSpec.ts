import request from "supertest";
import {app} from '../index';

import fileExist from '../utilities/fileExist';
import writeData from '../utilities/writeData';
import getRandomInt from '../utilities/getRandomInt';

//Test single image file
describe("image file", () => {
    it('should run correctly on imageProcess function correctly',async (done) => {
        const result = await request(app).get(`/image-process?filename=test&width=${getRandomInt(1000)}&height=${getRandomInt(1000)}`).send();
        expect(result).toBeTruthy(true);
        done();
    });

    it('should process test file expects correctly', () => {
        const testFile = fileExist('thumb/test.jpg')
        expect(testFile).toBe(true);
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



