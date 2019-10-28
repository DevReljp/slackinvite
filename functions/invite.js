const https = require('https');

exports.handler = (event, context, callback) => {
  const data = JSON.stringify({
    'token': process.env['TOKEN'],
    'email': event.email,
    'set_active': True
  });
  const options = {
    hostname: 'slack.com',
    port: 443,
    path: '/api/users.admin.invite',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      const response = {
          statusCode: 200,
          body: JSON.stringify(d),
      };
      return response;
    })
  })
}
