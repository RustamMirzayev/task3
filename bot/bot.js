const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('7753607662:AAEc2EpKVanuFm5g_q3V6_GZDec1D6GxTXM');

bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    console.log(startPayload);

    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    
  return ctx.reply('Sertifikatni olish uchun pastdagi tugmani bosing', Markup.inlineKeyboard([
    Markup.button.webApp('Sertifikatni olish', 'https://certificate-task.netlify.app/')
  ]));
});

const fetch = require('node-fetch');

bot.command('rasm', async (ctx) => {
  const response = await fetch("https://picsum.photos/1000/500");
  const buffer = await response.buffer();

  await ctx.replyWithPhoto({ source: buffer }, { caption: 'Rasm yuklandi' });
});

bot.launch();
