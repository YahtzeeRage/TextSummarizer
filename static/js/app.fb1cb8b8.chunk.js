(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{57:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(28),o=a.n(r),s=a(54),c=a(0),i=a.n(c),l=a(56),u=a(55),p=a(2),g=a(23),m=a(7);var d=p.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});Object(n.a)((function(){var e=i.a.useState("write in me"),t=o()(e,2),a=t[0],n=t[1],r=i.a.useState("future prediction..."),c=o()(r,2),p=c[0],h=c[1];return i.a.createElement(m.a,{style:d.container},i.a.createElement(g.a,null,"Enter in Text to have it Summarized (Only 6000 characters can be sent at a time)!"),i.a.createElement(l.a,{maxLength:6e3,style:{height:40,borderColor:"gray",borderWidth:1},value:a,onChangeText:function(e){return n(e)},onSubmitEditing:function(){h("loading...");var e=new XMLHttpRequest;e.open("POST","https://ipczl1r729.execute-api.us-east-1.amazonaws.com/summarizer"),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(console.log("Succes returned:"),console.log(e.responseText),h(e.responseText)):(console.log("Error",e.statusText),h("ERROR: Text doesn't have enough words")))};var t=a.replace(/\n/g," "),n='{"text": "'+(t=(t=(t=(t=(t=(t=t.replace(/\"/g," ")).replace(/\'/g," ")).replace(/\{/g," ")).replace(/\}/g," ")).replace(/\(/g," ")).replace(/\)/g," "))+'"}';e.send(n)}}),i.a.createElement(u.a,{title:"Press me to summarize inputted text",style:{width:400,height:500},onPress:function(){h("loading...");var e=new XMLHttpRequest;e.open("POST","https://ipczl1r729.execute-api.us-east-1.amazonaws.com/summarizer"),e.setRequestHeader("Content-Type","application/json"),e.onreadystatechange=function(){4===e.readyState&&(console.log(e.status),console.log(e.responseText),h(e.responseText))};var t='{"text": "'+a+'"}';e.send(t)}}),i.a.createElement(g.a,null,p),i.a.createElement(s.a,{style:"auto"}))}))}},[[57,1,2]]]);
//# sourceMappingURL=app.fb1cb8b8.chunk.js.map