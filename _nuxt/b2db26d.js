(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{575:function(t,e,r){"use strict";r.r(e);r(325);var n=r(29),o=r(43),l=r(37),c=r(30),h=r(11),d=r(341);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},f=function(t){Object(o.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://shibusawa-dlab.github.io/lab1",t}return r}(d.Vue);m([Object(d.Prop)({default:4})],f.prototype,"col",void 0),m([Object(d.Prop)({default:[]})],f.prototype,"list",void 0);var _=f=m([d.Component],f),y=r(104),w=r(141),x=r.n(w),k=r(221),O=r(96),C=r(545),j=r(551),R=r(219),V=r(177),P=r(546),$=r(531),S=r(547),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",t._l(t.list,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12",sm:12/t.col}},[r("v-card",{staticClass:"mb-4",attrs:{flat:"","no-body":""}},[r("nuxt-link",{attrs:{to:t.localePath(e.path)}},[e.image&&e.image.includes("mdi-")?[r("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px"}},[r("v-icon",{attrs:{size:"75"}},[t._v(t._s(e.image))])],1)]:[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:e.image,contain:"",width:"100%"}})]],2),t._v(" "),r("div",{staticClass:"pa-4"},[r("nuxt-link",{attrs:{to:t.localePath(e.path)}},[r("h4",[t._v(t._s(e.label))])]),t._v(" "),e.description?r("p",{staticClass:"mt-2 mb-0"},[t._v(t._s(e.description))]):t._e()],1),t._v(" "),(e.url,t._e())],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VCard:k.a,VCardActions:O.a,VCol:C.a,VDivider:j.a,VIcon:R.a,VImg:V.a,VRow:P.a,VSpacer:$.a,VTooltip:S.a})},722:function(t,e,r){"use strict";r.r(e);r(48),r(325),r(35),r(237),r(56),r(51);var n=r(13),o=r(29),l=r(39),c=r(43),h=r(37),d=r(30),v=r(11),m=r(181),f=r(122),_=r.n(f);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(c.a)(h,t);var e,r=y(h);function h(){var t;return Object(o.a)(this,h),(t=r.apply(this,arguments)).baseUrl="https://shibusawa-dlab.github.io/lab1",t.key="TOP",t.item={},t.children=[],t.map={},t}return Object(l.a)(h,[{key:"watchTmp",value:function(){this.search()}},{key:"mounted",value:function(){this.search()}},{key:"search",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,l,map,i,c,h,source,d,v,m,f,y,w,x,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.params.id||"top",r="https://shibusawa-dlab.github.io/lab1/api/items/"+e,t.next=5,_.a.get("https://shibusawa-dlab.github.io/lab1/data/ad.json");case 5:for(n=t.sent,o=n.data,l={},map={},i=0;i<o.length;i++)c=o[i],h={id:c["@id"],slug:c["@id"].split("/items/")[1],label:c["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"]},map[c["@id"]]=h,c["https://shibusawa-dlab.github.io/lab1/api/properties/xml"]&&(h.xml=c["https://shibusawa-dlab.github.io/lab1/api/properties/xml"][0]["@value"]),c["http://schema.org/sourceData"]&&(source=c["http://schema.org/sourceData"][0]["@id"],h.source=source),c["http://schema.org/relatedLink"]&&(d=c["http://schema.org/relatedLink"][0]["@value"],h.related=d),c["http://schema.org/isPartOf"]&&(v=c["http://schema.org/isPartOf"][0]["@id"],h.parent=v,h.parent_slug=v.split("/items/")[1],l[v]||(l[v]=[]),l[v].push(h.id)),c["https://shibusawa-dlab.github.io/lab1/api/properties/provider"]&&(h.provider1=c["https://shibusawa-dlab.github.io/lab1/api/properties/provider"][0]["@value"]),c["http://schema.org/provider"]&&(h.provider2=c["http://schema.org/provider"][0]["@value"]),c["http://schema.org/url"]&&(m=c["http://schema.org/url"][0]["@id"],h.url=m),c["http://schema.org/image"]&&(h.image=c["http://schema.org/image"][0]["@id"]),c["http://schema.org/associatedMedia"]&&(h.manifest=c["http://schema.org/associatedMedia"][0]["@id"]),c["https://shibusawa-dlab.github.io/lab1/api/properties/contributor"]&&(h.contributor=c["https://shibusawa-dlab.github.io/lab1/api/properties/contributor"][0]["@value"]);if(this.item=map[r],this.map=map,f=[],l[r])for(y=l[r],w=0;w<y.length;w++)x=y.sort()[w],k=map[x],f.push({label:k.label,image:k.image||"mdi-book-open",path:{name:"ad-id",params:{id:k.slug}}});this.children=f;case 15:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"title",get:function(){return this.item.label}},{key:"uri",get:function(){return this.item.id}},{key:"url",get:function(){return this.baseUrl+this.$route.fullPath}},{key:"head",value:function(){return{title:this.$t("category")+" : "+this.title,meta:[{hid:"description",name:"description",content:this.$t("search_by_category")}]}}},{key:"bh",get:function(){var title=this.title,t={text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0};return this.$route.params.id?this.item.parent?[t,{text:this.$t("ad"),disabled:!1,to:this.localePath({name:"ad"}),exact:!0},{text:title}]:void 0:[t,{text:this.$t("ad")}]}}]),h}(m.Vue);w([Object(m.Watch)("$route",{deep:!0})],x.prototype,"watchTmp",null);var k=x=w([Object(m.Component)({})],x),O=r(104),C=r(141),j=r.n(C),R=r(549),V=r(243),P=r(534),$=r(219),S=r(177),D=r(61),U=r(579),I=r(547),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.bh},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"mb-5"},[r("h2",{staticClass:"mt-10"},[t._v(t._s(t.title))]),t._v(" "),t.item.parent?r("v-simple-table",{staticClass:"mt-10",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[t._e(),t._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("伝記資料編纂時の資料情報")))]),t._v(" "),r("td",{staticClass:"py-2",staticStyle:{"overflow-wrap":"break-word"}},[r("span",{domProps:{innerHTML:t._s(t.$utils.xml2html(t.item.xml))}})])]),t._v(" "),t.item.provider1?r("tr",[r("td",{attrs:{width:"30%"}},[t._v("\n              "+t._s(t.$t("所蔵（伝記資料別巻第1発行1965年時）"))+"\n            ")]),t._v(" "),r("td",{staticClass:"py-1"},[t._v("\n              "+t._s(t.item.provider1)+"\n            ")])]):t._e(),t._v(" "),t.item.provider2?r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("所蔵（2020年現在）")))]),t._v(" "),r("td",{staticClass:"py-1"},[t._v("\n              "+t._s(t.item.provider2)+"\n            ")])]):t._e(),t._v(" "),t.item.url?r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("画像公開URL")))]),t._v(" "),r("td",{staticClass:"py-1",staticStyle:{"overflow-wrap":"break-word"}},[r("a",{attrs:{href:t.item.url}},[t._v("\n                "+t._s(t.item.url)+"\n              ")])])]):t._e(),t._v(" "),t.item.contributor?r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("画像公開機関")))]),t._v(" "),r("td",{staticClass:"py-1"},[t._v("\n              "+t._s(t.item.contributor)+"\n            ")])]):t._e()])]},proxy:!0}],null,!1,2373400829)}):t._e(),t._v(" "),t.item.related?r("v-btn",{staticClass:"mt-10",attrs:{block:"",color:"primary",rounded:"",dark:"","x-large":"",href:t.item.related}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-magnify")]),t._v("\n      "+t._s(t.$t("fulltext_search"))+"\n    ")],1):t._e(),t._v(" "),t._e(),t._v(" "),t.item.manifest?r("iframe",{staticClass:"mt-10",attrs:{allowfullscreen:"allowfullscreen",frameborder:"0",height:"600px",src:"https://universalviewer.io/examples/uv/uv.html#?manifest="+t.item.manifest,width:"100%"}}):t._e(),t._v(" "),t._e(),t._v(" "),r("div",{staticClass:"text-center mt-10"},[t.item.source?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-5",attrs:{to:t.localePath({name:"viewer-id",params:{id:t.item.source.split("/data/")[1].split("_")[0]},query:{id:t.item.slug}}),icon:""}},n),[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/tei.png"}})],1)]}}],null,!1,3332520250)},[t._v(" "),r("span",[t._v("TEI")])]):t._e(),t._v(" "),t.item.manifest?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-5",attrs:{href:t.item.manifest,icon:"",target:"_blank"}},n),[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/manifest.png"}})],1)]}}],null,!1,4118565668)},[t._v(" "),r("span",[t._v("IIIF")])]):t._e(),t._v(" "),t.item.manifest?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-5",attrs:{href:"https://universalviewer.io/examples/uv/uv.html#?manifest="+t.item.manifest,icon:"",target:"_blank"}},n),[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/uv.jpg"}})],1)]}}],null,!1,2922698250)},[t._v(" "),r("span",[t._v("Universal Viewer")])]):t._e(),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-5",attrs:{href:t.baseUrl+"/snorql?describe="+t.uri,icon:""}},n),[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/rdf-logo.svg"}})],1)]}}])},[t._v(" "),r("span",[t._v("RDF")])]),t._v(" "),r("ResultOption",{attrs:{item:{url:t.url,label:t.title}}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{Grid:r(575).default}),j()(component,{VBreadcrumbs:R.a,VBtn:V.a,VContainer:P.a,VIcon:$.a,VImg:S.a,VSheet:D.a,VSimpleTable:U.a,VTooltip:I.a})}}]);