import{d as l,x as d,F as f,K as u,o,m as i,w as _,aq as p,a7 as y,a as g,c as r,j as s,t as x,k as c,f as v}from"./entry.6470c283.js";import{_ as w,a as k}from"./CommonTrendingCharts.vue.860ab26d.js";const $=l({__name:"CommonScrollIntoView",props:{as:{default:"div"},active:{type:Boolean}},setup(n){const a=d();return f(()=>n.active,e=>{const t=u(a);e&&t&&t.scrollIntoView({block:"nearest",inline:"start"})}),(e,t)=>(o(),i(y(e.as),{ref_key:"el",ref:a},{default:_(()=>[p(e.$slots,"default")]),_:3},512))}}),C={flex:"","flex-row":"","items-center":"",gap2:"",relative:""},b=s("div",{"w-10":"","h-10":"","flex-none":"","rounded-full":"","bg-active":"",flex:"","place-items-center":"","place-content-center":""},[s("div",{"i-ri:hashtag":"","text-secondary":"","text-lg":""})],-1),B={flex:"","flex-col":""},V={key:0,absolute:"","left-15":"","right-0":"","top-0":"","bottom-4":"",op35:"",flex:"","place-items-center":"","place-content-center":"","ml-auto":""},I=l({__name:"SearchHashtagInfo",props:{hashtag:{}},setup(n){const a=g(()=>n.hashtag.history?.reduce((e,t)=>e+(Number(t.accounts)||0),0));return(e,t)=>{const h=w,m=k;return o(),r("div",C,[b,s("div",B,[s("span",null,x(e.hashtag.name),1),e.hashtag.history?(o(),i(h,{key:0,history:e.hashtag.history,"text-xs":"","text-secondary":"",truncate:""},null,8,["history"])):c("",!0)]),a.value&&e.hashtag.history?(o(),r("div",V,[v(m,{history:e.hashtag.history,width:150,height:20,"text-xs":"","text-secondary":"","h-full":"","w-full":""},null,8,["history"])])):c("",!0)])}}});export{$ as _,I as a};