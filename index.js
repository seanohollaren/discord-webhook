const got = require('got');

const webhookUrl = 'https://discordapp.com/api/webhooks/669793146586136586/cNxmlXSDJmVg0B57Ge0OxzQT3nvbiyhoRfFgn4lsFIPMHqXKsRTG68ERiLpLRbPGEJVP';

(async () => {
    const response = await got.post(webhookUrl, {
        json: {
            content: 'Test'
        }
    });

    console.log('Response: ', response);
})();