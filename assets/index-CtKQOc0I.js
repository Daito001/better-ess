import{D as ft}from"./dexie-BODkcwel.js";import{b as ge,a as q,c as J,d as mt,f as z,e as Ge,i as qe,s as pt,g as vt,p as bt,h as yt,j as wt,k as $t,l as M,m as kt}from"./datefns-Dlft8rFK.js";import{C as T,L as Mt,B as xt,D as St,S as zt,a as Dt,b as At,P as Pt,A as Tt,c as Et,d as Lt,T as Kt,p as Wt,e as Ft,i as Ot}from"./chartjs-CRgZvhTJ.js";import{_ as Ct,a as Bt}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const oe="theme";function Vt(){const e=localStorage.getItem(oe)??"auto";be(e)}function be(e){e==="auto"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e),localStorage.setItem(oe,e),jt(e)}function It(){const e=localStorage.getItem(oe)??"auto",t=e==="auto"?"light":e==="light"?"dark":"auto";return be(t),Je(t),t}const fe=new Set;function _t(e){return fe.add(e),()=>fe.delete(e)}function Je(e){for(const t of fe)try{t(e)}catch(a){console.error(a)}}var Ne;if(typeof window<"u"&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)");(Ne=e.addEventListener)==null||Ne.call(e,"change",()=>{Ue()==="auto"&&Je("auto")})}function jt(e){const t=document.getElementById("theme-toggle");if(!t)return;const a=t.querySelector(".theme-label"),n=t.querySelector(".theme-icon-dark"),s=t.querySelector(".theme-icon-light");a&&(e==="auto"?(a.textContent="Auto",n&&(n.style.display="inline"),s&&(s.style.display="inline")):e==="light"?(a.textContent="Hell",n&&(n.style.display="none"),s&&(s.style.display="inline")):(a.textContent="Dunkel",n&&(n.style.display="inline"),s&&(s.style.display="none")))}function Ue(){return localStorage.getItem(oe)??"auto"}const Ye=[];let Xe=null;function D(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(i=>i.startsWith(":")?(n.push(i.slice(1)),"([^/]+)"):Gt(i)).join("/")+"/?$");Ye.push({pattern:e,regex:s,paramNames:n,render:t})}function Rt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?E():window.location.hash=e}function Zt(e,{onNavigate:t}={}){window.addEventListener("hashchange",E),E.rootEl=e,E.onNavigate=t,E()}async function E(){var n;const e=E.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Ye){const i=s.regex.exec(a);if(i){const r={};s.paramNames.forEach((l,o)=>r[l]=decodeURIComponent(i[o+1])),Xe=a,(n=E.onNavigate)==null||n.call(E,a),Ht(a);try{e.classList.remove("view-enter"),await s.render({params:r,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Te(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Te(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ht(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Nt(){Xe!=null&&E()}function Gt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Te(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const qt="modulepreload",Jt=function(e){return"/zeitnachweis-app/"+e},Ee={},Ut=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.allSettled(a.map(o=>{if(o=Jt(o),o in Ee)return;Ee[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":qt,c||(g.as="script"),g.crossOrigin="",g.href=o,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((u,h)=>{g.addEventListener("load",u),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},f=new ft("zeitnachweis");f.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});f.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});f.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});f.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});f.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});f.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});f.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;a=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function Yt(){try{const{erkenneBerufsschulMuster:e}=await Ut(async()=>{const{erkenneBerufsschulMuster:r}=await Promise.resolve().then(()=>Na);return{erkenneBerufsschulMuster:r}},void 0),t=await f.tage.toArray();if(!t.length)return!1;const a=e(t),n=await f.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)?(await f.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Xt(){try{const e=await f.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await f.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Qt(){const e=await f.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await f.einstellungen.delete("__migration_reset"),!0):!1}async function j(){return await f.profil.get("self")??Qe()}async function ye(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await f.profil.put(t),t}function Qe(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function ea(e,t=null){const a=await f.einstellungen.get(e);return a?a.value:t}async function ta(e,t){await f.einstellungen.put({key:e,value:t})}async function W(){return await f.tage.orderBy("datum").toArray()}async function aa(e){return e.length?(await f.tage.bulkPut(e),e.length):0}async function na(e){return e.length?(await f.monate.bulkPut(e),e.length):0}async function te(){return await f.monate.orderBy("monatKey").toArray()}async function sa(e){return await f.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function et(){return await f.uploads.orderBy("hochladeDatum").reverse().toArray()}async function ia(){await Promise.all([f.profil.clear(),f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.einstellungen.clear(),f.mailVorlagen.clear(),f.warnungDismissals.clear()])}async function ra(){await Promise.all([f.tage.clear(),f.monate.clear(),f.uploads.clear(),f.warnungDismissals.clear()])}async function la(){const[e,t,a,n,s,i,r]=await Promise.all([f.profil.toArray(),f.tage.toArray(),f.monate.toArray(),f.uploads.toArray(),f.einstellungen.toArray(),f.mailVorlagen.toArray(),f.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:i,warnungDismissals:r}}}async function oa(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await f.transaction("rw",f.profil,f.tage,f.monate,f.uploads,f.einstellungen,f.mailVorlagen,f.warnungDismissals,async()=>{var a,n,s,i,r,l,o;(a=t.profil)!=null&&a.length&&await f.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await f.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await f.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await f.uploads.bulkPut(t.uploads),(r=t.einstellungen)!=null&&r.length&&await f.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await f.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await f.warnungDismissals.bulkPut(t.warnungDismissals)})}async function ie(e,t){await f.mailVorlagen.put({key:e,...t})}async function we(){return await f.mailVorlagen.toArray()}async function ca(e,t){await f.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function da(){return await f.warnungDismissals.toArray()}function tt(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function Z(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let i=n,r=s;return r===60&&(i+=1,r=0),`${t?"-":""}${i}:${String(r).padStart(2,"0")}`}function A(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${n}`}function L(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function ce(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)L(s.von)<L(a)&&(a=s.von),L(s.bis)>L(n)&&(n=s.bis);return{kommen:a,gehen:n}}function ua(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ga(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function de(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ua(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ga(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Le={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},ha=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Le[e].withPreposition:Le[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},fa={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ma={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},pa={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},va={date:ge({formats:fa,defaultWidth:"full"}),time:ge({formats:ma,defaultWidth:"full"}),dateTime:ge({formats:pa,defaultWidth:"full"})},ba={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},ya=(e,t,a,n)=>ba[e],wa={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},$a={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},me={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ka={narrow:me.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:me.wide},Ma={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},xa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Sa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},za=e=>Number(e)+".",Da={ordinalNumber:za,era:q({values:wa,defaultWidth:"wide"}),quarter:q({values:$a,defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:me,formattingValues:ka,defaultWidth:"wide"}),day:q({values:Ma,defaultWidth:"wide"}),dayPeriod:q({values:xa,defaultWidth:"wide",formattingValues:Sa,defaultFormattingWidth:"wide"})},Aa=/^(\d+)(\.)?/i,Pa=/\d+/i,Ta={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Ea={any:[/^v/i,/^n/i]},La={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Ka={any:[/1/i,/2/i,/3/i,/4/i]},Wa={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Fa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Oa={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Ca={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Ba={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Va={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Ia={ordinalNumber:mt({matchPattern:Aa,parsePattern:Pa,valueCallback:e=>parseInt(e)}),era:J({matchPatterns:Ta,defaultMatchWidth:"wide",parsePatterns:Ea,defaultParseWidth:"any"}),quarter:J({matchPatterns:La,defaultMatchWidth:"wide",parsePatterns:Ka,defaultParseWidth:"any",valueCallback:e=>e+1}),month:J({matchPatterns:Wa,defaultMatchWidth:"wide",parsePatterns:Fa,defaultParseWidth:"any"}),day:J({matchPatterns:Oa,defaultMatchWidth:"wide",parsePatterns:Ca,defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:Ba,defaultMatchWidth:"wide",parsePatterns:Va,defaultParseWidth:"any"})},ae={code:"de",formatDistance:ha,formatLong:va,formatRelative:ya,localize:Da,match:Ia,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Q(e){if(!e)return null;const t=e.trim();return bt(t,"dd.MM.yyyy",new Date)}function y(e){return z(e,"dd.MM.yyyy")}function at(e){return z(e,"EE, dd.MM.yyyy",{locale:ae})}function _a(e){const t=pt(e,{weekStartsOn:1}),a=vt(e,{weekStartsOn:1});return`${z(t,"dd.MM.")} – ${z(a,"dd.MM.yyyy")}`}function ja(e){return`${yt(e)}-${String(wt(e)).padStart(2,"0")}`}function nt(e){return z(e,"yyyy-MM")}function Ra(e){return z(e,"yyyy-MM-dd")}function Za(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=Ge(n,1),qe(n)||a++;return a}function _(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function st(e){var r;const t=e.filter(l=>l.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null};const a={};for(const l of t)a[r=l.wochentag]??(a[r]=[]),a[l.wochentag].push(l);const n=[],s=[];let i=null;for(const[l,o]of Object.entries(a)){if(o.sort((g,u)=>g.datum.localeCompare(u.datum)),o.length<2)continue;const c=[];for(let g=1;g<o.length;g++)c.push($t(M(o[g].datum),M(o[g-1].datum)));const d=Ha(c);d<=10?n.push(l):d<=18&&(s.push(l),(!i||M(o[0].datum)<M(i))&&(i=o[0].datum))}return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:i}}function Ha(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function $e(e,t){var s,i;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(n)&&t.referenzDatum14Taegig){const r=M(t.referenzDatum14Taegig),l=kt(e,r,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}const Na=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:st,istBerufsschulTagLautMuster:$e},Symbol.toStringTag,{value:"Module"}));function Ga(e){return e?"arbzg":"jarbschg"}function qa(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function it(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:L(n.von),bis:L(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function rt(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(m=>!m.von))return{keinAnspruch:!0};const n=it(a),s=e.pause??0,i=Ja(a),r=i-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":Ga(!!t.ueber18),o=qa(r,l),c=Math.max(n,o),d=s-c,g=Math.max(0,o-n);let u="ok",h=null;if(d>.05)u="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(g>.05&&s>n+.02){u="aufstockung_legal";const m=Math.round(g*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${r.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${m} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:r,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,g)*60),typ:u,warnung:h}}function Ja(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=L(a.von),s=L(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const U={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ke(e,t,a,n=new Set){var d,g;const s=[],i=a??new Date,r=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const l=M(e[0].datum),o=i;for(let u=new Date(l);u<=o;u=Ge(u,1)){if(qe(u))continue;const h=z(u,"yyyy-MM-dd"),m=r.get(h),p=Za(u,o);if(!m||!m.tagestyp&&!m.ist&&(((d=m.zeitSpannen)==null?void 0:d.length)??0)===0){if($e(u,t.berufsschulMuster)){const v=p>=4?"error":p>=2?"warn":"info";Y(s,n,{datum:h,wochentag:(m==null?void 0:m.wochentag)??ne(u),typ:"bs_tag_fehlt",schweregrad:v,titel:`Berufsschultag nicht eingetragen: ${y(u)}`,beschreibung:`Laut deinem Profil hast du am ${U[ne(u)]}, ${y(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${p>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:p,mailVorlageKey:v==="error"?"bs_tag_fehlt":null})}else{const v=p>=4?"error":p>=2?"warn":"info";Y(s,n,{datum:h,wochentag:ne(u),typ:"stempelzeit_fehlt",schweregrad:v,titel:`Keine Stempelzeit am ${y(u)}`,beschreibung:`Am ${U[ne(u)]}, ${y(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${p>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:p,mailVorlageKey:v==="error"?"stempelzeit_fehlt":null})}continue}if(m.tagestyp==="Berufsschule"&&m.ist!=null&&m.soll!=null&&m.ist<m.soll-.01&&Y(s,n,{datum:h,wochentag:m.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${y(u)}`,beschreibung:`Am ${U[m.wochentag]}, ${y(u)} sind nur ${m.ist.toFixed(2).replace(".",",")}h gebucht statt regulär ${m.soll.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:m.ist,soll:m.soll,mailVorlageKey:"bs_stunden_falsch"}),m.tagestyp==="Stempelzeit"&&((g=m.zeitSpannen)==null?void 0:g.length)>1&&h>="2026-04-01"){const v=rt(m,t);(v==null?void 0:v.typ)==="fehler_zeitwirtschaft"&&v.unrechtmaessigerVerlustMin>=5?Y(s,n,{datum:h,wochentag:m.wochentag,typ:"pausen_abzug",schweregrad:v.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${y(u)})`,beschreibung:`Am ${U[m.wochentag]}, ${y(u)} wurden ${Math.round(v.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(v.gestempeltePause*60)} min, gesetzlich nötig (${v.gesetz.toUpperCase()}): ${Math.round(v.gesetzlichePflicht*60)} min. Differenz von ${v.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:v.unrechtmaessigerVerlustMin,abgezogen:v.abgezogenePause,gestempelt:v.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(v==null?void 0:v.typ)==="aufstockung_legal"&&v.aufstockungMin>=10&&Y(s,n,{datum:h,wochentag:m.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${y(u)}) — ${v.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${U[m.wochentag]}, ${y(u)} hast du nur ${Math.round(v.gestempeltePause*60)} min Pause gemacht. Gesetz (${v.gesetz.toUpperCase()}) schreibt ${Math.round(v.gesetzlichePflicht*60)} min vor. Fehlende ${v.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((u,h)=>{const m=c[u.schweregrad]-c[h.schweregrad];return m!==0?m:h.datum.localeCompare(u.datum)}),s}function lt(e,t=new Set){var n,s,i,r;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((i=l.glz)==null?void 0:i.umgebuchteStunden)??0,g=(r=l.glz)==null?void 0:r.saldoGesamt;if(g==null)continue;const u=o+c+d,h=Math.abs(g-u);if(h>.03){const m=`${l.monatKey}-saldo_plausi`;t.has(m)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${u.toFixed(2)}, aber dein Saldo wird mit ${g.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:u,ist:g})}}return a}function Y(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ne(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Ua(e,t){var o,c,d;const a=[...e].sort((g,u)=>g.datum.localeCompare(u.datum));if(!a.length)return[];const n=new Map(t.map(g=>[g.monatKey,g])),s={};for(const g of a)s[o=g.monatKey]??(s[o]=[]),s[g.monatKey].push(g);const i=Object.keys(s).sort(),r=[];let l=null;for(const g of i){const u=n.get(g);let h;((c=u==null?void 0:u.glz)==null?void 0:c.saldoVorperiode)!=null?h=u.glz.saldoVorperiode:l!=null?h=l:h=0;const m=s[g];for(const p of m)p.diff!=null&&(h+=p.diff),r.push({datum:p.datum,wochentag:p.wochentag,saldo:Math.round(h*100)/100,diff:p.diff,ist:p.ist,soll:p.soll,tagestyp:p.tagestyp,monatKey:p.monatKey,wocheKey:p.wocheKey,zeitSpannen:p.zeitSpannen});if(((d=u==null?void 0:u.glz)==null?void 0:d.saldoGesamt)!=null){const p=u.glz.saldoGesamt-h;if(Math.abs(p)>.02&&r.length>0){const $=r.length-1;r[$].umbuchung=p,r[$].saldo=Math.round((r[$].saldo+p)*100)/100,h=r[$].saldo}l=u.glz.saldoGesamt}else l=h}return r}function Ya(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Xa(e){return e.length?e[e.length-1].saldo:0}function Qa(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const en={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},ee={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) war ich ganztägig in der Berufsschule. In meinem Zeitnachweis wurde dieser Tag bisher jedoch nicht erfasst.

Ich bitte Sie um nachträgliche Eintragung mit den regulären 7,00h.

Vielen Dank!`},bs_stunden_falsch:{key:"bs_stunden_falsch",titel:"Berufsschul-Stunden falsch",beschreibung:"Wenn ein Berufsschultag mit zu wenig Stunden erfasst wurde (z.B. 6h statt 7h).",betreff:"Bitte um Zeitkorrektur im ESS  - Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) war ich ganztägig in der Berufsschule. In meinem Zeitnachweis sind jedoch nur {ist}h statt der regulären {soll}h gebucht.

Ich bitte Sie um Prüfung und Korrektur auf {soll}h.

Vielen Dank!`},stempelzeit_fehlt:{key:"stempelzeit_fehlt",titel:"Stempelzeit fehlt",beschreibung:"Wenn ein regulärer Arbeitstag ohne Stempelung geblieben ist.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Arbeitstag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) war ich regulär im Haus und habe meine Zeiten gestempelt. In meinem Zeitnachweis fehlt dieser Tag bisher jedoch komplett.

Ich bitte Sie um Prüfung und Nachtrag der Stempeldaten.

Vielen Dank!`},pausen_abzug:{key:"pausen_abzug",titel:"Falscher Pausen-Abzug",beschreibung:"Wenn mehr Pause abgezogen wurde als tatsächlich gestempelt.",betreff:"Bitte um Zeitkorrektur im ESS  - Pausen-Abzug {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

am {datum} ({wochentag}) wurde in meinem Zeitnachweis eine Pause von {abgezogen} Minuten abgezogen. Gestempelt hatte ich jedoch nur {gestempelt} Minuten Pause — die Differenz von {verlust} Minuten reduziert meine Stundengutschrift unrechtmäßig.

Ich bitte Sie um Prüfung und Korrektur auf {gestempelt} Minuten Pause.

Vielen Dank!`}};function ue(e,t){const a=ee[e];return a?{...a,...t??{}}:null}function ot(e,t){const a=Ke(e.text,t);return{betreff:Ke(e.betreff,t),text:a}}function Ke(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function ct(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?at(a).split(", ")[1]:"",wochentag:en[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function dt(e,t,a){const n=ot(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",n.betreff),i.set("body",n.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}T.register(Mt,xt,St,zt,Dt,At,Pt,Tt,Et,Lt,Kt,Wt,Ft,Ot);function k(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function F(){return{fg:k("--fg"),fgMuted:k("--fg-muted"),fgSubtle:k("--fg-subtle"),border:k("--border"),surface:k("--surface"),accent:k("--accent"),success:k("--success"),warn:k("--warn"),danger:k("--danger"),info:k("--info"),palette:[k("--chart-1"),k("--chart-2"),k("--chart-3"),k("--chart-4"),k("--chart-5"),k("--chart-6"),k("--chart-7")]}}function w(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function tn(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>z(M(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?a.success:a.danger),new T(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:i=>{const r=i.chart,{ctx:l,chartArea:o,scales:c}=r;return o?un(l,o,c.y,a):B(a.accent,.14)},segment:{borderColor:i=>{const r=i.p0.parsed.y,l=i.p1.parsed.y,o=(r+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?a.success:i<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...w(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...w(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:an(t)}},scales:{...w(a).scales,y:{...w(a).scales.y,ticks:{...w(a).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function an(e){return function(t){var N;const{chart:a,tooltip:n}=t;let s=a.$saldoTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$saldoTooltipEl=s;const b=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),b()}}if(n.opacity===0||!((N=n.dataPoints)!=null&&N.length)){s.style.opacity="0";return}const i=n.dataPoints[0].dataIndex,r=e[i];if(!r){s.style.opacity="0";return}const l=r.saldo>.05?"pos":r.saldo<-.05?"neg":"flat",o=(r.diff??0)>.05?"pos":(r.diff??0)<-.05?"neg":"flat",c=(r.saldo>0?"+":"")+r.saldo.toFixed(2).replace(".",",")+"h",d=r.diff!=null?(r.diff>0?"+":"")+r.diff.toFixed(2).replace(".",",")+"h":null;let u=`<div class="saldo-tooltip-title">${We(z(M(r.datum),"EE, dd.MM.yyyy",{locale:ae}))}</div>`;u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Saldo</span><span class="saldo-tooltip-value ${l}">${c}</span></div>`,d&&(u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Tages-Diff</span><span class="saldo-tooltip-value ${o}">${d}</span></div>`);const h=[];r.tagestyp&&h.push(`Typ: ${We(r.tagestyp)}`),r.umbuchung&&h.push(`Umbuchung: ${r.umbuchung>=0?"+":""}${r.umbuchung.toFixed(2).replace(".",",")}h`),h.length&&(u+=`<div class="saldo-tooltip-meta">${h.map(b=>`<span>${b}</span>`).join("")}</div>`),s.innerHTML=u;const m=a.canvas.getBoundingClientRect(),p=m.left+n.caretX,$=m.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const v=s.offsetWidth,K=s.offsetHeight,H=18;let R=p+H;R+v>window.innerWidth-8&&(R=p-H-v);let C=$-K/2;C<8&&(C=8),C+K>window.innerHeight-8&&(C=window.innerHeight-K-8),s.style.left=R+"px",s.style.top=C+"px",s.style.opacity="1"}}function We(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function nn(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.map(i=>i.monatKey),s=t.map(i=>{var r;return((r=i.glz)==null?void 0:r.saldoGesamt)??0});return new T(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:B(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:w(a)})}function Me(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.map(r=>z(M(r.datum),"dd.MM.")),s=t.map(r=>r.ist??0),i=t.map(r=>gn(r.tagestyp,a));return new T(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1},tooltip:{...w(a).plugins.tooltip,callbacks:{label:r=>{const l=t[r.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...w(a).scales,y:{...w(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function sn(e,t){const a=F();if(O(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(g=>g.von&&g.bis)}).map(c=>{const d=c.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:L(h.von),bis:L(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const g=Math.min(...d.map(h=>h.von)),u=Math.max(...d.map(h=>h.bis));return{...c,_spans:d,_minVon:g,_maxBis:u}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,i={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},r=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new T(e,{type:"bar",data:{labels:n.map(c=>z(M(c.datum),"dd.MM.")),datasets:[i]},options:{...w(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return z(M(d.datum),"EE, dd.MM.yyyy",{locale:ae})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],g=d.ist!=null?Z(d.ist):"—",u=d.soll!=null?Z(d.soll):"—",h=d.pause!=null?Math.round(d.pause*60)+" min":"—",p=[`Tages-Rahmen: ${`${o(d._minVon)} – ${o(d._maxBis)}`}`];return d._spans.length>1&&(p.push(""),d._spans.forEach(($,v)=>{p.push(`  Block ${v+1}: ${$.vonStr} – ${$.bisStr}`)})),[...p,"",`Arbeitszeit (netto): ${g}`,`Soll: ${u}`,`Pause (abgezogen): ${h}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:r,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function rn(e,t){const a=F();O(e);const n={};for(const r of t){if(r.tagestyp!=="Stempelzeit"||!r.zeitSpannen||r.zeitSpannen.length<2)continue;const l=it(r.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((r,l)=>r-l),i=s.map(r=>n[r]);return new T(e,{type:"bar",data:{labels:s.map(r=>`${r}–${r+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:a.palette[1],borderRadius:4}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1},tooltip:{...w(a).plugins.tooltip,callbacks:{title:r=>`Pause-Länge (gestempelt): ${r[0].label}`,label:r=>`${r.parsed.y} Tag(e)`}}}}})}function ln(e,t){const a=F();O(e);const n=["MO","DI","MI","DO","FR"],s={},i={};for(const l of n)s[l]=0,i[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,i[l.wochentag]+=1));const r=n.map(l=>i[l]>0?s[l]/i[l]:0);return new T(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:r,backgroundColor:a.palette[2],borderRadius:4}]},options:{...w(a),plugins:{...w(a).plugins,legend:{display:!1}}}})}function on(e,t){const a=F();O(e);const n={};for(const r of t)!r.tagestyp||r.tagestyp==="Wochenende"||(n[r.tagestyp]=(n[r.tagestyp]??0)+1);const s=Object.keys(n),i=Object.values(n);return new T(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((r,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:w(a).plugins.tooltip}}})}function cn(e,t){const a=F();O(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0}const s=Object.keys(n).sort(),i=s.map(l=>n[l].ist),r=s.map(l=>n[l].soll);return new T(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:i,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:r,backgroundColor:a.palette[3],borderRadius:4}]},options:w(a)})}function dn(e,t){const a=F();O(e);const n=t.slice().sort((r,l)=>r.datum.localeCompare(l.datum));let s=0;const i=n.map(r=>(s+=r.diff??0,{x:r.datum,y:s}));return new T(e,{type:"line",data:{labels:i.map(r=>r.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:i.map(r=>r.y),borderColor:a.palette[5],backgroundColor:B(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...w(a),scales:{x:{display:!1,grid:{display:!1}},y:{...w(a).scales.y}}}})}function O(e){const t=T.getChart(e);t&&t.destroy()}function B(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return`rgba(${s}, ${i}, ${r}, ${t})`}function un(e,t,a,n){const{top:s,bottom:i}=t,r=e.createLinearGradient(0,s,0,i),l=a.min,o=a.max,c=o-l;if(c<=0)return B(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),r.addColorStop(0,B(n.success,.28)),r.addColorStop(Math.max(0,d-.001),B(n.success,.06)),r.addColorStop(Math.min(1,d+.001),B(n.danger,.06)),r.addColorStop(1,B(n.danger,.28)),r}function gn(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let hn=0;function xe(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++hn,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function Se(e){return xe(e,{type:"error",duration:6e3})}function x(e){return xe(e,{type:"success"})}const Fe=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Oe({root:e}){var H,R,C,N;const[t,a,n,s,i,r]=await Promise.all([j(),te(),W(),da(),ea("dashboardZeitraum",14),we()]),l=Object.fromEntries(r.map(b=>[b.key,b]));if(n.length===0){e.innerHTML=wn();return}const o=!((R=(H=t.berufsschulMuster)==null?void 0:H.wochentageWoechentlich)!=null&&R.length||(N=(C=t.berufsschulMuster)==null?void 0:C.wochentage14Taegig)!=null&&N.length),c=Ua(n,a),d=c.length;let g=i;typeof g=="number"&&g>d&&(g="alles");const u=new Set(s.map(b=>b.key)),h=ke(n,t,new Date,u),m=lt(a,u),p=[...h,...m],$=Xa(c),v=$>.05?"positive":$<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${V(y(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${v}">${A($,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Fe.map(b=>{const S=typeof b.key=="number"&&b.key>d;return`<button type="button" data-key="${b.key}" class="${g===b.key?"active":""}" ${S?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${o?`
      <div class="alert severity-info" style="margin-bottom: 24px; border-color: var(--accent); background: var(--accent-bg);">
        <div class="alert-icon" style="background: var(--accent);">!</div>
        <div class="alert-body">
          <div class="alert-title">Profil noch nicht vollständig</div>
          <p style="margin: 4px 0; font-size: 13px;">Ohne Geburtsdatum kann die App nicht zwischen JArbSchG (Minderjährig) und ArbZG (≥18) unterscheiden. Ohne Berufsschul-Rhythmus erkennt sie nicht, wenn ein BS-Tag fehlt.</p>
          <div class="alert-actions">
            <a href="#/profil" class="btn primary sm">Profil ausfüllen →</a>
          </div>
        </div>
      </div>
    `:""}

    ${p.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${p.slice(0,8).map(b=>yn(b,t,l)).join("")}
        ${p.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${p.length-8} weitere Warnungen vorhanden</div>`:""}
      </div>
    `:`
      <div class="alert severity-info" style="background: var(--success-bg); border-color: var(--success); margin-bottom: 32px;">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">Keine Warnungen</div>
          <p style="margin: 4px 0; font-size: 13px;">Dein Zeitnachweis sieht sauber aus.</p>
        </div>
      </div>
    `}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 20px; flex-wrap: wrap; gap: 16px;">
        <div style="display: flex; align-items: baseline; gap: 16px; flex-wrap: wrap;">
          <h2 style="margin: 0;">Tage im gewählten Zeitraum</h2>
          <span style="color: var(--fg-muted); font-size: 13px;" id="tage-info"></span>
        </div>
        <div class="segmented" id="zeitraum-picker-2">
          ${Fe.map(b=>{const S=typeof b.key=="number"&&b.key>d;return`<button type="button" data-key="${b.key}" class="${g===b.key?"active":""}" ${S?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Ce(g,e,c);const K=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");K().forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const S=b.getAttribute("data-key"),I=S==="alles"?"alles":parseInt(S,10);K().forEach(G=>G.classList.toggle("active",G.getAttribute("data-key")===S)),await ta("dashboardZeitraum",I),Ce(I,e,c)})}),e.addEventListener("click",async b=>{const S=b.target.closest(".ist-part");if(S){b.preventDefault(),b.stopPropagation();const Ae=S.getAttribute("data-val");try{await navigator.clipboard.writeText(Ae);const Pe=S.textContent;S.classList.add("ok"),S.textContent="✓",setTimeout(()=>{S.classList.remove("ok"),S.textContent=Pe},800)}catch{x(`Bitte kopieren: ${Ae}`)}return}const I=b.target.closest(".btn-dismiss");if(!I)return;const G=I.getAttribute("data-datum"),ze=I.getAttribute("data-typ");if(!G||!ze)return;await ca(G,ze),x("Warnung ausgeblendet.");const De=I.closest(".alert");De&&(De.style.display="none")})}function Ce(e,t,a){const n=Ya(a,e),s=Qa(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");tn(o,n)});const i=t.querySelector("#hero-bewegung");if(i){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";i.className=`saldo-trend ${o}`,i.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":A(s,{signed:!0})} im Zeitraum`}const r=t.querySelector("#tage-info");if(r){const o=n.length;r.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=pn(n.slice().reverse()))}const fn=3,mn=2.5;function pn(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=[];let a=null;for(const n of e)(!a||a.key!==n.wocheKey)&&(a={key:n.wocheKey,tage:[]},t.push(a)),a.tage.push(n);return`<div class="tages-liste">${t.map(n=>vn(n)).join("")}</div>`}function vn(e){var c;const t=e.tage.reduce((d,g)=>d+(g.ist??0),0),a=e.tage.reduce((d,g)=>d+(g.diff??0),0),n=(c=e.tage[0])==null?void 0:c.datum,s=n?_a(M(n)):"",i=e.key?e.key.split("-")[1]:"?",r=a>.05?"pos":a<-.05?"neg":"flat",l=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",o=t.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${V(i)}</span>
          <span class="woche-header-range tabular">${V(s)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${r}">${l}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(d=>bn(d)).join("")}
      </div>
    </div>
  `}function bn(e){const t=e.diff??0,a=t>0,n=a?fn:mn,s=Math.min(150,Math.abs(t)/n*50),i=a?"var(--success)":t<0?"var(--danger)":"var(--fg-subtle)",r=ce(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${V(y(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${$n(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${kn(e.tagestyp)}">${V(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${de(r,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const l=Z(e.ist),[o,c]=l.split(":");return e.ist<=0?`<div class="ist-wert">${l}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${o}" title="${o} Stunden kopieren">${o}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${c}" title="${c} Minuten kopieren">${c}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Z(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${s}%; background: ${i};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":t<0?"var(--danger)":"var(--fg-muted)"};">
        ${t!==0?(a?"+":"")+t.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${e.saldo>=0?"+":""}${e.saldo.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function yn(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=ue(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(i){const r=ct(t,e);s=dt(t,i,r)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${V(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${V(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${he(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${he(e.datum)}" data-typ="${he(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function wn(){return`
    <h1 class="view-title">Willkommen</h1>
    <p class="view-subtitle">Lade deinen Zeitnachweis hoch, um Dashboard und Analysen zu sehen.</p>
    <div class="card" style="max-width: 640px;">
      <h2>So startest du</h2>
      <ol style="color: var(--fg-muted); line-height: 1.7; font-size: 14px; padding-left: 20px;">
        <li>Öffne in SAP ESS FIORI deinen Zeitnachweis und exportiere ihn als PDF.</li>
        <li>Gehe zu <a href="#/daten" style="color: var(--accent);">Daten</a> und lade das PDF hoch.</li>
        <li>Fülle unter <a href="#/profil" style="color: var(--accent);">Profil</a> dein Geburtsdatum und deinen Berufsschul-Rhythmus aus.</li>
      </ol>
      <div style="margin-top: 24px;">
        <a href="#/daten" class="btn primary">Zum Upload →</a>
      </div>
    </div>
  `}function $n(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function kn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function V(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function he(e){return V(e)}const Mn="/zeitnachweis-app/assets/pdf.worker.min-yatZIOMy.mjs";Ct.workerSrc=Mn;const Be={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},xn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Sn(e){const a=await Bt({data:e}).promise,n=[];for(let l=1;l<=a.numPages;l++){const c=await(await a.getPage(l)).getTextContent(),d=zn(c.items);for(const g of d)n.push({page:l,text:g})}const s=Dn(n),{tage:i,monate:r}=An(n);return{meta:s,tage:i,monate:r}}function zn(e){if(!e.length)return[];const t=e.slice().sort((r,l)=>{const o=l.transform[5]-r.transform[5];return Math.abs(o)>2?o:r.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const i=3;for(const r of t){const l=r.transform[5];n==null||Math.abs(l-n)<=i?(s.push(r),n==null&&(n=l)):(a.push(Ve(s)),s=[r],n=l)}return s.length&&a.push(Ve(s)),a.filter(r=>r.trim().length>0)}function Ve(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function Dn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,r=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);r&&(t.zeitraumVon=Q(r[1]),t.zeitraumBis=Q(r[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(l&&(t.stichtagAuswertung=Q(l[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const c=(((a=e[s+1])==null?void 0:a.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const c=(((n=e[s+1])==null?void 0:n.text)??"").trim().split(/\s{2,}/);c.length>=3&&(t.einstellungsdatum=Q(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function An(e,t){var o;const a=[],n=[];let s=null,i=null,r=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const m=d[1].trim(),p=parseInt(d[2],10),$=Be[m]??Be[m.replace("ä","ae")]??null;$&&(s={jahr:p,monat:$,monatKey:`${p}-${String($).padStart(2,"0")}`},r=!0,i=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const m=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),p=Q(m[1]);i={monatKey:(s==null?void 0:s.monatKey)??nt(p),stichtag:p,glz:{},flexi:{},zeitkonten:{},raw:{}},l=Pn(e,l+1,i),n.push(i);continue}let g=s;const u=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(u&&s){const m=parseInt(u[1],10);r&&m>=20?g=Ln(s):m<=15&&(r=!1)}const h=Ie(c,g);if(h){const m=[];let p=l+1;for(;p<e.length;){const v=e[p].text;if(/^\s*\d{4}\s+Umbuchung/.test(v)||Ie(v,s)||/Wochensumme/i.test(v)||/Monats.bersicht/i.test(v)||/Monat:\s*[A-Za-z]/i.test(v))break;const K=Tn(v);if(K){m.push(K),p++;continue}break}if(m.length&&h.zeitSpannen.push(...m),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){l=p;continue}(h.ist!=null||h.soll!=null||(((o=h.zeitSpannen)==null?void 0:o.length)??0)>0||h.tagestyp!=null)&&a.push(h),l=p;continue}l++}return{tage:a,monate:n}}function Pn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const i=e[n].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let r;for(;(r=s.exec(i))!=null;){const l=r[1],o=r[2].trim(),c=tt(r[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function Ie(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),i=n[2],r=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:Ra(c),datumDate:c.toISOString(),wochentag:i,tagNr:s,monatKey:nt(c),wocheKey:ja(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return r?(En(r,d),d):(d.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,d)}function Tn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function En(e,t){let a=null,n=e;for(const d of xn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=Kn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,r=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&i.test(s[l])&&s[l+1]&&i.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&r.test(s[l]);){const d=tt(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function Ln(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function Kn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function Wn({root:e}){const t=await et(),a=await j();e.innerHTML=`
    <h1 class="view-title">Daten</h1>
    <p class="view-subtitle">Zeitnachweis hochladen, Backup exportieren oder alle Daten löschen.</p>

    <div class="grid cols-2" style="margin-bottom: 32px;">
      <div class="card">
        <h2>PDF-Upload</h2>
        <p style="color: var(--fg-muted); font-size: 13px; margin-bottom: 16px;">
          Lade deinen Zeitnachweis (PDF aus SAP ESS FIORI) hoch. Die Daten werden ausschließlich lokal in deinem Browser analysiert und gespeichert — nichts verlässt dein Gerät.
        </p>
        <div class="upload-zone" id="upload-zone">
          <div class="upload-zone-icon">📄</div>
          <h3>PDF hierher ziehen oder klicken</h3>
          <p>Akzeptiert: .pdf aus SAP ESS FIORI</p>
        </div>
        <input type="file" id="file-input" accept=".pdf,application/pdf" style="display:none" />
        <div id="upload-status" style="margin-top: 16px;"></div>
      </div>

      <div class="card">
        <h2>Backup</h2>
        <p style="color: var(--fg-muted); font-size: 13px; margin-bottom: 16px;">
          Exportiere alle deine Daten als JSON-Datei oder stelle sie aus einem Backup wieder her. Nützlich für Gerätewechsel.
        </p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn" id="btn-export">⬇ JSON herunterladen</button>
          <button class="btn" id="btn-import">⬆ JSON importieren</button>
          <input type="file" id="import-input" accept=".json,application/json" style="display:none" />
        </div>
        <hr style="border: none; border-top: 1px solid var(--border); margin: 24px 0;" />
        <h3 style="color: var(--fg-muted); text-transform: uppercase; letter-spacing: 0.05em; font-size: 12px;">Gefahrenzone</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn" id="btn-clear-parsed">🔄 Nur PDF-Daten löschen (Profil bleibt)</button>
          <button class="btn danger" id="btn-reset">🗑 Alles löschen (inkl. Profil)</button>
        </div>
      </div>
    </div>

    <div class="card">
      <h2>Uploads-Historie</h2>
      <div id="uploads-list">
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':ut(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",i=>{i.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async i=>{var l;i.preventDefault(),n.classList.remove("drag");const r=(l=i.dataTransfer.files)==null?void 0:l[0];r&&await _e(r,e,a)}),s.addEventListener("change",async i=>{var l;const r=(l=i.target.files)==null?void 0:l[0];r&&await _e(r,e,a)}),e.querySelector("#btn-export").addEventListener("click",On),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Cn),e.querySelector("#btn-clear-parsed").addEventListener("click",Fn),e.querySelector("#btn-reset").addEventListener("click",Bn)}async function Fn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await ra(),x("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function ut(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Hochgeladen am</th>
          <th>Datei</th>
          <th>Zeitraum</th>
          <th>Stichtag</th>
          <th class="num">Tage</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${_(Vn(t.hochladeDatum))}</td>
            <td>${_(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?_(y(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?_(y(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?_(y(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function _e(e,t,a){var i,r,l;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${_(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const o=await e.arrayBuffer(),c=await Sn(o);await aa(c.tage),await na(c.monate),await sa({dateiname:e.name,zeitraumVon:((i=c.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((r=c.meta.zeitraumBis)==null?void 0:r.toISOString())??null,stichtagAuswertung:((l=c.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:c.tage.length,monateCount:c.monate.length});const d=await W(),g=st(d),u={...Qe(),...a};(g.wochentageWoechentlich.length>0||g.wochentage14Taegig.length>0)&&(u.berufsschulMuster=g),await ye(u),n.innerHTML=`
      <div class="alert severity-info" style="border-color: var(--success); background: var(--success-bg);">
        <div class="alert-icon" style="background: var(--success);">✓</div>
        <div class="alert-body">
          <div class="alert-title">PDF erfolgreich eingelesen</div>
          <p style="margin: 4px 0; font-size: 13px;">
            ${c.tage.length} Tage · ${c.monate.length} Monatsübersichten
            ${c.meta.zeitraumVon?` · Zeitraum: ${y(c.meta.zeitraumVon)} – ${y(c.meta.zeitraumBis)}`:""}
          </p>
          <div class="alert-actions">
            <a href="#/" class="btn primary sm">Zum Dashboard</a>
            <a href="#/monat" class="btn sm">Monate ansehen</a>
          </div>
        </div>
      </div>
    `,x(`PDF verarbeitet: ${c.tage.length} Tage.`);const h=await et();t.querySelector("#uploads-list").innerHTML=ut(h)}catch(o){console.error(o),n.innerHTML=`
      <div class="alert severity-error">
        <div class="alert-icon">!</div>
        <div class="alert-body">
          <div class="alert-title">Fehler beim Parsen</div>
          <p style="margin: 4px 0; font-size: 13px;">${_(o.message||String(o))}</p>
          <p style="margin: 4px 0; font-size: 12px; color: var(--fg-muted);">Prüfe, ob es sich um einen Putzmeister-SAP-Zeitnachweis handelt. Bei einem anderen Layout kann der Parser fehlschlagen.</p>
        </div>
      </div>
    `,Se("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function On(){try{const e=await la(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),x("Backup heruntergeladen.")}catch(e){Se(`Export fehlgeschlagen: ${e.message}`)}}async function Cn(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await oa(s),x("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){Se(`Import fehlgeschlagen: ${n.message}`)}}async function Bn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await ia(),x("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Vn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}const je={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function In({root:e}){var s,i,r,l;const t=await j(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=a.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
    <h1 class="view-title">Profil</h1>
    <p class="view-subtitle">Nur das Nötigste: Alter-Kategorie und Mail-Kontakt.</p>

    <form id="profil-form" class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Alter</h2>
        <label class="checkbox-row">
          <input type="checkbox" name="ueber18" ${t.ueber18?"checked":""} />
          <span>
            <strong>Über 18</strong>
            <p class="hint" style="margin: 4px 0 0;">Bestimmt die anzuwendende Pausen-Regel. Angehakt → ArbZG (Erwachsene). Leer → JArbSchG (Minderjährige, strengere Pausen-Pflicht).</p>
          </span>
        </label>
      </div>

      <div class="card">
        <h2>Zeitwirtschaft-Kontakt</h2>
        <div class="form-group">
          <label>E-Mail-Empfänger</label>
          <input type="email" name="zeitwirtschaftEmail" value="${Re(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Re(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((r=a.wochentageWoechentlich)==null?void 0:r.map(o=>je[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(o=>je[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${y(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <p class="hint" style="margin-top: 16px;">Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. Je länger der erfasste Zeitraum, desto präziser.</p>
        `:`
          <p class="hint">Noch kein Muster erkannt. Lade unter <a href="#/daten" style="color: var(--accent);">Daten</a> einen Zeitnachweis hoch — das Muster wird automatisch aus den Berufsschul-Tagen abgeleitet.</p>
        `}
      </div>

      <div style="grid-column: 1 / -1; display: flex; gap: 12px;">
        <button type="submit" class="btn primary">Speichern</button>
        <a href="#/" class="btn">Abbrechen</a>
      </div>
    </form>
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var g,u;o.preventDefault();const c=new FormData(o.target),d={...t,ueber18:c.get("ueber18")==="on",zeitwirtschaftEmail:((g=c.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((u=c.get("zeitwirtschaftAnrede"))==null?void 0:u.trim())||"Frau Kanarya"};await ye(d),x("Profil gespeichert.")})}function Re(e){return String(e??"").replace(/"/g,"&quot;")}async function _n({root:e}){var s;const t=await te(),a=await W(),n={};for(const i of a)n[s=i.monatKey]??(n[s]=[]),n[i.monatKey].push(i);if(t.length===0){e.innerHTML=Gn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(i=>{var u;const l=(n[i.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),o=l.reduce((h,m)=>h+(m.ist??0),0),c=l.reduce((h,m)=>h+(m.soll??0),0),d=o-c,g=(u=i.glz)==null?void 0:u.saldoGesamt;return`
          <a href="#/monat/${i.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${pe(i.monatKey)}</h2>
              <span class="saldo-trend ${g>.05?"up":g<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${A(g??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${l.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${o.toFixed(1)} / ${c.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${A(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function jn({params:e,root:t}){const a=e.yyyymm,[n,s,i]=await Promise.all([W(),te(),j()]),r=s.find(c=>c.monatKey===a),l=n.filter(c=>c.monatKey===a).sort((c,d)=>c.datum.localeCompare(d.datum));if(!l.length){t.innerHTML=`<h1 class="view-title">Monat ${pe(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const o=ke(n,i,new Date).filter(c=>c.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${pe(a)}</h1>
    <p class="view-subtitle">${l.length} Tage · ${o.length} Auffälligkeiten</p>

    ${r?Rn(r):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${o.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${o.map(c=>Hn(c)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${Zn(l)}
    </div>
  `,Me(t.querySelector("#chart-monat"),l)}function Rn(e){var n,s,i,r;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular ${t>0?"positive":t<0?"negative":""}" style="font-size: 28px; font-weight: 650;">${A(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((s=e.glz)==null?void 0:s.saldoVorperiode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((i=e.glz)==null?void 0:i.saldoAktuellePeriode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${A(((r=e.zeitkonten)==null?void 0:r.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function Zn(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Typ</th>
          <th>Kommen / Gehen</th>
          <th class="num">Ist</th>
          <th class="num">Soll</th>
          <th class="num">±</th>
          <th class="num">Pause</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ce(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${y(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${Nn(t.tagestyp)}">${re(t.tagestyp)}</span>`:"—"}</td>
              <td>${de(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function Hn(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${re(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${re(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function pe(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return z(n,"LLLL yyyy",{locale:ae})}function Nn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Gn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${re(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function re(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function qn({root:e}){var s;const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const i of t)a[s=i.wocheKey]??(a[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),a[i.wocheKey].tage.push(i),a[i.wocheKey].ist+=i.ist??0,a[i.wocheKey].soll+=i.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(i=>{const r=a[i],l=r.ist-r.soll,o=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${i}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${le(gt(i))}</div>
            <div>
              <div class="list-item-title">Ist: ${r.ist.toFixed(2).replace(".",",")}h · Soll: ${r.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${r.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${A(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Jn({params:e,root:t}){const a=await W(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${le(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const i=s.reduce((o,c)=>o+(c.ist??0),0),r=s.reduce((o,c)=>o+(c.soll??0),0),l=i-r;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${le(gt(n))}</h1>
    <p class="view-subtitle">${s.length} Tage</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${i.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${r.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular ${l>.05?"positive":l<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg)"};">${A(l,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${Un(s)}
    </div>
  `,Me(t.querySelector("#chart-woche"),s)}function Un(e){return`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Typ</th>
          <th>Kommen / Gehen</th>
          <th class="num">Ist</th>
          <th class="num">Soll</th>
          <th class="num">±</th>
          <th class="num">Pause</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ce(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${z(M(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Yn(t.tagestyp)}">${le(t.tagestyp)}</span>`:"—"}</td>
              <td>${de(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?A(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function gt(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Yn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Xn({params:e,root:t}){var c,d,g;const a=e.datum,n=await f.tage.get(a),s=await j();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=M(a),r=n.tagestyp==="Stempelzeit"?rt(n,s):null,l=$e(i,s.berufsschulMuster),o=ce(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${at(i)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(c=n.wocheKey)==null?void 0:c.split("-")[1]}</p>

    ${o?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${de(o,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?Z(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?A(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(u=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${X(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${Qn(n.tagestyp)}">${X(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${l?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${X(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${X(n.monatKey)}</div>
        </div>
      </div>

      ${r&&!r.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(g=r.arbeitszeitOhnePause)==null?void 0:g.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((r.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((r.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((r.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${r.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((r.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(r.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${r.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${r.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${r.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${r.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${X(r.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Qn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function X(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function es({root:e}){const[t,a]=await Promise.all([W(),te()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${a.length} Monatsübersichten visualisiert.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf pro Monat</h2>
      <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
    </div>

    <div class="grid cols-2" style="margin-bottom: 24px;">
      <div class="card">
        <h2>Ist vs. Soll pro Woche</h2>
        <div class="chart-wrap"><canvas id="c-istsoll"></canvas></div>
      </div>
      <div class="card">
        <h2>Kumulative Differenz</h2>
        <div class="chart-wrap"><canvas id="c-kumulativ"></canvas></div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Start-/Endzeiten über Zeit</h2>
      <p class="hint" style="margin-top: -8px; margin-bottom: 16px;">Blau = Arbeitsbeginn, Orange = Arbeitsende. Zeigt Muster deiner Stempelgewohnheiten.</p>
      <div class="chart-wrap tall"><canvas id="c-startend"></canvas></div>
    </div>

    <div class="grid cols-2" style="margin-bottom: 24px;">
      <div class="card">
        <h2>Durchschnitt pro Wochentag</h2>
        <div class="chart-wrap"><canvas id="c-wochentag"></canvas></div>
      </div>
      <div class="card">
        <h2>Pausen-Verteilung</h2>
        <p class="hint" style="margin-top: -8px; margin-bottom: 16px;">Häufigkeit deiner Pausen in 15-min-Buckets.</p>
        <div class="chart-wrap"><canvas id="c-pausen"></canvas></div>
      </div>
    </div>

    <div class="grid cols-2">
      <div class="card">
        <h2>Tagestypen</h2>
        <div class="chart-wrap"><canvas id="c-donut"></canvas></div>
      </div>
      <div class="card">
        <h2>Tagesbalken (alle Tage)</h2>
        <div class="chart-wrap"><canvas id="c-alle-tage"></canvas></div>
      </div>
    </div>
  `,requestAnimationFrame(()=>{nn(e.querySelector("#c-saldo"),a),cn(e.querySelector("#c-istsoll"),t),dn(e.querySelector("#c-kumulativ"),t),sn(e.querySelector("#c-startend"),t),ln(e.querySelector("#c-wochentag"),t),rn(e.querySelector("#c-pausen"),t),on(e.querySelector("#c-donut"),t);const n=t.slice(-30);Me(e.querySelector("#c-alle-tage"),n)})}async function ts({root:e}){const t=await W();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(i=>`<option value="${i}">${ss(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),r=Array.from(i).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(r).then(()=>x(`${i.length} Zeilen kopiert.`))});function s(){const i=n.value,l=(i?t.filter(o=>o.monatKey===i):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=as(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function as(e){return e.length?`
    <table class="table">
      <thead>
        <tr>
          <th>Datum</th>
          <th>Wochentag</th>
          <th>Typ</th>
          <th class="num">Stunden (Dezimal)</th>
          <th class="num">Stunden (HH:MM)</th>
          <th>Kopie</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>{const a=Z(t.ist),n=`${y(M(t.datum))}	${a}`;return`
            <tr data-copy="${Ze(n)}">
              <td class="tabular">${y(M(t.datum))}</td>
              <td>${ns(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${is(t.tagestyp)}">${ht(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ze(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function ns(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function ss(e){const[t,a]=e.split("-");return z(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:ae})}function is(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ht(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ze(e){return ht(e)}async function rs({root:e}){const[t,a,n,s]=await Promise.all([W(),j(),te(),we()]),i=Object.fromEntries(s.map(o=>[o.key,o])),r=ke(t,a,new Date).filter(o=>o.mailVorlageKey),l=lt(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${r.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':r.map(o=>ls(o,a,i)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${P(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${P(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(ee).map(o=>{const c=ue(o,i[o]);return os(c)}).join("")}
      </div>
    </div>
  `,cs(e),ds(e)}function ls(e,t,a){const n=ue(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=ct(t,e),i=ot(n,s),r=dt(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${P(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${P(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${P(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${P(i.betreff)}

${P(i.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${r}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${ve(i.betreff)}" data-body="${ve(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function os(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${P(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${P(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${ve(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${P(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function cs(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,i=n.querySelector(".v-text").value;await ie(a,{betreff:s,text:i}),x("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=ee[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await ie(a,{betreff:n.betreff,text:n.text}),x("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function ds(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),x("Mail-Text kopiert.")})})}function P(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ve(e){return P(e)}async function us({root:e}){const t=Ue(),[a,n]=await Promise.all([j(),we()]),s=Object.fromEntries(n.map(i=>[i.key,i]));e.innerHTML=`
    <h1 class="view-title">Einstellungen</h1>
    <p class="view-subtitle">App-weite Präferenzen.</p>

    <div class="grid cols-2">
      <div class="card">
        <h2>Erscheinungsbild</h2>
        <div class="form-group">
          <label>Theme</label>
          <div class="segmented" style="display: flex;">
            <button type="button" data-theme="auto" class="${t==="auto"?"active":""}">Auto (System)</button>
            <button type="button" data-theme="light" class="${t==="light"?"active":""}">Hell</button>
            <button type="button" data-theme="dark" class="${t==="dark"?"active":""}">Dunkel</button>
          </div>
          <p class="hint">Auto folgt der Windows- bzw. Edge-Einstellung.</p>
        </div>
      </div>

      <div class="card">
        <h2>Pausen-Regel-Override</h2>
        <div class="form-group">
          <label>Welches Gesetz soll für Pausen-Checks gelten?</label>
          <select id="pause-sel">
            <option value="auto" ${a.pausenRegel==="auto"?"selected":""}>Automatisch (aus Alter im Profil)</option>
            <option value="arbzg" ${a.pausenRegel==="arbzg"?"selected":""}>ArbZG (≥18 Jahre)</option>
            <option value="jarbschg" ${a.pausenRegel==="jarbschg"?"selected":""}>JArbSchG (&lt;18 Jahre)</option>
          </select>
          <p class="hint">Bei "Automatisch" wechselt die App am 18. Geburtstag automatisch von JArbSchG auf ArbZG.</p>
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Mail-Vorlagen</h2>
        <p class="hint" style="margin-bottom: 16px;">Texte für die "✉ Mail schreiben"-Buttons im Dashboard. Platzhalter wie <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>
        <div id="vorlagen-editor">
          ${Object.keys(ee).map(i=>{const r=ue(i,s[i]);return gs(r)}).join("")}
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Über diese App</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Name</div>
          <div class="tag-detail-value">Zeitnachweis-App v0.1</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Datenschutz</div>
          <div class="tag-detail-value">Alle Daten bleiben im Browser (IndexedDB). Nichts wird an Server übertragen.</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Speicher-Modus</div>
          <div class="tag-detail-value">IndexedDB + JSON-Backup (Export/Import unter <a href="#/daten" style="color: var(--accent);">Daten</a>).</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Grundlagen</div>
          <div class="tag-detail-value">
            <a href="https://www.gesetze-im-internet.de/arbzg/__4.html" target="_blank" rel="noopener" style="color: var(--accent);">§ 4 ArbZG (Ruhepausen)</a> ·
            <a href="https://www.gesetze-im-internet.de/jarbschg/__11.html" target="_blank" rel="noopener" style="color: var(--accent);">§ 11 JArbSchG (Ruhepausen Minderjähriger)</a>
          </div>
        </div>
      </div>
    </div>
  `,e.querySelectorAll("[data-theme]").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-theme");be(r),e.querySelectorAll("[data-theme]").forEach(l=>l.classList.toggle("active",l===i)),x(`Theme: ${i.textContent.trim()}`)})}),e.querySelector("#pause-sel").addEventListener("change",async i=>{const r={...a,pausenRegel:i.target.value};await ye(r),x("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(i=>{i.addEventListener("click",async()=>{const r=i.getAttribute("data-key"),l=i.closest(".vorlagen-item"),o=l.querySelector(".v-betreff").value,c=l.querySelector(".v-text").value;await ie(r,{betreff:o,text:c}),x("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(i=>{i.addEventListener("click",async()=>{const r=i.getAttribute("data-key"),l=ee[r];l&&confirm(`Vorlage "${l.titel}" auf Default zurücksetzen?`)&&(await ie(r,{betreff:l.betreff,text:l.text}),x("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function gs(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${se(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${se(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${hs(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${se(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function hs(e){return se(e)}async function He(){var t;Vt();const e=document.getElementById("content");(t=document.getElementById("theme-toggle"))==null||t.addEventListener("click",()=>It()),_t(()=>{Nt()}),await Qt()&&setTimeout(()=>{xe('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Xt(),await Yt(),D("/",Oe),D("/dashboard",Oe),D("/analytics",es),D("/monat",_n),D("/monat/:yyyymm",jn),D("/woche",qn),D("/woche/:yyyykw",Jn),D("/tag/:datum",Xn),D("/berichtsheft",ts),D("/mails",rs),D("/profil",In),D("/daten",Wn),D("/einstellungen",us),Zt(e),location.hash||Rt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",He):He();
