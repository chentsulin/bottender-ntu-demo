const { ConsoleBot } = require('bottender');

const bot = new ConsoleBot();

function random(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

bot.onEvent(async context => {
  await context.sendText(
    random([
      '加油站最怕什麼樣的員工？油腔滑調的員工',
      '有一天，西瓜、榴槤、奇異果一起出去玩，結果榴槤不見了。因為榴槤忘返',
      '海記憶體知己，天涯若比鄰',
    ])
  );
});

bot.createRuntime();
