import{_ as c}from"./SettingsItem.vue.a5eeff58.js";import{d as m,b as u,ci as g,e as y,m as b,w as a,I as H,o as $,j as d,t as C,h as i,y as s,f as l}from"./entry.6470c283.js";const T=m({__name:"index",setup(h){const{t:n}=u(),r=g().pwaEnabled;return y({title:()=>`${n("settings.notifications.label")} | ${n("nav.settings")}`}),(t,e)=>{const o=c,f=H;return $(),b(f,{"back-on-small-screen":""},{title:a(()=>[d("div",{"text-lg":"","font-bold":"",flex:"","items-center":"","gap-2":"",onClick:e[0]||(e[0]=(...p)=>t.$scrollToTop&&t.$scrollToTop(...p))},[d("span",null,C(("isHydrated"in t?t.isHydrated:i(s))?t.$t("settings.notifications.label"):""),1)])]),default:a(()=>[l(o,{command:"",text:("isHydrated"in t?t.isHydrated:i(s))?t.$t("settings.notifications.notifications.label"):"",to:"/settings/notifications/notifications"},null,8,["text"]),l(o,{command:"",disabled:!i(r),text:("isHydrated"in t?t.isHydrated:i(s))?t.$t("settings.notifications.push_notifications.label"):"",description:("isHydrated"in t?t.isHydrated:i(s))?t.$t("settings.notifications.push_notifications.description"):"",to:"/settings/notifications/push-notifications"},null,8,["disabled","text","description"])]),_:1})}}});export{T as default};
