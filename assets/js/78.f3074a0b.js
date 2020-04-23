(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{364:function(s,t,a){"use strict";a.r(t);var n=a(29),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[s._v("#")]),s._v(" Property "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { Property } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.49.0/packages/common/src/jsonschema/decorators/property.ts#L0-L0"}},[s._v("/packages/common/src/jsonschema/decorators/property.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("function "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/converters/interfaces/IPropertyOptions.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("IPropertyOptions")])]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("div",{pre:!0},[a("p",[a("code",[s._v("@Property()")]),s._v(" let you decorate an attribute that can be serialized or deserialized. By default, no parameters are required to use it.\nBut in some cases, we need to configure explicitly the JSON attribute name mapped to the provide attribute.")]),s._v(" "),a("p",[s._v("Here an example of different use cases with "),a("code",[s._v("@Property()")]),s._v(":")]),s._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EventModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date-time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   startDate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'end-date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date-time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   endDate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PropertyType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eq. @Property({use: Task})")]),s._v("\n   tasks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" TaskModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TaskModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Minimum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Property or Property is not required when a JsonSchema decorator is used")]),s._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Maximum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Theses "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ES6")]),s._v(" collections can be used"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Map and Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Map will be serialized "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" an object and Set "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" an array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nBy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Map and Set have a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" custom Converter already embed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" But you can override "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("theses")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("see next part"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nFor the "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" you must use the "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("@PropertyType")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" decorator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("TypeClass")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" will be used to deserialize each item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the collection stored on the attribute source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nAccording to the previous example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" the JsonSchema generated will be "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" follow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("`typescript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"startDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date-time"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"endDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date-time"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"array"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"items"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$ref"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#/definitions/Task"')]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"definitions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Task"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minimum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v('\n            "maximum'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("18")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("19")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("20")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("21")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("22")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("23")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("24")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("25")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("26")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("27")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("28")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("29")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("30")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("31")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("32")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("33")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("34")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("35")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("36")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("37")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("38")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("39")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("40")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("41")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("42")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("43")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("44")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("45")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("46")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("47")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("48")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("49")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("50")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("51")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("52")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("53")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("54")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("55")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("56")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("57")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("58")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("59")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("60")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("61")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("62")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("63")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("64")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("65")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("66")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("67")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("68")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("69")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("70")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("71")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("72")]),a("br")])]),a("p",[s._v("@returns {Function}\n@param options\n@decorator\n@converters\n@jsonschema\n@property")])])])}),[],!1,null,null,null);t.default=r.exports}}]);