(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01f15ed8"],{"0fd9":function(t,n,e){"use strict";var r=e("ade3"),a=e("5530"),o=(e("d3b7"),e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),c=e("d9f7"),l=e("80d2"),i=["sm","md","lg","xl"],u=["start","end","center"];function s(t,n){return i.reduce((function(e,r){return e[t+Object(l["E"])(r)]=n(),e}),{})}var f=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},d=s("align",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},v=s("justify",(function(){return{type:String,default:null,validator:p}})),b=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=s("alignContent",(function(){return{type:String,default:null,validator:b}})),y={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(g)},h={align:"align",justify:"justify",alignContent:"align-content"};function _(t,n,e){var r=h[t];if(null!=e){if(n){var a=n.replace(t,"");r+="-".concat(a)}return r+="-".concat(e),r.toLowerCase()}}var k=new Map;n["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(t,n){var e=n.props,a=n.data,o=n.children,l="";for(var i in e)l+=String(e[i]);var u=k.get(l);return u||function(){var t,n;for(n in u=[],y)y[n].forEach((function(t){var r=e[t],a=_(n,t,r);a&&u.push(a)}));u.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r["a"])(t,"align-".concat(e.align),e.align),Object(r["a"])(t,"justify-".concat(e.justify),e.justify),Object(r["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),k.set(l,u)}(),t(e.tag,Object(c["a"])(a,{staticClass:"row",class:u}),o)}})},"4b85":function(t,n,e){},"62ad":function(t,n,e){"use strict";var r=e("ade3"),a=e("5530"),o=(e("d3b7"),e("a9e3"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("3ca3"),e("ddb0"),e("caad"),e("159b"),e("2ca0"),e("4b85"),e("2b0e")),c=e("d9f7"),l=e("80d2"),i=["sm","md","lg","xl"],u=function(){return i.reduce((function(t,n){return t[n]={type:[Boolean,String,Number],default:!1},t}),{})}(),s=function(){return i.reduce((function(t,n){return t["offset"+Object(l["E"])(n)]={type:[String,Number],default:null},t}),{})}(),f=function(){return i.reduce((function(t,n){return t["order"+Object(l["E"])(n)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(u),offset:Object.keys(s),order:Object.keys(f)};function p(t,n,e){var r=t;if(null!=e&&!1!==e){if(n){var a=n.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==e&&!0!==e?(r+="-".concat(e),r.toLowerCase()):r.toLowerCase()}}var v=new Map;n["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},s),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,n){var e=n.props,a=n.data,o=n.children,l=(n.parent,"");for(var i in e)l+=String(e[i]);var u=v.get(l);return u||function(){var t,n;for(n in u=[],d)d[n].forEach((function(t){var r=e[t],a=p(n,t,r);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!e.cols},Object(r["a"])(t,"col-".concat(e.cols),e.cols),Object(r["a"])(t,"offset-".concat(e.offset),e.offset),Object(r["a"])(t,"order-".concat(e.order),e.order),Object(r["a"])(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),v.set(l,u)}(),t(e.tag,Object(c["a"])(a,{class:u}),o)}})},e4e7:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about pa-6"},[e("h1",[t._v("中国心解密工具")]),e("div",[t._v("破译记录：")]),t._l(t.records,(function(n){return e("div",[t._v(t._s(n))])})),t.all_input.length>0?e("div",[e("br"),t._v(" 共有可能组合 "+t._s(t.allComibinatioons.length)+" 个："),e("br"),t._l(t.allComibinatioons,(function(n){return e("span",[t._v(" "+t._s(n)+", ")])}))],2):t._e(),e("br"),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pr-6",attrs:{cols:"2"}},[e("v-text-field",{attrs:{label:"猜测组合",outlined:"",dense:""},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.onClickOk.apply(null,arguments))}},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}})],1),e("v-col",{staticClass:"pr-6",attrs:{cols:"2"}},[e("v-text-field",{attrs:{label:"正确数字个数",outlined:"",dense:""},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.onClickOk.apply(null,arguments))}},model:{value:t.correct_num,callback:function(n){t.correct_num=n},expression:"correct_num"}})],1),e("v-col",{staticClass:"pr-6",attrs:{cols:"2"}},[e("v-text-field",{attrs:{label:"正确位置个数",outlined:"",dense:""},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.onClickOk.apply(null,arguments))}},model:{value:t.correct_pos,callback:function(n){t.correct_pos=n},expression:"correct_pos"}})],1),e("v-col",{staticClass:"pr-6",attrs:{cols:"1"}},[e("v-btn",{attrs:{color:"primary"},on:{click:t.onClickOk}},[t._v(" 确定 ")])],1)],1),e("v-btn",{attrs:{color:"primary"},on:{click:t.reset}},[t._v(" 重置 ")])],2)},a=[];e("a9e3"),e("d3b7"),e("25f0");function o(t,n){for(var e=0,r=0;r<3;r++)for(var a=0;a<3;a++)t[r]==n[a]&&r!=a&&e++;return e}function c(t,n){for(var e=0,r=0;r<3;r++)for(var a=0;a<3;a++)t[r]==n[a]&&r==a&&e++;return e}function l(t,n,e,r){for(var a=0;a<t.length;a++){var l=o(t[a],r),i=c(t[a],r);if(l!=n[a]||i!=e[a])return!1}return!0}var i={name:"App",data:function(){return{input:"",correct_num:"",correct_pos:"",all_input:[],all_correct_num:[],all_correct_pos:[],allComibinatioons:[],records:[]}},methods:{reset:function(){this.$router.go()},onClickOk:function(){var t=Number(this.input);if(isNaN(t)||t<111||t>999)return alert("请输入三位数字！"),void(this.input="");this.all_input.push(this.input),this.all_correct_num.push(this.correct_num),this.all_correct_pos.push(this.correct_pos),this.allComibinatioons=[];for(var n=1;n<10;n++)for(var e=1;e<10;e++)for(var r=1;r<10;r++)if(n!=e&&e!=r&&n!=r){var a=n.toString()+e.toString()+r.toString();l(this.all_input,this.all_correct_num,this.all_correct_pos,a)&&this.allComibinatioons.push(a)}this.records.push("第"+(this.records.length+1)+"次破译：["+this.input+"] "+this.correct_num+"个数字正确，"+this.correct_pos+"个位置正确\n"),this.input="",this.correct_num="",this.correct_pos=""}}},u=i,s=e("2877"),f=e("6544"),d=e.n(f),p=e("8336"),v=e("62ad"),b=e("0fd9"),g=e("8654"),y=Object(s["a"])(u,r,a,!1,null,null,null);n["default"]=y.exports;d()(y,{VBtn:p["a"],VCol:v["a"],VRow:b["a"],VTextField:g["a"]})}}]);