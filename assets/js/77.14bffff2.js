(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{363:function(s,t,e){"use strict";e.r(t);var a=e(29),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pattern"}},[s._v("#")]),s._v(" Pattern "),e("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[s._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Pattern } "),e("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),e("tr",[e("th",[s._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.49.0/packages/common/src/jsonschema/decorators/pattern.ts#L0-L0"}},[s._v("/packages/common/src/jsonschema/decorators/pattern.ts")])])])])])]),s._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("function "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | RegExp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("...parameters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("div",{pre:!0},[e("p",[s._v("The pattern and Pattern Properties keywords use regular expressions to express constraints.\nThe regular expression syntax used is from JavaScript (ECMA 262, specifically). However, that complete syntax is not widely supported, therefore it is recommended that you stick to the subset of that syntax described below.")]),s._v(" "),e("p",[s._v("A single unicode character (other than the special characters below) matches itself.")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("^")]),s._v(": Matches only at the beginning of the string.")]),s._v(" "),e("li",[e("code",[s._v("$")]),s._v(": Matches only at the end of the string.")]),s._v(" "),e("li",[e("code",[s._v("(...)")]),s._v(": Group a series of regular expressions into a single regular expression.")]),s._v(" "),e("li",[e("code",[s._v("|")]),s._v(": Matches either the regular expression preceding or following the | symbol.")]),s._v(" "),e("li",[e("code",[s._v("[abc]")]),s._v(": Matches any of the characters inside the square brackets.")]),s._v(" "),e("li",[e("code",[s._v("[a-z]")]),s._v(": Matches the range of characters.")]),s._v(" "),e("li",[e("code",[s._v("[^abc]")]),s._v(": Matches any character not listed.")]),s._v(" "),e("li",[e("code",[s._v("[^a-z]")]),s._v(": Matches any character outside of the range.")]),s._v(" "),e("li",[e("code",[s._v("+")]),s._v(": Matches one or more repetitions of the preceding regular expression.")]),s._v(" "),e("li",[e("code",[s._v("*")]),s._v(": Matches zero or more repetitions of the preceding regular expression.")]),s._v(" "),e("li",[e("code",[s._v("?")]),s._v(": Matches zero or one repetitions of the preceding regular expression.")]),s._v(" "),e("li",[e("code",[s._v("+?")]),s._v(", *?"),e("code",[s._v(", ??")]),s._v(": The "),e("code",[s._v("*")]),s._v(", "),e("code",[s._v("+")]),s._v(", and "),e("code",[s._v("?")]),s._v(" qualifiers are all greedy; they match as much text as possible. Sometimes this behavior isn’t desired and you want to match as few characters as possible.")]),s._v(" "),e("li",[e("code",[s._v("{x}")]),s._v(": Match exactly x occurrences of the preceding regular expression.")]),s._v(" "),e("li",[e("code",[s._v("{x,y}")]),s._v(": Match at least x and at most y occurrences of the preceding regular expression.")]),s._v(" "),e("li",[e("code",[s._v("{x,}")]),s._v(": Match x occurrences or more of the preceding regular expression.")]),s._v(" "),e("li",[e("code",[s._v("{x}?")]),s._v(", {x,y}?, {x,}?`: Lazy versions of the above expressions.")])]),s._v(" "),e("h2",{pre:!0,attrs:{id:"example"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Model")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   property"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),e("br")])]),e("h3",{pre:!0,attrs:{id:"with-primitive-type"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#with-primitive-type"}},[s._v("#")]),s._v(" With primitive type")]),s._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Model")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   property"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),e("br")])]),e("div",{pre:!0,attrs:{class:"language-json line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"property"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pattern"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),e("br")])]),e("h3",{pre:!0,attrs:{id:"with-array-type"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#with-array-type"}},[s._v("#")]),s._v(" With array type")]),s._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Model")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PropertyType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   property"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),e("br")])]),e("p",[s._v("Will produce:")]),s._v(" "),e("div",{pre:!0,attrs:{class:"language-json line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"property"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"array"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pattern"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"')]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),e("br")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);