(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{2951:function(t,v,_){"use strict";_.r(v);var d=_(63),r=Object(d.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"标识修复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标识修复"}},[t._v("#")]),t._v(" 标识修复")]),t._v(" "),v("h2",{attrs:{id:"关于"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),v("p",[t._v("当题目中出现文件损坏或打不开时，我们可以通过十六进制查看工具打开文件，查看文件头是否被修改或删除，使用工具手动更新缺失的数据修复文件头")]),t._v(" "),v("p",[v("img",{attrs:{src:_(957),alt:"img"}})]),t._v(" "),v("p",[t._v("例如上图中虽然后缀为 zip文件且损坏无法打开，但通过工具打开后发现原因为 PNG的文件头中的 89 被删除导致，通过添加缺失的字符到文件头并修改正确的后缀为 PNG就可以修复文件并重新打开。")]),t._v(" "),v("h2",{attrs:{id:"bjdctf2020-鸡你太美-文件头修复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bjdctf2020-鸡你太美-文件头修复"}},[t._v("#")]),t._v(" BJDCTF2020 - 鸡你太美 (文件头修复)")]),t._v(" "),v("p",[t._v("GIF文件无法打开，为损坏状态，使用工具打开")]),t._v(" "),v("p",[v("img",{attrs:{src:_(958),alt:"img"}})]),t._v(" "),v("p",[t._v("拿一张正常的GIF文件可以对比出缺失的部分")]),t._v(" "),v("p",[v("img",{attrs:{src:_(959),alt:"img"}})]),t._v(" "),v("p",[t._v("对比后发现缺失的数据为 GIF的文件头 47 49 46 38, 手动添加修复后即可打开文件")]),t._v(" "),v("p",[v("img",{attrs:{src:_(960),alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"扩展名表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#扩展名表"}},[t._v("#")]),t._v(" 扩展名表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("扩展名")]),t._v(" "),v("th",[t._v("文件头标识（HEX）")]),t._v(" "),v("th",[t._v("文件描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("7z")]),t._v(" "),v("td",[t._v("37 7A BC AF 27 1C")]),t._v(" "),v("td",[t._v("7-ZIP compressed file")])]),t._v(" "),v("tr",[v("td",[t._v("ami")]),t._v(" "),v("td",[t._v("5B 76 65 72 5D")]),t._v(" "),v("td",[t._v("Lotus Ami Pro")])]),t._v(" "),v("tr",[v("td",[t._v("avi")]),t._v(" "),v("td",[t._v("41 56 49 20")]),t._v(" "),v("td",[t._v("Audio Video Interleave (AVI)")])]),t._v(" "),v("tr",[v("td",[t._v("BMP")]),t._v(" "),v("td",[t._v("42 4D 3E")]),t._v(" "),v("td",[t._v("Windows Bitmap")])]),t._v(" "),v("tr",[v("td",[t._v("html")]),t._v(" "),v("td",[t._v("68 74 6D 6C 3E")]),t._v(" "),v("td",[t._v("HTML")])]),t._v(" "),v("tr",[v("td",[t._v("ico")]),t._v(" "),v("td",[t._v("00 00 01 00 00")]),t._v(" "),v("td",[t._v("Icon File")])]),t._v(" "),v("tr",[v("td",[t._v("jar")]),t._v(" "),v("td",[t._v("5F 27 A8 89")]),t._v(" "),v("td",[t._v("JAR Archive File")])]),t._v(" "),v("tr",[v("td",[t._v("mp4")]),t._v(" "),v("td",[t._v("00 00 00 18 66 74 79 70 33 67 70 35")]),t._v(" "),v("td",[t._v("MPEG-4 video files")])]),t._v(" "),v("tr",[v("td",[t._v("jpg; jpe; jpeg")]),t._v(" "),v("td",[t._v("FF D8 FF E0 00")]),t._v(" "),v("td",[t._v("JPG Graphic File")])]),t._v(" "),v("tr",[v("td",[t._v("png")]),t._v(" "),v("td",[t._v("89 50 4E 47 0D 0A 1A 0A")]),t._v(" "),v("td",[t._v("PNG Image File")])]),t._v(" "),v("tr",[v("td",[t._v("tar; cpio")]),t._v(" "),v("td",[t._v("30 37 30 37 30 37")]),t._v(" "),v("td",[t._v("CPIO Archive File")])]),t._v(" "),v("tr",[v("td",[t._v("pdf")]),t._v(" "),v("td",[t._v("25 50 44 46 2D 31 2E")]),t._v(" "),v("td",[t._v("Adobe Acrobat")])]),t._v(" "),v("tr",[v("td",[t._v("zip")]),t._v(" "),v("td",[t._v("50 4B 30 30 50 4B 03 04")]),t._v(" "),v("td",[t._v("WINZIP Compressed")])]),t._v(" "),v("tr",[v("td",[t._v("xml")]),t._v(" "),v("td",[t._v("3C 3F 78 6D 6C")]),t._v(" "),v("td",[t._v("XML Document")])]),t._v(" "),v("tr",[v("td",[t._v("gif")]),t._v(" "),v("td",[t._v("47 49 46 38 37 61")]),t._v(" "),v("td",[t._v("Graphics interchange format file")])])])])])}),[],!1,null,null,null);v.default=r.exports},957:function(t,v,_){t.exports=_.p+"assets/img/1667878192499-ff609422-9363-40c5-97b1-1a042869efc9.ac1dd75d.png"},958:function(t,v,_){t.exports=_.p+"assets/img/1667878704583-3605d384-a3ee-4fdd-b0e5-61003784990f.97e41ef2.png"},959:function(t,v,_){t.exports=_.p+"assets/img/1667878802700-828c5980-55f4-4297-be76-6bb3c56feeaa.3acfa3f6.png"},960:function(t,v,_){t.exports=_.p+"assets/img/1667878911415-fd44cc88-7760-42be-9664-680d269b1f36.ce3b1d55.png"}}]);