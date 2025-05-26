const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('7753607662:AAEc2EpKVanuFm5g_q3V6_GZDec1D6GxTXM');

bot.start(async (ctx) => {
  const startPayload = ctx.startPayload || ctx.message?.text?.split(' ')[1]; 

  if (!startPayload) {
    return ctx.reply('Xush kelibsiz! Payload topilmadi.');
  }

  console.log(startPayload);
  
  id = startPayload.split("a444444444")[0];
  str = startPayload.split("a444444444")[1];
  console.log(str);
  

  const response = await fetch("https://fastly.picsum.photos/id/" + id + "/1000/500.jpg?hmac=" + str);
  const buffer = await response.buffer();

  await ctx.replyWithPhoto({ source: buffer }, { caption: 'Rasm yuklandi' });
});




const fetch = require('node-fetch');

bot.command('rasm', async (ctx) => {
  const response = await fetch("https://picsum.photos/1000/500");
  const buffer = await response.buffer();

  await ctx.replyWithPhoto({ source: buffer }, { caption: 'Rasm yuklandi' });
});

bot.launch();
