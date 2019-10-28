const TelegramBot = require('node-telegram-bot-api');
const api_token = '953294682:AAEJOGXFZmlMay9QDohrRTJqw3lEb8VALjY';

const request = require("request")

let url = "http://localhost:5000/api/bot/some_token"

const bot = new TelegramBot(api_token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});
bot.on("polling_error", (err) => console.log(err));

bot.on('message', function(msg, match) {

    console.log(msg);

    if (msg.photo != null) {
        let fileId = msg.photo[0].file_id;
        let findPhotoUrl = `https://api.telegram.org/bot${api_token}/getFile?file_id=` + fileId;

        request.get(findPhotoUrl, (err, res, body) => {
            if (err) { console.log(err); return; }

            let data = JSON.parse(body)
            if (data.ok) {

                let path = data.result.file_path;
                let photoURL = `https://api.telegram.org/file/bot${api_token}/` + path;

                var formData = {
                    chat_id: msg.chat.id,
                    file: request(photoURL)
                };
                request.post({
                    url: url + '/recipe',
                    formData: formData
                }, async(err, res, body) => {
                    if (err) { console.log(err); return; }

                    bot.sendMessage(msg.chat.id, 'BALEEE')
                    console.log(body);
                    // console.log(JSON.parse(body))
                    // console.log(pharms);

                });

            } else {
                console.log("Some error");
                return;
            }


        })


    } else {
        bot.sendMessage(msg.chat.id, 'asd')
    }



})