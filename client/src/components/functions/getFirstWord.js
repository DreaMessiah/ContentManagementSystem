function getFirstWord(str) {
    // Разбиваем строку на слова по пробелам
    const words = str.trim().split(/\s+/);
    // Возвращаем первое слово
    return words[0];
}
