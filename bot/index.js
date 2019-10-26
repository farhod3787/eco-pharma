const TelegramBot = require('node-telegram-bot-api');
const api_token = '811966278:AAGLZCcby4zzT0q1_6EvpQUTcwAavD9k1UQ';
const bot = new TelegramBot(api_token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});
const Language = require("./language.json")

const users = [];
const checkedPharms = [];
const langUsers = [];

// for information
const WEB_SITE = "https://eco-pharmacy.herokuapp.com/"
const Global = 'https://eco-pharmacy.herokuapp.com/api/bot/some_token'
const Local = "http://localhost:5000/api/bot/some_token"

let pharms = [];
var bookPages = 100;

let { BUTTONS } = require("./buttons")
let Functions = require("./addFuntions")

const request = require("request")

function getPharms() {
    request.get(Global + '/pharms', (err, res, body) => {
        if (err) { console.log(err); return; }
        pharms = (JSON.parse(body)).pharms
        console.log(pharms.length);
        // console.log(JSON.parse(body))
        // console.log(pharms);

    })
}

getPharms()

bot.on("polling_error", (err) => console.log(err));

bot.onText(/\/start/, function(msg, match) {
    Functions.addLanUser(langUsers, msg.chat.id)
    console.log(langUsers);

    bot.sendMessage(msg.chat.id, 'Tilni tanlang\nПожалуйста, выберите язык', {
        reply_markup: {

            inline_keyboard: [
                [{ text: "Русский", 'callback_data': "lan ru" }, { text: "O'zbek tili", 'callback_data': "lan uz" }]

            ]
        }
    })

})


bot.on('chosen_inline_result', (result) => {
    let chatId = result.from.id;
    let pharm = pharms.find(pharm => pharm._id === result.result_id);

    let userLanIndex = langUsers.findIndex(x => x.userId == chatId);
    let thisLan = langUsers[userLanIndex].lan;

    if (pharm) {
        Functions.checkParm(checkedPharms, pharm, chatId)
            // console.log(checkedPharms);
        let sum = "",
            count = "";
        // console.log(result);
        // Есть сум
        if (thisLan == 'ru') {
            sum = "сум";
            count = "есть"
        } else {
            sum = "so'm";
            count = "ta bor"
        }

        bot.
        sendMessage(chatId, `💡 ${pharm.name} \n💳${pharm.price} ${sum} \n✅ ${pharm.rate ? pharm.rate : Language[thisLan].text.name12 } ${ pharm.rate?count:""}`).then(() => {
            bot.sendMessage(chatId, `${pharm.inform}`, {
                reply_markup: {
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    hide_keyboard: true,
                    inline_keyboard: [
                        [{ text: Language[thisLan].button.name3, 'callback_data': 'buy' }],
                        [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' }],
                        [{ text: Language[thisLan].button.name1, 'callback_data': 'back' }],
                    ]
                }
            })
        });


    } else {
        bot.sendMessage(chatId, Language[thisLan].text.name10)
    }
})


bot.on('inline_query', (msg) => {
    getPharms()
        // console.log("-------------------------------------------------------------------");

    let userLanIndex = langUsers.findIndex(x => x.userId == msg.from.id);
    let thisLan = langUsers[userLanIndex].lan;
    // console.log(msg.from.id);

    let result = [];
    let localPharms = [];
    for (let i = 0; i < pharms.length; i++) {

        if (pharms[i].name.toLowerCase().includes(msg.query.toLowerCase().toString())) {

            localPharms.push(pharms[i])
        }

    }

    if (localPharms.length == 0) {
        let title = "",
            desc = "",
            msg_text = "";
        if (thisLan == 'ru') {
            title = "Такой препарат не доступен";
            desc = "Не доступно";
            msg_text = "🚑 *Такой препарат не доступен*";
        } else {
            title = "Bunday dori mavjud emas";
            desc = "Mavjud emas";
            msg_text = "🚑 *Bunday dori mavjud emas*";
        }

        result.push({
            type: 'article',
            id: `aaaaaa`,
            // photo_url: 'https://image.shutterstock.com/image-photo/cheerful-pharmacist-chemist-woman-standing-260nw-549938593.jpg',
            thumb_url: 'https://hybridpharm.com/wp-content/uploads/2018/03/hybridpharm-icon-pharmacy-solid-white.png',
            title: `${title}`,
            description: `${desc}`,
            // caption: 'Test caption',
            "input_message_content": {
                "message_text": `${msg_text}`,
                "parse_mode": "markdown"
            }
            // input_message_content: {
            //     message_text: `Article ${i}`
            // }
        })
    }

    let sum = "",
        count = "";

    if (thisLan == 'ru') {
        sum = "сум";
        count = "есть"
    } else {
        sum = "so'm";
        count = "ta bor"
    }

    localPharms.forEach(pharm => {


        result.push({
            type: 'article',
            id: `${pharm._id}`,
            // photo_url: 'https://image.shutterstock.com/image-photo/cheerful-pharmacist-chemist-woman-standing-260nw-549938593.jpg',
            thumb_url: 'https://hybridpharm.com/wp-content/uploads/2018/03/hybridpharm-icon-pharmacy-solid-white.png',
            title: `${pharm.name} \n${pharm.price} ${sum}`,
            description: `${pharm.rate} ${count}`,
            // caption: 'Test caption',
            "input_message_content": {
                "message_text": `🚑 *${pharm.name}*`,
                "parse_mode": "markdown"
            }
            // input_message_content: {
            //     message_text: `Article ${i}`
            // }
        })
    })

    let query = encodeURIComponent(msg.query.trim());
    bot.answerInlineQuery(msg.id, result);

    // bot.editMessageReplyMarkup({}, { chat_id: result.message.chat.id, message_id: result.message.message_id });
});

bot.on('callback_query', (result) => {
    let chatId = result.from.id;
    let userLanIndex = langUsers.findIndex(x => x.userId == chatId);
    let thisLan = langUsers[userLanIndex].lan;

    if (result.data === 'back') {
        // console.log(result);

        bot.deleteMessage(chatId, result.message.message_id);
        bot.sendMessage(chatId, 'Ok', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                    [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                        { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                    ],
                    [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]
                    // [BUTTONS.find],
                    // [BUTTONS.bucket]
                ],
                one_time_keyboard: true
            }
        });

    } else if (result.data === 'buy') {

        let thisRate = (checkedPharms.find(checkP => checkP.userId == chatId)).rate
        bot.deleteMessage(chatId, result.message.message_id);

        if (thisRate) {
            bot.sendMessage(chatId, Language[thisLan].text.name1 + ': 1', getPagination(1, thisRate, thisLan));
        } else {
            bot.sendMessage(chatId, Language[thisLan].text.name11, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                        [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                            { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                        ],
                        [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]

                    ]
                }
            });
        }

    } else if (result.data === 'bucket') {
        console.log("------------------------------------------");
        // bot.sendMessage(chatId, 'Ok');
        let user = users.find(user => user.userId == chatId)
        let inline_keyboard = [];
        let i = 0;
        if (user) {
            let summ = 0;
            user.pharms.forEach(pharrm => {
                summ += (pharms.find(phaarm => phaarm._id == pharrm)).price * Number(user.counts[i]);

                inline_keyboard.push([{ text: `${BUTTONS.delete_pharm.text} ${(pharms.find(ph=>ph._id == pharrm)).name} ${user.counts[i]} `, 'callback_data': `${BUTTONS.delete_pharm.callback_data} ${(pharms.find(ph=>ph._id == pharrm))._id}` }])
                i++;
            })

            if (user.pharms.length > 0) {
                inline_keyboard.push([{ text: Language[thisLan].button.name7, 'callback_data': 'delete_all' }])
                inline_keyboard.push([{ text: Language[thisLan].button.name8, 'callback_data': 'order' }])
                inline_keyboard.push([{ text: Language[thisLan].button.name1, 'callback_data': 'back' }])
                bot.deleteMessage(chatId, result.message.message_id);

                let texxt = "";

                if (thisLan == 'ru') {
                    texxt = `💳 Общая сумма: ${summ} сумма \n🚛 Доставка: Решено звонком модератора`;
                } else {
                    texxt = `💳 Jami summa: ${summ} сум \n🚛 Yetkazib berish: Moderatorning sizga qiladigan qo\'ng\'irog\'i orqali hal bo\'ladi`;
                }


                bot.sendMessage(chatId, texxt, { reply_markup: { inline_keyboard } })
            } else {
                bot.answerCallbackQuery(result.id, Language[thisLan].text.name2, true);
            }
        } else {
            bot.answerCallbackQuery(result.id, Language[thisLan].text.name3, true);
        }
        // bot.answerCallbackQuery(chatId, 'hello', true);
    } else if (result.data.includes('rate')) {
        // Number(result.data.split(' ')[1])
        let pharm_id = (checkedPharms.find(chPharm => chPharm.userId == chatId)).pharm_id
        Functions.addPharmAndCount(users, pharm_id, Number(result.data.split(' ')[1]), chatId)
        console.log(users);

        bot.deleteMessage(chatId, result.message.message_id);
        bot.sendMessage(chatId, Language[thisLan].text.name4, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                    [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                        { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                    ],
                    [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]
                    // [BUTTONS.find],
                    // [BUTTONS.bucket],
                ]
            }
        })
    } else if (result.data.includes('delete')) {
        if (result.data == "delete_all") {
            let thisUserId = 0,
                i = 0;

            users.forEach(userr => {
                if (userr.userId == chatId) {
                    thisUserId = i;
                }
                i++;
            })
            users[thisUserId].pharms = []
            users[thisUserId].counts = []
            console.log(users);

            bot.deleteMessage(chatId, result.message.message_id);
            bot.sendMessage(chatId, 'Ok', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                        [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                            { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                        ],
                        [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]
                        // [BUTTONS.find],
                        // [BUTTONS.bucket],
                    ]
                }
            })
        } else {
            let thisUserId = 0,
                i = 0;
            let pph = [],
                cco = [];
            console.log(users);

            users.forEach(userr => {
                if (userr.userId == chatId) {
                    thisUserId = i;
                }
                i++;
            })
            let pharmId = 0;
            users[thisUserId].pharms.find(pha => {
                if (pha == result.data.split(' ')[1]) {

                    return pha;
                }
                pharmId++;
            })

            for (let j = 0; j < users[thisUserId].pharms.length; j++) {
                if (j != pharmId) {
                    pph.push(users[thisUserId].pharms[j])
                }
            }
            for (let k = 0; k < users[thisUserId].counts.length; k++) {
                if (k != pharmId) {
                    cco.push(users[thisUserId].counts[k])
                }
            }

            users[thisUserId].pharms = pph;
            users[thisUserId].counts = cco;
            // console.log(users);


            bot.deleteMessage(chatId, result.message.message_id);
            bot.sendMessage(chatId, 'Ok', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                        [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                            { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                        ],
                        [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]
                        // [BUTTONS.find],
                        // [BUTTONS.bucket],
                    ]
                }
            })
        }
    } else if (result.data.includes('order')) {
        users[users.findIndex(x => x.userId == chatId)].orderStep = 1;

        bot.deleteMessage(chatId, result.message.message_id);
        bot.sendMessage(chatId, Language[thisLan].text.name5, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: Language[thisLan].button.name1, 'callback_data': 'back' }]
                    // [BUTTONS.back]
                ]
            }
        })
    } else if (result.data.includes('allow')) {
        let userIndex = users.findIndex(x => x.userId == chatId);
        let newOrder = {...users[userIndex] };

        users[userIndex].orderStep = 0;
        users[userIndex].pharms = [];
        users[userIndex].counts = [];
        users[userIndex].description = "";

        // send request
        // console.log(newOrder);

        request.post(Global + '/orders', {
            json: newOrder
        }, async(err, res, body) => {
            if (err) { console.log(err); return; }

            console.log(body);
            // console.log(JSON.parse(body))
            // console.log(pharms);

        })

        bot.deleteMessage(chatId, result.message.message_id);
        bot.answerCallbackQuery(result.id, Language[thisLan].text.name6, true);
        bot.sendMessage(chatId, Language[thisLan].text.name7)
    } else if (result.data.includes('lan')) {

        langUsers[userLanIndex].lan = result.data.split(' ')[1];

        thisLan = langUsers[userLanIndex].lan;

        bot.sendMessage(chatId, 'Ok', {
            reply_markup: {
                resize_keyboard: true,
                keyboard: [
                    [{ text: Language[thisLan].button.name6, request_contact: true }]

                ],
                one_time_keyboard: true,
                remove_keyboard: true,
            }
        })

    } else if (result.data.includes('about')) {
        // WEB_SITE
        let texxt = "";

        if (thisLan == 'ru') {
            texxt = `♨️Если вы хотите, чтобы получить продукт проще. ${WEB_SITE} к вашим услугам`;
        } else {
            texxt = `♨️Mahsulot olishni yanada osonroq olishni istasangiz. ${WEB_SITE} xizmatingizda`;
        }

        bot.deleteMessage(chatId, result.message.message_id);
        bot.sendMessage(chatId, texxt, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: Language[thisLan].button.name1, 'callback_data': 'back' }]
                ],

            }
        })
    } else if (result.data.includes('edit_lng')) {

        bot.deleteMessage(chatId, result.message.message_id);
        bot.sendMessage(chatId, 'Tilni tanlang\nПожалуйста, выберите язык', {
            reply_markup: {

                inline_keyboard: [
                    [{ text: "Русский", 'callback_data': "edited ru" }, { text: "O'zbek tili", 'callback_data': "edited uz" }],
                    [{ text: Language[thisLan].button.name1, 'callback_data': 'back' }]

                ]
            }
        })

    } else if (result.data.includes('edited')) {

        langUsers[userLanIndex].lan = result.data.split(' ')[1];

        thisLan = langUsers[userLanIndex].lan;

        bot.deleteMessage(chatId, result.message.message_id);
        bot.sendMessage(chatId, 'Ok', {
            reply_markup: {
                resize_keyboard: true,
                inline_keyboard: [
                    [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                    [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                        { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                    ],
                    [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]
                ],
                one_time_keyboard: true,
                remove_keyboard: true,
            }
        })

    } else {
        // console.log("BBBBBBBBBBBBBBBBBBBBBBB");

    }

})


function getPagination(current, maxpage, thisLan) {
    var keys = [];
    if (current > 1) keys.push({ text: `«1`, callback_data: '1' });
    if (current > 2) keys.push({ text: `‹${current-1}`, callback_data: (current - 1).toString() });
    keys.push({ text: `-${current}-`, callback_data: current.toString() });
    if (current < maxpage - 1) keys.push({ text: `${current+1}›`, callback_data: (current + 1).toString() })
    if (current < maxpage) keys.push({ text: `${maxpage}»`, callback_data: maxpage.toString() });

    return {
        reply_markup: {
            inline_keyboard: [keys, [{ text: Language[thisLan].button.name5, 'callback_data': ('rate ' + `${current}`) }]]
        }
    };
}

bot.on('callback_query', function(message) {
    if (!message.data.includes('rate') && !message.data.includes('bucket') && !message.data.includes('buy') && !message.data.includes('back') && !message.data.includes('delete') && !message.data.includes('order') && !message.data.includes('allow') && !message.data.includes('lan') && !message.data.includes('about') && !message.data.includes('edit_lng') && !message.data.includes('edited')) {

        let thisRate = (checkedPharms.find(checkP => checkP.userId == message.message.chat.id)).rate

        let userLanIndex = langUsers.findIndex(x => x.userId == message.message.chat.id);
        let thisLan = langUsers[userLanIndex].lan;

        var msg = message.message;
        var editOptions = Object.assign({}, getPagination(parseInt(message.data), thisRate, thisLan), { chat_id: msg.chat.id, message_id: msg.message_id });
        bot.editMessageText(Language[thisLan].text.name1 + ': ' + message.data, editOptions);

    }
});
// bot.on('inline_query', (msg) => {
//     var result = [];

//     for (let i = 0; i < 5; i++) {
//         result.push({
//             type: 'article',
//             id: `${i}`,
//             title: `Title ${i}`,
//             "input_message_content": {
//                 "message_text": `Article ${i}`
//             }
//         })
//     }

//     bot.answerInlineQuery(msg.id, result).catch(e => {
//         console.log(e);
//         console.log("_____________________________");

//     });
// })


bot.on('message', (msg) => {
    let chatId = msg.chat.id;
    Functions.addLanUser(langUsers, msg.chat.id)

    let userLanIndex = langUsers.findIndex(x => x.userId == chatId);
    let thisLan = langUsers[userLanIndex].lan;

    if (msg.contact) {
        // users = Functions.phone(users, msg.contact.phone_number)
        Functions.phone(users, msg.contact)

        console.log(users);


        bot.sendMessage(chatId, Language[thisLan].text.name8, {
            reply_markup: {
                inline_keyboard: [
                        [{ text: Language[thisLan].button.name2, switch_inline_query_current_chat: "" }],
                        [{ text: Language[thisLan].button.name4, 'callback_data': 'bucket' },
                            { text: Language[thisLan].button.name9, 'callback_data': 'about' }
                        ],
                        [{ text: Language[thisLan].button.name10, 'callback_data': 'edit_lng' }]
                        // [BUTTONS.find],
                        // [BUTTONS.bucket]
                    ]
                    // remove_keyboard: true,
                    // resize_keyboard: true,
                    // selective: true;
            }
            // reply_markup: JSON.stringify({
            //     hide_keyboard: true
            // })
        })
    }
    let userIndex = users.findIndex(x => x.userId == chatId);
    if (userIndex >= 0) {
        if (users[userIndex].orderStep == 1) {
            console.log(users[userIndex].orderStep);
            users[userIndex].description = msg.text;
            users[userIndex].orderStep = 2;

            bot.sendMessage(chatId, Language[thisLan].text.name9, {
                reply_markup: {
                    inline_keyboard: [
                        [BUTTONS.allow, BUTTONS.disallow],
                        [{ text: Language[thisLan].button.name1, 'callback_data': 'back' }]
                    ]
                }
            })

        }

    }


})


// bot.on('message', (msg) => {
//     console.log(msg);

//     let chatId = msg.chat.id;

//     if (msg.text === "Remove keyboard") {

//         bot.sendMessage(chatId, 'Removed', {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         })
//     }

//     bot.sendMessage(chatId, 'Keyboards', {

//         reply_markup: {
//             keyboard: [
//                 [{
//                     text: 'Send my location',
//                     request_location: true
//                 }],
//                 [{
//                     text: 'Send my phone',
//                     request_contact: true
//                 }],
//                 ['Remove keyboard'],
//             ],
//             remove_keyboard: true
//         }
//     })

//     // if (msg.text == '/ping') {
//     //     bot.sendMessage(chatId, 'pong!');
//     // }
// });