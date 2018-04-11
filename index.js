const { ConsoleBot } = require('bottender');

const coinmarketcap = require('./coinmarketcap');
const { random } = require('./utils');

const bot = new ConsoleBot();

bot.onEvent(async context => {
  if (context.event.text === '講笑話') {
    await context.sendText(
      random([
        '加油站最怕什麼樣的員工？油腔滑調的員工',
        '有一天，西瓜、榴槤、奇異果一起出去玩，結果榴槤不見了。因為榴槤忘返',
        '海記憶體知己，天涯若比鄰',
      ])
    );
  } else if (/^(btc)|(bitcoin)$/i.test(context.event.text)) {
    const btc = await coinmarketcap.queryTicker('bitcoin');

    await context.sendText(
      `比特幣 1 BTC，值美金 ${btc.price_usd}，台幣 ${
        btc.price_twd
      }，24 小時內變動 ${btc.percent_change_24h}％`
    );
  }
});

bot.createRuntime();
