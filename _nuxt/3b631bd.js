(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{525:function(t,e,r){var content=r(526);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b1bed018",content,!0,{sourceMap:!1})},526:function(t,e,r){(e=r(17)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=e},536:function(t,e,r){"use strict";r(68);var n=r(4),c=(r(525),r(74)),o=r(8);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(2),v=Object(h.i)("v-breadcrumbs__divider","li"),m=r(31);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(f,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},538:function(t,e,r){"use strict";r(50),r(36),r(146),r(96),r(330),r(15),r(66),r(21),r(33),r(78),r(62),r(73),r(67),r(72);var n=r(4),c=(r(331),r(3)),o=r(95),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.y)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.y)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=c.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var n=r[t],c=j(e,t,n);c&&f.push(c)}));var c=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,f)}(),t(r.tag,Object(o.a)(data,{class:f}),c)}})},539:function(t,e,r){"use strict";r(26),r(50),r(36),r(146),r(330),r(66),r(21),r(33),r(52),r(78),r(62),r(67),r(72);var n=r(4),c=(r(331),r(3)),o=r(95),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(r,n){return r[t+Object(l.y)(n)]=e(),r}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=m("align",(function(){return{type:String,default:null,validator:y}})),j=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:j}})),x=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},P=m("alignContent",(function(){return{type:String,default:null,validator:x}})),S={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(P)},_={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,r){var n=_[t];if(null!=r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return(n+="-".concat(r)).toLowerCase()}}var C=new Map;e.a=c.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:x}},P),render:function(t,e){var r=e.props,data=e.data,c=e.children,l="";for(var d in r)l+=String(r[d]);var f=C.get(l);return f||function(){var t,e;for(e in f=[],S)S[e].forEach((function(t){var n=r[t],c=k(e,t,n);c&&f.push(c)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),C.set(l,f)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:f}),c)}})},691:function(t,e,r){"use strict";r.r(e);r(48),r(329),r(66),r(33),r(241),r(53),r(51);var n=r(13),c=r(28),o=r(38),l=r(44),d=r(37),f=r(29),h=r(12),v=r(187),m=r(122),y=r.n(m);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},w=function(t){Object(l.a)(d,t);var e,r=O(d);function d(){var t;return Object(c.a)(this,d),(t=r.apply(this,arguments)).baseUrl="https://shibusawa-dlab.github.io/lab1",t.title=t.$t("『渋沢栄一伝記資料』別巻1, 2の原本（もととなった資料）リスト"),t.children={},t.map={},t}return Object(o.a)(d,[{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("ad")}]}},{key:"mounted",value:function(){this.search()}},{key:"search",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,map,i,c,o,source,l,d,f,h,data,v,m,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,y.a.get("https://shibusawa-dlab.github.io/lab1/data/ad.json");case 3:for(e=t.sent,r=e.data,n={},map={},i=0;i<r.length;i++)c=r[i],o={id:c["@id"],slug:c["@id"].split("/items/")[1],label:c["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"]},map[c["@id"]]=o,c["https://shibusawa-dlab.github.io/lab1/api/properties/xml"]&&(o.xml=c["https://shibusawa-dlab.github.io/lab1/api/properties/xml"][0]["@value"]),c["http://schema.org/sourceData"]&&(source=c["http://schema.org/sourceData"][0]["@id"],o.source=source),c["http://schema.org/relatedLink"]&&(l=c["http://schema.org/relatedLink"][0]["@value"],o.related=l),c["http://schema.org/isPartOf"]&&(d=c["http://schema.org/isPartOf"][0]["@id"],o.parent=d,o.parent_slug=d.split("/items/")[1],n[d]||(n[d]=[]),n[d].push(o.id)),c["https://shibusawa-dlab.github.io/lab1/api/properties/provider"]&&(o.provider1=c["https://shibusawa-dlab.github.io/lab1/api/properties/provider"][0]["@value"]),c["http://schema.org/provider"]&&(o.provider2=c["http://schema.org/provider"][0]["@value"]),c["http://schema.org/url"]&&(f=c["http://schema.org/url"][0]["@id"],o.url=f),c["http://schema.org/image"]&&(o.image=c["http://schema.org/image"][0]["@id"]),c["http://schema.org/associatedMedia"]&&(o.manifest=c["http://schema.org/associatedMedia"][0]["@id"]),c["https://shibusawa-dlab.github.io/lab1/api/properties/contributor"]&&(o.contributor=c["https://shibusawa-dlab.github.io/lab1/api/properties/contributor"][0]["@value"]);this.map=map,(h=Object.keys(n)).sort(),data={},v=0,m=h;case 13:if(!(v<m.length)){t.next=21;break}if("https://shibusawa-dlab.github.io/lab1/api/items/top"!==(O=m[v])){t.next=17;break}return t.abrupt("continue",18);case 17:data[O]=n[O].sort();case 18:v++,t.next=13;break;case 21:this.children=data;case 22:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"head",value:function(){return{titleTemplate:null,title:this.$t("ad")}}}]),d}(v.Vue),x=w=j([Object(v.Component)({})],w),P=r(104),S=r(145),_=r.n(S),k=r(536),C=r(227),D=r(538),E=r(524),R=r(225),$=r(183),V=r(539),B=r(59),component=Object(P.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"mb-5"},[r("h2",{staticClass:"mt-10"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.children,(function(e,n){return r("div",{key:n},[r("v-sheet",{staticClass:"my-10 pa-5",attrs:{color:"grey lighten-3 "}},[r("h3",[t._v(t._s(t.map[n].label))])]),t._v(" "),r("v-row",[t._l(e,(function(e,n){return[t.map[e].label?r("v-col",{key:n,attrs:{cols:"12",sm:3}},[r("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[r("nuxt-link",{attrs:{to:t.localePath({name:"ad-id",params:{id:t.map[e].slug}})}},[t.map[e].image?[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.map[e].image,contain:"",width:"100%"}})]:[r("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px"}},[r("v-icon",{attrs:{size:"75"}},[t._v("mdi-book-open")])],1)]],2),t._v(" "),r("div",{staticClass:"pa-4"},[r("nuxt-link",{attrs:{to:t.localePath({name:"ad-id",params:{id:t.map[e].slug}})}},[r("h4",[t._v(t._s(t.map[e].label))])])],1)],1)],1):t._e()]}))],2)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBreadcrumbs:k.a,VCard:C.a,VCol:D.a,VContainer:E.a,VIcon:R.a,VImg:$.a,VRow:V.a,VSheet:B.a})}}]);