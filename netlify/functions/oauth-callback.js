const axios = require('axios');

exports.handler = async (event, context) => {

  const query = event.queryStringParameters;
  const code = query.code;
  const account = query.account || 'acme';

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Falta el parámetro code' })
    };
  }
  
  const CLIENT_ID = process.env.CLIENT_ID;         //  Client ID
  const CLIENT_SECRET = process.env.CLIENT_SECRET;   //  Client Secret
  const REDIRECT_URI = process.env.REDIRECT_URI;     //  URL callback

  try {

    const response = await axios.post(`https://${account}.gorgias.com/oauth/token`, null, {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET
      },
      params: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error("Error al obtener el token:", error.response ? error.response.data : error.message);
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: error.message, details: error.response ? error.response.data : null })
    };
  }
};