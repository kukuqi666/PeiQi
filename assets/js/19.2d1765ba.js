(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,180,306],{746:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"a",(function(){return s})),r.d(e,"f",(function(){return a})),r.d(e,"b",(function(){return u})),r.d(e,"e",(function(){return c})),r.d(e,"h",(function(){return p})),r.d(e,"i",(function(){return d})),r.d(e,"c",(function(){return h})),r.d(e,"g",(function(){return f}));r(418);const n=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return a.test(t)}function u(t){if(l(t))return t;const e=t.match(n),r=e?e[0]:"",i=o(t);return s.test(i)?t:i+".html"+r}function c(t,e){const r=t.hash,i=function(t){const e=t.match(n);if(e)return e[0]}(e);if(i&&r!==i)return!1;return o(t.path)===o(e)}function p(t,e,r){if(l(e))return{type:"external",path:e};r&&(e=function(t,e,r){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const i=e.split("/");r&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,r));const n=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:u(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,r,n){const{pages:i,themeConfig:s}=r,a=n&&s.locales&&s.locales[n]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=h(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,o);return r?r.map(e=>function t(e,r,n,i=1){if("string"==typeof e)return p(r,e,n);if(Array.isArray(e))return Object.assign(p(r,e[0],n),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(p(r,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,r,n,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function h(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},748:function(t,e,r){},750:function(t,e,r){},751:function(t,e,r){},756:function(t,e,r){"use strict";r(748)},757:function(t,e,r){"use strict";r.r(e);var n=r(774),i=r(759),s=r(746);function a(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?a(t,e):"page"===e.type&&Object(s.e)(t,e.path))}var o={name:"SidebarLinks",components:{SidebarGroup:n.default,SidebarLink:i.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let r=0;r<e.length;r++){const n=e[r];if(a(t,n))return r}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.e)(this.$route,t.regularPath)}}},l=r(63),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(r,n){return e("li",{key:n},["group"===r.type?e("SidebarGroup",{attrs:{item:r,open:n===t.openGroupIndex,collapsable:r.collapsable||r.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:r}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},759:function(t,e,r){"use strict";r.r(e);var n=r(746);function i(t,e,r,n,i){const s={props:{to:e,activeClass:"",exactActiveClass:""},attrs:{title:r},class:{active:n,"sidebar-link":!0}};return i>2&&(s.style={"padding-left":i+"rem"}),t("RouterLink",s,r)}function s(t,e,r,a,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(n.e)(a,r+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,r+"#"+e.slug,e.title,u,e.level-1),s(t,e.children,r,a,o,l+1)])}))}var a={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:r,$route:a,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(n.e)(a,u.path),d="auto"===u.type?p||u.children.some(t=>Object(n.e)(a,u.basePath+"#"+t.slug)):p,h="external"===u.type?function(t,e,r){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[r,t("OutboundLink")])}(t,u.path,u.title||u.path):i(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[h,s(t,u.children,u.basePath,a,f)];if((d||b)&&u.headers&&!n.d.test(u.path)){return[h,s(t,Object(n.c)(u.headers),u.path,a,f)]}return h}},o=(r(756),r(63)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=l.exports},763:function(t,e,r){"use strict";r(750)},764:function(t,e,r){"use strict";r(751)},765:function(t,e,r){},774:function(t,e,r){"use strict";r.r(e);var n={name:"SidebarGroup",props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=r(757).default},methods:{isActive:r(746).e}},i=(r(763),r(63)),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]),t._v(" "),t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)}),[],!1,null,null,null);e.default=s.exports},775:function(t,e,r){"use strict";r.r(e);var n={name:"Promo",methods:{gotoLink(){window.open(this.data.link)},popupInfo(){this.$info({title:this.data.msgTitle||"Message Title",content:this.data.msgText||"Put your text here.",okText:this.data.msgOkText||"Ok",maskClosable:!0})}},computed:{data(){return this.$themeConfig.ads}}},i=(r(764),r(63)),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return t.data?e("div",[e("div",{staticClass:"promo"},[1===t.data.style?e("div",{attrs:{id:"promo_1"},on:{click:t.gotoLink}},[e("img",{attrs:{src:t.data.image}}),t._v(" "),e("span",{attrs:{title:t.data.text}},[t._v(t._s(t.data.text||"No text"))])]):2===t.data.style?e("div",{attrs:{id:"promo_2"}},[e("a-carousel",{attrs:{autoplay:"",autoplaySpeed:t.data.speed||3e3}},t._l(t.data.items,(function(t,r){return e("div",{key:r},[e("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:t.image,title:t.text}})])])})),0)],1):e("div",{attrs:{id:"promo_3"}},[e("div",{staticClass:"promo_title"},[t._v(t._s(t.data.title||"Sponsor"))]),t._v(" "),e("a-button",{attrs:{type:"primary",ghost:""},on:{click:t.popupInfo}},[t._v(t._s(t.data.btnText||"Become a Sponsor"))])],1)]),t._v(" "),e("a-divider",{attrs:{dashed:"",id:"reset-margin"}})],1):t._e()}),[],!1,null,null,null);e.default=s.exports},781:function(t,e,r){"use strict";r(765)},785:function(t,e,r){"use strict";r.r(e);var n=r(757),i=r(775),s={name:"Sidebar",components:{SidebarLinks:n.default,Promo:i.default},props:["items"]},a=(r(781),r(63)),o=Object(a.a)(s,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[this.$themeConfig.ads?t("Promo"):this._e(),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);