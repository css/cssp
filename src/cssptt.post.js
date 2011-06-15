// CSS 2.1 / 4.1.1 Tokenization / macro section

// [_a-z]|{nonascii}|{escape}
CSSBSParser['_m_nmstart'] = function(x) {
    return /[_a-zA-Z]/.test(x) || CSSBSParser['_m_escape'](x);
};

// \\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
CSSBSParser['_m_unicode'] = function(x) {
    return /\\[0-9a-fA-F]{1,6}(\r\n|[ \n\r\t\f])?/.test(x);
};

// {unicode}|\\[^\n\r\f0-9a-f]
CSSBSParser['_m_escape'] = function(x) {
    return CSSBSParser['_m_unicode'](x) || /\\[^\n\r\f0-9a-fA-F]/.test(x);
}

// [_a-z0-9-]|{nonascii}|{escape}
CSSBSParser['_m_nmchar'] = function(x) {
    return /[_a-zA-Z0-9]/.test(x) || CSSBSParser['_m_escape'](x);
};

//  \n|\r\n|\r|\f
CSSBSParser['_m_nl'] = function(x) {
    return /[ \n\r\n\r\f]/.test(x);
};

// [ \t\r\n\f]*
CSSBSParser['_m_w'] = function(x) {
    return /[ \t\r\n\f]*/.test(x);
};

