require('dotenv').config();

module.exports = {
  messenger: {
    appId: process.env.MESSENGER_APP_ID,
    appSecret: process.env.MESSENGER_APP_SECRET,
    accessToken: process.env.MESSENGER_ACCESS_TOKEN,
    verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
  },
};
