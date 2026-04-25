import{D as pt}from"./dexie-BODkcwel.js";import{b as fe,a as U,c as Y,d as vt,f as D,e as qe,i as Je,s as bt,g as yt,p as wt,h as $t,j as kt,k as xt,l as S,m as St}from"./datefns-Dlft8rFK.js";import{C as L,L as Mt,B as zt,D as Dt,S as Pt,a as At,b as Tt,P as Et,A as Lt,c as Kt,d as Ft,T as Wt,p as Bt,e as Ot,i as Vt}from"./chartjs-CRgZvhTJ.js";import{_ as Ct,a as It}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function _t(){document.documentElement.setAttribute("data-theme","dark")}const Ue=[];function A(e,t){const a=e.split("/").filter(Boolean),n=[],s=new RegExp("^/?"+a.map(r=>r.startsWith(":")?(n.push(r.slice(1)),"([^/]+)"):Zt(r)).join("/")+"/?$");Ue.push({pattern:e,regex:s,paramNames:n,render:t})}function jt(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?W():window.location.hash=e}function Rt(e,{onNavigate:t}={}){window.addEventListener("hashchange",W),W.rootEl=e,W.onNavigate=t,W()}async function W(){var n;const e=W.rootEl,t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`;for(const s of Ue){const r=s.regex.exec(a);if(r){const i={};s.paramNames.forEach((l,o)=>i[l]=decodeURIComponent(r[o+1])),(n=W.onNavigate)==null||n.call(W,a),Ht(a);try{e.classList.remove("view-enter"),await s.render({params:i,path:a,root:e}),e.classList.add("view-enter")}catch(l){console.error("Route render error:",l),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${Ee(l.message||String(l))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${Ee(a)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ht(e){document.querySelectorAll("[data-route]").forEach(a=>{const n=a.getAttribute("data-route"),s=n==="/"?e==="/":e===n||e.startsWith(n+"/");a.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Zt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ee(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Nt="modulepreload",Gt=function(e){return"/enhanced-ess/"+e},Le={},qt=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(a.map(o=>{if(o=Gt(o),o in Le)return;Le[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":Nt,c||(g.as="script"),g.crossOrigin="",g.href=o,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((u,h)=>{g.addEventListener("load",u),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},m=new pt("zeitnachweis");m.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});m.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});m.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});m.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});m.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let a=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;a=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const n={id:"self",ueber18:a,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(n)});async function Jt(){try{const{erkenneBerufsschulMuster:e}=await qt(async()=>{const{erkenneBerufsschulMuster:i}=await Promise.resolve().then(()=>_a);return{erkenneBerufsschulMuster:i}},void 0),t=await m.tage.toArray();if(!t.length)return!1;const a=e(t),n=await m.profil.get("self");if(!n)return!1;const s=n.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(a.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(a.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(a.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(a.stundenProTag??null)||(s.halbtags??!1)!==(a.halbtags??!1)?(await m.profil.put({...n,berufsschulMuster:a}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Ut(){try{const e=await m.mailVorlagen.toArray(),t=e.some(n=>n.betreff&&!n.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),a=e.some(n=>n.text&&!/Vielen Dank!\s*$/.test(n.text));return t||a?(await m.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Yt(){const e=await m.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await m.einstellungen.delete("__migration_reset"),!0):!1}async function _(){return await m.profil.get("self")??Ye()}async function le(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await m.profil.put(t),t}function Ye(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function Xt(e,t=null){const a=await m.einstellungen.get(e);return a?a.value:t}async function Qt(e,t){await m.einstellungen.put({key:e,value:t})}async function B(){return await m.tage.orderBy("datum").toArray()}async function ea(e){return e.length?(await m.tage.bulkPut(e),e.length):0}async function ta(e){return e.length?(await m.monate.bulkPut(e),e.length):0}async function ne(){return await m.monate.orderBy("monatKey").toArray()}async function aa(e){return await m.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function we(){return await m.uploads.orderBy("hochladeDatum").last()}async function Xe(){return await m.uploads.orderBy("hochladeDatum").reverse().toArray()}async function na(){await Promise.all([m.profil.clear(),m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.einstellungen.clear(),m.mailVorlagen.clear(),m.warnungDismissals.clear()])}async function Qe(){await Promise.all([m.tage.clear(),m.monate.clear(),m.uploads.clear(),m.warnungDismissals.clear()])}async function sa(){const[e,t,a,n,s,r,i]=await Promise.all([m.profil.toArray(),m.tage.toArray(),m.monate.toArray(),m.uploads.toArray(),m.einstellungen.toArray(),m.mailVorlagen.toArray(),m.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:a,uploads:n,einstellungen:s,mailVorlagen:r,warnungDismissals:i}}}async function ia(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await m.transaction("rw",m.profil,m.tage,m.monate,m.uploads,m.einstellungen,m.mailVorlagen,m.warnungDismissals,async()=>{var a,n,s,r,i,l,o;(a=t.profil)!=null&&a.length&&await m.profil.bulkPut(t.profil),(n=t.tage)!=null&&n.length&&await m.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await m.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await m.uploads.bulkPut(t.uploads),(i=t.einstellungen)!=null&&i.length&&await m.einstellungen.bulkPut(t.einstellungen),(l=t.mailVorlagen)!=null&&l.length&&await m.mailVorlagen.bulkPut(t.mailVorlagen),(o=t.warnungDismissals)!=null&&o.length&&await m.warnungDismissals.bulkPut(t.warnungDismissals)})}async function oe(e,t){await m.mailVorlagen.put({key:e,...t})}async function $e(){return await m.mailVorlagen.toArray()}async function ra(e,t){await m.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function la(){return await m.warnungDismissals.toArray()}function et(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let a=!1;t.endsWith("-")&&(a=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const n=parseFloat(t);return isNaN(n)?null:a?-n:n}function N(e){if(e==null||isNaN(e))return"—";const t=e<0,a=Math.abs(e),n=Math.floor(a),s=Math.round((a-n)*60);let r=n,i=s;return i===60&&(r+=1,i=0),`${t?"-":""}${r}:${String(i).padStart(2,"0")}`}function P(e,t={}){if(e==null||isNaN(e))return"—";const{signed:a=!1,suffix:n="h"}=t,s=a&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${n}`}function F(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function ue(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let a=t[0].von,n=t[0].bis;for(const s of t)F(s.von)<F(a)&&(a=s.von),F(s.bis)>F(n)&&(n=s.bis);return{kommen:a,gehen:n}}function oa(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ca(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function ge(e,t={}){const{size:a=20,layout:n="inline"}=t;return e?`
    <div class="kommen-gehen ${n}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${oa(a)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ca(a)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}const Ke={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},da=(e,t,a)=>{let n;const s=a!=null&&a.addSuffix?Ke[e].withPreposition:Ke[e].standalone;return typeof s=="string"?n=s:t===1?n=s.one:n=s.other.replace("{{count}}",String(t)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:"vor "+n:n},ua={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},ga={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ha={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},fa={date:fe({formats:ua,defaultWidth:"full"}),time:fe({formats:ga,defaultWidth:"full"}),dateTime:fe({formats:ha,defaultWidth:"full"})},ma={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},pa=(e,t,a,n)=>ma[e],va={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ba={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ve={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ya={narrow:ve.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ve.wide},wa={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},$a={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ka={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},xa=e=>Number(e)+".",Sa={ordinalNumber:xa,era:U({values:va,defaultWidth:"wide"}),quarter:U({values:ba,defaultWidth:"wide",argumentCallback:e=>e-1}),month:U({values:ve,formattingValues:ya,defaultWidth:"wide"}),day:U({values:wa,defaultWidth:"wide"}),dayPeriod:U({values:$a,defaultWidth:"wide",formattingValues:ka,defaultFormattingWidth:"wide"})},Ma=/^(\d+)(\.)?/i,za=/\d+/i,Da={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Pa={any:[/^v/i,/^n/i]},Aa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Ta={any:[/1/i,/2/i,/3/i,/4/i]},Ea={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},La={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ka={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Fa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Wa={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Ba={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},Oa={ordinalNumber:vt({matchPattern:Ma,parsePattern:za,valueCallback:e=>parseInt(e)}),era:Y({matchPatterns:Da,defaultMatchWidth:"wide",parsePatterns:Pa,defaultParseWidth:"any"}),quarter:Y({matchPatterns:Aa,defaultMatchWidth:"wide",parsePatterns:Ta,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Y({matchPatterns:Ea,defaultMatchWidth:"wide",parsePatterns:La,defaultParseWidth:"any"}),day:Y({matchPatterns:Ka,defaultMatchWidth:"wide",parsePatterns:Fa,defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:Wa,defaultMatchWidth:"wide",parsePatterns:Ba,defaultParseWidth:"any"})},se={code:"de",formatDistance:da,formatLong:fa,formatRelative:pa,localize:Sa,match:Oa,options:{weekStartsOn:1,firstWeekContainsDate:4}};function te(e){if(!e)return null;const t=e.trim();return wt(t,"dd.MM.yyyy",new Date)}function w(e){return D(e,"dd.MM.yyyy")}function tt(e){return D(e,"EE, dd.MM.yyyy",{locale:se})}function at(e){const t=bt(e,{weekStartsOn:1}),a=yt(e,{weekStartsOn:1});return`${D(t,"dd.MM.")} – ${D(a,"dd.MM.yyyy")}`}function Va(e){return`${$t(e)}-${String(kt(e)).padStart(2,"0")}`}function nt(e){return D(e,"yyyy-MM")}function Ca(e){return D(e,"yyyy-MM-dd")}function Ia(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let a=0,n=new Date(e);for(;n<t;)n=qe(n,1),Je(n)||a++;return a}function T(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function st(e){var d;const t=e.filter(g=>g.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const a={};for(const g of t)a[d=g.wochentag]??(a[d]=[]),a[g.wochentag].push(g);const n=[],s=[];let r=null;for(const[g,u]of Object.entries(a)){if(u.sort((v,y)=>v.datum.localeCompare(y.datum)),u.length<2)continue;const h=[];for(let v=1;v<u.length;v++)h.push(xt(S(u[v].datum),S(u[v-1].datum)));const f=Fe(h);f<=10?n.push(g):f<=18&&(s.push(g),(!r||S(u[0].datum)<S(r))&&(r=u[0].datum))}const i=t.map(g=>g.ist).filter(g=>g!=null&&g>0),l=Fe(i),o=l!=null?Math.round(l*4)/4:null,c=o!=null&&o<5;return{wochentageWoechentlich:n,wochentage14Taegig:s,referenzDatum14Taegig:r,stundenProTag:o,halbtags:c}}function Fe(e){if(!e.length)return null;const t=e.slice().sort((n,s)=>n-s),a=Math.floor(t.length/2);return t.length%2?t[a]:(t[a-1]+t[a])/2}function ke(e,t){var s,r;if(!t)return!1;const n=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(n))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(n)&&t.referenzDatum14Taegig){const i=S(t.referenzDatum14Taegig),l=St(e,i,{weekStartsOn:1});if(l>=0&&l%2===0)return!0}return!1}function it(e,t=null){return(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const _a=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:st,erwarteteBerufsschulStunden:it,istBerufsschulTagLautMuster:ke},Symbol.toStringTag,{value:"Module"}));function ja(e){return e?"arbzg":"jarbschg"}function Ra(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function rt(e){if(!e||e.length<2)return 0;const t=e.filter(n=>n.von&&n.bis).map(n=>({von:F(n.von),bis:F(n.bis)})).filter(n=>n.von!=null&&n.bis!=null).sort((n,s)=>n.von-s.von);let a=0;for(let n=1;n<t.length;n++){const s=t[n].von-t[n-1].bis;(s>0&&s>=15||s>0)&&(a+=s)}return a/60}function lt(e,t){const a=e.zeitSpannen??[];if(!a.length||a.every(f=>!f.von))return{keinAnspruch:!0};const n=rt(a),s=e.pause??0,r=Ha(a),i=r-s,l=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":ja(!!t.ueber18),o=Ra(i,l),c=Math.max(n,o),d=s-c,g=Math.max(0,o-n);let u="ok",h=null;if(d>.05)u="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(g>.05&&s>n+.02){u="aufstockung_legal";const f=Math.round(g*60);h=`Du hast ${Math.round(n*60)} min Pause gestempelt, aber bei ${i.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${l.toUpperCase()}) ${Math.round(o*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:i,gestempeltePause:n,abgezogenePause:s,gesetzlichePflicht:o,gesetz:l,legalerAbzug:c,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,g)*60),typ:u,warnung:h}}function Ha(e){let t=0;for(const a of e){if(!a.von||!a.bis)continue;const n=F(a.von),s=F(a.bis);n!=null&&s!=null&&s>n&&(t+=s-n)}return t/60}const X={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function xe(e,t,a,n=new Set){var d,g;const s=[],r=a??new Date,i=new Map(e.map(u=>[u.datum,u]));if(!e.length)return s;const l=S(e[0].datum),o=r;for(let u=new Date(l);u<=o;u=qe(u,1)){if(Je(u))continue;const h=D(u,"yyyy-MM-dd"),f=i.get(h),v=Ia(u,o);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(ke(u,t.berufsschulMuster)){const p=v>=4?"error":v>=2?"warn":"info";Q(s,n,{datum:h,wochentag:(f==null?void 0:f.wochentag)??ie(u),typ:"bs_tag_fehlt",schweregrad:p,titel:`Berufsschultag nicht eingetragen: ${w(u)}`,beschreibung:`Laut deinem Profil hast du am ${X[ie(u)]}, ${w(u)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${v>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:v,mailVorlageKey:p==="error"?"bs_tag_fehlt":null})}else{const p=v>=4?"error":v>=2?"warn":"info";Q(s,n,{datum:h,wochentag:ie(u),typ:"stempelzeit_fehlt",schweregrad:p,titel:`Keine Stempelzeit am ${w(u)}`,beschreibung:`Am ${X[ie(u)]}, ${w(u)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${v>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:v,mailVorlageKey:p==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const p=it(t.berufsschulMuster,f.soll);p!=null&&f.ist<p-.5&&Q(s,n,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${w(u)}`,beschreibung:`Am ${X[f.wochentag]}, ${w(u)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${p.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:p,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((g=f.zeitSpannen)==null?void 0:g.length)>1&&h>="2026-04-01"){const p=lt(f,t);(p==null?void 0:p.typ)==="fehler_zeitwirtschaft"&&p.unrechtmaessigerVerlustMin>=5?Q(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:p.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${w(u)})`,beschreibung:`Am ${X[f.wochentag]}, ${w(u)} wurden ${Math.round(p.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(p.gestempeltePause*60)} min, gesetzlich nötig (${p.gesetz.toUpperCase()}): ${Math.round(p.gesetzlichePflicht*60)} min. Differenz von ${p.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:p.unrechtmaessigerVerlustMin,abgezogen:p.abgezogenePause,gestempelt:p.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(p==null?void 0:p.typ)==="aufstockung_legal"&&p.aufstockungMin>=10&&Q(s,n,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${w(u)}) — ${p.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${X[f.wochentag]}, ${w(u)} hast du nur ${Math.round(p.gestempeltePause*60)} min Pause gemacht. Gesetz (${p.gesetz.toUpperCase()}) schreibt ${Math.round(p.gesetzlichePflicht*60)} min vor. Fehlende ${p.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const c={error:0,warn:1,info:2};return s.sort((u,h)=>{const f=c[u.schweregrad]-c[h.schweregrad];return f!==0?f:h.datum.localeCompare(u.datum)}),s}function ot(e,t=new Set){var n,s,r,i;const a=[];for(const l of e){const o=((n=l.glz)==null?void 0:n.saldoVorperiode)??0,c=((s=l.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((r=l.glz)==null?void 0:r.umgebuchteStunden)??0,g=(i=l.glz)==null?void 0:i.saldoGesamt;if(g==null)continue;const u=o+c+d,h=Math.abs(g-u);if(h>.03){const f=`${l.monatKey}-saldo_plausi`;t.has(f)||a.push({datum:`${l.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${l.monatKey}`,beschreibung:`Rechnung: Vorperiode ${o.toFixed(2)} + aktuelle Periode ${c.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${u.toFixed(2)}, aber dein Saldo wird mit ${g.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:u,ist:g})}}return a}function Q(e,t,a){const n=`${a.datum}-${a.typ}`;t.has(n)||(a.id=n,e.push(a))}function ie(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}function Za(e,t){var o,c,d;const a=[...e].sort((g,u)=>g.datum.localeCompare(u.datum));if(!a.length)return[];const n=new Map(t.map(g=>[g.monatKey,g])),s={};for(const g of a)s[o=g.monatKey]??(s[o]=[]),s[g.monatKey].push(g);const r=Object.keys(s).sort(),i=[];let l=null;for(const g of r){const u=n.get(g);let h;((c=u==null?void 0:u.glz)==null?void 0:c.saldoVorperiode)!=null?h=u.glz.saldoVorperiode:l!=null?h=l:h=0;const f=s[g];for(const v of f)v.diff!=null&&(h+=v.diff),i.push({datum:v.datum,wochentag:v.wochentag,saldo:Math.round(h*100)/100,diff:v.diff,ist:v.ist,soll:v.soll,tagestyp:v.tagestyp,monatKey:v.monatKey,wocheKey:v.wocheKey,zeitSpannen:v.zeitSpannen});if(((d=u==null?void 0:u.glz)==null?void 0:d.saldoGesamt)!=null){const v=u.glz.saldoGesamt-h;if(Math.abs(v)>.02&&i.length>0){const y=i.length-1;i[y].umbuchung=v,i[y].saldo=Math.round((i[y].saldo+v)*100)/100,h=i[y].saldo}l=u.glz.saldoGesamt}else l=h}return i}function Na(e,t){if(!e.length)return[];if(t==="alles")return e;const a=Math.min(t,e.length);return e.slice(-a)}function Ga(e){return e.length?e[e.length-1].saldo:0}function qa(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),a=e[e.length-1].saldo;return Math.round((a-t)*100)/100}const Ja={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},ae={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`}};function he(e,t){const a=ae[e];return a?{...a,...t??{}}:null}function ct(e,t){const a=We(e.text,t);return{betreff:We(e.betreff,t),text:a}}function We(e,t){return e.replace(/\{(\w+)\}/g,(a,n)=>t[n]!=null?String(t[n]):`{${n}}`)}function dt(e,t){const a=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:a?tt(a).split(", ")[1]:"",wochentag:Ja[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ut(e,t,a){const n=ct(t,a),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",n.betreff),r.set("body",n.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}L.register(Mt,zt,Dt,Pt,At,Tt,Et,Lt,Kt,Ft,Wt,Bt,Ot,Vt);function x(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function O(){return{fg:x("--fg"),fgMuted:x("--fg-muted"),fgSubtle:x("--fg-subtle"),border:x("--border"),surface:x("--surface"),accent:x("--accent"),success:x("--success"),warn:x("--warn"),danger:x("--danger"),info:x("--info"),palette:[x("--chart-1"),x("--chart-2"),x("--chart-3"),x("--chart-4"),x("--chart-5"),x("--chart-6"),x("--chart-7")]}}function $(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Ua(e,t){const a=O();if(V(e),!(t!=null&&t.length))return;const n=t.map(r=>D(S(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?a.success:a.danger),new L(e,{type:"line",data:{labels:n,datasets:[{label:"Tages-Saldo",data:s,borderColor:a.accent,backgroundColor:r=>{const i=r.chart,{ctx:l,chartArea:o,scales:c}=i;return o?rn(l,o,c.y,a):C(a.accent,.14)},segment:{borderColor:r=>{const i=r.p0.parsed.y,l=r.p1.parsed.y,o=(i+l)/2;return o>=.02?a.success:o<=-.02?a.danger:a.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?a.success:r<=-.02?a.danger:a.fgMuted),pointBorderColor:a.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...$(a),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},plugins:{...$(a).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Ya(t)}},scales:{...$(a).scales,y:{...$(a).scales.y,ticks:{...$(a).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function Ya(e){return function(t){var q;const{chart:a,tooltip:n}=t;let s=a.$saldoTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),a.$saldoTooltipEl=s;const Z=a.destroy.bind(a);a.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),Z()}}if(n.opacity===0||!((q=n.dataPoints)!=null&&q.length)){s.style.opacity="0";return}const r=n.dataPoints[0].dataIndex,i=e[r];if(!i){s.style.opacity="0";return}const l=i.saldo>.05?"pos":i.saldo<-.05?"neg":"flat",o=(i.diff??0)>.05?"pos":(i.diff??0)<-.05?"neg":"flat",c=(i.saldo>0?"+":"")+i.saldo.toFixed(2).replace(".",",")+"h",d=i.diff!=null?(i.diff>0?"+":"")+i.diff.toFixed(2).replace(".",",")+"h":null;let u=`<div class="saldo-tooltip-title">${Be(D(S(i.datum),"EE, dd.MM.yyyy",{locale:se}))}</div>`;u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Saldo</span><span class="saldo-tooltip-value ${l}">${c}</span></div>`,d&&(u+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">Tages-Diff</span><span class="saldo-tooltip-value ${o}">${d}</span></div>`);const h=[];i.tagestyp&&h.push(`Typ: ${Be(i.tagestyp)}`),i.umbuchung&&h.push(`Umbuchung: ${i.umbuchung>=0?"+":""}${i.umbuchung.toFixed(2).replace(".",",")}h`),h.length&&(u+=`<div class="saldo-tooltip-meta">${h.map(Z=>`<span>${Z}</span>`).join("")}</div>`),s.innerHTML=u;const f=a.canvas.getBoundingClientRect(),v=f.left+n.caretX,y=f.top+n.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const p=s.offsetWidth,k=s.offsetHeight,H=18;let j=v+H;j+p>window.innerWidth-8&&(j=v-H-p);let K=y-k/2;K<8&&(K=8),K+k>window.innerHeight-8&&(K=window.innerHeight-k-8),s.style.left=j+"px",s.style.top=K+"px",s.style.opacity="1"}}function Be(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Xa(e,t){const a=O();if(V(e),!(t!=null&&t.length))return;const n=t.map(r=>r.monatKey),s=t.map(r=>{var i;return((i=r.glz)==null?void 0:i.saldoGesamt)??0});return new L(e,{type:"line",data:{labels:n,datasets:[{label:"GLZ-Saldo (Monatsende)",data:s,borderColor:a.accent,backgroundColor:C(a.accent,.18),tension:.35,fill:!0,pointRadius:4}]},options:$(a)})}function Se(e,t){const a=O();if(V(e),!(t!=null&&t.length))return;const n=t.map(i=>D(S(i.datum),"dd.MM.")),s=t.map(i=>i.ist??0),r=t.map(i=>ln(i.tagestyp,a));return new L(e,{type:"bar",data:{labels:n,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{label:i=>{const l=t[i.dataIndex];return`${l.tagestyp??"—"}: ${(l.ist??0).toFixed(2).replace(".",",")}h`}}}},scales:{...$(a).scales,y:{...$(a).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Qa(e,t){const a=O();if(V(e),!(t!=null&&t.length))return;const n=t.filter(c=>{var d;return((d=c.zeitSpannen)==null?void 0:d.length)&&c.zeitSpannen.some(g=>g.von&&g.bis)}).map(c=>{const d=c.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:F(h.von),bis:F(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const g=Math.min(...d.map(h=>h.von)),u=Math.max(...d.map(h=>h.bis));return{...c,_spans:d,_minVon:g,_maxBis:u}}).filter(Boolean);if(!n.length)return;const s=c=>c.ist==null?a.fgMuted:c.ist>=7?a.success:a.danger,r={label:"Tages-Rahmen",data:n.map(c=>[c._minVon,c._maxBis]),backgroundColor:n.map(s),borderColor:n.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.75,categoryPercentage:.95},i=Math.max(0,Math.floor(Math.min(...n.map(c=>c._minVon))/60)*60-60),l=Math.min(24*60,Math.ceil(Math.max(...n.map(c=>c._maxBis))/60)*60+60),o=c=>`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`;return new L(e,{type:"bar",data:{labels:n.map(c=>D(S(c.datum),"dd.MM.")),datasets:[r]},options:{...$(a),interaction:{mode:"index",intersect:!1,axis:"x"},plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:a.surface,borderColor:a.accent,borderWidth:2,padding:14,titleColor:a.fg,titleFont:{size:14,weight:"600"},titleMarginBottom:8,bodyColor:a.fg,bodyFont:{size:13},bodySpacing:4,displayColors:!1,caretPadding:10,cornerRadius:8,callbacks:{title:c=>{const d=n[c[0].dataIndex];return D(S(d.datum),"EE, dd.MM.yyyy",{locale:se})},label:()=>"",beforeBody:c=>{const d=n[c[0].dataIndex],g=d.ist!=null?N(d.ist):"—",u=d.soll!=null?N(d.soll):"—",h=d.pause!=null?Math.round(d.pause*60)+" min":"—",v=[`Tages-Rahmen: ${`${o(d._minVon)} – ${o(d._maxBis)}`}`];return d._spans.length>1&&(v.push(""),d._spans.forEach((y,p)=>{v.push(`  Block ${p+1}: ${y.vonStr} – ${y.bisStr}`)})),[...v,"",`Arbeitszeit (netto): ${g}`,`Soll: ${u}`,`Pause (abgezogen): ${h}`]}}}},scales:{x:{ticks:{color:a.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:i,max:l,ticks:{color:a.fgMuted,stepSize:60,callback:c=>o(c)},grid:{color:a.border}}}}})}function en(e,t){const a=O();V(e);const n={};for(const i of t){if(i.tagestyp!=="Stempelzeit"||!i.zeitSpannen||i.zeitSpannen.length<2)continue;const l=rt(i.zeitSpannen);if(l<=0)continue;const o=Math.round(l*60),c=Math.floor(o/15)*15;n[c]=(n[c]??0)+1}const s=Object.keys(n).map(Number).sort((i,l)=>i-l),r=s.map(i=>n[i]);return new L(e,{type:"bar",data:{labels:s.map(i=>`${i}–${i+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:a.palette[1],borderRadius:4}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1},tooltip:{...$(a).plugins.tooltip,callbacks:{title:i=>`Pause-Länge (gestempelt): ${i[0].label}`,label:i=>`${i.parsed.y} Tag(e)`}}}}})}function tn(e,t){const a=O();V(e);const n=["MO","DI","MI","DO","FR"],s={},r={};for(const l of n)s[l]=0,r[l]=0;for(const l of t)n.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,r[l.wochentag]+=1));const i=n.map(l=>r[l]>0?s[l]/r[l]:0);return new L(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:i,backgroundColor:a.palette[2],borderRadius:4}]},options:{...$(a),plugins:{...$(a).plugins,legend:{display:!1}}}})}function an(e,t){const a=O();V(e);const n={};for(const i of t)!i.tagestyp||i.tagestyp==="Wochenende"||(n[i.tagestyp]=(n[i.tagestyp]??0)+1);const s=Object.keys(n),r=Object.values(n);return new L(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((i,l)=>a.palette[l%a.palette.length]),borderColor:a.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:a.fgMuted,font:{size:12}}},tooltip:$(a).plugins.tooltip}}})}function nn(e,t){const a=O();V(e);const n={};for(const l of t){const o=l.wocheKey;n[o]??(n[o]={ist:0,soll:0}),n[o].ist+=l.ist??0,n[o].soll+=l.soll??0}const s=Object.keys(n).sort(),r=s.map(l=>n[l].ist),i=s.map(l=>n[l].soll);return new L(e,{type:"bar",data:{labels:s.map(l=>"KW "+l.split("-")[1]),datasets:[{label:"Ist",data:r,backgroundColor:a.palette[0],borderRadius:4},{label:"Soll",data:i,backgroundColor:a.palette[3],borderRadius:4}]},options:$(a)})}function sn(e,t){const a=O();V(e);const n=t.slice().sort((i,l)=>i.datum.localeCompare(l.datum));let s=0;const r=n.map(i=>(s+=i.diff??0,{x:i.datum,y:s}));return new L(e,{type:"line",data:{labels:r.map(i=>i.x),datasets:[{label:"Kumulative Differenz (+/- Soll)",data:r.map(i=>i.y),borderColor:a.palette[5],backgroundColor:C(a.palette[5],.15),fill:!0,tension:.2,pointRadius:0}]},options:{...$(a),scales:{x:{display:!1,grid:{display:!1}},y:{...$(a).scales.y}}}})}function V(e){const t=L.getChart(e);t&&t.destroy()}function C(e,t){const a=e.replace("#","").trim();if(a.length!==6&&a.length!==3)return e;const n=a.length===3?a.split("").map(l=>l+l).join(""):a,s=parseInt(n.slice(0,2),16),r=parseInt(n.slice(2,4),16),i=parseInt(n.slice(4,6),16);return`rgba(${s}, ${r}, ${i}, ${t})`}function rn(e,t,a,n){const{top:s,bottom:r}=t,i=e.createLinearGradient(0,s,0,r),l=a.min,o=a.max,c=o-l;if(c<=0)return C(n.success,.14);let d=(o-0)/c;return d=Math.max(0,Math.min(1,d)),i.addColorStop(0,C(n.success,.28)),i.addColorStop(Math.max(0,d-.001),C(n.success,.06)),i.addColorStop(Math.min(1,d+.001),C(n.danger,.06)),i.addColorStop(1,C(n.danger,.28)),i}function ln(e,t){const a=String(e??"").toLowerCase();return a.includes("stempel")?t.palette[0]:a.includes("berufs")?t.palette[1]:a.includes("urlaub")?t.palette[2]:a.includes("feiertag")?t.fgSubtle:a.includes("dienst")?t.palette[3]:a.includes("krank")?t.palette[4]:t.palette[5]}let on=0;function Me(e,{type:t="info",duration:a=3500}={}){const n=document.getElementById("toast-root");if(!n)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++on,n.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},a)}function ce(e){return Me(e,{type:"error",duration:6e3})}function z(e){return Me(e,{type:"success"})}const Oe=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Ve({root:e}){var K,q,Z,ze;const[t,a,n,s,r,i,l]=await Promise.all([_(),ne(),B(),la(),Xt("dashboardZeitraum",14),$e(),we()]),o=Object.fromEntries(i.map(b=>[b.key,b]));if(n.length===0){e.innerHTML=mn();return}const c=!((q=(K=t.berufsschulMuster)==null?void 0:K.wochentageWoechentlich)!=null&&q.length||(ze=(Z=t.berufsschulMuster)==null?void 0:Z.wochentage14Taegig)!=null&&ze.length),d=Za(n,a),g=d.length;let u=r;typeof u=="number"&&u>g&&(u="alles");const h=new Set(s.map(b=>b.key)),f=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,v=xe(n,t,f,h),y=ot(a,h),p=[...v,...y],k=Ga(d),H=k>.05?"positive":k<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${I(w(new Date(n[n.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${H}">${P(k,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Oe.map(b=>{const M=typeof b.key=="number"&&b.key>g;return`<button type="button" data-key="${b.key}" class="${u===b.key?"active":""}" ${M?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${c?`
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
        ${p.slice(0,8).map(b=>fn(b,t,o)).join("")}
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
          ${Oe.map(b=>{const M=typeof b.key=="number"&&b.key>g;return`<button type="button" data-key="${b.key}" class="${u===b.key?"active":""}" ${M?'disabled style="opacity:0.4"':""}>${b.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Ce(u,e,d);const j=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");j().forEach(b=>{b.addEventListener("click",async()=>{if(b.disabled)return;const M=b.getAttribute("data-key"),R=M==="alles"?"alles":parseInt(M,10);j().forEach(J=>J.classList.toggle("active",J.getAttribute("data-key")===M)),await Qt("dashboardZeitraum",R),Ce(R,e,d)})}),e.addEventListener("click",async b=>{const M=b.target.closest(".ist-part");if(M){b.preventDefault(),b.stopPropagation();const Ae=M.getAttribute("data-val");try{await navigator.clipboard.writeText(Ae);const Te=M.textContent;M.classList.add("ok"),M.textContent="✓",setTimeout(()=>{M.classList.remove("ok"),M.textContent=Te},800)}catch{z(`Bitte kopieren: ${Ae}`)}return}const R=b.target.closest(".btn-dismiss");if(!R)return;const J=R.getAttribute("data-datum"),De=R.getAttribute("data-typ");if(!J||!De)return;await ra(J,De),z("Warnung ausgeblendet.");const Pe=R.closest(".alert");Pe&&(Pe.style.display="none")})}function Ce(e,t,a){const n=Na(a,e),s=qa(n);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Ua(o,n)});const r=t.querySelector("#hero-bewegung");if(r){const o=s>.05?"up":s<-.05?"down":"flat",c=s>.05?"↑":s<-.05?"↓":"→";r.className=`saldo-trend ${o}`,r.innerHTML=`${c} ${Math.abs(s)<.01?"Unverändert":P(s,{signed:!0})} im Zeitraum`}const i=t.querySelector("#tage-info");if(i){const o=n.length;i.textContent=`${o} ${o===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=un(n.slice().reverse()))}const cn=3,dn=2.5;function un(e){if(!e.length)return'<p class="hint">Keine Tage im Zeitraum.</p>';const t=[];let a=null;for(const n of e)(!a||a.key!==n.wocheKey)&&(a={key:n.wocheKey,tage:[]},t.push(a)),a.tage.push(n);return`<div class="tages-liste">${t.map(n=>gn(n)).join("")}</div>`}function gn(e){var c;const t=e.tage.reduce((d,g)=>d+(g.ist??0),0),a=e.tage.reduce((d,g)=>d+(g.diff??0),0),n=(c=e.tage[0])==null?void 0:c.datum,s=n?at(S(n)):"",r=e.key?e.key.split("-")[1]:"?",i=a>.05?"pos":a<-.05?"neg":"flat",l=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",o=t.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${I(r)}</span>
          <span class="woche-header-range tabular">${I(s)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${i}">${l}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(d=>hn(d)).join("")}
      </div>
    </div>
  `}function hn(e){const t=e.diff??0,a=t>0,n=a?cn:dn,s=Math.min(150,Math.abs(t)/n*50),r=a?"var(--success)":t<0?"var(--danger)":"var(--fg-subtle)",i=ue(e.zeitSpannen);return`
    <a href="#/tag/${e.datum}" class="tag-row">
      <div class="tag-row-datum">
        <div class="tabular">${I(w(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${pn(e.wochentag)}</div>
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${vn(e.tagestyp)}">${I(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${ge(i,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const l=N(e.ist),[o,c]=l.split(":");return e.ist<=0?`<div class="ist-wert">${l}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${o}" title="${o} Stunden kopieren">${o}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${c}" title="${c} Minuten kopieren">${c}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?N(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${s}%; background: ${r};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":t<0?"var(--danger)":"var(--fg-muted)"};">
        ${t!==0?(a?"+":"")+t.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" style="color: var(--fg-muted); font-size: 12px;">
        ${e.saldo>=0?"+":""}${e.saldo.toFixed(2).replace(".",",")}h
      </div>
    </a>
  `}function fn(e,t,a){const n=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=he(e.mailVorlageKey,a==null?void 0:a[e.mailVorlageKey]);if(r){const i=dt(t,e);s=ut(t,r,i)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${n}</div>
      <div class="alert-body">
        <div class="alert-title">${I(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${I(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${me(s)}" class="btn primary sm">✉ Mail schreiben</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${me(e.datum)}" data-typ="${me(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function mn(){return`
    <h1 class="view-title">Willkommen</h1>
    <p class="view-subtitle">Lade deinen Zeitnachweis hoch, um Dashboard und Analysen zu sehen.</p>
    <div class="card" style="max-width: 640px;">
      <h2>So startest du</h2>
      <ol style="color: var(--fg-muted); line-height: 1.7; font-size: 14px; padding-left: 20px;">
        <li>Öffne in ESS deinen Zeitnachweis und exportiere ihn als PDF.</li>
        <li>Gehe zu <a href="#/daten" style="color: var(--accent);">Daten</a> und lade das PDF hoch.</li>
        <li>Fülle unter <a href="#/profil" style="color: var(--accent);">Profil</a> dein Geburtsdatum und deinen Berufsschul-Rhythmus aus.</li>
      </ol>
      <div style="margin-top: 24px;">
        <a href="#/daten" class="btn primary">Zum Upload →</a>
      </div>
    </div>
  `}function pn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function vn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function I(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function me(e){return I(e)}const bn="/enhanced-ess/assets/pdf.worker.min-yatZIOMy.mjs";Ct.workerSrc=bn;const Ie={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},yn=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function wn(e){var o,c;const a=await It({data:e}).promise,n=[];let s=0;for(let d=1;d<=a.numPages;d++){const u=await(await a.getPage(d)).getTextContent();s+=u.items.length;const h=$n(u.items);for(const f of h)n.push({page:d,text:f})}const r=kn(n),{tage:i,monate:l}=xn(n);try{const d=await a.getMetadata();r.producer=((o=d==null?void 0:d.info)==null?void 0:o.Producer)??null,r.creator=((c=d==null?void 0:d.info)==null?void 0:c.Creator)??null}catch{}return r.totalTextItems=s,{meta:r,tage:i,monate:l}}function $n(e){if(!e.length)return[];const t=e.slice().sort((i,l)=>{const o=l.transform[5]-i.transform[5];return Math.abs(o)>2?o:i.transform[4]-l.transform[4]}),a=[];let n=null,s=[];const r=3;for(const i of t){const l=i.transform[5];n==null||Math.abs(l-n)<=r?(s.push(i),n==null&&(n=l)):(a.push(_e(s)),s=[i],n=l)}return s.length&&a.push(_e(s)),a.filter(i=>i.trim().length>0)}function _e(e){e.sort((n,s)=>n.transform[4]-s.transform[4]);let t="",a=-1;for(const n of e){const s=n.transform[4];a>=0&&s-a>4?t+="  ":a>=0&&s-a>.5&&(t+=" "),t+=n.str,a=s+n.width}return t}function kn(e){var a,n;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,i=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);i&&(t.zeitraumVon=te(i[1]),t.zeitraumBis=te(i[2]));const l=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(l&&(t.stichtagAuswertung=te(l[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const o=(((a=e[s+1])==null?void 0:a.text)??"").trim();let c=o.split(/\s{2,}/);c.length<3&&(c=o.split(/\s+/)),c.length>=3&&/^\d/.test(c[0])&&(t.personalnummer=c[0],t.kostenstelle=c[1],t.personalbereich=c[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const o=(((n=e[s+1])==null?void 0:n.text)??"").trim();let c=o.split(/\s{2,}/);c.length<3&&(c=o.split(/\s+/)),c.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(c[0])&&(t.einstellungsdatum=te(c[0]),t.mitarbeiterkreis=c[1],t.arbeitszeitplanregel=c[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let o=s+1;o<Math.min(s+8,e.length);o++){const c=e[o].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(c)&&!/kanarya/i.test(c)&&!/tel/i.test(c)){t.name=c;break}}}return t}function xn(e,t){var o;const a=[],n=[];let s=null,r=null,i=!1,l=0;for(;l<e.length;){const c=e[l].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(c);if(d){const f=d[1].trim(),v=parseInt(d[2],10),y=Ie[f]??Ie[f.replace("ä","ae")]??null;y&&(s={jahr:v,monat:y,monatKey:`${v}-${String(y).padStart(2,"0")}`},i=!0,r=null),l++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(c)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(c),v=te(f[1]);r={monatKey:(s==null?void 0:s.monatKey)??nt(v),stichtag:v,glz:{},flexi:{},zeitkonten:{},raw:{}},l=Sn(e,l+1,r),n.push(r);continue}let g=s;const u=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(c.trim());if(u&&s){const f=parseInt(u[1],10);i&&f>=20?g=Dn(s):f<=15&&(i=!1)}const h=je(c,g);if(h){const f=[];let v=l+1;for(;v<e.length;){const p=e[v].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||je(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const k=Mn(p);if(k){f.push(k),v++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){l=v;continue}(h.ist!=null||h.soll!=null||(((o=h.zeitSpannen)==null?void 0:o.length)??0)>0||h.tagestyp!=null)&&a.push(h),l=v;continue}l++}return{tage:a,monate:n}}function Sn(e,t,a){let n=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;n<e.length;){const r=e[n].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let i;for(;(i=s.exec(r))!=null;){const l=i[1],o=i[2].trim(),c=et(i[3]);a.raw[l]={beschreibung:o,wert:c},l==="0008"&&(a.glz.saldoVorperiode=c),l==="8016"&&(a.glz.saldoAktuellePeriode=c),l==="9802"&&(a.glz.umgebuchteStunden=c),l==="0005"&&(a.glz.saldoGesamt=c),l==="9803"&&(a.glz.ueberzaehligeStd=c),l==="0050"&&(a.zeitkonten.produktivstunden=c),l==="9011"&&(a.flexi.jahreskontoVorperiode=c),l==="9010"&&(a.flexi.jahreskontoSaldo=c),l==="9020"&&(a.flexi.langzeitkontoSaldo=c),l==="9203"&&(a.zeitkonten.azMonatsendeUeber216=c),l==="9207"&&(a.zeitkonten.auszahlungBav=c),l==="9205"&&(a.zeitkonten.summeAuszahlung=c)}if(n++,n-t>80)break}return n}function je(e,t){if(!t)return null;const a=e.trim(),n=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(a);if(!n)return null;const s=parseInt(n[1],10),r=n[2],i=(n[3]??"").trim();let l=t.jahr,o=t.monat;const c=new Date(l,o-1,s),d={datum:Ca(c),datumDate:c.toISOString(),wochentag:r,tagNr:s,monatKey:nt(c),wocheKey:Va(c),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:a};return i?(zn(i,d),d):(d.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,d)}function Mn(e){const t=e.trim(),a=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return a?{aktivitaet:a[1],von:a[2],bis:a[3]}:null}function zn(e,t){let a=null,n=e;for(const d of yn)if(e.startsWith(d)){a=d,n=e.slice(d.length).trim();break}a||(a=e.split(/\s+/)[0],n=e.slice(a.length).trim()),t.tagestyp=Pn(a),t.aktivitaeten.push(a);const s=n.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,i=/^-?[\d,.]+-?$/;let l=0;for(;s[l]&&r.test(s[l])&&s[l+1]&&r.test(s[l+1]);)t.zeitSpannen.push({aktivitaet:a,von:s[l],bis:s[l+1]}),l+=2;const o=[];for(;l<s.length&&i.test(s[l]);){const d=et(s[l]);d!=null&&o.push(d),l++}let c=s[l];o.length>=5?([t.ist,t.soll,t.diff,t.pause]=o,c||(c=String(o[4]))):o.length===4?[t.ist,t.soll,t.diff,t.pause]=o:o.length===3?[t.ist,t.soll,t.diff]=o:o.length===2?[t.ist,t.soll]=o:o.length===1&&(t.ist=o[0]),c&&(t.tazp=String(c))}function Dn(e){if(!e)return null;let t=e.monat-1,a=e.jahr;return t<1&&(t=12,a-=1),{jahr:a,monat:t,monatKey:`${a}-${String(t).padStart(2,"0")}`}}function Pn(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}async function An({root:e}){const t=await Xe(),a=await _();e.innerHTML=`
    <h1 class="view-title">Daten</h1>
    <p class="view-subtitle">Zeitnachweis hochladen, Backup exportieren oder alle Daten löschen.</p>

    <div class="grid cols-2" style="margin-bottom: 32px;">
      <div class="card">
        <h2>PDF-Upload</h2>
        <p style="color: var(--fg-muted); font-size: 13px; margin-bottom: 12px;">
          Lade deinen Zeitnachweis (PDF aus dem ESS) hoch. Die Daten werden ausschließlich lokal in deinem Browser analysiert und gespeichert — nichts verlässt dein Gerät.
        </p>
        <details class="tutorial-details" style="margin-bottom: 16px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0;">
          <summary style="cursor: pointer; padding: 10px 14px; font-size: 13px; font-weight: 600; color: var(--fg);">
            Wie bekomme ich die richtige PDF aus dem ESS?
          </summary>
          <div style="padding: 0 14px 14px;">
            <p style="font-size: 13px; color: var(--fg-muted); margin: 0 0 8px;">
              Öffne deinen Zeitnachweis in ESS. In der Toolbar des PDF-Viewers findest du oben rechts den <strong>Speichern-Button</strong> (Disketten-Symbol). Damit lädst du eine echte Text-PDF herunter.
            </p>
            <p style="font-size: 13px; color: var(--danger); margin: 0 0 12px;">
              <strong>Wichtig:</strong> Nutze NICHT den Drucken-Button (links daneben) mit „Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und die App kann sie nicht lesen.
            </p>
            <img class="zoomable" src="/enhanced-ess/tutorial/speichern.png" alt="Speichern-Button im PDF-Viewer" title="Klick für Vollbild" style="width: 100%; max-width: 600px; border: 1px solid var(--border); border-radius: var(--radius-sm); display: block; cursor: zoom-in;" />
          </div>
        </details>
        <div class="upload-zone" id="upload-zone">
          <div class="upload-zone-icon">📄</div>
          <h3>PDF hierher ziehen oder klicken</h3>
          <p>Akzeptiert: Zeitnachweis-PDF aus dem ESS (über Speichern, nicht Drucken)</p>
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':ht(t)}
      </div>
    </div>
  `;const n=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag")}),n.addEventListener("dragleave",()=>n.classList.remove("drag")),n.addEventListener("drop",async r=>{var l;r.preventDefault(),n.classList.remove("drag");const i=(l=r.dataTransfer.files)==null?void 0:l[0];i&&await Re(i,e,a)}),s.addEventListener("change",async r=>{var l;const i=(l=r.target.files)==null?void 0:l[0];i&&await Re(i,e,a)}),e.querySelector("#btn-export").addEventListener("click",En),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Ln),e.querySelector("#btn-clear-parsed").addEventListener("click",Tn),e.querySelector("#btn-reset").addEventListener("click",Kn),e.addEventListener("click",r=>{const i=r.target.closest("img.zoomable");i&&gt(i.src,i.alt)})}function gt(e,t){const a=document.createElement("div");a.className="lightbox-overlay",a.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(a);const n=()=>{a.remove(),document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&n()};a.addEventListener("click",r=>{(r.target===a||r.target.classList.contains("lightbox-close"))&&n()}),document.addEventListener("keydown",s)}async function Tn(){confirm("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten. Fortfahren?")&&(await Qe(),z("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function ht(e){return`
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
            <td>${T(Fn(t.hochladeDatum))}</td>
            <td>${T(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?T(w(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?T(w(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?T(w(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Re(e,t,a){var r,i,l,o;const n=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");s.style.pointerEvents="none",s.style.opacity="0.6",n.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${T(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const c=await e.arrayBuffer(),d=await wn(c);if(d.tage.length===0&&!d.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",n.innerHTML="",pe({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(r=d.meta)==null?void 0:r.producer}),ce("PDF enthält keinen extrahierbaren Text.");return}const g=await we(),u=g==null?void 0:g.personalnummer,h=d.meta.personalnummer;if(u&&h&&u!==h){const k=(g==null?void 0:g.name)||`Personalnr. ${u}`,H=d.meta.name||`Personalnr. ${h}`;if(!confirm(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${k}
Jetzt:  ${H}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt.
(Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)

Fortfahren?`)){s.style.pointerEvents="",s.style.opacity="",n.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${T(k)}) erneut hoch.</p>
            </div>
          </div>`;return}await Qe();const K=await _();await le({...K,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}await ea(d.tage),await ta(d.monate),await aa({dateiname:e.name,personalnummer:d.meta.personalnummer??null,name:d.meta.name??null,zeitraumVon:((i=d.meta.zeitraumVon)==null?void 0:i.toISOString())??null,zeitraumBis:((l=d.meta.zeitraumBis)==null?void 0:l.toISOString())??null,stichtagAuswertung:((o=d.meta.stichtagAuswertung)==null?void 0:o.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const f=await B(),v=st(f),y={...Ye(),...a};(v.wochentageWoechentlich.length>0||v.wochentage14Taegig.length>0)&&(y.berufsschulMuster=v),await le(y),n.innerHTML="",pe({type:"success",title:"PDF erfolgreich eingelesen",desc:d.meta.zeitraumVon?`Zeitraum: ${w(d.meta.zeitraumVon)} – ${w(d.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:d.tage.length,label:"Tage"},{num:d.monate.length,label:"Monatsübersichten"}]}),z(`PDF verarbeitet: ${d.tage.length} Tage.`);const p=await Xe();t.querySelector("#uploads-list").innerHTML=ht(p)}catch(c){console.error(c),n.innerHTML="",pe({type:"error",title:"Fehler beim Parsen",desc:T(c.message||String(c)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),ce("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function En(){try{const e=await sa(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),n=document.createElement("a"),s=new Date().toISOString().slice(0,10);n.href=a,n.download=`zeitnachweis-backup-${s}.json`,n.click(),URL.revokeObjectURL(a),z("Backup heruntergeladen.")}catch(e){ce(`Export fehlgeschlagen: ${e.message}`)}}async function Ln(e){var a;const t=(a=e.target.files)==null?void 0:a[0];if(t)try{const n=await t.text(),s=JSON.parse(n);if(!confirm("Existierende Daten werden überschrieben. Fortfahren?"))return;await ia(s),z("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(n){ce(`Import fehlgeschlagen: ${n.message}`)}}async function Kn(){confirm("ALLE Daten endgültig löschen? Das lässt sich nicht rückgängig machen.")&&confirm("Wirklich alle Daten löschen? Letzte Warnung.")&&(await na(),z("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Fn(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function pe(e){const{type:t,title:a,desc:n,hint:s,screenshot:r,stats:i,producer:l}=e,o=document.createElement("div");o.className="upload-modal-overlay";const c=`
    <svg class="upload-check-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-check-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-check-circle" cx="26" cy="26" r="24"/>
      <path class="upload-check-mark" d="M14 27 L22 35 L38 18"/>
    </svg>`,d=`
    <svg class="upload-cross-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-cross-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-cross-circle" cx="26" cy="26" r="24"/>
      <line class="upload-cross-line" x1="17" y1="17" x2="35" y2="35"/>
      <line class="upload-cross-line upload-cross-line-2" x1="35" y1="17" x2="17" y2="35"/>
    </svg>`,g=i!=null&&i.length?`
    <div class="upload-modal-stats">
      ${i.map(p=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${T(String(p.num))}</div>
          <div class="upload-modal-stat-label">${T(p.label)}</div>
        </div>
      `).join("")}
    </div>`:"",u=r?`
    <img class="upload-modal-hint-img zoomable" src="/enhanced-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=l?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${T(l)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/monat" class="btn">Monate ansehen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;o.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?c:d}
      </div>
      <h2 class="upload-modal-title">${T(a)}</h2>
      <p class="upload-modal-desc">${n}</p>
      ${g}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${u}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(o);const v=()=>{o.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>o.remove(),150),document.removeEventListener("keydown",y)},y=p=>{p.key==="Escape"&&v()};document.addEventListener("keydown",y),o.addEventListener("click",p=>{if(p.target===o){v();return}if(p.target.closest(".upload-modal-close-btn")){v();return}const k=p.target.closest("img.zoomable");k&&gt(k.src,k.alt)})}const He={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Wn({root:e}){var s,r,i,l,o;const t=await _(),a=t.berufsschulMuster??{},n=(((s=a.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((r=a.wochentage14Taegig)==null?void 0:r.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Ze(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Ze(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${n?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((i=a.wochentageWoechentlich)==null?void 0:i.map(c=>He[c]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(c=>He[c]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${w(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${a.stundenProTag!=null?a.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${a.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${a.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((o=a.stundenProTag)==null?void 0:o.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
          </p>
        `:`
          <p class="hint">Noch kein Muster erkannt. Lade unter <a href="#/daten" style="color: var(--accent);">Daten</a> einen Zeitnachweis hoch — das Muster wird automatisch aus den Berufsschul-Tagen abgeleitet.</p>
        `}
      </div>

      <div style="grid-column: 1 / -1; display: flex; gap: 12px;">
        <button type="submit" class="btn primary">Speichern</button>
        <a href="#/" class="btn">Abbrechen</a>
      </div>
    </form>
  `,e.querySelector("#profil-form").addEventListener("submit",async c=>{var u,h;c.preventDefault();const d=new FormData(c.target),g={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((u=d.get("zeitwirtschaftEmail"))==null?void 0:u.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await le(g),z("Profil gespeichert.")})}function Ze(e){return String(e??"").replace(/"/g,"&quot;")}async function Bn({root:e}){var s;const t=await ne(),a=await B(),n={};for(const r of a)n[s=r.monatKey]??(n[s]=[]),n[r.monatKey].push(r);if(t.length===0){e.innerHTML=Rn("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(r=>{var u;const l=(n[r.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),o=l.reduce((h,f)=>h+(f.ist??0),0),c=l.reduce((h,f)=>h+(f.soll??0),0),d=o-c,g=(u=r.glz)==null?void 0:u.saldoGesamt;return`
          <a href="#/monat/${r.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${be(r.monatKey)}</h2>
              <span class="saldo-trend ${g>.05?"up":g<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${P(g??0,{signed:!0})}</strong>
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
                <div class="tabular ${d>.05?"positive":d<-.05?"negative":""}" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${P(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function On({params:e,root:t}){const a=e.yyyymm,[n,s,r,i]=await Promise.all([B(),ne(),_(),we()]),l=s.find(g=>g.monatKey===a),o=n.filter(g=>g.monatKey===a).sort((g,u)=>g.datum.localeCompare(u.datum));if(!o.length){t.innerHTML=`<h1 class="view-title">Monat ${be(a)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const c=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,d=xe(n,r,c).filter(g=>g.datum.startsWith(a));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${be(a)}</h1>
    <p class="view-subtitle">${o.length} Tage · ${d.length} Auffälligkeiten</p>

    ${l?Vn(l):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesbalken</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${d.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${d.map(g=>_n(g)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Wochen</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf eine Woche für die Detailansicht</span>
      </div>
      ${Cn(o)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">Klicke auf ein Datum für Details</span>
      </div>
      ${In(o)}
    </div>
  `,Se(t.querySelector("#chart-monat"),o)}function Vn(e){var n,s,r,i;const t=((n=e.glz)==null?void 0:n.saldoGesamt)??0;return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular ${t>0?"positive":t<0?"negative":""}" style="font-size: 28px; font-weight: 650;">${P(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${P(((s=e.glz)==null?void 0:s.saldoVorperiode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${P(((r=e.glz)==null?void 0:r.saldoAktuellePeriode)??0,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${P(((i=e.zeitkonten)==null?void 0:i.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function Cn(e){var n;const t={};for(const s of e)t[n=s.wocheKey]??(t[n]={key:s.wocheKey,tage:[],ist:0,soll:0}),t[s.wocheKey].tage.push(s),t[s.wocheKey].ist+=s.ist??0,t[s.wocheKey].soll+=s.soll??0;const a=Object.keys(t).sort();return a.length?a.map(s=>{var u;const r=t[s],i=+(r.ist-r.soll).toFixed(2),l=i>.05?"positive":i<-.05?"negative":"",o=i>.05?"var(--success)":i<-.05?"var(--danger)":"var(--fg-muted)",c=(u=r.tage[0])==null?void 0:u.datum,d=c?at(S(c)):"",g=s.split("-")[1]||"?";return`
      <a href="#/woche/${s}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${G(g)}</div>
        <div>
          <div class="list-item-title tabular">${G(d)}</div>
          <div class="list-item-sub">${r.tage.length} Tage · Ist ${r.ist.toFixed(2).replace(".",",")}h · Soll ${r.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular ${l}" style="font-weight: 600; font-size: 16px; color: ${o};">${P(i,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>
    `}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function In(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ue(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit; text-decoration: none;"><span class="tabular">${w(new Date(t.datum))}</span> <span style="color: var(--fg-subtle);">${t.wochentag}</span></a></td>
              <td>${t.tagestyp?`<span class="pill ${jn(t.tagestyp)}">${G(t.tagestyp)}</span>`:"—"}</td>
              <td>${ge(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function _n(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${G(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${G(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Mail schreiben</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function be(e){const[t,a]=e.split("-"),n=new Date(parseInt(t),parseInt(a)-1,1);return D(n,"LLLL yyyy",{locale:se})}function jn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Rn(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${G(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}function G(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Hn({root:e}){var s;const t=await B();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a={};for(const r of t)a[s=r.wocheKey]??(a[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),a[r.wocheKey].tage.push(r),a[r.wocheKey].ist+=r.ist??0,a[r.wocheKey].soll+=r.soll??0;const n=Object.keys(a).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${n.length} Wochen erfasst.</p>

    <div>
      ${n.map(r=>{const i=a[r],l=i.ist-i.soll,o=l>.05?"positive":l<-.05?"negative":"";return`
          <a href="#/woche/${r}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted);">${de(ft(r))}</div>
            <div>
              <div class="list-item-title">Ist: ${i.ist.toFixed(2).replace(".",",")}h · Soll: ${i.soll.toFixed(2).replace(".",",")}h</div>
              <div class="list-item-sub">${i.tage.length} Tage erfasst</div>
            </div>
            <div class="tabular ${o}" style="font-weight: 600; font-size: 16px;">${P(l,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function Zn({params:e,root:t}){const a=await B(),n=e.yyyykw,s=a.filter(o=>o.wocheKey===n).sort((o,c)=>o.datum.localeCompare(c.datum));if(!s.length){t.innerHTML=`<h1 class="view-title">KW ${de(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const r=s.reduce((o,c)=>o+(c.ist??0),0),i=s.reduce((o,c)=>o+(c.soll??0),0),l=r-i;t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${de(ft(n))}</h1>
    <p class="view-subtitle">${s.length} Tage</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${r.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${i.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular ${l>.05?"positive":l<-.05?"negative":""}" style="font-size: 28px; font-weight: 650; color: ${l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg)"};">${P(l,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Tagesverteilung</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    <div class="card">
      <h2>Tage dieser Woche</h2>
      ${Nn(s)}
    </div>
  `,Se(t.querySelector("#chart-woche"),s)}function Nn(e){return`
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
        ${e.map(t=>{const a=t.diff>.05?"positive":t.diff<-.05?"negative":"",n=ue(t.zeitSpannen);return`
            <tr>
              <td><a href="#/tag/${t.datum}" style="color: inherit;"><span class="tabular">${D(S(t.datum),"dd.MM.yyyy")}</span> ${t.wochentag}</a></td>
              <td>${t.tagestyp?`<span class="pill ${Gn(t.tagestyp)}">${de(t.tagestyp)}</span>`:"—"}</td>
              <td>${ge(n,{size:18})}</td>
              <td class="num tabular">${t.ist!=null?t.ist.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular">${t.soll!=null?t.soll.toFixed(2).replace(".",","):"—"}</td>
              <td class="num tabular ${a}">${t.diff!=null?P(t.diff,{signed:!0,suffix:""}):"—"}</td>
              <td class="num tabular">${t.pause!=null?t.pause.toFixed(2).replace(".",","):"—"}</td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `}function ft(e){const[t,a]=e.split("-");return`KW ${a} · ${t}`}function Gn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function de(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function qn({params:e,root:t}){var c,d,g;const a=e.datum,n=await m.tage.get(a),s=await _();if(!n){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${a} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=S(a),i=n.tagestyp==="Stempelzeit"?lt(n,s):null,l=ke(r,s.berufsschulMuster),o=ue(n.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${a.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${tt(r)}</h1>
    <p class="view-subtitle">${n.tagestyp??"Kein Typ"} · KW ${(c=n.wocheKey)==null?void 0:c.split("-")[1]}</p>

    ${o?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${ge(o,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.ist!=null?n.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${n.ist!=null?N(n.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${n.soll!=null?n.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${n.diff>.05?"var(--success)":n.diff<-.05?"var(--danger)":"var(--fg)"};">${n.diff!=null?P(n.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=n.zeitSpannen)!=null&&d.length?n.zeitSpannen.map(u=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${ee(u.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${u.von??"—"} – ${u.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${n.tagestyp?`<span class="pill ${Jn(n.tagestyp)}">${ee(n.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${l?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${ee(n.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${ee(n.monatKey)}</div>
        </div>
      </div>

      ${i&&!i.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(g=i.arbeitszeitOhnePause)==null?void 0:g.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((i.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((i.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((i.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${i.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((i.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(i.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${i.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${i.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${i.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${i.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${ee(i.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Jn(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ee(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}async function Un({root:e}){const[t,a]=await Promise.all([B(),ne()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}e.innerHTML=`
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
  `,requestAnimationFrame(()=>{Xa(e.querySelector("#c-saldo"),a),nn(e.querySelector("#c-istsoll"),t),sn(e.querySelector("#c-kumulativ"),t),Qa(e.querySelector("#c-startend"),t),tn(e.querySelector("#c-wochentag"),t),en(e.querySelector("#c-pausen"),t),an(e.querySelector("#c-donut"),t);const n=t.slice(-30);Se(e.querySelector("#c-alle-tage"),n)})}async function Yn({root:e}){const t=await B();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${a.map(r=>`<option value="${r}">${es(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const n=e.querySelector("#filter-monat");n.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),i=Array.from(r).map(l=>l.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(i).then(()=>z(`${r.length} Zeilen kopiert.`))});function s(){const r=n.value,l=(r?t.filter(o=>o.monatKey===r):t).filter(o=>o.ist!=null&&o.ist>0&&o.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Xn(l),e.querySelectorAll(".copy-val").forEach(o=>{o.addEventListener("click",async()=>{const c=o.getAttribute("data-val");await navigator.clipboard.writeText(c),o.classList.add("ok");const d=o.textContent;o.textContent="✓ kopiert",setTimeout(()=>{o.classList.remove("ok"),o.textContent=d},1200)})})}s()}function Xn(e){return e.length?`
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
        ${e.map(t=>{const a=N(t.ist),n=`${w(S(t.datum))}	${a}`;return`
            <tr data-copy="${Ne(n)}">
              <td class="tabular">${w(S(t.datum))}</td>
              <td>${Qn(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${ts(t.tagestyp)}">${mt(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${a}</td>
              <td><button class="copy-val" data-val="${Ne(a)}">📋 ${a}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Qn(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function es(e){const[t,a]=e.split("-");return D(new Date(parseInt(t),parseInt(a)-1,1),"LLLL yyyy",{locale:se})}function ts(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function mt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ne(e){return mt(e)}async function as({root:e}){const[t,a,n,s]=await Promise.all([B(),_(),ne(),$e()]),r=Object.fromEntries(s.map(o=>[o.key,o])),i=xe(t,a,new Date).filter(o=>o.mailVorlageKey),l=ot(n);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${i.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':i.map(o=>ns(o,a,r)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(o=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${E(o.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${E(o.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(ae).map(o=>{const c=he(o,r[o]);return ss(c)}).join("")}
      </div>
    </div>
  `,is(e),rs(e)}function ns(e,t,a){const n=he(e.mailVorlageKey,a[e.mailVorlageKey]);if(!n)return"";const s=dt(t,e),r=ct(n,s),i=ut(t,n,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${E(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${E(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${E(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${E(r.betreff)}

${E(r.text)}
        </div>
      </details>
      <div class="alert-actions" style="margin-top: 12px;">
        <a class="btn primary sm" href="${i}" target="_blank" rel="noopener">Mail Vorschlag in Outlook →</a>
        <button class="btn sm btn-copy-mail" data-subject="${ye(r.betreff)}" data-body="${ye(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function ss(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${E(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${E(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${ye(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${E(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function is(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=t.closest(".vorlagen-item"),s=n.querySelector(".v-betreff").value,r=n.querySelector(".v-text").value;await oe(a,{betreff:s,text:r}),z("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-key"),n=ae[a];n&&confirm(`Vorlage "${n.titel}" auf Default zurücksetzen?`)&&(await oe(a,{betreff:n.betreff,text:n.text}),z("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function rs(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const a=t.getAttribute("data-subject"),n=t.getAttribute("data-body"),s=`Betreff: ${a}

${n}`;await navigator.clipboard.writeText(s),z("Mail-Text kopiert.")})})}function E(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ye(e){return E(e)}async function ls({root:e}){const[t,a]=await Promise.all([_(),$e()]),n=Object.fromEntries(a.map(s=>[s.key,s]));e.innerHTML=`
    <h1 class="view-title">Einstellungen</h1>
    <p class="view-subtitle">App-weite Präferenzen.</p>

    <div class="grid cols-2">
      <div class="card">
        <h2>Pausen-Regel-Override</h2>
        <div class="form-group">
          <label>Welches Gesetz soll für Pausen-Checks gelten?</label>
          <select id="pause-sel">
            <option value="auto" ${t.pausenRegel==="auto"?"selected":""}>Automatisch (aus Alter im Profil)</option>
            <option value="arbzg" ${t.pausenRegel==="arbzg"?"selected":""}>ArbZG (≥18 Jahre)</option>
            <option value="jarbschg" ${t.pausenRegel==="jarbschg"?"selected":""}>JArbSchG (&lt;18 Jahre)</option>
          </select>
          <p class="hint">Bei "Automatisch" wechselt die App am 18. Geburtstag automatisch von JArbSchG auf ArbZG.</p>
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Mail-Vorlagen</h2>
        <p class="hint" style="margin-bottom: 16px;">Texte für die "✉ Mail schreiben"-Buttons im Dashboard. Platzhalter wie <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>
        <div id="vorlagen-editor">
          ${Object.keys(ae).map(s=>{const r=he(s,n[s]);return os(r)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const r={...t,pausenRegel:s.target.value};await le(r),z("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),i=s.closest(".vorlagen-item"),l=i.querySelector(".v-betreff").value,o=i.querySelector(".v-text").value;await oe(r,{betreff:l,text:o}),z("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),i=ae[r];i&&confirm(`Vorlage "${i.titel}" auf Default zurücksetzen?`)&&(await oe(r,{betreff:i.betreff,text:i.text}),z("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function os(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${re(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${re(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${cs(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${re(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function re(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function cs(e){return re(e)}async function Ge(){_t();const e=document.getElementById("content");await Yt()&&setTimeout(()=>{Me('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Ut(),await Jt(),A("/",Ve),A("/dashboard",Ve),A("/analytics",Un),A("/monat",Bn),A("/monat/:yyyymm",On),A("/woche",Hn),A("/woche/:yyyykw",Zn),A("/tag/:datum",qn),A("/berichtsheft",Yn),A("/mails",as),A("/profil",Wn),A("/daten",An),A("/einstellungen",ls),Rt(e),location.hash||jt("/")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ge):Ge();
