(function(){"use strict";var e={6710:function(e,t,n){var r=n(144),s=n(1096),i=n(3246),a=function(){var e=this,t=e._self._c;return t(s.Z,[t(i.Z,[t("router-view")],1)],1)},o=[],c={name:"App"},l=c,u=n(1001),d=(0,u.Z)(l,a,o,!1,null,null,null),m=d.exports,h=n(8345),p=n(6715),b=n(4698),f=n(5057),g=n(4470),v=n(5251),w=function(){var e=this,t=e._self._c;return t("div",[t("title-bar",{attrs:{color:"primary",title:"Scoreboard"}}),t(v.Z,{attrs:{label:"Search","append-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(b.Z,{attrs:{headers:e.computeHeaders,items:e.items,search:e.search},scopedSlots:e._u([{key:"header",fn:function(){return[t("thead",[t("tr",e._l(["Questions","A","B","C","D","E"],(function(n){return t("th",{key:n,attrs:{colspan:"4"}},[e._v(" "+e._s(n)+" ")])})),0),t("tr",[t("th",[t(f.Z,[e._v("mdi-filter")])],1),t("filter-box-cell",{attrs:{items:e.items.map((e=>e.name))},on:{"selection-changed":t=>e.name=t}}),t("th"),t("th"),e._l(e.answers,(function(e,n){return t("filter-box-cell",{key:n,attrs:{colspan:"4",items:["Answered","Unanswered"]},on:{"selection-changed":t=>e.answered=t}})}))],2)])]},proxy:!0},e._l(e.questionsNos,(function(n){return{key:"item."+n+"Answered",fn:function({item:r}){return[t(g.Z,{key:n,attrs:{disabled:""},model:{value:r[n.concat("Answered")],callback:function(t){e.$set(r,n.concat("Answered"),t)},expression:"item[question.concat('Answered')]"}})]}}})),e._l(e.questionsNos,(function(n){return{key:"item."+n+"Details",fn:function({item:r,index:s}){return[t(p.Z,{key:n,attrs:{color:r[n.concat("Answered")]?"primary":"error"},on:{click:function(t){return e.showDetails(s,n)}}},[e._v(" View ")])]}}}))],null,!0)})],1)},S=[],A=(n(7658),n(3347)),x=n(1002),y=n(2370),T=function(){var e=this,t=e._self._c;return t(x.Z,{attrs:{color:e.color}},[t(A.Z),t(y.qW,{staticClass:"white--text"},[e._v(e._s(e.title))]),t(A.Z)],1)},_=[],Z={props:["color","title"]},k=Z,q=(0,u.Z)(k,T,_,!1,null,null,null),C=q.exports,D=n(4041),P=function(){var e=this,t=e._self._c;return t("th",{attrs:{colspan:e.colspan}},[t(D.Z,{attrs:{items:e.items,clearable:"","clear-icon":"$clear"},on:{change:e.selectionChanged}},[e._v(" Filter box ")])],1)},O=[],$={props:{items:{},colspan:{default:1}},methods:{selectionChanged(e){this.$emit("selection-changed",e)}}},j=$,H=(0,u.Z)(j,P,O,!1,null,null,null),B=H.exports,F={data(){return{search:"",name:"",questionsNos:["a","b","c","d","e"],answers:[{col:6,answered:""},{col:10,answered:""},{col:14,answered:""},{col:18,answered:""},{col:22,answered:""}],questions:[],headers:[],items:[]}},mounted(){this.items=this.$store.getters.getScoreboardItems,this.questions=this.$store.getters.getQuestions},components:{TitleBar:C,FilterBoxCell:B},methods:{showDetails(e,t){let n=this.questions.filter((e=>e.question==t))[0];this.$store.commit("submissions",{time:this.items[e][t+"Time"],status:this.items[e][t+"Answered"]?"Answered":"Not answered",by:this.items[e].name,title:n.title,language:n.language}),this.$router.push("/submissions")},updateHeaders(){this.headers=this.$store.getters.getScoreboardHeaders,this.headers[1]["filter"]=e=>!this.name||e==this.name;for(let e of this.answers)this.headers[e.col]["filter"]=t=>!e.answered||("Answered"==e.answered?t:!t)}},computed:{computeHeaders(){return this.updateHeaders(),this.headers}}},N=F,I=(0,u.Z)(N,w,S,!1,null,null,null),M=I.exports,Q=n(4397),R=function(){var e=this,t=e._self._c;return t("div",[t("title-bar",{attrs:{title:e.submissions.title,color:e.getColor()}}),t(Q.Z,{scopedSlots:e._u([{key:"default",fn:function(){return[t("tbody",[t("tr",[t("th",[e._v("Contestant name")]),t("td",[e._v(e._s(e.submissions.by))])]),t("tr",[t("th",[e._v("Language")]),t("td",[e._v(e._s(e.submissions.language))])]),t("tr",[t("th",[e._v("Status")]),t("td",[e._v(e._s(e.submissions.status))])]),t("tr",[t("th",[e._v("Time")]),t("td",[e._v(e._s(e.submissions.time))])])])]},proxy:!0}])}),t(p.Z,{attrs:{color:e.getColor(),block:"",large:""},on:{click:function(t){return e.$router.back()}}},[e._v("Back")])],1)},E=[],J={data(){return{submissions:{}}},components:{TitleBar:C},methods:{getColor(){return"Answered"==this.submissions.status?"primary":"error"}},mounted(){this.submissions=this.$store.getters.getSubmissions,this.submissions.title||this.$router.push("/scoreboard")}},U=J,L=(0,u.Z)(U,R,E,!1,null,"dd1f0140",null),V=L.exports;r.ZP.use(h.ZP);const W=[{path:"/",redirect:"/scoreboard"},{path:"/scoreboard",name:"scoreboard",component:M},{path:"/submissions",name:"submissions",component:V}],z=new h.ZP({mode:"history",base:"/contest/",routes:W});var G=z,K=n(629);r.ZP.use(K.ZP);var X=new K.ZP.Store({state:{submissions:{time:"",status:"",by:"",title:"",language:""},questions:[{question:"a",title:"Merge sort the given array: [43, 24, 16, 58, 20, 12, 15, 21]",language:"Python"},{question:"b",title:"Create a CRUD application",language:"React"},{question:"c",title:"Implement binary search tree data structure",language:"C"},{question:"d",title:"Create tic-tac-toe application",language:"Flutter"},{question:"e",title:"Fetch data from weather API",language:"Javascript"}],scoreboard:{headers:[{text:"Rank",value:"rank",align:"center"},{text:"Name",value:"name",align:"center"},{text:"Score",value:"score",align:"center"},{text:"Penalty",value:"penalty",align:"center"},{text:"Score",value:"aScore",align:"center"},{text:"Time",value:"aTime",align:"center"},{text:"Answered",value:"aAnswered",align:"center"},{text:"Details",value:"aDetails",align:"center"},{text:"Score",value:"bScore",align:"center"},{text:"Time",value:"bTime",align:"center"},{text:"Answered",value:"bAnswered",align:"center"},{text:"Details",value:"bDetails",align:"center"},{text:"Score",value:"cScore",align:"center"},{text:"Time",value:"cTime",align:"center"},{text:"Answered",value:"cAnswered",align:"center"},{text:"Details",value:"cDetails",align:"center"},{text:"Score",value:"dScore",align:"center"},{text:"Time",value:"dTime",align:"center"},{text:"Answered",value:"dAnswered",align:"center"},{text:"Details",value:"dDetails",align:"center"},{text:"Score",value:"eScore",align:"center"},{text:"Time",value:"eTime",align:"center"},{text:"Answered",value:"eAnswered",align:"center"},{text:"Details",value:"eDetails",align:"center"}],items:[{rank:1,name:"John",score:50,penalty:0,aScore:10,aTime:"11:47 am",aAnswered:!0,bScore:10,bTime:"12:02 pm",bAnswered:!0,cScore:10,cTime:"12:17 pm",cAnswered:!0,dScore:10,dTime:"12:32 pm",dAnswered:!0,eScore:10,eTime:"12:46 pm",eAnswered:!0},{rank:2,name:"David",score:40,penalty:0,aScore:5,aTime:"3:33 pm",aAnswered:!0,bScore:7,bTime:"3:47 pm",bAnswered:!0,cScore:8,cTime:"3:55 pm",cAnswered:!0,dScore:10,dTime:"4:12 pm",dAnswered:!0,eScore:10,eTime:"4:22 pm",eAnswered:!0},{rank:3,name:"Steve",score:23,penalty:5,aScore:8,aTime:"5:20 pm",aAnswered:!0,bScore:10,bTime:"5:32 pm",bAnswered:!0,cScore:0,cTime:"-",cAnswered:!1,dScore:0,dTime:"-",dAnswered:!1,eScore:10,eTime:"6:02 pm",eAnswered:!0},{rank:4,name:"Alex",score:20,penalty:10,aScore:0,aTime:"-",aAnswered:!1,bScore:10,bTime:"12:33 pm",bAnswered:!0,cScore:10,cTime:"12:46 pm",cAnswered:!0,dScore:10,dTime:"1:12 pm",dAnswered:!0,eScore:0,eTime:"-",eAnswered:!1},{rank:5,name:"Carl",score:8,penalty:0,aScore:0,aTime:"-",aAnswered:!1,bScore:0,bTime:"-",bAnswered:!1,cScore:10,cTime:"-",cAnswered:!1,dScore:0,dTime:"-",dAnswered:!1,eScore:8,eTime:"2:22 pm",eAnswered:!0}]}},getters:{getScoreboardHeaders:e=>e.scoreboard.headers,getScoreboardItems:e=>e.scoreboard.items,getQuestions:e=>e.questions,getSubmissions:e=>e.submissions},mutations:{submissions(e,t){e.submissions=t}},actions:{},modules:{}}),Y=n(2250);r.ZP.use(Y.Z);var ee=new Y.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:G,store:X,vuetify:ee,render:e=>e(m)}).$mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,i){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],i=e[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(o=!1,i<a&&(a=i));if(o){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,a=r[0],o=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(c)var u=c(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkcontest"]=self["webpackChunkcontest"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6710)}));r=n.O(r)})();
//# sourceMappingURL=app.6f478b39.js.map