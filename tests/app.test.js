const request = require('supertest');
const app = require('../app');

describe('App Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body.message).toBe('Hello from CI/CD Pipeline!');
  });

  test('GET /health should return status healthy', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body.status).toBe('healthy');
  });
});