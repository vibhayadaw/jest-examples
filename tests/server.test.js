const request = require('supertest');
const app = require('../src/server');

describe('the server API', () => {

    it('returns all users', async () => {
        const response = await request(app).get('/users');
        expect(response.body).toMatchSnapshot();
    });
    it('returns one user', async () => {
        const response = await request(app).get('/user/1');
        expect(response.body).toMatchSnapshot();
    });
});