const got = require('got');

const webhookUrl = 'https://discordapp.com/api/webhooks/.../...';

(async () => {
    const response = await got.post(webhookUrl, {
        json: {
            content: 'Test'
        }
    });

    console.log('Response: ', response);
})();
