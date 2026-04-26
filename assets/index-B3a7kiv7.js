const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js"])))=>i.map(i=>d[i]);
import{C as j,L as yn,B as wn,D as kn,S as xn,a as $n,b as Sn,P as Mn,A as zn,c as Dn,d as An,T as En,p as Tn,e as Pn,i as Fn}from"./chartjs-CRgZvhTJ.js";import{b as Ge,a as me,c as pe,d as Ln,f as P,e as it,i as rt,s as Cn,g as Bn,p as _n,h as Wn,j as Kn,k as C,l as Vn,m as In}from"./datefns-BmW7q-T6.js";import{D as On}from"./dexie-UpTFNL8S.js";import{_ as Hn,a as Nn}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Rn(){document.documentElement.setAttribute("data-theme","dark")}const yt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},jn=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?yt[e].withPreposition:yt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},qn={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Zn={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Un={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Gn={date:Ge({formats:qn,defaultWidth:"full"}),time:Ge({formats:Zn,defaultWidth:"full"}),dateTime:Ge({formats:Un,defaultWidth:"full"})},Jn={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Xn=(e,t,n,a)=>Jn[e],Yn={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Qn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Qe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ea={narrow:Qe.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Qe.wide},ta={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},na={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},aa={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},sa=e=>Number(e)+".",ia={ordinalNumber:sa,era:me({values:Yn,defaultWidth:"wide"}),quarter:me({values:Qn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:me({values:Qe,formattingValues:ea,defaultWidth:"wide"}),day:me({values:ta,defaultWidth:"wide"}),dayPeriod:me({values:na,defaultWidth:"wide",formattingValues:aa,defaultFormattingWidth:"wide"})},ra=/^(\d+)(\.)?/i,la=/\d+/i,oa={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ca={any:[/^v/i,/^n/i]},da={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},ua={any:[/1/i,/2/i,/3/i,/4/i]},ga={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},ha={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fa={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},ma={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},pa={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},ba={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},va={ordinalNumber:Ln({matchPattern:ra,parsePattern:la,valueCallback:e=>parseInt(e)}),era:pe({matchPatterns:oa,defaultMatchWidth:"wide",parsePatterns:ca,defaultParseWidth:"any"}),quarter:pe({matchPatterns:da,defaultMatchWidth:"wide",parsePatterns:ua,defaultParseWidth:"any",valueCallback:e=>e+1}),month:pe({matchPatterns:ga,defaultMatchWidth:"wide",parsePatterns:ha,defaultParseWidth:"any"}),day:pe({matchPatterns:fa,defaultMatchWidth:"wide",parsePatterns:ma,defaultParseWidth:"any"}),dayPeriod:pe({matchPatterns:pa,defaultMatchWidth:"wide",parsePatterns:ba,defaultParseWidth:"any"})},G={code:"de",formatDistance:jn,formatLong:Gn,formatRelative:Xn,localize:ia,match:va,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Ht(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function Ce(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let i=a,l=s;return l===60&&(i+=1,l=0),`${t?"-":""}${i}:${String(l).padStart(2,"0")}`}function se(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",i=e.toFixed(2).replace(".",",");return`${s}${i}${a}`}function Z(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Nt(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)Z(s.von)<Z(n)&&(n=s.von),Z(s.bis)>Z(a)&&(a=s.bis);return{kommen:n,gehen:a}}function ya(e){return e?"arbzg":"jarbschg"}function wa(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function lt(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:Z(a.von),bis:Z(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function Rt(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(f=>!f.von))return{keinAnspruch:!0};const a=lt(n),s=e.pause??0,i=ka(n),l=i-s,d=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":ya(!!t.ueber18),r=wa(l,d),o=Math.max(a,r),c=s-o,u=Math.max(0,r-a);let g="ok",h=null;if(c>.05)g="fehler_zeitwirtschaft",h=`${Math.round(c*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){g="aufstockung_legal";const f=Math.round(u*60);h=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${d.toUpperCase()}) ${Math.round(r*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:i,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:r,gesetz:d,legalerAbzug:o,unrechtmaessigerVerlustMin:Math.round(Math.max(0,c)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:g,warnung:h}}function ka(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=Z(n.von),s=Z(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function jt(e,t){var r,o,c;const n=[...e].sort((u,g)=>u.datum.localeCompare(g.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[r=u.monatKey]??(s[r]=[]),s[u.monatKey].push(u);const i=Object.keys(s).sort(),l=[];let d=null;for(const u of i){const g=a.get(u);let h;((o=g==null?void 0:g.glz)==null?void 0:o.saldoVorperiode)!=null?h=g.glz.saldoVorperiode:d!=null?h=d:h=0;const f=s[u];for(const m of f)m.diff!=null&&(h+=m.diff),l.push({datum:m.datum,wochentag:m.wochentag,saldo:Math.round(h*100)/100,diff:m.diff,ist:m.ist,soll:m.soll,tagestyp:m.tagestyp,monatKey:m.monatKey,wocheKey:m.wocheKey,zeitSpannen:m.zeitSpannen});if(((c=g==null?void 0:g.glz)==null?void 0:c.saldoGesamt)!=null){const m=g.glz.saldoGesamt-h;if(Math.abs(m)>.02&&l.length>0){const v=l.length-1;l[v].umbuchung=m,l[v].saldo=Math.round((l[v].saldo+m)*100)/100,h=l[v].saldo}d=g.glz.saldoGesamt}else d=h}return l}function xa(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function $a(e){return e.length?e[e.length-1].saldo:0}const qt=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),Zt=7;function Ve(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:qt.has(e.tagestyp)?Math.max(n,Zt):n>0?n:t}function ot(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:qt.has(e.tagestyp)?Zt:t}function Sa(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}function ke(e){if(!e)return null;const t=e.trim();return _n(t,"dd.MM.yyyy",new Date)}function L(e){return P(e,"dd.MM.yyyy")}function Ut(e){return P(e,"EE, dd.MM.yyyy",{locale:G})}function Ie(e){const t=Cn(e,{weekStartsOn:1}),n=Bn(e,{weekStartsOn:1});return`${P(t,"dd.MM.")} – ${P(n,"dd.MM.yyyy")}`}function Ma(e){return`${Wn(e)}-${String(Kn(e)).padStart(2,"0")}`}function Gt(e){return P(e,"yyyy-MM")}function za(e){return P(e,"yyyy-MM-dd")}function Da(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=it(a,1),rt(a)||n++;return n}function w(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}j.register(yn,wn,kn,xn,$n,Sn,Mn,zn,Dn,An,En,Tn,Pn,Fn);function W(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function re(){return{fg:W("--fg"),fgMuted:W("--fg-muted"),fgSubtle:W("--fg-subtle"),border:W("--border"),surface:W("--surface"),accent:W("--accent"),success:W("--success"),warn:W("--warn"),danger:W("--danger"),info:W("--info"),palette:[W("--chart-1"),W("--chart-2"),W("--chart-3"),W("--chart-4"),W("--chart-5"),W("--chart-6"),W("--chart-7")]}}function E(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function ct(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(i=>P(C(i.datum),"dd.MM.")),s=t.map(i=>i.saldo);return s.map(i=>i>=0?n.success:n.danger),new j(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:i=>{const l=i.chart,{ctx:d,chartArea:r,scales:o}=l;return r?Jt(d,r,o.y,n):ae(n.accent,.14)},segment:{borderColor:i=>{const l=i.p0.parsed.y,d=i.p1.parsed.y,r=(l+d)/2;return r>=.02?n.success:r<=-.02?n.danger:n.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(i=>i>=.02?n.success:i<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...E(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,l,d)=>{const r=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);d.canvas.style.cursor=r.length>0?"pointer":"default"},onClick:(i,l,d)=>{const r=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(r.length>0){const o=r[0].index,c=t[o];c!=null&&c.datum&&(window.location.hash=`#/tag/${c.datum}`)}},plugins:{...E(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Aa(t)}},scales:{...E(n).scales,y:{...E(n).scales.y,ticks:{...E(n).scales.y.ticks,callback:i=>`${i>=0?"+":""}${i.toFixed(1).replace(".",",")}h`}}}}})}function le(e){return function(t){var m,v;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const p=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),p()}}if(a.opacity===0||!((m=a.dataPoints)!=null&&m.length)){s.style.opacity="0";return}const i=e({tooltip:a,chart:n});if(!i){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${et(i.title)}</div>`;for(const p of i.rows||[]){const k=p.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${et(p.label)}</span><span class="saldo-tooltip-value ${k}">${p.value}</span></div>`}(v=i.meta)!=null&&v.length&&(l+=`<div class="saldo-tooltip-meta">${i.meta.map(p=>`<span>${p}</span>`).join("")}</div>`),s.innerHTML=l;const d=n.canvas.getBoundingClientRect(),r=d.left+a.caretX,o=d.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const c=s.offsetWidth,u=s.offsetHeight,g=18;let h=r+g;h+c>window.innerWidth-8&&(h=r-g-c);let f=o-u/2;f<8&&(f=8),f+u>window.innerHeight-8&&(f=window.innerHeight-u-8),s.style.left=h+"px",s.style.top=f+"px",s.style.opacity="1"}}function ie(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ue(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function ge(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function Aa(e){return le(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:ue(a.saldo),klasse:ie(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:ue(a.diff),klasse:ie(a.diff)});const i=[];return a.tagestyp&&i.push(`Typ: ${et(a.tagestyp)}`),a.umbuchung&&i.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:P(C(a.datum),"EE, dd.MM.yyyy",{locale:G}),rows:s,meta:i}})}function et(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ea(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(d=>d.monatKey),s=a.map(d=>{const[r,o]=d.split("-"),c=new Date(parseInt(r,10),parseInt(o,10)-1,1);return P(c,"MMM yyyy",{locale:G})}),i=t.map(d=>{var r;return((r=d.glz)==null?void 0:r.saldoGesamt)??0}),l=t.map(d=>{var r;return((r=d.glz)==null?void 0:r.saldoVorperiode)??null});return new j(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:i,borderColor:n.accent,backgroundColor:d=>{const r=d.chart,{ctx:o,chartArea:c,scales:u}=r;return c?Jt(o,c,u.y,n):ae(n.accent,.14)},segment:{borderColor:d=>{const r=d.p0.parsed.y,o=d.p1.parsed.y,c=(r+o)/2;return c>=.05?n.success:c<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:i.map(d=>d>=.05?n.success:d<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...E(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(d,r,o)=>{const c=o.getElementsAtEventForMode(d,"index",{intersect:!1},!1);o.canvas.style.cursor=c.length>0?"pointer":"default"},onClick:(d,r,o)=>{const c=o.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(c.length>0){const u=c[0].index,g=a[u];g&&(window.location.hash=`#/kalender/${g}`)}},plugins:{...E(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:d})=>{const r=d.dataPoints[0].dataIndex,o=i[r],c=l[r],u=[{label:"Saldo Monatsende",value:ue(o),klasse:ie(o)}];if(c!=null){const g=+(o-c).toFixed(2);u.push({label:"Vorperiode",value:ue(c),klasse:ie(c)}),u.push({label:"Bewegung",value:ue(g),klasse:ie(g)})}return{title:s[r],rows:u}})}}}})}function Ta(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(l=>P(C(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),i=t.map(l=>_a(l.tagestyp,n));return new j(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:i,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...E(n),onHover:(l,d,r)=>{const o=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,d,r)=>{const o=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const c=t[o[0].index];c!=null&&c.datum&&(window.location.hash=`#/tag/${c.datum}`)}},plugins:{...E(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex,r=t[d],o=[{label:"Ist",value:ge(r.ist),klasse:"flat"}];r.soll!=null&&o.push({label:"Soll",value:ge(r.soll),klasse:"flat"}),r.diff!=null&&o.push({label:"Diff",value:ue(r.diff),klasse:ie(r.diff)});const c=r.tagestyp?[`Typ: ${r.tagestyp}`]:[];return{title:P(C(r.datum),"EE, dd.MM.yyyy",{locale:G}),rows:o,meta:c}})}},scales:{...E(n).scales,y:{...E(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function wt(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.filter(o=>{var c;return((c=o.zeitSpannen)==null?void 0:c.length)&&o.zeitSpannen.some(u=>u.von&&u.bis)}).map(o=>{const c=o.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:Z(h.von),bis:Z(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(c.length===0)return null;const u=Math.min(...c.map(h=>h.von)),g=Math.max(...c.map(h=>h.bis));return{...o,_spans:c,_minVon:u,_maxBis:g}}).filter(Boolean);if(!a.length)return;const s=o=>o.ist==null?n.fgMuted:o.ist>=7?n.success:n.danger,i={label:"Tages-Rahmen",data:a.map(o=>[o._minVon,o._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...a.map(o=>o._minVon))/60)*60-60),d=Math.min(24*60,Math.ceil(Math.max(...a.map(o=>o._maxBis))/60)*60+60),r=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return new j(e,{type:"bar",data:{labels:a.map(o=>P(C(o.datum),"dd.MM.")),datasets:[i]},options:{...E(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(o,c,u)=>{const g=u.getElementsAtEventForMode(o,"index",{intersect:!1},!1);u.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,c,u)=>{const g=u.getElementsAtEventForMode(o,"index",{intersect:!1},!1);if(g.length>0){const h=a[g[0].index];h!=null&&h.datum&&(window.location.hash=`#/tag/${h.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:o})=>{const c=a[o.dataPoints[0].dataIndex],u=[];c.ist!=null&&u.push({label:"Ist",value:ge(c.ist),klasse:ie(c.ist-7)}),c.soll!=null&&u.push({label:"Soll",value:ge(c.soll)});const g=[`Rahmen: ${r(c._minVon)} – ${r(c._maxBis)}`];return c._spans.length>1&&c._spans.forEach((h,f)=>g.push(`Block ${f+1}: ${h.vonStr} – ${h.bisStr}`)),c.pause!=null&&g.push(`Pause: ${Math.round(c.pause*60)} min`),{title:P(C(c.datum),"EE, dd.MM.yyyy",{locale:G}),rows:u,meta:g}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:d,ticks:{color:n.fgMuted,stepSize:60,callback:o=>r(o)},grid:{color:n.border}}}}})}function Pa(e,t){const n=re();oe(e);const a={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const d=lt(l.zeitSpannen);if(d<=0)continue;const r=Math.round(d*60),o=Math.floor(r/15)*15;a[o]=(a[o]??0)+1}const s=Object.keys(a).map(Number).sort((l,d)=>l-d),i=s.map(l=>a[l]);return new j(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:i,backgroundColor:n.palette[1],borderRadius:4}]},options:{...E(n),onHover:(l,d,r)=>{const o=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,d,r)=>{const o=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const c=s[o[0].index];c!=null&&(window.location.hash=`#/kalender/pause/${c}`)}},plugins:{...E(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[d]!=null?`${s[d]}–${s[d]+14} min`:""),rows:[{label:"Häufigkeit",value:`${i[d]} Tag${i[d]===1?"":"e"}`}]}})}}}})}function Fa(e,t){const n=re();oe(e);const a=["MO","DI","MI","DO","FR"],s={},i={};for(const r of a)s[r]=0,i[r]=0;for(const r of t)a.includes(r.wochentag)&&(r.ist==null||r.ist===0||(s[r.wochentag]+=r.ist,i[r.wochentag]+=1));const l=a.map(r=>i[r]>0?s[r]/i[r]:0),d={id:"wochentag-datalabels",afterDatasetsDraw(r){const{ctx:o,data:c,scales:u}=r;o.save(),o.fillStyle=n.fg,o.font="600 12px system-ui",o.textAlign="center",o.textBaseline="bottom",r.getDatasetMeta(0).data.forEach((h,f)=>{const m=c.datasets[0].data[f];if(!m||m===0)return;const v=m.toFixed(2).replace(".",",")+"h";o.fillText(v,h.x,h.y-6)}),o.restore()}};return new j(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...E(n),layout:{padding:{top:24}},onHover:(r,o,c)=>{const u=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);c.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(r,o,c)=>{const u=c.getElementsAtEventForMode(r,"nearest",{intersect:!0},!1);if(u.length>0){const g=a[u[0].index];g&&(window.location.hash=`#/kalender/wochentag/${g}`)}},plugins:{...E(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:r})=>{const o=r.dataPoints[0].dataIndex,c=a[o];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][o],rows:[{label:"Ø Stunden",value:ge(l[o])},{label:"Anzahl Tage",value:String(i[c]||0)}]}})}},scales:{...E(n).scales,y:{...E(n).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[d]})}function La(e,t){const n=re();oe(e);const a={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(a[l.tagestyp]=(a[l.tagestyp]??0)+1);const s=Object.keys(a),i=Object.values(a);return new j(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:s.map((l,d)=>n.palette[d%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(l,d,r)=>{const o=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);r.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,d,r)=>{const o=r.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const c=s[o[0].index];c&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(c)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const d=l.dataPoints[0].dataIndex,r=i.reduce((c,u)=>c+u,0),o=r?i[d]/r*100:0;return{title:s[d],rows:[{label:"Anzahl",value:`${i[d]} Tag${i[d]===1?"":"e"}`},{label:"Anteil",value:o.toFixed(1).replace(".",",")+"%"}]}})}}}})}function Ca(e,t){const n=re();oe(e);const a={};for(const o of t){const c=o.wocheKey;a[c]??(a[c]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[c].ist+=Ve(o),a[c].soll+=ot(o),a[c].days++,(!a[c].ersterTag||o.datum&&o.datum<a[c].ersterTag)&&(a[c].ersterTag=o.datum,a[c].monatKey=o.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const i=s.map(o=>+a[o].ist.toFixed(2)),l=s.map(o=>+a[o].soll.toFixed(2)),d=s.map(o=>{const c=a[o].ersterTag;return c?Ie(C(c)):""}),r=l.length?l.reduce((o,c)=>o+c,0)/l.length:35;return new j(e,{type:"line",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Wochenstunden",data:i,borderColor:n.accent,backgroundColor:o=>{const c=o.chart,{ctx:u,chartArea:g,scales:h}=c;return g?Xt(u,g,h.y,r,n):ae(n.fgMuted,.08)},segment:{borderColor:o=>{const c=o.p0.parsed.y,u=o.p1.parsed.y,g=l[o.p0.parsed.x]??35,h=l[o.p1.parsed.x]??35,f=(g+h)/2,m=(c+u)/2;return m>=f+.1?n.success:m<=f-.1?n.danger:n.fgMuted}},pointBackgroundColor:i.map((o,c)=>o>=l[c]+.1?n.success:o<=l[c]-.1?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,pointRadius:3,pointHoverRadius:6,pointHitRadius:20,tension:.25,fill:!0,borderWidth:2}]},options:{...E(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(o,c,u)=>{const g=u.getElementsAtEventForMode(o,"index",{intersect:!1},!1);u.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,c,u)=>{var h;const g=u.getElementsAtEventForMode(o,"index",{intersect:!1},!1);if(g.length>0){const f=g[0].index,m=s[f],v=m?(h=a[m])==null?void 0:h.monatKey:null;m&&v?window.location.hash=`#/kalender/${v}/${m}`:m&&(window.location.hash="#/kalender")}},plugins:{...E(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:o})=>{const c=o.dataPoints[0].dataIndex,u=s[c],g=i[c],h=l[c],f=+(g-h).toFixed(2),m=d[c];return{title:m?"KW "+u.split("-")[1]+" · "+m:"KW "+u.split("-")[1]+" · "+u.split("-")[0],rows:[{label:"Ist",value:ge(g),klasse:"flat"},{label:"Soll",value:ge(h),klasse:"flat"},{label:"Diff",value:ue(f),klasse:ie(f)}]}})}},scales:{...E(n).scales,y:{...E(n).scales.y,ticks:{...E(n).scales.y.ticks,callback:o=>`${o.toFixed(0)}h`}}}}})}function oe(e){const t=j.getChart(e);t&&t.destroy()}function Ba(){if(j.instances){for(const e of Object.values(j.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ae(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(d=>d+d).join(""):n,s=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),l=parseInt(a.slice(4,6),16);return`rgba(${s}, ${i}, ${l}, ${t})`}function Jt(e,t,n,a){return Xt(e,t,n,0,a)}function Xt(e,t,n,a,s){const{top:i,bottom:l}=t,d=e.createLinearGradient(0,i,0,l),r=n.min,o=n.max,c=o-r;if(c<=0)return ae(s.success,.14);let u=(o-a)/c;return u=Math.max(0,Math.min(1,u)),d.addColorStop(0,ae(s.success,.28)),d.addColorStop(Math.max(0,u-.001),ae(s.success,.06)),d.addColorStop(Math.min(1,u+.001),ae(s.danger,.06)),d.addColorStop(1,ae(s.danger,.28)),d}function _a(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const Yt=[];function I(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(i=>i.startsWith(":")?(a.push(i.slice(1)),"([^/]+)"):Ia(i)).join("/")+"/?$");Yt.push({pattern:e,regex:s,paramNames:a,render:t})}function Wa(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ee():window.location.hash=e}function Ka(e,{onNavigate:t}={}){window.addEventListener("hashchange",ee),ee.rootEl=e,ee.onNavigate=t,ee()}async function ee(){var a;Ba();const e=ee.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of Yt){const i=s.regex.exec(n);if(i){const l={};s.paramNames.forEach((d,r)=>l[d]=decodeURIComponent(i[r+1])),(a=ee.onNavigate)==null||a.call(ee,n),Va(n);try{e.classList.remove("view-enter"),await s.render({params:l,path:n,root:e}),e.classList.add("view-enter")}catch(d){console.error("Route render error:",d),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${kt(d.message||String(d))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${kt(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Va(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Ia(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function kt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Oa="modulepreload",Ha=function(e){return"/better-ess/"+e},xt={},dt=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(r=>{if(r=Ha(r),r in xt)return;xt[r]=!0;const o=r.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Oa,o||(u.as="script"),u.crossOrigin="",u.href=r,d&&u.setAttribute("nonce",d),document.head.appendChild(u),o)return new Promise((g,h)=>{u.addEventListener("load",g),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return s.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})},b=new On("zeitnachweis");b.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});b.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});b.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});b.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});b.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});b.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});b.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),i=new Date;n=i.getFullYear()-s.getFullYear()-(i<new Date(i.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function Na(){try{const{erkenneBerufsschulMuster:e}=await dt(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>is);return{erkenneBerufsschulMuster:l}},void 0),t=await b.tage.toArray();if(!t.length)return!1;const n=e(t),a=await b.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await b.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Ra(){try{const e=await b.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await b.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function ja(){const e=await b.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await b.einstellungen.delete("__migration_reset"),!0):!1}async function J(){return await b.profil.get("self")??Qt()}async function Be(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await b.profil.put(t),t}function Qt(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function qa(e,t=null){const n=await b.einstellungen.get(e);return n?n.value:t}async function Za(e,t){await b.einstellungen.put({key:e,value:t})}async function te(){return await b.tage.orderBy("datum").toArray()}async function Ua(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(o,c)=>c?o?o>c:!1:!0;let i=0,l=0,d=0,r=0;if(e.length){const o=e.map(g=>g.datum),c=await b.tage.bulkGet(o),u=[];for(let g=0;g<e.length;g++){const h={...e[g],_quellStichtag:a},f=c[g];!f||s(a,f._quellStichtag)?u.push(h):l++}u.length&&(await b.tage.bulkPut(u),i=u.length)}if(t.length){const o=t.map(g=>g.monatKey),c=await b.monate.bulkGet(o),u=[];for(let g=0;g<t.length;g++){const h={...t[g],_quellStichtag:a},f=c[g];!f||s(a,f._quellStichtag)?u.push(h):r++}u.length&&(await b.monate.bulkPut(u),d=u.length)}return{tage:i,monate:d,skippedTage:l,skippedMonate:r}}async function Oe(){return await b.monate.orderBy("monatKey").toArray()}async function Ga(e){return await b.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Me(){return await b.uploads.orderBy("hochladeDatum").last()}async function en(){return await b.uploads.orderBy("hochladeDatum").reverse().toArray()}async function xe(){return await b.fahrtgeldTemplate.get("self")}async function ut(e){await b.fahrtgeldTemplate.put({id:"self",...e})}async function Ja(){await b.fahrtgeldTemplate.delete("self")}async function Xa(){await Promise.all([b.profil.clear(),b.tage.clear(),b.monate.clear(),b.uploads.clear(),b.einstellungen.clear(),b.mailVorlagen.clear(),b.warnungDismissals.clear(),b.fahrtgeldTemplate.clear()])}async function tn(){await Promise.all([b.tage.clear(),b.monate.clear(),b.uploads.clear(),b.warnungDismissals.clear()])}async function Ya(){const[e,t,n,a,s,i,l]=await Promise.all([b.profil.toArray(),b.tage.toArray(),b.monate.toArray(),b.uploads.toArray(),b.einstellungen.toArray(),b.mailVorlagen.toArray(),b.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:i,warnungDismissals:l}}}async function Qa(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await b.transaction("rw",b.profil,b.tage,b.monate,b.uploads,b.einstellungen,b.mailVorlagen,b.warnungDismissals,async()=>{var n,a,s,i,l,d,r;(n=t.profil)!=null&&n.length&&await b.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await b.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await b.monate.bulkPut(t.monate),(i=t.uploads)!=null&&i.length&&await b.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await b.einstellungen.bulkPut(t.einstellungen),(d=t.mailVorlagen)!=null&&d.length&&await b.mailVorlagen.bulkPut(t.mailVorlagen),(r=t.warnungDismissals)!=null&&r.length&&await b.warnungDismissals.bulkPut(t.warnungDismissals)})}async function _e(e,t){await b.mailVorlagen.put({key:e,...t})}async function es(e){return await b.mailVorlagen.get(e)}async function He(){return await b.mailVorlagen.toArray()}async function ts(e,t){await b.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ns(){return await b.warnungDismissals.toArray()}function as(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function ss(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function nn(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${as(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${ss(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function an(e){var c;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const u of t)n[c=u.wochentag]??(n[c]=[]),n[u.wochentag].push(u);const a=[],s=[];let i=null;for(const[u,g]of Object.entries(n)){if(g.sort((m,v)=>m.datum.localeCompare(v.datum)),g.length<2)continue;const h=[];for(let m=1;m<g.length;m++)h.push(Vn(C(g[m].datum),C(g[m-1].datum)));const f=$t(h);f<=10?a.push(u):f<=18&&(s.push(u),(!i||C(g[0].datum)<C(i))&&(i=g[0].datum))}const l=t.map(u=>u.ist).filter(u=>u!=null&&u>0),d=$t(l),r=d!=null?Math.round(d*4)/4:null,o=r!=null&&r<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:i,stundenProTag:r,halbtags:o}}function $t(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function Ne(e,t){var s,i;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((i=t.wochentage14Taegig)!=null&&i.includes(a)&&t.referenzDatum14Taegig){const l=C(t.referenzDatum14Taegig),d=In(e,l,{weekStartsOn:1});if(d>=0&&d%2===0)return!0}return!1}function sn(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const is=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:an,erwarteteBerufsschulStunden:sn,istBerufsschulTagLautMuster:Ne},Symbol.toStringTag,{value:"Module"})),be={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Re(e,t,n,a=new Set){var c,u;const s=[],i=n??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const d=C(e[0].datum),r=i;for(let g=new Date(d);g<=r;g=it(g,1)){if(rt(g))continue;const h=P(g,"yyyy-MM-dd"),f=l.get(h),m=Da(g,r);if(!f||!f.tagestyp&&!f.ist&&(((c=f.zeitSpannen)==null?void 0:c.length)??0)===0){if(Ne(g,t.berufsschulMuster)){const p=m>=4?"error":m>=2?"warn":"info";ve(s,a,{datum:h,wochentag:(f==null?void 0:f.wochentag)??Ae(g),typ:"bs_tag_fehlt",schweregrad:p,titel:`Berufsschultag nicht eingetragen: ${L(g)}`,beschreibung:`Laut deinem Profil hast du am ${be[Ae(g)]}, ${L(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${m>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:m,mailVorlageKey:p==="error"?"bs_tag_fehlt":null})}else{const p=m>=4?"error":m>=2?"warn":"info";ve(s,a,{datum:h,wochentag:Ae(g),typ:"stempelzeit_fehlt",schweregrad:p,titel:`Keine Stempelzeit am ${L(g)}`,beschreibung:`Am ${be[Ae(g)]}, ${L(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${m>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:m,mailVorlageKey:p==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const p=sn(t.berufsschulMuster,f.soll);p!=null&&f.ist<p-.5&&ve(s,a,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${L(g)}`,beschreibung:`Am ${be[f.wochentag]}, ${L(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${p.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:p,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((u=f.zeitSpannen)==null?void 0:u.length)>1&&h>="2026-04-01"){const p=Rt(f,t);(p==null?void 0:p.typ)==="fehler_zeitwirtschaft"&&p.unrechtmaessigerVerlustMin>=5?ve(s,a,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:p.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${L(g)})`,beschreibung:`Am ${be[f.wochentag]}, ${L(g)} wurden ${Math.round(p.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(p.gestempeltePause*60)} min, gesetzlich nötig (${p.gesetz.toUpperCase()}): ${Math.round(p.gesetzlichePflicht*60)} min. Differenz von ${p.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:p.unrechtmaessigerVerlustMin,abgezogen:p.abgezogenePause,gestempelt:p.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(p==null?void 0:p.typ)==="aufstockung_legal"&&p.aufstockungMin>=10&&ve(s,a,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${L(g)}) — ${p.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${be[f.wochentag]}, ${L(g)} hast du nur ${Math.round(p.gestempeltePause*60)} min Pause gemacht. Gesetz (${p.gesetz.toUpperCase()}) schreibt ${Math.round(p.gesetzlichePflicht*60)} min vor. Fehlende ${p.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const o={error:0,warn:1,info:2};return s.sort((g,h)=>{const f=o[g.schweregrad]-o[h.schweregrad];return f!==0?f:h.datum.localeCompare(g.datum)}),s}function rn(e,t=new Set){var a,s,i,l;const n=[];for(const d of e){const r=((a=d.glz)==null?void 0:a.saldoVorperiode)??0,o=((s=d.glz)==null?void 0:s.saldoAktuellePeriode)??0,c=((i=d.glz)==null?void 0:i.umgebuchteStunden)??0,u=(l=d.glz)==null?void 0:l.saldoGesamt;if(u==null)continue;const g=r+o+c,h=Math.abs(u-g);if(h>.03){const f=`${d.monatKey}-saldo_plausi`;t.has(f)||n.push({datum:`${d.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${d.monatKey}`,beschreibung:`Rechnung: Vorperiode ${r.toFixed(2)} + aktuelle Periode ${o.toFixed(2)} + umgebucht ${c.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:g,ist:u})}}return n}function ve(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Ae(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const rs={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},$e={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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

Vielen Dank!`},fahrgeld_abgabe:{key:"fahrgeld_abgabe",titel:"Fahrgelderstattung abgeben",beschreibung:"Mail an die Personalabteilung mit der monatlichen Fahrgelderstattungs-Excel.",betreff:"Fahrgelderstattung {monat_jahr}",text:`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`}};function ze(e,t){const n=$e[e];return n?{...n,...t??{}}:null}function ln(e,t){const n=St(e.text,t);return{betreff:St(e.betreff,t),text:n}}function St(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function gt(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?Ut(n).split(", ")[1]:"",wochentag:rs[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ht(e,t,n){const a=ln(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",i=new URLSearchParams;return i.set("subject",a.betreff),i.set("body",a.text),`mailto:${s}?${i.toString().replace(/\+/g,"%20")}`}let ls=0;function R(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++ls,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function We(e){return R(e,{type:"error",duration:6e3})}function T(e){return R(e,{type:"success"})}const os=3,cs=2.5,ds={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function je(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const i of t.warnungen??[])n.has(i.datum)||n.set(i.datum,[]),n.get(i.datum).push(i);const a=[];let s=null;for(const i of e)(!s||s.key!==i.wocheKey)&&(s={key:i.wocheKey,tage:[]},a.push(s)),s.tage.push(i);return`<div class="tages-liste">${a.map(i=>us(i,n)).join("")}</div>`}function us(e,t){var c;const n=e.tage.reduce((u,g)=>u+Ve(g),0),a=e.tage.reduce((u,g)=>u+(g.diff??0),0),s=(c=e.tage[0])==null?void 0:c.datum,i=s?Ie(C(s)):"",l=e.key?e.key.split("-")[1]:"?",d=a>.05?"pos":a<-.05?"neg":"flat",r=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",o=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${w(l)}</span>
          <span class="woche-header-range tabular">${w(i)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${d}">${r}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>gs(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function gs(e,t=[]){const n=e.diff??0,a=n>0,s=a?os:cs,i=Math.min(150,Math.abs(n)/s*50),l=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",d=Nt(e.zeitSpannen),r=e.saldo??0,o=t.length>0,c=o?fs(t):"",u=o?t.map(h=>`${h.titel}${h.beschreibung?`
`+h.beschreibung:""}`).join(`

`):"",g=o?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${o?" has-warn severity-"+g:""}">
      <div class="tag-row-datum">
        <div class="tabular">${w(L(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${hs(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${o?"false":"true"}">
        ${o?`<span class="tag-row-warn severity-${g}" title="${w(u)}">${c}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${ms(e.tagestyp)}">${w(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${nn(d,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const h=Ce(e.ist),[f,m]=h.split(":");return e.ist<=0?`<div class="ist-wert">${h}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${f}" title="${f} Stunden kopieren">${f}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${m}" title="${m} Minuten kopieren">${m}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Ce(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${i}%; background: ${l};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
        ${n!==0?(a?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${r>=0?"+":""}${r.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function hs(e){return ds[e]??e}function fs(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function ms(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ft(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a);const s=n.textContent;n.classList.add("ok"),n.textContent="✓",setTimeout(()=>{n.classList.remove("ok"),n.textContent=s},800)}catch{T(`Bitte kopieren: ${a}`)}}))}const Mt=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function zt({root:e}){const[t,n,a,s,i,l,d]=await Promise.all([J(),Oe(),te(),ns(),qa("dashboardZeitraum",14),He(),Me()]),r=Object.fromEntries(l.map(x=>[x.key,x]));if(a.length===0){e.innerHTML=bs();return}const o=jt(a,n),c=o.length;let u=i;typeof u=="number"&&u>c&&(u="alles");const g=new Set(s.map(x=>x.key)),h=d!=null&&d.stichtagAuswertung?new Date(d.stichtagAuswertung):new Date,f=Re(a,t,h,g),m=rn(n,g),v=[...f,...m],p=$a(o),k=p>.05?"positive":p<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Ke(L(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${k}">${se(p,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Mt.map(x=>{const D=typeof x.key=="number"&&x.key>c;return`<button type="button" data-key="${x.key}" class="${u===x.key?"active":""}" ${D?'disabled style="opacity:0.4"':""}>${x.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${v.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${v.slice(0,8).map(x=>ps(x,t,r)).join("")}
        ${v.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${v.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${Mt.map(x=>{const D=typeof x.key=="number"&&x.key>c;return`<button type="button" data-key="${x.key}" class="${u===x.key?"active":""}" ${D?'disabled style="opacity:0.4"':""}>${x.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Dt(u,e,o,v);const F=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");F().forEach(x=>{x.addEventListener("click",async()=>{if(x.disabled)return;const D=x.getAttribute("data-key"),K=D==="alles"?"alles":parseInt(D,10);F().forEach(H=>H.classList.toggle("active",H.getAttribute("data-key")===D)),await Za("dashboardZeitraum",K),Dt(K,e,o,v)})}),e.addEventListener("click",async x=>{const D=x.target.closest(".ist-part");if(D){x.preventDefault(),x.stopPropagation();const y=D.getAttribute("data-val");try{await navigator.clipboard.writeText(y);const S=D.textContent;D.classList.add("ok"),D.textContent="✓",setTimeout(()=>{D.classList.remove("ok"),D.textContent=S},800)}catch{T(`Bitte kopieren: ${y}`)}return}const K=x.target.closest(".btn-dismiss");if(!K)return;const H=K.getAttribute("data-datum"),M=K.getAttribute("data-typ");if(!H||!M)return;await ts(H,M),T("Warnung ausgeblendet.");const V=K.closest(".alert");V&&(V.style.display="none")})}function Dt(e,t,n,a=[]){const s=xa(n,e),i=Sa(s);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");ct(o,s)});const l=t.querySelector("#hero-bewegung");if(l){const o=i>.05?"up":i<-.05?"down":"flat",c=i>.05?"↑":i<-.05?"↓":"→";l.className=`saldo-trend ${o}`,l.innerHTML=`${c} ${Math.abs(i)<.01?"Unverändert":se(i,{signed:!0})} im Zeitraum`}const d=t.querySelector("#tage-info");if(d){const o=s.length;d.textContent=`${o} ${o===1?"Tag":"Tage"}`}const r=t.querySelector("#tage-liste");r&&(r.innerHTML=je(s.slice().reverse(),{warnungen:a.filter(o=>s.some(c=>c.datum===o.datum))}))}function ps(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=ze(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=gt(t,e);s=ht(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${Ke(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Ke(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Je(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${Je(e.datum)}" data-typ="${Je(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function bs(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function Ke(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Je(e){return Ke(e)}const vs="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";Hn.workerSrc=vs;const At={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},ys=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function ws(e){var r,o;const n=await Nn({data:e}).promise,a=[];let s=0;for(let c=1;c<=n.numPages;c++){const g=await(await n.getPage(c)).getTextContent();s+=g.items.length;const h=ks(g.items);for(const f of h)a.push({page:c,text:f})}const i=xs(a),{tage:l,monate:d}=$s(a);try{const c=await n.getMetadata();i.producer=((r=c==null?void 0:c.info)==null?void 0:r.Producer)??null,i.creator=((o=c==null?void 0:c.info)==null?void 0:o.Creator)??null}catch{}return i.totalTextItems=s,{meta:i,tage:l,monate:d}}function ks(e){if(!e.length)return[];const t=e.slice().sort((l,d)=>{const r=d.transform[5]-l.transform[5];return Math.abs(r)>2?r:l.transform[4]-d.transform[4]}),n=[];let a=null,s=[];const i=3;for(const l of t){const d=l.transform[5];a==null||Math.abs(d-a)<=i?(s.push(l),a==null&&(a=d)):(n.push(Et(s)),s=[l],a=d)}return s.length&&n.push(Et(s)),n.filter(l=>l.trim().length>0)}function Et(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function xs(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const i=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);l&&(t.zeitraumVon=ke(l[1]),t.zeitraumBis=ke(l[2]));const d=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i);if(d&&(t.stichtagAuswertung=ke(d[1])),/Personalnummer/i.test(i)&&/Kostenstelle/i.test(i)){const r=(((n=e[s+1])==null?void 0:n.text)??"").trim();let o=r.split(/\s{2,}/);o.length<3&&(o=r.split(/\s+/)),o.length>=3&&/^\d/.test(o[0])&&(t.personalnummer=o[0],t.kostenstelle=o[1],t.personalbereich=o[2])}if(/Einstellungsdatum/i.test(i)&&/Mitarbeiterkreis/i.test(i)){const r=(((a=e[s+1])==null?void 0:a.text)??"").trim();let o=r.split(/\s{2,}/);o.length<3&&(o=r.split(/\s+/)),o.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(o[0])&&(t.einstellungsdatum=ke(o[0]),t.mitarbeiterkreis=o[1],t.arbeitszeitplanregel=o[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(i))for(let r=s+1;r<Math.min(s+8,e.length);r++){const o=e[r].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(o)&&!/kanarya/i.test(o)&&!/tel/i.test(o)){t.name=o;break}}}return t}function $s(e,t){var r;const n=[],a=[];let s=null,i=null,l=!1,d=0;for(;d<e.length;){const o=e[d].text,c=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(o);if(c){const f=c[1].trim(),m=parseInt(c[2],10),v=At[f]??At[f.replace("ä","ae")]??null;v&&(s={jahr:m,monat:v,monatKey:`${m}-${String(v).padStart(2,"0")}`},l=!0,i=null),d++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(o)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(o),m=ke(f[1]);i={monatKey:(s==null?void 0:s.monatKey)??Gt(m),stichtag:m,glz:{},flexi:{},zeitkonten:{},raw:{}},d=Ss(e,d+1,i),a.push(i);continue}let u=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(o.trim());if(g&&s){const f=parseInt(g[1],10);l&&f>=20?u=Ds(s):f<=15&&(l=!1)}const h=Tt(o,u);if(h){const f=[];let m=d+1;for(;m<e.length;){const p=e[m].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||Tt(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const k=Ms(p);if(k){f.push(k),m++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){d=m;continue}(h.ist!=null||h.soll!=null||(((r=h.zeitSpannen)==null?void 0:r.length)??0)>0||h.tagestyp!=null)&&n.push(h),d=m;continue}d++}return{tage:n,monate:a}}function Ss(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const i=e[a].text.trim();if(/^Monat:\s/.test(i)||/^Einzelergebnisse\s/.test(i)||/^Tag\b/.test(i)||/^Wochensumme/.test(i)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(i)||/^Übersicht für den Zeitraum/i.test(i)||/^Abwesenheitsansprüche/i.test(i))break;s.lastIndex=0;let l;for(;(l=s.exec(i))!=null;){const d=l[1],r=l[2].trim(),o=Ht(l[3]);n.raw[d]={beschreibung:r,wert:o},d==="0008"&&(n.glz.saldoVorperiode=o),d==="8016"&&(n.glz.saldoAktuellePeriode=o),d==="9802"&&(n.glz.umgebuchteStunden=o),d==="0005"&&(n.glz.saldoGesamt=o),d==="9803"&&(n.glz.ueberzaehligeStd=o),d==="0050"&&(n.zeitkonten.produktivstunden=o),d==="9011"&&(n.flexi.jahreskontoVorperiode=o),d==="9010"&&(n.flexi.jahreskontoSaldo=o),d==="9020"&&(n.flexi.langzeitkontoSaldo=o),d==="9203"&&(n.zeitkonten.azMonatsendeUeber216=o),d==="9207"&&(n.zeitkonten.auszahlungBav=o),d==="9205"&&(n.zeitkonten.summeAuszahlung=o)}if(a++,a-t>80)break}return a}function Tt(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),i=a[2],l=(a[3]??"").trim();let d=t.jahr,r=t.monat;const o=new Date(d,r-1,s),c={datum:za(o),datumDate:o.toISOString(),wochentag:i,tagNr:s,monatKey:Gt(o),wocheKey:Ma(o),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return l?(zs(l,c),c):(c.tagestyp=["SA","SO"].includes(i)?"Wochenende":null,c)}function Ms(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function zs(e,t){let n=null,a=e;for(const c of ys)if(e.startsWith(c)){n=c,a=e.slice(c.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=As(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),i=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let d=0;for(;s[d]&&i.test(s[d])&&s[d+1]&&i.test(s[d+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[d],bis:s[d+1]}),d+=2;const r=[];for(;d<s.length&&l.test(s[d]);){const c=Ht(s[d]);c!=null&&r.push(c),d++}let o=s[d];r.length>=5?([t.ist,t.soll,t.diff,t.pause]=r,o||(o=String(r[4]))):r.length===4?[t.ist,t.soll,t.diff,t.pause]=r:r.length===3?[t.ist,t.soll,t.diff]=r:r.length===2?[t.ist,t.soll]=r:r.length===1&&(t.ist=r[0]),o&&(t.tazp=String(o))}function Ds(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function As(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function U(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:i="default"}=t;return Es({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:i,kind:"confirm"})}function Es({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:i}){return new Promise(l=>{const d=document.activeElement,r=document.createElement("div");r.className="app-dialog-overlay",r.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${Te(t)}</h3>
        <div class="app-dialog-message">${Ts(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${Te(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${Te(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("is-open"));const o=r.querySelector(".app-dialog-confirm"),c=r.querySelector(".app-dialog-cancel"),u=h=>{r.classList.remove("is-open"),setTimeout(()=>{if(r.remove(),document.removeEventListener("keydown",g),d&&d.focus)try{d.focus()}catch{}l(h)},180)},g=h=>{h.key==="Escape"?(h.preventDefault(),u(!1)):h.key==="Enter"&&(h.preventDefault(),u(!0))};o==null||o.addEventListener("click",()=>u(!0)),c==null||c.addEventListener("click",()=>u(!1)),r.addEventListener("click",h=>{h.target===r&&u(!1)}),document.addEventListener("keydown",g),setTimeout(()=>o==null?void 0:o.focus(),50)})}function Te(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ts(e){return Te(e).replace(/\n/g,"<br>")}const on="better-ess-tour-completed",mt=typeof import.meta<"u"?"/better-ess/":"/",Ps=mt+"tutorial/speichern.png",Fs=mt+"tutorial/download.png",Ls=mt+"tutorial/zeitraum.png",fe=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await Pe("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Fs,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Ls,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Ps,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await Pe(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await Pe("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],Pt=fe.findIndex(e=>e.icon==="✨");let A=null,ce=null;function cn(){A===null&&(pt(),A={idx:0},Q())}function Cs(e){return e?!1:!localStorage.getItem(on)}function Bs(){localStorage.setItem(on,"1")}function _s(){return A!==null}function pt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),ce&&(ce(),ce=null),A=null}function Ee(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(v=>{v&&(v.style.opacity="0")});let h=t;!h?(h=document.createElement("div"),h.className="tour-blur-frame full",document.body.appendChild(h)):h.style.opacity="1";const m=document.querySelector(".tour-highlight-border");m&&(m.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,i=Math.max(0,a.left-s),l=Math.max(0,a.top-s),d=a.width+s*2,r=a.height+s*2,o=window.innerWidth,c=window.innerHeight,u={top:{top:0,left:0,width:o,height:l},left:{top:l,left:0,width:i,height:r},right:{top:l,left:i+d,width:o-(i+d),height:r},bottom:{top:l+r,left:0,width:o,height:c-(l+r)}};for(const[h,f]of Object.entries(u)){let m=n[Object.keys(u).indexOf(h)];m||(m=document.createElement("div"),m.className="tour-blur-frame",m.dataset.side=h,document.body.appendChild(m)),m.style.top=f.top+"px",m.style.left=f.left+"px",m.style.width=Math.max(0,f.width)+"px",m.style.height=Math.max(0,f.height)+"px",m.style.opacity=f.width<=0||f.height<=0?"0":"1"}let g=document.querySelector(".tour-highlight-border");g||(g=document.createElement("div"),g.className="tour-highlight-border",document.body.appendChild(g)),g.style.top=l+"px",g.style.left=i+"px",g.style.width=d+"px",g.style.height=r+"px",g.style.opacity="1",g.style.display=""}function bt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
      <span class="tour-pointer-ripple"></span>
      <svg class="tour-pointer-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="tour-pointer-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.5"/>
          </filter>
        </defs>
        <path d="M 6 4 L 24 14 L 15 15.5 L 19 25 L 16 26.5 L 12 17 L 6 22 Z"
              fill="white" stroke="#0a0d1a" stroke-width="1.4" stroke-linejoin="round"
              filter="url(#tour-pointer-shadow)"/>
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Ws(e){const t=bt(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function Ft(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Ks(e){const t=bt();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function Pe(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function Q(){var d,r,o;if(!A)return;const e=A.overrideStep||fe[A.idx];if(A.overrideStep=null,!e){tt();return}if(ce&&(ce(),ce=null),e.type==="download-modal")return Ft(),Ee(null),Vs(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await Pe(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const c=e.fallback;if(c.onBefore)try{await c.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return A.overrideStep=c,Q()}if(!t&&e.optional)return A.idx++,Q();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),A.idx++,Q();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(c=>setTimeout(c,250)),Ee(t),bt(),requestAnimationFrame(()=>Ws(t))}else Ee(null)}else Ft(),Ee(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=A.idx===0,s=A.idx===fe.length-1,i=!!e.waitForEvent,l=i?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${fe.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${i?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Is(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const c=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{c&&(c.style.opacity="1"),n.style.opacity="1"})}if((d=n.querySelector(".tour-skip"))==null||d.addEventListener("click",()=>{tt()}),a||(r=n.querySelector(".tour-prev"))==null||r.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Q()}),!i)(o=n.querySelector(".tour-next"))==null||o.addEventListener("click",async()=>{if(e.autoClick&&t){await Ks();try{const c=t.getAttribute("href");c&&c.startsWith("#/")?window.location.hash=c.slice(1):t.click()}catch(c){console.warn("tour autoClick error:",c)}if(e.onAfterClick)try{await e.onAfterClick()}catch(c){console.warn("tour onAfterClick error:",c)}else await new Promise(c=>setTimeout(c,350))}else if(e.onNext)try{await e.onNext()}catch(c){console.warn("tour onNext error:",c)}A.idx++,await Q()});else{const c=A.idx,u=c<Pt,g=async()=>{pt(),document.querySelectorAll(".upload-modal-overlay").forEach(h=>h.remove()),await new Promise(h=>setTimeout(h,300)),A={idx:u?Pt:c+1},await Q()};document.addEventListener(e.waitForEvent,g,{once:!0}),ce=()=>document.removeEventListener(e.waitForEvent,g)}}function Vs(e){var a,s,i;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=A.idx===0;A.idx,fe.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${A.idx+1} / ${fe.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-download-image-wrap">
      <img src="${e.image}" alt="Speichern-Button im PDF-Viewer">
    </div>
    <div class="tour-download-points">
      ${e.points.map(l=>`
        <div class="tour-download-point ${l.kind==="bad"?"bad":""}">
          <span class="tour-download-point-icon">${l.icon}</span>
          <span>${l.text}</span>
        </div>`).join("")}
    </div>
    <div class="tour-popover-actions" style="margin-top:14px;">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{tt()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{A.idx=Math.max(0,A.idx-1),await Q()}),(i=t.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{A.idx++,await Q()})}function Is(e,t,n){const a=t.getBoundingClientRect(),s=16,i=e.offsetWidth||360,l=e.offsetHeight||220,d=window.innerWidth,r=window.innerHeight,o=[n,"right","bottom","left","top"];let c=null;for(const h of o)if((()=>{switch(h){case"right":return a.right+s+i<=d;case"left":return a.left-s-i>=0;case"bottom":return a.bottom+s+l<=r;case"top":return a.top-s-l>=0}})()){c=h;break}c=c||n;let u,g;switch(c){case"right":u=a.top+a.height/2-l/2,g=a.right+s;break;case"left":u=a.top+a.height/2-l/2,g=a.left-i-s;break;case"bottom":u=a.bottom+s,g=a.left+a.width/2-i/2;break;case"top":default:u=a.top-l-s,g=a.left+a.width/2-i/2;break}u=Math.max(s,Math.min(r-l-s,u)),g=Math.max(s,Math.min(d-i-s,g)),e.style.position="fixed",e.style.top=u+"px",e.style.left=g+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function tt(){pt(),Bs()}async function Os({root:e}){var i;const t=await en(),n=await J();e.innerHTML=`
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
            <img class="zoomable" src="/better-ess/tutorial/speichern.png" alt="Speichern-Button im PDF-Viewer" title="Klick für Vollbild" style="width: 100%; max-width: 600px; border: 1px solid var(--border); border-radius: var(--radius-sm); display: block; cursor: zoom-in;" />
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':un(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");a.addEventListener("click",()=>s.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async l=>{var r;l.preventDefault(),a.classList.remove("drag");const d=(r=l.dataTransfer.files)==null?void 0:r[0];d&&await Ct(d,e,n)}),s.addEventListener("change",async l=>{var r;const d=(r=l.target.files)==null?void 0:r[0];d&&await Ct(d,e,n)}),e.querySelector("#btn-export").addEventListener("click",Rs),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",js),e.querySelector("#btn-clear-parsed").addEventListener("click",Ns),e.querySelector("#btn-reset").addEventListener("click",qs),(i=e.querySelector("#btn-tour-restart"))==null||i.addEventListener("click",()=>cn()),Hs()}let Lt=!1;function Hs(){Lt||(Lt=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&dn(t.src,t.alt)}))}function dn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&a()};n.addEventListener("click",i=>{(i.target===n||i.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Ns(){await U("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await tn(),T("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function un(e){return`
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
            <td>${w(Zs(t.hochladeDatum))}</td>
            <td>${w(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?w(L(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?w(L(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?w(L(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Ct(e,t,n){var i,l,d,r;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){ye({type:"error",title:"Falscher Dateityp",desc:`<strong>${w(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){ye({type:"error",title:"Datei zu groß",desc:`<strong>${w(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${w(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const o=await e.arrayBuffer(),c=await ws(o);if(c.tage.length===0&&!c.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",ye({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(i=c.meta)==null?void 0:i.producer}),We("PDF enthält keinen extrahierbaren Text.");return}const u=await Me(),g=u==null?void 0:u.personalnummer,h=c.meta.personalnummer;if(g&&h&&g!==h){const F=(u==null?void 0:u.name)||`Personalnr. ${g}`,x=c.meta.name||`Personalnr. ${h}`;if(!await U(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${F}
Jetzt:  ${x}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${w(F)}) erneut hoch.</p>
            </div>
          </div>`;return}await tn();const K=await J();await Be({...K,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const f=await Ua(c.tage,c.monate,c.meta.stichtagAuswertung);(f.skippedTage>0||f.skippedMonate>0)&&console.info(`[upload] ${f.skippedTage} Tage und ${f.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Ga({dateiname:e.name,personalnummer:c.meta.personalnummer??null,name:c.meta.name??null,zeitraumVon:((l=c.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((d=c.meta.zeitraumBis)==null?void 0:d.toISOString())??null,stichtagAuswertung:((r=c.meta.stichtagAuswertung)==null?void 0:r.toISOString())??null,tageCount:c.tage.length,monateCount:c.monate.length});const m=await te(),v=an(m),p={...Qt(),...n};(v.wochentageWoechentlich.length>0||v.wochentage14Taegig.length>0)&&(p.berufsschulMuster=v),await Be(p),a.innerHTML="",_s()||ye({type:"success",title:"PDF erfolgreich eingelesen",desc:c.meta.zeitraumVon?`Zeitraum: ${L(c.meta.zeitraumVon)} – ${L(c.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:c.tage.length,label:"Tage"},{num:c.monate.length,label:"Monatsübersichten"}]}),T(`PDF verarbeitet: ${c.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:c.tage.length,monateCount:c.monate.length}}));const k=await en();t.querySelector("#uploads-list").innerHTML=un(k)}catch(o){console.error(o),a.innerHTML="",ye({type:"error",title:"Fehler beim Parsen",desc:w(o.message||String(o)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),We("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Rs(){try{const e=await Ya(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),T("Backup heruntergeladen.")}catch(e){We(`Export fehlgeschlagen: ${e.message}`)}}async function js(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await U("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await Qa(s),T("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){We(`Import fehlgeschlagen: ${a.message}`)}}async function qs(){await U("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await U("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await Xa(),T("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Zs(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function ye(e){const{type:t,title:n,desc:a,hint:s,screenshot:i,stats:l,producer:d}=e,r=document.createElement("div");r.className="upload-modal-overlay";const o=`
    <svg class="upload-check-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-check-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-check-circle" cx="26" cy="26" r="24"/>
      <path class="upload-check-mark" d="M14 27 L22 35 L38 18"/>
    </svg>`,c=`
    <svg class="upload-cross-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-cross-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-cross-circle" cx="26" cy="26" r="24"/>
      <line class="upload-cross-line" x1="17" y1="17" x2="35" y2="35"/>
      <line class="upload-cross-line upload-cross-line-2" x1="35" y1="17" x2="17" y2="35"/>
    </svg>`,u=l!=null&&l.length?`
    <div class="upload-modal-stats">
      ${l.map(p=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${w(String(p.num))}</div>
          <div class="upload-modal-stat-label">${w(p.label)}</div>
        </div>
      `).join("")}
    </div>`:"",g=i?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=d?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${w(d)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;r.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?o:c}
      </div>
      <h2 class="upload-modal-title">${w(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${g}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(r);const m=()=>{r.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>r.remove(),150),document.removeEventListener("keydown",v)},v=p=>{p.key==="Escape"&&m()};document.addEventListener("keydown",v),r.addEventListener("click",p=>{if(p.target===r){m();return}if(p.target.closest(".upload-modal-close-btn")){m();return}if(p.target.closest(".upload-modal-actions a, .upload-modal-actions button")){m();return}const k=p.target.closest("img.zoomable");k&&dn(k.src,k.alt)})}const Bt={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Us({root:e}){var s,i,l,d,r;const t=await J(),n=t.berufsschulMuster??{},a=(((s=n.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((i=n.wochentage14Taegig)==null?void 0:i.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${_t(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${_t(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${a?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=n.wochentageWoechentlich)==null?void 0:l.map(o=>Bt[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((d=n.wochentage14Taegig)==null?void 0:d.map(o=>Bt[o]).join(", "))||"—"}</strong>${n.referenzDatum14Taegig?` <span class="hint">(Anker: ${L(new Date(n.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${n.stundenProTag!=null?n.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${n.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${n.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((r=n.stundenProTag)==null?void 0:r.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var g,h;o.preventDefault();const c=new FormData(o.target),u={...t,ueber18:c.get("ueber18")==="on",zeitwirtschaftEmail:((g=c.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=c.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await Be(u),T("Profil gespeichert.")})}function _t(e){return String(e??"").replace(/"/g,"&quot;")}async function Gs({params:e,root:t}){var o,c,u;const n=e.datum,a=await b.tage.get(n),s=await J();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const i=C(n),l=a.tagestyp==="Stempelzeit"?Rt(a,s):null,d=Ne(i,s.berufsschulMuster),r=Nt(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Ut(i)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(o=a.wocheKey)==null?void 0:o.split("-")[1]}</p>

    ${r?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${nn(r,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?Ce(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?se(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(c=a.zeitSpannen)!=null&&c.length?a.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${we(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${Js(a.tagestyp)}">${we(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${d?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${we(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${we(a.monatKey)}</div>
        </div>
      </div>

      ${l&&!l.keinAnspruch?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(u=l.arbeitszeitOhnePause)==null?void 0:u.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((l.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((l.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((l.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${l.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((l.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(l.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${l.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${l.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${l.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${l.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${we(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Js(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function we(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Xs=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function Ys({root:e}){var i;const[t,n]=await Promise.all([te(),Oe()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}let a=t.length>30?30:"alles";e.innerHTML=`
    <h1 class="view-title">Analytics</h1>
    <p class="view-subtitle">${t.length} Tage über ${n.length} Monatsübersichten visualisiert.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf pro Monat</h2>
      <div class="chart-wrap tall"><canvas id="c-saldo"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Wochenstunden</h2>
      <p class="hint" style="margin-top: -4px;">Pro KW deine Ist-Stunden — gruen = ueber Soll, rot = unter.</p>
      <div class="chart-wrap"><canvas id="c-wochen"></canvas></div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 12px; align-items: center;">
        <div>
          <h2 style="margin: 0;">Start-/Endzeiten über Zeit</h2>
          <p class="hint" style="margin: 4px 0 0;">Grün = ≥7h gearbeitet, Rot = weniger.</p>
        </div>
        <div class="segmented" id="startend-zeitraum">
          ${Xs.map(l=>{const d=typeof l.key=="number"&&l.key>t.length;return`<button type="button" data-key="${l.key}" class="${a===l.key?"active":""}" ${d?'disabled style="opacity:0.4"':""}>${l.label}</button>`}).join("")}
        </div>
      </div>
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
        <h2>Tagesbalken (letzte 30)</h2>
        <div class="chart-wrap"><canvas id="c-alle-tage"></canvas></div>
      </div>
    </div>
  `;const s=()=>a==="alles"?t:t.slice(-a);requestAnimationFrame(()=>{Ea(e.querySelector("#c-saldo"),n),Ca(e.querySelector("#c-wochen"),t),wt(e.querySelector("#c-startend"),s()),Fa(e.querySelector("#c-wochentag"),t),Pa(e.querySelector("#c-pausen"),t),La(e.querySelector("#c-donut"),t),Ta(e.querySelector("#c-alle-tage"),t.slice(-30))}),(i=e.querySelector("#startend-zeitraum"))==null||i.addEventListener("click",l=>{const d=l.target.closest("button[data-key]");if(!d||d.disabled)return;const r=d.getAttribute("data-key"),o=r==="alles"?"alles":parseInt(r,10);o!==a&&(a=o,e.querySelectorAll("#startend-zeitraum button").forEach(c=>c.classList.toggle("active",c===d)),wt(e.querySelector("#c-startend"),s()))})}function Qs(e){return String(e??"").replace(/"/g,"&quot;")}async function Xe({params:e,root:t}){const[n,a,s,i,l]=await Promise.all([te(),Oe(),J(),Me(),He()]),d=Object.fromEntries(l.map(y=>[y.key,y]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const r=[...new Set(n.map(y=>y.monatKey))].sort(),o=e.yyyymm,c=r.includes(o)?o:r[r.length-1],u=n.filter(y=>y.monatKey===c),g=[...new Set(u.map(y=>y.wocheKey))].sort(),h=e.yyyykw,f=g.includes(h)?h:null,m=r.indexOf(c),v=m>0?r[m-1]:null,p=m<r.length-1?r[m+1]:null,k=nt(c),F=a.find(y=>y.monatKey===c),x=jt(n,a),D=x.filter(y=>y.monatKey===c),K=i!=null&&i.stichtagAuswertung?new Date(i.stichtagAuswertung):new Date,H=Re(n,s,K),M=H.filter(y=>y.datum.startsWith(c)),V=ni({aktiverMonatKey:c,monatLabel:k,prevMonatKey:v,nextMonatKey:p,tageAnzahl:u.length,warnungenAnzahl:M.length});f?await ti({root:t,switcherHtml:V,aktiverMonatKey:c,aktiveWocheKey:f,vollKurve:x,alleWarnungen:H,profil:s,vorlagenOverrides:d}):await ei({root:t,switcherHtml:V,monatLabel:k,tageMonat:u,monatsKurve:D,monatUebersicht:F,monatsWarnungen:M,aktiverMonatKey:c,profil:s,vorlagenOverrides:d})}async function ei({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:i,monatsWarnungen:l,aktiverMonatKey:d,profil:r,vorlagenOverrides:o}){e.innerHTML=`
    ${t}

    ${i?ai(i):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${l.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${l.map(c=>gn(c,r,o)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${si(s,d)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${je(s.slice().reverse(),{warnungen:l})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const c=e.querySelector("#chart-kalender-monat");c&&ct(c,s)}),ft(e.querySelector("#tage-liste-kalender")))}async function ti({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:i,profil:l,vorlagenOverrides:d}){var p;const r=s.filter(k=>k.wocheKey===a),o=r.reduce((k,F)=>k+Ve(F),0),c=r.reduce((k,F)=>k+ot(F),0),u=+(o-c).toFixed(2),g=k=>k>.05?"var(--success)":k<-.05?"var(--danger)":"var(--fg)",h=i.filter(k=>r.some(F=>F.datum===k.datum)),f=(p=r[0])==null?void 0:p.datum,m=f?Ie(C(f)):"",v=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${w(v)}</h2>
    <p class="view-subtitle">${w(m)} · ${r.length} Tage · ${h.length} Auffälligkeiten</p>

    ${r.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${c.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${g(u)};">${se(u,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${h.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${w(v)}</h2>
          ${h.map(k=>gn(k,l,d)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${je(r,{warnungen:h})}</div>
      </div>
    `}
  `,r.length&&(requestAnimationFrame(()=>{const k=e.querySelector("#chart-kalender-woche");k&&ct(k,r)}),ft(e.querySelector("#tage-liste-kalender")))}function ni({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:i}){const l=n?nt(n):"",d=a?nt(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+w(l):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?w(l):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${w(t)}</h2>
          <div class="hint">${s} Tage · ${i} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+w(d):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?w(d):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function ai(e){var i,l,d;const t=((i=e.glz)==null?void 0:i.saldoGesamt)??0,n=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,a=((d=e.glz)==null?void 0:d.saldoAktuellePeriode)??0,s=r=>r>.05?"var(--success)":r<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${se(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${se(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${se(a,{signed:!0})}</div>
      </div>
    </div>`}function si(e,t){var s;const n={};for(const i of e)n[s=i.wocheKey]??(n[s]={key:i.wocheKey,tage:[],ist:0,soll:0}),n[i.wocheKey].tage.push(i),n[i.wocheKey].ist+=Ve(i),n[i.wocheKey].soll+=ot(i);const a=Object.keys(n).sort();return a.length?a.map(i=>{var g;const l=n[i],d=+(l.ist-l.soll).toFixed(2),r=d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg-muted)",o=(g=l.tage.slice().sort((h,f)=>h.datum.localeCompare(f.datum))[0])==null?void 0:g.datum,c=o?Ie(C(o)):"",u=i.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${i}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${w(u)}</div>
        <div>
          <div class="list-item-title tabular">${w(c)}</div>
          <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${r};">${se(d,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function gn(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const i=ze(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(i){const l=gt(t,e);s=ht(t,i,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${w(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${w(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${Qs(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function nt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return P(a,"MMMM yyyy",{locale:G})}const ii={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function Ye({params:e,root:t}){const[n,a,s]=await Promise.all([te(),J(),Me()]),i=ri(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${w(i.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=n.filter(i.predicate).sort((g,h)=>g.datum.localeCompare(h.datum)),d=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,o=Re(n,a,d).filter(g=>l.some(h=>h.datum===g.datum)),c=l.reduce((g,h)=>g+(h.ist??0),0),u=c>0?` · ${c.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${w(i.titel)}</h1>
    <p class="view-subtitle">${l.length} Tag${l.length===1?"":"e"} insgesamt${u}</p>

    ${l.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${je(l,{warnungen:o})}</div>
      </div>
    `}
  `,ft(t.querySelector("#tagestyp-tage-liste"))}function ri(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=ii[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(lt(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}const hn="Fahrgelderstattung",li="C4",fn="C5",mn="F4",pn="F5",de=10,he=19;function Wt(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function oi(e){const t=(await dt(async()=>{const{default:m}=await import("./exceljs.min-BhfpbegZ.js").then(v=>v.e);return{default:m}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(hn)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=m=>{const v=a.getCell(m).value;return v==null?"":typeof v=="object"&&v.text?String(v.text):typeof v=="object"&&v.richText?v.richText.map(p=>p.text).join(""):String(v)},i=s(fn).trim(),l=s(mn).trim(),d=s(pn).trim(),r=(l.match(/\d+/)||[""])[0],o=(d.match(/\d+/)||[""])[0],c=s(`C${de}`).trim(),u=s(`E${de}`).trim(),g=a.getCell(`G${de}`).value,h=typeof g=="number"?g:parseFloat(String(g).replace(",","."))||0;let f=null;try{const m=new Set(a.getImages().map(p=>parseInt(p.imageId,10))),v=(n.media||[]).map((p,k)=>({media:p,index:k})).filter(({media:p,index:k})=>(p==null?void 0:p.type)==="image"&&!m.has(k)&&p.buffer);if(v.length>0){v.sort((x,D)=>(D.media.buffer.length||0)-(x.media.buffer.length||0));const p=v[0].media,k=p.buffer,F=k instanceof ArrayBuffer?k:k.buffer?k.buffer.slice(k.byteOffset||0,(k.byteOffset||0)+k.byteLength):null;if(F){const x=(p.extension||"").toLowerCase();f={bytes:F,extension:x==="jpg"?"jpeg":x||"png",quelle:"auto-aus-vorlage"}}}}catch(m){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",m)}return!i&&!r&&!o?{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — Name/Personalnummer/Kostenstelle wurden nicht erkannt. Bitte eine Original-Vorlage hochladen."}:i?{ok:!0,konstanten:{name:i,persNr:r,kst:o,vonHaltestelle:c,nachHaltestelle:u,betragProTag:h},unterschriftAuto:f}:{ok:!1,fehler:'Im Feld „Name, Vorname" der Vorlage (Zelle C5) ist nichts eingetragen — bitte die Vorlage prüfen.'}}async function ci({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:i}){const l=(await dt(async()=>{const{default:M}=await import("./exceljs.min-BhfpbegZ.js").then(V=>V.e);return{default:M}},__vite__mapDeps([0,1]))).default,d=new l.Workbook;try{await d.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const r=d.getWorksheet(hn)??d.worksheets[0];if(!r)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");const[o,c]=t.split("-").map(M=>parseInt(M,10)),u=new Date(o,c-1,1,12,0,0),g=P(u,"MMMM yy",{locale:G}),h=r.getCell(li);h.value=g,h.numFmt="@",r.getCell(fn).value=a.name,r.getCell(mn).value=`Pers.-Nr.: ${a.persNr}`,r.getCell(pn).value=`KST: ${a.kst}`;for(let M=de;M<=he;M++)r.getCell(`A${M}`).value=null,r.getCell(`C${M}`).value=null,r.getCell(`E${M}`).value=null,r.getCell(`G${M}`).value=null;const f=he-de+1,m=n.slice(0,f);for(let M=0;M<m.length;M++){const V=m[M],y=de+M;r.getCell(`A${y}`).value=C(V.datum),r.getCell(`C${y}`).value=a.vonHaltestelle,r.getCell(`E${y}`).value=a.nachHaltestelle,r.getCell(`G${y}`).value=a.betragProTag}const v=+(m.length*(a.betragProTag??0)).toFixed(2),p=r.getCell(`G${he+1}`);p.value={formula:`SUM(G${de}:G${he})`,result:v};const F=P(new Date,"dd.MM.yyyy"),x=r.getCell("A21");if(x.value=F,x.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&i){const M=d.addImage({buffer:s,extension:i}),V=197,y=80,S=55,z=185,B=hi(s);let $=z,_=S;if(B&&B.width>0&&B.height>0){const X=Math.min(z/B.width,S/B.height);$=Math.round(B.width*X),_=Math.round(B.height*X)}const ne=Math.max(0,Math.round((V-$)/2))/y;r.addImage(M,{tl:{col:ne,row:20.04},ext:{width:$,height:_},editAs:"oneCell"})}for(let M=he+3;M<=he+5;M++)for(const V of["A","B","C","D","E","F","G"]){const y=r.getCell(`${V}${M}`),S=y.value;typeof S=="string"&&/^[A-Z]\d+(-\d+)?$/.test(S.trim())&&(y.value=null)}const D=await d.xlsx.writeBuffer(),K=new Blob([D],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),H=di(a.name,u);return{blob:K,dateiname:H,anzahlTage:m.length,ueberzaehlig:n.length-m.length}}function di(e,t){const n=P(t,"MMMM",{locale:G}),a=P(t,"yy");let s=e;const i=/^(.+?),\s*(.+)$/.exec(e);return i&&(s=`${i[2].trim()} ${i[1].trim()}`),`Fahrgelderstattung ${s} ${n} ${a}.xlsx`}function Fe(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return P(new Date(t,n-1,1),"MMMM yyyy",{locale:G})}function Kt(e,t=null){const a={monat_jahr:Fe(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",i=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,l=Vt(s,a),d=Vt(i,a),r=new URLSearchParams;return r.set("cc","anika.kailer@putzmeister.com"),r.set("subject",l),r.set("body",d),`mailto:annika.mayer@putzmeister.com?${r.toString().replace(/\+/g,"%20")}`}function Vt(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function ui(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function gi(e,t,n,a){var g,h;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((g=s.wochentageWoechentlich)!=null&&g.length)&&!((h=s.wochentage14Taegig)!=null&&h.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[i,l]=e.split("-").map(f=>parseInt(f,10)),d=new Date(i,l-1,1),r=new Date(i,l,0),o=new Set(n.map(f=>f.datum)),c=[];let u=new Date(d);for(;u<=r;){if(!rt(u)&&Ne(u,s)){const f=P(u,"yyyy-MM-dd");u>a&&!o.has(f)&&c.push(f)}u=it(u,1)}return{ausstehend:c,imMonatGesamt:n.length+c.length,vorhandenAnzahl:n.length}}function hi(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const l=n.getUint16(a+2);if(l<2)return null;a+=2+l}}return null}function fi(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Se({root:e}){var p,k,F,x,D,K,H,M,V;const t=await xe();if(!t){mi(e);return}const[n,a,s,i]=await Promise.all([te(),J(),Me(),es("fahrgeld_abgabe")]),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=ui(n),r=new Date,o=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;d.includes(o)||d.unshift(o);const c=d;e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattungs-Excel mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Vorlage geladen</h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${w(t.konstanten.name||"—")} ·
            Pers.-Nr. ${w(t.konstanten.persNr||"—")} ·
            KST ${w(t.konstanten.kst||"—")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${w(t.konstanten.vonHaltestelle||"—")} → ${w(t.konstanten.nachHaltestelle||"—")} ·
            ${(t.konstanten.betragProTag??0).toFixed(2).replace(".",",")} € pro Tag
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(p=t.unterschrift)!=null&&p.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede generierte Excel als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${w(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der Excel leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(k=t.unterschrift)!=null&&k.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(F=t.unterschrift)!=null&&F.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${c.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var B;const y=c.map(($,_)=>{const N=Wt(n,$),ne=+(N.length*(t.konstanten.betragProTag??0)).toFixed(2),X=N.length>10,O=gi($,a,N,l),Y=O.ausstehend.length,De=+((N.length+Y)*(t.konstanten.betragProTag??0)).toFixed(2),qe=Y>0?O.ausstehend.map(Ze=>L(C(Ze))).join(", "):"";return{mk:$,bs:N,summe:ne,ueberzaehlig:X,offen:Y,offenListe:qe,summeMitOffen:De,idx:_}}),S=((B=y.find($=>$.bs.length>0))==null?void 0:B.mk)??y[0].mk,z=y.find($=>$.mk===S)??y[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <button class="btn-generate-big" id="btn-fahrtgeld-generate" ${z.bs.length===0?"disabled":""}>
                <img src="excel-logo.png" alt="" class="excel-logo-big" />
                <span class="btn-generate-label">Generieren</span>
              </button>
              <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${w(Kt(z.mk,i))}" target="_blank" rel="noopener" ${z.bs.length===0?'aria-disabled="true"':""}>
                <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                <span>E-Mail</span>
              </a>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${w(Fe(z.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${z.bs.length} BS-Tag${z.bs.length===1?"":"e"} erfasst · ${z.summe.toFixed(2).replace(".",",")} €
                ${z.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${z.offen} BS-Tag${z.offen===1?"":"e"}: ${w(z.offenListe)} (mit allen: ${z.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${z.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${z.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${y.map($=>{const _=$.mk===S?"checked":"",N=`data-monat="${w($.mk)}" data-offen="${$.offen}" data-offen-liste="${w($.offenListe)}" data-anzahl="${$.bs.length}" data-summe="${$.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${$.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${w(Fe($.mk))}" data-ueberzaehlig="${$.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${$.offen>0?" has-pending":""}${$.bs.length===0?" empty":""}" ${N}>
                    <input type="radio" name="fg-monat-sel" value="${w($.mk)}" ${_} ${$.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${w(Fe($.mk))}</div>
                      <div class="hint">
                        ${$.bs.length} BS-Tag${$.bs.length===1?"":"e"} erfasst · ${$.summe.toFixed(2).replace(".",",")} €
                        ${$.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${$.offen} BS-Tag${$.offen===1?"":"e"} laut Rhythmus</span>`:""}
                        ${$.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${$.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(x=e.querySelector("#btn-template-replace"))==null||x.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(D=e.querySelector("#fahrtgeld-replace-input"))==null||D.addEventListener("change",async y=>{var z;const S=(z=y.target.files)==null?void 0:z[0];S&&await at(S,e)}),(K=e.querySelector("#btn-template-clear"))==null||K.addEventListener("click",async()=>{await U("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Ja(),T("Vorlage gelöscht."),Se({root:e}))}),(H=e.querySelector("#btn-signature-upload"))==null||H.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(M=e.querySelector("#fahrtgeld-signature-input"))==null||M.addEventListener("change",async y=>{var z;const S=(z=y.target.files)==null?void 0:z[0];S&&await pi(S,e)}),(V=e.querySelector("#btn-signature-clear"))==null||V.addEventListener("click",async()=>{if(!await U("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const y=await xe();y&&(await ut({...y,unterschrift:null}),T("Unterschrift entfernt."),Se({root:e}))});const u=e.querySelector("#btn-fahrtgeld-generate"),g=e.querySelector("#btn-fahrtgeld-mail"),h=e.querySelector(".fahrtgeld-generate-monat"),f=e.querySelector("#fahrtgeld-generate-detail"),m=e.querySelectorAll(".fahrtgeld-monat-radio");function v(){const y=e.querySelector(".fahrtgeld-monat-radio:checked");if(!y)return;const S=y.closest(".fahrtgeld-monat-row");if(!S)return;const z=y.value,B=parseInt(S.getAttribute("data-anzahl")||"0",10),$=S.getAttribute("data-summe")||"0,00",_=parseInt(S.getAttribute("data-offen")||"0",10),N=S.getAttribute("data-offen-liste")||"",ne=S.getAttribute("data-summe-mit-offen")||$,X=S.getAttribute("data-monat-label")||"",O=S.getAttribute("data-ueberzaehlig")==="1";if(h&&(h.textContent=X),f){const Y=[`${B} BS-Tag${B===1?"":"e"} erfasst · ${$} €`];_>0&&Y.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${_} BS-Tag${_===1?"":"e"}: ${w(N)} (mit allen: ${ne} €)</span>`),O&&Y.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${B-10} überzählig (max 10/Monat)</span>`),f.innerHTML=Y.join("")}u&&(u.disabled=B===0),g&&(g.href=Kt(z,i),B===0?g.setAttribute("aria-disabled","true"):g.removeAttribute("aria-disabled"))}m.forEach(y=>y.addEventListener("change",v)),u==null||u.addEventListener("click",async()=>{var ne,X;const y=e.querySelector(".fahrtgeld-monat-radio:checked");if(!y){R("Bitte einen Monat auswählen.",{type:"warn"});return}const S=y.closest(".fahrtgeld-monat-row"),z=y.value,B=parseInt((S==null?void 0:S.getAttribute("data-offen"))||"0",10),$=(S==null?void 0:S.getAttribute("data-offen-liste"))||"";if(B>0&&!await U(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${B} BS-Tag${B===1?"":"e"}:

${$}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der Excel fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;u.disabled=!0;const _=u.querySelector(".btn-generate-label"),N=_==null?void 0:_.textContent;_&&(_.textContent="Erstelle …");try{const O=await xe(),Y=await te(),De=Wt(Y,z);if(!De.length){R("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const qe=(ne=O.unterschrift)==null?void 0:ne.bytes,Ze=(X=O.unterschrift)==null?void 0:X.extension,{blob:vn,dateiname:vt,ueberzaehlig:Ue}=await ci({templateBytes:O.bytes,monatKey:z,bsTage:De,konstanten:O.konstanten,unterschriftBytes:qe,unterschriftExtension:Ze});fi(vn,vt),T(`Excel erstellt: ${vt}${Ue>0?` (${Ue} weiterer Tag${Ue===1?"":"e"} passte/n nicht in die Vorlage)`:""}`)}catch(O){console.error("Fahrtgeld-Generierung fehlgeschlagen:",O),R(`Fehler: ${O.message||O}`,{type:"error",duration:8e3})}finally{u.disabled=!1,_&&N&&(_.textContent=N)}})}function mi(e){e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere deine monatlichen Fahrgelderstattungs-Formulare auf Knopfdruck.</p>

    <div class="card fahrtgeld-empty">
      <div class="fahrtgeld-dropzone" id="fahrtgeld-dropzone" tabindex="0" role="button" aria-label="Fahrgeld-Vorlage hochladen">
        <img src="excel-logo.png" alt="" class="fahrtgeld-empty-icon-img" />
        <h2>Bestehende Fahrgelderstattungs-Tabelle als Vorlage hochladen</h2>
        <p class="hint">Datei hierher ziehen oder klicken zum Auswählen</p>
      </div>
      <input type="file" id="fahrtgeld-upload-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    </div>
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var i;const s=(i=a.target.files)==null?void 0:i[0];s&&await at(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var i,l;const s=(l=(i=a.dataTransfer)==null?void 0:i.files)==null?void 0:l[0];s&&await at(s,e)})}async function pi(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){R("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){R(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",i=await new Promise((d,r)=>{const o=new FileReader;o.onload=()=>d(o.result),o.onerror=r,o.readAsDataURL(e)}),l=await xe();if(!l){R("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await ut({...l,unterschrift:{bytes:a,extension:s,dataUrl:i,hochgeladenAm:new Date().toISOString()}}),T("Unterschrift gespeichert."),Se({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),R(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function at(e,t){try{const n=await e.arrayBuffer(),a=await oi(n);if(!a.ok){R(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await xe();let i=s==null?void 0:s.unterschrift;if(!i&&a.unterschriftAuto){const l=bi(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);i={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:l,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await ut({bytes:n,konstanten:a.konstanten,unterschrift:i,hochgeladenAm:new Date().toISOString(),dateiname:e.name}),a.unterschriftAuto&&!(s!=null&&s.unterschrift)?T(`Vorlage gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)`):T(`Vorlage gespeichert: ${a.konstanten.name||e.name}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Se({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),R(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function bi(e,t){const n=new Uint8Array(e);let a="";for(let l=0;l<n.length;l++)a+=String.fromCharCode(n[l]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function vi({root:e}){const t=await te();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(i=>i.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(i=>`<option value="${i}">${ki(i)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const i=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(i).map(d=>d.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>T(`${i.length} Zeilen kopiert.`))});function s(){const i=a.value,d=(i?t.filter(r=>r.monatKey===i):t).filter(r=>r.ist!=null&&r.ist>0&&r.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=yi(d),e.querySelectorAll(".copy-val").forEach(r=>{r.addEventListener("click",async()=>{const o=r.getAttribute("data-val");await navigator.clipboard.writeText(o),r.classList.add("ok");const c=r.textContent;r.textContent="✓ kopiert",setTimeout(()=>{r.classList.remove("ok"),r.textContent=c},1200)})})}s()}function yi(e){return e.length?`
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
        ${e.map(t=>{const n=Ce(t.ist),a=`${L(C(t.datum))}	${n}`;return`
            <tr data-copy="${It(a)}">
              <td class="tabular">${L(C(t.datum))}</td>
              <td>${wi(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${xi(t.tagestyp)}">${bn(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${It(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function wi(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function ki(e){const[t,n]=e.split("-");return P(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:G})}function xi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function bn(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function It(e){return bn(e)}async function $i({root:e}){const[t,n,a,s]=await Promise.all([te(),J(),Oe(),He()]),i=Object.fromEntries(s.map(r=>[r.key,r])),l=Re(t,n,new Date).filter(r=>r.mailVorlageKey),d=rn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(r=>Si(r,n,i)).join("")}

      ${d.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${d.map(r=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${q(r.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${q(r.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys($e).map(r=>{const o=ze(r,i[r]);return Mi(o)}).join("")}
      </div>
    </div>
  `,zi(e),Di(e)}function Si(e,t,n){const a=ze(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=gt(t,e),i=ln(a,s),l=ht(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${q(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${q(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${q(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${q(i.betreff)}

${q(i.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${l}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${st(i.betreff)}" data-body="${st(i.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Mi(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${q(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${q(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${st(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${q(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function zi(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,i=a.querySelector(".v-text").value;await _e(n,{betreff:s,text:i}),T("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=$e[n];a&&await U(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await _e(n,{betreff:a.betreff,text:a.text}),T("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Di(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),T("Mail-Text kopiert.")})})}function q(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function st(e){return q(e)}async function Ai({root:e}){const[t,n]=await Promise.all([J(),He()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys($e).map(s=>{const i=ze(s,a[s]);return Ei(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const i={...t,pausenRegel:s.target.value};await Be(i),T("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),d=l.querySelector(".v-betreff").value,r=l.querySelector(".v-text").value;await _e(i,{betreff:d,text:r}),T("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-key"),l=$e[i];l&&await U(`Deine Anpassungen an "${l.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await _e(i,{betreff:l.betreff,text:l.text}),T("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ei(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Le(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Le(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Ti(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${Le(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Le(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ti(e){return Le(e)}async function Ot(){document.documentElement.setAttribute("data-css-ready",""),Rn();const e=document.getElementById("content");await ja()&&setTimeout(()=>{R('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Ra(),await Na(),I("/",zt),I("/dashboard",zt),I("/analytics",Ys),I("/kalender",Xe),I("/kalender/typ/:typ",Ye),I("/kalender/wochentag/:wd",Ye),I("/kalender/pause/:bucket",Ye),I("/kalender/:yyyymm",Xe),I("/kalender/:yyyymm/:yyyykw",Xe),I("/tag/:datum",Gs),I("/berichtsheft",vi),I("/mails",$i),I("/fahrtgeld",Se),I("/profil",Us),I("/daten",Os),I("/einstellungen",Ai),Ka(e),location.hash||Wa("/");try{const t=await b.tage.count();Cs(t>0)&&setTimeout(()=>cn(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ot):Ot();
