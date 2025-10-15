
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from CI/CD Pipeline!', 
    version: process.env.APP_VERSION || '1.0.0',
    timestamp: new Date().toISOString()
  });
});

//новый эндпоинт
app.get('/api/info', (req, res) => {
  res.json({ 
    app: 'CI/CD Pipeline Demo',
    version: process.env.APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

//еще один
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'John Doe',
    role: 'admin'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;


//aaa
//ааа2
//aaa3
//aaa4
//ааа5