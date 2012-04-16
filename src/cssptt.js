var ometajs = require('ometajs'),
    OMeta = ometajs.OMeta;
var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}{
    var CSSParser = exports.CSSParser = objectThatDelegatesTo(OMeta, {
        m_comment: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "/");
                this._applyWithArgs("exactly", "*");
                "/*";
                x = this._many(function() {
                    return function() {
                        this._not(function() {
                            return function() {
                                this._applyWithArgs("exactly", "*");
                                this._applyWithArgs("exactly", "/");
                                return "*/";
                            }.call(this);
                        });
                        return this._apply("char");
                    }.call(this);
                });
                this._applyWithArgs("exactly", "*");
                this._applyWithArgs("exactly", "/");
                "*/";
                return "/*" + x.join("") + "*/";
            }.call(this);
        },
        m_ident: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y, z, x, y, z;
            return this._or(function() {
                return function() {
                    switch (this._apply("anything")) {
                      case "-":
                        return function() {
                            x = this._apply("char");
                            this._applyWithArgs("m_nmstart", x);
                            x;
                            z = this._many(function() {
                                return this._or(function() {
                                    return this._apply("escape");
                                }, function() {
                                    return function() {
                                        y = this._apply("anything");
                                        this._applyWithArgs("m_nmchar", y);
                                        return y;
                                    }.call(this);
                                });
                            });
                            return "-" + x + z.join("");
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
            }, function() {
                return function() {
                    x = this._apply("char");
                    this._applyWithArgs("m_nmstart", x);
                    x;
                    z = this._many(function() {
                        return this._or(function() {
                            return this._apply("escape");
                        }, function() {
                            return function() {
                                y = this._apply("anything");
                                this._applyWithArgs("m_nmchar", y);
                                return y;
                            }.call(this);
                        });
                    });
                    return x + z.join("");
                }.call(this);
            });
        },
        escape: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "\\");
                x = this._apply("char");
                return "\\" + x;
            }.call(this);
        },
        m_name: function() {
            var $elf = this, _fromIdx = this.input.idx, x, xx;
            return function() {
                xx = this._many1(function() {
                    return function() {
                        x = this._apply("anything");
                        this._applyWithArgs("m_nmchar", x);
                        return x;
                    }.call(this);
                });
                return xx.join("");
            }.call(this);
        },
        m_name2: function() {
            var $elf = this, _fromIdx = this.input.idx, x, xx;
            return function() {
                xx = this._many1(function() {
                    return function() {
                        x = this._apply("anything");
                        this._applyWithArgs("m_nmchar2", x);
                        return x;
                    }.call(this);
                });
                return xx.join("");
            }.call(this);
        },
        m_number: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y, x, x;
            return this._or(function() {
                return function() {
                    x = this._many1(function() {
                        return this._apply("digit");
                    });
                    this._applyWithArgs("exactly", ".");
                    y = this._many1(function() {
                        return this._apply("digit");
                    });
                    return x.join("") + "." + y.join("");
                }.call(this);
            }, function() {
                return function() {
                    switch (this._apply("anything")) {
                      case ".":
                        return function() {
                            x = this._many1(function() {
                                return this._apply("digit");
                            });
                            return "." + x.join("");
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
            }, function() {
                return function() {
                    x = this._many1(function() {
                        return this._apply("digit");
                    });
                    return x.join("");
                }.call(this);
            });
        },
        m_string: function() {
            var $elf = this, _fromIdx = this.input.idx, s, s;
            return function() {
                switch (this._apply("anything")) {
                  case '"':
                    return function() {
                        s = this._many(function() {
                            return this._or(function() {
                                return this._apply("m_string_nl1");
                            }, function() {
                                return function() {
                                    this._not(function() {
                                        return this._applyWithArgs("exactly", '"');
                                    });
                                    return this._apply("char");
                                }.call(this);
                            });
                        });
                        this._applyWithArgs("exactly", '"');
                        return '"' + s.join("") + '"';
                    }.call(this);
                  case "'":
                    return function() {
                        s = this._many(function() {
                            return this._or(function() {
                                return this._apply("m_string_nl2");
                            }, function() {
                                return function() {
                                    this._not(function() {
                                        return this._applyWithArgs("exactly", "'");
                                    });
                                    return this._apply("char");
                                }.call(this);
                            });
                        });
                        this._applyWithArgs("exactly", "'");
                        return "'" + s.join("") + "'";
                    }.call(this);
                  default:
                    throw fail();
                }
            }.call(this);
        },
        m_string_nl1: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = function() {
                    switch (this._apply("anything")) {
                      case "\n":
                        return "\n";
                      case "\r":
                        return "\r";
                      case "\\":
                        return function() {
                            this._applyWithArgs("exactly", '"');
                            return '\\"';
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return x;
            }.call(this);
        },
        m_string_nl2: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = function() {
                    switch (this._apply("anything")) {
                      case "\n":
                        return "\n";
                      case "\r":
                        return "\r";
                      case "\\":
                        return function() {
                            this._applyWithArgs("exactly", "'");
                            return "\\'";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return x;
            }.call(this);
        },
        m_nmstart: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_nmstart(x));
            }.call(this);
        },
        m_unicode: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_unicode(x));
            }.call(this);
        },
        m_escape: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_escape(x));
            }.call(this);
        },
        m_nmchar: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_nmchar(x));
            }.call(this);
        },
        m_nmchar2: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_nmchar2(x));
            }.call(this);
        },
        m_nl: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_nl(x));
            }.call(this);
        },
        m_w: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("anything");
                return this._pred(this._m_w(x));
            }.call(this);
        },
        ident: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("m_ident");
                return [ "ident", x ];
            }.call(this);
        },
        atkeyword: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "@");
                x = this._apply("ident");
                return [ "atkeyword", x ];
            }.call(this);
        },
        string: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("m_string");
                return [ "string", x ];
            }.call(this);
        },
        shash: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "#");
                x = this._apply("m_name");
                return [ "shash", x ];
            }.call(this);
        },
        vhash: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "#");
                x = this._apply("m_name2");
                return [ "vhash", x ];
            }.call(this);
        },
        number: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("m_number");
                return [ "number", x ];
            }.call(this);
        },
        percentage: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._apply("number");
                this._applyWithArgs("exactly", "%");
                return [ "percentage", x ];
            }.call(this);
        },
        dimension: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                x = this._apply("number");
                y = this._apply("m_name2");
                return [ "dimension", x, [ "ident", y ] ];
            }.call(this);
        },
        cdo: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                this._applyWithArgs("exactly", "<");
                this._applyWithArgs("exactly", "!");
                this._applyWithArgs("exactly", "-");
                this._applyWithArgs("exactly", "-");
                "<!--";
                return [ "cdo" ];
            }.call(this);
        },
        cdc: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                this._applyWithArgs("exactly", "-");
                this._applyWithArgs("exactly", "-");
                this._applyWithArgs("exactly", ">");
                "-->";
                return [ "cdc" ];
            }.call(this);
        },
        s: function() {
            var $elf = this, _fromIdx = this.input.idx, x, xx;
            return function() {
                xx = this._many1(function() {
                    return function() {
                        x = this._apply("anything");
                        this._applyWithArgs("m_w", x);
                        return x;
                    }.call(this);
                });
                return [ "s", xx.join("") ];
            }.call(this);
        },
        attrselector: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = function() {
                    switch (this._apply("anything")) {
                      case "^":
                        return function() {
                            this._applyWithArgs("exactly", "=");
                            return "^=";
                        }.call(this);
                      case "~":
                        return function() {
                            this._applyWithArgs("exactly", "=");
                            return "~=";
                        }.call(this);
                      case "=":
                        return "=";
                      case "$":
                        return function() {
                            this._applyWithArgs("exactly", "=");
                            return "$=";
                        }.call(this);
                      case "|":
                        return function() {
                            this._applyWithArgs("exactly", "=");
                            return "|=";
                        }.call(this);
                      case "*":
                        return function() {
                            this._applyWithArgs("exactly", "=");
                            return "*=";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "attrselector", x ];
            }.call(this);
        },
        delim: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                this._applyWithArgs("exactly", ",");
                return [ "delim" ];
            }.call(this);
        },
        comment: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "/");
                this._applyWithArgs("exactly", "*");
                "/*";
                x = this._many(function() {
                    return function() {
                        this._not(function() {
                            return function() {
                                this._applyWithArgs("exactly", "*");
                                this._applyWithArgs("exactly", "/");
                                return "*/";
                            }.call(this);
                        });
                        return this._apply("char");
                    }.call(this);
                });
                this._applyWithArgs("exactly", "*");
                this._applyWithArgs("exactly", "/");
                "*/";
                return [ "comment", x.join("") ];
            }.call(this);
        },
        sc: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("s");
            }, function() {
                return this._apply("comment");
            });
        },
        tset: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("vhash");
            }, function() {
                return this._apply("any");
            }, function() {
                return this._apply("sc");
            }, function() {
                return this._apply("operator");
            });
        },
        stylesheet: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many(function() {
                    return this._or(function() {
                        return this._apply("cdo");
                    }, function() {
                        return this._apply("cdc");
                    }, function() {
                        return this._apply("sc");
                    }, function() {
                        return this._apply("statement");
                    });
                });
                return this.concat([ "stylesheet" ], x);
            }.call(this);
        },
        statement: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("ruleset");
            }, function() {
                return this._apply("atrule");
            });
        },
        atruleb: function() {
            var $elf = this, _fromIdx = this.input.idx, ak, ap, b;
            return function() {
                ak = this._apply("atkeyword");
                ap = this._many(function() {
                    return this._apply("tset");
                });
                b = this._apply("block");
                return this.concat([ "atruleb", ak ], ap, [ b ]);
            }.call(this);
        },
        atrules: function() {
            var $elf = this, _fromIdx = this.input.idx, ak, ap;
            return function() {
                ak = this._apply("atkeyword");
                ap = this._many(function() {
                    return this._apply("tset");
                });
                this._applyWithArgs("exactly", ";");
                return this.concat([ "atrules", ak ], ap);
            }.call(this);
        },
        atrulerq: function() {
            var $elf = this, _fromIdx = this.input.idx, ap;
            return function() {
                ap = this._many(function() {
                    return this._apply("tset");
                });
                return [ "atrulerq" ].concat(ap);
            }.call(this);
        },
        atrulers: function() {
            var $elf = this, _fromIdx = this.input.idx, s0, r, s1;
            return function() {
                s0 = this._many(function() {
                    return this._apply("sc");
                });
                r = this._many(function() {
                    return this._apply("ruleset");
                });
                s1 = this._many(function() {
                    return this._apply("sc");
                });
                return this.concat([ "atrulers" ], s0, r, s1);
            }.call(this);
        },
        atruler: function() {
            var $elf = this, _fromIdx = this.input.idx, ak, x, y;
            return function() {
                ak = this._apply("atkeyword");
                x = this._apply("atrulerq");
                this._applyWithArgs("exactly", "{");
                y = this._apply("atrulers");
                this._applyWithArgs("exactly", "}");
                return [ "atruler", ak, x, y ];
            }.call(this);
        },
        atrule: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("atruler");
            }, function() {
                return this._apply("atruleb");
            }, function() {
                return this._apply("atrules");
            });
        },
        blockdecl: function() {
            var $elf = this, _fromIdx = this.input.idx, s0, x, y, s1, s0, x, s1, s0, x, s1, s0;
            return this._or(function() {
                return function() {
                    s0 = this._many(function() {
                        return this._apply("sc");
                    });
                    x = this._or(function() {
                        return this._apply("filter");
                    }, function() {
                        return this._apply("declaration");
                    });
                    y = this._apply("decldelim");
                    s1 = this._many(function() {
                        return this._apply("sc");
                    });
                    return this.concat(s0, [ x ], [ y ], s1);
                }.call(this);
            }, function() {
                return function() {
                    s0 = this._many(function() {
                        return this._apply("sc");
                    });
                    x = this._or(function() {
                        return this._apply("filter");
                    }, function() {
                        return this._apply("declaration");
                    });
                    s1 = this._many(function() {
                        return this._apply("sc");
                    });
                    return this.concat(s0, [ x ], s1);
                }.call(this);
            }, function() {
                return function() {
                    s0 = this._many(function() {
                        return this._apply("sc");
                    });
                    x = this._apply("decldelim");
                    s1 = this._many(function() {
                        return this._apply("sc");
                    });
                    return this.concat(s0, [ x ], s1);
                }.call(this);
            }, function() {
                return function() {
                    s0 = this._many1(function() {
                        return this._apply("sc");
                    });
                    return s0;
                }.call(this);
            });
        },
        decldelim: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                this._applyWithArgs("exactly", ";");
                return [ "decldelim" ];
            }.call(this);
        },
        block: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "{");
                x = this._many(function() {
                    return this._apply("blockdecl");
                });
                this._applyWithArgs("exactly", "}");
                return this.concatContent([ "block" ], x);
            }.call(this);
        },
        ruleset: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                x = this._many(function() {
                    return this._apply("selector");
                });
                y = this._apply("block");
                return this.concat([ "ruleset" ], x, [ y ]);
            }.call(this);
        },
        combinator: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = function() {
                    switch (this._apply("anything")) {
                      case "~":
                        return "~";
                      case "+":
                        return "+";
                      case ">":
                        return ">";
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "combinator", x ];
            }.call(this);
        },
        attrib: function() {
            var $elf = this, _fromIdx = this.input.idx, s0, x, s1, a, s2, y, s3, s0, x, s1;
            return function() {
                switch (this._apply("anything")) {
                  case "[":
                    return this._or(function() {
                        return function() {
                            s0 = this._many(function() {
                                return this._apply("sc");
                            });
                            x = this._apply("ident");
                            s1 = this._many(function() {
                                return this._apply("sc");
                            });
                            a = this._apply("attrselector");
                            s2 = this._many(function() {
                                return this._apply("sc");
                            });
                            y = this._or(function() {
                                return this._apply("ident");
                            }, function() {
                                return this._apply("string");
                            });
                            s3 = this._many(function() {
                                return this._apply("sc");
                            });
                            this._applyWithArgs("exactly", "]");
                            return this.concat([ "attrib" ], s0, [ x ], s1, [ a ], s2, [ y ], s3);
                        }.call(this);
                    }, function() {
                        return function() {
                            s0 = this._many(function() {
                                return this._apply("sc");
                            });
                            x = this._apply("ident");
                            s1 = this._many(function() {
                                return this._apply("sc");
                            });
                            this._applyWithArgs("exactly", "]");
                            return this.concat([ "attrib" ], s0, [ x ], s1);
                        }.call(this);
                    });
                  default:
                    throw fail();
                }
            }.call(this);
        },
        clazz: function() {
            var $elf = this, _fromIdx = this.input.idx, i;
            return function() {
                this._applyWithArgs("exactly", ".");
                i = this._apply("ident");
                return [ "clazz", i ];
            }.call(this);
        },
        pseudoe: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", ":");
                this._applyWithArgs("exactly", ":");
                "::";
                x = this._apply("ident");
                return [ "pseudoe", x ];
            }.call(this);
        },
        pseudoc: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", ":");
                x = this._or(function() {
                    return this._apply("funktion");
                }, function() {
                    return this._apply("ident");
                });
                return [ "pseudoc", x ];
            }.call(this);
        },
        pseudo: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("pseudoe");
            }, function() {
                return this._apply("pseudoc");
            });
        },
        nthf: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                this._applyWithArgs("exactly", ":");
                x = function() {
                    this._applyWithArgs("exactly", "n");
                    this._applyWithArgs("exactly", "t");
                    this._applyWithArgs("exactly", "h");
                    this._applyWithArgs("exactly", "-");
                    return "nth-";
                }.call(this);
                y = function() {
                    switch (this._apply("anything")) {
                      case "c":
                        return function() {
                            this._applyWithArgs("exactly", "h");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "d");
                            return "child";
                        }.call(this);
                      case "l":
                        return function() {
                            switch (this._apply("anything")) {
                              case "a":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "s":
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "t":
                                                return function() {
                                                    switch (this._apply("anything")) {
                                                      case "-":
                                                        return function() {
                                                            switch (this._apply("anything")) {
                                                              case "c":
                                                                return function() {
                                                                    this._applyWithArgs("exactly", "h");
                                                                    this._applyWithArgs("exactly", "i");
                                                                    this._applyWithArgs("exactly", "l");
                                                                    this._applyWithArgs("exactly", "d");
                                                                    return "last-child";
                                                                }.call(this);
                                                              case "o":
                                                                return function() {
                                                                    this._applyWithArgs("exactly", "f");
                                                                    this._applyWithArgs("exactly", "-");
                                                                    this._applyWithArgs("exactly", "t");
                                                                    this._applyWithArgs("exactly", "y");
                                                                    this._applyWithArgs("exactly", "p");
                                                                    this._applyWithArgs("exactly", "e");
                                                                    return "last-of-type";
                                                                }.call(this);
                                                              default:
                                                                throw fail();
                                                            }
                                                        }.call(this);
                                                      default:
                                                        throw fail();
                                                    }
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "o":
                        return function() {
                            this._applyWithArgs("exactly", "f");
                            this._applyWithArgs("exactly", "-");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "y");
                            this._applyWithArgs("exactly", "p");
                            this._applyWithArgs("exactly", "e");
                            return "of-type";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return x + y;
            }.call(this);
        },
        nth: function() {
            var $elf = this, _fromIdx = this.input.idx, x, x;
            return this._or(function() {
                return function() {
                    x = this._many1(function() {
                        return this._or(function() {
                            return this._apply("digit");
                        }, function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "n":
                                    return "n";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        });
                    });
                    return [ "nth", x.join("") ];
                }.call(this);
            }, function() {
                return function() {
                    x = function() {
                        switch (this._apply("anything")) {
                          case "e":
                            return function() {
                                this._applyWithArgs("exactly", "v");
                                this._applyWithArgs("exactly", "e");
                                this._applyWithArgs("exactly", "n");
                                return "even";
                            }.call(this);
                          case "o":
                            return function() {
                                this._applyWithArgs("exactly", "d");
                                this._applyWithArgs("exactly", "d");
                                return "odd";
                            }.call(this);
                          default:
                            throw fail();
                        }
                    }.call(this);
                    return [ "nth", x ];
                }.call(this);
            });
        },
        nthselector: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                x = this._apply("nthf");
                this._applyWithArgs("exactly", "(");
                y = this._many(function() {
                    return this._or(function() {
                        return this._apply("sc");
                    }, function() {
                        return this._apply("unary");
                    }, function() {
                        return this._apply("nth");
                    });
                });
                this._applyWithArgs("exactly", ")");
                return [ "nthselector", [ "ident", x ] ].concat(y);
            }.call(this);
        },
        namespace: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                this._applyWithArgs("exactly", "|");
                return [ "namespace" ];
            }.call(this);
        },
        simpleselector: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many1(function() {
                    return this._or(function() {
                        return this._apply("nthselector");
                    }, function() {
                        return this._apply("combinator");
                    }, function() {
                        return this._apply("attrib");
                    }, function() {
                        return this._apply("pseudo");
                    }, function() {
                        return this._apply("clazz");
                    }, function() {
                        return this._apply("shash");
                    }, function() {
                        return this._apply("any");
                    }, function() {
                        return this._apply("sc");
                    }, function() {
                        return this._apply("namespace");
                    });
                });
                return this.concatContent([ "simpleselector" ], [ x ]);
            }.call(this);
        },
        selector: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many1(function() {
                    return this._or(function() {
                        return this._apply("simpleselector");
                    }, function() {
                        return this._apply("delim");
                    });
                });
                return this.concat([ "selector" ], x);
            }.call(this);
        },
        declaration: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                x = this._apply("property");
                this._applyWithArgs("exactly", ":");
                y = this._apply("value");
                return [ "declaration", x, y ];
            }.call(this);
        },
        filterp: function() {
            var $elf = this, _fromIdx = this.input.idx, t, s0;
            return function() {
                t = function() {
                    switch (this._apply("anything")) {
                      case "*":
                        return function() {
                            this._applyWithArgs("exactly", "f");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "r");
                            return "*filter";
                        }.call(this);
                      case "_":
                        return function() {
                            this._applyWithArgs("exactly", "f");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "r");
                            return "_filter";
                        }.call(this);
                      case "f":
                        return function() {
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "r");
                            return "filter";
                        }.call(this);
                      case "-":
                        return function() {
                            switch (this._apply("anything")) {
                              case "m":
                                return function() {
                                    this._applyWithArgs("exactly", "s");
                                    this._applyWithArgs("exactly", "-");
                                    this._applyWithArgs("exactly", "f");
                                    this._applyWithArgs("exactly", "i");
                                    this._applyWithArgs("exactly", "l");
                                    this._applyWithArgs("exactly", "t");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "r");
                                    return "-ms-filter";
                                }.call(this);
                              case "f":
                                return function() {
                                    this._applyWithArgs("exactly", "i");
                                    this._applyWithArgs("exactly", "l");
                                    this._applyWithArgs("exactly", "t");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "r");
                                    return "-filter";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                s0 = this._many(function() {
                    return this._apply("sc");
                });
                return this.concat([ "property", [ "ident", t ] ], s0);
            }.call(this);
        },
        progid: function() {
            var $elf = this, _fromIdx = this.input.idx, s0, x, y, z, s1;
            return function() {
                s0 = this._many(function() {
                    return this._apply("sc");
                });
                x = function() {
                    this._applyWithArgs("exactly", "p");
                    this._applyWithArgs("exactly", "r");
                    this._applyWithArgs("exactly", "o");
                    this._applyWithArgs("exactly", "g");
                    this._applyWithArgs("exactly", "i");
                    this._applyWithArgs("exactly", "d");
                    this._applyWithArgs("exactly", ":");
                    this._applyWithArgs("exactly", "D");
                    this._applyWithArgs("exactly", "X");
                    this._applyWithArgs("exactly", "I");
                    this._applyWithArgs("exactly", "m");
                    this._applyWithArgs("exactly", "a");
                    this._applyWithArgs("exactly", "g");
                    this._applyWithArgs("exactly", "e");
                    this._applyWithArgs("exactly", "T");
                    this._applyWithArgs("exactly", "r");
                    this._applyWithArgs("exactly", "a");
                    this._applyWithArgs("exactly", "n");
                    this._applyWithArgs("exactly", "s");
                    this._applyWithArgs("exactly", "f");
                    this._applyWithArgs("exactly", "o");
                    this._applyWithArgs("exactly", "r");
                    this._applyWithArgs("exactly", "m");
                    this._applyWithArgs("exactly", ".");
                    this._applyWithArgs("exactly", "M");
                    this._applyWithArgs("exactly", "i");
                    this._applyWithArgs("exactly", "c");
                    this._applyWithArgs("exactly", "r");
                    this._applyWithArgs("exactly", "o");
                    this._applyWithArgs("exactly", "s");
                    this._applyWithArgs("exactly", "o");
                    this._applyWithArgs("exactly", "f");
                    this._applyWithArgs("exactly", "t");
                    this._applyWithArgs("exactly", ".");
                    return "progid:DXImageTransform.Microsoft.";
                }.call(this);
                y = this._many1(function() {
                    return this._apply("letter");
                });
                this._applyWithArgs("exactly", "(");
                z = this._many1(function() {
                    return this._or(function() {
                        return this._apply("m_string");
                    }, function() {
                        return this._apply("m_comment");
                    }, function() {
                        return function() {
                            this._not(function() {
                                return this._applyWithArgs("exactly", ")");
                            });
                            return this._apply("char");
                        }.call(this);
                    });
                });
                this._applyWithArgs("exactly", ")");
                s1 = this._many(function() {
                    return this._apply("sc");
                });
                return this.concat([ "progid" ], s0, [ [ "raw", x + y.join("") + "(" + z.join("") + ")" ] ], s1);
            }.call(this);
        },
        filterv: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many1(function() {
                    return this._apply("progid");
                });
                return [ "filterv" ].concat(x);
            }.call(this);
        },
        filter: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                x = this._apply("filterp");
                this._applyWithArgs("exactly", ":");
                y = this._apply("filterv");
                return [ "filter", x, y ];
            }.call(this);
        },
        property: function() {
            var $elf = this, _fromIdx = this.input.idx, x, s0;
            return function() {
                x = this._apply("ident");
                s0 = this._many(function() {
                    return this._apply("sc");
                });
                return this.concat([ "property", x ], s0);
            }.call(this);
        },
        important: function() {
            var $elf = this, _fromIdx = this.input.idx, s0;
            return function() {
                this._applyWithArgs("exactly", "!");
                s0 = this._many(function() {
                    return this._apply("sc");
                });
                this._applyWithArgs("exactly", "i");
                this._applyWithArgs("exactly", "m");
                this._applyWithArgs("exactly", "p");
                this._applyWithArgs("exactly", "o");
                this._applyWithArgs("exactly", "r");
                this._applyWithArgs("exactly", "t");
                this._applyWithArgs("exactly", "a");
                this._applyWithArgs("exactly", "n");
                this._applyWithArgs("exactly", "t");
                "important";
                return [ "important" ].concat(s0);
            }.call(this);
        },
        unary: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = function() {
                    switch (this._apply("anything")) {
                      case "+":
                        return "+";
                      case "-":
                        return "-";
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "unary", x ];
            }.call(this);
        },
        operator: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = function() {
                    switch (this._apply("anything")) {
                      case "=":
                        return "=";
                      case ":":
                        return ":";
                      case "/":
                        return "/";
                      case ",":
                        return ",";
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "operator", x ];
            }.call(this);
        },
        uri: function() {
            var $elf = this, _fromIdx = this.input.idx, s0, x, s1, s0, x, s1;
            return function() {
                switch (this._apply("anything")) {
                  case "u":
                    return function() {
                        switch (this._apply("anything")) {
                          case "r":
                            return function() {
                                switch (this._apply("anything")) {
                                  case "l":
                                    return function() {
                                        switch (this._apply("anything")) {
                                          case "(":
                                            return this._or(function() {
                                                return function() {
                                                    "url(";
                                                    s0 = this._many(function() {
                                                        return this._apply("sc");
                                                    });
                                                    x = this._apply("string");
                                                    s1 = this._many(function() {
                                                        return this._apply("sc");
                                                    });
                                                    this._applyWithArgs("exactly", ")");
                                                    return this.concat([ "uri" ], s0, [ x ], s1);
                                                }.call(this);
                                            }, function() {
                                                return function() {
                                                    "url(";
                                                    s0 = this._many(function() {
                                                        return this._apply("sc");
                                                    });
                                                    x = this._many(function() {
                                                        return function() {
                                                            this._not(function() {
                                                                return this._applyWithArgs("exactly", ")");
                                                            });
                                                            this._not(function() {
                                                                return this._apply("m_w");
                                                            });
                                                            return this._apply("char");
                                                        }.call(this);
                                                    });
                                                    s1 = this._many(function() {
                                                        return this._apply("sc");
                                                    });
                                                    this._applyWithArgs("exactly", ")");
                                                    return this.concat([ "uri" ], s0, [ [ "raw", x.join("") ] ], s1);
                                                }.call(this);
                                            });
                                          default:
                                            throw fail();
                                        }
                                    }.call(this);
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                          default:
                            throw fail();
                        }
                    }.call(this);
                  default:
                    throw fail();
                }
            }.call(this);
        },
        value: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many1(function() {
                    return this._or(function() {
                        return this._apply("sc");
                    }, function() {
                        return this._apply("vhash");
                    }, function() {
                        return this._apply("any");
                    }, function() {
                        return this._apply("block");
                    }, function() {
                        return this._apply("atkeyword");
                    }, function() {
                        return this._apply("operator");
                    }, function() {
                        return this._apply("important");
                    });
                });
                return this.concat([ "value" ], x);
            }.call(this);
        },
        funktion: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y;
            return function() {
                x = this._apply("ident");
                this._applyWithArgs("exactly", "(");
                y = this._apply("functionBody");
                this._applyWithArgs("exactly", ")");
                return [ "funktion", x, y ];
            }.call(this);
        },
        functionBody: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many(function() {
                    return this._or(function() {
                        return this._apply("tset");
                    }, function() {
                        return this._apply("clazz");
                    });
                });
                return [ "functionBody" ].concat(x);
            }.call(this);
        },
        braces: function() {
            var $elf = this, _fromIdx = this.input.idx, x, x;
            return function() {
                switch (this._apply("anything")) {
                  case "[":
                    return function() {
                        x = this._many(function() {
                            return this._apply("tset");
                        });
                        this._applyWithArgs("exactly", "]");
                        return this.concat([ "braces", "[", "]" ], x);
                    }.call(this);
                  case "(":
                    return function() {
                        x = this._many(function() {
                            return this._apply("tset");
                        });
                        this._applyWithArgs("exactly", ")");
                        return this.concat([ "braces", "(", ")" ], x);
                    }.call(this);
                  default:
                    throw fail();
                }
            }.call(this);
        },
        jsLT: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return function() {
                switch (this._apply("anything")) {
                  case "\n":
                    return "\n";
                  case "\r":
                    return "\r";
                  default:
                    throw fail();
                }
            }.call(this);
        },
        jsComment: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("jsMLComment");
            }, function() {
                return this._apply("jsSLComment");
            });
        },
        jsMLComment: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "/");
                this._applyWithArgs("exactly", "*");
                "/*";
                x = this._many(function() {
                    return function() {
                        this._not(function() {
                            return function() {
                                this._applyWithArgs("exactly", "*");
                                this._applyWithArgs("exactly", "/");
                                return "*/";
                            }.call(this);
                        });
                        return this._apply("char");
                    }.call(this);
                });
                this._applyWithArgs("exactly", "*");
                this._applyWithArgs("exactly", "/");
                "*/";
                return "/*" + x.join("") + "*/";
            }.call(this);
        },
        jsSLComment: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "/");
                this._applyWithArgs("exactly", "/");
                "//";
                x = this._many(function() {
                    return function() {
                        this._not(function() {
                            return this._apply("jsLT");
                        });
                        return this._apply("char");
                    }.call(this);
                });
                return "//" + x.join("");
            }.call(this);
        },
        jsString: function() {
            var $elf = this, _fromIdx = this.input.idx, x, x;
            return function() {
                switch (this._apply("anything")) {
                  case '"':
                    return function() {
                        x = this._many(function() {
                            return this._apply("jsDSChar");
                        });
                        this._applyWithArgs("exactly", '"');
                        return '"' + x.join("") + '"';
                    }.call(this);
                  case "'":
                    return function() {
                        x = this._many(function() {
                            return this._apply("jsSSChar");
                        });
                        this._applyWithArgs("exactly", "'");
                        return "'" + x.join("") + "'";
                    }.call(this);
                  default:
                    throw fail();
                }
            }.call(this);
        },
        jsDSChar: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return function() {
                    this._not(function() {
                        return this._applyWithArgs("exactly", '"');
                    });
                    this._not(function() {
                        return this._applyWithArgs("exactly", "\\");
                    });
                    this._not(function() {
                        return this._apply("jsLT");
                    });
                    return this._apply("char");
                }.call(this);
            }, function() {
                return this._apply("jsEscapeChar");
            }, function() {
                return this._apply("jsLineContinuation");
            });
        },
        jsSSChar: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return function() {
                    this._not(function() {
                        return this._applyWithArgs("exactly", "'");
                    });
                    this._not(function() {
                        return this._applyWithArgs("exactly", "\\");
                    });
                    this._not(function() {
                        return this._apply("jsLT");
                    });
                    return this._apply("char");
                }.call(this);
            }, function() {
                return this._apply("jsEscapeChar");
            }, function() {
                return this._apply("jsLineContinuation");
            });
        },
        jsLineContinuation: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "\\");
                x = this._many(function() {
                    return this._apply("jsLT");
                });
                return "\\" + x.join("");
            }.call(this);
        },
        jsEscapeChar: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "\\");
                x = this._apply("char");
                return "\\" + x;
            }.call(this);
        },
        jsInBraceChar: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._not(function() {
                    return this._applyWithArgs("exactly", "(");
                });
                this._not(function() {
                    return this._applyWithArgs("exactly", ")");
                });
                x = this._apply("char");
                return x;
            }.call(this);
        },
        jsBracesContent: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                x = this._many1(function() {
                    return this._or(function() {
                        return this._apply("jsComment");
                    }, function() {
                        return this._apply("jsString");
                    }, function() {
                        return this._apply("jsEscapeChar");
                    }, function() {
                        return this._apply("jsInBraceChar");
                    });
                });
                return x.join("");
            }.call(this);
        },
        functionExpressionBody: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y, z, xx, x, y, z, x;
            return this._or(function() {
                return function() {
                    switch (this._apply("anything")) {
                      case "(":
                        return function() {
                            x = this._many(function() {
                                return this._apply("jsBracesContent");
                            });
                            xx = this._many(function() {
                                return function() {
                                    y = this._apply("functionExpressionBody");
                                    z = this._many(function() {
                                        return this._apply("jsBracesContent");
                                    });
                                    return y + z.join("");
                                }.call(this);
                            });
                            this._applyWithArgs("exactly", ")");
                            return "(" + x.join("") + xx.join("") + ")";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
            }, function() {
                return function() {
                    x = this._many(function() {
                        return this._apply("jsBracesContent");
                    });
                    y = this._apply("functionExpressionBody");
                    z = this._many(function() {
                        return this._apply("jsBracesContent");
                    });
                    return x.join("") + y + z.join("");
                }.call(this);
            }, function() {
                return function() {
                    x = this._many1(function() {
                        return this._apply("jsBracesContent");
                    });
                    return x.join("");
                }.call(this);
            });
        },
        functionExpression: function() {
            var $elf = this, _fromIdx = this.input.idx, x;
            return function() {
                this._applyWithArgs("exactly", "e");
                this._applyWithArgs("exactly", "x");
                this._applyWithArgs("exactly", "p");
                this._applyWithArgs("exactly", "r");
                this._applyWithArgs("exactly", "e");
                this._applyWithArgs("exactly", "s");
                this._applyWithArgs("exactly", "s");
                this._applyWithArgs("exactly", "i");
                this._applyWithArgs("exactly", "o");
                this._applyWithArgs("exactly", "n");
                this._applyWithArgs("exactly", "(");
                "expression(";
                x = this._many(function() {
                    return this._apply("functionExpressionBody");
                });
                this._applyWithArgs("exactly", ")");
                return [ "functionExpression", x.join("") ];
            }.call(this);
        },
        any: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("braces");
            }, function() {
                return this._apply("string");
            }, function() {
                return this._apply("percentage");
            }, function() {
                return this._apply("dimension");
            }, function() {
                return this._apply("number");
            }, function() {
                return this._apply("uri");
            }, function() {
                return this._apply("functionExpression");
            }, function() {
                return this._apply("funktion");
            }, function() {
                return this._apply("ident");
            }, function() {
                return this._apply("unary");
            });
        }
    });
    CSSParser["concatContent"] = function(x, y) {
        y.forEach(function(e) {
            x = x.concat(e);
        });
        return x;
    };
    CSSParser["concat"] = function() {
        var x = [];
        for (var i in arguments) {
            x = x.concat(arguments[i]);
        }
        undefined;
        return x;
    };
    CSSParser["_m_nmstart"] = function(x) {
        return /^[_a-zA-Z\*]+$/.test(x) || CSSParser._m_escape(x);
    };
    CSSParser["_m_unicode"] = function(x) {
        return /^\\[0-9a-fA-F]{1,6}(\r\n|[ \n\r\t\f])?$/.test(x);
    };
    CSSParser["_m_escape"] = function(x) {
        return CSSParser._m_unicode(x) || /^\\[^\n\r\f0-9a-fA-F]+$/.test(x);
    };
    CSSParser["_m_nmchar"] = function(x) {
        return /^[_a-zA-Z0-9\-]+$/.test(x) || CSSParser._m_escape(x);
    };
    CSSParser["_m_nmchar2"] = function(x) {
        return /^[a-zA-Z0-9]+$/.test(x) || CSSParser._m_escape(x);
    };
    CSSParser["_m_nl"] = function(x) {
        return /^[\n\r\f]+$/.test(x);
    };
    CSSParser["_m_w"] = function(x) {
        return /^[ \t\r\n\f]+$/.test(x);
    };
}
var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}var CSSTransformer = exports.CSSTransformer = objectThatDelegatesTo(OMeta, {
    anys: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._many(function() {
            return this._apply("any");
        });
    },
    before: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._form(function() {
            return undefined;
        });
    },
    after: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._form(function() {
            return undefined;
        });
    },
    any: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._or(function() {
            return this._apply("before");
        }, function() {
            return this._apply("ident");
        }, function() {
            return this._apply("atkeyword");
        }, function() {
            return this._apply("string");
        }, function() {
            return this._apply("shash");
        }, function() {
            return this._apply("vhash");
        }, function() {
            return this._apply("number");
        }, function() {
            return this._apply("percentage");
        }, function() {
            return this._apply("dimension");
        }, function() {
            return this._apply("cdo");
        }, function() {
            return this._apply("cdc");
        }, function() {
            return this._apply("decldelim");
        }, function() {
            return this._apply("s");
        }, function() {
            return this._apply("attrselector");
        }, function() {
            return this._apply("attrib");
        }, function() {
            return this._apply("nth");
        }, function() {
            return this._apply("nthselector");
        }, function() {
            return this._apply("namespace");
        }, function() {
            return this._apply("clazz");
        }, function() {
            return this._apply("pseudoe");
        }, function() {
            return this._apply("pseudoc");
        }, function() {
            return this._apply("delim");
        }, function() {
            return this._apply("stylesheet");
        }, function() {
            return this._apply("atruleb");
        }, function() {
            return this._apply("atrules");
        }, function() {
            return this._apply("atrulerq");
        }, function() {
            return this._apply("atrulers");
        }, function() {
            return this._apply("atruler");
        }, function() {
            return this._apply("block");
        }, function() {
            return this._apply("ruleset");
        }, function() {
            return this._apply("combinator");
        }, function() {
            return this._apply("simpleselector");
        }, function() {
            return this._apply("selector");
        }, function() {
            return this._apply("declaration");
        }, function() {
            return this._apply("property");
        }, function() {
            return this._apply("important");
        }, function() {
            return this._apply("unary");
        }, function() {
            return this._apply("operator");
        }, function() {
            return this._apply("braces");
        }, function() {
            return this._apply("value");
        }, function() {
            return this._apply("progid");
        }, function() {
            return this._apply("filterv");
        }, function() {
            return this._apply("filter");
        }, function() {
            return this._apply("comment");
        }, function() {
            return this._apply("uri");
        }, function() {
            return this._apply("raw");
        }, function() {
            return this._apply("functionBody");
        }, function() {
            return this._apply("funktion");
        }, function() {
            return this._apply("functionExpression");
        }, function() {
            return this._apply("after");
        });
    },
    ident: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "ident");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    atkeyword: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "atkeyword");
                    return x = this._apply("any");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    string: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "string");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    shash: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "shash");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    vhash: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "vhash");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    number: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "number");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    percentage: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "percentage");
                    return x = this._apply("any");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    dimension: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x, y;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "dimension");
                    x = this._apply("any");
                    return y = this._apply("any");
                }.call(this);
            });
            return [ t, x, y ];
        }.call(this);
    },
    cdo: function() {
        var $elf = this, _fromIdx = this.input.idx, t;
        return function() {
            this._form(function() {
                return t = this._applyWithArgs("exactly", "cdo");
            });
            return [ t ];
        }.call(this);
    },
    cdc: function() {
        var $elf = this, _fromIdx = this.input.idx, t;
        return function() {
            this._form(function() {
                return t = this._applyWithArgs("exactly", "cdc");
            });
            return [ t ];
        }.call(this);
    },
    decldelim: function() {
        var $elf = this, _fromIdx = this.input.idx, t;
        return function() {
            this._form(function() {
                return t = this._applyWithArgs("exactly", "decldelim");
            });
            return [ t ];
        }.call(this);
    },
    s: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "s");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    attrselector: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "attrselector");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    attrib: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "attrib");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    nth: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "nth");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    nthselector: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x, y;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "nthselector");
                    x = this._apply("any");
                    return y = this._apply("anys");
                }.call(this);
            });
            return [ t, x ].concat(y);
        }.call(this);
    },
    namespace: function() {
        var $elf = this, _fromIdx = this.input.idx, t;
        return function() {
            this._form(function() {
                return t = this._applyWithArgs("exactly", "namespace");
            });
            return [ t ];
        }.call(this);
    },
    clazz: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "clazz");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    pseudoe: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "pseudoe");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    pseudoc: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "pseudoc");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    delim: function() {
        var $elf = this, _fromIdx = this.input.idx, t;
        return function() {
            this._form(function() {
                return t = this._applyWithArgs("exactly", "delim");
            });
            return [ t ];
        }.call(this);
    },
    stylesheet: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "stylesheet");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    atruleb: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "atruleb");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    atrules: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "atrules");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    atrulerq: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "atrulerq");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    atrulers: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "atrulers");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    atruler: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "atruler");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    block: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "block");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    ruleset: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "ruleset");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    combinator: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "combinator");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    simpleselector: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "simpleselector");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    selector: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "selector");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    declaration: function() {
        var $elf = this, _fromIdx = this.input.idx, t, p, v;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "declaration");
                    p = this._apply("any");
                    return v = this._apply("any");
                }.call(this);
            });
            return [ t, p, v ];
        }.call(this);
    },
    property: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "property");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    important: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "important");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    unary: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "unary");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    operator: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "operator");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    braces: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x, y, z;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "braces");
                    x = this._apply("anything");
                    y = this._apply("anything");
                    return z = this._apply("anys");
                }.call(this);
            });
            return [ t, x, y ].concat(z);
        }.call(this);
    },
    value: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "value");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    progid: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "progid");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    filterv: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "filterv");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    filter: function() {
        var $elf = this, _fromIdx = this.input.idx, t, p, v;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "filter");
                    p = this._apply("any");
                    return v = this._apply("any");
                }.call(this);
            });
            return [ t, p, v ];
        }.call(this);
    },
    comment: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "comment");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    uri: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "uri");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    raw: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "raw");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    },
    functionBody: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "functionBody");
                    return x = this._apply("anys");
                }.call(this);
            });
            return [ t ].concat(x);
        }.call(this);
    },
    funktion: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x, y;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "funktion");
                    x = this._apply("any");
                    return y = this._apply("any");
                }.call(this);
            });
            return [ t, x, y ];
        }.call(this);
    },
    functionExpression: function() {
        var $elf = this, _fromIdx = this.input.idx, t, x;
        return function() {
            this._form(function() {
                return function() {
                    t = this._applyWithArgs("exactly", "functionExpression");
                    return x = this._apply("anything");
                }.call(this);
            });
            return [ t, x ];
        }.call(this);
    }
});
var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}var CSSTranslator = exports.CSSTranslator = objectThatDelegatesTo(OMeta, {
    anys: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._many(function() {
            return this._apply("any");
        });
    },
    before: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._form(function() {
            return undefined;
        });
    },
    after: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._form(function() {
            return undefined;
        });
    },
    any: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return this._or(function() {
            return this._apply("before");
        }, function() {
            return this._apply("ident");
        }, function() {
            return this._apply("atkeyword");
        }, function() {
            return this._apply("string");
        }, function() {
            return this._apply("shash");
        }, function() {
            return this._apply("vhash");
        }, function() {
            return this._apply("number");
        }, function() {
            return this._apply("percentage");
        }, function() {
            return this._apply("dimension");
        }, function() {
            return this._apply("cdo");
        }, function() {
            return this._apply("cdc");
        }, function() {
            return this._apply("decldelim");
        }, function() {
            return this._apply("s");
        }, function() {
            return this._apply("attrselector");
        }, function() {
            return this._apply("attrib");
        }, function() {
            return this._apply("nth");
        }, function() {
            return this._apply("nthselector");
        }, function() {
            return this._apply("namespace");
        }, function() {
            return this._apply("clazz");
        }, function() {
            return this._apply("pseudoe");
        }, function() {
            return this._apply("pseudoc");
        }, function() {
            return this._apply("delim");
        }, function() {
            return this._apply("stylesheet");
        }, function() {
            return this._apply("atruleb");
        }, function() {
            return this._apply("atrules");
        }, function() {
            return this._apply("atrulerq");
        }, function() {
            return this._apply("atrulers");
        }, function() {
            return this._apply("atruler");
        }, function() {
            return this._apply("block");
        }, function() {
            return this._apply("ruleset");
        }, function() {
            return this._apply("combinator");
        }, function() {
            return this._apply("simpleselector");
        }, function() {
            return this._apply("selector");
        }, function() {
            return this._apply("declaration");
        }, function() {
            return this._apply("property");
        }, function() {
            return this._apply("important");
        }, function() {
            return this._apply("unary");
        }, function() {
            return this._apply("operator");
        }, function() {
            return this._apply("braces");
        }, function() {
            return this._apply("value");
        }, function() {
            return this._apply("progid");
        }, function() {
            return this._apply("filterv");
        }, function() {
            return this._apply("filter");
        }, function() {
            return this._apply("comment");
        }, function() {
            return this._apply("uri");
        }, function() {
            return this._apply("raw");
        }, function() {
            return this._apply("functionBody");
        }, function() {
            return this._apply("funktion");
        }, function() {
            return this._apply("functionExpression");
        }, function() {
            return this._apply("after");
        });
    },
    ident: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "ident");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    atkeyword: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "atkeyword");
                    return x = this._apply("any");
                }.call(this);
            });
            return "@" + x;
        }.call(this);
    },
    string: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "string");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    shash: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "shash");
                    return x = this._apply("anything");
                }.call(this);
            });
            return "#" + x;
        }.call(this);
    },
    vhash: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "vhash");
                    return x = this._apply("anything");
                }.call(this);
            });
            return "#" + x;
        }.call(this);
    },
    number: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "number");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    percentage: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "percentage");
                    return x = this._apply("any");
                }.call(this);
            });
            return x + "%";
        }.call(this);
    },
    dimension: function() {
        var $elf = this, _fromIdx = this.input.idx, x, y;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "dimension");
                    x = this._apply("any");
                    return y = this._apply("any");
                }.call(this);
            });
            return x + y;
        }.call(this);
    },
    cdo: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return function() {
            this._form(function() {
                return this._applyWithArgs("exactly", "cdo");
            });
            return "<!--";
        }.call(this);
    },
    cdc: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return function() {
            this._form(function() {
                return this._applyWithArgs("exactly", "cdc");
            });
            return "-->";
        }.call(this);
    },
    decldelim: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return function() {
            this._form(function() {
                return this._applyWithArgs("exactly", "decldelim");
            });
            return ";";
        }.call(this);
    },
    s: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "s");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    attrselector: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "attrselector");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    attrib: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "attrib");
                    return x = this._apply("anys");
                }.call(this);
            });
            return "[" + x.join("") + "]";
        }.call(this);
    },
    nth: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "nth");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    nthselector: function() {
        var $elf = this, _fromIdx = this.input.idx, x, y;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "nthselector");
                    x = this._apply("any");
                    return y = this._apply("anys");
                }.call(this);
            });
            return ":" + x + "(" + y.join("") + ")";
        }.call(this);
    },
    namespace: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return function() {
            this._form(function() {
                return this._applyWithArgs("exactly", "namespace");
            });
            return "|";
        }.call(this);
    },
    clazz: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "clazz");
                    return x = this._apply("any");
                }.call(this);
            });
            return "." + x;
        }.call(this);
    },
    pseudoe: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "pseudoe");
                    return x = this._apply("anys");
                }.call(this);
            });
            return "::" + x.join("");
        }.call(this);
    },
    pseudoc: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "pseudoc");
                    return x = this._apply("anys");
                }.call(this);
            });
            return ":" + x.join("");
        }.call(this);
    },
    delim: function() {
        var $elf = this, _fromIdx = this.input.idx;
        return function() {
            this._form(function() {
                return this._applyWithArgs("exactly", "delim");
            });
            return ",";
        }.call(this);
    },
    stylesheet: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "stylesheet");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    atruleb: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "atruleb");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    atrules: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "atrules");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("") + ";";
        }.call(this);
    },
    atrulerq: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "atrulerq");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    atrulers: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "atrulers");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    atruler: function() {
        var $elf = this, _fromIdx = this.input.idx, x, y, z;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "atruler");
                    x = this._apply("any");
                    y = this._apply("any");
                    return z = this._apply("any");
                }.call(this);
            });
            return x + y + "{" + z + "}";
        }.call(this);
    },
    block: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "block");
                    return x = this._apply("anys");
                }.call(this);
            });
            return "{" + x.join("") + "}";
        }.call(this);
    },
    ruleset: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "ruleset");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    combinator: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "combinator");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    simpleselector: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "simpleselector");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    selector: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "selector");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    declaration: function() {
        var $elf = this, _fromIdx = this.input.idx, p, v;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "declaration");
                    p = this._apply("any");
                    return v = this._apply("any");
                }.call(this);
            });
            return p + ":" + v;
        }.call(this);
    },
    property: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "property");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    important: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "important");
                    return x = this._apply("anys");
                }.call(this);
            });
            return "!" + x.join("") + "important";
        }.call(this);
    },
    unary: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "unary");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    operator: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "operator");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    braces: function() {
        var $elf = this, _fromIdx = this.input.idx, x, y, z;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "braces");
                    x = this._apply("anything");
                    y = this._apply("anything");
                    return z = this._apply("anys");
                }.call(this);
            });
            return x + z.join("") + y;
        }.call(this);
    },
    value: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "value");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    progid: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "progid");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    filterv: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "filterv");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    filter: function() {
        var $elf = this, _fromIdx = this.input.idx, p, v;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "filter");
                    p = this._apply("any");
                    return v = this._apply("any");
                }.call(this);
            });
            return p + ":" + v;
        }.call(this);
    },
    comment: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "comment");
                    return x = this._apply("anything");
                }.call(this);
            });
            return "/*" + x + "*/";
        }.call(this);
    },
    uri: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "uri");
                    return x = this._apply("anys");
                }.call(this);
            });
            return "url(" + x.join("") + ")";
        }.call(this);
    },
    raw: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "raw");
                    return x = this._apply("anything");
                }.call(this);
            });
            return x;
        }.call(this);
    },
    functionBody: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "functionBody");
                    return x = this._apply("anys");
                }.call(this);
            });
            return x.join("");
        }.call(this);
    },
    funktion: function() {
        var $elf = this, _fromIdx = this.input.idx, x, y;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "funktion");
                    x = this._apply("any");
                    return y = this._apply("any");
                }.call(this);
            });
            return x + "(" + y + ")";
        }.call(this);
    },
    functionExpression: function() {
        var $elf = this, _fromIdx = this.input.idx, x;
        return function() {
            this._form(function() {
                return function() {
                    this._applyWithArgs("exactly", "functionExpression");
                    return x = this._apply("anything");
                }.call(this);
            });
            return "expression(" + x + ")";
        }.call(this);
    }
});
