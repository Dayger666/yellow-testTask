import {testsAPI} from "../api/api";


describe('testing of api tests ', async () => {
    test('testing request status get', async () => {
        const response = await testsAPI.get();
        expect(response.status).toEqual(200);
    });
    test('testing request method get', async () => {
        const response = await testsAPI.get();
        expect(response.config.method).toEqual("get");
    });


    test('testing request status post', async () => {
        const response = await testsAPI.post();
        expect(response.status).toEqual(201);
    });
    test('testing request method post', async () => {
        const response = await testsAPI.post();
        expect(response.config.method).toEqual("post");
    });

    test('testing request status put', async () => {
        const response = await testsAPI.put();
        expect(response.status).toEqual(200);
    });
    test('testing request method put', async () => {
        const response = await testsAPI.put();
        expect(response.config.method).toEqual("put");
    });

    test('testing request status delete', async () => {
        const response = await testsAPI.delete();
        expect(response.status).toEqual(200);
    });
    test('testing request method delete', async () => {
        const response = await testsAPI.delete();
        expect(response.config.method).toEqual("delete");
    });
});