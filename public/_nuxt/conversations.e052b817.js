import{d as u,a as C,o as a,c as d,m as r,w as l,j as _,t as f,L as h,M as g,k as p,ac as y,f as v,q as k,O as $,h as m,b as S,e as x,I as b,y as w,p as A}from"./entry.6470c283.js";import{e as H}from"./StatusCard.vue.1da0e372.js";import{c as B}from"./CommonPaginator.vue.26cfe48c.js";import"./AccountInlineInfo.vue.1d2999da.js";import"./Dropdown.vue.aa86e3bf.js";import"./StatusAttachment.vue.65a4200d.js";import"./CommonBlurhash.vue.63c08ee4.js";import"./StatusPreviewCard.vue.01b2746b.js";const N={key:0,flex:"","flex-col":"","gap-2":""},T={flex:"","gap-2":"","text-sm":"","text-secondary":"","font-bold":""},L={"me-1":""},M=u({__name:"ConversationCard",props:{conversation:{}},setup(i){const e=C(()=>i.conversation.accounts.filter(t=>t.id!==i.conversation.lastStatus?.account.id));return(t,c)=>{const n=y,o=H;return t.conversation.lastStatus?(a(),d("article",N,[t.conversation.lastStatus?(a(),r(o,{key:0,status:t.conversation.lastStatus,actions:!1},{meta:l(()=>[_("div",T,[_("p",L,f(t.$t("conversation.with")),1),(a(!0),d(h,null,g(e.value,s=>(a(),r(n,{key:s.id,"h-5":"","w-5":"",account:s},null,8,["account"]))),128))])]),_:1},8,["status"])):p("",!0)])):p("",!0)}}}),P=u({__name:"ConversationPaginator",props:{paginator:{}},setup(i){function e(t){const c=n=>n.lastStatus?n.lastStatus.account.id===k.value?.account.id:!1;return t.filter(n=>c(n)||!n.lastStatus?.filtered?.find(o=>o.filter.filterAction==="hide"&&o.filter.context.includes("thread")))}return(t,c)=>{const n=M,o=B;return a(),r(o,{paginator:t.paginator,preprocess:e},{default:l(({item:s})=>[v(n,{conversation:s,border:"b base","py-1":""},null,8,["conversation"])]),_:1},8,["paginator"])}}}),V=u({__name:"TimelineConversations",setup(i){const e=$().v1.conversations.list();return(t,c)=>{const n=P;return a(),r(n,{paginator:m(e)},null,8,["paginator"])}}}),I=_("div",{"i-ri:at-line":""},null,-1),G=u({__name:"conversations",setup(i){const{t:e}=S();return x({title:()=>e("nav.conversations")}),(t,c)=>{const n=A,o=V,s=b;return a(),r(s,null,{title:l(()=>[v(n,{to:"/conversations","timeline-title-style":"",flex:"","items-center":"","gap-2":"",onClick:t.$scrollToTop},{default:l(()=>[I,_("span",null,f(m(e)("nav.conversations")),1)]),_:1},8,["onClick"])]),default:l(()=>[("isHydrated"in t?t.isHydrated:m(w))?(a(),r(o,{key:0})):p("",!0)]),_:1})}}});export{G as default};
