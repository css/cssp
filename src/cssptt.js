var ometajs = require('ometajs'),
    OMeta = ometajs.OMeta;
{var CSSBSParser=exports.CSSBSParser=objectThatDelegatesTo(OMeta,{
"IDENT":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_ident");return ["ident",x]}).call(this)},
"ATKEYWORD":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","@");x=this._apply("m_ident");return ["atkeyword",x]}).call(this)},
"STRING":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_string");return ["string",x]}).call(this)},
"HASH":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","#");x=this._apply("m_name");return ["hash",x]}).call(this)},
"NUMBER":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_num");return ["num",x]}).call(this)},
"PERCENTAGE":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_num");this._applyWithArgs("exactly","%");return ["percentage",x]}).call(this)},
"DIMENSION":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("m_num");y=this._apply("m_ident");return ["dimension",x,y]}).call(this)},
"CDO":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly","<");this._applyWithArgs("exactly","!");this._applyWithArgs("exactly","-");this._applyWithArgs("exactly","-");"<!--";return ["cdo"]}).call(this)},
"CDC":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly","-");this._applyWithArgs("exactly","-");this._applyWithArgs("exactly",">");"-->";return ["cdc"]}).call(this)},
"S":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return (function(){switch(this._apply('anything')){case " ":return " ";case "\t":return "\t";case "\r":return "\r";case "\n":return "\n";case "f":return "f";default: throw fail}}).call(this)}));return ["white",x.join()]}).call(this)},
"ATTR_SELECTOR":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "=":return "=";case "~":return (function(){this._applyWithArgs("exactly","=");return "~="}).call(this);case "^":return (function(){this._applyWithArgs("exactly","=");return "^="}).call(this);case "$":return (function(){this._applyWithArgs("exactly","=");return "$="}).call(this);case "*":return (function(){this._applyWithArgs("exactly","=");return "*="}).call(this);default: throw fail}}).call(this);return ["attrselector",x]}).call(this)},
"FUNCTION":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("m_ident");this._applyWithArgs("exactly","(");return x}).call(this)},
"DELIM":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly",",");this._many((function(){return this._apply("S")}));return ["delim",","]}).call(this)},
"m_ident":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z,zz;return (function(){x=this._many((function(){return this._applyWithArgs("exactly","-")}));y=this._apply("anything");this._applyWithArgs("m_nmstart",y);zz=this._many((function(){return (function(){z=this._apply("anything");this._applyWithArgs("m_nmchar",z);return z}).call(this)}));return ((x.join("") + y) + zz.join(""))}).call(this)},
"m_name":function(){var $elf=this,_fromIdx=this.input.idx,x,xx;return (function(){xx=this._many1((function(){return (function(){x=this._apply("anything");this._applyWithArgs("m_nmchar",x);return x}).call(this)}));return xx.join("")}).call(this)},
"m_nmstart":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nmstart(x))}).call(this)},
"m_unicode":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_unicode(x))}).call(this)},
"m_escape":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_escape(x))}).call(this)},
"m_nmchar":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nmchar(x))}).call(this)},
"m_num":function(){var $elf=this,_fromIdx=this.input.idx,x,y,x,x;return this._or((function(){return (function(){x=this._many1((function(){return this._apply("digit")}));this._applyWithArgs("exactly",".");y=this._many1((function(){return this._apply("digit")}));return ((x.join("") + ".") + y.join(""))}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case ".":return (function(){x=this._many1((function(){return this._apply("digit")}));return ("." + x.join(""))}).call(this);default: throw fail}}).call(this)}),(function(){return (function(){x=this._many1((function(){return this._apply("digit")}));return x.join("")}).call(this)}))},
"m_string":function(){var $elf=this,_fromIdx=this.input.idx,s,s;return (function(){switch(this._apply('anything')){case "\"":return (function(){s=this._many((function(){return this._or((function(){return this._apply("m_string_nl1")}),(function(){return (function(){this._not((function(){return this._applyWithArgs("exactly","\"")}));return this._apply("char")}).call(this)}))}));this._applyWithArgs("exactly","\"");return (("\"" + s.join("")) + "\"")}).call(this);case "\'":return (function(){s=this._many((function(){return this._or((function(){return this._apply("m_string_nl2")}),(function(){return (function(){this._not((function(){return this._applyWithArgs("exactly","\'")}));return this._apply("char")}).call(this)}))}));this._applyWithArgs("exactly","\'");return (("\'" + s.join("")) + "\'")}).call(this);default: throw fail}}).call(this)},
"m_string_nl1":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "\n":return "\n";case "\r":return "\r";case "f":return "f";case "\\":return (function(){this._applyWithArgs("exactly","\"");return "\\\""}).call(this);default: throw fail}}).call(this);return x}).call(this)},
"m_string_nl2":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "\n":return "\n";case "\r":return "\r";case "f":return "f";case "\\":return (function(){this._applyWithArgs("exactly","\'");return "\\\'"}).call(this);default: throw fail}}).call(this);return x}).call(this)},
"m_nl":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nl(x))}).call(this)},
"m_w":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_w(x))}).call(this)}});var CSSParser=exports.CSSParser=objectThatDelegatesTo(CSSBSParser,{
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._or((function(){return this._apply("CDO")}),(function(){return this._apply("CDC")}),(function(){return this._apply("S")}),(function(){return this._apply("statement")}))}));return ["stylesheet"].concat(x)}).call(this)},
"statement":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("ruleset")}),(function(){return this._apply("atrule")}))},
"atrule":function(){var $elf=this,_fromIdx=this.input.idx,ak,aq,b,ak,aq;return this._or((function(){return (function(){ak=this._apply("ATKEYWORD");this._many((function(){return this._apply("S")}));aq=this._many((function(){return this._apply("any")}));b=this._apply("block");return ["atruleb",aq,b]}).call(this)}),(function(){return (function(){ak=this._apply("ATKEYWORD");this._many((function(){return this._apply("S")}));aq=this._many((function(){return this._apply("any")}));this._applyWithArgs("exactly",";");this._many((function(){return this._apply("S")}));return ["atrules",aq]}).call(this)}))},
"block":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","{");this._many((function(){return this._apply("S")}));x=this._many((function(){return this._or((function(){return this._apply("any")}),(function(){return this._apply("block")}),(function(){return (function(){this._apply("ATKEYWORD");return this._many((function(){return this._apply("S")}))}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case ";":return this._many((function(){return this._apply("S")}));default: throw fail}}).call(this)}))}));this._applyWithArgs("exactly","}");this._many((function(){return this._apply("S")}));return ["block"].concat(x)}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z;return (function(){x=this._many((function(){return this._apply("selector")}));this._applyWithArgs("exactly","{");this._many((function(){return this._apply("S")}));y=this._many((function(){return this._apply("declaration")}));z=this._many((function(){return (function(){this._applyWithArgs("exactly",";");this._many((function(){return this._apply("S")}));return this._apply("declaration")}).call(this)}));this._applyWithArgs("exactly","}");this._many((function(){return this._apply("S")}));return ["ruleset"].concat(x).concat(y).concat(z)}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "+":return "+";case ">":return ">";default: throw fail}}).call(this);return ["combinator",x]}).call(this)},
"space_selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._many((function(){return this._apply("S")}));x=this._apply("any");return [["combinator"," "],x]}).call(this)},
"combi_selector":function(){var $elf=this,_fromIdx=this.input.idx,c,x;return (function(){this._many((function(){return this._apply("S")}));c=this._apply("combinator");this._many((function(){return this._apply("S")}));x=this._apply("any");return [c,x]}).call(this)},
"simple_selector":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("any");y=this._many((function(){return this._or((function(){return this._apply("combi_selector")}),(function(){return this._apply("space_selector")}))}));this._many((function(){return this._apply("S")}));return this.concatElements(["simpleselector",x],y)}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return this._or((function(){return this._apply("simple_selector")}),(function(){return this._apply("DELIM")}))}));return ["selector"].concat(x)}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("property");this._many((function(){return this._apply("S")}));this._applyWithArgs("exactly",":");this._many((function(){return this._apply("S")}));y=this._apply("value");return ["declaration",x,y]}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("IDENT");return ["property",x]}).call(this)},
"prio":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly","!");this._many((function(){return this._apply("S")}));this._applyWithArgs("exactly","i");this._applyWithArgs("exactly","m");this._applyWithArgs("exactly","p");this._applyWithArgs("exactly","o");this._applyWithArgs("exactly","r");this._applyWithArgs("exactly","t");this._applyWithArgs("exactly","a");this._applyWithArgs("exactly","n");this._applyWithArgs("exactly","t");"important";this._many((function(){return this._apply("S")}));return ["important"]}).call(this)},
"unary_operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "-":return "-";case "+":return "+";default: throw fail}}).call(this);return ["unary",x]}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "/":return "/";case ",":return ",";default: throw fail}}).call(this);this._many((function(){return this._apply("S")}));return ["operator",x]}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return this._or((function(){return this._apply("any")}),(function(){return this._apply("block")}),(function(){return this._apply("ATKEYWORD")}),(function(){return this._apply("operator")}))}));return ["value"].concat(x)}).call(this)},
"func":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("IDENT");this._applyWithArgs("exactly","(");this._many((function(){return this._apply("S")}));y=this._many((function(){return this._apply("any")}));this._applyWithArgs("exactly",")");return ["function",x,y]}).call(this)},
"any":function(){var $elf=this,_fromIdx=this.input.idx,x,y,x,x;return this._or((function(){return (function(){x=this._many((function(){return this._apply("unary_operator")}));y=this._or((function(){return this._apply("STRING")}),(function(){return this._apply("PERCENTAGE")}),(function(){return this._apply("DIMENSION")}),(function(){return this._apply("HASH")}),(function(){return this._apply("NUMBER")}),(function(){return this._apply("ATTR_SELECTOR")}),(function(){return this._apply("func")}),(function(){return this._apply("IDENT")}));this._many((function(){return this._apply("S")}));return x.concat(y)}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case "(":return (function(){this._many((function(){return this._apply("S")}));x=this._many((function(){return this._apply("any")}));this._applyWithArgs("exactly",")");this._many((function(){return this._apply("S")}));return ["(",x,")"]}).call(this);case "[":return (function(){this._many((function(){return this._apply("S")}));x=this._many((function(){return this._apply("any")}));this._applyWithArgs("exactly","]");this._many((function(){return this._apply("S")}));return ["[",x,"]"]}).call(this);default: throw fail}}).call(this)}))}});(CSSParser["concatElements"]=(function (x,y){y.forEach((function (e){(x=x.concat(e))}));return x}))}
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

