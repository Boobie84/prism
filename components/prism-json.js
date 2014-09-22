Prism.languages.json = {
    'property': /"(\b|\B)[\w-]+"(?=\s*:)/ig,
    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    'string': /"(?!:)(\\?[^'"])*?"(?!:)/g,
    'punctuation': /[\{\};:]/g,
    'boolean': /\b(true|false)\b/gi,
    'null': /\bnull\b/gi,
};

Prism.languages.jsonp = Prism.languages.json;