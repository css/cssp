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
"S":function(){var $elf=this,_fromIdx=this.input.idx,x,xx;return (function(){xx=this._many1((function(){return (function(){x=this._apply("anything");this._applyWithArgs("m_w",x);return x}).call(this)}));return ["white",xx.join("")]}).call(this)},
"ATTR_SELECTOR":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "=":return "=";case "~":return (function(){this._applyWithArgs("exactly","=");return "~="}).call(this);case "^":return (function(){this._applyWithArgs("exactly","=");return "^="}).call(this);case "$":return (function(){this._applyWithArgs("exactly","=");return "$="}).call(this);case "*":return (function(){this._applyWithArgs("exactly","=");return "*="}).call(this);default: throw fail}}).call(this);return ["attrselector",x]}).call(this)},
"DELIM":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly",",");return ["delim",","]}).call(this)},
"COMMENT":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","/");this._applyWithArgs("exactly","*");"/*";x=this._many((function(){return this._apply("anything")}));this._applyWithArgs("exactly","*");this._applyWithArgs("exactly","/");"*/";return ["comment",x.join("")]}).call(this)},
"m_ident":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z,zz;return (function(){x=this._many((function(){return (function(){switch(this._apply('anything')){case "-":return "-";case "*":return "*";default: throw fail}}).call(this)}));y=this._apply("anything");this._applyWithArgs("m_nmstart",y);zz=this._many((function(){return (function(){z=this._apply("anything");this._applyWithArgs("m_nmchar",z);return z}).call(this)}));return ((x.join("") + y) + zz.join(""))}).call(this)},
"m_name":function(){var $elf=this,_fromIdx=this.input.idx,x,xx;return (function(){xx=this._many1((function(){return (function(){x=this._apply("anything");this._applyWithArgs("m_nmchar",x);return x}).call(this)}));return xx.join("")}).call(this)},
"m_num":function(){var $elf=this,_fromIdx=this.input.idx,x,y,x,x;return this._or((function(){return (function(){x=this._many1((function(){return this._apply("digit")}));this._applyWithArgs("exactly",".");y=this._many1((function(){return this._apply("digit")}));return ((x.join("") + ".") + y.join(""))}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case ".":return (function(){x=this._many1((function(){return this._apply("digit")}));return ("." + x.join(""))}).call(this);default: throw fail}}).call(this)}),(function(){return (function(){x=this._many1((function(){return this._apply("digit")}));return x.join("")}).call(this)}))},
"m_string":function(){var $elf=this,_fromIdx=this.input.idx,s,s;return (function(){switch(this._apply('anything')){case "\"":return (function(){s=this._many((function(){return this._or((function(){return this._apply("m_string_nl1")}),(function(){return (function(){this._not((function(){return this._applyWithArgs("exactly","\"")}));return this._apply("char")}).call(this)}))}));this._applyWithArgs("exactly","\"");return (("\"" + s.join("")) + "\"")}).call(this);case "\'":return (function(){s=this._many((function(){return this._or((function(){return this._apply("m_string_nl2")}),(function(){return (function(){this._not((function(){return this._applyWithArgs("exactly","\'")}));return this._apply("char")}).call(this)}))}));this._applyWithArgs("exactly","\'");return (("\'" + s.join("")) + "\'")}).call(this);default: throw fail}}).call(this)},
"m_string_nl1":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "\n":return "\n";case "\r":return "\r";case "f":return "f";case "\\":return (function(){this._applyWithArgs("exactly","\"");return "\\\""}).call(this);default: throw fail}}).call(this);return x}).call(this)},
"m_string_nl2":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "\n":return "\n";case "\r":return "\r";case "f":return "f";case "\\":return (function(){this._applyWithArgs("exactly","\'");return "\\\'"}).call(this);default: throw fail}}).call(this);return x}).call(this)},
"m_nmstart":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nmstart(x))}).call(this)},
"m_unicode":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_unicode(x))}).call(this)},
"m_escape":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_escape(x))}).call(this)},
"m_nmchar":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nmchar(x))}).call(this)},
"m_nl":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_nl(x))}).call(this)},
"m_w":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_w(x))}).call(this)},
"m_comment":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return this._pred(CSSBSParser._m_comment(x))}).call(this)}});var CSSParser=exports.CSSParser=objectThatDelegatesTo(CSSBSParser,{
"sc":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("S")}),(function(){return this._apply("COMMENT")}))},
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._or((function(){return this._apply("CDO")}),(function(){return this._apply("CDC")}),(function(){return this._apply("sc")}),(function(){return this._apply("statement")}))}));return this.concat(["stylesheet"],x)}).call(this)},
"statement":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("ruleset")}),(function(){return this._apply("atrule")}))},
"atrule_part":function(){var $elf=this,_fromIdx=this.input.idx;return this._or((function(){return this._apply("any")}),(function(){return this._apply("operator")}),(function(){return this._apply("sc")}))},
"atrule":function(){var $elf=this,_fromIdx=this.input.idx,ap,s0,r,s1,ak,ap,b,ak,ap,s0;return this._or((function(){return (function(){switch(this._apply('anything')){case "@":return (function(){this._applyWithArgs("exactly","m");this._applyWithArgs("exactly","e");this._applyWithArgs("exactly","d");this._applyWithArgs("exactly","i");this._applyWithArgs("exactly","a");"@media";ap=this._many((function(){return this._apply("atrule_part")}));this._applyWithArgs("exactly","{");s0=this._many((function(){return this._apply("sc")}));r=this._many((function(){return this._apply("ruleset")}));s1=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly","}");return this.concat(["atrulem"],ap,s0,r,s1)}).call(this);default: throw fail}}).call(this)}),(function(){return (function(){ak=this._apply("ATKEYWORD");ap=this._many((function(){return this._apply("atrule_part")}));b=this._apply("block");return this.concat(["atruleb",ak],ap,[b])}).call(this)}),(function(){return (function(){ak=this._apply("ATKEYWORD");ap=this._many((function(){return this._apply("atrule_part")}));this._applyWithArgs("exactly",";");s0=this._many((function(){return this._apply("sc")}));return this.concat(["atrules",ak],ap,s0)}).call(this)}))},
"block_decl":function(){var $elf=this,_fromIdx=this.input.idx,s0,x,y,s1,s0,x,s1,s0,x,sc1;return this._or((function(){return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("declaration");y=this._apply("decl_delim");s1=this._many((function(){return this._apply("sc")}));return this.concat(s0,[x],[y],s1)}).call(this)}),(function(){return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("declaration");s1=this._many((function(){return this._apply("sc")}));return this.concat(s0,[x],s1)}).call(this)}),(function(){return (function(){s0=this._many((function(){return this._apply("sc")}));x=this._apply("decl_delim");sc1=this._many((function(){return this._apply("sc")}));return this.concat(s0,[x],s1)}).call(this)}))},
"decl_delim":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly",";");return ["decldelim"]}).call(this)},
"block":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){this._applyWithArgs("exactly","{");x=this._many((function(){return this._apply("block_decl")}));this._applyWithArgs("exactly","}");return this.concatContent(["block"],x)}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._many((function(){return this._apply("selector")}));y=this._apply("block");return this.concat(["ruleset"],x,[y])}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "+":return "+";case ">":return ">";case "~":return "~";default: throw fail}}).call(this);return ["combinator",x]}).call(this)},
"space_selector":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("S");y=this._apply("any");return [x,y]}).call(this)},
"combi_selector":function(){var $elf=this,_fromIdx=this.input.idx,s0,c,s1,x;return (function(){s0=this._many((function(){return this._apply("sc")}));c=this._apply("combinator");s1=this._many((function(){return this._apply("sc")}));x=this._apply("any");return [this.concat(s0,c,s1,x)]}).call(this)},
"attrib":function(){var $elf=this,_fromIdx=this.input.idx,s0,x,s1,a,s2,y,s3;return (function(){this._applyWithArgs("exactly","[");s0=this._many((function(){return this._apply("sc")}));x=this._apply("IDENT");s1=this._many((function(){return this._apply("sc")}));a=this._apply("ATTR_SELECTOR");s2=this._many((function(){return this._apply("sc")}));y=this._or((function(){return this._apply("IDENT")}),(function(){return this._apply("STRING")}));s3=this._many((function(){return this._apply("sc")}));this._applyWithArgs("exactly","]");return [this.concat(["attrib"],s0,[x],s1,[a],s2,[y],s3)]}).call(this)},
"class":function(){var $elf=this,_fromIdx=this.input.idx,i;return (function(){this._applyWithArgs("exactly",".");i=this._apply("IDENT");return ["class",i]}).call(this)},
"simple_selector":function(){var $elf=this,_fromIdx=this.input.idx,x,y,s0;return (function(){x=this._apply("any");y=this._many((function(){return this._or((function(){return this._apply("combi_selector")}),(function(){return this._apply("space_selector")}),(function(){return this._apply("attrib")}))}));s0=this._many((function(){return this._apply("sc")}));return this.concatContent(["simpleselector",x],y,s0)}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return this._or((function(){return this._apply("simple_selector")}),(function(){return this._apply("DELIM")}))}));return this.concat(["selector"],x)}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("property");this._applyWithArgs("exactly",":");y=this._apply("value");return this.concat(["declaration"],[x],[y])}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,x,s0;return (function(){x=this._apply("IDENT");s0=this._many((function(){return this._apply("sc")}));return this.concat(["property"],[x],s0)}).call(this)},
"prio":function(){var $elf=this,_fromIdx=this.input.idx;return (function(){this._applyWithArgs("exactly","!");this._many((function(){return this._apply("S")}));this._applyWithArgs("exactly","i");this._applyWithArgs("exactly","m");this._applyWithArgs("exactly","p");this._applyWithArgs("exactly","o");this._applyWithArgs("exactly","r");this._applyWithArgs("exactly","t");this._applyWithArgs("exactly","a");this._applyWithArgs("exactly","n");this._applyWithArgs("exactly","t");"important";this._many((function(){return this._apply("S")}));return ["important"]}).call(this)},
"unary_operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "-":return "-";case "+":return "+";default: throw fail}}).call(this);return ["unary",x]}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=(function(){switch(this._apply('anything')){case "/":return "/";case ",":return ",";case ":":return ":";default: throw fail}}).call(this);return ["operator",x]}).call(this)},
"uri":function(){var $elf=this,_fromIdx=this.input.idx,x,x,xx;return (function(){switch(this._apply('anything')){case "u":return (function(){switch(this._apply('anything')){case "r":return (function(){switch(this._apply('anything')){case "l":return this._or((function(){return (function(){"url";this._applyWithArgs("exactly","(");x=this._apply("STRING");this._applyWithArgs("exactly",")");return ["uri",x]}).call(this)}),(function(){return (function(){"url";this._applyWithArgs("exactly","(");xx=this._many((function(){return (function(){x=this._apply("anything");this._pred((x !== ")"));return x}).call(this)}));this._applyWithArgs("exactly",")");return ["uri",["raw",xx.join("")]]}).call(this)}));default: throw fail}}).call(this);default: throw fail}}).call(this);default: throw fail}}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many1((function(){return this._or((function(){return this._apply("any")}),(function(){return this._apply("block")}),(function(){return this._apply("ATKEYWORD")}),(function(){return this._apply("operator")}),(function(){return this._apply("sc")}))}));return this.concat(["value"],x)}).call(this)},
"func":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("IDENT");this._applyWithArgs("exactly","(");y=this._many((function(){return this._or((function(){return this._apply("any")}),(function(){return this._apply("S")}))}));this._applyWithArgs("exactly",")");return this.concat(["function",x],y)}).call(this)},
"any":function(){var $elf=this,_fromIdx=this.input.idx,x,y,x,x;return this._or((function(){return (function(){x=this._many((function(){return this._apply("unary_operator")}));y=this._or((function(){return this._apply("class")}),(function(){return this._apply("STRING")}),(function(){return this._apply("PERCENTAGE")}),(function(){return this._apply("DIMENSION")}),(function(){return this._apply("HASH")}),(function(){return this._apply("NUMBER")}),(function(){return this._apply("uri")}),(function(){return this._apply("func")}),(function(){return this._apply("IDENT")}),(function(){return this._apply("operator")}));return x.concat(y)}).call(this)}),(function(){return (function(){switch(this._apply('anything')){case "(":return (function(){this._many((function(){return this._apply("S")}));x=this._many((function(){return this._apply("any")}));this._applyWithArgs("exactly",")");this._many((function(){return this._apply("S")}));return this.concat(["braces","(",")"],x)}).call(this);case "[":return (function(){this._many((function(){return this._apply("S")}));x=this._many((function(){return this._apply("any")}));this._applyWithArgs("exactly","]");this._many((function(){return this._apply("S")}));return this.concat(["braces","[","]"],x)}).call(this);default: throw fail}}).call(this)}))}});(CSSParser["concatContent"]=(function (x,y){y.forEach((function (e){(x=x.concat(e))}));return x}));(CSSParser["concat"]=(function (){var x = [];for(var i = undefined in arguments){(x=x.concat(arguments[i]))};undefined;return x}));var CSSTransformer=exports.CSSTransformer=objectThatDelegatesTo(OMeta,{
"trans":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){this._form((function(){return (function(){t=this._apply("anything");return x=this._applyWithArgs("apply",t)}).call(this)}));return x}).call(this)},
"ident":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["ident",x]}).call(this)},
"atkeyword":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["atkeyword",x]}).call(this)},
"string":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["string",x]}).call(this)},
"hash":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["hash",x]}).call(this)},
"num":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["num",x]}).call(this)},
"percentage":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["percentage",x]}).call(this)},
"dimension":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("anything");y=this._apply("anything");return ["dimension",x,y]}).call(this)},
"cdo":function(){var $elf=this,_fromIdx=this.input.idx;return ["cdo"]},
"cdc":function(){var $elf=this,_fromIdx=this.input.idx;return ["cdc"]},
"decldelim":function(){var $elf=this,_fromIdx=this.input.idx;return ["decldelim"]},
"white":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["white",x]}).call(this)},
"attrselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["attrselector",x]}).call(this)},
"attrib":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["attrib"].concat(x)}).call(this)},
"class":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("trans");return ["class",x]}).call(this)},
"delim":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["delim",x]}).call(this)},
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("anything");y=this._many((function(){return this._apply("trans")}));return ["stylesheet"].concat(y)}).call(this)},
"atrulem":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["atrulem"].concat(x)}).call(this)},
"atruleb":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["atruleb"].concat(x)}).call(this)},
"atrules":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["atrules"].concat(x)}).call(this)},
"block":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["block"].concat(x)}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["ruleset"].concat(x)}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["combinator",x]}).call(this)},
"simpleselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["simpleselector"].concat(x)}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["selector"].concat(x)}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,p,v;return (function(){p=this._apply("trans");v=this._apply("trans");return ["declaration",p,v]}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["property"].concat(x)}).call(this)},
"important":function(){var $elf=this,_fromIdx=this.input.idx;return ["important"]},
"unary":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["unary",x]}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["operator",x]}).call(this)},
"braces":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z;return (function(){x=this._apply("anything");y=this._apply("anything");z=this._many((function(){return this._apply("trans")}));return ["braces",x,y].concat(z)}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ["value"].concat(x)}).call(this)},
"comment":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["comment",x]}).call(this)},
"uri":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("trans");return ["uri",x]}).call(this)},
"raw":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ["raw",x]}).call(this)},
"function":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("trans");y=this._many((function(){return this._apply("trans")}));return ["function",x].concat(y)}).call(this)}});var CSSTranslator=exports.CSSTranslator=objectThatDelegatesTo(OMeta,{
"trans":function(){var $elf=this,_fromIdx=this.input.idx,t,x;return (function(){this._form((function(){return (function(){t=this._apply("anything");return x=this._applyWithArgs("apply",t)}).call(this)}));return x}).call(this)},
"ident":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"atkeyword":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ("@" + x)}).call(this)},
"string":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"hash":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return ("#" + x)}).call(this)},
"num":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"percentage":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return (x + "%")}).call(this)},
"dimension":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("anything");y=this._apply("anything");return (x + y)}).call(this)},
"cdo":function(){var $elf=this,_fromIdx=this.input.idx;return "<!--"},
"cdc":function(){var $elf=this,_fromIdx=this.input.idx;return "-->"},
"decldelim":function(){var $elf=this,_fromIdx=this.input.idx;return ";"},
"white":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"attrselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"attrib":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (("[" + x.join("")) + "]")}).call(this)},
"class":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("trans");return ("." + x)}).call(this)},
"delim":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"stylesheet":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("anything");y=this._many((function(){return this._apply("trans")}));return y.join("")}).call(this)},
"atrulem":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return ("@media" + x.join(""))}).call(this)},
"atruleb":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"atrules":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (x.join("") + ";")}).call(this)},
"block":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return (("{" + x.join("")) + "}")}).call(this)},
"ruleset":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"combinator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"simpleselector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"selector":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"declaration":function(){var $elf=this,_fromIdx=this.input.idx,p,v;return (function(){p=this._apply("trans");v=this._apply("trans");return ((p + ":") + v)}).call(this)},
"property":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"important":function(){var $elf=this,_fromIdx=this.input.idx;return "!important"},
"unary":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"operator":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"braces":function(){var $elf=this,_fromIdx=this.input.idx,x,y,z;return (function(){x=this._apply("anything");y=this._apply("anything");z=this._many((function(){return this._apply("trans")}));return ((x + z.join("")) + y)}).call(this)},
"value":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._many((function(){return this._apply("trans")}));return x.join("")}).call(this)},
"comment":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"uri":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("trans");return (("url(" + x) + ")")}).call(this)},
"raw":function(){var $elf=this,_fromIdx=this.input.idx,x;return (function(){x=this._apply("anything");return x}).call(this)},
"function":function(){var $elf=this,_fromIdx=this.input.idx,x,y;return (function(){x=this._apply("trans");y=this._many((function(){return this._apply("trans")}));return (((x + "(") + y.join("")) + ")")}).call(this)}})}
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
    return /[ \t\r\n\f]/.test(x);
};

// \/\*[^*]*\*+([^/*][^*]*\*+)*\/
CSSBSParser['_m_comment'] = function(x) {
    return new RegExp('\/\*[^*]*\*+([^/*][^*]*\*+)*\/').test(x);
};

