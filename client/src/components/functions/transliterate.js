function transliterate(name) {
    const trans = {
        'а': 'a',   'б': 'b',   'в': 'v',
        'г': 'g',   'д': 'd',   'е': 'e',
        'ё': 'e',   'ж': 'zh',  'з': 'z',
        'и': 'i',   'й': 'y',   'к': 'k',
        'л': 'l',   'м': 'm',   'н': 'n',
        'о': 'o',   'п': 'p',   'р': 'r',
        'с': 's',   'т': 't',   'у': 'u',
        'ф': 'f',   'х': 'kh',  'ц': 'ts',
        'ч': 'ch',  'ш': 'sh',  'щ': 'sch',
        'ъ': '',    'ы': 'y',   'ь': '',
        'э': 'e',   'ю': 'yu',  'я': 'ya'
    };

    return name.toLowerCase().split('').map(char => {
        return trans[char] || char;
    }).join('');
}
