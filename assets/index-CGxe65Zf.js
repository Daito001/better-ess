const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exceljs.min-BhfpbegZ.js","assets/dexie-UpTFNL8S.js"])))=>i.map(i=>d[i]);
import{C as G,L as bn,B as yn,D as wn,S as xn,a as kn,b as $n,P as Sn,A as Mn,c as zn,d as Dn,T as An,p as Tn,e as En,i as Pn}from"./chartjs-CRgZvhTJ.js";import{b as Qe,a as ke,c as $e,d as Fn,f as L,s as Ln,e as Kn,g as ct,i as dt,p as Cn,h as Bn,j as Wn,k as C,l as _n,m as Vn}from"./datefns-IT6TXxmM.js";import{D as In}from"./dexie-UpTFNL8S.js";import{_ as On,a as Hn}from"./pdfjs-BDGsuRSB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Nn(){document.documentElement.setAttribute("data-theme","dark")}const yt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Rn=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?yt[e].withPreposition:yt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},jn={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},qn={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Zn={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Un={date:Qe({formats:jn,defaultWidth:"full"}),time:Qe({formats:qn,defaultWidth:"full"}),dateTime:Qe({formats:Zn,defaultWidth:"full"})},Gn={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Jn=(e,t,n,a)=>Gn[e],Xn={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Yn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},at={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Qn={narrow:at.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:at.wide},ea={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},ta={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},na={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},aa=e=>Number(e)+".",sa={ordinalNumber:aa,era:ke({values:Xn,defaultWidth:"wide"}),quarter:ke({values:Yn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ke({values:at,formattingValues:Qn,defaultWidth:"wide"}),day:ke({values:ea,defaultWidth:"wide"}),dayPeriod:ke({values:ta,defaultWidth:"wide",formattingValues:na,defaultFormattingWidth:"wide"})},ia=/^(\d+)(\.)?/i,ra=/\d+/i,la={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},oa={any:[/^v/i,/^n/i]},ca={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},da={any:[/1/i,/2/i,/3/i,/4/i]},ua={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},ga={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ha={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},fa={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},ma={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},pa={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},va={ordinalNumber:Fn({matchPattern:ia,parsePattern:ra,valueCallback:e=>parseInt(e)}),era:$e({matchPatterns:la,defaultMatchWidth:"wide",parsePatterns:oa,defaultParseWidth:"any"}),quarter:$e({matchPatterns:ca,defaultMatchWidth:"wide",parsePatterns:da,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$e({matchPatterns:ua,defaultMatchWidth:"wide",parsePatterns:ga,defaultParseWidth:"any"}),day:$e({matchPatterns:ha,defaultMatchWidth:"wide",parsePatterns:fa,defaultParseWidth:"any"}),dayPeriod:$e({matchPatterns:ma,defaultMatchWidth:"wide",parsePatterns:pa,defaultParseWidth:"any"})},Q={code:"de",formatDistance:Rn,formatLong:Un,formatRelative:Jn,localize:sa,match:va,options:{weekStartsOn:1,firstWeekContainsDate:4}};function Ht(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function Oe(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let r=a,l=s;return l===60&&(r+=1,l=0),`${t?"-":""}${r}:${String(l).padStart(2,"0")}`}function j(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${a}`}function ee(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Nt(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)ee(s.von)<ee(n)&&(n=s.von),ee(s.bis)>ee(a)&&(a=s.bis);return{kommen:n,gehen:a}}function ba(e){return e?"arbzg":"jarbschg"}function ya(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function ut(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:ee(a.von),bis:ee(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function Rt(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(f=>!f.von))return{keinAnspruch:!0};const a=ut(n),s=e.pause??0,r=wa(n),l=r-s,c=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":ba(!!t.ueber18),i=ya(l,c),o=Math.max(a,i),d=s-o,u=Math.max(0,i-a);let g="ok",h=null;if(d>.05)g="fehler_zeitwirtschaft",h=`${Math.round(d*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){g="aufstockung_legal";const f=Math.round(u*60);h=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${l.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${c.toUpperCase()}) ${Math.round(i*60)} min vor. Die fehlenden ${f} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:l,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:i,gesetz:c,legalerAbzug:o,unrechtmaessigerVerlustMin:Math.round(Math.max(0,d)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:g,warnung:h}}function wa(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=ee(n.von),s=ee(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function qe(e,t){var i,o,d;const n=[...e].sort((u,g)=>u.datum.localeCompare(g.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[i=u.monatKey]??(s[i]=[]),s[u.monatKey].push(u);const r=Object.keys(s).sort(),l=[];let c=null;for(const u of r){const g=a.get(u);let h;((o=g==null?void 0:g.glz)==null?void 0:o.saldoVorperiode)!=null?h=g.glz.saldoVorperiode:c!=null?h=c:h=0;const f=s[u];for(const m of f)m.diff!=null&&(h+=m.diff),l.push({datum:m.datum,wochentag:m.wochentag,saldo:Math.round(h*100)/100,diff:m.diff,ist:m.ist,soll:m.soll,tagestyp:m.tagestyp,monatKey:m.monatKey,wocheKey:m.wocheKey,zeitSpannen:m.zeitSpannen});if(((d=g==null?void 0:g.glz)==null?void 0:d.saldoGesamt)!=null){const m=g.glz.saldoGesamt-h;if(Math.abs(m)>.02&&l.length>0){const b=l.length-1;l[b].umbuchung=m,l[b].saldo=Math.round((l[b].saldo+m)*100)/100,h=l[b].saldo}c=g.glz.saldoGesamt}else c=h}return l}function xa(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function ka(e){return e.length?e[e.length-1].saldo:0}const jt=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),qt=7;function we(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:jt.has(e.tagestyp)?Math.max(n,qt):n>0?n:t}function Fe(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:jt.has(e.tagestyp)?qt:t}function $a(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}function Ae(e){if(!e)return null;const t=e.trim();return Cn(t,"dd.MM.yyyy",new Date)}function W(e){return L(e,"dd.MM.yyyy")}function Zt(e){return L(e,"EE, dd.MM.yyyy",{locale:Q})}function Le(e){const t=Ln(e,{weekStartsOn:1}),n=Kn(e,{weekStartsOn:1});return`${L(t,"dd.MM.")} – ${L(n,"dd.MM.yyyy")}`}function Sa(e){return`${Bn(e)}-${String(Wn(e)).padStart(2,"0")}`}function Ut(e){return L(e,"yyyy-MM")}function Ma(e){return L(e,"yyyy-MM-dd")}function za(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=ct(a,1),dt(a)||n++;return n}function y(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}G.register(bn,yn,wn,xn,kn,$n,Sn,Mn,zn,Dn,An,Tn,En,Pn);function O(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function re(){return{fg:O("--fg"),fgMuted:O("--fg-muted"),fgSubtle:O("--fg-subtle"),border:O("--border"),surface:O("--surface"),accent:O("--accent"),success:O("--success"),warn:O("--warn"),danger:O("--danger"),info:O("--info"),palette:[O("--chart-1"),O("--chart-2"),O("--chart-3"),O("--chart-4"),O("--chart-5"),O("--chart-6"),O("--chart-7")]}}function F(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Ze(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(r=>L(C(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?n.success:n.danger),new G(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:r=>{const l=r.chart,{ctx:c,chartArea:i,scales:o}=l;return i?Gt(c,i,o.y,n):se(n.accent,.14)},segment:{borderColor:r=>{const l=r.p0.parsed.y,c=r.p1.parsed.y,i=(l+c)/2;return i>=.02?n.success:i<=-.02?n.danger:n.fgMuted}},tension:.25,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?n.success:r<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...F(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(r,l,c)=>{const i=c.getElementsAtEventForMode(r,"index",{intersect:!1},!1);c.canvas.style.cursor=i.length>0?"pointer":"default"},onClick:(r,l,c)=>{const i=c.getElementsAtEventForMode(r,"index",{intersect:!1},!1);if(i.length>0){const o=i[0].index,d=t[o];d!=null&&d.datum&&(window.location.hash=`#/tag/${d.datum}`)}},plugins:{...F(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:Da(t)}},scales:{...F(n).scales,y:{...F(n).scales.y,ticks:{...F(n).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function le(e){return function(t){var m,b;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const p=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),p()}}if(a.opacity===0||!((m=a.dataPoints)!=null&&m.length)){s.style.opacity="0";return}const r=e({tooltip:a,chart:n});if(!r){s.style.opacity="0";return}let l=`<div class="saldo-tooltip-title">${st(r.title)}</div>`;for(const p of r.rows||[]){const M=p.klasse||"flat";l+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${st(p.label)}</span><span class="saldo-tooltip-value ${M}">${p.value}</span></div>`}(b=r.meta)!=null&&b.length&&(l+=`<div class="saldo-tooltip-meta">${r.meta.map(p=>`<span>${p}</span>`).join("")}</div>`),s.innerHTML=l;const c=n.canvas.getBoundingClientRect(),i=c.left+a.caretX,o=c.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const d=s.offsetWidth,u=s.offsetHeight,g=18;let h=i+g;h+d>window.innerWidth-8&&(h=i-g-d);let f=o-u/2;f<8&&(f=8),f+u>window.innerHeight-8&&(f=window.innerHeight-u-8),s.style.left=h+"px",s.style.top=f+"px",s.style.opacity="1"}}function ie(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function ge(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function he(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function Da(e){return le(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:ge(a.saldo),klasse:ie(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:ge(a.diff),klasse:ie(a.diff)});const r=[];return a.tagestyp&&r.push(`Typ: ${st(a.tagestyp)}`),a.umbuchung&&r.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:L(C(a.datum),"EE, dd.MM.yyyy",{locale:Q}),rows:s,meta:r}})}function st(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Aa(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(c=>c.monatKey),s=a.map(c=>{const[i,o]=c.split("-"),d=new Date(parseInt(i,10),parseInt(o,10)-1,1);return L(d,"MMM yyyy",{locale:Q})}),r=t.map(c=>{var i;return((i=c.glz)==null?void 0:i.saldoGesamt)??0}),l=t.map(c=>{var i;return((i=c.glz)==null?void 0:i.saldoVorperiode)??null});return new G(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:r,borderColor:n.accent,backgroundColor:c=>{const i=c.chart,{ctx:o,chartArea:d,scales:u}=i;return d?Gt(o,d,u.y,n):se(n.accent,.14)},segment:{borderColor:c=>{const i=c.p0.parsed.y,o=c.p1.parsed.y,d=(i+o)/2;return d>=.05?n.success:d<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:r.map(c=>c>=.05?n.success:c<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:.35,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...F(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(c,i,o)=>{const d=o.getElementsAtEventForMode(c,"index",{intersect:!1},!1);o.canvas.style.cursor=d.length>0?"pointer":"default"},onClick:(c,i,o)=>{const d=o.getElementsAtEventForMode(c,"index",{intersect:!1},!1);if(d.length>0){const u=d[0].index,g=a[u];g&&(window.location.hash=`#/monat/${g}`)}},plugins:{...F(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:c})=>{const i=c.dataPoints[0].dataIndex,o=r[i],d=l[i],u=[{label:"Saldo Monatsende",value:ge(o),klasse:ie(o)}];if(d!=null){const g=+(o-d).toFixed(2);u.push({label:"Vorperiode",value:ge(d),klasse:ie(d)}),u.push({label:"Bewegung",value:ge(g),klasse:ie(g)})}return{title:s[i],rows:u}})}}}})}function Ta(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.map(l=>L(C(l.datum),"dd.MM.")),s=t.map(l=>l.ist??0),r=t.map(l=>Ca(l.tagestyp,n));return new G(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...F(n),onHover:(l,c,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,c,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const d=t[o[0].index];d!=null&&d.datum&&(window.location.hash=`#/tag/${d.datum}`)}},plugins:{...F(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,i=t[c],o=[{label:"Ist",value:he(i.ist),klasse:"flat"}];i.soll!=null&&o.push({label:"Soll",value:he(i.soll),klasse:"flat"}),i.diff!=null&&o.push({label:"Diff",value:ge(i.diff),klasse:ie(i.diff)});const d=i.tagestyp?[`Typ: ${i.tagestyp}`]:[];return{title:L(C(i.datum),"EE, dd.MM.yyyy",{locale:Q}),rows:o,meta:d}})}},scales:{...F(n).scales,y:{...F(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function wt(e,t){const n=re();if(oe(e),!(t!=null&&t.length))return;const a=t.filter(o=>{var d;return((d=o.zeitSpannen)==null?void 0:d.length)&&o.zeitSpannen.some(u=>u.von&&u.bis)}).map(o=>{const d=o.zeitSpannen.filter(h=>h.von&&h.bis).map(h=>({von:ee(h.von),bis:ee(h.bis),vonStr:h.von,bisStr:h.bis})).filter(h=>h.von!=null&&h.bis!=null);if(d.length===0)return null;const u=Math.min(...d.map(h=>h.von)),g=Math.max(...d.map(h=>h.bis));return{...o,_spans:d,_minVon:u,_maxBis:g}}).filter(Boolean);if(!a.length)return;const s=o=>o.ist==null?n.fgMuted:o.ist>=7?n.success:n.danger,r={label:"Tages-Rahmen",data:a.map(o=>[o._minVon,o._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},l=Math.max(0,Math.floor(Math.min(...a.map(o=>o._minVon))/60)*60-60),c=Math.min(24*60,Math.ceil(Math.max(...a.map(o=>o._maxBis))/60)*60+60),i=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return new G(e,{type:"bar",data:{labels:a.map(o=>L(C(o.datum),"dd.MM.")),datasets:[r]},options:{...F(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(o,d,u)=>{const g=u.getElementsAtEventForMode(o,"index",{intersect:!1},!1);u.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,d,u)=>{const g=u.getElementsAtEventForMode(o,"index",{intersect:!1},!1);if(g.length>0){const h=a[g[0].index];h!=null&&h.datum&&(window.location.hash=`#/tag/${h.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:o})=>{const d=a[o.dataPoints[0].dataIndex],u=[];d.ist!=null&&u.push({label:"Ist",value:he(d.ist),klasse:ie(d.ist-7)}),d.soll!=null&&u.push({label:"Soll",value:he(d.soll)});const g=[`Rahmen: ${i(d._minVon)} – ${i(d._maxBis)}`];return d._spans.length>1&&d._spans.forEach((h,f)=>g.push(`Block ${f+1}: ${h.vonStr} – ${h.bisStr}`)),d.pause!=null&&g.push(`Pause: ${Math.round(d.pause*60)} min`),{title:L(C(d.datum),"EE, dd.MM.yyyy",{locale:Q}),rows:u,meta:g}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:l,max:c,ticks:{color:n.fgMuted,stepSize:60,callback:o=>i(o)},grid:{color:n.border}}}}})}function Ea(e,t){const n=re();oe(e);const a={};for(const l of t){if(l.tagestyp!=="Stempelzeit"||!l.zeitSpannen||l.zeitSpannen.length<2)continue;const c=ut(l.zeitSpannen);if(c<=0)continue;const i=Math.round(c*60),o=Math.floor(i/15)*15;a[o]=(a[o]??0)+1}const s=Object.keys(a).map(Number).sort((l,c)=>l-c),r=s.map(l=>a[l]);return new G(e,{type:"bar",data:{labels:s.map(l=>`${l}–${l+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:n.palette[1],borderRadius:4}]},options:{...F(n),onHover:(l,c,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,c,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const d=s[o[0].index];d!=null&&(window.location.hash=`#/kalender/pause/${d}`)}},plugins:{...F(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[c]!=null?`${s[c]}–${s[c]+14} min`:""),rows:[{label:"Häufigkeit",value:`${r[c]} Tag${r[c]===1?"":"e"}`}]}})}}}})}function Pa(e,t){const n=re();oe(e);const a=["MO","DI","MI","DO","FR"],s={},r={};for(const i of a)s[i]=0,r[i]=0;for(const i of t)a.includes(i.wochentag)&&(i.ist==null||i.ist===0||(s[i.wochentag]+=i.ist,r[i.wochentag]+=1));const l=a.map(i=>r[i]>0?s[i]/r[i]:0),c={id:"wochentag-datalabels",afterDatasetsDraw(i){const{ctx:o,data:d,scales:u}=i;o.save(),o.fillStyle=n.fg,o.font="600 12px system-ui",o.textAlign="center",o.textBaseline="bottom",i.getDatasetMeta(0).data.forEach((h,f)=>{const m=d.datasets[0].data[f];if(!m||m===0)return;const b=m.toFixed(2).replace(".",",")+"h";o.fillText(b,h.x,h.y-6)}),o.restore()}};return new G(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:l,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...F(n),layout:{padding:{top:24}},onHover:(i,o,d)=>{const u=d.getElementsAtEventForMode(i,"nearest",{intersect:!0},!1);d.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(i,o,d)=>{const u=d.getElementsAtEventForMode(i,"nearest",{intersect:!0},!1);if(u.length>0){const g=a[u[0].index];g&&(window.location.hash=`#/kalender/wochentag/${g}`)}},plugins:{...F(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:i})=>{const o=i.dataPoints[0].dataIndex,d=a[o];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][o],rows:[{label:"Ø Stunden",value:he(l[o])},{label:"Anzahl Tage",value:String(r[d]||0)}]}})}},scales:{...F(n).scales,y:{...F(n).scales.y,suggestedMax:Math.max(...l)*1.15}}},plugins:[c]})}function Fa(e,t){const n=re();oe(e);const a={};for(const l of t)!l.tagestyp||l.tagestyp==="Wochenende"||(a[l.tagestyp]=(a[l.tagestyp]??0)+1);const s=Object.keys(a),r=Object.values(a);return new G(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((l,c)=>n.palette[c%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(l,c,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(l,c,i)=>{const o=i.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(o.length>0){const d=s[o[0].index];d&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(d)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:le(({tooltip:l})=>{const c=l.dataPoints[0].dataIndex,i=r.reduce((d,u)=>d+u,0),o=i?r[c]/i*100:0;return{title:s[c],rows:[{label:"Anzahl",value:`${r[c]} Tag${r[c]===1?"":"e"}`},{label:"Anteil",value:o.toFixed(1).replace(".",",")+"%"}]}})}}}})}function La(e,t){const n=re();oe(e);const a={};for(const i of t){const o=i.wocheKey;a[o]??(a[o]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[o].ist+=we(i),a[o].soll+=Fe(i),a[o].days++,(!a[o].ersterTag||i.datum&&i.datum<a[o].ersterTag)&&(a[o].ersterTag=i.datum,a[o].monatKey=i.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const r=s.map(i=>+a[i].ist.toFixed(2)),l=s.map(i=>+a[i].soll.toFixed(2)),c=s.map(i=>{const o=a[i].ersterTag;return o?Le(C(o)):""});return new G(e,{type:"line",data:{labels:s.map(i=>"KW "+i.split("-")[1]),datasets:[{label:"Wochenstunden",data:r,borderColor:n.accent,backgroundColor:se(n.accent,.1),segment:{borderColor:i=>{const o=i.p0.parsed.y,d=i.p1.parsed.y,u=l[i.p0.parsed.x]??35,g=l[i.p1.parsed.x]??35,h=(u+g)/2,f=(o+d)/2;return f>=h+.1?n.success:f<=h-.1?n.danger:n.fgMuted}},pointBackgroundColor:r.map((i,o)=>i>=l[o]+.1?n.success:i<=l[o]-.1?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,pointRadius:3,pointHoverRadius:6,pointHitRadius:20,tension:.25,fill:!0,borderWidth:2}]},options:{...F(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(i,o,d)=>{const u=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);d.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(i,o,d)=>{var g;const u=d.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(u.length>0){const h=u[0].index,f=s[h],m=f?(g=a[f])==null?void 0:g.monatKey:null;f&&m?window.location.hash=`#/kalender/${m}/${f}`:f&&(window.location.hash="#/kalender")}},plugins:{...F(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:le(({tooltip:i})=>{const o=i.dataPoints[0].dataIndex,d=s[o],u=r[o],g=l[o],h=+(u-g).toFixed(2),f=c[o];return{title:f?"KW "+d.split("-")[1]+" · "+f:"KW "+d.split("-")[1]+" · "+d.split("-")[0],rows:[{label:"Ist",value:he(u),klasse:"flat"},{label:"Soll",value:he(g),klasse:"flat"},{label:"Diff",value:ge(h),klasse:ie(h)}]}})}},scales:{...F(n).scales,y:{...F(n).scales.y,ticks:{...F(n).scales.y.ticks,callback:i=>`${i.toFixed(0)}h`}}}}})}function oe(e){const t=G.getChart(e);t&&t.destroy()}function Ka(){if(G.instances){for(const e of Object.values(G.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function se(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(c=>c+c).join(""):n,s=parseInt(a.slice(0,2),16),r=parseInt(a.slice(2,4),16),l=parseInt(a.slice(4,6),16);return`rgba(${s}, ${r}, ${l}, ${t})`}function Gt(e,t,n,a){const{top:s,bottom:r}=t,l=e.createLinearGradient(0,s,0,r),c=n.min,i=n.max,o=i-c;if(o<=0)return se(a.success,.14);let d=(i-0)/o;return d=Math.max(0,Math.min(1,d)),l.addColorStop(0,se(a.success,.28)),l.addColorStop(Math.max(0,d-.001),se(a.success,.06)),l.addColorStop(Math.min(1,d+.001),se(a.danger,.06)),l.addColorStop(1,se(a.danger,.28)),l}function Ca(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const Jt=[];function V(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(r=>r.startsWith(":")?(a.push(r.slice(1)),"([^/]+)"):Va(r)).join("/")+"/?$");Jt.push({pattern:e,regex:s,paramNames:a,render:t})}function Ba(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ae():window.location.hash=e}function Wa(e,{onNavigate:t}={}){window.addEventListener("hashchange",ae),ae.rootEl=e,ae.onNavigate=t,ae()}async function ae(){var a;Ka();const e=ae.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of Jt){const r=s.regex.exec(n);if(r){const l={};s.paramNames.forEach((c,i)=>l[c]=decodeURIComponent(r[i+1])),(a=ae.onNavigate)==null||a.call(ae,n),_a(n);try{e.classList.remove("view-enter"),await s.render({params:l,path:n,root:e}),e.classList.add("view-enter")}catch(c){console.error("Route render error:",c),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${xt(c.message||String(c))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${xt(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function _a(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Va(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Ia="modulepreload",Oa=function(e){return"/better-ess/"+e},kt={},gt=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(n.map(i=>{if(i=Oa(i),i in kt)return;kt[i]=!0;const o=i.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ia,o||(u.as="script"),u.crossOrigin="",u.href=i,c&&u.setAttribute("nonce",c),document.head.appendChild(u),o)return new Promise((g,h)=>{u.addEventListener("load",g),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})},v=new In("zeitnachweis");v.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});v.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});v.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});v.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});v.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});v.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});v.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;n=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function Ha(){try{const{erkenneBerufsschulMuster:e}=await gt(async()=>{const{erkenneBerufsschulMuster:l}=await Promise.resolve().then(()=>ss);return{erkenneBerufsschulMuster:l}},void 0),t=await v.tage.toArray();if(!t.length)return!1;const n=e(t),a=await v.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await v.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Na(){try{const e=await v.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await v.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Ra(){const e=await v.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await v.einstellungen.delete("__migration_reset"),!0):!1}async function J(){return await v.profil.get("self")??Xt()}async function He(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await v.profil.put(t),t}function Xt(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function ja(e,t=null){const n=await v.einstellungen.get(e);return n?n.value:t}async function qa(e,t){await v.einstellungen.put({key:e,value:t})}async function Z(){return await v.tage.orderBy("datum").toArray()}async function Za(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(o,d)=>d?o?o>d:!1:!0;let r=0,l=0,c=0,i=0;if(e.length){const o=e.map(g=>g.datum),d=await v.tage.bulkGet(o),u=[];for(let g=0;g<e.length;g++){const h={...e[g],_quellStichtag:a},f=d[g];!f||s(a,f._quellStichtag)?u.push(h):l++}u.length&&(await v.tage.bulkPut(u),r=u.length)}if(t.length){const o=t.map(g=>g.monatKey),d=await v.monate.bulkGet(o),u=[];for(let g=0;g<t.length;g++){const h={...t[g],_quellStichtag:a},f=d[g];!f||s(a,f._quellStichtag)?u.push(h):i++}u.length&&(await v.monate.bulkPut(u),c=u.length)}return{tage:r,monate:c,skippedTage:l,skippedMonate:i}}async function fe(){return await v.monate.orderBy("monatKey").toArray()}async function Ua(e){return await v.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function me(){return await v.uploads.orderBy("hochladeDatum").last()}async function Yt(){return await v.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Te(){return await v.fahrtgeldTemplate.get("self")}async function ht(e){await v.fahrtgeldTemplate.put({id:"self",...e})}async function Ga(){await v.fahrtgeldTemplate.delete("self")}async function Ja(){await Promise.all([v.profil.clear(),v.tage.clear(),v.monate.clear(),v.uploads.clear(),v.einstellungen.clear(),v.mailVorlagen.clear(),v.warnungDismissals.clear(),v.fahrtgeldTemplate.clear()])}async function Qt(){await Promise.all([v.tage.clear(),v.monate.clear(),v.uploads.clear(),v.warnungDismissals.clear()])}async function Xa(){const[e,t,n,a,s,r,l]=await Promise.all([v.profil.toArray(),v.tage.toArray(),v.monate.toArray(),v.uploads.toArray(),v.einstellungen.toArray(),v.mailVorlagen.toArray(),v.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:r,warnungDismissals:l}}}async function Ya(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await v.transaction("rw",v.profil,v.tage,v.monate,v.uploads,v.einstellungen,v.mailVorlagen,v.warnungDismissals,async()=>{var n,a,s,r,l,c,i;(n=t.profil)!=null&&n.length&&await v.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await v.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await v.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await v.uploads.bulkPut(t.uploads),(l=t.einstellungen)!=null&&l.length&&await v.einstellungen.bulkPut(t.einstellungen),(c=t.mailVorlagen)!=null&&c.length&&await v.mailVorlagen.bulkPut(t.mailVorlagen),(i=t.warnungDismissals)!=null&&i.length&&await v.warnungDismissals.bulkPut(t.warnungDismissals)})}async function Ne(e,t){await v.mailVorlagen.put({key:e,...t})}async function Qa(e){return await v.mailVorlagen.get(e)}async function ft(){return await v.mailVorlagen.toArray()}async function es(e,t){await v.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ts(){return await v.warnungDismissals.toArray()}function ns(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function as(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function en(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ns(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${as(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function tn(e){var d;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const u of t)n[d=u.wochentag]??(n[d]=[]),n[u.wochentag].push(u);const a=[],s=[];let r=null;for(const[u,g]of Object.entries(n)){if(g.sort((m,b)=>m.datum.localeCompare(b.datum)),g.length<2)continue;const h=[];for(let m=1;m<g.length;m++)h.push(_n(C(g[m].datum),C(g[m-1].datum)));const f=$t(h);f<=10?a.push(u):f<=18&&(s.push(u),(!r||C(g[0].datum)<C(r))&&(r=g[0].datum))}const l=t.map(u=>u.ist).filter(u=>u!=null&&u>0),c=$t(l),i=c!=null?Math.round(c*4)/4:null,o=i!=null&&i<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:r,stundenProTag:i,halbtags:o}}function $t(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function Ue(e,t){var s,r;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(a)&&t.referenzDatum14Taegig){const l=C(t.referenzDatum14Taegig),c=Vn(e,l,{weekStartsOn:1});if(c>=0&&c%2===0)return!0}return!1}function nn(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const ss=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:tn,erwarteteBerufsschulStunden:nn,istBerufsschulTagLautMuster:Ue},Symbol.toStringTag,{value:"Module"})),Se={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function xe(e,t,n,a=new Set){var d,u;const s=[],r=n??new Date,l=new Map(e.map(g=>[g.datum,g]));if(!e.length)return s;const c=C(e[0].datum),i=r;for(let g=new Date(c);g<=i;g=ct(g,1)){if(dt(g))continue;const h=L(g,"yyyy-MM-dd"),f=l.get(h),m=za(g,i);if(!f||!f.tagestyp&&!f.ist&&(((d=f.zeitSpannen)==null?void 0:d.length)??0)===0){if(Ue(g,t.berufsschulMuster)){const p=m>=4?"error":m>=2?"warn":"info";Me(s,a,{datum:h,wochentag:(f==null?void 0:f.wochentag)??Ce(g),typ:"bs_tag_fehlt",schweregrad:p,titel:`Berufsschultag nicht eingetragen: ${W(g)}`,beschreibung:`Laut deinem Profil hast du am ${Se[Ce(g)]}, ${W(g)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${m>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:m,mailVorlageKey:p==="error"?"bs_tag_fehlt":null})}else{const p=m>=4?"error":m>=2?"warn":"info";Me(s,a,{datum:h,wochentag:Ce(g),typ:"stempelzeit_fehlt",schweregrad:p,titel:`Keine Stempelzeit am ${W(g)}`,beschreibung:`Am ${Se[Ce(g)]}, ${W(g)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${m>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:m,mailVorlageKey:p==="error"?"stempelzeit_fehlt":null})}continue}if(f.tagestyp==="Berufsschule"&&f.ist!=null){const p=nn(t.berufsschulMuster,f.soll);p!=null&&f.ist<p-.5&&Me(s,a,{datum:h,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${W(g)}`,beschreibung:`Am ${Se[f.wochentag]}, ${W(g)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${p.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:p,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((u=f.zeitSpannen)==null?void 0:u.length)>1&&h>="2026-04-01"){const p=Rt(f,t);(p==null?void 0:p.typ)==="fehler_zeitwirtschaft"&&p.unrechtmaessigerVerlustMin>=5?Me(s,a,{datum:h,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:p.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${W(g)})`,beschreibung:`Am ${Se[f.wochentag]}, ${W(g)} wurden ${Math.round(p.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(p.gestempeltePause*60)} min, gesetzlich nötig (${p.gesetz.toUpperCase()}): ${Math.round(p.gesetzlichePflicht*60)} min. Differenz von ${p.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:p.unrechtmaessigerVerlustMin,abgezogen:p.abgezogenePause,gestempelt:p.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(p==null?void 0:p.typ)==="aufstockung_legal"&&p.aufstockungMin>=10&&Me(s,a,{datum:h,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${W(g)}) — ${p.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Se[f.wochentag]}, ${W(g)} hast du nur ${Math.round(p.gestempeltePause*60)} min Pause gemacht. Gesetz (${p.gesetz.toUpperCase()}) schreibt ${Math.round(p.gesetzlichePflicht*60)} min vor. Fehlende ${p.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}const o={error:0,warn:1,info:2};return s.sort((g,h)=>{const f=o[g.schweregrad]-o[h.schweregrad];return f!==0?f:h.datum.localeCompare(g.datum)}),s}function an(e,t=new Set){var a,s,r,l;const n=[];for(const c of e){const i=((a=c.glz)==null?void 0:a.saldoVorperiode)??0,o=((s=c.glz)==null?void 0:s.saldoAktuellePeriode)??0,d=((r=c.glz)==null?void 0:r.umgebuchteStunden)??0,u=(l=c.glz)==null?void 0:l.saldoGesamt;if(u==null)continue;const g=i+o+d,h=Math.abs(u-g);if(h>.03){const f=`${c.monatKey}-saldo_plausi`;t.has(f)||n.push({datum:`${c.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${c.monatKey}`,beschreibung:`Rechnung: Vorperiode ${i.toFixed(2)} + aktuelle Periode ${o.toFixed(2)} + umgebucht ${d.toFixed(2)} = ${g.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${h.toFixed(2)}h.`,soll:g,ist:u})}}return n}function Me(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function Ce(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const is={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},Ee={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Vielen Dank!`}};function Ge(e,t){const n=Ee[e];return n?{...n,...t??{}}:null}function sn(e,t){const n=St(e.text,t);return{betreff:St(e.betreff,t),text:n}}function St(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function rn(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?Zt(n).split(", ")[1]:"",wochentag:is[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function ln(e,t,n){const a=sn(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",a.betreff),r.set("body",a.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}let rs=0;function U(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++rs,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function Re(e){return U(e,{type:"error",duration:6e3})}function B(e){return U(e,{type:"success"})}const ls=3,os=2.5,cs={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function Ke(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const r of t.warnungen??[])n.has(r.datum)||n.set(r.datum,[]),n.get(r.datum).push(r);const a=[];let s=null;for(const r of e)(!s||s.key!==r.wocheKey)&&(s={key:r.wocheKey,tage:[]},a.push(s)),s.tage.push(r);return`<div class="tages-liste">${a.map(r=>ds(r,n)).join("")}</div>`}function ds(e,t){var d;const n=e.tage.reduce((u,g)=>u+we(g),0),a=e.tage.reduce((u,g)=>u+(g.diff??0),0),s=(d=e.tage[0])==null?void 0:d.datum,r=s?Le(C(s)):"",l=e.key?e.key.split("-")[1]:"?",c=a>.05?"pos":a<-.05?"neg":"flat",i=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",o=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${y(l)}</span>
          <span class="woche-header-range tabular">${y(r)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${o}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${c}">${i}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>us(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function us(e,t=[]){const n=e.diff??0,a=n>0,s=a?ls:os,r=Math.min(150,Math.abs(n)/s*50),l=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",c=Nt(e.zeitSpannen),i=e.saldo??0,o=t.length>0,d=o?hs(t):"",u=o?t.map(h=>`${h.titel}${h.beschreibung?`
`+h.beschreibung:""}`).join(`

`):"",g=o?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${o?" has-warn severity-"+g:""}">
      <div class="tag-row-datum">
        <div class="tabular">${y(W(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${gs(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${o?"false":"true"}">
        ${o?`<span class="tag-row-warn severity-${g}" title="${y(u)}">${d}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${fs(e.tagestyp)}">${y(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${en(c,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const h=Oe(e.ist),[f,m]=h.split(":");return e.ist<=0?`<div class="ist-wert">${h}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${f}" title="${f} Stunden kopieren">${f}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${m}" title="${m} Minuten kopieren">${m}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Oe(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${r}%; background: ${l};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
        ${n!==0?(a?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${i>=0?"+":""}${i.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function gs(e){return cs[e]??e}function hs(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function fs(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Je(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a);const s=n.textContent;n.classList.add("ok"),n.textContent="✓",setTimeout(()=>{n.classList.remove("ok"),n.textContent=s},800)}catch{B(`Bitte kopieren: ${a}`)}}))}const Mt=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function zt({root:e}){const[t,n,a,s,r,l,c]=await Promise.all([J(),fe(),Z(),ts(),ja("dashboardZeitraum",14),ft(),me()]),i=Object.fromEntries(l.map(x=>[x.key,x]));if(a.length===0){e.innerHTML=ps();return}const o=qe(a,n),d=o.length;let u=r;typeof u=="number"&&u>d&&(u="alles");const g=new Set(s.map(x=>x.key)),h=c!=null&&c.stichtagAuswertung?new Date(c.stichtagAuswertung):new Date,f=xe(a,t,h,g),m=an(n,g),b=[...f,...m],p=ka(o),M=p>.05?"positive":p<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${je(W(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value ${M}">${j(p,{signed:!0,suffix:""})}</div>
        <div class="saldo-unit">Stunden · tagesaktuell</div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${Mt.map(x=>{const E=typeof x.key=="number"&&x.key>d;return`<button type="button" data-key="${x.key}" class="${u===x.key?"active":""}" ${E?'disabled style="opacity:0.4"':""}>${x.label}</button>`}).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${b.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${b.slice(0,8).map(x=>ms(x,t,i)).join("")}
        ${b.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${b.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${Mt.map(x=>{const E=typeof x.key=="number"&&x.key>d;return`<button type="button" data-key="${x.key}" class="${u===x.key?"active":""}" ${E?'disabled style="opacity:0.4"':""}>${x.label}</button>`}).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,Dt(u,e,o,b);const I=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");I().forEach(x=>{x.addEventListener("click",async()=>{if(x.disabled)return;const E=x.getAttribute("data-key"),K=E==="alles"?"alles":parseInt(E,10);I().forEach(q=>q.classList.toggle("active",q.getAttribute("data-key")===E)),await qa("dashboardZeitraum",K),Dt(K,e,o,b)})}),e.addEventListener("click",async x=>{const E=x.target.closest(".ist-part");if(E){x.preventDefault(),x.stopPropagation();const $=E.getAttribute("data-val");try{await navigator.clipboard.writeText($);const S=E.textContent;E.classList.add("ok"),E.textContent="✓",setTimeout(()=>{E.classList.remove("ok"),E.textContent=S},800)}catch{B(`Bitte kopieren: ${$}`)}return}const K=x.target.closest(".btn-dismiss");if(!K)return;const q=K.getAttribute("data-datum"),z=K.getAttribute("data-typ");if(!q||!z)return;await es(q,z),B("Warnung ausgeblendet.");const H=K.closest(".alert");H&&(H.style.display="none")})}function Dt(e,t,n,a=[]){const s=xa(n,e),r=$a(s);requestAnimationFrame(()=>{const o=t.querySelector("#saldo-chart");Ze(o,s)});const l=t.querySelector("#hero-bewegung");if(l){const o=r>.05?"up":r<-.05?"down":"flat",d=r>.05?"↑":r<-.05?"↓":"→";l.className=`saldo-trend ${o}`,l.innerHTML=`${d} ${Math.abs(r)<.01?"Unverändert":j(r,{signed:!0})} im Zeitraum`}const c=t.querySelector("#tage-info");if(c){const o=s.length;c.textContent=`${o} ${o===1?"Tag":"Tage"}`}const i=t.querySelector("#tage-liste");i&&(i.innerHTML=Ke(s.slice().reverse(),{warnungen:a.filter(o=>s.some(d=>d.datum===o.datum))}))}function ms(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=Ge(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(r){const l=rn(t,e);s=ln(t,r,l)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${je(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${je(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${et(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${et(e.datum)}" data-typ="${et(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function ps(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function je(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function et(e){return je(e)}const vs="/better-ess/assets/pdf.worker.min-yatZIOMy.mjs";On.workerSrc=vs;const At={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},bs=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function ys(e){var i,o;const n=await Hn({data:e}).promise,a=[];let s=0;for(let d=1;d<=n.numPages;d++){const g=await(await n.getPage(d)).getTextContent();s+=g.items.length;const h=ws(g.items);for(const f of h)a.push({page:d,text:f})}const r=xs(a),{tage:l,monate:c}=ks(a);try{const d=await n.getMetadata();r.producer=((i=d==null?void 0:d.info)==null?void 0:i.Producer)??null,r.creator=((o=d==null?void 0:d.info)==null?void 0:o.Creator)??null}catch{}return r.totalTextItems=s,{meta:r,tage:l,monate:c}}function ws(e){if(!e.length)return[];const t=e.slice().sort((l,c)=>{const i=c.transform[5]-l.transform[5];return Math.abs(i)>2?i:l.transform[4]-c.transform[4]}),n=[];let a=null,s=[];const r=3;for(const l of t){const c=l.transform[5];a==null||Math.abs(c-a)<=r?(s.push(l),a==null&&(a=c)):(n.push(Tt(s)),s=[l],a=c)}return s.length&&n.push(Tt(s)),n.filter(l=>l.trim().length>0)}function Tt(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function xs(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,l=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);l&&(t.zeitraumVon=Ae(l[1]),t.zeitraumBis=Ae(l[2]));const c=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(c&&(t.stichtagAuswertung=Ae(c[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const i=(((n=e[s+1])==null?void 0:n.text)??"").trim();let o=i.split(/\s{2,}/);o.length<3&&(o=i.split(/\s+/)),o.length>=3&&/^\d/.test(o[0])&&(t.personalnummer=o[0],t.kostenstelle=o[1],t.personalbereich=o[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const i=(((a=e[s+1])==null?void 0:a.text)??"").trim();let o=i.split(/\s{2,}/);o.length<3&&(o=i.split(/\s+/)),o.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(o[0])&&(t.einstellungsdatum=Ae(o[0]),t.mitarbeiterkreis=o[1],t.arbeitszeitplanregel=o[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let i=s+1;i<Math.min(s+8,e.length);i++){const o=e[i].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(o)&&!/kanarya/i.test(o)&&!/tel/i.test(o)){t.name=o;break}}}return t}function ks(e,t){var i;const n=[],a=[];let s=null,r=null,l=!1,c=0;for(;c<e.length;){const o=e[c].text,d=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(o);if(d){const f=d[1].trim(),m=parseInt(d[2],10),b=At[f]??At[f.replace("ä","ae")]??null;b&&(s={jahr:m,monat:b,monatKey:`${m}-${String(b).padStart(2,"0")}`},l=!0,r=null),c++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(o)){const f=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(o),m=Ae(f[1]);r={monatKey:(s==null?void 0:s.monatKey)??Ut(m),stichtag:m,glz:{},flexi:{},zeitkonten:{},raw:{}},c=$s(e,c+1,r),a.push(r);continue}let u=s;const g=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(o.trim());if(g&&s){const f=parseInt(g[1],10);l&&f>=20?u=zs(s):f<=15&&(l=!1)}const h=Et(o,u);if(h){const f=[];let m=c+1;for(;m<e.length;){const p=e[m].text;if(/^\s*\d{4}\s+Umbuchung/.test(p)||Et(p,s)||/Wochensumme/i.test(p)||/Monats.bersicht/i.test(p)||/Monat:\s*[A-Za-z]/i.test(p))break;const M=Ss(p);if(M){f.push(M),m++;continue}break}if(f.length&&h.zeitSpannen.push(...f),h.tagestyp==="Wochenende"||h.wochentag==="SA"||h.wochentag==="SO"){c=m;continue}(h.ist!=null||h.soll!=null||(((i=h.zeitSpannen)==null?void 0:i.length)??0)>0||h.tagestyp!=null)&&n.push(h),c=m;continue}c++}return{tage:n,monate:a}}function $s(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const r=e[a].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let l;for(;(l=s.exec(r))!=null;){const c=l[1],i=l[2].trim(),o=Ht(l[3]);n.raw[c]={beschreibung:i,wert:o},c==="0008"&&(n.glz.saldoVorperiode=o),c==="8016"&&(n.glz.saldoAktuellePeriode=o),c==="9802"&&(n.glz.umgebuchteStunden=o),c==="0005"&&(n.glz.saldoGesamt=o),c==="9803"&&(n.glz.ueberzaehligeStd=o),c==="0050"&&(n.zeitkonten.produktivstunden=o),c==="9011"&&(n.flexi.jahreskontoVorperiode=o),c==="9010"&&(n.flexi.jahreskontoSaldo=o),c==="9020"&&(n.flexi.langzeitkontoSaldo=o),c==="9203"&&(n.zeitkonten.azMonatsendeUeber216=o),c==="9207"&&(n.zeitkonten.auszahlungBav=o),c==="9205"&&(n.zeitkonten.summeAuszahlung=o)}if(a++,a-t>80)break}return a}function Et(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),r=a[2],l=(a[3]??"").trim();let c=t.jahr,i=t.monat;const o=new Date(c,i-1,s),d={datum:Ma(o),datumDate:o.toISOString(),wochentag:r,tagNr:s,monatKey:Ut(o),wocheKey:Sa(o),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return l?(Ms(l,d),d):(d.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,d)}function Ss(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function Ms(e,t){let n=null,a=e;for(const d of bs)if(e.startsWith(d)){n=d,a=e.slice(d.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Ds(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,l=/^-?[\d,.]+-?$/;let c=0;for(;s[c]&&r.test(s[c])&&s[c+1]&&r.test(s[c+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[c],bis:s[c+1]}),c+=2;const i=[];for(;c<s.length&&l.test(s[c]);){const d=Ht(s[c]);d!=null&&i.push(d),c++}let o=s[c];i.length>=5?([t.ist,t.soll,t.diff,t.pause]=i,o||(o=String(i[4]))):i.length===4?[t.ist,t.soll,t.diff,t.pause]=i:i.length===3?[t.ist,t.soll,t.diff]=i:i.length===2?[t.ist,t.soll]=i:i.length===1&&(t.ist=i[0]),o&&(t.tazp=String(o))}function zs(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Ds(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function te(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:r="default"}=t;return As({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:r,kind:"confirm"})}function As({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:r}){return new Promise(l=>{const c=document.activeElement,i=document.createElement("div");i.className="app-dialog-overlay",i.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${We(t)}</h3>
        <div class="app-dialog-message">${Ts(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${We(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${We(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("is-open"));const o=i.querySelector(".app-dialog-confirm"),d=i.querySelector(".app-dialog-cancel"),u=h=>{i.classList.remove("is-open"),setTimeout(()=>{if(i.remove(),document.removeEventListener("keydown",g),c&&c.focus)try{c.focus()}catch{}l(h)},180)},g=h=>{h.key==="Escape"?(h.preventDefault(),u(!1)):h.key==="Enter"&&(h.preventDefault(),u(!0))};o==null||o.addEventListener("click",()=>u(!0)),d==null||d.addEventListener("click",()=>u(!1)),i.addEventListener("click",h=>{h.target===i&&u(!1)}),document.addEventListener("keydown",g),setTimeout(()=>o==null?void 0:o.focus(),50)})}function We(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ts(e){return We(e).replace(/\n/g,"<br>")}const on="better-ess-tour-completed",mt=typeof import.meta<"u"?"/better-ess/":"/",Es=mt+"tutorial/speichern.png",Ps=mt+"tutorial/download.png",Fs=mt+"tutorial/zeitraum.png",ye=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await _e("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Ps,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Fs,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Es,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await _e(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await _e("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],Pt=ye.findIndex(e=>e.icon==="✨");let T=null,de=null;function cn(){T===null&&(pt(),T={idx:0},ne())}function Ls(e){return e?!1:!localStorage.getItem(on)}function Ks(){localStorage.setItem(on,"1")}function Cs(){return T!==null}function pt(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),de&&(de(),de=null),T=null}function Be(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(b=>{b&&(b.style.opacity="0")});let h=t;!h?(h=document.createElement("div"),h.className="tour-blur-frame full",document.body.appendChild(h)):h.style.opacity="1";const m=document.querySelector(".tour-highlight-border");m&&(m.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,r=Math.max(0,a.left-s),l=Math.max(0,a.top-s),c=a.width+s*2,i=a.height+s*2,o=window.innerWidth,d=window.innerHeight,u={top:{top:0,left:0,width:o,height:l},left:{top:l,left:0,width:r,height:i},right:{top:l,left:r+c,width:o-(r+c),height:i},bottom:{top:l+i,left:0,width:o,height:d-(l+i)}};for(const[h,f]of Object.entries(u)){let m=n[Object.keys(u).indexOf(h)];m||(m=document.createElement("div"),m.className="tour-blur-frame",m.dataset.side=h,document.body.appendChild(m)),m.style.top=f.top+"px",m.style.left=f.left+"px",m.style.width=Math.max(0,f.width)+"px",m.style.height=Math.max(0,f.height)+"px",m.style.opacity=f.width<=0||f.height<=0?"0":"1"}let g=document.querySelector(".tour-highlight-border");g||(g=document.createElement("div"),g.className="tour-highlight-border",document.body.appendChild(g)),g.style.top=l+"px",g.style.left=r+"px",g.style.width=c+"px",g.style.height=i+"px",g.style.opacity="1",g.style.display=""}function vt(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Bs(e){const t=vt(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function Ft(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Ws(e){const t=vt();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function _e(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function ne(){var c,i,o;if(!T)return;const e=T.overrideStep||ye[T.idx];if(T.overrideStep=null,!e){it();return}if(de&&(de(),de=null),e.type==="download-modal")return Ft(),Be(null),_s(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await _e(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const d=e.fallback;if(d.onBefore)try{await d.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return T.overrideStep=d,ne()}if(!t&&e.optional)return T.idx++,ne();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),T.idx++,ne();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(d=>setTimeout(d,250)),Be(t),vt(),requestAnimationFrame(()=>Bs(t))}else Be(null)}else Ft(),Be(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=T.idx===0,s=T.idx===ye.length-1,r=!!e.waitForEvent,l=r?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${T.idx+1} / ${ye.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${r?'disabled style="opacity:0.5;cursor:default"':""}>${l}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Vs(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const d=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{d&&(d.style.opacity="1"),n.style.opacity="1"})}if((c=n.querySelector(".tour-skip"))==null||c.addEventListener("click",()=>{it()}),a||(i=n.querySelector(".tour-prev"))==null||i.addEventListener("click",async()=>{T.idx=Math.max(0,T.idx-1),await ne()}),!r)(o=n.querySelector(".tour-next"))==null||o.addEventListener("click",async()=>{if(e.autoClick&&t){await Ws();try{const d=t.getAttribute("href");d&&d.startsWith("#/")?window.location.hash=d.slice(1):t.click()}catch(d){console.warn("tour autoClick error:",d)}if(e.onAfterClick)try{await e.onAfterClick()}catch(d){console.warn("tour onAfterClick error:",d)}else await new Promise(d=>setTimeout(d,350))}else if(e.onNext)try{await e.onNext()}catch(d){console.warn("tour onNext error:",d)}T.idx++,await ne()});else{const d=T.idx,u=d<Pt,g=async()=>{pt(),document.querySelectorAll(".upload-modal-overlay").forEach(h=>h.remove()),await new Promise(h=>setTimeout(h,300)),T={idx:u?Pt:d+1},await ne()};document.addEventListener(e.waitForEvent,g,{once:!0}),de=()=>document.removeEventListener(e.waitForEvent,g)}}function _s(e){var a,s,r;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=T.idx===0;T.idx,ye.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${T.idx+1} / ${ye.length}</span>
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
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{it()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{T.idx=Math.max(0,T.idx-1),await ne()}),(r=t.querySelector(".tour-next"))==null||r.addEventListener("click",async()=>{T.idx++,await ne()})}function Vs(e,t,n){const a=t.getBoundingClientRect(),s=16,r=e.offsetWidth||360,l=e.offsetHeight||220,c=window.innerWidth,i=window.innerHeight,o=[n,"right","bottom","left","top"];let d=null;for(const h of o)if((()=>{switch(h){case"right":return a.right+s+r<=c;case"left":return a.left-s-r>=0;case"bottom":return a.bottom+s+l<=i;case"top":return a.top-s-l>=0}})()){d=h;break}d=d||n;let u,g;switch(d){case"right":u=a.top+a.height/2-l/2,g=a.right+s;break;case"left":u=a.top+a.height/2-l/2,g=a.left-r-s;break;case"bottom":u=a.bottom+s,g=a.left+a.width/2-r/2;break;case"top":default:u=a.top-l-s,g=a.left+a.width/2-r/2;break}u=Math.max(s,Math.min(i-l-s,u)),g=Math.max(s,Math.min(c-r-s,g)),e.style.position="fixed",e.style.top=u+"px",e.style.left=g+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function it(){pt(),Ks()}async function Is({root:e}){var r;const t=await Yt(),n=await J();e.innerHTML=`
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
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");a.addEventListener("click",()=>s.click()),a.addEventListener("dragover",l=>{l.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async l=>{var i;l.preventDefault(),a.classList.remove("drag");const c=(i=l.dataTransfer.files)==null?void 0:i[0];c&&await Kt(c,e,n)}),s.addEventListener("change",async l=>{var i;const c=(i=l.target.files)==null?void 0:i[0];c&&await Kt(c,e,n)}),e.querySelector("#btn-export").addEventListener("click",Ns),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Rs),e.querySelector("#btn-clear-parsed").addEventListener("click",Hs),e.querySelector("#btn-reset").addEventListener("click",js),(r=e.querySelector("#btn-tour-restart"))==null||r.addEventListener("click",()=>cn()),Os()}let Lt=!1;function Os(){Lt||(Lt=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&dn(t.src,t.alt)}))}function dn(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&a()};n.addEventListener("click",r=>{(r.target===n||r.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Hs(){await te("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Qt(),B("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function un(e){return`
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
            <td>${y(qs(t.hochladeDatum))}</td>
            <td>${y(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?y(W(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?y(W(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?y(W(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function Kt(e,t,n){var r,l,c,i;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){ze({type:"error",title:"Falscher Dateityp",desc:`<strong>${y(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){ze({type:"error",title:"Datei zu groß",desc:`<strong>${y(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${y(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const o=await e.arrayBuffer(),d=await ys(o);if(d.tage.length===0&&!d.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",ze({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(r=d.meta)==null?void 0:r.producer}),Re("PDF enthält keinen extrahierbaren Text.");return}const u=await me(),g=u==null?void 0:u.personalnummer,h=d.meta.personalnummer;if(g&&h&&g!==h){const I=(u==null?void 0:u.name)||`Personalnr. ${g}`,x=d.meta.name||`Personalnr. ${h}`;if(!await te(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${I}
Jetzt:  ${x}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${y(I)}) erneut hoch.</p>
            </div>
          </div>`;return}await Qt();const K=await J();await He({...K,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const f=await Za(d.tage,d.monate,d.meta.stichtagAuswertung);(f.skippedTage>0||f.skippedMonate>0)&&console.info(`[upload] ${f.skippedTage} Tage und ${f.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Ua({dateiname:e.name,personalnummer:d.meta.personalnummer??null,name:d.meta.name??null,zeitraumVon:((l=d.meta.zeitraumVon)==null?void 0:l.toISOString())??null,zeitraumBis:((c=d.meta.zeitraumBis)==null?void 0:c.toISOString())??null,stichtagAuswertung:((i=d.meta.stichtagAuswertung)==null?void 0:i.toISOString())??null,tageCount:d.tage.length,monateCount:d.monate.length});const m=await Z(),b=tn(m),p={...Xt(),...n};(b.wochentageWoechentlich.length>0||b.wochentage14Taegig.length>0)&&(p.berufsschulMuster=b),await He(p),a.innerHTML="",Cs()||ze({type:"success",title:"PDF erfolgreich eingelesen",desc:d.meta.zeitraumVon?`Zeitraum: ${W(d.meta.zeitraumVon)} – ${W(d.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:d.tage.length,label:"Tage"},{num:d.monate.length,label:"Monatsübersichten"}]}),B(`PDF verarbeitet: ${d.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:d.tage.length,monateCount:d.monate.length}}));const M=await Yt();t.querySelector("#uploads-list").innerHTML=un(M)}catch(o){console.error(o),a.innerHTML="",ze({type:"error",title:"Fehler beim Parsen",desc:y(o.message||String(o)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),Re("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function Ns(){try{const e=await Xa(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),B("Backup heruntergeladen.")}catch(e){Re(`Export fehlgeschlagen: ${e.message}`)}}async function Rs(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await te("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await Ya(s),B("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){Re(`Import fehlgeschlagen: ${a.message}`)}}async function js(){await te("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await te("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await Ja(),B("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function qs(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function ze(e){const{type:t,title:n,desc:a,hint:s,screenshot:r,stats:l,producer:c}=e,i=document.createElement("div");i.className="upload-modal-overlay";const o=`
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
    </svg>`,u=l!=null&&l.length?`
    <div class="upload-modal-stats">
      ${l.map(p=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${y(String(p.num))}</div>
          <div class="upload-modal-stat-label">${y(p.label)}</div>
        </div>
      `).join("")}
    </div>`:"",g=r?`
    <img class="upload-modal-hint-img zoomable" src="/better-ess/tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",h=c?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${y(c)}"</p>`:"",f=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/monat" class="btn">Monate ansehen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;i.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?o:d}
      </div>
      <h2 class="upload-modal-title">${y(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${g}
      ${h}
      <div class="upload-modal-actions">${f}</div>
    </div>`,document.body.appendChild(i);const m=()=>{i.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>i.remove(),150),document.removeEventListener("keydown",b)},b=p=>{p.key==="Escape"&&m()};document.addEventListener("keydown",b),i.addEventListener("click",p=>{if(p.target===i){m();return}if(p.target.closest(".upload-modal-close-btn")){m();return}if(p.target.closest(".upload-modal-actions a, .upload-modal-actions button")){m();return}const M=p.target.closest("img.zoomable");M&&dn(M.src,M.alt)})}const Ct={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Zs({root:e}){var s,r,l,c,i;const t=await J(),n=t.berufsschulMuster??{},a=(((s=n.wochentageWoechentlich)==null?void 0:s.length)??0)>0||(((r=n.wochentage14Taegig)==null?void 0:r.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${Bt(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${Bt(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card" style="grid-column: 1 / -1;">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${a?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((l=n.wochentageWoechentlich)==null?void 0:l.map(o=>Ct[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((c=n.wochentage14Taegig)==null?void 0:c.map(o=>Ct[o]).join(", "))||"—"}</strong>${n.referenzDatum14Taegig?` <span class="hint">(Anker: ${W(new Date(n.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${n.stundenProTag!=null?n.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${n.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${n.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((i=n.stundenProTag)==null?void 0:i.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var g,h;o.preventDefault();const d=new FormData(o.target),u={...t,ueber18:d.get("ueber18")==="on",zeitwirtschaftEmail:((g=d.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((h=d.get("zeitwirtschaftAnrede"))==null?void 0:h.trim())||"Frau Kanarya"};await He(u),B("Profil gespeichert.")})}function Bt(e){return String(e??"").replace(/"/g,"&quot;")}async function Us({root:e}){var s;const t=await fe(),n=await Z(),a={};for(const r of n)a[s=r.monatKey]??(a[s]=[]),a[r.monatKey].push(r);if(t.length===0){e.innerHTML=Qs("Noch keine Monatsdaten. Lade zuerst ein PDF unter Daten hoch.");return}e.innerHTML=`
    <h1 class="view-title">Monate</h1>
    <p class="view-subtitle">${t.length} Monate erfasst. Klicke für Details.</p>

    <div class="grid cols-2">
      ${t.slice().reverse().map(r=>{var g;const c=(a[r.monatKey]??[]).filter(h=>h.ist!=null&&h.ist>0),i=c.reduce((h,f)=>h+(f.ist??0),0),o=c.reduce((h,f)=>h+(f.soll??0),0),d=i-o,u=(g=r.glz)==null?void 0:g.saldoGesamt;return`
          <a href="#/monat/${r.monatKey}" class="card" style="text-decoration: none; color: inherit; display: block;">
            <div class="card-split" style="margin-bottom: 12px;">
              <h2 style="margin: 0;">${rt(r.monatKey)}</h2>
              <span class="saldo-trend ${u>.05?"up":u<-.05?"down":"flat"}" style="margin: 0; font-size: 12px;">
                Saldo: <strong>${j(u??0,{signed:!0})}</strong>
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Arbeitstage</div>
                <div style="font-size: 22px; font-weight: 600;" class="tabular">${c.length}</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Ist / Soll</div>
                <div style="font-size: 14px; font-weight: 500;" class="tabular">${i.toFixed(1)} / ${o.toFixed(1)}h</div>
              </div>
              <div>
                <div style="color: var(--fg-subtle); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Diff</div>
                <div class="tabular" style="font-size: 14px; font-weight: 500; color: ${d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg)"};">${j(d,{signed:!0})}</div>
              </div>
            </div>
          </a>
        `}).join("")}
    </div>
  `}async function Gs({params:e,root:t}){const n=e.yyyymm,[a,s,r,l]=await Promise.all([Z(),fe(),J(),me()]),c=s.find(g=>g.monatKey===n),o=qe(a,s).filter(g=>g.monatKey===n);if(!o.length){t.innerHTML=`<h1 class="view-title">Monat ${rt(n)}</h1><p class="view-subtitle">Keine Daten für diesen Monat.</p><a href="#/monat" class="btn">← Alle Monate</a>`;return}const d=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,u=xe(a,r,d).filter(g=>g.datum.startsWith(n));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat" class="btn sm">← Alle Monate</a>
    </div>
    <h1 class="view-title">${rt(n)}</h1>
    <p class="view-subtitle">${o.length} Tage · ${u.length} Auffälligkeiten</p>

    ${c?Js(c):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-monat"></canvas></div>
    </div>

    ${u.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${u.map(g=>Ys(g)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${Xs(o)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-monat">${Ke(o.slice().reverse(),{warnungen:u})}</div>
    </div>
  `,requestAnimationFrame(()=>{Ze(t.querySelector("#chart-monat"),o)}),Je(t.querySelector("#tage-liste-monat"))}function Js(e){var r,l,c,i;const t=((r=e.glz)==null?void 0:r.saldoGesamt)??0,n=((l=e.glz)==null?void 0:l.saldoVorperiode)??0,a=((c=e.glz)==null?void 0:c.saldoAktuellePeriode)??0,s=o=>o>.05?"var(--success)":o<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-4" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${j(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${j(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${j(a,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Produktivstd.</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${j(((i=e.zeitkonten)==null?void 0:i.produktivstunden)??0,{suffix:""})}</div>
      </div>
    </div>
  `}function Xs(e){var a;const t={};for(const s of e)t[a=s.wocheKey]??(t[a]={key:s.wocheKey,tage:[],ist:0,soll:0}),t[s.wocheKey].tage.push(s),t[s.wocheKey].ist+=we(s),t[s.wocheKey].soll+=Fe(s);const n=Object.keys(t).sort();return n.length?n.map(s=>{var u;const r=t[s],l=+(r.ist-r.soll).toFixed(2),c=l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg-muted)",i=(u=r.tage[0])==null?void 0:u.datum,o=i?Le(C(i)):"",d=s.split("-")[1]||"?";return`
      <a href="#/woche/${s}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${y(d)}</div>
        <div>
          <div class="list-item-title tabular">${y(o)}</div>
          <div class="list-item-sub">${r.tage.length} Tage · Ist ${r.ist.toFixed(2).replace(".",",")}h · Soll ${r.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${c};">${j(l,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>
    `}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function Ys(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${y(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${y(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/" class="btn primary sm">Zum Dashboard</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function rt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t),parseInt(n)-1,1);return L(a,"LLLL yyyy",{locale:Q})}function Qs(e){return`<div class="empty-state"><div class="empty-state-icon">📭</div><p>${y(e)}</p><a href="#/daten" class="btn primary">Zu Daten</a></div>`}async function ei({root:e}){var s;const t=await Z();if(!t.length){e.innerHTML='<h1 class="view-title">Wochen</h1><p class="view-subtitle">Noch keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n={};for(const r of t)n[s=r.wocheKey]??(n[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),n[r.wocheKey].tage.push(r),n[r.wocheKey].ist+=we(r),n[r.wocheKey].soll+=Fe(r);const a=Object.keys(n).sort().reverse();e.innerHTML=`
    <h1 class="view-title">Wochen</h1>
    <p class="view-subtitle">${a.length} Wochen erfasst.</p>

    <div>
      ${a.map(r=>{var u;const l=n[r],c=+(l.ist-l.soll).toFixed(2),i=c>.05?"var(--success)":c<-.05?"var(--danger)":"var(--fg-muted)",o=(u=l.tage[0])==null?void 0:u.datum,d=o?Le(C(o)):"";return`
          <a href="#/woche/${r}" class="list-item">
            <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">${y(gn(r))}</div>
            <div>
              <div class="list-item-title tabular">${y(d)}</div>
              <div class="list-item-sub">${l.tage.length} Tage · Ist ${l.ist.toFixed(2).replace(".",",")}h · Soll ${l.soll.toFixed(2).replace(".",",")}h</div>
            </div>
            <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${i};">${j(c,{signed:!0})}</div>
            <div style="color: var(--fg-subtle);">→</div>
          </a>
        `}).join("")}
    </div>
  `}async function ti({params:e,root:t}){const n=e.yyyykw,[a,s,r,l]=await Promise.all([Z(),fe(),J(),me()]),i=qe(a,s).filter(m=>m.wocheKey===n);if(!i.length){t.innerHTML=`<h1 class="view-title">KW ${y(n)}</h1><p>Keine Daten.</p><a href="#/woche" class="btn">← Alle Wochen</a>`;return}const o=i.reduce((m,b)=>m+we(b),0),d=i.reduce((m,b)=>m+Fe(b),0),u=+(o-d).toFixed(2),g=m=>m>.05?"var(--success)":m<-.05?"var(--danger)":"var(--fg)",h=l!=null&&l.stichtagAuswertung?new Date(l.stichtagAuswertung):new Date,f=xe(a,r,h).filter(m=>i.some(b=>b.datum===m.datum));t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/woche" class="btn sm">← Alle Wochen</a>
    </div>
    <h1 class="view-title">${y(gn(n))}</h1>
    <p class="view-subtitle">${i.length} Tage · ${f.length} Auffälligkeiten</p>

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${d.toFixed(2).replace(".",",")}h</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${g(u)};">${j(u,{signed:!0})}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap"><canvas id="chart-woche"></canvas></div>
    </div>

    ${f.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${f.map(m=>ni(m)).join("")}
      </div>
    `:""}

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-woche">${Ke(i,{warnungen:f})}</div>
    </div>
  `,requestAnimationFrame(()=>{Ze(t.querySelector("#chart-woche"),i)}),Je(t.querySelector("#tage-liste-woche"))}function ni(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${y(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${y(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/" class="btn primary sm">Zum Dashboard</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>
  `}function gn(e){const[t,n]=e.split("-");return`KW ${n} · ${t}`}async function ai({params:e,root:t}){var o,d,u;const n=e.datum,a=await v.tage.get(n),s=await J();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=C(n),l=a.tagestyp==="Stempelzeit"?Rt(a,s):null,c=Ue(r,s.berufsschulMuster),i=Nt(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/monat/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${Zt(r)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(o=a.wocheKey)==null?void 0:o.split("-")[1]}</p>

    ${i?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${en(i,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?Oe(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?j(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(d=a.zeitSpannen)!=null&&d.length?a.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${De(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${si(a.tagestyp)}">${De(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${c?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${De(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${De(a.monatKey)}</div>
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
              <div class="alert-body">${De(l.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function si(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function De(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const ii=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:"alles",label:"Alles"}];async function ri({root:e}){var r;const[t,n]=await Promise.all([Z(),fe()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}let a=t.length>30?30:"alles";e.innerHTML=`
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
          ${ii.map(l=>{const c=typeof l.key=="number"&&l.key>t.length;return`<button type="button" data-key="${l.key}" class="${a===l.key?"active":""}" ${c?'disabled style="opacity:0.4"':""}>${l.label}</button>`}).join("")}
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
  `;const s=()=>a==="alles"?t:t.slice(-a);requestAnimationFrame(()=>{Aa(e.querySelector("#c-saldo"),n),La(e.querySelector("#c-wochen"),t),wt(e.querySelector("#c-startend"),s()),Pa(e.querySelector("#c-wochentag"),t),Ea(e.querySelector("#c-pausen"),t),Fa(e.querySelector("#c-donut"),t),Ta(e.querySelector("#c-alle-tage"),t.slice(-30))}),(r=e.querySelector("#startend-zeitraum"))==null||r.addEventListener("click",l=>{const c=l.target.closest("button[data-key]");if(!c||c.disabled)return;const i=c.getAttribute("data-key"),o=i==="alles"?"alles":parseInt(i,10);o!==a&&(a=o,e.querySelectorAll("#startend-zeitraum button").forEach(d=>d.classList.toggle("active",d===c)),wt(e.querySelector("#c-startend"),s()))})}async function tt({params:e,root:t}){var N,X;const[n,a,s,r]=await Promise.all([Z(),fe(),J(),me()]);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=[...new Set(n.map(w=>w.monatKey))].sort(),c=e.yyyymm,i=l.includes(c)?c:l[l.length-1],o=n.filter(w=>w.monatKey===i),d=[...new Set(o.map(w=>w.wocheKey))].sort(),u=e.yyyykw,g=d.includes(u)?u:d[0],h=a.find(w=>w.monatKey===i),f=((N=h==null?void 0:h.glz)==null?void 0:N.saldoGesamt)??null,m=((X=h==null?void 0:h.glz)==null?void 0:X.saldoVorperiode)??null,b=f!=null&&m!=null?+(f-m).toFixed(2):null,p=l.indexOf(i),M=p>0?l[p-1]:null,I=p<l.length-1?l[p+1]:null,x=oi(i),K=qe(n,a).filter(w=>w.wocheKey===g),q=K.reduce((w,A)=>w+we(A),0),z=K.reduce((w,A)=>w+Fe(A),0),H=+(q-z).toFixed(2),$=w=>w>.05?"var(--success)":w<-.05?"var(--danger)":"var(--fg)",S=r!=null&&r.stichtagAuswertung?new Date(r.stichtagAuswertung):new Date,D=xe(n,s,S),P=D.filter(w=>K.some(A=>A.datum===w.datum)),k=D.filter(w=>o.some(A=>A.datum===w.datum)).length,_=d.map(w=>{var ve;const R=(ve=o.filter(ce=>ce.wocheKey===w).sort((ce,Xe)=>ce.datum.localeCompare(Xe.datum))[0])==null?void 0:ve.datum,pe=R?Le(C(R)):"";return{wk:w,kw:w.split("-")[1],range:pe}});t.innerHTML=`
    <h1 class="view-title">Kalender</h1>
    <p class="view-subtitle">Monat &amp; Woche zentral — links/rechts wechseln, unten die Wochen-Tabs.</p>

    <!-- Monats-Switcher -->
    <div class="card kalender-monat-bar">
      <div class="kalender-monat-nav">
        <a class="btn sm kalender-monat-btn ${M?"":"is-disabled"}"
           ${M?`href="#/kalender/${M}"`:'aria-disabled="true"'}
           title="Vorheriger Monat">←</a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${y(x)}</h2>
          <div class="hint">${o.length} Tage · ${k} Auffälligkeiten</div>
        </div>
        <a class="btn sm kalender-monat-btn ${I?"":"is-disabled"}"
           ${I?`href="#/kalender/${I}"`:'aria-disabled="true"'}
           title="Nächster Monat">→</a>
      </div>
      <div class="kalender-monat-saldo">
        ${f!=null?`
          <div class="kalender-monat-saldo-item">
            <span class="kalender-monat-saldo-label">Saldo Monatsende</span>
            <span class="tabular kalender-monat-saldo-wert" style="color: ${$(f)};">${j(f,{signed:!0})}</span>
          </div>
        `:""}
        ${b!=null?`
          <div class="kalender-monat-saldo-item">
            <span class="kalender-monat-saldo-label">Bewegung im Monat</span>
            <span class="tabular kalender-monat-saldo-wert" style="color: ${$(b)};">${j(b,{signed:!0})}</span>
          </div>
        `:""}
      </div>
    </div>

    <!-- Wochen-Tabs -->
    <div class="kalender-wochen-tabs" role="tablist" aria-label="Wochen des Monats">
      ${_.map(({wk:w,kw:A,range:R})=>`
        <a href="#/kalender/${i}/${w}"
           class="kalender-wochen-tab ${w===g?"active":""}"
           role="tab" aria-selected="${w===g}"
           title="${y(R)}">
          <span class="kalender-wochen-tab-kw">KW ${y(A)}</span>
          <span class="kalender-wochen-tab-range">${y(R)}</span>
        </a>`).join("")}
    </div>

    ${K.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <!-- Wochen-Detail -->
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${q.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${z.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${$(H)};">${j(H,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${P.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${y(g.split("-")[1]||"?")}</h2>
          ${P.map(w=>li(w)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${Ke(K,{warnungen:P})}</div>
      </div>
    `}
  `,K.length&&(requestAnimationFrame(()=>{const w=t.querySelector("#chart-kalender-woche");w&&Ze(w,K)}),Je(t.querySelector("#tage-liste-kalender")))}function li(e){return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i"}</div>
      <div class="alert-body">
        <div class="alert-title">${y(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${y(e.beschreibung)}</p>
        ${e.mailVorlageKey?`<div class="alert-actions"><a href="#/mails" class="btn primary sm">Zur Mail-Vorlage</a><a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a></div>`:""}
      </div>
    </div>`}function oi(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return L(a,"MMMM yyyy",{locale:Q})}const ci={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function nt({params:e,root:t}){const[n,a,s]=await Promise.all([Z(),J(),me()]),r=di(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${y(r.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const l=n.filter(r.predicate).sort((g,h)=>g.datum.localeCompare(h.datum)),c=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,o=xe(n,a,c).filter(g=>l.some(h=>h.datum===g.datum)),d=l.reduce((g,h)=>g+(h.ist??0),0),u=d>0?` · ${d.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${y(r.titel)}</h1>
    <p class="view-subtitle">${l.length} Tag${l.length===1?"":"e"} insgesamt${u}</p>

    ${l.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${Ke(l,{warnungen:o})}</div>
      </div>
    `}
  `,Je(t.querySelector("#tagestyp-tage-liste"))}function di(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=ci[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(ut(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}const hn="Fahrgelderstattung",ui="C4",fn="C5",mn="F4",pn="F5",ue=10,be=19;function Wt(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function gi(e){const t=(await gt(async()=>{const{default:m}=await import("./exceljs.min-BhfpbegZ.js").then(b=>b.e);return{default:m}},__vite__mapDeps([0,1]))).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(hn)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=m=>{const b=a.getCell(m).value;return b==null?"":typeof b=="object"&&b.text?String(b.text):typeof b=="object"&&b.richText?b.richText.map(p=>p.text).join(""):String(b)},r=s(fn).trim(),l=s(mn).trim(),c=s(pn).trim(),i=(l.match(/\d+/)||[""])[0],o=(c.match(/\d+/)||[""])[0],d=s(`C${ue}`).trim(),u=s(`E${ue}`).trim(),g=a.getCell(`G${ue}`).value,h=typeof g=="number"?g:parseFloat(String(g).replace(",","."))||0;let f=null;try{const m=new Set(a.getImages().map(p=>parseInt(p.imageId,10))),b=(n.media||[]).map((p,M)=>({media:p,index:M})).filter(({media:p,index:M})=>(p==null?void 0:p.type)==="image"&&!m.has(M)&&p.buffer);if(b.length>0){b.sort((x,E)=>(E.media.buffer.length||0)-(x.media.buffer.length||0));const p=b[0].media,M=p.buffer,I=M instanceof ArrayBuffer?M:M.buffer?M.buffer.slice(M.byteOffset||0,(M.byteOffset||0)+M.byteLength):null;if(I){const x=(p.extension||"").toLowerCase();f={bytes:I,extension:x==="jpg"?"jpeg":x||"png",quelle:"auto-aus-vorlage"}}}}catch(m){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",m)}return!r&&!i&&!o?{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — Name/Personalnummer/Kostenstelle wurden nicht erkannt. Bitte eine Original-Vorlage hochladen."}:r?{ok:!0,konstanten:{name:r,persNr:i,kst:o,vonHaltestelle:d,nachHaltestelle:u,betragProTag:h},unterschriftAuto:f}:{ok:!1,fehler:'Im Feld „Name, Vorname" der Vorlage (Zelle C5) ist nichts eingetragen — bitte die Vorlage prüfen.'}}async function hi({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:r}){const l=(await gt(async()=>{const{default:z}=await import("./exceljs.min-BhfpbegZ.js").then(H=>H.e);return{default:z}},__vite__mapDeps([0,1]))).default,c=new l.Workbook;try{await c.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const i=c.getWorksheet(hn)??c.worksheets[0];if(!i)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");const[o,d]=t.split("-").map(z=>parseInt(z,10)),u=new Date(o,d-1,1,12,0,0),g=L(u,"MMMM yy",{locale:Q}),h=i.getCell(ui);h.value=g,h.numFmt="@",i.getCell(fn).value=a.name,i.getCell(mn).value=`Pers.-Nr.: ${a.persNr}`,i.getCell(pn).value=`KST: ${a.kst}`;for(let z=ue;z<=be;z++)i.getCell(`A${z}`).value=null,i.getCell(`C${z}`).value=null,i.getCell(`E${z}`).value=null,i.getCell(`G${z}`).value=null;const f=be-ue+1,m=n.slice(0,f);for(let z=0;z<m.length;z++){const H=m[z],$=ue+z;i.getCell(`A${$}`).value=C(H.datum),i.getCell(`C${$}`).value=a.vonHaltestelle,i.getCell(`E${$}`).value=a.nachHaltestelle,i.getCell(`G${$}`).value=a.betragProTag}const b=+(m.length*(a.betragProTag??0)).toFixed(2),p=i.getCell(`G${be+1}`);p.value={formula:`SUM(G${ue}:G${be})`,result:b};const I=L(new Date,"dd.MM.yyyy"),x=i.getCell("A21");if(x.value=I,x.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&r){const z=c.addImage({buffer:s,extension:r}),H=197,$=80,S=55,D=185,P=vi(s);let k=D,_=S;if(P&&P.width>0&&P.height>0){const w=Math.min(D/P.width,S/P.height);k=Math.round(P.width*w),_=Math.round(P.height*w)}const X=Math.max(0,Math.round((H-k)/2))/$;i.addImage(z,{tl:{col:X,row:20.04},ext:{width:k,height:_},editAs:"oneCell"})}for(let z=be+3;z<=be+5;z++)for(const H of["A","B","C","D","E","F","G"]){const $=i.getCell(`${H}${z}`),S=$.value;typeof S=="string"&&/^[A-Z]\d+(-\d+)?$/.test(S.trim())&&($.value=null)}const E=await c.xlsx.writeBuffer(),K=new Blob([E],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),q=fi(a.name,u);return{blob:K,dateiname:q,anzahlTage:m.length,ueberzaehlig:n.length-m.length}}function fi(e,t){const n=L(t,"MMMM",{locale:Q}),a=L(t,"yy");let s=e;const r=/^(.+?),\s*(.+)$/.exec(e);return r&&(s=`${r[2].trim()} ${r[1].trim()}`),`Fahrgelderstattung ${s} ${n} ${a}.xlsx`}function Ve(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return L(new Date(t,n-1,1),"MMMM yyyy",{locale:Q})}function _t(e,t=null){const a={monat_jahr:Ve(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",r=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,l=Vt(s,a),c=Vt(r,a),i=new URLSearchParams;return i.set("cc","anika.kailer@putzmeister.com"),i.set("subject",l),i.set("body",c),`mailto:annika.mayer@putzmeister.com?${i.toString().replace(/\+/g,"%20")}`}function Vt(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function mi(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function pi(e,t,n,a){var g,h;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((g=s.wochentageWoechentlich)!=null&&g.length)&&!((h=s.wochentage14Taegig)!=null&&h.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[r,l]=e.split("-").map(f=>parseInt(f,10)),c=new Date(r,l-1,1),i=new Date(r,l,0),o=new Set(n.map(f=>f.datum)),d=[];let u=new Date(c);for(;u<=i;){if(!dt(u)&&Ue(u,s)){const f=L(u,"yyyy-MM-dd");u>a&&!o.has(f)&&d.push(f)}u=ct(u,1)}return{ausstehend:d,imMonatGesamt:n.length+d.length,vorhandenAnzahl:n.length}}function vi(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const l=n.getUint16(a+2);if(l<2)return null;a+=2+l}}return null}function bi(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Pe({root:e}){var p,M,I,x,E,K,q,z,H;const t=await Te();if(!t){yi(e);return}const[n,a,s,r]=await Promise.all([Z(),J(),me(),Qa("fahrgeld_abgabe")]),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,c=mi(n),i=new Date,o=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`;c.includes(o)||c.unshift(o);const d=c;e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattungs-Excel mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Vorlage geladen</h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${y(t.konstanten.name||"—")} ·
            Pers.-Nr. ${y(t.konstanten.persNr||"—")} ·
            KST ${y(t.konstanten.kst||"—")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${y(t.konstanten.vonHaltestelle||"—")} → ${y(t.konstanten.nachHaltestelle||"—")} ·
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
              <img src="${y(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der Excel leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(M=t.unterschrift)!=null&&M.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(I=t.unterschrift)!=null&&I.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${d.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var P;const $=d.map((k,_)=>{const N=Wt(n,k),X=+(N.length*(t.konstanten.betragProTag??0)).toFixed(2),w=N.length>10,A=pi(k,a,N,l),R=A.ausstehend.length,pe=+((N.length+R)*(t.konstanten.betragProTag??0)).toFixed(2),ve=R>0?A.ausstehend.map(ce=>W(C(ce))).join(", "):"";return{mk:k,bs:N,summe:X,ueberzaehlig:w,offen:R,offenListe:ve,summeMitOffen:pe,idx:_}}),S=((P=$.find(k=>k.bs.length>0))==null?void 0:P.mk)??$[0].mk,D=$.find(k=>k.mk===S)??$[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <button class="btn-generate-big" id="btn-fahrtgeld-generate" ${D.bs.length===0?"disabled":""}>
                <img src="excel-logo.png" alt="" class="excel-logo-big" />
                <span class="btn-generate-label">Generieren</span>
              </button>
              <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${y(_t(D.mk,r))}" target="_blank" rel="noopener" ${D.bs.length===0?'aria-disabled="true"':""}>
                <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                <span>E-Mail</span>
              </a>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${y(Ve(D.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${D.bs.length} BS-Tag${D.bs.length===1?"":"e"} erfasst · ${D.summe.toFixed(2).replace(".",",")} €
                ${D.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${D.offen} BS-Tag${D.offen===1?"":"e"}: ${y(D.offenListe)} (mit allen: ${D.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${D.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${D.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${$.map(k=>{const _=k.mk===S?"checked":"",N=`data-monat="${y(k.mk)}" data-offen="${k.offen}" data-offen-liste="${y(k.offenListe)}" data-anzahl="${k.bs.length}" data-summe="${k.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${k.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${y(Ve(k.mk))}" data-ueberzaehlig="${k.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${k.offen>0?" has-pending":""}${k.bs.length===0?" empty":""}" ${N}>
                    <input type="radio" name="fg-monat-sel" value="${y(k.mk)}" ${_} ${k.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${y(Ve(k.mk))}</div>
                      <div class="hint">
                        ${k.bs.length} BS-Tag${k.bs.length===1?"":"e"} erfasst · ${k.summe.toFixed(2).replace(".",",")} €
                        ${k.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${k.offen} BS-Tag${k.offen===1?"":"e"} laut Rhythmus</span>`:""}
                        ${k.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${k.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(x=e.querySelector("#btn-template-replace"))==null||x.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(E=e.querySelector("#fahrtgeld-replace-input"))==null||E.addEventListener("change",async $=>{var D;const S=(D=$.target.files)==null?void 0:D[0];S&&await lt(S,e)}),(K=e.querySelector("#btn-template-clear"))==null||K.addEventListener("click",async()=>{await te("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Ga(),B("Vorlage gelöscht."),Pe({root:e}))}),(q=e.querySelector("#btn-signature-upload"))==null||q.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(z=e.querySelector("#fahrtgeld-signature-input"))==null||z.addEventListener("change",async $=>{var D;const S=(D=$.target.files)==null?void 0:D[0];S&&await wi(S,e)}),(H=e.querySelector("#btn-signature-clear"))==null||H.addEventListener("click",async()=>{if(!await te("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const $=await Te();$&&(await ht({...$,unterschrift:null}),B("Unterschrift entfernt."),Pe({root:e}))});const u=e.querySelector("#btn-fahrtgeld-generate"),g=e.querySelector("#btn-fahrtgeld-mail"),h=e.querySelector(".fahrtgeld-generate-monat"),f=e.querySelector("#fahrtgeld-generate-detail"),m=e.querySelectorAll(".fahrtgeld-monat-radio");function b(){const $=e.querySelector(".fahrtgeld-monat-radio:checked");if(!$)return;const S=$.closest(".fahrtgeld-monat-row");if(!S)return;const D=$.value,P=parseInt(S.getAttribute("data-anzahl")||"0",10),k=S.getAttribute("data-summe")||"0,00",_=parseInt(S.getAttribute("data-offen")||"0",10),N=S.getAttribute("data-offen-liste")||"",X=S.getAttribute("data-summe-mit-offen")||k,w=S.getAttribute("data-monat-label")||"",A=S.getAttribute("data-ueberzaehlig")==="1";if(h&&(h.textContent=w),f){const R=[`${P} BS-Tag${P===1?"":"e"} erfasst · ${k} €`];_>0&&R.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${_} BS-Tag${_===1?"":"e"}: ${y(N)} (mit allen: ${X} €)</span>`),A&&R.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${P-10} überzählig (max 10/Monat)</span>`),f.innerHTML=R.join("")}u&&(u.disabled=P===0),g&&(g.href=_t(D,r),P===0?g.setAttribute("aria-disabled","true"):g.removeAttribute("aria-disabled"))}m.forEach($=>$.addEventListener("change",b)),u==null||u.addEventListener("click",async()=>{var X,w;const $=e.querySelector(".fahrtgeld-monat-radio:checked");if(!$){U("Bitte einen Monat auswählen.",{type:"warn"});return}const S=$.closest(".fahrtgeld-monat-row"),D=$.value,P=parseInt((S==null?void 0:S.getAttribute("data-offen"))||"0",10),k=(S==null?void 0:S.getAttribute("data-offen-liste"))||"";if(P>0&&!await te(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${P} BS-Tag${P===1?"":"e"}:

${k}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der Excel fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;u.disabled=!0;const _=u.querySelector(".btn-generate-label"),N=_==null?void 0:_.textContent;_&&(_.textContent="Erstelle …");try{const A=await Te(),R=await Z(),pe=Wt(R,D);if(!pe.length){U("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const ve=(X=A.unterschrift)==null?void 0:X.bytes,ce=(w=A.unterschrift)==null?void 0:w.extension,{blob:Xe,dateiname:bt,ueberzaehlig:Ye}=await hi({templateBytes:A.bytes,monatKey:D,bsTage:pe,konstanten:A.konstanten,unterschriftBytes:ve,unterschriftExtension:ce});bi(Xe,bt),B(`Excel erstellt: ${bt}${Ye>0?` (${Ye} weiterer Tag${Ye===1?"":"e"} passte/n nicht in die Vorlage)`:""}`)}catch(A){console.error("Fahrtgeld-Generierung fehlgeschlagen:",A),U(`Fehler: ${A.message||A}`,{type:"error",duration:8e3})}finally{u.disabled=!1,_&&N&&(_.textContent=N)}})}function yi(e){e.innerHTML=`
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
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var r;const s=(r=a.target.files)==null?void 0:r[0];s&&await lt(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var r,l;const s=(l=(r=a.dataTransfer)==null?void 0:r.files)==null?void 0:l[0];s&&await lt(s,e)})}async function wi(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){U("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){U(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",r=await new Promise((c,i)=>{const o=new FileReader;o.onload=()=>c(o.result),o.onerror=i,o.readAsDataURL(e)}),l=await Te();if(!l){U("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await ht({...l,unterschrift:{bytes:a,extension:s,dataUrl:r,hochgeladenAm:new Date().toISOString()}}),B("Unterschrift gespeichert."),Pe({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),U(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function lt(e,t){try{const n=await e.arrayBuffer(),a=await gi(n);if(!a.ok){U(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await Te();let r=s==null?void 0:s.unterschrift;if(!r&&a.unterschriftAuto){const l=xi(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);r={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:l,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await ht({bytes:n,konstanten:a.konstanten,unterschrift:r,hochgeladenAm:new Date().toISOString(),dateiname:e.name}),a.unterschriftAuto&&!(s!=null&&s.unterschrift)?B(`Vorlage gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)`):B(`Vorlage gespeichert: ${a.konstanten.name||e.name}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Pe({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),U(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function xi(e,t){const n=new Uint8Array(e);let a="";for(let l=0;l<n.length;l++)a+=String.fromCharCode(n[l]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function ki({root:e}){const t=await Z();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(r=>`<option value="${r}">${Mi(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),l=Array.from(r).map(c=>c.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(l).then(()=>B(`${r.length} Zeilen kopiert.`))});function s(){const r=a.value,c=(r?t.filter(i=>i.monatKey===r):t).filter(i=>i.ist!=null&&i.ist>0&&i.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=$i(c),e.querySelectorAll(".copy-val").forEach(i=>{i.addEventListener("click",async()=>{const o=i.getAttribute("data-val");await navigator.clipboard.writeText(o),i.classList.add("ok");const d=i.textContent;i.textContent="✓ kopiert",setTimeout(()=>{i.classList.remove("ok"),i.textContent=d},1200)})})}s()}function $i(e){return e.length?`
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
        ${e.map(t=>{const n=Oe(t.ist),a=`${W(C(t.datum))}	${n}`;return`
            <tr data-copy="${It(a)}">
              <td class="tabular">${W(C(t.datum))}</td>
              <td>${Si(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${zi(t.tagestyp)}">${vn(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${It(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Si(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function Mi(e){const[t,n]=e.split("-");return L(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:Q})}function zi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function vn(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function It(e){return vn(e)}async function Di({root:e}){const[t,n,a,s]=await Promise.all([Z(),J(),fe(),ft()]),r=Object.fromEntries(s.map(i=>[i.key,i])),l=xe(t,n,new Date).filter(i=>i.mailVorlageKey),c=an(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${l.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':l.map(i=>Ai(i,n,r)).join("")}

      ${c.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${c.map(i=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${Y(i.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${Y(i.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(Ee).map(i=>{const o=Ge(i,r[i]);return Ti(o)}).join("")}
      </div>
    </div>
  `,Ei(e),Pi(e)}function Ai(e,t,n){const a=Ge(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=rn(t,e),r=sn(a,s),l=ln(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${Y(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${Y(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${Y(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${Y(r.betreff)}

${Y(r.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${l}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${ot(r.betreff)}" data-body="${ot(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Ti(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Y(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Y(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${ot(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${Y(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Ei(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,r=a.querySelector(".v-text").value;await Ne(n,{betreff:s,text:r}),B("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=Ee[n];a&&await te(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await Ne(n,{betreff:a.betreff,text:a.text}),B("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Pi(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),B("Mail-Text kopiert.")})})}function Y(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ot(e){return Y(e)}async function Fi({root:e}){const[t,n]=await Promise.all([J(),ft()]),a=Object.fromEntries(n.map(s=>[s.key,s]));e.innerHTML=`
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
          ${Object.keys(Ee).map(s=>{const r=Ge(s,a[s]);return Li(r)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async s=>{const r={...t,pausenRegel:s.target.value};await He(r),B("Pausen-Regel gespeichert.")}),e.querySelectorAll(".btn-save-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),l=s.closest(".vorlagen-item"),c=l.querySelector(".v-betreff").value,i=l.querySelector(".v-text").value;await Ne(r,{betreff:c,text:i}),B("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(s=>{s.addEventListener("click",async()=>{const r=s.getAttribute("data-key"),l=Ee[r];l&&await te(`Deine Anpassungen an "${l.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await Ne(r,{betreff:l.betreff,text:l.text}),B("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Li(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${Ie(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${Ie(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Ki(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${Ie(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Ie(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ki(e){return Ie(e)}async function Ot(){document.documentElement.setAttribute("data-css-ready",""),Nn();const e=document.getElementById("content");await Ra()&&setTimeout(()=>{U('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await Na(),await Ha(),V("/",zt),V("/dashboard",zt),V("/analytics",ri),V("/kalender",tt),V("/kalender/typ/:typ",nt),V("/kalender/wochentag/:wd",nt),V("/kalender/pause/:bucket",nt),V("/kalender/:yyyymm",tt),V("/kalender/:yyyymm/:yyyykw",tt),V("/monat",Us),V("/monat/:yyyymm",Gs),V("/woche",ei),V("/woche/:yyyykw",ti),V("/tag/:datum",ai),V("/berichtsheft",ki),V("/mails",Di),V("/fahrtgeld",Pe),V("/profil",Zs),V("/daten",Is),V("/einstellungen",Fi),Wa(e),location.hash||Ba("/");try{const t=await v.tage.count();Ls(t>0)&&setTimeout(()=>cn(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ot):Ot();
