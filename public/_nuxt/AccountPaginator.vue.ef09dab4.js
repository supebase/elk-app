import{_}from"./AccountCard.vue.4086cce4.js";import{d,a,q as f,Y as x,Z as h,m as g,bl as v,w as n,o as k,j as o,t as r,f as c,l as C,p as b}from"./entry.6470c283.js";import{c as w}from"./CommonPaginator.vue.26cfe48c.js";const y={p5:"","text-secondary":"","text-center":"",flex:"","flex-col":"","items-center":"",gap1:""},N={italic:""},S=o("div",{"i-ri:external-link-fill":""},null,-1),P=d({__name:"AccountPaginator",props:{paginator:{},context:{},account:{},relationshipContext:{}},setup(t){const i=a(()=>["following","followers"].includes(t.context)),s=a(()=>t.account&&t.account.id!==f.value?.account.id&&x(t.account)!==h.value);return(e,$)=>{const l=_,u=b,p=w;return k(),g(p,{paginator:e.paginator},v({default:n(({item:m})=>[c(l,{account:m,"relationship-context":e.relationshipContext,"hover-card":"",border:"b base",py2:"",px4:""},null,8,["account","relationship-context"])]),_:2},[i.value&&s.value?{name:"done",fn:n(()=>[o("div",y,[o("span",N,r(e.$t(`account.view_other_${e.context}`)),1),c(u,{href:e.account.url,target:"_blank",external:"",flex:"~ gap-1","items-center":"","text-primary":"",hover:"underline text-primary-active"},{default:n(()=>[S,C(" "+r(e.$t("menu.open_in_original_site")),1)]),_:1},8,["href"])])]),key:"0"}:void 0]),1032,["paginator"])}}});export{P as _};
