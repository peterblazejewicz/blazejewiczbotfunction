// @ts-check
const axios = require('axios');
require('promise.prototype.finally').shim();

module.exports = function(context, req) {
  context.log('Generate session token for BotFramework');
  // @ts-ignore
  axios
    .post(
      'https://directline.botframework.com/v3/directline/tokens/generate',
      null,
      {
        headers: {
          Authorization: `Bearer ${process.env.DIRECTLINE_SECRET}`
        }
      }
    )
    .then(result => {
      context.res = {
        body: result.data,
      };
      context.done();
    })
    .catch(message => {
      context.res = {
        status: 500,
        body: message
      };
      context.done();
    });
};
