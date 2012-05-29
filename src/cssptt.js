var ometajs = require('ometajs'),
    OMeta = ometajs.OMeta;
var ometajs_ = require("ometajs");

var AbstractGrammar = ometajs_.grammars.AbstractGrammar;

var BSJSParser = ometajs_.grammars.BSJSParser;

var BSJSIdentity = ometajs_.grammars.BSJSIdentity;

var BSJSTranslator = ometajs_.grammars.BSJSTranslator;

var CSSParser = function CSSParser(source) {
    AbstractGrammar.call(this, source);
};

CSSParser.grammarName = "CSSParser";

CSSParser.match = AbstractGrammar.match;

CSSParser.matchAll = AbstractGrammar.matchAll;

exports.CSSParser = CSSParser;

require("util").inherits(CSSParser, AbstractGrammar);

CSSParser.prototype["m_comment"] = function $m_comment() {
    var x;
    return this._rule("seq", false, [ "/*" ], null, this["seq"]) && this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return !this._rule("seq", false, [ "*/" ], null, this["seq"]);
            }, true) && this._rule("char", false, [], null, this["char"]);
        });
    }) && (x = this._getIntermediate(), true) && this._rule("seq", false, [ "*/" ], null, this["seq"]) && this._exec("/*" + x.join("") + "*/");
};

CSSParser.prototype["m_ident"] = function $m_ident() {
    return this._atomic(function() {
        var x, z;
        return this._match("-") && this._atomic(function() {
            var x;
            return this._rule("char", false, [], null, this["char"]) && (x = this._getIntermediate(), true) && this._rule("m_nmstart", false, [ x ], null, this["m_nmstart"]) && this._exec(x);
        }) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._atomic(function() {
                    return this._rule("escape", false, [], null, this["escape"]);
                }) || this._atomic(function() {
                    var y;
                    return this._skip() && (y = this._getIntermediate(), true) && this._rule("m_nmchar", false, [ y ], null, this["m_nmchar"]) && this._exec(y);
                });
            });
        }) && (z = this._getIntermediate(), true) && this._exec("-" + x + z.join(""));
    }) || this._atomic(function() {
        var x, z;
        return this._atomic(function() {
            var x;
            return this._rule("char", false, [], null, this["char"]) && (x = this._getIntermediate(), true) && this._rule("m_nmstart", false, [ x ], null, this["m_nmstart"]) && this._exec(x);
        }) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._atomic(function() {
                    return this._rule("escape", false, [], null, this["escape"]);
                }) || this._atomic(function() {
                    var y;
                    return this._skip() && (y = this._getIntermediate(), true) && this._rule("m_nmchar", false, [ y ], null, this["m_nmchar"]) && this._exec(y);
                });
            });
        }) && (z = this._getIntermediate(), true) && this._exec(x + z.join(""));
    });
};

CSSParser.prototype["escape"] = function $escape() {
    var x;
    return this._match("\\") && this._rule("char", false, [], null, this["char"]) && (x = this._getIntermediate(), true) && this._exec("\\" + x);
};

CSSParser.prototype["m_name"] = function $m_name() {
    var xx, x;
    return this._many(function() {
        return this._atomic(function() {
            return this._skip() && (x = this._getIntermediate(), true) && this._rule("m_nmchar", false, [ x ], null, this["m_nmchar"]) && this._exec(x);
        });
    }) && (xx = this._getIntermediate(), true) && this._exec(xx.join(""));
};

CSSParser.prototype["m_name2"] = function $m_name2() {
    var xx, x;
    return this._many(function() {
        return this._atomic(function() {
            return this._skip() && (x = this._getIntermediate(), true) && this._rule("m_nmchar2", false, [ x ], null, this["m_nmchar2"]) && this._exec(x);
        });
    }) && (xx = this._getIntermediate(), true) && this._exec(xx.join(""));
};

CSSParser.prototype["m_number"] = function $m_number() {
    return this._atomic(function() {
        var x, y;
        return this._many(function() {
            return this._atomic(function() {
                return this._rule("digit", false, [], null, this["digit"]);
            });
        }) && (x = this._getIntermediate(), true) && this._match(".") && this._many(function() {
            return this._atomic(function() {
                return this._rule("digit", false, [], null, this["digit"]);
            });
        }) && (y = this._getIntermediate(), true) && this._exec(x.join("") + "." + y.join(""));
    }) || this._atomic(function() {
        var x;
        return this._match(".") && this._many(function() {
            return this._atomic(function() {
                return this._rule("digit", false, [], null, this["digit"]);
            });
        }) && (x = this._getIntermediate(), true) && this._exec("." + x.join(""));
    }) || this._atomic(function() {
        var x;
        return this._many(function() {
            return this._atomic(function() {
                return this._rule("digit", false, [], null, this["digit"]);
            });
        }) && (x = this._getIntermediate(), true) && this._exec(x.join(""));
    });
};

CSSParser.prototype["m_string"] = function $m_string() {
    return this._atomic(function() {
        var s;
        return this._match('"') && this._any(function() {
            return this._atomic(function() {
                return this._atomic(function() {
                    return this._rule("m_string_nl1", false, [], null, this["m_string_nl1"]);
                }) || this._atomic(function() {
                    return this._atomic(function() {
                        return !this._match('"');
                    }, true) && this._rule("char", false, [], null, this["char"]);
                });
            });
        }) && (s = this._getIntermediate(), true) && this._match('"') && this._exec('"' + s.join("") + '"');
    }) || this._atomic(function() {
        var s;
        return this._match("'") && this._any(function() {
            return this._atomic(function() {
                return this._atomic(function() {
                    return this._rule("m_string_nl2", false, [], null, this["m_string_nl2"]);
                }) || this._atomic(function() {
                    return this._atomic(function() {
                        return !this._match("'");
                    }, true) && this._rule("char", false, [], null, this["char"]);
                });
            });
        }) && (s = this._getIntermediate(), true) && this._match("'") && this._exec("'" + s.join("") + "'");
    });
};

CSSParser.prototype["m_string_nl1"] = function $m_string_nl1() {
    var x;
    return (this._match("\n") || this._match("\r") || this._atomic(function() {
        return this._rule("seq", false, [ '\\"' ], null, this["seq"]);
    })) && (x = this._getIntermediate(), true) && this._exec(x);
};

CSSParser.prototype["m_string_nl2"] = function $m_string_nl2() {
    var x;
    return (this._match("\n") || this._match("\r") || this._atomic(function() {
        return this._rule("seq", false, [ "\\'" ], null, this["seq"]);
    })) && (x = this._getIntermediate(), true) && this._exec(x);
};

CSSParser.prototype["m_nmstart"] = function $m_nmstart() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_nmstart(x);
};

CSSParser.prototype["m_unicode"] = function $m_unicode() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_unicode(x);
};

CSSParser.prototype["m_escape"] = function $m_escape() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_escape(x);
};

CSSParser.prototype["m_nmchar"] = function $m_nmchar() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_nmchar(x);
};

CSSParser.prototype["m_nmchar2"] = function $m_nmchar2() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_nmchar2(x);
};

CSSParser.prototype["m_nl"] = function $m_nl() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_nl(x);
};

CSSParser.prototype["m_w"] = function $m_w() {
    var x;
    return this._skip() && (x = this._getIntermediate(), true) && CSSParser._m_w(x);
};

CSSParser.prototype["ident"] = function $ident() {
    var x;
    return this._rule("m_ident", false, [], null, this["m_ident"]) && (x = this._getIntermediate(), true) && this._exec([ "ident", x ]);
};

CSSParser.prototype["atkeyword"] = function $atkeyword() {
    var x;
    return this._match("@") && this._rule("ident", false, [], null, this["ident"]) && (x = this._getIntermediate(), true) && this._exec([ "atkeyword", x ]);
};

CSSParser.prototype["string"] = function $string() {
    var x;
    return this._rule("m_string", false, [], null, this["m_string"]) && (x = this._getIntermediate(), true) && this._exec([ "string", x ]);
};

CSSParser.prototype["shash"] = function $shash() {
    var x;
    return this._match("#") && this._rule("m_name", false, [], null, this["m_name"]) && (x = this._getIntermediate(), true) && this._exec([ "shash", x ]);
};

CSSParser.prototype["vhash"] = function $vhash() {
    var x;
    return this._match("#") && this._rule("m_name2", false, [], null, this["m_name2"]) && (x = this._getIntermediate(), true) && this._exec([ "vhash", x ]);
};

CSSParser.prototype["number"] = function $number() {
    var x;
    return this._rule("m_number", false, [], null, this["m_number"]) && (x = this._getIntermediate(), true) && this._exec([ "number", x ]);
};

CSSParser.prototype["percentage"] = function $percentage() {
    var x;
    return this._rule("number", false, [], null, this["number"]) && (x = this._getIntermediate(), true) && this._match("%") && this._exec([ "percentage", x ]);
};

CSSParser.prototype["dimension"] = function $dimension() {
    var x, y;
    return this._rule("number", false, [], null, this["number"]) && (x = this._getIntermediate(), true) && this._rule("m_name2", false, [], null, this["m_name2"]) && (y = this._getIntermediate(), true) && this._exec([ "dimension", x, [ "ident", y ] ]);
};

CSSParser.prototype["cdo"] = function $cdo() {
    return this._rule("seq", false, [ "<!--" ], null, this["seq"]) && this._exec([ "cdo" ]);
};

CSSParser.prototype["cdc"] = function $cdc() {
    return this._rule("seq", false, [ "-->" ], null, this["seq"]) && this._exec([ "cdc" ]);
};

CSSParser.prototype["s"] = function $s() {
    var xx, x;
    return this._many(function() {
        return this._atomic(function() {
            return this._skip() && (x = this._getIntermediate(), true) && this._rule("m_w", false, [ x ], null, this["m_w"]) && this._exec(x);
        });
    }) && (xx = this._getIntermediate(), true) && this._exec([ "s", xx.join("") ]);
};

CSSParser.prototype["attrselector"] = function $attrselector() {
    var x;
    return (this._atomic(function() {
        return this._rule("seq", false, [ "=" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "~=" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "^=" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "$=" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "*=" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "|=" ], null, this["seq"]);
    })) && (x = this._getIntermediate(), true) && this._exec([ "attrselector", x ]);
};

CSSParser.prototype["delim"] = function $delim() {
    return this._match(",") && this._exec([ "delim" ]);
};

CSSParser.prototype["comment"] = function $comment() {
    var x;
    return this._rule("seq", false, [ "/*" ], null, this["seq"]) && this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return !this._rule("seq", false, [ "*/" ], null, this["seq"]);
            }, true) && this._rule("char", false, [], null, this["char"]);
        });
    }) && (x = this._getIntermediate(), true) && this._rule("seq", false, [ "*/" ], null, this["seq"]) && this._exec([ "comment", x.join("") ]);
};

CSSParser.prototype["sc"] = function $sc() {
    return this._atomic(function() {
        return this._rule("s", false, [], null, this["s"]);
    }) || this._atomic(function() {
        return this._rule("comment", false, [], null, this["comment"]);
    });
};

CSSParser.prototype["tset"] = function $tset() {
    return this._atomic(function() {
        return this._rule("vhash", false, [], null, this["vhash"]);
    }) || this._atomic(function() {
        return this._rule("any", false, [], null, this["any"]);
    }) || this._atomic(function() {
        return this._rule("sc", false, [], null, this["sc"]);
    }) || this._atomic(function() {
        return this._rule("operator", false, [], null, this["operator"]);
    });
};

CSSParser.prototype["stylesheet"] = function $stylesheet() {
    var x;
    return this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("cdo", false, [], null, this["cdo"]);
            }) || this._atomic(function() {
                return this._rule("cdc", false, [], null, this["cdc"]);
            }) || this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            }) || this._atomic(function() {
                return this._rule("statement", false, [], null, this["statement"]);
            });
        });
    }) && (x = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "stylesheet" ], x));
};

CSSParser.prototype["statement"] = function $statement() {
    return this._atomic(function() {
        return this._rule("ruleset", false, [], null, this["ruleset"]);
    }) || this._atomic(function() {
        return this._rule("atrule", false, [], null, this["atrule"]);
    });
};

CSSParser.prototype["atruleb"] = function $atruleb() {
    var ak, ap, b;
    return this._rule("atkeyword", false, [], null, this["atkeyword"]) && (ak = this._getIntermediate(), true) && this._any(function() {
        return this._atomic(function() {
            return this._rule("tset", false, [], null, this["tset"]);
        });
    }) && (ap = this._getIntermediate(), true) && this._rule("block", false, [], null, this["block"]) && (b = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "atruleb", ak ], ap, [ b ]));
};

CSSParser.prototype["atrules"] = function $atrules() {
    var ak, ap;
    return this._rule("atkeyword", false, [], null, this["atkeyword"]) && (ak = this._getIntermediate(), true) && this._any(function() {
        return this._atomic(function() {
            return this._rule("tset", false, [], null, this["tset"]);
        });
    }) && (ap = this._getIntermediate(), true) && this._match(";") && this._exec(CSSParser.concat([ "atrules", ak ], ap));
};

CSSParser.prototype["atrulerq"] = function $atrulerq() {
    var ap;
    return this._any(function() {
        return this._atomic(function() {
            return this._rule("tset", false, [], null, this["tset"]);
        });
    }) && (ap = this._getIntermediate(), true) && this._exec([ "atrulerq" ].concat(ap));
};

CSSParser.prototype["atrulers"] = function $atrulers() {
    var s0, r, s1;
    return this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s0 = this._getIntermediate(), true) && this._any(function() {
        return this._atomic(function() {
            return this._rule("ruleset", false, [], null, this["ruleset"]);
        });
    }) && (r = this._getIntermediate(), true) && this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s1 = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "atrulers" ], s0, r, s1));
};

CSSParser.prototype["atruler"] = function $atruler() {
    var ak, x, y;
    return this._rule("atkeyword", false, [], null, this["atkeyword"]) && (ak = this._getIntermediate(), true) && this._rule("atrulerq", false, [], null, this["atrulerq"]) && (x = this._getIntermediate(), true) && this._match("{") && this._rule("atrulers", false, [], null, this["atrulers"]) && (y = this._getIntermediate(), true) && this._match("}") && this._exec([ "atruler", ak, x, y ]);
};

CSSParser.prototype["atrule"] = function $atrule() {
    return this._atomic(function() {
        return this._rule("atruler", false, [], null, this["atruler"]);
    }) || this._atomic(function() {
        return this._rule("atruleb", false, [], null, this["atruleb"]);
    }) || this._atomic(function() {
        return this._rule("atrules", false, [], null, this["atrules"]);
    });
};

CSSParser.prototype["blockdecl"] = function $blockdecl() {
    return this._atomic(function() {
        var s0, x, y, s1;
        return this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && (this._atomic(function() {
            return this._rule("filter", false, [], null, this["filter"]);
        }) || this._atomic(function() {
            return this._rule("declaration", false, [], null, this["declaration"]);
        })) && (x = this._getIntermediate(), true) && this._rule("decldelim", false, [], null, this["decldelim"]) && (y = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._exec(CSSParser.concat(s0, [ x ], [ y ], s1));
    }) || this._atomic(function() {
        var s0, x, s1;
        return this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && (this._atomic(function() {
            return this._rule("filter", false, [], null, this["filter"]);
        }) || this._atomic(function() {
            return this._rule("declaration", false, [], null, this["declaration"]);
        })) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._exec(CSSParser.concat(s0, [ x ], s1));
    }) || this._atomic(function() {
        var s0, x, s1;
        return this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && this._rule("decldelim", false, [], null, this["decldelim"]) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._exec(CSSParser.concat(s0, [ x ], s1));
    }) || this._atomic(function() {
        var s0;
        return this._many(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && this._exec(s0);
    });
};

CSSParser.prototype["decldelim"] = function $decldelim() {
    return this._match(";") && this._exec([ "decldelim" ]);
};

CSSParser.prototype["block"] = function $block() {
    var x;
    return this._match("{") && this._any(function() {
        return this._atomic(function() {
            return this._rule("blockdecl", false, [], null, this["blockdecl"]);
        });
    }) && (x = this._getIntermediate(), true) && this._match("}") && this._exec(CSSParser.concatContent([ "block" ], x));
};

CSSParser.prototype["ruleset"] = function $ruleset() {
    var x, y;
    return this._any(function() {
        return this._atomic(function() {
            return this._rule("selector", false, [], null, this["selector"]);
        });
    }) && (x = this._getIntermediate(), true) && this._rule("block", false, [], null, this["block"]) && (y = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "ruleset" ], x, [ y ]));
};

CSSParser.prototype["combinator"] = function $combinator() {
    var x;
    return (this._match("+") || this._match(">") || this._match("~")) && (x = this._getIntermediate(), true) && this._exec([ "combinator", x ]);
};

CSSParser.prototype["attrib"] = function $attrib() {
    return this._atomic(function() {
        var s0, x, s1, a, s2, y, s3;
        return this._match("[") && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && this._rule("ident", false, [], null, this["ident"]) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._rule("attrselector", false, [], null, this["attrselector"]) && (a = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s2 = this._getIntermediate(), true) && (this._atomic(function() {
            return this._rule("ident", false, [], null, this["ident"]);
        }) || this._atomic(function() {
            return this._rule("string", false, [], null, this["string"]);
        })) && (y = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s3 = this._getIntermediate(), true) && this._match("]") && this._exec(CSSParser.concat([ "attrib" ], s0, [ x ], s1, [ a ], s2, [ y ], s3));
    }) || this._atomic(function() {
        var s0, x, s1;
        return this._match("[") && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && this._rule("ident", false, [], null, this["ident"]) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._match("]") && this._exec(CSSParser.concat([ "attrib" ], s0, [ x ], s1));
    });
};

CSSParser.prototype["clazz"] = function $clazz() {
    var i;
    return this._match(".") && this._rule("ident", false, [], null, this["ident"]) && (i = this._getIntermediate(), true) && this._exec([ "clazz", i ]);
};

CSSParser.prototype["pseudoe"] = function $pseudoe() {
    var x;
    return this._rule("seq", false, [ "::" ], null, this["seq"]) && this._rule("ident", false, [], null, this["ident"]) && (x = this._getIntermediate(), true) && this._exec([ "pseudoe", x ]);
};

CSSParser.prototype["pseudoc"] = function $pseudoc() {
    var x;
    return this._match(":") && (this._atomic(function() {
        return this._rule("funktion", false, [], null, this["funktion"]);
    }) || this._atomic(function() {
        return this._rule("ident", false, [], null, this["ident"]);
    })) && (x = this._getIntermediate(), true) && this._exec([ "pseudoc", x ]);
};

CSSParser.prototype["pseudo"] = function $pseudo() {
    return this._atomic(function() {
        return this._rule("pseudoe", false, [], null, this["pseudoe"]);
    }) || this._atomic(function() {
        return this._rule("pseudoc", false, [], null, this["pseudoc"]);
    });
};

CSSParser.prototype["nthf"] = function $nthf() {
    var x, y;
    return this._match(":") && this._rule("seq", false, [ "nth-" ], null, this["seq"]) && (x = this._getIntermediate(), true) && (this._atomic(function() {
        return this._rule("seq", false, [ "child" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "last-child" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "of-type" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "last-of-type" ], null, this["seq"]);
    })) && (y = this._getIntermediate(), true) && this._exec(x + y);
};

CSSParser.prototype["nth"] = function $nth() {
    return this._atomic(function() {
        var x;
        return this._many(function() {
            return this._atomic(function() {
                return this._atomic(function() {
                    return this._rule("digit", false, [], null, this["digit"]);
                }) || this._match("n");
            });
        }) && (x = this._getIntermediate(), true) && this._exec([ "nth", x.join("") ]);
    }) || this._atomic(function() {
        var x;
        return (this._atomic(function() {
            return this._rule("seq", false, [ "even" ], null, this["seq"]);
        }) || this._atomic(function() {
            return this._rule("seq", false, [ "odd" ], null, this["seq"]);
        })) && (x = this._getIntermediate(), true) && this._exec([ "nth", x ]);
    });
};

CSSParser.prototype["nthselector"] = function $nthselector() {
    var x, y;
    return this._rule("nthf", false, [], null, this["nthf"]) && (x = this._getIntermediate(), true) && this._match("(") && this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            }) || this._atomic(function() {
                return this._rule("unary", false, [], null, this["unary"]);
            }) || this._atomic(function() {
                return this._rule("nth", false, [], null, this["nth"]);
            });
        });
    }) && (y = this._getIntermediate(), true) && this._match(")") && this._exec([ "nthselector", [ "ident", x ] ].concat(y));
};

CSSParser.prototype["namespace"] = function $namespace() {
    return this._match("|") && this._exec([ "namespace" ]);
};

CSSParser.prototype["simpleselector"] = function $simpleselector() {
    var x;
    return this._many(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("nthselector", false, [], null, this["nthselector"]);
            }) || this._atomic(function() {
                return this._rule("combinator", false, [], null, this["combinator"]);
            }) || this._atomic(function() {
                return this._rule("attrib", false, [], null, this["attrib"]);
            }) || this._atomic(function() {
                return this._rule("pseudo", false, [], null, this["pseudo"]);
            }) || this._atomic(function() {
                return this._rule("clazz", false, [], null, this["clazz"]);
            }) || this._atomic(function() {
                return this._rule("shash", false, [], null, this["shash"]);
            }) || this._atomic(function() {
                return this._rule("any", false, [], null, this["any"]);
            }) || this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            }) || this._atomic(function() {
                return this._rule("namespace", false, [], null, this["namespace"]);
            });
        });
    }) && (x = this._getIntermediate(), true) && this._exec(CSSParser.concatContent([ "simpleselector" ], [ x ]));
};

CSSParser.prototype["selector"] = function $selector() {
    var x;
    return this._many(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("simpleselector", false, [], null, this["simpleselector"]);
            }) || this._atomic(function() {
                return this._rule("delim", false, [], null, this["delim"]);
            });
        });
    }) && (x = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "selector" ], x));
};

CSSParser.prototype["declaration"] = function $declaration() {
    var x, y;
    return this._rule("property", false, [], null, this["property"]) && (x = this._getIntermediate(), true) && this._match(":") && this._rule("value", false, [], null, this["value"]) && (y = this._getIntermediate(), true) && this._exec([ "declaration", x, y ]);
};

CSSParser.prototype["filterp"] = function $filterp() {
    var t, s0;
    return (this._atomic(function() {
        return this._rule("seq", false, [ "-filter" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "_filter" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "*filter" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "-ms-filter" ], null, this["seq"]);
    }) || this._atomic(function() {
        return this._rule("seq", false, [ "filter" ], null, this["seq"]);
    })) && (t = this._getIntermediate(), true) && this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s0 = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "property", [ "ident", t ] ], s0));
};

CSSParser.prototype["progid"] = function $progid() {
    var s0, x, y, z, s1;
    return this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s0 = this._getIntermediate(), true) && this._rule("seq", false, [ "progid:DXImageTransform.Microsoft." ], null, this["seq"]) && (x = this._getIntermediate(), true) && this._many(function() {
        return this._atomic(function() {
            return this._rule("letter", false, [], null, this["letter"]);
        });
    }) && (y = this._getIntermediate(), true) && this._match("(") && this._many(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("m_string", false, [], null, this["m_string"]);
            }) || this._atomic(function() {
                return this._rule("m_comment", false, [], null, this["m_comment"]);
            }) || this._atomic(function() {
                return this._atomic(function() {
                    return !this._match(")");
                }, true) && this._rule("char", false, [], null, this["char"]);
            });
        });
    }) && (z = this._getIntermediate(), true) && this._match(")") && this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s1 = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "progid" ], s0, [ [ "raw", x + y.join("") + "(" + z.join("") + ")" ] ], s1));
};

CSSParser.prototype["filterv"] = function $filterv() {
    var x;
    return this._many(function() {
        return this._atomic(function() {
            return this._rule("progid", false, [], null, this["progid"]);
        });
    }) && (x = this._getIntermediate(), true) && this._exec([ "filterv" ].concat(x));
};

CSSParser.prototype["filter"] = function $filter() {
    var x, y;
    return this._rule("filterp", false, [], null, this["filterp"]) && (x = this._getIntermediate(), true) && this._match(":") && this._rule("filterv", false, [], null, this["filterv"]) && (y = this._getIntermediate(), true) && this._exec([ "filter", x, y ]);
};

CSSParser.prototype["property"] = function $property() {
    var x, s0;
    return this._rule("ident", false, [], null, this["ident"]) && (x = this._getIntermediate(), true) && this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s0 = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "property", x ], s0));
};

CSSParser.prototype["important"] = function $important() {
    var s0;
    return this._match("!") && this._any(function() {
        return this._atomic(function() {
            return this._rule("sc", false, [], null, this["sc"]);
        });
    }) && (s0 = this._getIntermediate(), true) && this._rule("seq", false, [ "important" ], null, this["seq"]) && this._exec([ "important" ].concat(s0));
};

CSSParser.prototype["unary"] = function $unary() {
    var x;
    return (this._match("-") || this._match("+")) && (x = this._getIntermediate(), true) && this._exec([ "unary", x ]);
};

CSSParser.prototype["operator"] = function $operator() {
    var x;
    return (this._match("/") || this._match(",") || this._match(":") || this._match("=")) && (x = this._getIntermediate(), true) && this._exec([ "operator", x ]);
};

CSSParser.prototype["uri"] = function $uri() {
    return this._atomic(function() {
        var s0, x, s1;
        return this._rule("seq", false, [ "url(" ], null, this["seq"]) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && this._rule("string", false, [], null, this["string"]) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._match(")") && this._exec(CSSParser.concat([ "uri" ], s0, [ x ], s1));
    }) || this._atomic(function() {
        var s0, x, s1;
        return this._rule("seq", false, [ "url(" ], null, this["seq"]) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s0 = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._atomic(function() {
                    return !this._match(")");
                }, true) && this._atomic(function() {
                    return !this._rule("m_w", false, [], null, this["m_w"]);
                }, true) && this._rule("char", false, [], null, this["char"]);
            });
        }) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            });
        }) && (s1 = this._getIntermediate(), true) && this._match(")") && this._exec(CSSParser.concat([ "uri" ], s0, [ [ "raw", x.join("") ] ], s1));
    });
};

CSSParser.prototype["value"] = function $value() {
    var x;
    return this._many(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("sc", false, [], null, this["sc"]);
            }) || this._atomic(function() {
                return this._rule("vhash", false, [], null, this["vhash"]);
            }) || this._atomic(function() {
                return this._rule("any", false, [], null, this["any"]);
            }) || this._atomic(function() {
                return this._rule("block", false, [], null, this["block"]);
            }) || this._atomic(function() {
                return this._rule("atkeyword", false, [], null, this["atkeyword"]);
            }) || this._atomic(function() {
                return this._rule("operator", false, [], null, this["operator"]);
            }) || this._atomic(function() {
                return this._rule("important", false, [], null, this["important"]);
            });
        });
    }) && (x = this._getIntermediate(), true) && this._exec(CSSParser.concat([ "value" ], x));
};

CSSParser.prototype["funktion"] = function $funktion() {
    var x, y;
    return this._rule("ident", false, [], null, this["ident"]) && (x = this._getIntermediate(), true) && this._match("(") && this._rule("functionBody", false, [], null, this["functionBody"]) && (y = this._getIntermediate(), true) && this._match(")") && this._exec([ "funktion", x, y ]);
};

CSSParser.prototype["functionBody"] = function $functionBody() {
    var x;
    return this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("tset", false, [], null, this["tset"]);
            }) || this._atomic(function() {
                return this._rule("clazz", false, [], null, this["clazz"]);
            });
        });
    }) && (x = this._getIntermediate(), true) && this._exec([ "functionBody" ].concat(x));
};

CSSParser.prototype["braces"] = function $braces() {
    return this._atomic(function() {
        var x;
        return this._match("(") && this._any(function() {
            return this._atomic(function() {
                return this._rule("tset", false, [], null, this["tset"]);
            });
        }) && (x = this._getIntermediate(), true) && this._match(")") && this._exec(CSSParser.concat([ "braces", "(", ")" ], x));
    }) || this._atomic(function() {
        var x;
        return this._match("[") && this._any(function() {
            return this._atomic(function() {
                return this._rule("tset", false, [], null, this["tset"]);
            });
        }) && (x = this._getIntermediate(), true) && this._match("]") && this._exec(CSSParser.concat([ "braces", "[", "]" ], x));
    });
};

CSSParser.prototype["jsLT"] = function $jsLT() {
    return this._match("\n") || this._match("\r");
};

CSSParser.prototype["jsComment"] = function $jsComment() {
    return this._atomic(function() {
        return this._rule("jsMLComment", false, [], null, this["jsMLComment"]);
    }) || this._atomic(function() {
        return this._rule("jsSLComment", false, [], null, this["jsSLComment"]);
    });
};

CSSParser.prototype["jsMLComment"] = function $jsMLComment() {
    var x;
    return this._atomic(function() {
        return this._match("/") && this._match("*");
    }) && this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return !(this._match("*") && this._match("/"));
            }, true) && this._rule("char", false, [], null, this["char"]);
        });
    }) && (x = this._getIntermediate(), true) && this._atomic(function() {
        return this._match("*") && this._match("/");
    }) && this._exec("/*" + x.join("") + "*/");
};

CSSParser.prototype["jsSLComment"] = function $jsSLComment() {
    var x;
    return this._atomic(function() {
        return this._match("/") && this._match("/");
    }) && this._any(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return !this._rule("jsLT", false, [], null, this["jsLT"]);
            }, true) && this._rule("char", false, [], null, this["char"]);
        });
    }) && (x = this._getIntermediate(), true) && this._exec("//" + x.join(""));
};

CSSParser.prototype["jsString"] = function $jsString() {
    return this._atomic(function() {
        var x;
        return this._match('"') && this._any(function() {
            return this._atomic(function() {
                return this._rule("jsDSChar", false, [], null, this["jsDSChar"]);
            });
        }) && (x = this._getIntermediate(), true) && this._match('"') && this._exec('"' + x.join("") + '"');
    }) || this._atomic(function() {
        var x;
        return this._match("'") && this._any(function() {
            return this._atomic(function() {
                return this._rule("jsSSChar", false, [], null, this["jsSSChar"]);
            });
        }) && (x = this._getIntermediate(), true) && this._match("'") && this._exec("'" + x.join("") + "'");
    });
};

CSSParser.prototype["jsDSChar"] = function $jsDSChar() {
    return this._atomic(function() {
        return this._atomic(function() {
            return !this._match('"');
        }, true) && this._atomic(function() {
            return !this._match("\\");
        }, true) && this._atomic(function() {
            return !this._rule("jsLT", false, [], null, this["jsLT"]);
        }, true) && this._rule("char", false, [], null, this["char"]);
    }) || this._atomic(function() {
        return this._rule("jsEscapeChar", false, [], null, this["jsEscapeChar"]);
    }) || this._atomic(function() {
        return this._rule("jsLineContinuation", false, [], null, this["jsLineContinuation"]);
    });
};

CSSParser.prototype["jsSSChar"] = function $jsSSChar() {
    return this._atomic(function() {
        return this._atomic(function() {
            return !this._match("'");
        }, true) && this._atomic(function() {
            return !this._match("\\");
        }, true) && this._atomic(function() {
            return !this._rule("jsLT", false, [], null, this["jsLT"]);
        }, true) && this._rule("char", false, [], null, this["char"]);
    }) || this._atomic(function() {
        return this._rule("jsEscapeChar", false, [], null, this["jsEscapeChar"]);
    }) || this._atomic(function() {
        return this._rule("jsLineContinuation", false, [], null, this["jsLineContinuation"]);
    });
};

CSSParser.prototype["jsLineContinuation"] = function $jsLineContinuation() {
    var x;
    return this._match("\\") && this._any(function() {
        return this._atomic(function() {
            return this._rule("jsLT", false, [], null, this["jsLT"]);
        });
    }) && (x = this._getIntermediate(), true) && this._exec("\\" + x.join(""));
};

CSSParser.prototype["jsEscapeChar"] = function $jsEscapeChar() {
    var x;
    return this._match("\\") && this._rule("char", false, [], null, this["char"]) && (x = this._getIntermediate(), true) && this._exec("\\" + x);
};

CSSParser.prototype["jsInBraceChar"] = function $jsInBraceChar() {
    var x;
    return this._atomic(function() {
        return !this._match("(");
    }, true) && this._atomic(function() {
        return !this._match(")");
    }, true) && this._rule("char", false, [], null, this["char"]) && (x = this._getIntermediate(), true) && this._exec(x);
};

CSSParser.prototype["jsBracesContent"] = function $jsBracesContent() {
    var x;
    return this._many(function() {
        return this._atomic(function() {
            return this._atomic(function() {
                return this._rule("jsComment", false, [], null, this["jsComment"]);
            }) || this._atomic(function() {
                return this._rule("jsString", false, [], null, this["jsString"]);
            }) || this._atomic(function() {
                return this._rule("jsEscapeChar", false, [], null, this["jsEscapeChar"]);
            }) || this._atomic(function() {
                return this._rule("jsInBraceChar", false, [], null, this["jsInBraceChar"]);
            });
        });
    }) && (x = this._getIntermediate(), true) && this._exec(x.join(""));
};

CSSParser.prototype["functionExpressionBody"] = function $functionExpressionBody() {
    var y, z;
    return this._atomic(function() {
        var x, xx;
        return this._match("(") && this._any(function() {
            return this._atomic(function() {
                return this._rule("jsBracesContent", false, [], null, this["jsBracesContent"]);
            });
        }) && (x = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("functionExpressionBody", false, [], null, this["functionExpressionBody"]) && (y = this._getIntermediate(), true) && this._any(function() {
                    return this._atomic(function() {
                        return this._rule("jsBracesContent", false, [], null, this["jsBracesContent"]);
                    });
                }) && (z = this._getIntermediate(), true) && this._exec(y + z.join(""));
            });
        }) && (xx = this._getIntermediate(), true) && this._match(")") && this._exec("(" + x.join("") + xx.join("") + ")");
    }) || this._atomic(function() {
        var x, y, z;
        return this._any(function() {
            return this._atomic(function() {
                return this._rule("jsBracesContent", false, [], null, this["jsBracesContent"]);
            });
        }) && (x = this._getIntermediate(), true) && this._rule("functionExpressionBody", false, [], null, this["functionExpressionBody"]) && (y = this._getIntermediate(), true) && this._any(function() {
            return this._atomic(function() {
                return this._rule("jsBracesContent", false, [], null, this["jsBracesContent"]);
            });
        }) && (z = this._getIntermediate(), true) && this._exec(x.join("") + y + z.join(""));
    }) || this._atomic(function() {
        var x;
        return this._many(function() {
            return this._atomic(function() {
                return this._rule("jsBracesContent", false, [], null, this["jsBracesContent"]);
            });
        }) && (x = this._getIntermediate(), true) && this._exec(x.join(""));
    });
};

CSSParser.prototype["functionExpression"] = function $functionExpression() {
    var x;
    return this._atomic(function() {
        return this._match("e") && this._match("x") && this._match("p") && this._match("r") && this._match("e") && this._match("s") && this._match("s") && this._match("i") && this._match("o") && this._match("n") && this._match("(");
    }) && this._any(function() {
        return this._atomic(function() {
            return this._rule("functionExpressionBody", false, [], null, this["functionExpressionBody"]);
        });
    }) && (x = this._getIntermediate(), true) && this._match(")") && this._exec([ "functionExpression", x.join("") ]);
};

CSSParser.prototype["any"] = function $any() {
    return this._atomic(function() {
        return this._rule("braces", false, [], null, this["braces"]);
    }) || this._atomic(function() {
        return this._rule("string", false, [], null, this["string"]);
    }) || this._atomic(function() {
        return this._rule("percentage", false, [], null, this["percentage"]);
    }) || this._atomic(function() {
        return this._rule("dimension", false, [], null, this["dimension"]);
    }) || this._atomic(function() {
        return this._rule("number", false, [], null, this["number"]);
    }) || this._atomic(function() {
        return this._rule("uri", false, [], null, this["uri"]);
    }) || this._atomic(function() {
        return this._rule("functionExpression", false, [], null, this["functionExpression"]);
    }) || this._atomic(function() {
        return this._rule("funktion", false, [], null, this["funktion"]);
    }) || this._atomic(function() {
        return this._rule("ident", false, [], null, this["ident"]);
    }) || this._atomic(function() {
        return this._rule("unary", false, [], null, this["unary"]);
    });
};

CSSParser.concatContent = function(x, y) {
    y.forEach(function(e) {
        x = x.concat(e);
    });
    return x;
};

CSSParser.concat = function() {
    var x = [];
    for (var i in arguments) {
        x = x.concat(arguments[i]);
    }
    return x;
};

CSSParser._m_nmstart = function(x) {
    return /^[_a-zA-Z\*]+$/.test(x) || this._m_escape(x);
};

CSSParser._m_unicode = function(x) {
    return /^\\[0-9a-fA-F]{1,6}(\r\n|[ \n\r\t\f])?$/.test(x);
};

CSSParser._m_escape = function(x) {
    return this._m_unicode(x) || /^\\[^\n\r\f0-9a-fA-F]+$/.test(x);
};

CSSParser._m_nmchar = function(x) {
    return /^[_a-zA-Z0-9\-]+$/.test(x) || this._m_escape(x);
};

CSSParser._m_nmchar2 = function(x) {
    return /^[a-zA-Z0-9]+$/.test(x) || this._m_escape(x);
};

CSSParser._m_nl = function(x) {
    return /^[\n\r\f]+$/.test(x);
};

CSSParser._m_w = function(x) {
    return /^[ \t\r\n\f]+$/.test(x);
};
var ometajs_ = require("ometajs");

var AbstractGrammar = ometajs_.grammars.AbstractGrammar;

var BSJSParser = ometajs_.grammars.BSJSParser;

var BSJSIdentity = ometajs_.grammars.BSJSIdentity;

var BSJSTranslator = ometajs_.grammars.BSJSTranslator;

var CSSTransformer = function CSSTransformer(source) {
    AbstractGrammar.call(this, source);
};

CSSTransformer.grammarName = "CSSTransformer";

CSSTransformer.match = AbstractGrammar.match;

CSSTransformer.matchAll = AbstractGrammar.matchAll;

exports.CSSTransformer = CSSTransformer;

require("util").inherits(CSSTransformer, AbstractGrammar);

CSSTransformer.prototype["anys"] = function $anys() {
    return this._any(function() {
        return this._atomic(function() {
            return this._rule("any", false, [], null, this["any"]);
        });
    });
};

CSSTransformer.prototype["before"] = function $before() {
    return this._list(function() {
        return true;
    });
};

CSSTransformer.prototype["after"] = function $after() {
    return this._list(function() {
        return true;
    });
};

CSSTransformer.prototype["any"] = function $any() {
    return this._atomic(function() {
        return this._rule("before", false, [], null, this["before"]);
    }) || this._atomic(function() {
        return this._rule("ident", false, [], null, this["ident"]);
    }) || this._atomic(function() {
        return this._rule("atkeyword", false, [], null, this["atkeyword"]);
    }) || this._atomic(function() {
        return this._rule("string", false, [], null, this["string"]);
    }) || this._atomic(function() {
        return this._rule("shash", false, [], null, this["shash"]);
    }) || this._atomic(function() {
        return this._rule("vhash", false, [], null, this["vhash"]);
    }) || this._atomic(function() {
        return this._rule("number", false, [], null, this["number"]);
    }) || this._atomic(function() {
        return this._rule("percentage", false, [], null, this["percentage"]);
    }) || this._atomic(function() {
        return this._rule("dimension", false, [], null, this["dimension"]);
    }) || this._atomic(function() {
        return this._rule("cdo", false, [], null, this["cdo"]);
    }) || this._atomic(function() {
        return this._rule("cdc", false, [], null, this["cdc"]);
    }) || this._atomic(function() {
        return this._rule("decldelim", false, [], null, this["decldelim"]);
    }) || this._atomic(function() {
        return this._rule("s", false, [], null, this["s"]);
    }) || this._atomic(function() {
        return this._rule("attrselector", false, [], null, this["attrselector"]);
    }) || this._atomic(function() {
        return this._rule("attrib", false, [], null, this["attrib"]);
    }) || this._atomic(function() {
        return this._rule("nth", false, [], null, this["nth"]);
    }) || this._atomic(function() {
        return this._rule("nthselector", false, [], null, this["nthselector"]);
    }) || this._atomic(function() {
        return this._rule("namespace", false, [], null, this["namespace"]);
    }) || this._atomic(function() {
        return this._rule("clazz", false, [], null, this["clazz"]);
    }) || this._atomic(function() {
        return this._rule("pseudoe", false, [], null, this["pseudoe"]);
    }) || this._atomic(function() {
        return this._rule("pseudoc", false, [], null, this["pseudoc"]);
    }) || this._atomic(function() {
        return this._rule("delim", false, [], null, this["delim"]);
    }) || this._atomic(function() {
        return this._rule("stylesheet", false, [], null, this["stylesheet"]);
    }) || this._atomic(function() {
        return this._rule("atruleb", false, [], null, this["atruleb"]);
    }) || this._atomic(function() {
        return this._rule("atrules", false, [], null, this["atrules"]);
    }) || this._atomic(function() {
        return this._rule("atrulerq", false, [], null, this["atrulerq"]);
    }) || this._atomic(function() {
        return this._rule("atrulers", false, [], null, this["atrulers"]);
    }) || this._atomic(function() {
        return this._rule("atruler", false, [], null, this["atruler"]);
    }) || this._atomic(function() {
        return this._rule("block", false, [], null, this["block"]);
    }) || this._atomic(function() {
        return this._rule("ruleset", false, [], null, this["ruleset"]);
    }) || this._atomic(function() {
        return this._rule("combinator", false, [], null, this["combinator"]);
    }) || this._atomic(function() {
        return this._rule("simpleselector", false, [], null, this["simpleselector"]);
    }) || this._atomic(function() {
        return this._rule("selector", false, [], null, this["selector"]);
    }) || this._atomic(function() {
        return this._rule("declaration", false, [], null, this["declaration"]);
    }) || this._atomic(function() {
        return this._rule("property", false, [], null, this["property"]);
    }) || this._atomic(function() {
        return this._rule("important", false, [], null, this["important"]);
    }) || this._atomic(function() {
        return this._rule("unary", false, [], null, this["unary"]);
    }) || this._atomic(function() {
        return this._rule("operator", false, [], null, this["operator"]);
    }) || this._atomic(function() {
        return this._rule("braces", false, [], null, this["braces"]);
    }) || this._atomic(function() {
        return this._rule("value", false, [], null, this["value"]);
    }) || this._atomic(function() {
        return this._rule("progid", false, [], null, this["progid"]);
    }) || this._atomic(function() {
        return this._rule("filterv", false, [], null, this["filterv"]);
    }) || this._atomic(function() {
        return this._rule("filter", false, [], null, this["filter"]);
    }) || this._atomic(function() {
        return this._rule("comment", false, [], null, this["comment"]);
    }) || this._atomic(function() {
        return this._rule("uri", false, [], null, this["uri"]);
    }) || this._atomic(function() {
        return this._rule("raw", false, [], null, this["raw"]);
    }) || this._atomic(function() {
        return this._rule("functionBody", false, [], null, this["functionBody"]);
    }) || this._atomic(function() {
        return this._rule("funktion", false, [], null, this["funktion"]);
    }) || this._atomic(function() {
        return this._rule("functionExpression", false, [], null, this["functionExpression"]);
    }) || this._atomic(function() {
        return this._rule("after", false, [], null, this["after"]);
    });
};

CSSTransformer.prototype["ident"] = function $ident() {
    var t, x;
    return this._list(function() {
        return this._match("ident") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["atkeyword"] = function $atkeyword() {
    var t, x;
    return this._list(function() {
        return this._match("atkeyword") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["string"] = function $string() {
    var t, x;
    return this._list(function() {
        return this._match("string") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["shash"] = function $shash() {
    var t, x;
    return this._list(function() {
        return this._match("shash") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["vhash"] = function $vhash() {
    var t, x;
    return this._list(function() {
        return this._match("vhash") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["number"] = function $number() {
    var t, x;
    return this._list(function() {
        return this._match("number") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["percentage"] = function $percentage() {
    var t, x;
    return this._list(function() {
        return this._match("percentage") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["dimension"] = function $dimension() {
    var t, x, y;
    return this._list(function() {
        return this._match("dimension") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (y = this._getIntermediate(), true);
    }) && this._exec([ t, x, y ]);
};

CSSTransformer.prototype["cdo"] = function $cdo() {
    var t;
    return this._list(function() {
        return this._match("cdo") && (t = this._getIntermediate(), true);
    }) && this._exec([ t ]);
};

CSSTransformer.prototype["cdc"] = function $cdc() {
    var t;
    return this._list(function() {
        return this._match("cdc") && (t = this._getIntermediate(), true);
    }) && this._exec([ t ]);
};

CSSTransformer.prototype["decldelim"] = function $decldelim() {
    var t;
    return this._list(function() {
        return this._match("decldelim") && (t = this._getIntermediate(), true);
    }) && this._exec([ t ]);
};

CSSTransformer.prototype["s"] = function $s() {
    var t, x;
    return this._list(function() {
        return this._match("s") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["attrselector"] = function $attrselector() {
    var t, x;
    return this._list(function() {
        return this._match("attrselector") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["attrib"] = function $attrib() {
    var t, x;
    return this._list(function() {
        return this._match("attrib") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["nth"] = function $nth() {
    var t, x;
    return this._list(function() {
        return this._match("nth") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["nthselector"] = function $nthselector() {
    var t, x, y;
    return this._list(function() {
        return this._match("nthselector") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (y = this._getIntermediate(), true);
    }) && this._exec([ t, x ].concat(y));
};

CSSTransformer.prototype["namespace"] = function $namespace() {
    var t;
    return this._list(function() {
        return this._match("namespace") && (t = this._getIntermediate(), true);
    }) && this._exec([ t ]);
};

CSSTransformer.prototype["clazz"] = function $clazz() {
    var t, x;
    return this._list(function() {
        return this._match("clazz") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["pseudoe"] = function $pseudoe() {
    var t, x;
    return this._list(function() {
        return this._match("pseudoe") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["pseudoc"] = function $pseudoc() {
    var t, x;
    return this._list(function() {
        return this._match("pseudoc") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["delim"] = function $delim() {
    var t;
    return this._list(function() {
        return this._match("delim") && (t = this._getIntermediate(), true);
    }) && this._exec([ t ]);
};

CSSTransformer.prototype["stylesheet"] = function $stylesheet() {
    var t, x;
    return this._list(function() {
        return this._match("stylesheet") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["atruleb"] = function $atruleb() {
    var t, x;
    return this._list(function() {
        return this._match("atruleb") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["atrules"] = function $atrules() {
    var t, x;
    return this._list(function() {
        return this._match("atrules") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["atrulerq"] = function $atrulerq() {
    var t, x;
    return this._list(function() {
        return this._match("atrulerq") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["atrulers"] = function $atrulers() {
    var t, x;
    return this._list(function() {
        return this._match("atrulers") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["atruler"] = function $atruler() {
    var t, x;
    return this._list(function() {
        return this._match("atruler") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["block"] = function $block() {
    var t, x;
    return this._list(function() {
        return this._match("block") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["ruleset"] = function $ruleset() {
    var t, x;
    return this._list(function() {
        return this._match("ruleset") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["combinator"] = function $combinator() {
    var t, x;
    return this._list(function() {
        return this._match("combinator") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["simpleselector"] = function $simpleselector() {
    var t, x;
    return this._list(function() {
        return this._match("simpleselector") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["selector"] = function $selector() {
    var t, x;
    return this._list(function() {
        return this._match("selector") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["declaration"] = function $declaration() {
    var t, p, v;
    return this._list(function() {
        return this._match("declaration") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (p = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (v = this._getIntermediate(), true);
    }) && this._exec([ t, p, v ]);
};

CSSTransformer.prototype["property"] = function $property() {
    var t, x;
    return this._list(function() {
        return this._match("property") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["important"] = function $important() {
    var t, x;
    return this._list(function() {
        return this._match("important") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["unary"] = function $unary() {
    var t, x;
    return this._list(function() {
        return this._match("unary") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["operator"] = function $operator() {
    var t, x;
    return this._list(function() {
        return this._match("operator") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["braces"] = function $braces() {
    var t, x, y, z;
    return this._list(function() {
        return this._match("braces") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true) && this._skip() && (y = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (z = this._getIntermediate(), true);
    }) && this._exec([ t, x, y ].concat(z));
};

CSSTransformer.prototype["value"] = function $value() {
    var t, x;
    return this._list(function() {
        return this._match("value") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["progid"] = function $progid() {
    var t, x;
    return this._list(function() {
        return this._match("progid") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["filterv"] = function $filterv() {
    var t, x;
    return this._list(function() {
        return this._match("filterv") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["filter"] = function $filter() {
    var t, p, v;
    return this._list(function() {
        return this._match("filter") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (p = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (v = this._getIntermediate(), true);
    }) && this._exec([ t, p, v ]);
};

CSSTransformer.prototype["comment"] = function $comment() {
    var t, x;
    return this._list(function() {
        return this._match("comment") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["uri"] = function $uri() {
    var t, x;
    return this._list(function() {
        return this._match("uri") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["raw"] = function $raw() {
    var t, x;
    return this._list(function() {
        return this._match("raw") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};

CSSTransformer.prototype["functionBody"] = function $functionBody() {
    var t, x;
    return this._list(function() {
        return this._match("functionBody") && (t = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec([ t ].concat(x));
};

CSSTransformer.prototype["funktion"] = function $funktion() {
    var t, x, y;
    return this._list(function() {
        return this._match("funktion") && (t = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (y = this._getIntermediate(), true);
    }) && this._exec([ t, x, y ]);
};

CSSTransformer.prototype["functionExpression"] = function $functionExpression() {
    var t, x;
    return this._list(function() {
        return this._match("functionExpression") && (t = this._getIntermediate(), true) && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec([ t, x ]);
};
var ometajs_ = require("ometajs");

var AbstractGrammar = ometajs_.grammars.AbstractGrammar;

var BSJSParser = ometajs_.grammars.BSJSParser;

var BSJSIdentity = ometajs_.grammars.BSJSIdentity;

var BSJSTranslator = ometajs_.grammars.BSJSTranslator;

var CSSTranslator = function CSSTranslator(source) {
    AbstractGrammar.call(this, source);
};

CSSTranslator.grammarName = "CSSTranslator";

CSSTranslator.match = AbstractGrammar.match;

CSSTranslator.matchAll = AbstractGrammar.matchAll;

exports.CSSTranslator = CSSTranslator;

require("util").inherits(CSSTranslator, AbstractGrammar);

CSSTranslator.prototype["anys"] = function $anys() {
    return this._any(function() {
        return this._atomic(function() {
            return this._rule("any", false, [], null, this["any"]);
        });
    });
};

CSSTranslator.prototype["before"] = function $before() {
    return this._list(function() {
        return true;
    });
};

CSSTranslator.prototype["after"] = function $after() {
    return this._list(function() {
        return true;
    });
};

CSSTranslator.prototype["any"] = function $any() {
    return this._atomic(function() {
        return this._rule("before", false, [], null, this["before"]);
    }) || this._atomic(function() {
        return this._rule("ident", false, [], null, this["ident"]);
    }) || this._atomic(function() {
        return this._rule("atkeyword", false, [], null, this["atkeyword"]);
    }) || this._atomic(function() {
        return this._rule("string", false, [], null, this["string"]);
    }) || this._atomic(function() {
        return this._rule("shash", false, [], null, this["shash"]);
    }) || this._atomic(function() {
        return this._rule("vhash", false, [], null, this["vhash"]);
    }) || this._atomic(function() {
        return this._rule("number", false, [], null, this["number"]);
    }) || this._atomic(function() {
        return this._rule("percentage", false, [], null, this["percentage"]);
    }) || this._atomic(function() {
        return this._rule("dimension", false, [], null, this["dimension"]);
    }) || this._atomic(function() {
        return this._rule("cdo", false, [], null, this["cdo"]);
    }) || this._atomic(function() {
        return this._rule("cdc", false, [], null, this["cdc"]);
    }) || this._atomic(function() {
        return this._rule("decldelim", false, [], null, this["decldelim"]);
    }) || this._atomic(function() {
        return this._rule("s", false, [], null, this["s"]);
    }) || this._atomic(function() {
        return this._rule("attrselector", false, [], null, this["attrselector"]);
    }) || this._atomic(function() {
        return this._rule("attrib", false, [], null, this["attrib"]);
    }) || this._atomic(function() {
        return this._rule("nth", false, [], null, this["nth"]);
    }) || this._atomic(function() {
        return this._rule("nthselector", false, [], null, this["nthselector"]);
    }) || this._atomic(function() {
        return this._rule("namespace", false, [], null, this["namespace"]);
    }) || this._atomic(function() {
        return this._rule("clazz", false, [], null, this["clazz"]);
    }) || this._atomic(function() {
        return this._rule("pseudoe", false, [], null, this["pseudoe"]);
    }) || this._atomic(function() {
        return this._rule("pseudoc", false, [], null, this["pseudoc"]);
    }) || this._atomic(function() {
        return this._rule("delim", false, [], null, this["delim"]);
    }) || this._atomic(function() {
        return this._rule("stylesheet", false, [], null, this["stylesheet"]);
    }) || this._atomic(function() {
        return this._rule("atruleb", false, [], null, this["atruleb"]);
    }) || this._atomic(function() {
        return this._rule("atrules", false, [], null, this["atrules"]);
    }) || this._atomic(function() {
        return this._rule("atrulerq", false, [], null, this["atrulerq"]);
    }) || this._atomic(function() {
        return this._rule("atrulers", false, [], null, this["atrulers"]);
    }) || this._atomic(function() {
        return this._rule("atruler", false, [], null, this["atruler"]);
    }) || this._atomic(function() {
        return this._rule("block", false, [], null, this["block"]);
    }) || this._atomic(function() {
        return this._rule("ruleset", false, [], null, this["ruleset"]);
    }) || this._atomic(function() {
        return this._rule("combinator", false, [], null, this["combinator"]);
    }) || this._atomic(function() {
        return this._rule("simpleselector", false, [], null, this["simpleselector"]);
    }) || this._atomic(function() {
        return this._rule("selector", false, [], null, this["selector"]);
    }) || this._atomic(function() {
        return this._rule("declaration", false, [], null, this["declaration"]);
    }) || this._atomic(function() {
        return this._rule("property", false, [], null, this["property"]);
    }) || this._atomic(function() {
        return this._rule("important", false, [], null, this["important"]);
    }) || this._atomic(function() {
        return this._rule("unary", false, [], null, this["unary"]);
    }) || this._atomic(function() {
        return this._rule("operator", false, [], null, this["operator"]);
    }) || this._atomic(function() {
        return this._rule("braces", false, [], null, this["braces"]);
    }) || this._atomic(function() {
        return this._rule("value", false, [], null, this["value"]);
    }) || this._atomic(function() {
        return this._rule("progid", false, [], null, this["progid"]);
    }) || this._atomic(function() {
        return this._rule("filterv", false, [], null, this["filterv"]);
    }) || this._atomic(function() {
        return this._rule("filter", false, [], null, this["filter"]);
    }) || this._atomic(function() {
        return this._rule("comment", false, [], null, this["comment"]);
    }) || this._atomic(function() {
        return this._rule("uri", false, [], null, this["uri"]);
    }) || this._atomic(function() {
        return this._rule("raw", false, [], null, this["raw"]);
    }) || this._atomic(function() {
        return this._rule("functionBody", false, [], null, this["functionBody"]);
    }) || this._atomic(function() {
        return this._rule("funktion", false, [], null, this["funktion"]);
    }) || this._atomic(function() {
        return this._rule("functionExpression", false, [], null, this["functionExpression"]);
    }) || this._atomic(function() {
        return this._rule("after", false, [], null, this["after"]);
    });
};

CSSTranslator.prototype["ident"] = function $ident() {
    var x;
    return this._list(function() {
        return this._match("ident") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["atkeyword"] = function $atkeyword() {
    var x;
    return this._list(function() {
        return this._match("atkeyword") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true);
    }) && this._exec("@" + x);
};

CSSTranslator.prototype["string"] = function $string() {
    var x;
    return this._list(function() {
        return this._match("string") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["shash"] = function $shash() {
    var x;
    return this._list(function() {
        return this._match("shash") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec("#" + x);
};

CSSTranslator.prototype["vhash"] = function $vhash() {
    var x;
    return this._list(function() {
        return this._match("vhash") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec("#" + x);
};

CSSTranslator.prototype["number"] = function $number() {
    var x;
    return this._list(function() {
        return this._match("number") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["percentage"] = function $percentage() {
    var x;
    return this._list(function() {
        return this._match("percentage") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x + "%");
};

CSSTranslator.prototype["dimension"] = function $dimension() {
    var x, y;
    return this._list(function() {
        return this._match("dimension") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (y = this._getIntermediate(), true);
    }) && this._exec(x + y);
};

CSSTranslator.prototype["cdo"] = function $cdo() {
    return this._list(function() {
        return this._match("cdo");
    }) && this._exec("<!--");
};

CSSTranslator.prototype["cdc"] = function $cdc() {
    return this._list(function() {
        return this._match("cdc");
    }) && this._exec("-->");
};

CSSTranslator.prototype["decldelim"] = function $decldelim() {
    return this._list(function() {
        return this._match("decldelim");
    }) && this._exec(";");
};

CSSTranslator.prototype["s"] = function $s() {
    var x;
    return this._list(function() {
        return this._match("s") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["attrselector"] = function $attrselector() {
    var x;
    return this._list(function() {
        return this._match("attrselector") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["attrib"] = function $attrib() {
    var x;
    return this._list(function() {
        return this._match("attrib") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec("[" + x.join("") + "]");
};

CSSTranslator.prototype["nth"] = function $nth() {
    var x;
    return this._list(function() {
        return this._match("nth") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["nthselector"] = function $nthselector() {
    var x, y;
    return this._list(function() {
        return this._match("nthselector") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (y = this._getIntermediate(), true);
    }) && this._exec(":" + x + "(" + y.join("") + ")");
};

CSSTranslator.prototype["namespace"] = function $namespace() {
    return this._list(function() {
        return this._match("namespace");
    }) && this._exec("|");
};

CSSTranslator.prototype["clazz"] = function $clazz() {
    var x;
    return this._list(function() {
        return this._match("clazz") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true);
    }) && this._exec("." + x);
};

CSSTranslator.prototype["pseudoe"] = function $pseudoe() {
    var x;
    return this._list(function() {
        return this._match("pseudoe") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec("::" + x.join(""));
};

CSSTranslator.prototype["pseudoc"] = function $pseudoc() {
    var x;
    return this._list(function() {
        return this._match("pseudoc") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(":" + x.join(""));
};

CSSTranslator.prototype["delim"] = function $delim() {
    return this._list(function() {
        return this._match("delim");
    }) && this._exec(",");
};

CSSTranslator.prototype["stylesheet"] = function $stylesheet() {
    var x;
    return this._list(function() {
        return this._match("stylesheet") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["atruleb"] = function $atruleb() {
    var x;
    return this._list(function() {
        return this._match("atruleb") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["atrules"] = function $atrules() {
    var x;
    return this._list(function() {
        return this._match("atrules") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join("") + ";");
};

CSSTranslator.prototype["atrulerq"] = function $atrulerq() {
    var x;
    return this._list(function() {
        return this._match("atrulerq") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["atrulers"] = function $atrulers() {
    var x;
    return this._list(function() {
        return this._match("atrulers") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["atruler"] = function $atruler() {
    var x, y, z;
    return this._list(function() {
        return this._match("atruler") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (y = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (z = this._getIntermediate(), true);
    }) && this._exec(x + y + "{" + z + "}");
};

CSSTranslator.prototype["block"] = function $block() {
    var x;
    return this._list(function() {
        return this._match("block") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec("{" + x.join("") + "}");
};

CSSTranslator.prototype["ruleset"] = function $ruleset() {
    var x;
    return this._list(function() {
        return this._match("ruleset") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["combinator"] = function $combinator() {
    var x;
    return this._list(function() {
        return this._match("combinator") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["simpleselector"] = function $simpleselector() {
    var x;
    return this._list(function() {
        return this._match("simpleselector") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["selector"] = function $selector() {
    var x;
    return this._list(function() {
        return this._match("selector") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["declaration"] = function $declaration() {
    var p, v;
    return this._list(function() {
        return this._match("declaration") && this._rule("any", false, [], null, this["any"]) && (p = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (v = this._getIntermediate(), true);
    }) && this._exec(p + ":" + v);
};

CSSTranslator.prototype["property"] = function $property() {
    var x;
    return this._list(function() {
        return this._match("property") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["important"] = function $important() {
    var x;
    return this._list(function() {
        return this._match("important") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec("!" + x.join("") + "important");
};

CSSTranslator.prototype["unary"] = function $unary() {
    var x;
    return this._list(function() {
        return this._match("unary") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["operator"] = function $operator() {
    var x;
    return this._list(function() {
        return this._match("operator") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["braces"] = function $braces() {
    var x, y, z;
    return this._list(function() {
        return this._match("braces") && this._skip() && (x = this._getIntermediate(), true) && this._skip() && (y = this._getIntermediate(), true) && this._rule("anys", false, [], null, this["anys"]) && (z = this._getIntermediate(), true);
    }) && this._exec(x + z.join("") + y);
};

CSSTranslator.prototype["value"] = function $value() {
    var x;
    return this._list(function() {
        return this._match("value") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["progid"] = function $progid() {
    var x;
    return this._list(function() {
        return this._match("progid") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["filterv"] = function $filterv() {
    var x;
    return this._list(function() {
        return this._match("filterv") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["filter"] = function $filter() {
    var p, v;
    return this._list(function() {
        return this._match("filter") && this._rule("any", false, [], null, this["any"]) && (p = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (v = this._getIntermediate(), true);
    }) && this._exec(p + ":" + v);
};

CSSTranslator.prototype["comment"] = function $comment() {
    var x;
    return this._list(function() {
        return this._match("comment") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec("/*" + x + "*/");
};

CSSTranslator.prototype["uri"] = function $uri() {
    var x;
    return this._list(function() {
        return this._match("uri") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec("url(" + x.join("") + ")");
};

CSSTranslator.prototype["raw"] = function $raw() {
    var x;
    return this._list(function() {
        return this._match("raw") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec(x);
};

CSSTranslator.prototype["functionBody"] = function $functionBody() {
    var x;
    return this._list(function() {
        return this._match("functionBody") && this._rule("anys", false, [], null, this["anys"]) && (x = this._getIntermediate(), true);
    }) && this._exec(x.join(""));
};

CSSTranslator.prototype["funktion"] = function $funktion() {
    var x, y;
    return this._list(function() {
        return this._match("funktion") && this._rule("any", false, [], null, this["any"]) && (x = this._getIntermediate(), true) && this._rule("any", false, [], null, this["any"]) && (y = this._getIntermediate(), true);
    }) && this._exec(x + "(" + y + ")");
};

CSSTranslator.prototype["functionExpression"] = function $functionExpression() {
    var x;
    return this._list(function() {
        return this._match("functionExpression") && this._skip() && (x = this._getIntermediate(), true);
    }) && this._exec("expression(" + x + ")");
};
