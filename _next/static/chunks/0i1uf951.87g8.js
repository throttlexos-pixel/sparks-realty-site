(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,82112,e=>{"use strict";var t=e.i(63246);let r="Sparks Realty Party",a="Sparks Realty is bringing Northern Nevada's real estate community together. Live music, complimentary cocktails, hors d'oeuvres, a photo booth and a great night with great people. Hosted by Sparks Realty.",o="The 250 Lounge at Greater Nevada Field, 250 Evans Ave, Reno, NV 89501",n="20261106T010000Z",l="20261106T050000Z",s=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(r)}&dates=${n}/${l}&details=${encodeURIComponent(a)}&location=${encodeURIComponent(o)}`,c=`BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//Sparks Realty//Party//EN\r
CALSCALE:GREGORIAN\r
METHOD:PUBLISH\r
BEGIN:VEVENT\r
UID:sr-party-2026-11-05@joinsparksrealty.com\r
DTSTAMP:${n}\r
DTSTART:${n}\r
DTEND:${l}\r
SUMMARY:${r}\r
DESCRIPTION:${a.replace(/,/g,"\\,")}\r
LOCATION:${o.replace(/,/g,"\\,")}\r
END:VEVENT\r
END:VCALENDAR`;e.s(["default",0,function(){let e="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-white/25 hover:border-[#D4A43A] text-white transition-colors";return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[#D4A43A] uppercase tracking-[0.2em] text-xs mb-4",children:"Add to Calendar"}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[(0,t.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:e,children:"Google Calendar"}),(0,t.jsx)("button",{type:"button",onClick:function(){let e=new Blob([c],{type:"text/calendar;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="sparks-realty-party.ics",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)},className:e,children:"Apple / Outlook (.ics)"})]})]})}])}]);