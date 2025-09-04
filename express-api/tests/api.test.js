import request from 'supertest';
import app from '../index.js';


describe('GET /hello', () => {
  it('returns ok:true and greeting', async () => {
    const res = await request(app).get('/hello?name=Steven');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.greeting).toContain('Steven');
  });
});
