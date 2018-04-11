exports.random = function random(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};
