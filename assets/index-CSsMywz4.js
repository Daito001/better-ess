const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./exceljs.min-BhfpbegZ.js","./dexie-UpTFNL8S.js","./index-Bf057_RE.js"])))=>i.map(i=>d[i]);
import{C as Q,L as ma,B as pa,D as ba,S as va,a as ya,b as wa,P as ka,A as xa,c as $a,d as Sa,T as Ma,p as za,e as Da,i as Aa}from"./chartjs-CRgZvhTJ.js";import{b as yt,a as We,c as Ve,d as Pa,f as _,s as xn,e as $n,g as Sn,p as Ea,h as Ta,i as Ue,j as Je,k as N,l as Mn,q as Fa,m as La,n as _a,o as Ca}from"./datefns-C8_rfWt_.js";import{D as Ba}from"./dexie-UpTFNL8S.js";import{GlobalWorkerOptions as zn,getDocument as Dn}from"./pdfjs-BnPRJEQ6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Oa(){document.documentElement.setAttribute("data-theme","dark")}const Yt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Wa=(e,t,n)=>{let a;const s=n!=null&&n.addSuffix?Yt[e].withPreposition:Yt[e].standalone;return typeof s=="string"?a=s:t===1?a=s.one:a=s.other.replace("{{count}}",String(t)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:"vor "+a:a},Va={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Na={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ka={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Ia={date:yt({formats:Va,defaultWidth:"full"}),time:yt({formats:Na,defaultWidth:"full"}),dateTime:yt({formats:Ka,defaultWidth:"full"})},Ha={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Ra=(e,t,n,a)=>Ha[e],ja={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Za={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},zt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},qa={narrow:zt.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:zt.wide},Ga={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Ua={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Ja={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Ya=e=>Number(e)+".",Xa={ordinalNumber:Ya,era:We({values:ja,defaultWidth:"wide"}),quarter:We({values:Za,defaultWidth:"wide",argumentCallback:e=>e-1}),month:We({values:zt,formattingValues:qa,defaultWidth:"wide"}),day:We({values:Ga,defaultWidth:"wide"}),dayPeriod:We({values:Ua,defaultWidth:"wide",formattingValues:Ja,defaultFormattingWidth:"wide"})},Qa=/^(\d+)(\.)?/i,es=/\d+/i,ts={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ns={any:[/^v/i,/^n/i]},as={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},ss={any:[/1/i,/2/i,/3/i,/4/i]},is={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},rs={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ls={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},os={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},cs={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},ds={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},us={ordinalNumber:Pa({matchPattern:Qa,parsePattern:es,valueCallback:e=>parseInt(e)}),era:Ve({matchPatterns:ts,defaultMatchWidth:"wide",parsePatterns:ns,defaultParseWidth:"any"}),quarter:Ve({matchPatterns:as,defaultMatchWidth:"wide",parsePatterns:ss,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ve({matchPatterns:is,defaultMatchWidth:"wide",parsePatterns:rs,defaultParseWidth:"any"}),day:Ve({matchPatterns:ls,defaultMatchWidth:"wide",parsePatterns:os,defaultParseWidth:"any"}),dayPeriod:Ve({matchPatterns:cs,defaultMatchWidth:"wide",parsePatterns:ds,defaultParseWidth:"any"})},ne={code:"de",formatDistance:Wa,formatLong:Ia,formatRelative:Ra,localize:Xa,match:us,options:{weekStartsOn:1,firstWeekContainsDate:4}};function An(e){if(e==null)return null;if(typeof e=="number")return e;let t=String(e).trim();if(!t)return null;let n=!1;t.endsWith("-")&&(n=!0,t=t.slice(0,-1).trim()),t=t.replace(",",".");const a=parseFloat(t);return isNaN(a)?null:n?-a:a}function Ze(e){if(e==null||isNaN(e))return"—";const t=e<0,n=Math.abs(e),a=Math.floor(n),s=Math.round((n-a)*60);let r=a,c=s;return c===60&&(r+=1,c=0),`${t?"-":""}${r}:${String(c).padStart(2,"0")}`}function fe(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1,suffix:a="h"}=t,s=n&&e>0?"+":"",r=e.toFixed(2).replace(".",",");return`${s}${r}${a}`}function gs(e,t={}){if(e==null||isNaN(e))return"—";const{signed:n=!1}=t;return`${n&&e>0?"+":""}${Ze(e)}`}function Xt(e,t="hhmm",n={}){return t==="dezimal"?fe(e,{signed:!0,suffix:"",...n}):gs(e,{signed:!0,...n})}function se(e){if(!e)return null;const t=/^(\d{1,2}):(\d{2})$/.exec(String(e).trim());return t?parseInt(t[1],10)*60+parseInt(t[2],10):null}function Pn(e){if(!(e!=null&&e.length))return null;const t=e.filter(s=>s.von&&s.bis);if(!t.length)return null;let n=t[0].von,a=t[0].bis;for(const s of t)se(s.von)<se(n)&&(n=s.von),se(s.bis)>se(a)&&(a=s.bis);return{kommen:n,gehen:a}}const En="2026-04-01";function hs(e){return e?"arbzg":"jarbschg"}function fs(e,t){return e==null?0:t==="jarbschg"?e>6?1:e>4.5?.5:0:e>9?.75:e>6?.5:0}function Ft(e){if(!e||e.length<2)return 0;const t=e.filter(a=>a.von&&a.bis).map(a=>({von:se(a.von),bis:se(a.bis)})).filter(a=>a.von!=null&&a.bis!=null).sort((a,s)=>a.von-s.von);let n=0;for(let a=1;a<t.length;a++){const s=t[a].von-t[a-1].bis;(s>0&&s>=15||s>0)&&(n+=s)}return n/60}function Tn(e,t){const n=e.zeitSpannen??[];if(!n.length||n.every(p=>!p.von))return{keinAnspruch:!0};const a=Ft(n),s=e.pause??0,r=ms(n),c=r-s,d=t.pausenRegel&&t.pausenRegel!=="auto"?t.pausenRegel==="jarbschg"?"jarbschg":"arbzg":hs(!!t.ueber18),l=fs(c,d);if(e.datum&&e.datum<En)return{arbeitszeitMitPause:r,arbeitszeitOhnePause:c,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:l,gesetz:d,legalerAbzug:s,unrechtmaessigerVerlustMin:0,aufstockungMin:0,typ:"alt_reglement",warnung:null,altReglement:!0};const i=Math.max(a,l),o=s-i,u=Math.max(0,l-a);let h="ok",g=null;if(o>.05)h="fehler_zeitwirtschaft",g=`${Math.round(o*60)} min Pause wurden zusätzlich zur gesetzlichen Pflicht und zur gestempelten Pause abgezogen. Das sieht nach einem Zeitwirtschafts-Fehler aus.`;else if(u>.05&&s>a+.02){h="aufstockung_legal";const p=Math.round(u*60);g=`Du hast ${Math.round(a*60)} min Pause gestempelt, aber bei ${c.toFixed(2).replace(".",",")}h Arbeitszeit schreibt das Gesetz (${d.toUpperCase()}) ${Math.round(l*60)} min vor. Die fehlenden ${p} min wurden automatisch als Pause gewertet. Das ist gesetzeskonform — nächstes Mal einfach länger Pause machen.`}return{arbeitszeitMitPause:r,arbeitszeitOhnePause:c,gestempeltePause:a,abgezogenePause:s,gesetzlichePflicht:l,gesetz:d,legalerAbzug:i,unrechtmaessigerVerlustMin:Math.round(Math.max(0,o)*60),aufstockungMin:Math.round(Math.max(0,u)*60),typ:h,warnung:g,altReglement:!1}}function ms(e){let t=0;for(const n of e){if(!n.von||!n.bis)continue;const a=se(n.von),s=se(n.bis);a!=null&&s!=null&&s>a&&(t+=s-a)}return t/60}function Fn(e,t){var l,i,o;const n=[...e].sort((u,h)=>u.datum.localeCompare(h.datum));if(!n.length)return[];const a=new Map(t.map(u=>[u.monatKey,u])),s={};for(const u of n)s[l=u.monatKey]??(s[l]=[]),s[u.monatKey].push(u);const r=Object.keys(s).sort(),c=[];let d=null;for(const u of r){const h=a.get(u);let g;((i=h==null?void 0:h.glz)==null?void 0:i.saldoVorperiode)!=null?g=h.glz.saldoVorperiode:d!=null?g=d:g=0;const p=s[u];for(const m of p)m.diff!=null&&(g+=m.diff),c.push({datum:m.datum,wochentag:m.wochentag,saldo:Math.round(g*100)/100,diff:m.diff,ist:m.ist,soll:m.soll,tagestyp:m.tagestyp,monatKey:m.monatKey,wocheKey:m.wocheKey,zeitSpannen:m.zeitSpannen});if(((o=h==null?void 0:h.glz)==null?void 0:o.saldoGesamt)!=null){const m=h.glz.saldoGesamt-g;if(Math.abs(m)>.02&&c.length>0){const v=c.length-1;c[v].umbuchung=m,c[v].saldo=Math.round((c[v].saldo+m)*100)/100,g=c[v].saldo}d=h.glz.saldoGesamt}else d=g}return c}function ps(e,t){if(!e.length)return[];if(t==="alles")return e;const n=Math.min(t,e.length);return e.slice(-n)}function bs(e){return e.length?e[e.length-1].saldo:0}const Ln=new Set(["Urlaub","Arbeitsunfähigkeit","Feiertag","Gleitzeit","Berufsschule","Dienstreise"]),_n=7;function dt(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.ist??0,n=e.soll??0;return t>0?t:Ln.has(e.tagestyp)?Math.max(n,_n):n>0?n:t}function Lt(e){if(!e||e.tagestyp==="Wochenende"||e.wochentag==="SA"||e.wochentag==="SO")return 0;const t=e.soll??0;return t>0?t:Ln.has(e.tagestyp)?_n:t}function vs(e){if(!e.length)return 0;const t=e[0].saldo-(e[0].diff??0),n=e[e.length-1].saldo;return Math.round((n-t)*100)/100}const ys=["SO","MO","DI","MI","DO","FR","SA"],ws=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];function Te(e){if(!e)return null;const t=e.trim();return Ea(t,"dd.MM.yyyy",new Date)}function V(e){return _(e,"dd.MM.yyyy")}function _t(e){return _(e,"EE, dd.MM.yyyy",{locale:ne})}function ks(e){return _(e,"dd.MM.")}function xs(e){return ys[e.getDay()]}function $s(e){return ws[e.getDay()]}function Ss(e){return Sn(e)}function Ye(e){const t=xn(e,{weekStartsOn:1}),n=$n(e,{weekStartsOn:1});return`${_(t,"dd.MM.")} – ${_(n,"dd.MM.yyyy")}`}function Cn(e){return`${Ta(e)}-${String(Sn(e)).padStart(2,"0")}`}function Ct(e){return _(e,"yyyy-MM")}function Bn(e){return _(e,"yyyy-MM-dd")}function Ms(e,t){const n=[];let a=new Date(e);for(;a<=t;)Je(a)||n.push(new Date(a)),a=Ue(a,1);return n}function On(e,t){if(!e||!t)return 0;e>t&&([e,t]=[t,e]);let n=0,a=new Date(e);for(;a<t;)a=Ue(a,1),Je(a)||n++;return n}function S(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function zs(e){return S(e)}const Ds=Object.freeze(Object.defineProperty({__proto__:null,addDays:Ue,dayKey:Bn,differenceInCalendarDays:Mn,endOfMonth:La,endOfWeek:$n,escapeAttr:zs,escapeHtml:S,formatGermanDate:V,formatGermanDateLong:_t,formatShortDate:ks,formatWocheRange:Ye,getWeekdayCode:xs,getWeekdayName:$s,isSameDay:_a,isWeekend:Je,isoWeek:Ss,monthKey:Ct,parseGermanDate:Te,startOfMonth:Ca,startOfWeek:xn,weekKey:Cn,werktageAbstand:On,werktageZwischen:Ms},Symbol.toStringTag,{value:"Module"}));Q.register(ma,pa,ba,va,ya,wa,ka,xa,$a,Sa,Ma,za,Da,Aa);function Z(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function pe(){return{fg:Z("--fg"),fgMuted:Z("--fg-muted"),fgSubtle:Z("--fg-subtle"),border:Z("--border"),surface:Z("--surface"),accent:Z("--accent"),success:Z("--success"),warn:Z("--warn"),danger:Z("--danger"),info:Z("--info"),palette:[Z("--chart-1"),Z("--chart-2"),Z("--chart-3"),Z("--chart-4"),Z("--chart-5"),Z("--chart-6"),Z("--chart-7")]}}function O(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.fgMuted,font:{size:12}}},tooltip:{backgroundColor:e.surface,titleColor:e.fg,bodyColor:e.fg,borderColor:e.border,borderWidth:1,padding:10,displayColors:!0}},scales:{x:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}},y:{ticks:{color:e.fgMuted,font:{size:11}},grid:{color:e.border,drawBorder:!1}}}}}function Bt(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(r=>_(N(r.datum),"dd.MM.")),s=t.map(r=>r.saldo);return s.map(r=>r>=0?n.success:n.danger),new Q(e,{type:"line",data:{labels:a,datasets:[{label:"Tages-Saldo",data:s,borderColor:n.accent,backgroundColor:r=>{const c=r.chart,{ctx:d,chartArea:l,scales:i}=c;return l?Wn(d,l,i.y,n):ge(n.accent,.14)},segment:{borderColor:r=>{const c=r.p0.parsed.y,d=r.p1.parsed.y,l=(c+d)/2;return l>=.02?n.success:l<=-.02?n.danger:n.fgMuted}},tension:0,pointRadius:2,pointHoverRadius:6,pointHitRadius:20,pointBackgroundColor:s.map(r=>r>=.02?n.success:r<=-.02?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,fill:!0,borderWidth:2}]},options:{...O(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(r,c,d)=>{const l=d.getElementsAtEventForMode(r,"index",{intersect:!1},!1);d.canvas.style.cursor=l.length>0?"pointer":"default"},onClick:(r,c,d)=>{const l=d.getElementsAtEventForMode(r,"index",{intersect:!1},!1);if(l.length>0){const i=l[0].index,o=t[i];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...O(n).plugins,legend:{display:!1},tooltip:{enabled:!1,mode:"index",intersect:!1,axis:"x",position:"nearest",external:As(t)}},scales:{...O(n).scales,y:{...O(n).scales.y,ticks:{...O(n).scales.y.ticks,callback:r=>`${r>=0?"+":""}${r.toFixed(1).replace(".",",")}h`}}}}})}function be(e){return function(t){var m,v;const{chart:n,tooltip:a}=t;let s=n.$richTooltipEl;if(!s){s=document.createElement("div"),s.className="saldo-tooltip",document.body.appendChild(s),n.$richTooltipEl=s;const f=n.destroy.bind(n);n.destroy=function(){s.parentNode&&s.parentNode.removeChild(s),f()}}if(a.opacity===0||!((m=a.dataPoints)!=null&&m.length)){s.style.opacity="0";return}const r=e({tooltip:a,chart:n});if(!r){s.style.opacity="0";return}let c=`<div class="saldo-tooltip-title">${Dt(r.title)}</div>`;for(const f of r.rows||[]){const w=f.klasse||"flat";c+=`<div class="saldo-tooltip-row"><span class="saldo-tooltip-label">${Dt(f.label)}</span><span class="saldo-tooltip-value ${w}">${f.value}</span></div>`}(v=r.meta)!=null&&v.length&&(c+=`<div class="saldo-tooltip-meta">${r.meta.map(f=>`<span>${f}</span>`).join("")}</div>`),s.innerHTML=c;const d=n.canvas.getBoundingClientRect(),l=d.left+a.caretX,i=d.top+a.caretY;s.style.opacity="0",s.style.left="0px",s.style.top="0px";const o=s.offsetWidth,u=s.offsetHeight,h=18;let g=l+h;g+o>window.innerWidth-8&&(g=l-h-o);let p=i-u/2;p<8&&(p=8),p+u>window.innerHeight-8&&(p=window.innerHeight-u-8),s.style.left=g+"px",s.style.top=p+"px",s.style.opacity="1"}}function me(e){return e==null?"flat":e>.05?"pos":e<-.05?"neg":"flat"}function Se(e){return e==null?"—":(e>0?"+":"")+e.toFixed(2).replace(".",",")+"h"}function Me(e){return e==null?"—":e.toFixed(2).replace(".",",")+"h"}function As(e){return be(({tooltip:t})=>{const n=t.dataPoints[0].dataIndex,a=e[n];if(!a)return null;const s=[{label:"Saldo",value:Se(a.saldo),klasse:me(a.saldo)}];a.diff!=null&&s.push({label:"Tages-Diff",value:Se(a.diff),klasse:me(a.diff)});const r=[];return a.tagestyp&&r.push(`Typ: ${Dt(a.tagestyp)}`),a.umbuchung&&r.push(`Umbuchung: ${a.umbuchung>=0?"+":""}${a.umbuchung.toFixed(2).replace(".",",")}h`),{title:_(N(a.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:s,meta:r}})}function Dt(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ps(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(d=>d.monatKey),s=a.map(d=>{const[l,i]=d.split("-"),o=new Date(parseInt(l,10),parseInt(i,10)-1,1);return _(o,"MMM yyyy",{locale:ne})}),r=t.map(d=>{var l;return((l=d.glz)==null?void 0:l.saldoGesamt)??0}),c=t.map(d=>{var l;return((l=d.glz)==null?void 0:l.saldoVorperiode)??null});return new Q(e,{type:"line",data:{labels:s,datasets:[{label:"GLZ-Saldo (Monatsende)",data:r,borderColor:n.accent,backgroundColor:d=>{const l=d.chart,{ctx:i,chartArea:o,scales:u}=l;return o?Wn(i,o,u.y,n):ge(n.accent,.14)},segment:{borderColor:d=>{const l=d.p0.parsed.y,i=d.p1.parsed.y,o=(l+i)/2;return o>=.05?n.success:o<=-.05?n.danger:n.fgMuted}},pointBackgroundColor:r.map(d=>d>=.05?n.success:d<=-.05?n.danger:n.fgMuted),pointBorderColor:n.surface,pointBorderWidth:1,tension:0,fill:!0,pointRadius:4,pointHoverRadius:7,pointHitRadius:20}]},options:{...O(n),interaction:{mode:"index",intersect:!1,axis:"x"},hover:{mode:"index",intersect:!1,axis:"x"},onHover:(d,l,i)=>{const o=i.getElementsAtEventForMode(d,"index",{intersect:!1},!1);i.canvas.style.cursor=o.length>0?"pointer":"default"},onClick:(d,l,i)=>{const o=i.getElementsAtEventForMode(d,"index",{intersect:!1},!1);if(o.length>0){const u=o[0].index,h=a[u];h&&(window.location.hash=`#/kalender/${h}`)}},plugins:{...O(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:d})=>{const l=d.dataPoints[0].dataIndex,i=r[l],o=c[l],u=[{label:"Saldo Monatsende",value:Se(i),klasse:me(i)}];if(o!=null){const h=+(i-o).toFixed(2);u.push({label:"Vorperiode",value:Se(o),klasse:me(o)}),u.push({label:"Bewegung",value:Se(h),klasse:me(h)})}return{title:s[l],rows:u}})}}}})}function Es(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.map(c=>_(N(c.datum),"dd.MM.")),s=t.map(c=>c.ist??0),r=t.map(c=>Os(c.tagestyp,n));return new Q(e,{type:"bar",data:{labels:a,datasets:[{label:"Ist-Stunden",data:s,backgroundColor:r,borderRadius:4,borderSkipped:!1,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...O(n),onHover:(c,d,l)=>{const i=l.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);l.canvas.style.cursor=i.length>0?"pointer":"default"},onClick:(c,d,l)=>{const i=l.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(i.length>0){const o=t[i[0].index];o!=null&&o.datum&&(window.location.hash=`#/tag/${o.datum}`)}},plugins:{...O(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:c})=>{const d=c.dataPoints[0].dataIndex,l=t[d],i=[{label:"Ist",value:Me(l.ist),klasse:"flat"}];l.soll!=null&&i.push({label:"Soll",value:Me(l.soll),klasse:"flat"}),l.diff!=null&&i.push({label:"Diff",value:Se(l.diff),klasse:me(l.diff)});const o=l.tagestyp?[`Typ: ${l.tagestyp}`]:[];return{title:_(N(l.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:i,meta:o}})}},scales:{...O(n).scales,y:{...O(n).scales.y,suggestedMin:0,suggestedMax:10}}}})}function Qt(e,t){const n=pe();if(ve(e),!(t!=null&&t.length))return;const a=t.filter(i=>{var o;return((o=i.zeitSpannen)==null?void 0:o.length)&&i.zeitSpannen.some(u=>u.von&&u.bis)}).map(i=>{const o=i.zeitSpannen.filter(g=>g.von&&g.bis).map(g=>({von:se(g.von),bis:se(g.bis),vonStr:g.von,bisStr:g.bis})).filter(g=>g.von!=null&&g.bis!=null);if(o.length===0)return null;const u=Math.min(...o.map(g=>g.von)),h=Math.max(...o.map(g=>g.bis));return{...i,_spans:o,_minVon:u,_maxBis:h}}).filter(Boolean);if(!a.length)return;const s=i=>i.ist==null?n.fgMuted:i.ist>=7?n.success:n.danger,r={label:"Tages-Rahmen",data:a.map(i=>[i._minVon,i._maxBis]),backgroundColor:a.map(s),borderColor:a.map(s),borderWidth:0,borderRadius:4,borderSkipped:!1,barPercentage:.7,categoryPercentage:.9,maxBarThickness:18},c=Math.max(0,Math.floor(Math.min(...a.map(i=>i._minVon))/60)*60-60),d=Math.min(24*60,Math.ceil(Math.max(...a.map(i=>i._maxBis))/60)*60+60),l=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`;return new Q(e,{type:"bar",data:{labels:a.map(i=>_(N(i.datum),"dd.MM.")),datasets:[r]},options:{...O(n),interaction:{mode:"index",intersect:!1,axis:"x"},onHover:(i,o,u)=>{const h=u.getElementsAtEventForMode(i,"index",{intersect:!1},!1);u.canvas.style.cursor=h.length>0?"pointer":"default"},onClick:(i,o,u)=>{const h=u.getElementsAtEventForMode(i,"index",{intersect:!1},!1);if(h.length>0){const g=a[h[0].index];g!=null&&g.datum&&(window.location.hash=`#/tag/${g.datum}`)}},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:i})=>{const o=a[i.dataPoints[0].dataIndex],u=[];o.ist!=null&&u.push({label:"Ist",value:Me(o.ist),klasse:me(o.ist-7)}),o.soll!=null&&u.push({label:"Soll",value:Me(o.soll)});const h=[`Rahmen: ${l(o._minVon)} – ${l(o._maxBis)}`];return o._spans.length>1&&o._spans.forEach((g,p)=>h.push(`Block ${p+1}: ${g.vonStr} – ${g.bisStr}`)),o.pause!=null&&h.push(`Pause: ${Math.round(o.pause*60)} min`),{title:_(N(o.datum),"EE, dd.MM.yyyy",{locale:ne}),rows:u,meta:h}})}},scales:{x:{ticks:{color:n.fgMuted,font:{size:10},maxRotation:60,minRotation:60,autoSkip:!0,maxTicksLimit:40},grid:{display:!1}},y:{min:c,max:d,ticks:{color:n.fgMuted,stepSize:60,callback:i=>l(i)},grid:{color:n.border}}}}})}function Ts(e,t){const n=pe();ve(e);const a={};for(const c of t){if(c.tagestyp!=="Stempelzeit"||!c.zeitSpannen||c.zeitSpannen.length<2)continue;const d=Ft(c.zeitSpannen);if(d<=0)continue;const l=Math.round(d*60),i=Math.floor(l/15)*15;a[i]=(a[i]??0)+1}const s=Object.keys(a).map(Number).sort((c,d)=>c-d),r=s.map(c=>a[c]);return new Q(e,{type:"bar",data:{labels:s.map(c=>`${c}–${c+14} min`),datasets:[{label:"Häufigkeit",data:r,backgroundColor:n.palette[1],borderRadius:4}]},options:{...O(n),onHover:(c,d,l)=>{const i=l.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);l.canvas.style.cursor=i.length>0?"pointer":"default"},onClick:(c,d,l)=>{const i=l.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(i.length>0){const o=s[i[0].index];o!=null&&(window.location.hash=`#/kalender/pause/${o}`)}},plugins:{...O(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:c})=>{const d=c.dataPoints[0].dataIndex;return{title:"Pause-Länge "+(s[d]!=null?`${s[d]}–${s[d]+14} min`:""),rows:[{label:"Häufigkeit",value:`${r[d]} Tag${r[d]===1?"":"e"}`}]}})}}}})}function Fs(e,t){const n=pe();ve(e);const a=["MO","DI","MI","DO","FR"],s={},r={};for(const l of a)s[l]=0,r[l]=0;for(const l of t)a.includes(l.wochentag)&&(l.ist==null||l.ist===0||(s[l.wochentag]+=l.ist,r[l.wochentag]+=1));const c=a.map(l=>r[l]>0?s[l]/r[l]:0),d={id:"wochentag-datalabels",afterDatasetsDraw(l){const{ctx:i,data:o,scales:u}=l;i.save(),i.fillStyle=n.fg,i.font="600 12px system-ui",i.textAlign="center",i.textBaseline="bottom",l.getDatasetMeta(0).data.forEach((g,p)=>{const m=o.datasets[0].data[p];if(!m||m===0)return;const v=m.toFixed(2).replace(".",",")+"h";i.fillText(v,g.x,g.y-6)}),i.restore()}};return new Q(e,{type:"bar",data:{labels:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"],datasets:[{label:"Ø Ist-Stunden",data:c,backgroundColor:n.palette[2],borderRadius:4,maxBarThickness:56,categoryPercentage:.7,barPercentage:.8}]},options:{...O(n),layout:{padding:{top:24}},onHover:(l,i,o)=>{const u=o.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);o.canvas.style.cursor=u.length>0?"pointer":"default"},onClick:(l,i,o)=>{const u=o.getElementsAtEventForMode(l,"nearest",{intersect:!0},!1);if(u.length>0){const h=a[u[0].index];h&&(window.location.hash=`#/kalender/wochentag/${h}`)}},plugins:{...O(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:l})=>{const i=l.dataPoints[0].dataIndex,o=a[i];return{title:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"][i],rows:[{label:"Ø Stunden",value:Me(c[i])},{label:"Anzahl Tage",value:String(r[o]||0)}]}})}},scales:{...O(n).scales,y:{...O(n).scales.y,suggestedMax:Math.max(...c)*1.15}}},plugins:[d]})}function Ls(e,t){const n=pe();ve(e);const a={};for(const c of t)!c.tagestyp||c.tagestyp==="Wochenende"||(a[c.tagestyp]=(a[c.tagestyp]??0)+1);const s=Object.keys(a),r=Object.values(a);return new Q(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:s.map((c,d)=>n.palette[d%n.palette.length]),borderColor:n.surface,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,onHover:(c,d,l)=>{const i=l.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);l.canvas.style.cursor=i.length>0?"pointer":"default"},onClick:(c,d,l)=>{const i=l.getElementsAtEventForMode(c,"nearest",{intersect:!0},!1);if(i.length>0){const o=s[i[0].index];o&&(window.location.hash=`#/kalender/typ/${encodeURIComponent(o)}`)}},plugins:{legend:{position:"right",labels:{color:n.fgMuted,font:{size:12}}},tooltip:{enabled:!1,external:be(({tooltip:c})=>{const d=c.dataPoints[0].dataIndex,l=r.reduce((o,u)=>o+u,0),i=l?r[d]/l*100:0;return{title:s[d],rows:[{label:"Anzahl",value:`${r[d]} Tag${r[d]===1?"":"e"}`},{label:"Anteil",value:i.toFixed(1).replace(".",",")+"%"}]}})}}}})}function _s(e,t){const n=pe();ve(e);const a={};for(const o of t){const u=o.wocheKey;a[u]??(a[u]={ist:0,soll:0,days:0,ersterTag:null,monatKey:null}),a[u].ist+=dt(o),a[u].soll+=Lt(o),a[u].days++,(!a[u].ersterTag||o.datum&&o.datum<a[u].ersterTag)&&(a[u].ersterTag=o.datum,a[u].monatKey=o.monatKey)}const s=Object.keys(a).sort();if(!s.length)return;const r=s.map(o=>+a[o].ist.toFixed(2)),c=s.map(o=>+a[o].soll.toFixed(2)),d=s.map(o=>{const u=a[o].ersterTag;return u?Ye(N(u)):""}),l=r.map((o,u)=>o>=c[u]+.1?n.success:o<=c[u]-.1?n.danger:n.fgMuted),i={id:"wochenstunden-soll-linie",afterDatasetsDraw(o){const{ctx:u,scales:h}=o;h.x;const g=h.y;u.save(),u.strokeStyle=n.fgSubtle||n.fgMuted,u.lineWidth=1,u.setLineDash([4,4]),u.beginPath(),o.getDatasetMeta(0).data.forEach((m,v)=>{const f=m.x,w=m.width/2+2,$=g.getPixelForValue(c[v]??35);u.moveTo(f-w,$),u.lineTo(f+w,$)}),u.stroke(),u.restore()}};return new Q(e,{type:"bar",data:{labels:s.map(o=>"KW "+o.split("-")[1]),datasets:[{label:"Wochenstunden",data:r,backgroundColor:l.map(o=>ge(o,.55)),borderColor:l,borderWidth:1.5,borderRadius:4,maxBarThickness:32,categoryPercentage:.85,barPercentage:.9}]},options:{...O(n),onHover:(o,u,h)=>{const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);h.canvas.style.cursor=g.length>0?"pointer":"default"},onClick:(o,u,h)=>{var p;const g=h.getElementsAtEventForMode(o,"nearest",{intersect:!0},!1);if(g.length>0){const m=g[0].index,v=s[m],f=v?(p=a[v])==null?void 0:p.monatKey:null;v&&f?window.location.hash=`#/kalender/${f}/${v}`:v&&(window.location.hash="#/kalender")}},plugins:{...O(n).plugins,legend:{display:!1},tooltip:{enabled:!1,external:be(({tooltip:o})=>{const u=o.dataPoints[0].dataIndex,h=s[u],g=r[u],p=c[u],m=+(g-p).toFixed(2),v=d[u];return{title:v?"KW "+h.split("-")[1]+" · "+v:"KW "+h.split("-")[1]+" · "+h.split("-")[0],rows:[{label:"Ist",value:Me(g),klasse:"flat"},{label:"Soll",value:Me(p),klasse:"flat"},{label:"Diff",value:Se(m),klasse:me(m)}]}})}},scales:{...O(n).scales,y:{...O(n).scales.y,beginAtZero:!0,ticks:{...O(n).scales.y.ticks,callback:o=>`${o.toFixed(0)}h`}}}},plugins:[i]})}function ve(e){const t=Q.getChart(e);t&&t.destroy()}function Cs(){if(Q.instances){for(const e of Object.values(Q.instances))if(e!=null&&e.canvas&&!document.body.contains(e.canvas))try{e.destroy()}catch{}}document.querySelectorAll(".saldo-tooltip").forEach(e=>e.remove())}function ge(e,t){const n=e.replace("#","").trim();if(n.length!==6&&n.length!==3)return e;const a=n.length===3?n.split("").map(d=>d+d).join(""):n,s=parseInt(a.slice(0,2),16),r=parseInt(a.slice(2,4),16),c=parseInt(a.slice(4,6),16);return`rgba(${s}, ${r}, ${c}, ${t})`}function Wn(e,t,n,a){return Bs(e,t,n,0,a)}function Bs(e,t,n,a,s){const{top:r,bottom:c}=t,d=e.createLinearGradient(0,r,0,c),l=n.min,i=n.max,o=i-l;if(o<=0)return ge(s.success,.14);let u=(i-a)/o;return u=Math.max(0,Math.min(1,u)),d.addColorStop(0,ge(s.success,.28)),d.addColorStop(Math.max(0,u-.001),ge(s.success,.06)),d.addColorStop(Math.min(1,u+.001),ge(s.danger,.06)),d.addColorStop(1,ge(s.danger,.28)),d}function Os(e,t){const n=String(e??"").toLowerCase();return n.includes("stempel")?t.palette[0]:n.includes("berufs")?t.palette[1]:n.includes("urlaub")?t.palette[2]:n.includes("feiertag")?t.fgSubtle:n.includes("dienst")?t.palette[3]:n.includes("krank")?t.palette[4]:t.palette[5]}const Vn=[];let Nn=null;function q(e,t){const n=e.split("/").filter(Boolean),a=[],s=new RegExp("^/?"+n.map(r=>r.startsWith(":")?(a.push(r.slice(1)),"([^/]+)"):Is(r)).join("/")+"/?$");Vn.push({pattern:e,regex:s,paramNames:a,render:t})}function Ws(e){e.startsWith("#")||(e="#"+e),window.location.hash===e?ie():window.location.hash=e}function Vs(e,{onNavigate:t}={}){window.addEventListener("hashchange",ie),ie.rootEl=e,ie.onNavigate=t,ie()}async function ie(){var a;Cs();const e=ie.rootEl,t=window.location.hash.slice(1)||"/",n=t.startsWith("/")?t:`/${t}`;for(const s of Vn){const r=s.regex.exec(n);if(r){const c={};s.paramNames.forEach((d,l)=>c[d]=decodeURIComponent(r[l+1])),Nn=n,(a=ie.onNavigate)==null||a.call(ie,n),Ns(n);try{e.classList.remove("view-enter"),await s.render({params:c,path:n,root:e}),e.classList.add("view-enter")}catch(d){console.error("Route render error:",d),e.innerHTML=`<div class="empty-state">
          <div class="empty-state-icon">⚠</div>
          <h2>Fehler beim Anzeigen</h2>
          <p>${en(d.message||String(d))}</p>
        </div>`}return}}e.innerHTML=`<div class="empty-state">
    <div class="empty-state-icon">?</div>
    <h2>Seite nicht gefunden</h2>
    <p>Die Route <code>${en(n)}</code> existiert nicht.</p>
    <a href="#/" class="btn primary">Zum Dashboard</a>
  </div>`}function Ns(e){document.querySelectorAll("[data-route]").forEach(n=>{const a=n.getAttribute("data-route"),s=a==="/"?e==="/":e===a||e.startsWith(a+"/");n.classList.toggle("active",s)});const t=e==="/"?"dashboard":e.split("/").filter(Boolean)[0];document.body.setAttribute("data-view",t||"dashboard")}function Ks(){Nn!=null&&ie()}function Is(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function en(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Hs="modulepreload",Rs=function(e,t){return new URL(e,t).href},tn={},de=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),l=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=Promise.allSettled(n.map(i=>{if(i=Rs(i,a),i in tn)return;tn[i]=!0;const o=i.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(!!a)for(let p=c.length-1;p>=0;p--){const m=c[p];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const g=document.createElement("link");if(g.rel=o?"stylesheet":Hs,o||(g.as="script"),g.crossOrigin="",g.href=i,l&&g.setAttribute("nonce",l),document.head.appendChild(g),o)return new Promise((p,m)=>{g.addEventListener("load",p),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return s.then(c=>{for(const d of c||[])d.status==="rejected"&&r(d.reason);return t().catch(r)})},y=new Ba("zeitnachweis");y.version(1).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"});y.version(2).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});y.version(3).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("tage").clear(),await e.table("monate").clear(),await e.table("uploads").clear(),await e.table("warnungDismissals").clear(),await e.table("einstellungen").put({key:"__migration_reset",value:!0})});y.version(4).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});y.version(5).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{const t=await e.table("profil").get("self");t&&(!t.zeitwirtschaftEmail||t.zeitwirtschaftEmail==="zeitwirtschaft@putzmeister.com")&&await e.table("profil").put({...t,zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com"})});y.version(6).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key"}).upgrade(async e=>{await e.table("mailVorlagen").clear()});y.version(7).stores({profil:"id",tage:"datum, wochentag, tagestyp, monatKey, wocheKey",monate:"monatKey",uploads:"++id, hochladeDatum, stichtagAuswertung",einstellungen:"key",mailVorlagen:"key",warnungDismissals:"key",fahrtgeldTemplate:"id"}).upgrade(async e=>{const t=await e.table("profil").get("self");if(!t)return;let n=t.ueber18??!0;if(t.geburtsdatum){const s=new Date(t.geburtsdatum),r=new Date;n=r.getFullYear()-s.getFullYear()-(r<new Date(r.getFullYear(),s.getMonth(),s.getDate())?1:0)>=18}const a={id:"self",ueber18:n,sollStundenProWoche:t.sollStundenProWoche??35,sollStundenProTag:t.sollStundenProTag??7,berufsschulMuster:t.berufsschulMuster??{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null},zeitwirtschaftEmail:t.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:t.zeitwirtschaftAnrede||"Frau Kanarya",pausenRegel:t.pausenRegel??"auto",erstelltAm:t.erstelltAm??new Date().toISOString(),updatedAt:new Date().toISOString()};await e.table("profil").put(a)});async function js(){try{const{erkenneBerufsschulMuster:e}=await de(async()=>{const{erkenneBerufsschulMuster:c}=await Promise.resolve().then(()=>oi);return{erkenneBerufsschulMuster:c}},void 0,import.meta.url),t=await y.tage.toArray();if(!t.length)return!1;const n=e(t),a=await y.profil.get("self");if(!a)return!1;const s=a.berufsschulMuster??{};return JSON.stringify(s.wochentageWoechentlich??[])!==JSON.stringify(n.wochentageWoechentlich)||JSON.stringify(s.wochentage14Taegig??[])!==JSON.stringify(n.wochentage14Taegig)||(s.referenzDatum14Taegig??null)!==(n.referenzDatum14Taegig??null)||(s.stundenProTag??null)!==(n.stundenProTag??null)||(s.halbtags??!1)!==(n.halbtags??!1)?(await y.profil.put({...a,berufsschulMuster:n}),!0):!1}catch(e){return console.warn("[db] refreshBerufsschulMuster fehlgeschlagen:",e),!1}}async function Zs(){try{const{weekKey:e}=await de(async()=>{const{weekKey:s}=await Promise.resolve().then(()=>Ds);return{weekKey:s}},void 0,import.meta.url),{parseISO:t}=await de(async()=>{const{parseISO:s}=await import("./datefns-C8_rfWt_.js").then(r=>r.r);return{parseISO:s}},[],import.meta.url),n=await y.tage.toArray(),a=[];for(const s of n){if(!s.datum)continue;const r=e(t(s.datum));r!==s.wocheKey&&a.push({...s,wocheKey:r})}return a.length&&await y.tage.bulkPut(a),a.length}catch(e){return console.warn("[db] refreshWocheKeys fehlgeschlagen:",e),0}}async function qs(){try{const e=await y.mailVorlagen.toArray(),t=e.some(a=>a.betreff&&!a.betreff.startsWith("Bitte um Zeitkorrektur im ESS")),n=e.some(a=>a.text&&!/Vielen Dank!\s*$/.test(a.text));return t||n?(await y.mailVorlagen.clear(),!0):!1}catch(e){return console.warn("[db] ensureMailVorlagenFresh fehlgeschlagen:",e),!1}}async function Gs(){const e=await y.einstellungen.get("__migration_reset");return(e==null?void 0:e.value)===!0?(await y.einstellungen.delete("__migration_reset"),!0):!1}async function le(){return await y.profil.get("self")??Kn()}async function rt(e){const t={...e,id:"self",updatedAt:new Date().toISOString()};return await y.profil.put(t),t}function Kn(){return{id:"self",ueber18:!0,sollStundenProWoche:35,sollStundenProTag:7,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1},zeitwirtschaftEmail:"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:"Frau Kanarya",pausenRegel:"auto",erstelltAm:new Date().toISOString()}}async function _e(e,t=null){const n=await y.einstellungen.get(e);return n?n.value:t}async function lt(e,t){await y.einstellungen.put({key:e,value:t})}async function ze(){const e=await _e("isAzubiOverride",null);if(e===!0||e===!1)return e;const t=await _e("mitarbeiterkreis",null);return t==null?!0:String(t).trim().toUpperCase()==="AZ"}async function Us(e){e==null?await y.einstellungen.delete("isAzubiOverride"):await lt("isAzubiOverride",!!e)}async function Js(e){e!=null&&await lt("mitarbeiterkreis",String(e))}async function ue(){return await y.tage.orderBy("datum").toArray()}async function Ys(e,t,n){const a=n instanceof Date?n.toISOString():typeof n=="string"&&n?n:null,s=(i,o)=>o?i?i>o:!1:!0;let r=0,c=0,d=0,l=0;if(e.length){const i=e.map(h=>h.datum),o=await y.tage.bulkGet(i),u=[];for(let h=0;h<e.length;h++){const g={...e[h],_quellStichtag:a},p=o[h];!p||s(a,p._quellStichtag)?u.push(g):c++}u.length&&(await y.tage.bulkPut(u),r=u.length)}if(t.length){const i=t.map(h=>h.monatKey),o=await y.monate.bulkGet(i),u=[];for(let h=0;h<t.length;h++){const g={...t[h],_quellStichtag:a},p=o[h];!p||s(a,p._quellStichtag)?u.push(g):l++}u.length&&(await y.monate.bulkPut(u),d=u.length)}return{tage:r,monate:d,skippedTage:c,skippedMonate:l}}async function ut(){return await y.monate.orderBy("monatKey").toArray()}async function Xs(e){return await y.uploads.add({...e,hochladeDatum:new Date().toISOString()})}async function Xe(){return await y.uploads.orderBy("hochladeDatum").last()}async function In(){return await y.uploads.orderBy("hochladeDatum").reverse().toArray()}async function Re(){return await y.fahrtgeldTemplate.get("self")}async function Ot(e){await y.fahrtgeldTemplate.put({id:"self",...e})}async function Qs(){await y.fahrtgeldTemplate.delete("self")}async function ei(){await Promise.all([y.profil.clear(),y.tage.clear(),y.monate.clear(),y.uploads.clear(),y.einstellungen.clear(),y.mailVorlagen.clear(),y.warnungDismissals.clear(),y.fahrtgeldTemplate.clear()])}async function Hn(){await Promise.all([y.tage.clear(),y.monate.clear(),y.uploads.clear(),y.warnungDismissals.clear()])}async function ti(){const[e,t,n,a,s,r,c]=await Promise.all([y.profil.toArray(),y.tage.toArray(),y.monate.toArray(),y.uploads.toArray(),y.einstellungen.toArray(),y.mailVorlagen.toArray(),y.warnungDismissals.toArray()]);return{version:1,exportedAt:new Date().toISOString(),data:{profil:e,tage:t,monate:n,uploads:a,einstellungen:s,mailVorlagen:r,warnungDismissals:c}}}async function ni(e){if(!e||e.version!==1||!e.data)throw new Error("Ungültiges oder inkompatibles Backup-Format.");const t=e.data;await y.transaction("rw",y.profil,y.tage,y.monate,y.uploads,y.einstellungen,y.mailVorlagen,y.warnungDismissals,async()=>{var n,a,s,r,c,d,l;(n=t.profil)!=null&&n.length&&await y.profil.bulkPut(t.profil),(a=t.tage)!=null&&a.length&&await y.tage.bulkPut(t.tage),(s=t.monate)!=null&&s.length&&await y.monate.bulkPut(t.monate),(r=t.uploads)!=null&&r.length&&await y.uploads.bulkPut(t.uploads),(c=t.einstellungen)!=null&&c.length&&await y.einstellungen.bulkPut(t.einstellungen),(d=t.mailVorlagen)!=null&&d.length&&await y.mailVorlagen.bulkPut(t.mailVorlagen),(l=t.warnungDismissals)!=null&&l.length&&await y.warnungDismissals.bulkPut(t.warnungDismissals)})}async function ot(e,t){await y.mailVorlagen.put({key:e,...t})}async function ai(e){return await y.mailVorlagen.get(e)}async function gt(){return await y.mailVorlagen.toArray()}async function si(e,t){await y.warnungDismissals.put({key:`${e}-${t}`,datum:e,typ:t,dismissedAt:new Date().toISOString()})}async function ii(){return await y.warnungDismissals.toArray()}function ri(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>`}function li(e=22){return`<svg class="kg-icon" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>`}function Rn(e,t={}){const{size:n=20,layout:a="inline"}=t;return e?`
    <div class="kommen-gehen ${a}">
      <span class="kg-block kommen" title="Kommen (frühester Einstempel)">
        ${ri(n)}
        <span class="kg-zeit tabular">${e.kommen}</span>
      </span>
      <span class="kg-block gehen" title="Gehen (spätester Ausstempel)">
        ${li(n)}
        <span class="kg-zeit tabular">${e.gehen}</span>
      </span>
    </div>
  `:'<span class="kg-empty">—</span>'}function jn(e){var o;const t=e.filter(u=>u.tagestyp==="Berufsschule");if(t.length<2)return{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1};const n={};for(const u of t)n[o=u.wochentag]??(n[o]=[]),n[u.wochentag].push(u);const a=[],s=[];let r=null;for(const[u,h]of Object.entries(n)){if(h.sort((m,v)=>m.datum.localeCompare(v.datum)),h.length<2)continue;const g=[];for(let m=1;m<h.length;m++)g.push(Mn(N(h[m].datum),N(h[m-1].datum)));const p=nn(g);p<=10?a.push(u):p<=18&&(s.push(u),(!r||N(h[0].datum)<N(r))&&(r=h[0].datum))}const c=t.map(u=>u.ist).filter(u=>u!=null&&u>0),d=nn(c),l=d!=null?Math.round(d*4)/4:null,i=l!=null&&l<5;return{wochentageWoechentlich:a,wochentage14Taegig:s,referenzDatum14Taegig:r,stundenProTag:l,halbtags:i}}function nn(e){if(!e.length)return null;const t=e.slice().sort((a,s)=>a-s),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function ht(e,t){var s,r;if(!t)return!1;const a=["SO","MO","DI","MI","DO","FR","SA"][e.getDay()];if((s=t.wochentageWoechentlich)!=null&&s.includes(a))return!0;if((r=t.wochentage14Taegig)!=null&&r.includes(a)&&t.referenzDatum14Taegig){const c=N(t.referenzDatum14Taegig),d=Fa(e,c,{weekStartsOn:1});if(d>=0&&d%2===0)return!0}return!1}function Zn(e,t=null){return(e==null?void 0:e.halbtags)===!0&&(e==null?void 0:e.stundenProTag)!=null&&e.stundenProTag>0?e.stundenProTag:t}const oi=Object.freeze(Object.defineProperty({__proto__:null,erkenneBerufsschulMuster:jn,erwarteteBerufsschulStunden:Zn,istBerufsschulTagLautMuster:ht},Symbol.toStringTag,{value:"Module"})),Ne={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function ft(e,t,n,a=new Set,s={}){var g,p;const r=s.isAzubi!==!1,c=[],d=n??new Date,l=new Map(e.map(m=>[m.datum,m]));if(!e.length)return c;const i=N(e[0].datum),o=d,u=_(o,"yyyy-MM-dd");for(let m=new Date(i);m<=o;m=Ue(m,1)){if(Je(m))continue;const v=_(m,"yyyy-MM-dd"),f=l.get(v),w=On(m,o),$=v===u,P=!f||!f.tagestyp&&!f.ist&&(((g=f.zeitSpannen)==null?void 0:g.length)??0)===0;if(!($&&P)){if(P){if(r&&ht(m,t.berufsschulMuster)){const k=w>=4?"error":w>=2?"warn":"info";Ke(c,a,{datum:v,wochentag:(f==null?void 0:f.wochentag)??nt(m),typ:"bs_tag_fehlt",schweregrad:k,titel:`Berufsschultag nicht eingetragen: ${V(m)}`,beschreibung:`Laut deinem Profil hast du am ${Ne[nt(m)]}, ${V(m)} Berufsschule. Im Zeitnachweis fehlt der Tag bisher${w>=4?" — bitte bei der Zeitwirtschaft nachhaken":""}.`,alter:w,mailVorlageKey:k==="error"?"bs_tag_fehlt":null})}else{const k=w>=4?"error":w>=2?"warn":"info";Ke(c,a,{datum:v,wochentag:nt(m),typ:"stempelzeit_fehlt",schweregrad:k,titel:`Keine Stempelzeit am ${V(m)}`,beschreibung:`Am ${Ne[nt(m)]}, ${V(m)} wurde keine Stempelzeit erfasst. Falls du an diesem Tag im Haus warst, sollte die Zeitwirtschaft das nachtragen${w>=4?" — es ist inzwischen ≥4 Werktage her":""}.`,alter:w,mailVorlageKey:k==="error"?"stempelzeit_fehlt":null})}continue}if(r&&f.tagestyp==="Berufsschule"&&f.ist!=null){const k=Zn(t.berufsschulMuster,f.soll);k!=null&&f.ist<k-.5&&Ke(c,a,{datum:v,wochentag:f.wochentag,typ:"bs_stunden_falsch",schweregrad:"error",titel:`Berufsschultag mit zu wenig Stunden: ${V(m)}`,beschreibung:`Am ${Ne[f.wochentag]}, ${V(m)} sind nur ${f.ist.toFixed(2).replace(".",",")}h gebucht statt der für dich üblichen ${k.toFixed(2).replace(".",",")}h. Die Zeitwirtschaft hat den Berufsschultag möglicherweise nur halb erfasst.`,ist:f.ist,soll:k,mailVorlageKey:"bs_stunden_falsch"})}if(f.tagestyp==="Stempelzeit"&&((p=f.zeitSpannen)==null?void 0:p.length)>1&&v>=En){const k=Tn(f,t);(k==null?void 0:k.typ)==="fehler_zeitwirtschaft"&&k.unrechtmaessigerVerlustMin>=5?Ke(c,a,{datum:v,wochentag:f.wochentag,typ:"pausen_abzug",schweregrad:k.unrechtmaessigerVerlustMin>=15?"error":"warn",titel:`Pausen-Abzug fehlerhaft (${V(m)})`,beschreibung:`Am ${Ne[f.wochentag]}, ${V(m)} wurden ${Math.round(k.abgezogenePause*60)} min Pause abgezogen. Gestempelt: ${Math.round(k.gestempeltePause*60)} min, gesetzlich nötig (${k.gesetz.toUpperCase()}): ${Math.round(k.gesetzlichePflicht*60)} min. Differenz von ${k.unrechtmaessigerVerlustMin} min ist unerklärlich.`,verlustMinuten:k.unrechtmaessigerVerlustMin,abgezogen:k.abgezogenePause,gestempelt:k.gestempeltePause,mailVorlageKey:"pausen_abzug"}):(k==null?void 0:k.typ)==="aufstockung_legal"&&k.aufstockungMin>=10&&Ke(c,a,{datum:v,wochentag:f.wochentag,typ:"pausen_aufstockung",schweregrad:"info",titel:`Zu wenig Pause gestempelt (${V(m)}) — ${k.aufstockungMin} min automatisch aufgestockt`,beschreibung:`Am ${Ne[f.wochentag]}, ${V(m)} hast du nur ${Math.round(k.gestempeltePause*60)} min Pause gemacht. Gesetz (${k.gesetz.toUpperCase()}) schreibt ${Math.round(k.gesetzlichePflicht*60)} min vor. Fehlende ${k.aufstockungMin} min wurden als Pause gewertet — das ist legal, aber du verlierst dadurch Arbeitszeit. Tipp: mach beim nächsten Mal etwas länger Mittag.`})}}}const h={error:0,warn:1,info:2};return c.sort((m,v)=>{const f=h[m.schweregrad]-h[v.schweregrad];return f!==0?f:v.datum.localeCompare(m.datum)}),c}function qn(e,t=new Set){var a,s,r,c;const n=[];for(const d of e){const l=((a=d.glz)==null?void 0:a.saldoVorperiode)??0,i=((s=d.glz)==null?void 0:s.saldoAktuellePeriode)??0,o=((r=d.glz)==null?void 0:r.umgebuchteStunden)??0,u=(c=d.glz)==null?void 0:c.saldoGesamt;if(u==null)continue;const h=l+i+o,g=Math.abs(u-h);if(g>.03){const p=`${d.monatKey}-saldo_plausi`;t.has(p)||n.push({datum:`${d.monatKey}-01`,wochentag:"",typ:"saldo_plausi",schweregrad:"warn",titel:`Saldo-Differenz im Monat ${d.monatKey}`,beschreibung:`Rechnung: Vorperiode ${l.toFixed(2)} + aktuelle Periode ${i.toFixed(2)} + umgebucht ${o.toFixed(2)} = ${h.toFixed(2)}, aber dein Saldo wird mit ${u.toFixed(2)} angezeigt. Abweichung: ${g.toFixed(2)}h.`,soll:h,ist:u})}}return n}function Ke(e,t,n){const a=`${n.datum}-${n.typ}`;t.has(a)||(n.id=a,e.push(n))}function nt(e){return["SO","MO","DI","MI","DO","FR","SA"][e.getDay()]}const ci={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"},qe={bs_tag_fehlt:{key:"bs_tag_fehlt",titel:"Berufsschultag fehlt",beschreibung:"Wenn ein Berufsschultag komplett nicht im Zeitnachweis eingetragen wurde.",betreff:"Bitte um Zeitkorrektur im ESS  - Fehlender Berufsschultag {datum}",text:`Guten Tag {zeitwirtschaft_anrede},

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
Vielen Dank!`}};function Qe(e,t){const n=qe[e];return n?{...n,...t??{}}:null}function Gn(e,t){const n=an(e.text,t);return{betreff:an(e.betreff,t),text:n}}function an(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function Wt(e,t){const n=t.datum?new Date(t.datum):null;return{name:"",personalnr:"",kostenstelle:"",datum:n?_t(n).split(", ")[1]:"",wochentag:ci[t.wochentag]??t.wochentag??"",zeitwirtschaft_anrede:e.zeitwirtschaftAnrede||"Frau Kanarya",zeitwirtschaft_email:e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",ist:t.ist!=null?t.ist.toFixed(2).replace(".",","):"",soll:t.soll!=null?t.soll.toFixed(2).replace(".",","):"",abgezogen:t.abgezogen!=null?Math.round(t.abgezogen*60):"",gestempelt:t.gestempelt!=null?Math.round(t.gestempelt*60):"",verlust:t.verlustMinuten??""}}function Vt(e,t,n){const a=Gn(t,n),s=e.zeitwirtschaftEmail||"Zeitwirtschaft.Aichtal@putzmeister.com",r=new URLSearchParams;return r.set("subject",a.betreff),r.set("body",a.text),`mailto:${s}?${r.toString().replace(/\+/g,"%20")}`}let di=0;function X(e,{type:t="info",duration:n=3500}={}){const a=document.getElementById("toast-root");if(!a)return;const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,s.dataset.id=++di,a.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(-8px)",s.style.transition="opacity 220ms, transform 220ms",setTimeout(()=>s.remove(),250)},n)}function ct(e){return X(e,{type:"error",duration:6e3})}function W(e){return X(e,{type:"success"})}const ui=3,gi=2.5,hi={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};function mt(e,t={}){if(!(e!=null&&e.length))return'<p style="color: var(--fg-muted);">Keine Tage im Zeitraum.</p>';const n=new Map;for(const r of t.warnungen??[])n.has(r.datum)||n.set(r.datum,[]),n.get(r.datum).push(r);const a=[];let s=null;for(const r of e)(!s||s.key!==r.wocheKey)&&(s={key:r.wocheKey,tage:[]},a.push(s)),s.tage.push(r);return`<div class="tages-liste">${a.map(r=>fi(r,n)).join("")}</div>`}function fi(e,t){var o;const n=e.tage.reduce((u,h)=>u+dt(h),0),a=e.tage.reduce((u,h)=>u+(h.diff??0),0),s=(o=e.tage[0])==null?void 0:o.datum,r=s?Ye(N(s)):"",c=e.key?e.key.split("-")[1]:"?",d=a>.05?"pos":a<-.05?"neg":"flat",l=(a>0?"+":"")+a.toFixed(2).replace(".",",")+"h",i=n.toFixed(2).replace(".",",")+"h";return`
    <div class="woche-group">
      <div class="woche-header">
        <div class="woche-header-titel">
          <span class="woche-header-kw">KW ${S(c)}</span>
          <span class="woche-header-range tabular">${S(r)}</span>
        </div>
        <div class="woche-header-stats">
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Ist</span>
            <span class="woche-header-ist tabular">${i}</span>
          </span>
          <span class="woche-header-stat">
            <span class="woche-header-stat-label">Diff</span>
            <span class="woche-header-diff tabular ${d}">${l}</span>
          </span>
        </div>
      </div>
      <div class="woche-tage">
        ${e.tage.map(u=>mi(u,(t==null?void 0:t.get(u.datum))??[])).join("")}
      </div>
    </div>
  `}function mi(e,t=[]){const n=e.diff??0,a=n>0,s=a?ui:gi,r=Math.min(150,Math.abs(n)/s*50),c=a?"var(--success)":n<0?"var(--danger)":"var(--fg-subtle)",d=Pn(e.zeitSpannen),l=e.saldo??0,i=t.length>0,o=i?bi(t):"",u=i?t.map(g=>`${g.titel}${g.beschreibung?`
`+g.beschreibung:""}`).join(`

`):"",h=i?t[0].schweregrad:null;return`
    <a href="#/tag/${e.datum}" class="tag-row${i?" has-warn severity-"+h:""}">
      <div class="tag-row-datum">
        <div class="tabular">${S(V(new Date(e.datum)))}</div>
        <div class="tag-row-wd">${pi(e.wochentag)}</div>
      </div>
      <div class="tag-row-warn-cell" aria-hidden="${i?"false":"true"}">
        ${i?`<span class="tag-row-warn severity-${h}" title="${S(u)}">${o}${t.length>1?" "+t.length:""}</span>`:""}
      </div>
      <div class="tag-row-typ">
        ${e.tagestyp?`<span class="pill ${vi(e.tagestyp)}">${S(e.tagestyp)}</span>`:'<span style="color: var(--fg-subtle); font-size: 12px;">—</span>'}
      </div>
      <div class="tag-row-kg">
        ${Rn(d,{size:18})}
      </div>
      <div class="tag-row-ist tabular">
        ${(()=>{if(e.ist==null)return'<div class="ist-wert">—</div>';const g=Ze(e.ist),[p,m]=g.split(":");return e.ist<=0?`<div class="ist-wert">${g}</div>`:`<div class="ist-display" title="Klick auf H oder M zum Kopieren">
            <button class="ist-part" data-val="${p}" title="${p} Stunden kopieren">${p}</button><span class="ist-sep">:</span><button class="ist-part" data-val="${m}" title="${m} Minuten kopieren">${m}</button>
          </div>`})()}
        <div style="color: var(--fg-subtle); font-size: 11px;">Soll ${e.soll!=null?Ze(e.soll):"—"}</div>
      </div>
      <div class="tag-row-bar">
        <div class="bar-track">
          <div class="bar-zero"></div>
          <div class="bar-fill ${a?"pos":"neg"}" style="width: ${r}%; background: ${c};"></div>
        </div>
      </div>
      <div class="tag-row-diff tabular" style="color: ${a?"var(--success)":n<0?"var(--danger)":"var(--fg-muted)"};">
        ${n!==0?(a?"+":"")+n.toFixed(2).replace(".",",")+"h":"0,00h"}
      </div>
      <div class="tag-row-saldo tabular" title="Gesamt-Saldo nach diesem Tag" style="color: var(--fg-muted); font-size: 12px; text-align: right; line-height: 1.15;">
        <div>${l>=0?"+":""}${l.toFixed(2).replace(".",",")}h</div>
        <div style="color: var(--fg-subtle); font-size: 10px; font-weight: 500; letter-spacing: 0.02em;">Saldo nach Tag</div>
      </div>
    </a>
  `}function pi(e){return hi[e]??e}function bi(e){const t={error:3,warn:2,info:1};let n=e[0];for(const a of e)(t[a.schweregrad]||0)>(t[n.schweregrad]||0)&&(n=a);return n.schweregrad==="error"?"!":n.schweregrad==="warn"?"⚠":"i"}function vi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function Nt(e){e._istCopyAttached||(e._istCopyAttached=!0,e.addEventListener("click",async t=>{const n=t.target.closest(".ist-part");if(!n)return;t.preventDefault(),t.stopPropagation();const a=n.getAttribute("data-val");try{await navigator.clipboard.writeText(a),n._copyResetTimer&&clearTimeout(n._copyResetTimer),n.classList.add("ok"),n.textContent="✓",n._copyResetTimer=setTimeout(()=>{n.classList.remove("ok"),n.textContent=a,n._copyResetTimer=null},800)}catch{W(`Bitte kopieren: ${a}`)}}))}const yi=[{key:7,label:"1 Woche"},{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function wi(e){return yi.filter(t=>t.key==="alles"||t.key<e)}async function sn({root:e}){const[t,n,a,s,r,c,d,l,i]=await Promise.all([le(),ut(),ue(),ii(),_e("dashboardZeitraum",14),gt(),Xe(),_e("saldoFormat","hhmm"),ze()]),o=Object.fromEntries(c.map(z=>[z.key,z]));if(a.length===0){e.innerHTML=xi();return}const u=Fn(a,n),h=u.length,g=wi(h);let p=r;g.some(z=>z.key===p)||(p="alles");const m=new Set(s.map(z=>z.key)),v=d!=null&&d.stichtagAuswertung?new Date(d.stichtagAuswertung):new Date,f=ft(a,t,v,m,{isAzubi:i}),w=qn(n,m),$=[...f,...w],P=bs(u),k=P>.05?"positive":P<-.05?"negative":"";e.innerHTML=`
    <h1 class="view-title">Dashboard</h1>
    <p class="view-subtitle">Stand: ${Fe(V(new Date(a[a.length-1].datum)))}</p>

    <div class="saldo-hero" style="margin-bottom: 32px; align-items: stretch;">
      <div class="saldo-hero-text" style="min-width: 260px;">
        <h3>Aktueller Gleitzeit-Saldo</h3>
        <div class="saldo-value-row">
          <div class="saldo-value ${k}" id="saldo-hero-value">${Fe(Xt(P,l))}</div>
          <button type="button" class="saldo-format-toggle" id="saldo-format-toggle"
            data-format="${Fe(l)}"
            title="${l==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"}">
            ${l==="hhmm"?"als Dezimal":"als Std:Min"}
          </button>
        </div>
        <div id="hero-bewegung" class="saldo-trend flat" style="margin-top: 12px;"></div>
      </div>
      <div style="flex: 1; min-width: 400px; display: flex; flex-direction: column;">
        <div class="card-split" style="margin-bottom: 12px; align-items: center;">
          <h3 style="margin: 0;">Saldo-Verlauf</h3>
          <div class="segmented" id="zeitraum-picker">
            ${g.map(z=>`<button type="button" data-key="${z.key}" class="${p===z.key?"active":""}">${z.label}</button>`).join("")}
          </div>
        </div>
        <div style="flex: 1; height: 220px;"><canvas id="saldo-chart"></canvas></div>
      </div>
    </div>

    ${$.length>0?`
      <div class="card" style="margin-bottom: 32px;">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Offene Warnungen</h2>
        </div>
        ${$.slice(0,8).map(z=>ki(z,t,o)).join("")}
        ${$.length>8?`<div style="margin-top: 12px; color: var(--fg-muted); font-size: 13px; text-align: center;">+ ${$.length-8} weitere Warnungen vorhanden</div>`:""}
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
          ${g.map(z=>`<button type="button" data-key="${z.key}" class="${p===z.key?"active":""}">${z.label}</button>`).join("")}
        </div>
      </div>
      <div id="tage-liste"></div>
    </div>

  `,rn(p,e,u,$);const L=e.querySelector("#saldo-format-toggle");L==null||L.addEventListener("click",async()=>{const F=(L.getAttribute("data-format")||"hhmm")==="hhmm"?"dezimal":"hhmm";await lt("saldoFormat",F);const x=e.querySelector("#saldo-hero-value");x&&(x.textContent=Xt(P,F)),L.setAttribute("data-format",F),L.textContent=F==="hhmm"?"als Dezimal":"als Std:Min",L.title=F==="hhmm"?"Auf Dezimal umstellen":"Auf Stunden:Minuten umstellen"});const H=()=>e.querySelectorAll("#zeitraum-picker button, #zeitraum-picker-2 button");H().forEach(z=>{z.addEventListener("click",async()=>{if(z.disabled)return;const F=z.getAttribute("data-key"),x=F==="alles"?"alles":parseInt(F,10);H().forEach(b=>b.classList.toggle("active",b.getAttribute("data-key")===F)),await lt("dashboardZeitraum",x),rn(x,e,u,$)})}),e.addEventListener("click",async z=>{const F=z.target.closest(".ist-part");if(F){z.preventDefault(),z.stopPropagation();const K=F.getAttribute("data-val");try{await navigator.clipboard.writeText(K),F._copyResetTimer&&clearTimeout(F._copyResetTimer),F.classList.add("ok"),F.textContent="✓",F._copyResetTimer=setTimeout(()=>{F.classList.remove("ok"),F.textContent=K,F._copyResetTimer=null},800)}catch{W(`Bitte kopieren: ${K}`)}return}const x=z.target.closest(".btn-dismiss");if(!x)return;const b=x.getAttribute("data-datum"),E=x.getAttribute("data-typ");if(!b||!E)return;await si(b,E),W("Warnung ausgeblendet.");const B=x.closest(".alert");B&&(B.style.display="none")})}function rn(e,t,n,a=[]){const s=ps(n,e),r=vs(s);requestAnimationFrame(()=>{const i=t.querySelector("#saldo-chart");Bt(i,s)});const c=t.querySelector("#hero-bewegung");if(c){const i=r>.05?"up":r<-.05?"down":"flat",o=r>.05?"↑":r<-.05?"↓":"→";c.className=`saldo-trend ${i}`,c.innerHTML=`${o} ${Math.abs(r)<.01?"Unverändert":fe(r,{signed:!0})} im Zeitraum`}const d=t.querySelector("#tage-info");if(d){const i=s.length;d.textContent=`${i} ${i===1?"Tag":"Tage"}`}const l=t.querySelector("#tage-liste");l&&(l.innerHTML=mt(s.slice().reverse(),{warnungen:a.filter(i=>s.some(o=>o.datum===i.datum))}))}function ki(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=Qe(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(r){const c=Wt(t,e);s=Vt(t,r,c)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${Fe(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${Fe(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${wt(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
          <button class="btn ghost sm btn-dismiss" data-datum="${wt(e.datum)}" data-typ="${wt(e.typ)}">Ausblenden</button>
        </div>
      </div>
    </div>
  `}function xi(){return`
    <div class="empty-state" style="margin-top: 80px;">
      <p class="hint" style="margin-bottom: 18px;">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload →</a>
      <p class="hint" style="margin-top: 24px; font-size: 12px;">Tipp: Tour erneut starten unter <a href="#/daten" style="color: var(--accent);">Daten</a> ganz unten.</p>
    </div>
  `}function Fe(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function wt(e){return Fe(e)}const Un=""+new URL("pdf.worker.min-yatZIOMy.mjs",import.meta.url).href;zn.workerSrc=Un;const ln={Januar:1,Februar:2,März:3,Maerz:3,April:4,Mai:5,Juni:6,Juli:7,August:8,September:9,Oktober:10,November:11,Dezember:12},$i=["Stempelzeit","Berufsschule Std. bez","Berufsschule","Dienstreise Arbeitszeit","Reise öff.VM/PKW Beifahr.","Reise öff.VM/PKW","Urlaub","Gleitzeit","Arbeitsunfähigkeit","TgDtEinh","Neujahr","Karfreitag","Ostermontg","Ostmontg","Osterso.","Hl.3 Kön.","Allerhlg","Pfingstmo","Fronleichn","TdDtEinh"];async function Si(e){var l,i;const n=await Dn({data:e}).promise,a=[];let s=0;for(let o=1;o<=n.numPages;o++){const h=await(await n.getPage(o)).getTextContent();s+=h.items.length;const g=Mi(h.items);for(const p of g)a.push({page:o,text:p})}const r=zi(a),{tage:c,monate:d}=Di(a);try{const o=await n.getMetadata();r.producer=((l=o==null?void 0:o.info)==null?void 0:l.Producer)??null,r.creator=((i=o==null?void 0:o.info)==null?void 0:i.Creator)??null}catch{}return r.totalTextItems=s,{meta:r,tage:c,monate:d}}function Mi(e){if(!e.length)return[];const t=e.slice().sort((c,d)=>{const l=d.transform[5]-c.transform[5];return Math.abs(l)>2?l:c.transform[4]-d.transform[4]}),n=[];let a=null,s=[];const r=3;for(const c of t){const d=c.transform[5];a==null||Math.abs(d-a)<=r?(s.push(c),a==null&&(a=d)):(n.push(on(s)),s=[c],a=d)}return s.length&&n.push(on(s)),n.filter(c=>c.trim().length>0)}function on(e){e.sort((a,s)=>a.transform[4]-s.transform[4]);let t="",n=-1;for(const a of e){const s=a.transform[4];n>=0&&s-n>4?t+="  ":n>=0&&s-n>.5&&(t+=" "),t+=a.str,n=s+a.width}return t}function zi(e){var n,a;const t={personalnummer:null,name:null,kostenstelle:null,personalbereich:null,einstellungsdatum:null,mitarbeiterkreis:null,arbeitszeitplanregel:null,zeitraumVon:null,zeitraumBis:null,stichtagAuswertung:null};for(let s=0;s<e.length;s++){const r=e[s].text,c=/vom\s+(\d{2}\.\d{2}\.\d{4})\s+bis\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);c&&(t.zeitraumVon=Te(c[1]),t.zeitraumBis=Te(c[2]));const d=/bis einschließlich dem\s+(\d{2}\.\d{2}\.\d{4})/i.exec(r);if(d&&(t.stichtagAuswertung=Te(d[1])),/Personalnummer/i.test(r)&&/Kostenstelle/i.test(r)){const l=(((n=e[s+1])==null?void 0:n.text)??"").trim();let i=l.split(/\s{2,}/);i.length<3&&(i=l.split(/\s+/)),i.length>=3&&/^\d/.test(i[0])&&(t.personalnummer=i[0],t.kostenstelle=i[1],t.personalbereich=i[2])}if(/Einstellungsdatum/i.test(r)&&/Mitarbeiterkreis/i.test(r)){const l=(((a=e[s+1])==null?void 0:a.text)??"").trim();let i=l.split(/\s{2,}/);i.length<3&&(i=l.split(/\s+/)),i.length>=3&&/^\d{2}\.\d{2}\.\d{4}$/.test(i[0])&&(t.einstellungsdatum=Te(i[0]),t.mitarbeiterkreis=i[1],t.arbeitszeitplanregel=i[2])}if(/Bei Rückfragen wenden Sie sich an/i.test(r))for(let l=s+1;l<Math.min(s+8,e.length);l++){const i=e[l].text.trim();if(/^[A-ZÄÖÜ][a-zäöüß]+(?:\s[A-ZÄÖÜ][a-zäöüß]+)+$/.test(i)&&!/kanarya/i.test(i)&&!/tel/i.test(i)){t.name=i;break}}}return t}function Di(e,t){var l;const n=[],a=[];let s=null,r=null,c=!1,d=0;for(;d<e.length;){const i=e[d].text,o=/Monat:\s*([A-Za-zäöüÄÖÜß]+)\s*-\s*(\d{4})/.exec(i);if(o){const p=o[1].trim(),m=parseInt(o[2],10),v=ln[p]??ln[p.replace("ä","ae")]??null;v&&(s={jahr:m,monat:v,monatKey:`${m}-${String(v).padStart(2,"0")}`},c=!0,r=null),d++;continue}if(/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.test(i)){const p=/Monats.bersicht zum Stichtag\s+(\d{2}\.\d{2}\.\d{4})/i.exec(i),m=Te(p[1]);r={monatKey:(s==null?void 0:s.monatKey)??Ct(m),stichtag:m,glz:{},flexi:{},zeitkonten:{},raw:{}},d=Ai(e,d+1,r),a.push(r);continue}let u=s;const h=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)\b/.exec(i.trim());if(h&&s){const p=parseInt(h[1],10);c&&p>=20?u=Ti(s):p<=15&&(c=!1)}const g=cn(i,u);if(g){const p=[];let m=d+1;for(;m<e.length;){const f=e[m].text;if(/^\s*\d{4}\s+Umbuchung/.test(f)||cn(f,s)||/Wochensumme/i.test(f)||/Monats.bersicht/i.test(f)||/Monat:\s*[A-Za-z]/i.test(f))break;const w=Pi(f);if(w){p.push(w),m++;continue}break}if(p.length&&g.zeitSpannen.push(...p),g.tagestyp==="Wochenende"||g.wochentag==="SA"||g.wochentag==="SO"){d=m;continue}(g.ist!=null||g.soll!=null||(((l=g.zeitSpannen)==null?void 0:l.length)??0)>0||g.tagestyp!=null)&&n.push(g),d=m;continue}d++}return{tage:n,monate:a}}function Ai(e,t,n){let a=t;const s=/(\d{4,5}|KTAU|AZAU)\s*-\s*(.+?)\s+(-?[\d,.]+-?)(?=\s+(?:\d{4,5}|KTAU|AZAU)\s*-|\s*$)/g;for(;a<e.length;){const r=e[a].text.trim();if(/^Monat:\s/.test(r)||/^Einzelergebnisse\s/.test(r)||/^Tag\b/.test(r)||/^Wochensumme/.test(r)||/^\d{2}\s+(MO|DI|MI|DO|FR|SA|SO)\b/.test(r)||/^Übersicht für den Zeitraum/i.test(r)||/^Abwesenheitsansprüche/i.test(r))break;s.lastIndex=0;let c;for(;(c=s.exec(r))!=null;){const d=c[1],l=c[2].trim(),i=An(c[3]);n.raw[d]={beschreibung:l,wert:i},d==="0008"&&(n.glz.saldoVorperiode=i),d==="8016"&&(n.glz.saldoAktuellePeriode=i),d==="9802"&&(n.glz.umgebuchteStunden=i),d==="0005"&&(n.glz.saldoGesamt=i),d==="9803"&&(n.glz.ueberzaehligeStd=i),d==="0050"&&(n.zeitkonten.produktivstunden=i),d==="9011"&&(n.flexi.jahreskontoVorperiode=i),d==="9010"&&(n.flexi.jahreskontoSaldo=i),d==="9020"&&(n.flexi.langzeitkontoSaldo=i),d==="9203"&&(n.zeitkonten.azMonatsendeUeber216=i),d==="9207"&&(n.zeitkonten.auszahlungBav=i),d==="9205"&&(n.zeitkonten.summeAuszahlung=i)}if(a++,a-t>80)break}return a}function cn(e,t){if(!t)return null;const n=e.trim(),a=/^(\d{2})\s+(MO|DI|MI|DO|FR|SA|SO)(?:\s+(.+))?$/.exec(n);if(!a)return null;const s=parseInt(a[1],10),r=a[2],c=(a[3]??"").trim();let d=t.jahr,l=t.monat;const i=new Date(d,l-1,s),o={datum:Bn(i),datumDate:i.toISOString(),wochentag:r,tagNr:s,monatKey:Ct(i),wocheKey:Cn(i),zeitSpannen:[],aktivitaeten:[],ist:null,soll:null,diff:null,pause:null,tazp:null,tagestyp:null,raw:n};return c?(Ei(c,o),o):(o.tagestyp=["SA","SO"].includes(r)?"Wochenende":null,o)}function Pi(e){const t=e.trim(),n=/^(Stempelzeit|Reise öff\.VM\/PKW Beifahr\.|Reise öff\.VM\/PKW|Dienstreise Arbeitszeit)\s+(\d{2}:\d{2})\s+(\d{2}:\d{2})\s*$/.exec(t);return n?{aktivitaet:n[1],von:n[2],bis:n[3]}:null}function Ei(e,t){let n=null,a=e;for(const o of $i)if(e.startsWith(o)){n=o,a=e.slice(o.length).trim();break}n||(n=e.split(/\s+/)[0],a=e.slice(n.length).trim()),t.tagestyp=Fi(n),t.aktivitaeten.push(n);const s=a.split(/\s+/).filter(Boolean),r=/^\d{2}:\d{2}$/,c=/^-?[\d,.]+-?$/;let d=0;for(;s[d]&&r.test(s[d])&&s[d+1]&&r.test(s[d+1]);)t.zeitSpannen.push({aktivitaet:n,von:s[d],bis:s[d+1]}),d+=2;const l=[];for(;d<s.length&&c.test(s[d]);){const o=An(s[d]);o!=null&&l.push(o),d++}let i=s[d];l.length>=5?([t.ist,t.soll,t.diff,t.pause]=l,i||(i=String(l[4]))):l.length===4?[t.ist,t.soll,t.diff,t.pause]=l:l.length===3?[t.ist,t.soll,t.diff]=l:l.length===2?[t.ist,t.soll]=l:l.length===1&&(t.ist=l[0]),i&&(t.tazp=String(i))}function Ti(e){if(!e)return null;let t=e.monat-1,n=e.jahr;return t<1&&(t=12,n-=1),{jahr:n,monat:t,monatKey:`${n}-${String(t).padStart(2,"0")}`}}function Fi(e){return e?/^Stempelzeit$/i.test(e)?"Stempelzeit":/^Berufsschule Std\. bez$/i.test(e)||/^Berufsschule$/i.test(e)?"Berufsschule":/Dienstreise/i.test(e)||/Reise/i.test(e)?"Dienstreise":/^Urlaub$/i.test(e)?"Urlaub":/^Gleitzeit$/i.test(e)?"Gleitzeit":/Arbeitsunf.higkeit/i.test(e)?"Arbeitsunfähigkeit":/^(Neujahr|Karfreitag|Ostermontg|Ostmontg|Osterso\.|Hl\.3 Kön\.|Allerhlg|Pfingstmo|Fronleichn|TdDtEinh|TgDtEinh)$/i.test(e)?"Feiertag":e:null}function re(e,t={}){const{title:n="Bestätigen",confirmLabel:a="Bestätigen",cancelLabel:s="Abbrechen",variant:r="default"}=t;return _i({message:e,title:n,confirmLabel:a,cancelLabel:s,variant:r,kind:"confirm"})}function Li(e,t,n={}){const{title:a="Bestätigen",confirmLabel:s="Weiter",cancelLabel:r="Abbrechen",variant:c="default",icon:d=null}=n;return new Promise(l=>{const i=document.activeElement,o=document.createElement("div");o.className="app-dialog-overlay";const u=d==="info"?`
      <span class="app-dialog-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>`:"";o.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <div class="app-dialog-header">
          ${u}
          <h3 id="app-dialog-title" class="app-dialog-title">${he(a)}</h3>
        </div>
        <div class="app-dialog-message">${Jn(e)}</div>
        <label class="app-dialog-checkbox">
          <input type="checkbox" class="app-dialog-checkbox-input" />
          <span class="app-dialog-checkbox-label">${he(t)}</span>
        </label>
        <div class="app-dialog-actions">
          <button class="btn ghost app-dialog-cancel" type="button">${he(r)}</button>
          <button class="btn primary app-dialog-confirm ${c==="danger"?"is-danger":""}" type="button" disabled>${he(s)}</button>
        </div>
      </div>
    `,document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("is-open"));const h=o.querySelector(".app-dialog-confirm"),g=o.querySelector(".app-dialog-cancel"),p=o.querySelector(".app-dialog-checkbox-input"),m=f=>{o.classList.remove("is-open"),setTimeout(()=>{if(o.remove(),document.removeEventListener("keydown",v),i&&i.focus)try{i.focus()}catch{}l(f)},180)},v=f=>{f.key==="Escape"?(f.preventDefault(),m(!1)):f.key==="Enter"&&!h.disabled&&(f.preventDefault(),m(!0))};p.addEventListener("change",()=>{h.disabled=!p.checked}),h.addEventListener("click",()=>{h.disabled||m(!0)}),g.addEventListener("click",()=>m(!1)),o.addEventListener("click",f=>{f.target===o&&m(!1)}),document.addEventListener("keydown",v),setTimeout(()=>p.focus(),50)})}function _i({message:e,title:t,confirmLabel:n,cancelLabel:a,variant:s,kind:r}){return new Promise(c=>{const d=document.activeElement,l=document.createElement("div");l.className="app-dialog-overlay",l.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <h3 id="app-dialog-title" class="app-dialog-title">${he(t)}</h3>
        <div class="app-dialog-message">${Jn(e)}</div>
        <div class="app-dialog-actions">
          ${`<button class="btn ghost app-dialog-cancel" type="button">${he(a)}</button>`}
          <button class="btn primary app-dialog-confirm ${s==="danger"?"is-danger":""}" type="button">${he(n)}</button>
        </div>
      </div>
    `,document.body.appendChild(l),requestAnimationFrame(()=>l.classList.add("is-open"));const i=l.querySelector(".app-dialog-confirm"),o=l.querySelector(".app-dialog-cancel"),u=g=>{l.classList.remove("is-open"),setTimeout(()=>{if(l.remove(),document.removeEventListener("keydown",h),d&&d.focus)try{d.focus()}catch{}c(g)},180)},h=g=>{g.key==="Escape"?(g.preventDefault(),u(!1)):g.key==="Enter"&&(g.preventDefault(),u(!0))};i==null||i.addEventListener("click",()=>u(!0)),o==null||o.addEventListener("click",()=>u(!1)),l.addEventListener("click",g=>{g.target===l&&u(!1)}),document.addEventListener("keydown",h),setTimeout(()=>i==null?void 0:i.focus(),50)})}function he(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Jn(e){return he(e).replace(/\n/g,"<br>")}const Yn="better-ess-tour-completed",Kt=typeof import.meta<"u"?"./":"/",Ci=Kt+"tutorial/speichern.png",Bi=Kt+"tutorial/download.png",Oi=Kt+"tutorial/zeitraum.png",Le=[{type:"modal",hero:!0,icon:"👋",title:"Willkommen bei Better ESS",text:"Diese App liest deinen <strong>Zeitnachweis</strong> und macht ihn auf einen Blick verständlich.<br><br>Sie <strong>warnt dich automatisch</strong> bei fehlenden Tagen, falschen Berufsschul-Stunden oder unrechtmäßigem Pausen-Abzug. Du kannst deine <strong>monatliche Fahrgelderstattungs-Excel</strong> auf Knopfdruck generieren und <strong>Korrektur-Mails an die Zeitwirtschaft</strong> mit einem Klick verschicken — Empfänger, Betreff und Text sind schon vorbefüllt."},{type:"modal",hero:!0,icon:"🔒",title:"Deine Daten bleiben bei dir",text:"Dein PDF geht <strong>nicht ins Internet</strong>.<br><br>Alles läuft lokal in deinem Browser — wie eine Notizen-App. Kein Upload, kein Server, kein Konto."},{type:"highlight",target:'a[href="#/daten"]',icon:"📂",title:"Hier startet alles",text:"Hier lädst du deinen Zeitnachweis hoch.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/daten"&&(window.location.hash="#/daten"),await st("#upload-zone",1500)}},{type:"download-modal",icon:"📥",title:'1. Im ESS auf „Zeitnachweis herunterladen" klicken',image:Bi,points:[{kind:"good",icon:"✓",text:"Den Button findest du unten rechts in der ESS-Zeitbuchungs-Ansicht."}]},{type:"download-modal",icon:"📅",title:'2. „Anderer Zeitraum" wählen — möglichst groß',image:Oi,points:[{kind:"good",icon:"✓",text:'Wähle <strong>„Anderer Zeitraum"</strong> und nimm einen möglichst großen Bereich (am besten Ausbildungsstart bis heute) — die App nutzt alle Daten für Saldo-Verlauf und Trends.'},{kind:"bad",icon:"✕",text:'Nicht „Aktuelle Woche" oder „Aktueller Monat" — dann fehlen Verlaufs-Daten.'}]},{type:"download-modal",icon:"💾",title:'3. Im PDF-Viewer auf „Speichern" — nicht „Drucken"',image:Ci,points:[{kind:"good",icon:"✓",text:"<strong>Speichern-Button</strong> (Disketten-Symbol oben rechts in der PDF-Toolbar) — speichert eine echte Text-PDF."},{kind:"bad",icon:"✕",text:'<strong>NICHT</strong> „Drucken → Microsoft Print to PDF" — dabei werden Texte als Pfade gerendert und sind nicht lesbar.'}]},{type:"highlight",target:"#upload-zone",icon:"📥",title:"Lade jetzt dein PDF hoch",text:"Zieh dein Zeitnachweis-PDF auf die Box (oder klick sie an). Erst nach dem Upload geht die Tour weiter.",placement:"top",waitForTarget:!0,waitForEvent:"better-ess:pdf-uploaded"},{type:"modal",icon:"✨",title:"Geschafft!",text:"Dein PDF ist eingelesen. Jetzt zeig ich dir die Funktionen — anhand deiner echten Daten.",onNext:async()=>{window.location.hash="#/",await st(".saldo-value",1500)}},{type:"highlight",target:".saldo-value",icon:"⚖️",title:"Dein aktueller Saldo",text:"Plus oder Minus auf einen Blick. Tagesaktuell.",placement:"right",waitForTarget:!0},{type:"highlight",target:"#saldo-chart",icon:"📈",title:"Saldo-Verlauf",text:"Hover über die Punkte für Details. Zeitraum oben rechts umschaltbar.",placement:"top",waitForTarget:!0},{type:"highlight",target:".tag-row .ist-display",icon:"⏱️",title:"Stunden direkt kopieren",text:"Klick auf <strong>H</strong> oder <strong>M</strong> — kopiert den Wert in deine Zwischenablage. Praktisch fürs IHK-Berichtsheft.",placement:"left",waitForTarget:!0},{type:"highlight",target:".alert",icon:"⚠️",title:"Auffälligkeiten",text:"Fehlende Tage, falsche BS-Stunden, Pausen-Abzug — alles automatisch erkannt.",placement:"left",optional:!0,waitForTarget:!0,timeoutMs:1200},{type:"highlight",target:'a[href="#/profil"]',icon:"👤",title:"Profil",text:"Über 18? Pausen-Regel und Mail-Empfänger anpassen.",placement:"right"},{type:"highlight",target:'a[href="#/fahrtgeld"]',icon:"🚌",title:"Fahrgelderstattung",text:"Hier generierst du deine monatliche Fahrgeld-Excel mit deinen erkannten Berufsschultagen.",placement:"right",autoClick:!0,onAfterClick:async()=>{window.location.hash!=="#/fahrtgeld"&&(window.location.hash="#/fahrtgeld"),await st("#fahrtgeld-dropzone, #btn-template-replace, .fahrtgeld-generate-card",2e3)}},{type:"highlight",target:"#fahrtgeld-dropzone, .fahrtgeld-generate-card",icon:"📥",title:"Vorlage einmalig hochladen",text:'Eine bestehende Fahrgeld-Excel hier hochladen — Name, Personalnummer, Haltestellen und Tagessatz werden automatisch ausgelesen. Tour wartet auf den Upload (oder oben auf „Überspringen", um die Tour zu beenden).',placement:"top",waitForTarget:!0,timeoutMs:2500,waitForEvent:"better-ess:fahrgeld-template-uploaded"},{type:"highlight",target:".btn-generate-big",icon:"✅",title:"Excel generieren",text:"Monat unten auswählen, dann hier klicken. Du bekommst eine fertig ausgefüllte Excel zum Download — mit deinen Berufsschultagen, Datum und Unterschrift.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"highlight",target:".btn-mail-big",icon:"✉️",title:"E-Mail an die Personalabteilung",text:"Öffnet Outlook mit fertig vorausgefülltem Empfänger, Betreff und Text. Excel-Anhang aus dem Download-Ordner musst du noch manuell dranhängen.",placement:"bottom",waitForTarget:!0,timeoutMs:1500,optional:!0},{type:"modal",icon:"🚀",title:"Bereit!",text:"Du kennst alle Funktionen. Tour erneut starten? Button am Ende der <strong>Daten</strong>-Seite."}],dn=Le.findIndex(e=>e.icon==="✨");let C=null,xe=null;function Xn(){C===null&&(It(),C={idx:0},ce())}function Wi(e){return e?!1:!localStorage.getItem(Yn)}function Vi(){localStorage.setItem(Yn,"1")}function Qn(){return C!==null}function It(){document.querySelectorAll(".tour-blur-frame, .tour-popover, .tour-pointer, .tour-highlight-border").forEach(e=>e.remove()),xe&&(xe(),xe=null),C=null}function at(e){const t=document.querySelector(".tour-blur-frame.full"),n=[document.querySelector('.tour-blur-frame[data-side="top"]'),document.querySelector('.tour-blur-frame[data-side="left"]'),document.querySelector('.tour-blur-frame[data-side="right"]'),document.querySelector('.tour-blur-frame[data-side="bottom"]')];if(!e){n.forEach(v=>{v&&(v.style.opacity="0")});let g=t;!g?(g=document.createElement("div"),g.className="tour-blur-frame full",document.body.appendChild(g)):g.style.opacity="1";const m=document.querySelector(".tour-highlight-border");m&&(m.style.opacity="0");return}t&&(t.style.opacity="0");const a=e.getBoundingClientRect(),s=8,r=Math.max(0,a.left-s),c=Math.max(0,a.top-s),d=a.width+s*2,l=a.height+s*2,i=window.innerWidth,o=window.innerHeight,u={top:{top:0,left:0,width:i,height:c},left:{top:c,left:0,width:r,height:l},right:{top:c,left:r+d,width:i-(r+d),height:l},bottom:{top:c+l,left:0,width:i,height:o-(c+l)}};for(const[g,p]of Object.entries(u)){let m=n[Object.keys(u).indexOf(g)];m||(m=document.createElement("div"),m.className="tour-blur-frame",m.dataset.side=g,document.body.appendChild(m)),m.style.top=p.top+"px",m.style.left=p.left+"px",m.style.width=Math.max(0,p.width)+"px",m.style.height=Math.max(0,p.height)+"px",m.style.opacity=p.width<=0||p.height<=0?"0":"1"}let h=document.querySelector(".tour-highlight-border");h||(h=document.createElement("div"),h.className="tour-highlight-border",document.body.appendChild(h)),h.style.top=c+"px",h.style.left=r+"px",h.style.width=d+"px",h.style.height=l+"px",h.style.opacity="1",h.style.display=""}function Ht(){let e=document.querySelector(".tour-pointer");return e||(e=document.createElement("div"),e.className="tour-pointer",e.innerHTML=`
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
      </svg>`,e.style.top=window.innerHeight/2+"px",e.style.left=window.innerWidth/2+"px",document.body.appendChild(e)),e}function Ni(e){const t=Ht(),n=e.getBoundingClientRect(),a=n.left+n.width*.5,s=n.top+n.height*.5;t.style.top=s-6+"px",t.style.left=a-9+"px"}function un(){var e;(e=document.querySelector(".tour-pointer"))==null||e.remove()}async function Ki(e){const t=Ht();t.classList.add("tour-pointer-clicking"),await new Promise(n=>setTimeout(n,280)),t.classList.remove("tour-pointer-clicking")}async function st(e,t=1500){const n=Date.now();for(;Date.now()-n<t;){const a=document.querySelector(e);if(a)return a;await new Promise(s=>setTimeout(s,100))}return null}async function ce(){var d,l,i;if(!C)return;const e=C.overrideStep||Le[C.idx];if(C.overrideStep=null,!e){At();return}if(xe&&(xe(),xe=null),e.type==="download-modal")return un(),at(null),Ii(e);let t=null;if(e.type==="highlight"){if(t=e.waitForTarget?await st(e.target,e.timeoutMs??1500):document.querySelector(e.target),!t&&e.fallback){const o=e.fallback;if(o.onBefore)try{await o.onBefore()}catch(u){console.warn("tour fallback onBefore error:",u)}return C.overrideStep=o,ce()}if(!t&&e.optional)return C.idx++,ce();if(!t&&e.waitForTarget&&!e.fallback)return console.warn("[tour] target not found, skipping:",e.target),C.idx++,ce();if(t){try{t.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch{}await new Promise(o=>setTimeout(o,250)),at(t),Ht(),requestAnimationFrame(()=>Ni(t))}else at(null)}else un(),at(null);let n=document.querySelector(".tour-popover");n||(n=document.createElement("div"),n.className="tour-popover",n.style.visibility="hidden",document.body.appendChild(n)),n.classList.remove("tour-popover-large","tour-popover-hero"),e.hero&&n.classList.add("tour-popover-hero"),t?n.classList.remove("center"):n.classList.add("center");const a=C.idx===0,s=C.idx===Le.length-1,r=!!e.waitForEvent,c=r?"⏳ Warte auf Upload …":s?"Fertig":"Weiter →";if(n.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${C.idx+1} / ${Le.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-popover-body">${e.text}</div>
    <div class="tour-popover-actions">
      <button class="btn tour-prev" type="button" ${a?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button" ${r?'disabled style="opacity:0.5;cursor:default"':""}>${c}</button>
    </div>`,t)n.style.opacity="0",requestAnimationFrame(()=>{Hi(n,t,e.placement||"right"),n.style.visibility="visible",n.style.opacity="1"});else{n.style.top=n.style.left=n.style.right=n.style.bottom="",n.style.opacity="0",n.style.visibility="visible";const o=document.querySelector(".tour-blur-frame.full");requestAnimationFrame(()=>{o&&(o.style.opacity="1"),n.style.opacity="1"})}if((d=n.querySelector(".tour-skip"))==null||d.addEventListener("click",()=>{At()}),a||(l=n.querySelector(".tour-prev"))==null||l.addEventListener("click",async()=>{C.idx=Math.max(0,C.idx-1),await ce()}),!r)(i=n.querySelector(".tour-next"))==null||i.addEventListener("click",async()=>{if(e.autoClick&&t){await Ki();try{const o=t.getAttribute("href");o&&o.startsWith("#/")?window.location.hash=o.slice(1):t.click()}catch(o){console.warn("tour autoClick error:",o)}if(e.onAfterClick)try{await e.onAfterClick()}catch(o){console.warn("tour onAfterClick error:",o)}else await new Promise(o=>setTimeout(o,350))}else if(e.onNext)try{await e.onNext()}catch(o){console.warn("tour onNext error:",o)}C.idx++,await ce()});else{const o=C.idx,u=o<dn,h=async()=>{It(),document.querySelectorAll(".upload-modal-overlay").forEach(g=>g.remove()),await new Promise(g=>setTimeout(g,300)),C={idx:u?dn:o+1},await ce()};document.addEventListener(e.waitForEvent,h,{once:!0}),xe=()=>document.removeEventListener(e.waitForEvent,h)}}function Ii(e){var a,s,r;let t=document.querySelector(".tour-popover");t||(t=document.createElement("div"),t.className="tour-popover",t.style.visibility="hidden",document.body.appendChild(t)),t.classList.add("tour-popover-large","center"),t.style.visibility="visible";const n=C.idx===0;C.idx,Le.length-1,t.innerHTML=`
    <div class="tour-popover-header">
      <span class="tour-popover-step">${C.idx+1} / ${Le.length}</span>
      <button class="tour-skip" type="button" aria-label="Tour beenden">Überspringen</button>
    </div>
    <div class="tour-popover-icon">${e.icon||""}</div>
    <h3>${e.title}</h3>
    <div class="tour-download-image-wrap">
      <img src="${e.image}" alt="Speichern-Button im PDF-Viewer">
    </div>
    <div class="tour-download-points">
      ${e.points.map(c=>`
        <div class="tour-download-point ${c.kind==="bad"?"bad":""}">
          <span class="tour-download-point-icon">${c.icon}</span>
          <span>${c.text}</span>
        </div>`).join("")}
    </div>
    <div class="tour-popover-actions" style="margin-top:14px;">
      <button class="btn tour-prev" type="button" ${n?'disabled style="opacity:0.4;cursor:default"':""}>← Zurück</button>
      <button class="btn primary tour-next" type="button">Verstanden, weiter →</button>
    </div>`,t.style.top=t.style.left=t.style.right=t.style.bottom="",t.style.opacity="1",(a=t.querySelector(".tour-skip"))==null||a.addEventListener("click",()=>{At()}),n||(s=t.querySelector(".tour-prev"))==null||s.addEventListener("click",async()=>{C.idx=Math.max(0,C.idx-1),await ce()}),(r=t.querySelector(".tour-next"))==null||r.addEventListener("click",async()=>{C.idx++,await ce()})}function Hi(e,t,n){const a=t.getBoundingClientRect(),s=16,r=e.offsetWidth||360,c=e.offsetHeight||220,d=window.innerWidth,l=window.innerHeight,i=[n,"right","bottom","left","top"];let o=null;for(const g of i)if((()=>{switch(g){case"right":return a.right+s+r<=d;case"left":return a.left-s-r>=0;case"bottom":return a.bottom+s+c<=l;case"top":return a.top-s-c>=0}})()){o=g;break}o=o||n;let u,h;switch(o){case"right":u=a.top+a.height/2-c/2,h=a.right+s;break;case"left":u=a.top+a.height/2-c/2,h=a.left-r-s;break;case"bottom":u=a.bottom+s,h=a.left+a.width/2-r/2;break;case"top":default:u=a.top-c-s,h=a.left+a.width/2-r/2;break}u=Math.max(s,Math.min(l-c-s,u)),h=Math.max(s,Math.min(d-r-s,h)),e.style.position="fixed",e.style.top=u+"px",e.style.left=h+"px",e.style.right="auto",e.style.bottom="auto",e.style.transform=""}function At(){It(),Vi()}async function Ri({root:e}){var c;const t=await In(),n=await le();e.innerHTML=`
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
            <img class="zoomable" src="./tutorial/speichern.png" alt="Speichern-Button im PDF-Viewer" title="Klick für Vollbild" style="width: 100%; max-width: 600px; border: 1px solid var(--border); border-radius: var(--radius-sm); display: block; cursor: zoom-in;" />
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
        ${t.length===0?'<div class="empty-state"><div class="empty-state-icon">📭</div><p>Noch keine Uploads</p></div>':ta(t)}
      </div>
    </div>

    <div class="card" style="margin-top: 24px; text-align: center; background: transparent; border-style: dashed;">
      <p style="color: var(--fg-muted); font-size: 13px; margin: 0 0 12px;">Brauchst du nochmal eine kurze Tour durch die App?</p>
      <button class="btn" id="btn-tour-restart" type="button">🎯 Tour erneut starten</button>
    </div>
  `;const a=e.querySelector("#upload-zone"),s=e.querySelector("#file-input");async function r(){return Qn()?!0:await Li("Je länger der Zeitraum deines Zeitnachweises, desto besser arbeitet die App: vor allem Berufsschul-Muster (besonders im 14-tägigen Rhythmus), Saldo-Verlauf und Pausen-Analysen werden genauer. Mit weniger Daten funktioniert die App auch — nur weniger umfangreich.","Mein Zeitnachweis PDF deckt einen möglichst langen Zeitraum ab.",{title:"Vor dem Upload",confirmLabel:"Datei auswählen",cancelLabel:"Abbrechen",icon:"info"})}a.addEventListener("click",async()=>{await r()&&s.click()}),a.addEventListener("dragover",d=>{d.preventDefault(),a.classList.add("drag")}),a.addEventListener("dragleave",()=>a.classList.remove("drag")),a.addEventListener("drop",async d=>{var o;d.preventDefault(),a.classList.remove("drag");const l=(o=d.dataTransfer.files)==null?void 0:o[0];!l||!await r()||await hn(l,e,n)}),s.addEventListener("change",async d=>{var i;const l=(i=d.target.files)==null?void 0:i[0];l&&await hn(l,e,n)}),e.querySelector("#btn-export").addEventListener("click",qi),e.querySelector("#btn-import").addEventListener("click",()=>e.querySelector("#import-input").click()),e.querySelector("#import-input").addEventListener("change",Gi),e.querySelector("#btn-clear-parsed").addEventListener("click",Zi),e.querySelector("#btn-reset").addEventListener("click",Ui),(c=e.querySelector("#btn-tour-restart"))==null||c.addEventListener("click",()=>Xn()),ji()}let gn=!1;function ji(){gn||(gn=!0,document.body.addEventListener("click",e=>{if(e.target.closest(".lightbox-overlay, .upload-modal-overlay"))return;const t=e.target.closest("img.zoomable");t&&ea(t.src,t.alt)}))}function ea(e,t){const n=document.createElement("div");n.className="lightbox-overlay",n.innerHTML=`
    <button class="lightbox-close" aria-label="Schließen" title="Schließen (Esc)">×</button>
    <img src="${e}" alt="${t||""}" />
  `,document.body.appendChild(n);const a=()=>{n.remove(),document.removeEventListener("keydown",s)},s=r=>{r.key==="Escape"&&a()};n.addEventListener("click",r=>{(r.target===n||r.target.classList.contains("lightbox-close"))&&a()}),document.addEventListener("keydown",s)}async function Zi(){await re("PDF-abgeleitete Daten (Tage, Monate, Uploads) werden gelöscht. Profil und Mail-Vorlagen bleiben erhalten.",{title:"PDF-Daten löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Hn(),W("Daten gelöscht. Profil bleibt."),setTimeout(()=>location.reload(),600))}function ta(e){return`
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
            <td>${S(Ji(t.hochladeDatum))}</td>
            <td>${S(t.dateiname||"—")}</td>
            <td>${t.zeitraumVon?S(V(new Date(t.zeitraumVon))):"—"} – ${t.zeitraumBis?S(V(new Date(t.zeitraumBis))):"—"}</td>
            <td>${t.stichtagAuswertung?S(V(new Date(t.stichtagAuswertung))):"—"}</td>
            <td class="num">${t.tageCount??"—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}async function hn(e,t,n){var r,c,d,l;const a=t.querySelector("#upload-status"),s=t.querySelector("#upload-zone");if(e.type!=="application/pdf"&&!/\.pdf$/i.test(e.name)){Ie({type:"error",title:"Falscher Dateityp",desc:`<strong>${S(e.name)}</strong> ist keine PDF-Datei.`,hint:"Lade eine PDF-Datei hoch — den Zeitnachweis aus dem ESS über den <strong>Speichern-Button</strong> (Disketten-Symbol oben rechts im PDF-Viewer)."});return}if(e.size>50*1024*1024){Ie({type:"error",title:"Datei zu groß",desc:`<strong>${S(e.name)}</strong> ist ${(e.size/1024/1024).toFixed(1)} MB groß.`,hint:"ESS-Zeitnachweise sind normalerweise unter 1 MB. Bitte überprüfe die Datei."});return}s.style.pointerEvents="none",s.style.opacity="0.6",a.innerHTML=`
    <div class="alert severity-info">
      <div class="loader-ring" style="width: 24px; height: 24px; border-width: 2px;"></div>
      <div class="alert-body">
        <div class="alert-title">PDF wird verarbeitet…</div>
        <p style="margin: 4px 0; font-size: 13px;"><strong>${S(e.name)}</strong> — das kann bei großen PDFs einige Sekunden dauern.</p>
      </div>
    </div>`;try{const i=await e.arrayBuffer(),o=await Si(i);if(o.tage.length===0&&!o.meta.zeitraumVon){s.style.pointerEvents="",s.style.opacity="",a.innerHTML="",Ie({type:"error",title:"Diese PDF ist nicht kompatibel",desc:'Im PDF wurden keine Texte gefunden. Das passiert, wenn das PDF über „Drucken → Als PDF speichern" (z.B. „Microsoft Print to PDF") erzeugt wurde — dabei werden Texte als Vektorpfade gerendert und können nicht ausgelesen werden.',hint:'Lade dein PDF direkt aus dem ESS über den <strong>Speichern-Button</strong> herunter (Disketten-Symbol oben rechts im PDF-Viewer) — nicht über „Drucken".',screenshot:!0,producer:(r=o.meta)==null?void 0:r.producer}),ct("PDF enthält keinen extrahierbaren Text.");return}const u=await Xe(),h=u==null?void 0:u.personalnummer,g=o.meta.personalnummer;if(h&&g&&h!==g){const $=(u==null?void 0:u.name)||`Personalnr. ${h}`,P=o.meta.name||`Personalnr. ${g}`;if(!await re(`Das hochgeladene PDF gehört zu einem anderen Azubi als die bisher gespeicherten Daten:

Bisher: ${$}
Jetzt:  ${P}

Wenn du fortfährst, werden alle alten Tagesdaten gelöscht und durch die neuen ersetzt. (Profil-Einstellungen wie Theme und Mail-Vorlagen bleiben erhalten.)`,{title:"Anderer Azubi erkannt",confirmLabel:"Daten ersetzen",variant:"danger"})){s.style.pointerEvents="",s.style.opacity="",a.innerHTML=`
          <div class="alert severity-info">
            <div class="alert-body">
              <div class="alert-title">Upload abgebrochen</div>
              <p style="margin: 4px 0; font-size: 13px;">Es wurden keine Daten verändert. Lade das richtige PDF (für ${S($)}) erneut hoch.</p>
            </div>
          </div>`;return}await Hn();const L=await le();await rt({...L,berufsschulMuster:{wochentageWoechentlich:[],wochentage14Taegig:[],referenzDatum14Taegig:null,stundenProTag:null,halbtags:!1}})}const p=await Ys(o.tage,o.monate,o.meta.stichtagAuswertung);(p.skippedTage>0||p.skippedMonate>0)&&console.info(`[upload] ${p.skippedTage} Tage und ${p.skippedMonate} Monate uebersprungen — bestehende Daten haben juengeren Stichtag.`),await Xs({dateiname:e.name,personalnummer:o.meta.personalnummer??null,name:o.meta.name??null,mitarbeiterkreis:o.meta.mitarbeiterkreis??null,zeitraumVon:((c=o.meta.zeitraumVon)==null?void 0:c.toISOString())??null,zeitraumBis:((d=o.meta.zeitraumBis)==null?void 0:d.toISOString())??null,stichtagAuswertung:((l=o.meta.stichtagAuswertung)==null?void 0:l.toISOString())??null,tageCount:o.tage.length,monateCount:o.monate.length}),o.meta.mitarbeiterkreis&&await Js(o.meta.mitarbeiterkreis);const m=await ue(),v=jn(m),f={...Kn(),...n};(v.wochentageWoechentlich.length>0||v.wochentage14Taegig.length>0)&&(f.berufsschulMuster=v),await rt(f),a.innerHTML="",Qn()||Ie({type:"success",title:"PDF erfolgreich eingelesen",desc:o.meta.zeitraumVon?`Zeitraum: ${V(o.meta.zeitraumVon)} – ${V(o.meta.zeitraumBis)}`:"Daten wurden erfolgreich verarbeitet.",stats:[{num:o.tage.length,label:"Tage"},{num:o.monate.length,label:"Monatsübersichten"}]}),W(`PDF verarbeitet: ${o.tage.length} Tage.`),document.dispatchEvent(new CustomEvent("better-ess:pdf-uploaded",{detail:{tageCount:o.tage.length,monateCount:o.monate.length}}));const w=await In();t.querySelector("#uploads-list").innerHTML=ta(w)}catch(i){console.error(i),a.innerHTML="",Ie({type:"error",title:"Fehler beim Parsen",desc:S(i.message||String(i)),hint:'Prüfe, ob es sich um einen ESS-Zeitnachweis im richtigen Format handelt. Lade dein PDF über den Speichern-Button herunter, nicht über „Drucken".',screenshot:!0}),ct("PDF konnte nicht gelesen werden.")}finally{s.style.pointerEvents="",s.style.opacity=""}}async function qi(){try{const e=await ti(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),a=document.createElement("a"),s=new Date().toISOString().slice(0,10);a.href=n,a.download=`zeitnachweis-backup-${s}.json`,a.click(),URL.revokeObjectURL(n),W("Backup heruntergeladen.")}catch(e){ct(`Export fehlgeschlagen: ${e.message}`)}}async function Gi(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const a=await t.text(),s=JSON.parse(a);if(!await re("Existierende Daten werden vom Backup überschrieben.",{title:"Backup importieren?",confirmLabel:"Importieren",variant:"danger"}))return;await ni(s),W("Backup erfolgreich importiert. Seite wird neu geladen…"),setTimeout(()=>location.reload(),800)}catch(a){ct(`Import fehlgeschlagen: ${a.message}`)}}async function Ui(){await re("Alle Daten (Tage, Monate, Profil, Vorlagen, Mail-Vorlagen, Fahrgeld-Vorlage) werden endgültig gelöscht. Das lässt sich nicht rückgängig machen.",{title:"ALLE Daten löschen?",confirmLabel:"Weiter zur Sicherheitsfrage",variant:"danger"})&&await re("Letzte Warnung — wirklich alle Daten löschen?",{title:"Sicher?",confirmLabel:"Endgültig löschen",variant:"danger"})&&(await ei(),W("Alle Daten gelöscht."),setTimeout(()=>location.reload(),600))}function Ji(e){if(!e)return"—";const t=new Date(e);return t.toLocaleDateString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit"})+" "+t.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})}function Ie(e){const{type:t,title:n,desc:a,hint:s,screenshot:r,stats:c,producer:d}=e,l=document.createElement("div");l.className="upload-modal-overlay";const i=`
    <svg class="upload-check-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-check-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-check-circle" cx="26" cy="26" r="24"/>
      <path class="upload-check-mark" d="M14 27 L22 35 L38 18"/>
    </svg>`,o=`
    <svg class="upload-cross-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle class="upload-cross-bg" cx="26" cy="26" r="24"/>
      <circle class="upload-cross-circle" cx="26" cy="26" r="24"/>
      <line class="upload-cross-line" x1="17" y1="17" x2="35" y2="35"/>
      <line class="upload-cross-line upload-cross-line-2" x1="35" y1="17" x2="17" y2="35"/>
    </svg>`,u=c!=null&&c.length?`
    <div class="upload-modal-stats">
      ${c.map(f=>`
        <div class="upload-modal-stat">
          <div class="upload-modal-stat-num">${S(String(f.num))}</div>
          <div class="upload-modal-stat-label">${S(f.label)}</div>
        </div>
      `).join("")}
    </div>`:"",h=r?`
    <img class="upload-modal-hint-img zoomable" src="./tutorial/speichern.png"
         alt="Speichern-Button im PDF-Viewer"
         title="Klick für Vollbild" />`:"",g=d?`<p style="font-size: 12px; color: var(--fg-subtle); margin-top: 12px;">Erkannt: Producer „${S(d)}"</p>`:"",p=t==="success"?`
      <a href="#/" class="btn primary">Zum Dashboard</a>
      <a href="#/kalender" class="btn">Kalender öffnen</a>
      <button class="btn upload-modal-close-btn">Schließen</button>`:`
      <button class="btn primary upload-modal-close-btn">Verstanden</button>`;l.innerHTML=`
    <div class="upload-modal" role="dialog" aria-modal="true">
      <div class="upload-modal-icon-wrap">
        ${t==="success"?i:o}
      </div>
      <h2 class="upload-modal-title">${S(n)}</h2>
      <p class="upload-modal-desc">${a}</p>
      ${u}
      ${s?`<p class="upload-modal-desc" style="background: var(--accent-bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">${s}</p>`:""}
      ${h}
      ${g}
      <div class="upload-modal-actions">${p}</div>
    </div>`,document.body.appendChild(l);const m=()=>{l.style.animation="upload-modal-fade 150ms ease-out reverse",setTimeout(()=>l.remove(),150),document.removeEventListener("keydown",v)},v=f=>{f.key==="Escape"&&m()};document.addEventListener("keydown",v),l.addEventListener("click",f=>{if(f.target===l){m();return}if(f.target.closest(".upload-modal-close-btn")){m();return}if(f.target.closest(".upload-modal-actions a, .upload-modal-actions button")){m();return}const w=f.target.closest("img.zoomable");w&&ea(w.src,w.alt)})}const fn={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag"};async function Yi({root:e}){var r,c,d,l,i;const[t,n]=await Promise.all([le(),ze()]),a=t.berufsschulMuster??{},s=(((r=a.wochentageWoechentlich)==null?void 0:r.length)??0)>0||(((c=a.wochentage14Taegig)==null?void 0:c.length)??0)>0;e.innerHTML=`
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
          <input type="email" name="zeitwirtschaftEmail" value="${mn(t.zeitwirtschaftEmail)}" />
        </div>
        <div class="form-group">
          <label>Anrede in Mails</label>
          <input type="text" name="zeitwirtschaftAnrede" value="${mn(t.zeitwirtschaftAnrede)}" placeholder="Frau Kanarya" />
        </div>
      </div>

      <div class="card${n?"":" hidden"}" style="grid-column: 1 / -1;${n?"":" display:none;"}">
        <h2>Berufsschul-Rhythmus <span style="font-size: 11px; font-weight: 500; color: var(--fg-subtle); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 8px;">Automatisch erkannt</span></h2>
        ${s?`
          <div class="tag-detail">
            <div class="tag-detail-label">Wöchentlich</div>
            <div class="tag-detail-value"><strong>${((d=a.wochentageWoechentlich)==null?void 0:d.map(o=>fn[o]).join(", "))||"—"}</strong></div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Alle 2 Wochen</div>
            <div class="tag-detail-value"><strong>${((l=a.wochentage14Taegig)==null?void 0:l.map(o=>fn[o]).join(", "))||"—"}</strong>${a.referenzDatum14Taegig?` <span class="hint">(Anker: ${V(new Date(a.referenzDatum14Taegig))})</span>`:""}</div>
          </div>
          <div class="tag-detail">
            <div class="tag-detail-label">Stunden pro Schultag</div>
            <div class="tag-detail-value">
              <strong>${a.stundenProTag!=null?a.stundenProTag.toFixed(2).replace(".",",")+"h":"—"}</strong>
              ${a.halbtags?' <span class="hint" style="color: var(--accent);">(Halbtags-Schule erkannt)</span>':""}
            </div>
          </div>
          <p class="hint" style="margin-top: 16px;">
            Das Muster wird bei jedem PDF-Upload neu aus den Daten abgeleitet. ${a.halbtags?'Da deine Schultage typischerweise weniger als 5h dauern, geht die App von Halbtags-Schule aus und meldet KEINE „BS-Stunden falsch"-Warnung, wenn dein Schultag nur '+(((i=a.stundenProTag)==null?void 0:i.toFixed(2).replace(".",","))??"4,00")+"h hat.":"Je länger der erfasste Zeitraum, desto präziser."}
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
  `,e.querySelector("#profil-form").addEventListener("submit",async o=>{var g,p;o.preventDefault();const u=new FormData(o.target),h={...t,ueber18:u.get("ueber18")==="on",zeitwirtschaftEmail:((g=u.get("zeitwirtschaftEmail"))==null?void 0:g.trim())||"Zeitwirtschaft.Aichtal@putzmeister.com",zeitwirtschaftAnrede:((p=u.get("zeitwirtschaftAnrede"))==null?void 0:p.trim())||"Frau Kanarya"};await rt(h),W("Profil gespeichert.")})}function mn(e){return String(e??"").replace(/"/g,"&quot;")}async function Xi({params:e,root:t}){var i,o,u,h;const n=e.datum,a=await y.tage.get(n),s=await le();if(!a){t.innerHTML=`<h1 class="view-title">Tag nicht gefunden</h1><p>Für ${n} liegen keine Daten vor.</p><a href="#/" class="btn">← Dashboard</a>`;return}const r=N(n),c=a.tagestyp==="Stempelzeit"?Tn(a,s):null,d=ht(r,s.berufsschulMuster),l=Pn(a.zeitSpannen);t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender/${n.slice(0,7)}" class="btn sm">← Zum Monat</a>
    </div>
    <h1 class="view-title">${_t(r)}</h1>
    <p class="view-subtitle">${a.tagestyp??"Kein Typ"} · KW ${(i=a.wocheKey)==null?void 0:i.split("-")[1]}</p>

    ${l?`
      <div class="card kommen-gehen-hero" style="margin-bottom: 24px;">
        <div class="hint" style="text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-bottom: 10px;">Tages-Rahmen</div>
        ${Rn(l,{size:32})}
      </div>
    `:""}

    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>Ist-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.ist!=null?a.ist.toFixed(2).replace(".",",")+"h":"—"}</div>
        <div class="hint">= ${a.ist!=null?Ze(a.ist):"—"}</div>
      </div>
      <div class="card">
        <h3>Soll-Stunden</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650;">${a.soll!=null?a.soll.toFixed(2).replace(".",",")+"h":"—"}</div>
      </div>
      <div class="card">
        <h3>Differenz</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${a.diff>.05?"var(--success)":a.diff<-.05?"var(--danger)":"var(--fg)"};">${a.diff!=null?fe(a.diff,{signed:!0}):"—"}</div>
      </div>
    </div>

    <div class="grid cols-2" style="gap: 24px;">
      <div class="card">
        <h2>Zeitstempel</h2>
        ${(o=a.zeitSpannen)!=null&&o.length?a.zeitSpannen.map(g=>`
              <div class="tag-detail">
                <div class="tag-detail-label">${He(g.aktivitaet??"Stempelzeit")}</div>
                <div class="tag-detail-value tabular">${g.von??"—"} – ${g.bis??"—"}</div>
              </div>
            `).join(""):'<p class="hint">Keine Stempelzeiten für diesen Tag.</p>'}
      </div>

      <div class="card">
        <h2>Klassifikation</h2>
        <div class="tag-detail">
          <div class="tag-detail-label">Tagestyp</div>
          <div class="tag-detail-value">${a.tagestyp?`<span class="pill ${Qi(a.tagestyp)}">${He(a.tagestyp)}</span>`:"—"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Laut Profil</div>
          <div class="tag-detail-value">${d?"🎓 Berufsschultag erwartet":"Regulärer Werktag"}</div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">TAZP-Code</div>
          <div class="tag-detail-value"><code>${He(a.tazp??"—")}</code></div>
        </div>
        <div class="tag-detail">
          <div class="tag-detail-label">Monat</div>
          <div class="tag-detail-value">${He(a.monatKey)}</div>
        </div>
      </div>

      ${c&&!c.keinAnspruch?c.altReglement?`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(u=c.arbeitszeitOhnePause)==null?void 0:u.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((c.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause (laut PDF)</div>
                <div class="tag-detail-value tabular">${Math.round((c.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
          </div>
          <p class="hint" style="margin-top: 12px;">Vor dem 01.04.2026 galt bei Putzmeister die alte Regelung: nicht ausstempeln zur Pause nötig — wenn man auf dem Gelände blieb, wurde automatisch 1h Pause abgezogen. Die App nimmt deshalb die Pause für diese Tage einfach aus dem PDF und prüft sie nicht gegen die gesetzliche Pflicht.</p>
        </div>
      `:`
        <div class="card" style="grid-column: 1 / -1;">
          <h2>Pausen-Analyse</h2>
          <div class="grid cols-2">
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Arbeitszeit (netto)</div>
                <div class="tag-detail-value tabular">${(h=c.arbeitszeitOhnePause)==null?void 0:h.toFixed(2).replace(".",",")}h</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gestempelte Pause</div>
                <div class="tag-detail-value tabular">${Math.round((c.gestempeltePause??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Abgezogene Pause</div>
                <div class="tag-detail-value tabular">${Math.round((c.abgezogenePause??0)*60)} min</div>
              </div>
            </div>
            <div>
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzl. Pflicht</div>
                <div class="tag-detail-value tabular">${Math.round((c.gesetzlichePflicht??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Angewendetes Gesetz</div>
                <div class="tag-detail-value">${c.gesetz==="jarbschg"?"JArbSchG §11 (Minderjährig)":"ArbZG §4 (Erwachsen)"}</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Legaler Abzug (Max aus gestempelt / Pflicht)</div>
                <div class="tag-detail-value tabular">${Math.round((c.legalerAbzug??0)*60)} min</div>
              </div>
              <div class="tag-detail">
                <div class="tag-detail-label">Unrechtmäßiger Pausen-Abzug</div>
                <div class="tag-detail-value tabular" style="color: ${(c.unrechtmaessigerVerlustMin??0)>0?"var(--danger)":"var(--fg)"};">${c.unrechtmaessigerVerlustMin??0} min</div>
              </div>
              ${c.aufstockungMin>0?`
              <div class="tag-detail">
                <div class="tag-detail-label">Gesetzliche Aufstockung</div>
                <div class="tag-detail-value tabular" style="color: var(--warn);">${c.aufstockungMin} min</div>
              </div>`:""}
            </div>
          </div>
          ${c.warnung?`
            <div class="alert severity-warn" style="margin-top: 12px;">
              <div class="alert-icon">⚠</div>
              <div class="alert-body">${He(c.warnung)}</div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function Qi(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function He(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const er=[{key:14,label:"2 Wochen"},{key:30,label:"1 Monat"},{key:90,label:"3 Monate"},{key:180,label:"6 Monate"},{key:365,label:"1 Jahr"},{key:730,label:"2 Jahre"},{key:"alles",label:"Alles"}];function tr(e){return er.filter(t=>t.key==="alles"||t.key<e)}async function nr({root:e}){var c;const[t,n]=await Promise.all([ue(),ut()]);if(!t.length){e.innerHTML='<h1 class="view-title">Analytics</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const a=tr(t.length);let s=a.some(d=>d.key===30)?30:"alles";e.innerHTML=`
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
          ${a.map(d=>`<button type="button" data-key="${d.key}" class="${s===d.key?"active":""}">${d.label}</button>`).join("")}
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
  `;const r=()=>s==="alles"?t:t.slice(-s);requestAnimationFrame(()=>{Ps(e.querySelector("#c-saldo"),n),_s(e.querySelector("#c-wochen"),t),Qt(e.querySelector("#c-startend"),r()),Fs(e.querySelector("#c-wochentag"),t),Ts(e.querySelector("#c-pausen"),t),Ls(e.querySelector("#c-donut"),t),Es(e.querySelector("#c-alle-tage"),t.slice(-30))}),(c=e.querySelector("#startend-zeitraum"))==null||c.addEventListener("click",d=>{const l=d.target.closest("button[data-key]");if(!l||l.disabled)return;const i=l.getAttribute("data-key"),o=i==="alles"?"alles":parseInt(i,10);o!==s&&(s=o,e.querySelectorAll("#startend-zeitraum button").forEach(u=>u.classList.toggle("active",u===l)),Qt(e.querySelector("#c-startend"),r()))})}function ar(e){return String(e??"").replace(/"/g,"&quot;")}async function kt({params:e,root:t}){const[n,a,s,r,c,d]=await Promise.all([ue(),ut(),le(),Xe(),gt(),ze()]),l=Object.fromEntries(c.map(b=>[b.key,b]));if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const i=[...new Set(n.map(b=>b.monatKey))].sort(),o=e.yyyymm,u=i.includes(o)?o:i[i.length-1],h=n.filter(b=>b.monatKey===u),g=[...new Set(h.map(b=>b.wocheKey))].sort(),p=e.yyyykw,m=g.includes(p)?p:null,v=i.indexOf(u),f=v>0?i[v-1]:null,w=v<i.length-1?i[v+1]:null,$=Pt(u),P=a.find(b=>b.monatKey===u),k=Fn(n,a),L=k.filter(b=>b.monatKey===u),H=r!=null&&r.stichtagAuswertung?new Date(r.stichtagAuswertung):new Date,z=ft(n,s,H,void 0,{isAzubi:d}),F=z.filter(b=>b.datum.startsWith(u)),x=rr({aktiverMonatKey:u,monatLabel:$,prevMonatKey:f,nextMonatKey:w,tageAnzahl:h.length,warnungenAnzahl:F.length});m?await ir({root:t,switcherHtml:x,aktiverMonatKey:u,aktiveWocheKey:m,vollKurve:k,alleWarnungen:z,profil:s,vorlagenOverrides:l}):await sr({root:t,switcherHtml:x,monatLabel:$,tageMonat:h,monatsKurve:L,monatUebersicht:P,monatsWarnungen:F,aktiverMonatKey:u,profil:s,vorlagenOverrides:l})}async function sr({root:e,switcherHtml:t,monatLabel:n,tageMonat:a,monatsKurve:s,monatUebersicht:r,monatsWarnungen:c,aktiverMonatKey:d,profil:l,vorlagenOverrides:i}){e.innerHTML=`
    ${t}

    ${r?lr(r):""}

    <div class="card" style="margin-bottom: 24px;">
      <h2>Saldo-Verlauf</h2>
      <div class="chart-wrap tall"><canvas id="chart-kalender-monat"></canvas></div>
    </div>

    ${c.length?`
      <div class="card" style="margin-bottom: 24px;">
        <h2>Auffälligkeiten</h2>
        ${c.map(o=>na(o,l,i)).join("")}
      </div>
    `:""}

    <div class="card" style="margin-bottom: 24px;">
      <h2 style="margin-bottom: 16px;">Wochen</h2>
      ${or(s,d)}
    </div>

    <div class="card">
      <div class="card-split" style="margin-bottom: 16px;">
        <h2>Tage</h2>
        <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
      </div>
      <div id="tage-liste-kalender">${mt(s.slice().reverse(),{warnungen:c})}</div>
    </div>
  `,s.length&&(requestAnimationFrame(()=>{const o=e.querySelector("#chart-kalender-monat");o&&Bt(o,s)}),Nt(e.querySelector("#tage-liste-kalender")))}async function ir({root:e,switcherHtml:t,aktiverMonatKey:n,aktiveWocheKey:a,vollKurve:s,alleWarnungen:r,profil:c,vorlagenOverrides:d}){var f;const l=s.filter(w=>w.wocheKey===a),i=l.reduce((w,$)=>w+dt($),0),o=l.reduce((w,$)=>w+Lt($),0),u=+(i-o).toFixed(2),h=w=>w>.05?"var(--success)":w<-.05?"var(--danger)":"var(--fg)",g=r.filter(w=>l.some($=>$.datum===w.datum)),p=(f=l[0])==null?void 0:f.datum,m=p?Ye(N(p)):"",v=a.split("-")[1]||"?";e.innerHTML=`
    ${t}

    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
      <a href="#/kalender/${n}" class="btn sm">← Zur Monatsansicht</a>
    </div>

    <h2 style="margin: 0 0 4px;">KW ${S(v)}</h2>
    <p class="view-subtitle">${S(m)} · ${l.length} Tage · ${g.length} Auffälligkeiten</p>

    ${l.length===0?`
      <p class="hint" style="text-align: center; padding: 32px;">Keine Tage für diese Woche im PDF.</p>
    `:`
      <div class="grid cols-3" style="margin-bottom: 24px;">
        <div class="card">
          <h3>Ist-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${i.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Soll-Stunden</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650;">${o.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="card">
          <h3>Differenz</h3>
          <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${h(u)};">${fe(u,{signed:!0})}</div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h2>Saldo-Verlauf in dieser Woche</h2>
        <div class="chart-wrap"><canvas id="chart-kalender-woche"></canvas></div>
      </div>

      ${g.length?`
        <div class="card" style="margin-bottom: 24px;">
          <h2>Auffälligkeiten in KW ${S(v)}</h2>
          ${g.map(w=>na(w,c,d)).join("")}
        </div>
      `:""}

      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tage-liste-kalender">${mt(l,{warnungen:g})}</div>
      </div>
    `}
  `,l.length&&(requestAnimationFrame(()=>{const w=e.querySelector("#chart-kalender-woche");w&&Bt(w,l)}),Nt(e.querySelector("#tage-liste-kalender")))}function rr({aktiverMonatKey:e,monatLabel:t,prevMonatKey:n,nextMonatKey:a,tageAnzahl:s,warnungenAnzahl:r}){const c=n?Pt(n):"",d=a?Pt(a):"";return`
    <div class="card kalender-monat-bar" style="margin-bottom: 24px;">
      <div class="kalender-monat-nav">
        <a class="kalender-monat-btn ${n?"":"is-disabled"}"
           ${n?`href="#/kalender/${n}"`:'aria-disabled="true"'}
           title="${n?"Zu "+S(c):"Kein vorheriger Monat"}"
           aria-label="Vorheriger Monat">
          <span class="kalender-monat-btn-arrow" aria-hidden="true">‹</span>
          <span class="kalender-monat-btn-text">${n?S(c):""}</span>
        </a>
        <div class="kalender-monat-titel">
          <h2 style="margin: 0;">${S(t)}</h2>
          <div class="hint">${s} Tage · ${r} Auffälligkeiten</div>
        </div>
        <a class="kalender-monat-btn next ${a?"":"is-disabled"}"
           ${a?`href="#/kalender/${a}"`:'aria-disabled="true"'}
           title="${a?"Zu "+S(d):"Kein nächster Monat"}"
           aria-label="Nächster Monat">
          <span class="kalender-monat-btn-text">${a?S(d):""}</span>
          <span class="kalender-monat-btn-arrow" aria-hidden="true">›</span>
        </a>
      </div>
    </div>`}function lr(e){var r,c,d;const t=((r=e.glz)==null?void 0:r.saldoGesamt)??0,n=((c=e.glz)==null?void 0:c.saldoVorperiode)??0,a=((d=e.glz)==null?void 0:d.saldoAktuellePeriode)??0,s=l=>l>.05?"var(--success)":l<-.05?"var(--danger)":"var(--fg)";return`
    <div class="grid cols-3" style="margin-bottom: 24px;">
      <div class="card">
        <h3>GLZ-Saldo gesamt</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(t)};">${fe(t,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Vorperiode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(n)};">${fe(n,{signed:!0})}</div>
      </div>
      <div class="card">
        <h3>Akt. Periode</h3>
        <div class="tabular" style="font-size: 28px; font-weight: 650; color: ${s(a)};">${fe(a,{signed:!0})}</div>
      </div>
    </div>`}function or(e,t){var s;const n={};for(const r of e)n[s=r.wocheKey]??(n[s]={key:r.wocheKey,tage:[],ist:0,soll:0}),n[r.wocheKey].tage.push(r),n[r.wocheKey].ist+=dt(r),n[r.wocheKey].soll+=Lt(r);const a=Object.keys(n).sort();return a.length?a.map(r=>{var h;const c=n[r],d=+(c.ist-c.soll).toFixed(2),l=d>.05?"var(--success)":d<-.05?"var(--danger)":"var(--fg-muted)",i=(h=c.tage.slice().sort((g,p)=>g.datum.localeCompare(p.datum))[0])==null?void 0:h.datum,o=i?Ye(N(i)):"",u=r.split("-")[1]||"?";return`
      <a href="#/kalender/${t}/${r}" class="list-item" style="text-decoration: none; color: inherit;">
        <div class="tabular" style="font-size: 16px; font-weight: 600; color: var(--fg-muted); min-width: 80px;">KW ${S(u)}</div>
        <div>
          <div class="list-item-title tabular">${S(o)}</div>
          <div class="list-item-sub">${c.tage.length} Tage · Ist ${c.ist.toFixed(2).replace(".",",")}h · Soll ${c.soll.toFixed(2).replace(".",",")}h</div>
        </div>
        <div class="tabular" style="font-weight: 600; font-size: 16px; color: ${l};">${fe(d,{signed:!0})}</div>
        <div style="color: var(--fg-subtle);">→</div>
      </a>`}).join(""):'<p style="color: var(--fg-muted);">Keine Wochen.</p>'}function na(e,t,n){const a=e.schweregrad==="error"?"!":e.schweregrad==="warn"?"⚠":"i";let s=null;if(e.mailVorlageKey&&t){const r=Qe(e.mailVorlageKey,n==null?void 0:n[e.mailVorlageKey]);if(r){const c=Wt(t,e);s=Vt(t,r,c)}}return`
    <div class="alert severity-${e.schweregrad}">
      <div class="alert-icon">${a}</div>
      <div class="alert-body">
        <div class="alert-title">${S(e.titel)}</div>
        <p style="margin: 4px 0; font-size: 13px;">${S(e.beschreibung)}</p>
        <div class="alert-actions">
          ${s?`<a href="${ar(s)}" class="btn-mail-medium"><img src="outlook-logo.png" alt="" class="outlook-logo-medium" />E-Mail</a>`:""}
          ${e.datum&&e.datum.length===10?`<a href="#/tag/${e.datum}" class="btn sm">Tag ansehen</a>`:""}
        </div>
      </div>
    </div>`}function Pt(e){const[t,n]=e.split("-"),a=new Date(parseInt(t,10),parseInt(n,10)-1,1);return _(a,"MMMM yyyy",{locale:ne})}const cr={MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"};async function xt({params:e,root:t}){const[n,a,s,r]=await Promise.all([ue(),le(),Xe(),ze()]),c=dr(e);if(!n.length){t.innerHTML=`
      <h1 class="view-title">Kalender · ${S(c.label)}</h1>
      <p class="view-subtitle">Noch keine Daten geladen.</p>
      <a href="#/daten" class="btn primary">Zum Upload</a>`;return}const d=n.filter(c.predicate).sort((g,p)=>g.datum.localeCompare(p.datum)),l=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,o=ft(n,a,l,void 0,{isAzubi:r}).filter(g=>d.some(p=>p.datum===g.datum)),u=d.reduce((g,p)=>g+(p.ist??0),0),h=u>0?` · ${u.toFixed(2).replace(".",",")}h kumuliert`:"";t.innerHTML=`
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
      <a href="#/kalender" class="btn sm">← Kalender</a>
    </div>
    <h1 class="view-title">${S(c.titel)}</h1>
    <p class="view-subtitle">${d.length} Tag${d.length===1?"":"e"} insgesamt${h}</p>

    ${d.length===0?`
      <div class="card"><p class="hint">Keine Tage passen zu diesem Filter.</p></div>
    `:`
      <div class="card">
        <div class="card-split" style="margin-bottom: 16px;">
          <h2>Tage</h2>
          <span style="color: var(--fg-muted); font-size: 13px;">H/M zum Kopieren</span>
        </div>
        <div id="tagestyp-tage-liste">${mt(d,{warnungen:o})}</div>
      </div>
    `}
  `,Nt(t.querySelector("#tagestyp-tage-liste"))}function dr(e){if(e.typ!=null){const t=decodeURIComponent(e.typ);return{label:t,titel:`${t}-Tage`,predicate:n=>n.tagestyp===t}}if(e.wd!=null){const t=decodeURIComponent(e.wd).toUpperCase(),n=cr[t]||t;return{label:n,titel:`Tage am ${n}`,predicate:a=>a.wochentag===t}}if(e.bucket!=null){const t=parseInt(decodeURIComponent(e.bucket),10),n=t+14;return{label:`${t}–${n} min Pause`,titel:`Tage mit Pause ${t}–${n} min`,predicate:a=>{if(a.tagestyp!=="Stempelzeit"||!a.zeitSpannen||a.zeitSpannen.length<2)return!1;const s=Math.round(Ft(a.zeitSpannen)*60);return s>=t&&s<=n}}}return{label:"Filter",titel:"Tage (kein Filter)",predicate:()=>!0}}zn.workerSrc=Un;function ur(e){if(!e||e.byteLength<5)return!1;const t=new Uint8Array(e,0,5);return t[0]===37&&t[1]===80&&t[2]===68&&t[3]===70&&t[4]===45}async function aa(e){var k,L,H,z,F,x;let t;try{t=await Dn({data:new Uint8Array(e.slice(0))}).promise}catch{return{ok:!1,fehler:"PDF konnte nicht gelesen werden — die Datei ist beschädigt oder verschlüsselt."}}if(t.numPages<1)return{ok:!1,fehler:"PDF hat keine Seiten."};const n=await t.getPage(1),s=(await n.getAnnotations()).filter(b=>b.subtype==="Widget");if(s.length<20)return{ok:!1,fehler:"Diese PDF ist kein ausfüllbares Formular — bitte die Original-Putzmeister-Vorlage hochladen."};const d=(await n.getTextContent()).items.filter(b=>b.str&&b.transform).map(b=>({text:b.str,x:b.transform[4],y:b.transform[5],width:b.width,height:b.height})).filter(b=>Math.abs(b.y-636)<4);let l="";for(const b of d){const E=b.text.match(/(\d{6,8})/);if(E&&!b.text.toLowerCase().includes("kst")){l=E[1];break}}const i=gr(s),o=Ee(i.monatJahr),h=(Ee(i.persNr).match(/\d+/)||[""])[0],g=Ee(i.name).trim(),p=$t(i.vonSlots),m=$t(i.nachSlots),v=$t(i.betragSlots),f=hr(v),w=Ee(i.auszubildender).trim(),$=w.replace(/^\s*\d{1,2}\.\d{1,2}\.\d{2,4}\s*/,"").trim(),P=[];return g||P.push("name"),h||P.push("persNr"),l||P.push("kst"),p||P.push("vonHaltestelle"),m||P.push("nachHaltestelle"),(!f||f<=0)&&P.push("betragProTag"),!g&&!h&&!p&&!m&&!f?{ok:!1,fehler:"Diese PDF ist eine komplett leere Vorlage — bitte zuerst eine eigene Vorlage einmal von Hand mit Name, Pers.-Nr., Strecke und Tagessatz ausfüllen und dann hochladen."}:{ok:!0,konstanten:{name:g,persNr:h,kst:l,vonHaltestelle:p,nachHaltestelle:m,betragProTag:f,unterschriftText:$},layout:{monatJahrField:((k=i.monatJahr)==null?void 0:k.fieldName)||null,persNrField:((L=i.persNr)==null?void 0:L.fieldName)||null,nameField:((H=i.name)==null?void 0:H.fieldName)||null,auszubildenderField:((z=i.auszubildender)==null?void 0:z.fieldName)||null,summeField:((F=i.summe)==null?void 0:F.fieldName)||null,datumFields:i.datumSlots.map(b=>b.fieldName),vonFields:i.vonSlots.map(b=>b.fieldName),nachFields:i.nachSlots.map(b=>b.fieldName),betragFields:i.betragSlots.map(b=>b.fieldName),auszubildenderRect:((x=i.auszubildender)==null?void 0:x.rect)||null},vorhandeneEintraege:{monatJahr:o,auszubildenderText:w,anzahlBefuellteDatumZeilen:i.datumSlots.filter(b=>Ee(b)).length},missing:P,quelle:"pdf"}}function gr(e){const t=e.map(g=>{const[p,m,v,f]=g.rect;return{fieldName:g.fieldName,fieldValue:g.fieldValue??"",rect:[p,m,v,f],x:(p+v)/2,y:(m+f)/2,width:v-p,height:f-m}}),n=t.find(g=>g.y>660&&g.x<250)||null,a=t.find(g=>g.y>660&&g.x>400)||null,s=t.find(g=>g.y>630&&g.y<660&&g.x<250)||null,r=t.filter(g=>g.y>370&&g.y<580),c=(g,p)=>p.y-g.y,d=r.filter(g=>g.x>0&&g.x<140).sort(c),l=r.filter(g=>g.x>140&&g.x<290).sort(c),i=r.filter(g=>g.x>290&&g.x<460).sort(c),o=r.filter(g=>g.x>460).sort(c),u=t.find(g=>g.y<370&&g.y>320&&g.x>460)||null,h=t.find(g=>g.y<340&&g.y>310&&g.x<200)||null;return{monatJahr:n,persNr:a,name:s,datumSlots:d,vonSlots:l,nachSlots:i,betragSlots:o,summe:u,auszubildender:h}}function Ee(e){return e?String(e.fieldValue??"").trim():""}function $t(e){for(const t of e){const n=Ee(t);if(n)return n}return""}function hr(e){if(!e)return 0;const t=String(e).replace(/[^\d,.\-]/g,"").replace(/\./g,"").replace(",","."),n=parseFloat(t);return Number.isFinite(n)?n:0}const sa="Fahrgelderstattung",fr="C4",ia="C5",ra="F4",la="F5",$e=10,Pe=19;function pn(e,t){return e.filter(n=>n.monatKey===t).filter(n=>n.tagestyp==="Berufsschule").filter(n=>(n.ist??0)>0).sort((n,a)=>n.datum.localeCompare(a.datum))}async function mr(e){if(ur(e)){const t=await aa(e);return t.ok?{ok:!0,format:"pdf",konstanten:t.konstanten,layout:t.layout,missing:t.missing,vorhandeneEintraege:t.vorhandeneEintraege,unterschriftAuto:null}:t}return await pr(e)}async function pr(e){const t=(await de(async()=>{const{default:v}=await import("./exceljs.min-BhfpbegZ.js").then(f=>f.e);return{default:v}},__vite__mapDeps([0,1]),import.meta.url)).default,n=new t.Workbook;try{await n.xlsx.load(e)}catch{return{ok:!1,fehler:"Die Excel-Datei ist beschädigt oder kein gültiges .xlsx-Format. Bitte die Datei neu speichern und nochmal versuchen."}}const a=n.getWorksheet(sa)??n.worksheets[0];if(!a)return{ok:!1,fehler:"Excel hat keine Arbeitsblätter — die Datei scheint leer zu sein."};const s=v=>{const f=a.getCell(v).value;return f==null?"":typeof f=="object"&&f.text?String(f.text):typeof f=="object"&&f.richText?f.richText.map(w=>w.text).join(""):String(f)},r=s(ia).trim(),c=s(ra).trim(),d=s(la).trim(),l=(c.match(/\d+/)||[""])[0],i=(d.match(/\d+/)||[""])[0],o=s(`C${$e}`).trim(),u=s(`E${$e}`).trim(),h=a.getCell(`G${$e}`).value,g=typeof h=="number"?h:parseFloat(String(h).replace(",","."))||0;let p=null;try{const v=new Set(a.getImages().map(w=>parseInt(w.imageId,10))),f=(n.media||[]).map((w,$)=>({media:w,index:$})).filter(({media:w,index:$})=>(w==null?void 0:w.type)==="image"&&!v.has($)&&w.buffer);if(f.length>0){f.sort((k,L)=>(L.media.buffer.length||0)-(k.media.buffer.length||0));const w=f[0].media,$=w.buffer,P=$ instanceof ArrayBuffer?$:$.buffer?$.buffer.slice($.byteOffset||0,($.byteOffset||0)+$.byteLength):null;if(P){const k=(w.extension||"").toLowerCase();p={bytes:P,extension:k==="jpg"?"jpeg":k||"png",quelle:"auto-aus-vorlage"}}}}catch(v){console.warn("[fahrtgeld] Unterschrift-Auto-Extraktion fehlgeschlagen:",v)}if(!r&&!l&&!i&&!o&&!u&&!g)return{ok:!1,fehler:"Diese Excel scheint nicht im Format der Putzmeister-Fahrgelderstattung zu sein — keine der erwarteten Felder wurde gefunden. Bitte eine Original-Vorlage hochladen."};const m=[];return r||m.push("name"),l||m.push("persNr"),i||m.push("kst"),o||m.push("vonHaltestelle"),u||m.push("nachHaltestelle"),(!g||g<=0)&&m.push("betragProTag"),{ok:!0,format:"excel",konstanten:{name:r,persNr:l,kst:i,vonHaltestelle:o,nachHaltestelle:u,betragProTag:g},missing:m,unterschriftAuto:p}}async function br({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,unterschriftBytes:s,unterschriftExtension:r}){const c=!e;e||(e=await vr());const d=(await de(async()=>{const{default:x}=await import("./exceljs.min-BhfpbegZ.js").then(b=>b.e);return{default:x}},__vite__mapDeps([0,1]),import.meta.url)).default,l=new d.Workbook;try{await l.xlsx.load(e)}catch{throw new Error("Die hinterlegte Excel-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const i=l.getWorksheet(sa)??l.worksheets[0];if(!i)throw new Error("Die Excel-Vorlage hat kein passendes Arbeitsblatt — bitte eine Original-Fahrgelderstattung-Vorlage hochladen.");if(c||s&&r)try{Array.isArray(i._media)&&(i._media=i._media.filter(x=>{var E,B,K,I;return(((B=(E=x==null?void 0:x.range)==null?void 0:E.tl)==null?void 0:B.nativeRow)??((I=(K=x==null?void 0:x.range)==null?void 0:K.tl)==null?void 0:I.row)??0)<18}))}catch(x){console.warn("[fahrtgeld] Bild-Cleanup fehlgeschlagen:",x)}const[u,h]=t.split("-").map(x=>parseInt(x,10)),g=new Date(u,h-1,1,12,0,0),p=_(g,"MMMM yy",{locale:ne}),m=i.getCell(fr);m.value=p,m.numFmt="@",i.getCell(ia).value=a.name,i.getCell(ra).value=`Pers.-Nr.: ${a.persNr}`,i.getCell(la).value=`KST: ${a.kst}`;for(let x=$e;x<=Pe;x++)i.getCell(`A${x}`).value=null,i.getCell(`C${x}`).value=null,i.getCell(`E${x}`).value=null,i.getCell(`G${x}`).value=null;const v=Pe-$e+1,f=n.slice(0,v);for(let x=0;x<f.length;x++){const b=f[x],E=$e+x;i.getCell(`A${E}`).value=N(b.datum),i.getCell(`C${E}`).value=a.vonHaltestelle,i.getCell(`E${E}`).value=a.nachHaltestelle,i.getCell(`G${E}`).value=a.betragProTag}const w=+(f.length*(a.betragProTag??0)).toFixed(2),$=i.getCell(`G${Pe+1}`);$.value={formula:`SUM(G${$e}:G${Pe})`,result:w};const k=_(new Date,"dd.MM.yyyy"),L=i.getCell("A21");if(L.value=a.unterschriftText?`${k} ${a.unterschriftText}`:k,L.alignment={vertical:"bottom",horizontal:"center",wrapText:!1},s&&r){const x=l.addImage({buffer:s,extension:r}),b=197,E=80,B=55,K=185,I=Mr(s);let G=K,oe=B;if(I&&I.width>0&&I.height>0){const we=Math.min(K/I.width,B/I.height);G=Math.round(I.width*we),oe=Math.round(I.height*we)}const ye=Math.max(0,Math.round((b-G)/2))/E;i.addImage(x,{tl:{col:ye,row:20.04},ext:{width:G,height:oe},editAs:"oneCell"})}for(let x=Pe+3;x<=Pe+5;x++)for(const b of["A","B","C","D","E","F","G"]){const E=i.getCell(`${b}${x}`),B=E.value;typeof B=="string"&&/^[A-Z]\d+(-\d+)?$/.test(B.trim())&&(E.value=null)}const H=await l.xlsx.writeBuffer(),z=new Blob([H],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),F=oa(a.name,g);return{blob:z,dateiname:F,anzahlTage:f.length,ueberzaehlig:n.length-f.length}}function oa(e,t,n="xlsx"){const a=_(t,"MMMM",{locale:ne}),s=_(t,"yy");let r=(e||"Azubi").trim();const c=/^(.+?),\s*(.+)$/.exec(r);return c&&(r=`${c[2].trim()} ${c[1].trim()}`),`Fahrgelderstattung ${r} ${a} ${s}.${n}`}let St=null;async function vr(){return St||(St=(async()=>{const t=await fetch("./templates/fahrgeld-vorlage.xlsx");if(!t.ok)throw new Error(`Standard-Excel-Vorlage nicht ladbar (HTTP ${t.status})`);return await t.arrayBuffer()})()),St}let Mt=null;async function yr(){return Mt||(Mt=(async()=>{const t=await fetch("./templates/fahrgeld-vorlage.pdf");if(!t.ok)throw new Error(`Standard-PDF-Vorlage nicht ladbar (HTTP ${t.status})`);const n=await t.arrayBuffer(),s=(await aa(n)).layout||await wr(n);return{bytes:n,layout:s}})()),Mt}async function wr(e){const r=(await(await(await(await de(()=>import("./pdfjs-BnPRJEQ6.js"),[],import.meta.url)).getDocument({data:new Uint8Array(e.slice(0))}).promise).getPage(1)).getAnnotations()).filter(f=>f.subtype==="Widget").map(f=>{const[w,$,P,k]=f.rect;return{fieldName:f.fieldName,rect:f.rect,x:(w+P)/2,y:($+k)/2}}),c=(f,w)=>w.y-f.y,d=r.filter(f=>f.y>370&&f.y<580),l=r.find(f=>f.y>660&&f.x<250),i=r.find(f=>f.y>660&&f.x>400),o=r.find(f=>f.y>630&&f.y<660&&f.x<250),u=d.filter(f=>f.x<140).sort(c),h=d.filter(f=>f.x>140&&f.x<290).sort(c),g=d.filter(f=>f.x>290&&f.x<460).sort(c),p=d.filter(f=>f.x>460).sort(c),m=r.find(f=>f.y<370&&f.y>320&&f.x>460),v=r.find(f=>f.y<340&&f.y>310&&f.x<200);return{monatJahrField:(l==null?void 0:l.fieldName)||null,persNrField:(i==null?void 0:i.fieldName)||null,nameField:(o==null?void 0:o.fieldName)||null,auszubildenderField:(v==null?void 0:v.fieldName)||null,summeField:(m==null?void 0:m.fieldName)||null,datumFields:u.map(f=>f.fieldName),vonFields:h.map(f=>f.fieldName),nachFields:g.map(f=>f.fieldName),betragFields:p.map(f=>f.fieldName),auszubildenderRect:(v==null?void 0:v.rect)||null}}async function kr({templateBytes:e,monatKey:t,bsTage:n,konstanten:a,layout:s,unterschriftBytes:r,unterschriftExtension:c}){if(!e||!s){const b=await yr();e=e||b.bytes,s=s||b.layout}const{PDFDocument:d}=await de(async()=>{const{PDFDocument:b}=await import("./index-Bf057_RE.js");return{PDFDocument:b}},__vite__mapDeps([2,1]),import.meta.url);let l;try{l=await d.load(e,{ignoreEncryption:!0})}catch{throw new Error("Die hinterlegte PDF-Vorlage ist beschädigt — bitte unter Fahrgelderstattung neu hochladen.")}const i=l.getForm(),[o,u]=t.split("-").map(b=>parseInt(b,10)),h=new Date(o,u-1,1,12,0,0),g=_(h,"MMMM yy",{locale:ne});J(i,s.monatJahrField,g),a.name&&J(i,s.nameField,a.name),a.persNr&&J(i,s.persNrField,a.persNr);const p=s.datumFields||[],m=s.vonFields||[],v=s.nachFields||[],f=s.betragFields||[],w=Math.min(p.length,m.length,v.length,f.length);for(let b=0;b<w;b++)J(i,p[b],""),J(i,m[b],""),J(i,v[b],""),J(i,f[b],"");const $=n.slice(0,w),P=a.betragProTag!=null&&a.betragProTag>0?a.betragProTag.toFixed(2).replace(".",","):"";for(let b=0;b<$.length;b++){const E=$[b];J(i,p[b],xr(E.datum)),a.vonHaltestelle&&J(i,m[b],a.vonHaltestelle),a.nachHaltestelle&&J(i,v[b],a.nachHaltestelle),P&&J(i,f[b],P)}const k=+($.length*(a.betragProTag??0)).toFixed(2);J(i,s.summeField,k.toFixed(2).replace(".",","));const L=_(new Date,"dd.MM.yyyy"),H=a.unterschriftText?`${L} ${a.unterschriftText}`:L;J(i,s.auszubildenderField,H);try{const{PDFName:b}=await de(async()=>{const{PDFName:K}=await import("./index-Bf057_RE.js");return{PDFName:K}},__vite__mapDeps([2,1]),import.meta.url),B=l.getPage(0).node.Annots();if(B)for(let K=B.size()-1;K>=0;K--){const I=B.get(K),G=l.context.lookup(I);if(G&&typeof G.lookup=="function"){const oe=G.lookup(b.of("Subtype"));oe&&String(oe)==="/StrikeOut"&&B.remove(K)}}}catch(b){console.warn("[fahrtgeld] StrikeOut-Cleanup fehlgeschlagen:",b)}try{const{rgb:b}=await de(async()=>{const{rgb:B}=await import("./index-Bf057_RE.js");return{rgb:B}},__vite__mapDeps([2,1]),import.meta.url);l.getPage(0).drawRectangle({x:16,y:286,width:60,height:16,color:b(1,1,1),borderWidth:0})}catch(b){console.warn("[fahrtgeld] Form-Code-Overlay fehlgeschlagen:",b)}if(r&&s.auszubildenderRect)try{const E=(c||"png").toLowerCase()==="png"?await l.embedPng(r):await l.embedJpg(r),[B,K,I,G]=s.auszubildenderRect,oe=I-B,et=G-K,ye=B,we=I,Ce=G+1,tt=Math.min(G+30,366),Be=we-ye,De=Math.max(0,tt-Ce);if(De>4&&E.width>0&&E.height>0){const M=Math.min(Be*.92/E.width,De*.92/E.height),A=E.width*M,T=E.height*M,U=ye+(Be-A)/2,D=Ce+(De-T)/2;l.getPage(0).drawImage(E,{x:U,y:D,width:A,height:T})}}catch(b){console.warn("[fahrtgeld] Unterschrift-Embed fehlgeschlagen:",b)}try{i.updateFieldAppearances()}catch(b){console.warn("[fahrtgeld] updateFieldAppearances fehlgeschlagen:",b)}const z=await l.save(),F=new Blob([z],{type:"application/pdf"}),x=oa(a.name,h,"pdf");return{blob:F,dateiname:x,anzahlTage:$.length,ueberzaehlig:n.length-$.length}}function J(e,t,n){if(t)try{e.getTextField(t).setText(n??"")}catch{}}function xr(e){return _(N(e),"dd.MM.yyyy")}function it(e){const[t,n]=e.split("-").map(a=>parseInt(a,10));return _(new Date(t,n-1,1),"MMMM yyyy",{locale:ne})}function bn(e,t=null){const a={monat_jahr:it(e)},s=(t==null?void 0:t.betreff)??"Fahrgelderstattung {monat_jahr}",r=(t==null?void 0:t.text)??`Guten Tag Frau Mayer,

hiermit sende ich Ihnen das ausgefüllte Dokument für die Fahrgelderstattung vom {monat_jahr} zu.
Vielen Dank!`,c=vn(s,a),d=vn(r,a),l=new URLSearchParams;return l.set("cc","anika.kailer@putzmeister.com"),l.set("subject",c),l.set("body",d),`mailto:annika.mayer@putzmeister.com?${l.toString().replace(/\+/g,"%20")}`}function vn(e,t){return e.replace(/\{(\w+)\}/g,(n,a)=>t[a]!=null?String(t[a]):`{${a}}`)}function $r(e){const t=new Set;for(const n of e)n.tagestyp==="Berufsschule"&&(n.ist??0)>0&&t.add(n.monatKey);return[...t].sort().reverse()}function Sr(e,t,n,a){var h,g;const s=t==null?void 0:t.berufsschulMuster;if(!s||!((h=s.wochentageWoechentlich)!=null&&h.length)&&!((g=s.wochentage14Taegig)!=null&&g.length))return{ausstehend:[],imMonatGesamt:n.length,vorhandenAnzahl:n.length};const[r,c]=e.split("-").map(p=>parseInt(p,10)),d=new Date(r,c-1,1),l=new Date(r,c,0),i=new Set(n.map(p=>p.datum)),o=[];let u=new Date(d);for(;u<=l;){if(!Je(u)&&ht(u,s)){const p=_(u,"yyyy-MM-dd");u>a&&!i.has(p)&&o.push(p)}u=Ue(u,1)}return{ausstehend:o,imMonatGesamt:n.length+o.length,vorhandenAnzahl:n.length}}function Mr(e){const t=e instanceof ArrayBuffer?e:e!=null&&e.buffer?e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength):null;if(!t||t.byteLength<24)return null;const n=new DataView(t);if(n.getUint32(0)===2303741511&&n.getUint32(4)===218765834)return{width:n.getUint32(16),height:n.getUint32(20)};if(n.getUint16(0)===65496){let a=2;for(;a+9<n.byteLength;){if(n.getUint8(a)!==255)return null;const s=n.getUint8(a+1);if(s>=192&&s<=207&&s!==196&&s!==200&&s!==204)return{height:n.getUint16(a+5),width:n.getUint16(a+7)};const c=n.getUint16(a+2);if(c<2)return null;a+=2+c}}return null}function zr(e,t){if(!e||!t)return null;const n=a=>String(a).toLowerCase().replace(/[,.]/g," ").split(/\s+/).filter(Boolean).sort().join(" ");return n(e)===n(t)}function yn(e,t){const n={...e||{}},a={},s=(p,m)=>{m?a[p]="vorlage":n[p]?a[p]="zeitnachweis":a[p]="fehlt"},r=(t==null?void 0:t.name)||"",c=(t==null?void 0:t.personalnummer)||"",d=(t==null?void 0:t.kostenstelle)||"",l=n.name||"",o=zr(l,r)===!1,u=!!n.name;!n.name&&r&&(n.name=r),s("name",u);const h=!!n.persNr;!n.persNr&&c&&!o&&(n.persNr=c),s("persNr",h);const g=!!n.kst;return!n.kst&&d&&!o&&(n.kst=d),s("kst",g),a.vonHaltestelle=n.vonHaltestelle?"vorlage":"fehlt",a.nachHaltestelle=n.nachHaltestelle?"vorlage":"fehlt",a.betragProTag=n.betragProTag&&n.betragProTag>0?"vorlage":"fehlt",{konstanten:n,herkunft:a,nameKonflikt:o,vorlagenName:l,zeitnachweisName:r}}function Dr(e,t){const n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function Ge({root:e}){var G,oe,et,ye,we,Ce,tt,Be,De;const t=await Re();if(!t){Ar(e);return}const[n,a,s,r]=await Promise.all([ue(),le(),Xe(),ai("fahrgeld_abgabe")]),c=s!=null&&s.stichtagAuswertung?new Date(s.stichtagAuswertung):new Date,d=$r(n),l=new Date,i=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`;d.includes(i)||d.unshift(i);const o=d,u=t.format||"excel",h=u==="pdf"?"PDF":"Excel",g={name:"Name",persNr:"Personalnummer",kst:"Kostenstelle",vonHaltestelle:'Strecke „von"',nachHaltestelle:'Strecke „nach"',betragProTag:"Tagessatz"},p=yn(t.konstanten,s),m=p.konstanten,v=p.herkunft,f=p.nameKonflikt,$=Object.entries(v).filter(([M,A])=>A==="fehlt").map(([M])=>M).map(M=>g[M]||M),P=Object.entries(v).filter(([M,A])=>A==="zeitnachweis").map(([M])=>g[M]||M),k=(M,A)=>M?v[A]==="zeitnachweis"?`<span class="fahrtgeld-aus-zeitnachweis" title="Aus deinem Zeitnachweis-PDF übernommen — die Vorlage hatte hier nichts stehen.">${S(M)} <small>(aus Zeitnachweis)</small></span>`:S(M):`<span class="fahrtgeld-fehlend" title="In der hochgeladenen Vorlage nicht gefunden — bitte vor Abgabe ergänzen.">${S(g[A]||A)} fehlt</span>`,L=(M,A)=>k(M,A);e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere die monatliche Fahrgelderstattung mit deinen erkannten Berufsschultagen.</p>

    <div class="card fahrtgeld-template-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0; display: flex; align-items: center; gap: 8px;">
            Vorlage geladen
            <span class="fahrtgeld-format-badge ${u==="pdf"?"is-pdf":"is-excel"}">${h}</span>
          </h3>
          <p class="hint" style="margin: 4px 0 0;">
            ${L(m.name,"name")} ·
            Pers.-Nr. ${L(m.persNr,"persNr")} ·
            KST ${L(m.kst,"kst")}
          </p>
          <p class="hint" style="margin: 4px 0 0;">
            ${L(m.vonHaltestelle,"vonHaltestelle")} → ${L(m.nachHaltestelle,"nachHaltestelle")} ·
            ${(m.betragProTag??0)>0?`${m.betragProTag.toFixed(2).replace(".",",")} € pro Tag`:'<span class="fahrtgeld-fehlend">Tagessatz fehlt</span>'}
          </p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn sm" id="btn-template-replace">Vorlage ersetzen</button>
          <button class="btn sm" id="btn-template-clear">Vorlage löschen</button>
        </div>
      </div>
      ${f?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ Name-Konflikt — Personalnummer wird NICHT automatisch übernommen:</strong>
          <p class="hint" style="margin: 6px 0 0;">
            Die Vorlage ist auf <strong>${S(p.vorlagenName)}</strong> ausgestellt, dein Zeitnachweis aber auf <strong>${S(p.zeitnachweisName)}</strong>.
            Damit keine fremden Daten auf deine Fahrgelderstattung kommen, ergänzt die App weder Personalnummer noch Kostenstelle aus dem Zeitnachweis.
            Bitte trage diese Felder vor der Abgabe handschriftlich nach oder lade einen passenden Zeitnachweis hoch.
          </p>
        </div>
      `:""}
      ${P.length>0?`
        <div class="fahrtgeld-info-box" style="margin-top: 12px;">
          <strong>ℹ️ ${P.length} Feld${P.length===1?"":"er"} aus deinem Zeitnachweis ergänzt:</strong>
          ${P.map(M=>`<span class="fahrtgeld-info-chip">${S(M)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">Diese Werte fehlten in deiner Vorlage — die App hat sie automatisch aus dem hochgeladenen Zeitnachweis-PDF übernommen (Name-Abgleich erfolgreich).</p>
        </div>
      `:""}
      ${$.length>0?`
        <div class="fahrtgeld-warning-box" style="margin-top: 12px;">
          <strong>⚠ ${$.length} Feld${$.length===1?"":"er"} fehlt${$.length===1?"":"en"} weiterhin:</strong>
          ${$.map(M=>`<span class="fahrtgeld-warning-chip">${S(M)}</span>`).join(" ")}
          <p class="hint" style="margin: 6px 0 0;">${u==="pdf"?"Diese Felder bleiben in der generierten PDF leer — du kannst sie im PDF-Reader oder handschriftlich ergänzen, bevor du sie abgibst.":"Diese Felder bleiben in der generierten Excel leer — bitte vor Abgabe ergänzen."}</p>
        </div>
      `:""}
    </div>

    <div class="card fahrtgeld-signature-info" style="margin-bottom: 24px;">
      <div class="card-split">
        <div>
          <h3 style="margin: 0;">Unterschrift</h3>
          ${(G=t.unterschrift)!=null&&G.dataUrl?`
            <p class="hint" style="margin: 4px 0 8px;">Wird in jede${u==="pdf"?" generierte PDF":" generierte Excel"} als Auszubildender-Unterschrift eingefügt. Datum (Tag der Generierung) wird automatisch gesetzt.</p>
            <div class="fahrtgeld-signature-preview">
              <img src="${S(t.unterschrift.dataUrl)}" alt="Unterschrift" />
            </div>
          `:`
            <p class="hint" style="margin: 4px 0 0;">Noch keine Unterschrift hinterlegt. Aktuell bleibt das Feld in der ${u==="pdf"?"PDF":"Excel"} leer (nur das Datum wird gesetzt).</p>
          `}
        </div>
        <div style="display: flex; gap: 8px; align-items: flex-start;">
          <button class="btn sm" id="btn-signature-upload">${(oe=t.unterschrift)!=null&&oe.dataUrl?"Ersetzen":"Hochladen"}</button>
          ${(et=t.unterschrift)!=null&&et.dataUrl?'<button class="btn sm" id="btn-signature-clear">Entfernen</button>':""}
        </div>
      </div>
    </div>

    ${o.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h2>Keine Berufsschultage erkannt</h2>
        <p>Lade einen Zeitnachweis unter <a href="#/daten">Daten</a> hoch — danach erscheinen hier die Monate.</p>
      </div>
    `:(()=>{var U;const M=o.map((D,ae)=>{const R=pn(n,D),ee=+(R.length*(t.konstanten.betragProTag??0)).toFixed(2),Ae=R.length>10,ke=Sr(D,a,R,c),Y=ke.ausstehend.length,j=+((R.length+Y)*(t.konstanten.betragProTag??0)).toFixed(2),pt=Y>0?ke.ausstehend.map(Oe=>V(N(Oe))).join(", "):"";return{mk:D,bs:R,summe:ee,ueberzaehlig:Ae,offen:Y,offenListe:pt,summeMitOffen:j,idx:ae}}),A=((U=M.find(D=>D.bs.length>0))==null?void 0:U.mk)??M[0].mk,T=M.find(D=>D.mk===A)??M[0];return`
          <div class="card fahrtgeld-generate-card">
            <div class="fahrtgeld-generate-buttons">
              <span class="fahrtgeld-step-label fahrtgeld-step-label-files">1. Datei erstellen</span>
              <div class="fahrtgeld-step-buttons fahrtgeld-step-buttons-files">
                <button class="btn-generate-big" id="btn-fahrtgeld-generate-excel" data-format="excel" ${T.bs.length===0?"disabled":""}>
                  <img src="excel-logo.png" alt="" class="excel-logo-big" />
                  <span class="btn-generate-label">Excel</span>
                </button>
                <span class="fahrtgeld-step-or">oder</span>
                <button class="btn-generate-big" id="btn-fahrtgeld-generate-pdf" data-format="pdf" ${T.bs.length===0?"disabled":""}>
                  <img src="pdf-logo.png" alt="" class="excel-logo-big" />
                  <span class="btn-generate-label">PDF</span>
                </button>
              </div>
              <div class="fahrtgeld-step-arrow" aria-hidden="true">
                <span class="fahrtgeld-step-arrow-shape">→</span>
              </div>
              <span class="fahrtgeld-step-label fahrtgeld-step-label-mail">2. E-Mail öffnen</span>
              <div class="fahrtgeld-step-buttons fahrtgeld-step-buttons-mail">
                <a class="btn-mail-big" id="btn-fahrtgeld-mail" href="${S(bn(T.mk,r))}" target="_blank" rel="noopener" ${T.bs.length===0?'aria-disabled="true"':""}>
                  <img src="outlook-logo.png" alt="" class="outlook-logo-big" />
                  <span>E-Mail</span>
                </a>
              </div>
            </div>
            <div class="fahrtgeld-generate-info" id="fahrtgeld-generate-info">
              <div class="fahrtgeld-generate-monat">${S(it(T.mk))}</div>
              <div class="hint" id="fahrtgeld-generate-detail">
                ${T.bs.length} BS-Tag${T.bs.length===1?"":"e"} erfasst · ${T.summe.toFixed(2).replace(".",",")} €
                ${T.offen>0?`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${T.offen} BS-Tag${T.offen===1?"":"e"}: ${S(T.offenListe)} (mit allen: ${T.summeMitOffen.toFixed(2).replace(".",",")} €)</span>`:""}
                ${T.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${T.bs.length-10} überzählig (max 10/Monat)</span>`:""}
              </div>
              <div class="hint" style="margin-top: 6px; font-size: 12px;">⚠ Mail-Anhang muss manuell aus dem Download-Ordner gezogen werden — Browser können keine Anhänge automatisch hinzufügen.</div>
            </div>
          </div>

          <div class="card">
            <h2>Monat auswählen</h2>
            <p class="hint" style="margin-bottom: 16px;">Pro Monat zählen nur Berufsschul-Tage, an denen du nachweislich anwesend warst. Krank, Urlaub und Stempelzeit-Tage werden ausgefiltert.</p>
            <div class="fahrtgeld-monate">
              ${M.map(D=>{const ae=D.mk===A?"checked":"",R=`data-monat="${S(D.mk)}" data-offen="${D.offen}" data-offen-liste="${S(D.offenListe)}" data-anzahl="${D.bs.length}" data-summe="${D.summe.toFixed(2).replace(".",",")}" data-summe-mit-offen="${D.summeMitOffen.toFixed(2).replace(".",",")}" data-monat-label="${S(it(D.mk))}" data-ueberzaehlig="${D.ueberzaehlig?"1":"0"}"`;return`
                  <label class="fahrtgeld-monat-row${D.offen>0?" has-pending":""}${D.bs.length===0?" empty":""}" ${R}>
                    <input type="radio" name="fg-monat-sel" value="${S(D.mk)}" ${ae} ${D.bs.length===0?"disabled":""} class="fahrtgeld-monat-radio" />
                    <div class="fahrtgeld-monat-titel">
                      <div class="fahrtgeld-monat-name">${S(it(D.mk))}</div>
                      <div class="hint">
                        ${D.bs.length} BS-Tag${D.bs.length===1?"":"e"} erfasst · ${D.summe.toFixed(2).replace(".",",")} €
                        ${D.offen>0?`<br><span class="fahrtgeld-pending">⏳ noch ${D.offen} BS-Tag${D.offen===1?"":"e"} laut Rhythmus</span>`:""}
                        ${D.ueberzaehlig?`<br><span style="color: var(--warn); font-weight: 600;">· ${D.bs.length-10} überzählig</span>`:""}
                      </div>
                    </div>
                  </label>
                `}).join("")}
            </div>
          </div>
        `})()}

    <input type="file" id="fahrtgeld-replace-input" accept=".xlsx,.xls,.xlsm,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf" style="display: none;" />
    <input type="file" id="fahrtgeld-signature-input" accept="image/png,image/jpeg,.png,.jpg,.jpeg" style="display: none;" />
  `,(ye=e.querySelector("#btn-template-replace"))==null||ye.addEventListener("click",()=>{e.querySelector("#fahrtgeld-replace-input").click()}),(we=e.querySelector("#fahrtgeld-replace-input"))==null||we.addEventListener("change",async M=>{var T;const A=(T=M.target.files)==null?void 0:T[0];A&&await Et(A,e)}),(Ce=e.querySelector("#btn-template-clear"))==null||Ce.addEventListener("click",async()=>{await re("Beim nächsten Öffnen wirst du gebeten, eine neue Vorlage hochzuladen.",{title:"Vorlage löschen?",confirmLabel:"Löschen",variant:"danger"})&&(await Qs(),W("Vorlage gelöscht."),Ge({root:e}))}),(tt=e.querySelector("#btn-signature-upload"))==null||tt.addEventListener("click",()=>{e.querySelector("#fahrtgeld-signature-input").click()}),(Be=e.querySelector("#fahrtgeld-signature-input"))==null||Be.addEventListener("change",async M=>{var T;const A=(T=M.target.files)==null?void 0:T[0];A&&await Pr(A,e)}),(De=e.querySelector("#btn-signature-clear"))==null||De.addEventListener("click",async()=>{if(!await re("Die hochgeladene Unterschrift wird entfernt — generierte Excel haben dann keine Unterschrift mehr.",{title:"Unterschrift entfernen?",confirmLabel:"Entfernen",variant:"danger"}))return;const M=await Re();M&&(await Ot({...M,unterschrift:null}),W("Unterschrift entfernt."),Ge({root:e}))});const H=e.querySelector("#btn-fahrtgeld-generate-excel"),z=e.querySelector("#btn-fahrtgeld-generate-pdf"),F=[H,z].filter(Boolean),x=e.querySelector("#btn-fahrtgeld-mail"),b=e.querySelector(".fahrtgeld-generate-monat"),E=e.querySelector("#fahrtgeld-generate-detail"),B=e.querySelectorAll(".fahrtgeld-monat-radio");function K(){const M=e.querySelector(".fahrtgeld-monat-radio:checked");if(!M)return;const A=M.closest(".fahrtgeld-monat-row");if(!A)return;const T=M.value,U=parseInt(A.getAttribute("data-anzahl")||"0",10),D=A.getAttribute("data-summe")||"0,00",ae=parseInt(A.getAttribute("data-offen")||"0",10),R=A.getAttribute("data-offen-liste")||"",ee=A.getAttribute("data-summe-mit-offen")||D,Ae=A.getAttribute("data-monat-label")||"",ke=A.getAttribute("data-ueberzaehlig")==="1";if(b&&(b.textContent=Ae),E){const Y=[`${U} BS-Tag${U===1?"":"e"} erfasst · ${D} €`];ae>0&&Y.push(`<br><span class="fahrtgeld-pending">⏳ Laut Schul-Rhythmus kommen noch ${ae} BS-Tag${ae===1?"":"e"}: ${S(R)} (mit allen: ${ee} €)</span>`),ke&&Y.push(`<br><span style="color: var(--warn); font-weight: 600;">· ${U-10} überzählig (max 10/Monat)</span>`),E.innerHTML=Y.join("")}F.forEach(Y=>{Y.disabled=U===0}),x&&(x.href=bn(T,r),U===0?x.setAttribute("aria-disabled","true"):x.removeAttribute("aria-disabled"))}B.forEach(M=>M.addEventListener("change",K));async function I(M){var ke,Y;const A=e.querySelector(".fahrtgeld-monat-radio:checked");if(!A){X("Bitte einen Monat auswählen.",{type:"warn"});return}const T=A.closest(".fahrtgeld-monat-row"),U=A.value,D=parseInt((T==null?void 0:T.getAttribute("data-offen"))||"0",10),ae=(T==null?void 0:T.getAttribute("data-offen-liste"))||"";if(D>0&&!await re(`Laut deinem Schul-Rhythmus kommen in diesem Monat noch ${D} BS-Tag${D===1?"":"e"}:

${ae}

Diese Tage sind noch nicht im Zeitnachweis-PDF und werden in der ${M==="pdf"?"PDF":"Excel"} fehlen. Trotzdem jetzt für die bisher erfassten Tage generieren?`,{title:"Noch ausstehende BS-Tage",confirmLabel:"Trotzdem generieren"}))return;const R=M==="pdf"?z:H;R&&(R.disabled=!0);const ee=R==null?void 0:R.querySelector(".btn-generate-label"),Ae=ee==null?void 0:ee.textContent;ee&&(ee.textContent="Erstelle …");try{const j=await Re(),pt=await ue(),Oe=pn(pt,U);if(!Oe.length){X("Für diesen Monat sind keine BS-Anwesenheits-Tage erkannt.",{type:"warn"});return}const Rt=(ke=j.unterschrift)==null?void 0:ke.bytes,jt=(Y=j.unterschrift)==null?void 0:Y.extension,Zt=j.format||"excel",bt=Zt===M,qt=bt?j.bytes:null,ua=bt&&M==="pdf"?j.layout:null,Gt=yn(j.konstanten,s).konstanten,{blob:ga,dateiname:Ut,ueberzaehlig:vt}=M==="pdf"?await kr({templateBytes:qt,layout:ua,monatKey:U,bsTage:Oe,konstanten:Gt,unterschriftBytes:Rt,unterschriftExtension:jt}):await br({templateBytes:qt,monatKey:U,bsTage:Oe,konstanten:Gt,unterschriftBytes:Rt,unterschriftExtension:jt});Dr(ga,Ut);const Jt=M==="pdf"?"PDF":"Excel",ha=Array.isArray(j.missing)&&j.missing.length>0?` — bitte ${j.missing.length} fehlendes Feld${j.missing.length===1?"":"er"} vor Abgabe ergänzen`:"",fa=bt?"":` (aus deiner ${Zt==="pdf"?"PDF-":"Excel-"}Vorlage in ${Jt} überführt)`;W(`${Jt} erstellt: ${Ut}${vt>0?` (${vt} weiterer Tag${vt===1?"":"e"} passte/n nicht in die Vorlage)`:""}${fa}${ha}`)}catch(j){console.error("Fahrtgeld-Generierung fehlgeschlagen:",j),X(`Fehler: ${j.message||j}`,{type:"error",duration:8e3})}finally{R&&(R.disabled=!1),ee&&Ae&&(ee.textContent=Ae)}}H==null||H.addEventListener("click",()=>I("excel")),z==null||z.addEventListener("click",()=>I("pdf"))}function Ar(e){e.innerHTML=`
    <h1 class="view-title">Fahrgelderstattung</h1>
    <p class="view-subtitle">Generiere deine monatlichen Fahrgelderstattungs-Formulare auf Knopfdruck.</p>

    <div class="card fahrtgeld-empty">
      <div class="fahrtgeld-dropzone" id="fahrtgeld-dropzone" tabindex="0" role="button" aria-label="Fahrgeld-Vorlage hochladen">
        <div class="fahrtgeld-empty-icons">
          <img src="excel-logo.png" alt="" class="fahrtgeld-empty-icon-img" />
          <span class="fahrtgeld-empty-or">oder</span>
          <img src="pdf-logo.png" alt="" class="fahrtgeld-empty-icon-img" />
        </div>
        <h2>Bestehende Fahrgelderstattung als Vorlage hochladen</h2>
        <p class="hint">Excel oder PDF hierher ziehen oder klicken zum Auswählen</p>
      </div>
      <input type="file" id="fahrtgeld-upload-input" accept=".xlsx,.xls,.xlsm,.pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf" style="display: none;" />
    </div>
  `;const t=e.querySelector("#fahrtgeld-dropzone"),n=e.querySelector("#fahrtgeld-upload-input");t==null||t.addEventListener("click",()=>n.click()),t==null||t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())}),n==null||n.addEventListener("change",async a=>{var r;const s=(r=a.target.files)==null?void 0:r[0];s&&await Et(s,e)}),["dragenter","dragover"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.add("is-dragover")})}),["dragleave","drop"].forEach(a=>{t==null||t.addEventListener(a,s=>{s.preventDefault(),s.stopPropagation(),t.classList.remove("is-dragover")})}),t==null||t.addEventListener("drop",async a=>{var r,c;const s=(c=(r=a.dataTransfer)==null?void 0:r.files)==null?void 0:c[0];s&&await Et(s,e)})}async function Pr(e,t){try{if(!["image/png","image/jpeg"].includes(e.type)&&!/\.(png|jpe?g)$/i.test(e.name)){X("Bitte ein PNG oder JPG hochladen.",{type:"warn"});return}if(e.size>2*1024*1024){X(`Die Bilddatei ist zu groß (${(e.size/1024/1024).toFixed(1)} MB). Maximal 2 MB — bitte komprimiert oder kleiner hochladen.`,{type:"warn",duration:8e3});return}const a=await e.arrayBuffer(),s=/\.png$/i.test(e.name)||e.type==="image/png"?"png":"jpeg",r=await new Promise((d,l)=>{const i=new FileReader;i.onload=()=>d(i.result),i.onerror=l,i.readAsDataURL(e)}),c=await Re();if(!c){X("Bitte zuerst eine Excel-Vorlage hochladen.",{type:"warn"});return}await Ot({...c,unterschrift:{bytes:a,extension:s,dataUrl:r,hochgeladenAm:new Date().toISOString()}}),W("Unterschrift gespeichert."),Ge({root:t})}catch(n){console.error("Unterschrift-Upload fehlgeschlagen:",n),X(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}async function Et(e,t){try{const n=await e.arrayBuffer(),a=await mr(n);if(!a.ok){X(`Vorlage nicht erkannt: ${a.fehler}`,{type:"error",duration:8e3});return}const s=await Re();let r=s==null?void 0:s.unterschrift;if(!r&&a.unterschriftAuto){const l=Er(a.unterschriftAuto.bytes,a.unterschriftAuto.extension);r={bytes:a.unterschriftAuto.bytes,extension:a.unterschriftAuto.extension,dataUrl:l,quelle:"auto-aus-vorlage",hochgeladenAm:new Date().toISOString()}}await Ot({bytes:n,konstanten:a.konstanten,format:a.format||"excel",layout:a.layout||null,missing:a.missing||[],vorhandeneEintraege:a.vorhandeneEintraege||null,unterschrift:r,hochgeladenAm:new Date().toISOString(),dateiname:e.name});const c=a.format==="pdf"?"PDF-Vorlage":"Excel-Vorlage",d=a.missing&&a.missing.length>0?` · ${a.missing.length} Feld${a.missing.length===1?"":"er"} fehlte${a.missing.length===1?"":"n"}`:"";a.unterschriftAuto&&!(s!=null&&s.unterschrift)?W(`${c} gespeichert: ${a.konstanten.name||e.name} (Unterschrift aus Vorlage übernommen)${d}`):W(`${c} gespeichert: ${a.konstanten.name||e.name}${d}`),document.dispatchEvent(new CustomEvent("better-ess:fahrgeld-template-uploaded")),Ge({root:t})}catch(n){console.error("Vorlage-Upload fehlgeschlagen:",n),X(`Fehler beim Verarbeiten: ${n.message||n}`,{type:"error",duration:8e3})}}function Er(e,t){const n=new Uint8Array(e);let a="";for(let c=0;c<n.length;c++)a+=String.fromCharCode(n[c]);const s=btoa(a);return`data:${t==="png"?"image/png":"image/jpeg"};base64,${s}`}async function Tr({root:e}){const t=await ue();if(!t.length){e.innerHTML='<h1 class="view-title">Berichtsheft</h1><p class="view-subtitle">Keine Daten.</p><a href="#/daten" class="btn primary">Zum Upload</a>';return}const n=[...new Set(t.map(r=>r.monatKey))].sort().reverse();e.innerHTML=`
    <h1 class="view-title">Berichtsheft-Export</h1>
    <p class="view-subtitle">Kopiere die Arbeitsstunden im HH:MM-Format direkt in dein Berichtsheft.</p>

    <div class="card" style="margin-bottom: 24px;">
      <div class="card-split" style="margin-bottom: 16px; align-items: center;">
        <h2 style="margin: 0;">Filter</h2>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label style="color: var(--fg-muted); font-size: 13px;">Monat:</label>
          <select id="filter-monat">
            <option value="">Alle</option>
            ${n.map(r=>`<option value="${r}">${_r(r)}</option>`).join("")}
          </select>
          <button class="btn sm" id="btn-copy-all">Alle sichtbaren kopieren</button>
        </div>
      </div>
    </div>

    <div class="card">
      <div id="liste"></div>
    </div>
  `;const a=e.querySelector("#filter-monat");a.addEventListener("change",()=>s()),e.querySelector("#btn-copy-all").addEventListener("click",()=>{const r=e.querySelectorAll("#liste tr[data-copy]"),c=Array.from(r).map(d=>d.getAttribute("data-copy")).join(`
`);navigator.clipboard.writeText(c).then(()=>W(`${r.length} Zeilen kopiert.`))});function s(){const r=a.value,d=(r?t.filter(l=>l.monatKey===r):t).filter(l=>l.ist!=null&&l.ist>0&&l.tagestyp!=="Wochenende");e.querySelector("#liste").innerHTML=Fr(d),e.querySelectorAll(".copy-val").forEach(l=>{l.addEventListener("click",async()=>{const i=l.getAttribute("data-val");await navigator.clipboard.writeText(i),l.classList.add("ok");const o=l.textContent;l.textContent="✓ kopiert",setTimeout(()=>{l.classList.remove("ok"),l.textContent=o},1200)})})}s()}function Fr(e){return e.length?`
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
        ${e.map(t=>{const n=Ze(t.ist),a=`${V(N(t.datum))}	${n}`;return`
            <tr data-copy="${wn(a)}">
              <td class="tabular">${V(N(t.datum))}</td>
              <td>${Lr(t.wochentag)}</td>
              <td>${t.tagestyp?`<span class="pill ${Cr(t.tagestyp)}">${ca(t.tagestyp)}</span>`:"—"}</td>
              <td class="num tabular">${t.ist.toFixed(2).replace(".",",")}</td>
              <td class="num tabular" style="font-weight: 600;">${n}</td>
              <td><button class="copy-val" data-val="${wn(n)}">📋 ${n}</button></td>
            </tr>
          `}).join("")}
      </tbody>
    </table>
  `:'<p style="color: var(--fg-muted);">Keine Tage in dieser Auswahl.</p>'}function Lr(e){return{MO:"Montag",DI:"Dienstag",MI:"Mittwoch",DO:"Donnerstag",FR:"Freitag",SA:"Samstag",SO:"Sonntag"}[e]??e}function _r(e){const[t,n]=e.split("-");return _(new Date(parseInt(t),parseInt(n)-1,1),"LLLL yyyy",{locale:ne})}function Cr(e){const t=String(e).toLowerCase();return t.includes("stempel")?"stempelzeit":t.includes("berufs")?"berufsschule":t.includes("urlaub")?"urlaub":t.includes("feiertag")?"feiertag":t.includes("dienst")?"dienstreise":t.includes("gleit")?"gleitzeit":t.includes("arbeitsunf")?"arbeitsunfaehigkeit":"feiertag"}function ca(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function wn(e){return ca(e)}async function Br({root:e}){const[t,n,a,s,r]=await Promise.all([ue(),le(),ut(),gt(),ze()]),c=Object.fromEntries(s.map(i=>[i.key,i])),d=ft(t,n,new Date,void 0,{isAzubi:r}).filter(i=>i.mailVorlageKey),l=qn(a);e.innerHTML=`
    <h1 class="view-title">Mail-Vorlagen</h1>
    <p class="view-subtitle">Vorformulierte Mails an die Zeitwirtschaft bei erkannten Fehlern im Zeitnachweis.</p>

    <div class="card" style="margin-bottom: 24px;">
      <h2>Offene Warnungen mit Mail-Vorschlag</h2>
      <p class="hint" style="margin-bottom: 16px;">Diese Warnungen haben einen roten Schweregrad und sind eine direkte Mail wert.</p>

      ${d.length===0?'<div class="empty-state"><div class="empty-state-icon">✓</div><p>Keine akuten Warnungen — top.</p></div>':d.map(i=>Or(i,n,c)).join("")}

      ${l.length>0?`
        <h3 style="margin-top: 24px;">Saldo-Plausibilität</h3>
        ${l.map(i=>`
          <div class="alert severity-warn">
            <div class="alert-icon">⚠</div>
            <div class="alert-body">
              <div class="alert-title">${te(i.titel)}</div>
              <p style="margin: 4px 0; font-size: 13px;">${te(i.beschreibung)}</p>
            </div>
          </div>
        `).join("")}
      `:""}
    </div>

    <div class="card">
      <h2>Vorlagen verwalten</h2>
      <p class="hint" style="margin-bottom: 16px;">Passe die Texte an deinen Stil an. Platzhalter wie <code>{name}</code>, <code>{datum}</code>, <code>{wochentag}</code>, <code>{ist}</code>, <code>{soll}</code> werden automatisch gefüllt.</p>

      <div id="vorlagen-editor">
        ${Object.keys(qe).map(i=>{const o=Qe(i,c[i]);return Wr(o)}).join("")}
      </div>
    </div>
  `,Vr(e),Nr(e)}function Or(e,t,n){const a=Qe(e.mailVorlageKey,n[e.mailVorlageKey]);if(!a)return"";const s=Wt(t,e),r=Gn(a,s),c=Vt(t,a,s);return`
    <div class="alert severity-${e.schweregrad}" style="flex-direction: column; align-items: stretch;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div class="alert-icon">${e.schweregrad==="error"?"!":"⚠"}</div>
        <div class="alert-body">
          <div class="alert-title">${te(e.titel)}</div>
          <p style="margin: 4px 0; font-size: 13px;">${te(e.beschreibung)}</p>
        </div>
      </div>
      <details style="margin-top: 12px;">
        <summary style="cursor: pointer; color: var(--fg-muted); font-size: 13px;">Mail-Vorschau anzeigen</summary>
        <div style="background: var(--surface-2); border-radius: var(--radius-md); padding: 12px; margin-top: 8px; font-family: var(--font-mono); font-size: 12px; white-space: pre-wrap; line-height: 1.5;">
<strong>An:</strong> ${te(t.zeitwirtschaftEmail||"")}
<strong>Betreff:</strong> ${te(r.betreff)}

${te(r.text)}
        </div>
      </details>
      <div class="alert-actions mail-actions-big" style="margin-top: 16px;">
        <a class="btn-mail-big" href="${c}" target="_blank" rel="noopener"><img src="outlook-logo.png" alt="" class="outlook-logo-big" /><span>Mail Vorschlag in Outlook</span></a>
        <button class="btn sm btn-copy-mail" data-subject="${Tt(r.betreff)}" data-body="${Tt(r.text)}">📋 Betreff + Text kopieren</button>
      </div>
    </div>
  `}function Wr(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${te(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${te(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Tt(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 240px;">${te(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function Vr(e){e.querySelectorAll(".btn-save-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=t.closest(".vorlagen-item"),s=a.querySelector(".v-betreff").value,r=a.querySelector(".v-text").value;await ot(n,{betreff:s,text:r}),W("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-key"),a=qe[n];a&&await re(`Deine Anpassungen an "${a.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await ot(n,{betreff:a.betreff,text:a.text}),W("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Nr(e){e.querySelectorAll(".btn-copy-mail").forEach(t=>{t.addEventListener("click",async()=>{const n=t.getAttribute("data-subject"),a=t.getAttribute("data-body"),s=`Betreff: ${n}

${a}`;await navigator.clipboard.writeText(s),W("Mail-Text kopiert.")})})}function te(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Tt(e){return te(e)}async function Kr({root:e}){const[t,n,a,s,r]=await Promise.all([le(),gt(),ze(),_e("mitarbeiterkreis",null),_e("isAzubiOverride",null)]),c=Object.fromEntries(n.map(l=>[l.key,l])),d=s?String(s).trim().toUpperCase()==="AZ":null;e.innerHTML=`
    <h1 class="view-title">Einstellungen</h1>
    <p class="view-subtitle">App-weite Präferenzen.</p>

    <div class="grid cols-2">
      <div class="card" style="grid-column: 1 / -1;">
        <h2>Azubi-Modus</h2>
        <p class="hint" style="margin: 0 0 12px;">
          Wenn aktiv, zeigt die App Azubi-Features wie Fahrgelderstattung und Berufsschul-Erkennung.
          Standardmäßig wird der Modus aus dem Feld <strong>Mitarbeiterkreis</strong> deines Zeitnachweises abgeleitet
          (<code>AZ</code> = Azubi).
        </p>
        <div class="form-group">
          <label>Modus</label>
          <select id="azubi-sel">
            <option value="auto" ${r===null?"selected":""}>Automatisch (aus Mitarbeiterkreis im Zeitnachweis)</option>
            <option value="on" ${r===!0?"selected":""}>Immer aktiv (ich bin Azubi)</option>
            <option value="off" ${r===!1?"selected":""}>Immer inaktiv (ich bin kein Azubi)</option>
          </select>
          <p class="hint" style="margin-top: 8px;">
            <strong>Erkannt aus letztem PDF:</strong> Mitarbeiterkreis = <code>${je(s??"—")}</code>
            ${d===!0?" → Azubi":d===!1?" → kein Azubi":" (noch kein PDF hochgeladen)"} ·
            <strong>Effektiv jetzt aktiv:</strong> ${a?"Azubi-Modus":"Standard-Modus (kein Azubi)"}
          </p>
        </div>
      </div>

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
          ${Object.keys(qe).map(l=>{const i=Qe(l,c[l]);return Ir(i)}).join("")}
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
  `,e.querySelector("#pause-sel").addEventListener("change",async l=>{const i={...t,pausenRegel:l.target.value};await rt(i),W("Pausen-Regel gespeichert.")}),e.querySelector("#azubi-sel").addEventListener("change",async l=>{const i=l.target.value;await Us(i==="auto"?null:i==="on"),typeof window.__applyAzubiVisibility=="function"&&await window.__applyAzubiVisibility(),W("Azubi-Modus gespeichert."),Ks()}),e.querySelectorAll(".btn-save-vorlage").forEach(l=>{l.addEventListener("click",async()=>{const i=l.getAttribute("data-key"),o=l.closest(".vorlagen-item"),u=o.querySelector(".v-betreff").value,h=o.querySelector(".v-text").value;await ot(i,{betreff:u,text:h}),W("Vorlage gespeichert.")})}),e.querySelectorAll(".btn-reset-vorlage").forEach(l=>{l.addEventListener("click",async()=>{const i=l.getAttribute("data-key"),o=qe[i];o&&await re(`Deine Anpassungen an "${o.titel}" gehen verloren.`,{title:"Vorlage zurücksetzen?",confirmLabel:"Zurücksetzen",variant:"danger"})&&(await ot(i,{betreff:o.betreff,text:o.text}),W("Zurückgesetzt."),setTimeout(()=>location.reload(),400))})})}function Ir(e){return`
    <div class="vorlagen-item" data-key="${e.key}" style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
      <div class="card-split" style="margin-bottom: 12px;">
        <div>
          <h3 style="text-transform: none; letter-spacing: 0; color: var(--fg); font-size: 16px;">${je(e.titel)}</h3>
          <p class="hint" style="margin: 4px 0;">${je(e.beschreibung)}</p>
        </div>
        <button class="btn sm btn-reset-vorlage" data-key="${e.key}">Auf Default zurücksetzen</button>
      </div>
      <div class="form-group">
        <label>Betreff</label>
        <input type="text" class="v-betreff" value="${Hr(e.betreff)}" />
      </div>
      <div class="form-group">
        <label>Nachrichtentext</label>
        <textarea class="v-text" style="min-height: 200px;">${je(e.text)}</textarea>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn primary sm btn-save-vorlage" data-key="${e.key}">Speichern</button>
      </div>
    </div>
  `}function je(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Hr(e){return je(e)}async function da(){const e=await ze();document.body.classList.toggle("mode-azubi",e),document.body.classList.toggle("mode-nichtazubi",!e)}window.__applyAzubiVisibility=da;async function kn(){document.documentElement.setAttribute("data-css-ready",""),Oa();const e=document.getElementById("content");await Gs()&&setTimeout(()=>{X('Parser wurde aktualisiert. Bitte lade deinen Zeitnachweis unter "Daten" neu hoch.',{type:"info",duration:12e3})},500),await qs(),await js(),await Zs(),await da(),q("/",sn),q("/dashboard",sn),q("/analytics",nr),q("/kalender",kt),q("/kalender/typ/:typ",xt),q("/kalender/wochentag/:wd",xt),q("/kalender/pause/:bucket",xt),q("/kalender/:yyyymm",kt),q("/kalender/:yyyymm/:yyyykw",kt),q("/tag/:datum",Xi),q("/berichtsheft",Tr),q("/mails",Br),q("/fahrtgeld",Ge),q("/profil",Yi),q("/daten",Ri),q("/einstellungen",Kr),Vs(e),location.hash||Ws("/");try{const t=await y.tage.count();Wi(t>0)&&setTimeout(()=>Xn(),700)}catch(t){console.warn("[boot] Tour-Auto-Start-Check fehlgeschlagen:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",kn):kn();
