module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  const bracketsMap = new Map();

  // Заполнение карты открывающих и закрывающих скобок
  for (const [open, close] of bracketsConfig) {
    bracketsMap.set(close, open);
  }

  for (const char of str) {
    // Если символ является закрывающей скобкой
    if (bracketsMap.has(char)) {
      const topElement = stack.length === 0 ? null : stack[stack.length - 1];

      // Если открывающая и закрывающая скобки одинаковые
      if (bracketsMap.get(char) === char) {
        if (topElement === char) {
          stack.pop(); // Если совпадает, удаляем из стека
        } else {
          stack.push(char); // Если не совпадает, добавляем в стек
        }
      } else {
        // Проверка на соответствие с верхним элементом стека
        if (topElement === bracketsMap.get(char)) {
          stack.pop();
        } else {
          return false;
        }
      }
    } else {
      // Если символ - открывающая скобка, добавляем в стек
      stack.push(char);
    }
  }

  // Если стек пуст после обработки всех символов, возвращаем true
  return stack.length === 0;
}
