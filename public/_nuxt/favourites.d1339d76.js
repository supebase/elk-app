import{d as m,O as f,o as n,m as s,h as a,b as d,S as v,e as y,w as o,I as C,f as g,j as c,a3 as k,t as h,y as H,k as T,p as x}from"./entry.6470c283.js";import{_ as F}from"./TimelinePaginator.vue.2ff95fae.js";import"./StatusCard.vue.1da0e372.js";import"./AccountInlineInfo.vue.1d2999da.js";import"./Dropdown.vue.aa86e3bf.js";import"./CommonPaginator.vue.26cfe48c.js";import"./StatusAttachment.vue.65a4200d.js";import"./CommonBlurhash.vue.63c08ee4.js";import"./StatusPreviewCard.vue.01b2746b.js";const I=m({__name:"TimelineFavourites",setup(l){const e=f().v1.favourites.list();return(i,t)=>{const r=F;return n(),s(r,{"end-message":"common.no_favourites",paginator:a(e)},null,8,["paginator"])}}}),j=m({__name:"favourites",setup(l){const{t:e}=d(),i=v("useStarFavoriteIcon");return y({title:()=>e("nav.favourites")}),(t,r)=>{const _=x,p=I,u=C;return n(),s(u,null,{title:o(()=>[g(_,{to:"/favourites","timeline-title-style":"",flex:"","items-center":"","gap-2":"",onClick:t.$scrollToTop},{default:o(()=>[c("div",{class:k(a(i)?"i-ri:star-line":"i-ri:heart-3-line")},null,2),c("span",null,h(a(e)("nav.favourites")),1)]),_:1},8,["onClick"])]),default:o(()=>[("isHydrated"in t?t.isHydrated:a(H))?(n(),s(p,{key:0})):T("",!0)]),_:1})}}});export{j as default};