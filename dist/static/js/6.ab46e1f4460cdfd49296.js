webpackJsonp([6],{DcR4:function(t,e){},S4Pl:function(t,e){},ignk:function(t,e,a){"use strict";Boolean,Boolean,Boolean;var n={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},staticRenderFns:[]};var o=a("VU/8")(n,l,!1,function(t){a("S4Pl")},null,null);e.a=o.exports},tJz6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ignk"),l=a("rHil"),o=a("1DHf"),s=(n.a,l.a,o.a,{components:{XTable:n.a,Group:l.a,Cell:o.a},data:function(){return{getDataUrl:"/api/gdekhback/special/shop_list",dataList:[],id:"",lat:"",lng:"",distance:""}},mounted:function(){this.id=this.$route.query.id,this.getData()},methods:{getData:function(){var t=this,e=this.$route.query.id;this.$vux.loading.show({text:"加载中..."}),this.$http.get(this.getDataUrl,{params:{id:e}}).then(function(e){0===e.data.status&&(t.dataList=e.data.info,t.$vux.loading.hide())})}}}),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("group",{attrs:{gutter:0}},t._l(t.dataList,function(e){return a("cell",{key:e.id},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),t._v(" "),a("p",{attrs:{slot:"inline-desc"},slot:"inline-desc"},[t._v(t._s(e.address))]),t._v(" "),a("div",{staticClass:"iconfont depth_tel"},[a("a",{staticStyle:{color:"#666","font-size":"24px"},attrs:{href:"tel:"+e.tel}},[t._v("")])])])}),1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("DcR4")},null,null);e.default=r.exports}});
//# sourceMappingURL=6.ab46e1f4460cdfd49296.js.map