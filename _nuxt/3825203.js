(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{528:function(t,e,r){"use strict";r.r(e);r(329);var n=r(28),o=r(38),c=r(44),l=r(37),d=r(29),v=r(12),m=r(187),f=r(539);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(m.Vue);_([Object(m.Prop)()],y.prototype,"item",void 0);var w=y=_([Object(m.Component)({components:{ShareButtons:f.default}})],y),x=r(104),j=r(145),k=r.n(j),O=r(246),C=r(225),I=r(505),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{ShareButtons:r(539).default}),k()(component,{VBtn:O.a,VIcon:C.a,VMenu:I.a})},539:function(t,e,r){"use strict";r.r(e);r(329);var n=r(28),o=r(38),c=r(44),l=r(37),d=r(29),v=r(12),m=r(187);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=f(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://shibusawa-dlab.github.io/lab1",t}return Object(o.a)(r,[{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(m.Vue);h([Object(m.Prop)({required:!0})],_.prototype,"url",void 0),h([Object(m.Prop)({required:!0})],_.prototype,"title",void 0);var y=_=h([m.Component],_),w=r(104),x=r(145),j=r.n(x),k=r(246),O=r(227),C=r(225),I=r(552),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VBtn:k.a,VCard:O.a,VIcon:C.a,VTooltip:I.a})},546:function(t,e,r){var content=r(565);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("e6022664",content,!0,{sourceMap:!1})},547:function(t,e,r){var content=r(567);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("cdc2c944",content,!0,{sourceMap:!1})},549:function(t,e,r){"use strict";r.r(e);r(329);var n=r(28),o=r(44),c=r(37),l=r(29),d=r(12),v=r(187),m=r(528);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(o.a)(r,t);var e=f(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.Vue);h([Object(v.Prop)({required:!0})],_.prototype,"item",void 0),h([Object(v.Prop)({default:300})],_.prototype,"width",void 0),h([Object(v.Prop)({default:300})],_.prototype,"height",void 0),h([Object(v.Prop)({default:!1})],_.prototype,"horizontal",void 0);var y=_=h([Object(v.Component)({components:{ResultOption:m.default}})],_),w=(r(564),r(104)),x=r(145),j=r.n(x),k=r(227),O=r(94),C=r(543),I=r(225),R=r(183),P=r(521),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:t.horizontal?"":"mb-4",style:t.horizontal?"width: "+t.width+"px;":"",attrs:{"no-body":"",flat:"",outlined:""}},[t.item._source._thumbnail&&t.item._source._thumbnail.length>0?r("nuxt-link",{attrs:{to:t.item.to}},[t.item._source._thumbnail[0].includes("mdi-")?[r("div",{staticClass:"text-center grey lighten-2 pa-10",staticStyle:{height:"150px"}},[r("v-icon",{attrs:{size:"75"}},[t._v(t._s(t.item._source._thumbnail[0]))])],1)]:[r("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:t.item._source._thumbnail[0],contain:"",width:"100%"}})]],2):t._e(),t._v(" "),r("div",{staticClass:"pa-4",style:t.horizontal?"width: "+t.width+"px; height: "+t.height+"px; overflow-y: auto;":""},[r("nuxt-link",{attrs:{to:t.item.to||t.localePath({name:"item-id",params:{id:t.item._id}})}},[r("h4",{domProps:{innerHTML:t._s(t.$utils.formatArrayValue(t.item._source._label))}})]),t._v(" "),t.item._source.description?[r("div",{staticClass:"mt-2",domProps:{innerHTML:t._s(t.$utils.removeHead(t.$utils.xml2html(t.$utils.formatArrayValue(t.item._source.description),!0)))}})]:t._e()],2),t._v(" "),t.item.share_hide?t._e():[r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("ResultOption",{attrs:{item:{label:t.$utils.formatArrayValue(t.item._source._label),url:t.$utils.formatArrayValue(t.item._source._url)}}})],1)]],2)}),[],!1,null,null,null);e.default=component.exports;j()(component,{ResultOption:r(528).default}),j()(component,{VCard:k.a,VCardActions:O.a,VDivider:C.a,VIcon:I.a,VImg:R.a,VSpacer:P.a})},556:function(t,e,r){"use strict";r.r(e);r(329);var n=r(28),o=r(44),c=r(37),l=r(29),d=r(12),v=r(187),m=r(549);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(o.a)(r,t);var e=f(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.Vue);h([Object(v.Prop)()],_.prototype,"width",void 0),h([Object(v.Prop)()],_.prototype,"height",void 0),h([Object(v.Prop)({default:[]})],_.prototype,"data",void 0),h([Object(v.Prop)({default:"items"})],_.prototype,"title",void 0),h([Object(v.Prop)({default:""})],_.prototype,"description",void 0);var y=_=h([Object(v.Component)({components:{CardItem:m.default}})],_),w=(r(566),r(104)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.length>0?r("div",[r("div",{staticClass:"text-center mt-10 pt-10 mb-4"},[r("h3",[t._v(t._s(t.title))]),t._v(" "),t.description?r("div",{staticClass:"mt-2"},[r("small",[t._v(t._s(t.description))])]):t._e()]),t._v(" "),r("ul",{staticClass:"horizontal-list"},t._l(t.data,(function(e,n){return r("li",{key:n,staticClass:"item"},[r("CardItem",{key:"value_"+n,staticClass:"mt-2 mb-4",attrs:{horizontal:!0,item:e,width:t.width,height:t.height}})],1)})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardItem:r(549).default})},564:function(t,e,r){"use strict";r(546)},565:function(t,e,r){(e=r(17)(!1)).push([t.i,"a{text-decoration:none}",""]),t.exports=e},566:function(t,e,r){"use strict";r(547)},567:function(t,e,r){(e=r(17)(!1)).push([t.i,".horizontal-list{overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch;padding-left:0!important;padding-right:0}.item{display:inline-block;margin-right:16px}",""]),t.exports=e},581:function(t,e,r){var content=r(626);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1dee1762",content,!0,{sourceMap:!1})},625:function(t,e,r){"use strict";r(581)},626:function(t,e,r){(e=r(17)(!1)).push([t.i,".scroll{overflow-y:auto}.vertical{-ms-writing-mode:tb-rl;writing-mode:vertical-rl}",""]),t.exports=e},698:function(t,e,r){"use strict";r.r(e);r(336),r(337),r(26),r(68),r(15),r(66),r(33),r(62),r(241),r(52),r(53);var n=r(13),o=r(551),c=r(191),l=r(122),d=r.n(l),v=r(528),m=r(556),f={components:{ResultOption:v.default,HorizontalItems:m.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,n=t.app,!r){e.next=5;break}return e.abrupt("return",{item:r});case 5:return l=n.context.params.id,d=o(c.a.appId,c.a.apiKey),v=d.initIndex("dev_MAIN"),e.next=10,v.getObject(l);case 10:return m=e.sent,e.abrupt("return",{item:m});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrl:"https://shibusawa-dlab.github.io/lab1",github:"https://nakamura196.github.io/repo",moreLikeThisData:[],fields:["agential","spatial"],width:window.innerWidth,entity:{agential:[],spatial:[]}}},head:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"}]}},computed:{dates:function(){var t=this.item.date,e=Object.keys(t),r=t[e[e.length-1]].split(" > "),data=[];return r.length>=1&&data.push({id:1,name:r[0],children:[],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0]}}),r.length>=2&&data[0].children.push({id:2,name:r[1],children:[],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][date.lvl0][1]":r[1]}}),3===r.length&&data[0].children[0].children.push({id:3,name:r[2],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][date.lvl0][1]":r[1],"dev_MAIN[hierarchicalMenu][date.lvl0][2]":r[2]}}),data},categories:function(){var t=this.item.category,e=Object.keys(t),r=t[e[e.length-1]].split(" > ");return[{id:1,name:r[0],query:{"dev_MAIN[hierarchicalMenu][category.lvl0][0]":r[0]},children:[{id:2,name:r[1],query:{"dev_MAIN[hierarchicalMenu][category.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][category.lvl0][1]":r[1]}}]}]},title:function(){return this.item.label},id:function(){return this.$route.params.id},url:function(){return this.baseUrl+this.$route.path},jsonUrl:function(){return"https://".concat(c.a.appId,"-dsn.algolia.net/1/indexes/dev_MAIN/").concat(this.item.objectID,"?X-Algolia-API-Key=").concat(c.a.apiKey,"&X-Algolia-Application-Id=").concat(c.a.appId)},items:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search"})},{text:this.title}]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,i,d,v,m,f,h,_,y,w,x,j,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.item,t.getEntity("agential"),t.getEntity("spatial"),n=[],l=t.fields,i=0;i<l.length;i++)for(d=l[i],v=r[d],m=0;m<v.length;m++)n.push(v[m]);return f=n.join(" ").substring(0,128),h=o(c.a.appId,c.a.apiKey),_=h.initIndex("dev_MAIN"),e.next=11,_.search("",{similarQuery:f});case 11:for(y=e.sent,w=[],x=y.hits,j=1;j<x.length;j++)k=x[j],w.push({_id:k.objectID,_source:{_label:[k.label],description:['<p class="mt-4"><b>'+t.$t("date")+"</b>: "+k.temporal+"</p>"+k.xml],_thumbnail:[],_url:[t.baseUrl+"/item/"+k.objectID]}});t.moreLikeThisData=w;case 16:case"end":return e.stop()}}),e)})))()},methods:{getEntity:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,i,image,v,m,f,filter,h,_,y,w,map,x,j,k,O,C,I,R,P;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(n=t.length>0&&void 0!==t[0]?t[0]:"spatial",o=e.item[n],c=[],l=[],i=0;i<o.length;i++)image=["spatial"===n?"mdi-map":"mdi-account"],v=o[i],m=e.localePath({name:"entity-entity-id",params:{entity:n,id:v}}),c.push({_id:"abc",_source:{_label:[v],_thumbnail:image,_url:[e.baseUrl+m]},to:m}),f=e.github+"/api/"+n.replace("spatial","place").replace("agential","chname")+"/"+v,l.push("?s = <".concat(f,">"));if(e.entity[n]=c,0!==l.length){r.next=8;break}return r.abrupt("return");case 8:return filter=l.join(" || "),h="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      SELECT DISTINCT * WHERE {\n        ?s rdfs:label ?label .\n        filter (".concat(filter,")\n        optional { ?s schema:description ?description }\n        optional { ?s schema:image ?image }\n      }\n      "),_=(_="https://dydra.com/ut-digital-archives/shibusawa/sparql?query=")+encodeURIComponent(h)+"&output=json",r.next=14,d.a.get(_);case 14:for(y=r.sent,w=y.data,map={},x=0;x<w.length;x++)j=w[x],map[j.s]=j;k=0;case 19:if(!(k<o.length)){r.next=34;break}if(O=c[k]){r.next=23;break}return r.abrupt("continue",31);case 23:if(C=o[k],I=e.github+"/api/"+n.replace("spatial","place").replace("agential","chname")+"/"+C,map[I]){r.next=27;break}return r.abrupt("continue",31);case 27:R=map[I],P=R.image?[R.image]:["spatial"===n?"mdi-map":"mdi-account"],R.description&&(O._source.description=[R.description]),O._source._thumbnail=P;case 31:k++,r.next=19;break;case 34:e.entity[n]=c;case 35:case"end":return r.stop()}}),r)})))()},getCalendarParams:function(data){var t="",e=-1,r=-1,n=-1,o=data.split("-");return 2===o.length?(t="month",e=Number(o[0]),r=Number(o[1]),n=1):3===o.length&&(t="day",e=Number(o[0]),r=Number(o[1]),n=Number(o[2])),{type:t,year:e,month:r,day:n}},getQuery:function(label,t){var e={"dev_MAIN[sortBy]":"dev_MAIN"};return e["dev_MAIN[refinementList][".concat(label,"][0]")]=t,e},getValues:function(data){return data?Array.isArray(data)?data:[data]:[]},dwnData:function(){var t=this.item.objectID+".xml",data=this.item.xml,link=document.createElement("a");link.href="data:text/xml;charset=utf-8,"+encodeURIComponent(data),link.download=t,link.click()}}},h=(r(625),r(104)),_=r(145),y=r.n(_),w=r(536),x=r(246),j=r(227),k=r(537),O=r(524),C=r(225),I=r(183),R=r(538),P=r(59),S=r(560),V=r(552),$=r(699),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"pt-5"},[r("p",{staticClass:"mb-5 text-center"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.item.next?r("v-btn",t._g({staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",to:t.localePath({name:"item-id",params:{id:t.item.next}})}},n),[r("v-icon",[t._v("mdi-chevron-left")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("next")))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.item.prev?r("v-btn",t._g({staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",to:t.localePath({name:"item-id",params:{id:t.item.prev}})}},n),[r("v-icon",[t._v("mdi-chevron-right")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("previous")))])])],1)]),t._v(" "),r("v-sheet",{attrs:{color:"grey lighten-3 px-5"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card",{staticClass:"my-5 scroll vertical",style:"height: 600px; width: "+t.width/2+"px",attrs:{flat:"",outlined:""}},[r("div",{staticClass:"pa-4 px-5"},[r("span",{domProps:{innerHTML:t._s(t.$utils.xml2html(t.item.xml,!0))}}),t._v(" "),r("v-sheet",{staticClass:"pa-4 mx-10",attrs:{color:"grey lighten-3"}},[r("b",{staticClass:"ma-2"},[t._v(t._s(t.$t("legend"))+" :")]),t._v(" "),r("span",{staticClass:"ma-2 teiPersName"},[t._v(t._s(t.$t("agential")))]),t._v(" "),r("span",{staticClass:"ma-2 teiPlaceName"},[t._v(t._s(t.$t("spatial")))]),t._v(" "),r("span",{staticClass:"ma-2 teiDate"},[t._v(t._s(t.$t("date")))]),t._v(" "),r("span",{staticClass:"ma-2 teiTime"},[t._v(t._s(t.$t("temporal")))])])],1)])],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("iframe",{staticClass:"my-5",style:"height: 600px;",attrs:{src:t.baseUrl+"/curation/?manifest="+t.item.manifest+"&canvas="+t.item.canvas,width:"100%",allowfullscreen:"allowfullscreen",frameborder:"0"}})])],1)],1),t._v(" "),r("v-container",[r("div",{staticClass:"text-center mt-10"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mx-2",attrs:{icon:""}},n),[r("nuxt-link",{attrs:{to:t.localePath({name:"viewer-id",params:{id:t.item.source.split("/data/")[1].split("_")[0]},query:{id:t.id}})}},[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/tei.png"}})],1)],1)]}}])},[t._v(" "),r("span",[t._v("TEI/XML")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mx-2",attrs:{icon:""}},n),[r("a",{attrs:{href:t.item.manifest,target:"_blank"}},[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/manifest.png"}})],1)])]}}])},[t._v(" "),r("span",[t._v("IIIF")])]),t._v(" "),t.item.manifest?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mx-2",attrs:{href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest="+t.item.manifest+"&canvas="+t.item.canvas,icon:"",target:"_blank"}},n),[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/icp-logo.svg"}})],1)]}}],null,!1,3282499998)},[t._v(" "),r("span",[t._v("IIIF Curation Viewer")])]):t._e(),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mx-2",attrs:{icon:""}},n),[r("a",{attrs:{href:t.jsonUrl,target:"_blank"}},[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/json-logo.svg"}})],1)])]}}])},[t._v(" "),r("span",[t._v("JSON")])]),t._v(" "),r("ResultOption",{attrs:{item:{label:t.title,url:t.url}}})],1),t._v(" "),r("v-simple-table",{staticClass:"mt-10",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("category")))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("v-treeview",{attrs:{dense:"","open-all":"",items:t.categories},scopedSlots:t._u([{key:"label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"ad-id",params:{id:n.name.split(" ")[0]}})}},[t._v(t._s(n.name))]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{icon:"",to:t.localePath({name:"search",query:n.query})}},o),[r("v-icon",[t._v("mdi-magnify")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("search")))])])]}}])})],1)]),t._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("date")))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("v-treeview",{attrs:{dense:"","open-all":"",items:t.dates},scopedSlots:t._u([{key:"label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"search",query:n.query})}},[t._v(t._s(n.name))]),t._v(" "),n.name.split("-").length>1?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{icon:"",to:t.localePath({name:"calendar-type-year-month-day",params:t.getCalendarParams(n.name)})}},o),[r("v-icon",[t._v("mdi-calendar")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("calendar")))])]):t._e()]}}])})],1)]),t._v(" "),t._l(t.fields,(function(e,n){return[t.item[e].length>0?r("tr",{key:n},[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t(e)))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[t._l(t.getValues(t.item[e]),(function(n,o){return[r("span",{key:o,staticClass:"mr-4"},[r("nuxt-link",{attrs:{to:t.localePath({name:"entity-entity-id",params:{entity:e,id:n}})}},[t._v("\n                      "+t._s(n)+"\n                    ")]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var c=o.on;return[r("v-btn",t._g({attrs:{icon:"",to:t.localePath({name:"search",query:t.getQuery(e,n)})}},c),[r("v-icon",[t._v("mdi-magnify")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("search")))])])],1)]}))],2)]):t._e()]}))],2)]},proxy:!0}])}),t._v(" "),r("HorizontalItems",{attrs:{data:t.entity.agential,title:t.$t("agential"),height:"200"}}),t._v(" "),r("HorizontalItems",{attrs:{data:t.entity.spatial,title:t.$t("spatial"),height:"200"}}),t._v(" "),r("HorizontalItems",{attrs:{title:t.$t("related")+" "+t.$t("items"),data:t.moreLikeThisData}})],1),t._v(" "),r("v-sheet",{staticClass:"text-center pa-10 mt-10"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),"ja"==t.$i18n.locale?[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n      ")]:[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("This work is licensed under a\n        "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n      ")]],2)])],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{ResultOption:r(528).default,HorizontalItems:r(556).default}),y()(component,{VBreadcrumbs:w.a,VBtn:x.a,VCard:j.a,VCol:k.a,VContainer:O.a,VIcon:C.a,VImg:I.a,VRow:R.a,VSheet:P.a,VSimpleTable:S.a,VTooltip:V.a,VTreeview:$.a})}}]);