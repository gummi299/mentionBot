const Client = require('discord.js');
const client = new Client();
const { prefix, token } = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.tag}로 로그인 되었습니다.`);
    client.user.setPresence({ activity: { name: '김우성ㅄ', type: "PLAYING"  }, status: 'online' })
        .catch(console.error);
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "태그") {
        message.delete()
        if (message.channel.id === "844568140364120085") {
            console.log(message.author.username + " : " + message.content.slice(prefix.length))

            let timer = setInterval(function() {
                message.channel.send("<@!412585148060663818>");
                }, 1000);
            setTimeout(function() {
                clearTimeout(timer)
            }, 1000 * Number(args[0]) + 500)
        }
    }
});

client.login(token)
    .catch(console.error);
