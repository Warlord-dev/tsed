(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{842:function(a,n,s){"use strict";s.r(n);var t=s(29),p=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"sockethandlersbuilder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sockethandlersbuilder"}},[a._v("#")]),a._v(" SocketHandlersBuilder "),s("Badge",{attrs:{text:"Class",type:"class"}})],1),a._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[a._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[a._v("import")]),a._v(" { SocketHandlersBuilder } "),s("span",{staticClass:"token keyword"},[a._v("from")]),a._v(" "),s("span",{staticClass:"token string"},[a._v('"@tsed/socketio/src/class/SocketHandlersBuilder"')])])])]),s("tr",[s("th",[a._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.49.0/packages/socketio/src/class/SocketHandlersBuilder.ts#L0-L0"}},[a._v("/packages/socketio/src/class/SocketHandlersBuilder.ts")])])])])])]),a._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" SocketHandlersBuilder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[a._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> converterService<span class="token punctuation">:</span> <a href="/api/common/converters/services/ConverterService.html"><span class="token">ConverterService</span></a><span class="token punctuation">,</span> injector<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">build</span><span class="token punctuation">(</span>nsps<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> hook\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> eventName\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span> nsp\n */\n<span class="token function">onConnection</span><span class="token punctuation">(</span>socket<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">,</span> nsp<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">onDisconnect</span><span class="token punctuation">(</span>socket<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">,</span> nsp<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span> nsp\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/socketio/interfaces/ISocketHandlerMetadata.html"><span class="token">ISocketHandlerMetadata</span></a><span class="token punctuation">}</span> handlerMetadata\n * @param args\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span> nsp\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">}</span>\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/socketio/interfaces/ISocketHandlerMetadata.html"><span class="token">ISocketHandlerMetadata</span></a><span class="token punctuation">}</span> handlerMetadata\n * @param scope\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/socketio/interfaces/ISocketHandlerMetadata.html"><span class="token">ISocketHandlerMetadata</span></a><span class="token punctuation">}</span> handlerMetadata\n * @param scope\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">}</span>\n */\n\n/**\n *\n * @param target\n * @param scope\n * @param promise\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">}</span>\n */\n\n/**\n *\n * @returns <span class="token punctuation">{</span>Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span>\n * @param instance\n * @param handlerMetadata\n * @param scope\n */\n\n/**\n *\n * @param parameters\n * @param scope\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])])]),s("p")])}),[],!1,null,null,null);n.default=p.exports}}]);