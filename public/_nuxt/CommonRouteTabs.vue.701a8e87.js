import{d as m,aw as x,c8 as u,o,c as a,L as n,M as y,m as f,w as b,j as l,t as p,p as h}from"./entry.6470c283.js";const _={flex:"","w-full":"","items-center":"","lg:text-lg":"","of-x-auto":"","scrollbar-hide":"",border:"b base"},v={"ws-nowrap":"",mxa:"","sm:px2":"","sm:py3":"","xl:pb4":"","xl:pt5":"",py2:"","text-center":"","border-b-3":"","text-secondary-light":"","hover:text-secondary":"","border-transparent":""},k={key:1,flex:"","flex-auto":"","sm:px6":"",px2:"","xl:pb4":"","xl:pt5":""},w={"ws-nowrap":"",mxa:"","sm:px2":"","sm:py3":"",py2:"","text-center":"","text-secondary-light":"",op50:""},T=m({__name:"CommonRouteTabs",props:{options:{},command:{type:Boolean},replace:{type:Boolean},preventScrollTop:{type:Boolean,default:!1}},setup(s){const i=x();return u(()=>s.command?s.options.map(e=>({scope:"Tabs",name:e.display,icon:e.icon??"i-ri:file-list-2-line",onActivate:()=>i.replace(e.to)})):[]),(e,r)=>{const c=h;return o(),a("div",_,[(o(!0),a(n,null,y(e.options.filter(t=>!t.hide),(t,d)=>(o(),a(n,{key:t?.name||d},[t.disabled?(o(),a("div",k,[l("span",w,p(t.display),1)])):(o(),f(c,{key:0,to:t.to,replace:e.replace,relative:"",flex:"","flex-auto":"","cursor-pointer":"","sm:px6":"",px2:"",rounded:"","transition-all":"",tabindex:"1","hover:bg-active":"","transition-100":"","exact-active-class":"children:text-secondary !children:border-primary !children:op100 !children:text-base",onClick:r[0]||(r[0]=g=>!e.preventScrollTop&&e.$scrollToTop())},{default:b(()=>[l("span",v,p(t.display||" "),1)]),_:2},1032,["to","replace"]))],64))),128))])}}});export{T as _};
