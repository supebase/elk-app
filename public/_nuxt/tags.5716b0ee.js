import{_ as w}from"./CommonAlert.vue.7769a78e.js";import{_ as v}from"./TagActionButton.vue.78522b7e.js";import{_ as $,a as k}from"./CommonTrendingCharts.vue.860ab26d.js";import{d as f,a as C,aw as x,o as r,c as m,j as t,f as n,t as y,m as h,k as u,ax as T,ap as P,w as g,b as S,B,C as E,ar as K,ay as R,e as A,h as b,au as N,av as L,L as j}from"./entry.6470c283.js";import{c as H}from"./CommonPaginator.vue.26cfe48c.js";const I=["onKeydown"],O={flex:"","items-center":"","text-size-base":"","leading-normal":"","font-medium":"","line-clamp-1":"","break-all":"","ws-pre-wrap":""},U=t("span",null,"#",-1),V={"hover:underline":""},z={key:0,flex:"","items-center":""},D=f({__name:"TagCard",props:{tag:{}},setup(p){const a=C(()=>{const{hostname:e,pathname:s}=new URL(p.tag.url);return`/${e}${s}`}),d=x();function c(e){const i=e.composedPath().find(_=>["A","BUTTON"].includes(_.tagName?.toUpperCase())),l=window.getSelection()?.toString();!i&&!l&&o(e)}function o(e){e.metaKey||e.ctrlKey?window.open(a.value):d.push(a.value)}return(e,s)=>{const i=v,l=$,_=k;return r(),m("div",{block:"",p4:"","hover:bg-active":"",flex:"","justify-between":"","cursor-pointer":"",onClick:c,onKeydown:T(c,["enter"])},[t("div",null,[t("h4",O,[n(i,{tag:e.tag},null,8,["tag"]),U,t("span",V,y(e.tag.name),1)]),e.tag.history?(r(),h(l,{key:0,history:e.tag.history,"text-sm":"","text-secondary":"","line-clamp-1":"","ws-pre-wrap":"","break-all":""},null,8,["history"])):u("",!0)]),e.tag.history?(r(),m("div",z,[n(_,{history:e.tag.history},null,8,["history"])])):u("",!0)],40,I)}}}),G={},F={p4:"",flex:"","justify-between":""},M=t("div",{flex:"~ col 1 gap-2"},[t("div",{flex:"",class:"skeleton-loading-bg","h-5":"","w-30":"",rounded:""}),t("div",{flex:"",class:"skeleton-loading-bg","h-4":"","w-45":"",rounded:""})],-1),X=t("div",{flex:"","items-center":""},[t("div",{flex:"",class:"skeleton-loading-bg","h-9":"","w-15":"",rounded:""})],-1),Y=[M,X];function q(p,a){return r(),m("div",F,Y)}const J=P(G,[["render",q]]),Q=f({__name:"TagCardPaginator",props:{paginator:{}},setup(p){return(a,d)=>{const c=D,o=J,e=H;return r(),h(e,{paginator:a.paginator,"key-prop":"name"},{default:g(({item:s})=>[n(c,{tag:s,border:"b base"},null,8,["tag"])]),loading:g(()=>[n(o,{border:"b base"}),n(o,{border:"b base"}),n(o,{border:"b base",op50:""}),n(o,{border:"b base",op50:""}),n(o,{border:"b base",op25:""})]),_:1},8,["paginator"])}}}),ae=f({__name:"tags",setup(p){const{t:a}=S(),d=B(),o=E(d,"client").value.v1.trends.listTags({limit:20}),e=K(R,!1);return A({title:()=>`${a("tab.hashtags")} | ${a("nav.explore")}`}),(s,i)=>{const l=w,_=Q;return r(),m(j,null,[b(e)?u("",!0):(r(),h(l,{key:0,onClose:i[0]||(i[0]=W=>e.value=!0)},{default:g(()=>[t("p",null,y(s.$t("tooltip.explore_tags_intro")),1)]),_:1})),n(_,N(L({paginator:b(o)})),null,16)],64)}}});export{ae as default};
