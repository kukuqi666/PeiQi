(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{2797:function(s,a,t){s.exports=t.p+"assets/img/1650592340016-fcbc91f2-5443-4dd3-b726-5fabfe109617.d1947afc.png"},2798:function(s,a,t){s.exports=t.p+"assets/img/1650592523770-e6ea155d-4e62-426a-82d1-c9acd7359846.7bb8d368.png"},2799:function(s,a,t){s.exports=t.p+"assets/img/1650592654329-a18480bd-82f4-41df-bdb5-d99056a6637a.f45a8599.png"},2800:function(s,a,t){s.exports=t.p+"assets/img/1650592691209-1c8ccadd-47d7-4c67-9cbe-4a6f74738957.3737493f.png"},2801:function(s,a,t){s.exports=t.p+"assets/img/1650592955431-233dff33-a8c7-4d6f-a149-472005e5aee5.9c41429d.png"},2802:function(s,a,t){s.exports=t.p+"assets/img/1650593267061-cc90dfbe-c500-42a8-813c-f76d13383367.c6a18441.png"},3561:function(s,a,t){"use strict";t.r(a);var n=t(63),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"apache-skywalking-graphql-sql注入漏洞-cve-2020-9483"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-skywalking-graphql-sql注入漏洞-cve-2020-9483"}},[s._v("#")]),s._v(" Apache SkyWalking graphql SQL注入漏洞 CVE-2020-9483")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("腾讯安全威胁情报中心监测到Apache SkyWalking发布更新，修复了一个SQL注入漏洞（编号：CVE-2020-9483）。远程攻击者可通过Apache SkyWalking默认开放的未授权GraphQL接口构造恶意请求包进行注入攻击，成功利用此漏洞可造成敏感数据泄漏。该漏洞等级为高危，腾讯安全专家建议相关企业尽快修复。")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Apache SkyWalking 6.0.0~6.6.0")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Apache SkyWalking 7.0.0")]),a("br"),s._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("https://archive.apache.org/dist/skywalking/6.5.0/apache-skywalking-apm-6.5.0.tar.gz")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("https://archive.apache.org/dist/skywalking/8.3.0/apache-skywalking-apm-6.5.0-src.tgz")]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("下载编译好的源码后，进入bin目录，修改 oapService.sh  通过IDEA进行远程调试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OAP_HOME")]),s._v('"')]),s._v("/oap-libs/*.jar\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OAP_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -Doap.logDir='),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OAP_LOG_DIR}")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_RUNJAVA")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPTS}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OAP_OPTIONS}")]),s._v(" -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005 -classpath "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSPATH")]),s._v(" org.apache.skywalking.oap.server.starter.OAPServerStartUp \\\n        2>"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OAP_LOG_DIR}")]),s._v('/oap.log 1> /dev/null &"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SkyWalking OAP started successfully!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SkyWalking OAP started failure!"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("配置IDEA  JVM Debug"),a("img",{attrs:{src:t(2797),alt:"img"}})]),s._v(" "),a("p",[s._v("查看CVE的修复commit寻找修复的地方")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2798),alt:"img"}})]),s._v(" "),a("p",[s._v("打下断点并发送Payload请求包")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("graphql "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xhtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("avif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("signed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("exchange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gzip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deflate\nAccept"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Language"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" zh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("en"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("US")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("zh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v("\nCache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json\nUpgrade"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Insecure"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Mozilla"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Macintosh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Intel Mac "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10_15_7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AppleWebKit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("KHTML")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4896")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".127")]),s._v(" Safari"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"query"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"query queryData('),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$duration")])]),s._v(": Duration!) {globalP99: getLinearIntValues(metric: {name: \\\"all_p99\\\", id: \\\"') UNION ALL SELECT NULL,CONCAT('~', H2VERSION(), '~')--\\\" }, duration: "),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$duration")])]),s._v(') {  values { value } }}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"variables"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"2020-08-07 1418"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"2020-08-07 1417"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"step"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"MINUTE"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2799),alt:"img"}})]),s._v(" "),a("p",[s._v("在 org.apache.skywalking.oap.query.graphql.resolver 中我们可以看到参数 metrics.getId() 没有过滤就直接传入 getLinearIntValues")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2800),alt:"img"}})]),s._v(" "),a("p",[s._v("跟随来到 org.apache.skywalking.oap.server.core.query.MetricQueryService.getLinearIntValues(MetricQueryService.java:96)")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2801),alt:"img"}})]),s._v(" "),a("p",[s._v("来到 org.apache.skywalking.oap.server.storage.plugin.jdbc.h2.dao.H2MetricsQueryDAO.getLinearIntValues(H2MetricsQueryDAO.java:117)，这里就将拼接的语句带入数据库进行查询，造成SQL注入")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2802),alt:"img"}})]),s._v(" "),a("p",[s._v("调用栈如下")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("getLinearIntValues"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("117")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("H2MetricsQueryDAO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("h2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngetLinearIntValues"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MetricQueryService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngetLinearIntValues"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MetricQuery")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nexecute"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GraphQLQueryHandler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndoPost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GraphQLQueryHandler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndoPost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JettyJsonHandler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jetty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nservice"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JettyJsonHandler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jetty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nservice"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("105")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JettyJsonHandler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jetty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);