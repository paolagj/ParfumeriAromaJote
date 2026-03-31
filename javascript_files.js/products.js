const productsData = [
 
{ id:"100", name:"Electric cherry", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:39000 }],
  desc:"Aromë e freskët dhe e ëmbël me qershi të shtrydhur dhe nota frutash të ndezura, për një përvojë të gjallë dhe joshëse.", img:"../img/parfumet/100.webp"
},
{ id:"101", name:"Sauvage Eau de Parfum", brand:"Dior", gender:"male",
  variants:[ { ml:60, price:13000 }, {ml:100, price:17500 } ],
  desc:"Një aromë magnetike dhe intensive me bergamotë të freskët, vanilje të butë dhe nota ambrë të thellë. Sauvage EDP është fuqia moderne mashkullore – e pastër, misterioze dhe jashtëzakonisht tërheqëse.",
  img:"../img/parfumet/101.webp"
},
{ 
  id:"21", name:"Naxos", brand:"Xerjoff", gender:"unisex",
  variants:[ { ml:100, price:24500 } ],
  desc:"Një parfum i ngrohtë dhe i pasur, që kombinon nota të lules së portokallit, mjalti, limoni dhe lavanda, me bazën e vaniljes, tonkës dhe drurit të ngrohtë, duke krijuar një aromë të sofistikuar dhe të harmonishme, me një karakter të theksuar mesdhetar.", 
  img:"../img/parfumet/top10-2.webp"
},
{ id:"22", name:"Arabians Tonka", brand:"Montale", gender:"unisex",
  variants:[ { ml:100, price:13000}],
  desc:"Arabians Tonka kombinon ngrohtësinë e tonkës me nota druri dhe vanilje, duke krijuar një aromë të rafinuar, moderne dhe të paharrueshme që zgjat gjatë gjithë ditës.", 
  img:"../img/parfumet/22.webp"
},
{ id:"23", name:"Guilty Pour Homme EDP", brand:"Gucci", gender:"male", 
  variants:[ {ml:50, price:9500 }, {ml:100, price:12500 }, { ml:150, price:15500 }],
  desc:"Aromë më intensive me erëza të ngrohta, agrume dhe nota druri të thella, që krijon një prezencë elegante dhe të fuqishme.",img:"../img/parfumet/23.webp"
},
{ id:"24", name:"BurbeRry goddess", brand:"Burberry", gender:"female",
  variants:[ {ml:50, price:12500}, { ml:100, price:17000 }],
  desc:"Aromë elegante dhe e ngrohtë me theks të ëmbël vaniljeje të rafinuar, e balancuar me nuanca aromatike dhe kremoziteti të butë. Jep ndjesi vetëbesimi, feminiliteti modern dhe një prezencë të sofistikuar që mbetet gjatë në lëkurë.", img:"../img/parfumet/24.WEBP"
},
{ id:"25", name:"Jasmin Rouge", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:24500 }, { ml:100, price:35000 }],
  desc:"Aromë sensuale dhe e pasur me jasmin të thellë, të kombinuar me nota të ëmbla dhe druri të ngrohtë, për një ndjesi elegante dhe magnetike që zbulon butësinë dhe forcën në të njëjtën kohë.", img:"../img/parfumet/25.webp"
},
{ id:"26", name:"Versace Eros Eau De Toilete", brand:"Versace", gender:"male", 
  variants:[ { ml: 50, price: 13000 }, { ml:100, price:17000 }],
  desc:"Aromë e freskët dhe e ndritshme me prekje aromatike dhe të ngrohta. Ideale për përdorim të përditshëm.",
  img:"../img/parfumet/26.webp"
},
{ id:"27", name:"My Burberry Eau De Parfum", brand:"Burberry", gender:"female",
  variants:[ { ml:30, price:8500}, { ml:50, price:10500 }, { ml:100, price:13500 },],
  desc:"Aromë elegante dhe e ndritshme me nota lulesh të freskëta, citrus të lehtë dhe nuanca të buta të drurit, që përfaqëson sofistikim dhe freski të rafinuar, duke krijuar një ndjesi të pastër, të gjallë dhe të paharrueshme gjatë gjithë ditës.", img:"../img/parfumet/27.webp"
},
{ id:"102", name:"L’Interdit Rouge EDP", brand:"Givenchy", gender:"female",
  variants:[ { ml:50, price:10500 }, { ml:80, price:13500 } ],
  desc:"Aromë sensuale me lule të bardha, xhenxhefil dhe nota pikante të ngrohta. Shumë elegante dhe e përshtatshme për mbrëmje.",
  img:"../img/parfumet/102.webp"
},
{ id:"103", name:"My Way Intense", brand:"Giorgio Armani", gender:"female",
  variants:[ { ml:50, price:13000 }, { ml:90, price:18000 } ],
  desc:"Një aromë e thellë dhe e pasur, që kombinon nota të lules së portokallit, tuberozës dhe jasminit, me një bazë të ngrohtë druri dhe vaniljeje, duke krijuar një parfum të fuqishëm dhe të qëndrueshëm.", img:"../img/parfumet/103.webp"
},
{ id:"104", name:"Good Girl Eau de Parfum", brand:"Carolina Herrera", gender:"female",
  variants:[ { ml:50, price:11500 }, { ml:80, price:15500 } ],
  desc:"Ikona femërore me kontrast perfekt mes jasminit elegant dhe kakaos sensuale. Një aromë e guximshme dhe elegante për femrën që dominon me stil.",
  img:"../img/parfumet/104.webp"
},
{
  id: "105", name: "Nishane Hacivat Extrait de Parfum", brand: "Nishane", gender: "unisex",
  variants: [{ ml: 100, price: 27000 }],
  desc: "Një aromë e fuqishme dhe e sofistikuar, me nota të freskëta citrus, druri të ngrohtë dhe vanilje të butë. Nishane Extrait de Parfum ofron një prezencë të paharrueshme dhe tërheqëse, perfekte për ata që kërkojnë diçka unike.",
  img: "../img/parfumet/105.webp"
},
{ id:"106", name:"Gentleman EDT", brand:"Givenchy", gender:"male",
  variants:[ { ml:50, price:9000 },{ ml:100, price:12000 }],
  desc:"Aromë elegante mashkullore me nota të freskëta dardhe dhe kardamomi në hapje, të kombinuara me iris dhe lavandë në zemër, ndërsa në bazë zhvillohet me akorde të ngrohta patchouli dhe lëkure që krijojnë një karakter të sofistikuar dhe të qëndrueshëm."
  ,img:"../img/parfumet/106.webp"
},
{ id:"107", name:"Lost Cherry", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:19000 },  { ml:50, price:35500 }, { ml:100, price:45000 }],
  desc:"Aromë intensive dhe joshëse me qershi të pjekur, nota bajame dhe druri të ngrohtë, që kombinon ëmbëlsinë dhe elegancën me një fund të thellë dhe magnetik.", img:"../img/parfumet/107.webp"
},
{ id:"108", name:"The Scent Eau de Toilette", brand:"Hugo Boss", gender:"male",
  variants:[ { ml:50, price:7500 },{ ml:100, price:10500 }],
  desc:"Xhenxhefil pikant, fruta ekzotike dhe nota druri që krijojnë një aromë tërheqëse dhe elegante për përdorim të përditshëm.",
  img:"../img/parfumet/108.webp"
},
{ id:"109", name:"Eau de Parfum", brand:"Maison Francis Kurkdjian", gender:"unisex",
  variants:[ { ml:35, price:15500 }, { ml:70, price:24000 },  { ml:200, price:45000 } ],
  desc:"Një kombinim i rafinuar lulesh dhe frutash, që jep ndjesinë e freskisë dhe luksit të përditshëm.",
  img:"../img/parfumet/109.webp"
},
{ id:"110", name:"Dior Sauvage Elixir", brand:"Dior", gender:"male",
  variants:[ { ml:60, price:17000 } ],
  desc:"Një aromë intense, e fuqishme dhe magnetizuese, me nota pikante dhe druri të thellë.",
  img:"../img/parfumet/110.webp"
},
{ id:"111", name:"K Eau de Parfum", brand:"Dolce & Gabbana", gender:"male",
  variants:[ { ml:50, price:8000 }, { ml:100, price:10500 }, { ml:150, price:12000 } ],
  desc:"Agrume të freskëta me dru kedri dhe nota aromatike mesdhetare. Një aromë energjike, mashkullore dhe shumë e përdorshme çdo ditë.",
  img:"../img/parfumet/111.webp"
},
{ id:"112", name:"L'Interdit Parfum", brand:"Givenchy", gender:"female",
  variants:[ { ml:35, price:9000 }, { ml:50, price:12500 }, { ml:80, price:15000 }  ],
  desc:"Tuberozë intensive me nota të errëta orientale dhe vanilje të ngrohtë. Një parfum i sofistikuar, i thellë dhe shumë femëror.",
  img:"../img/parfumet/112.webp"
},
{ id:"113", name:"Mr Burberry Eau De Toilete", brand:"Burberry", gender:"male",
  variants:[ { ml:30, price:8000 }, { ml:100, price:10500 }, { ml:150, price:13000 } ],
  desc:"Aromë e sofistikuar dhe moderne me nota citrus, druri dhe erëza të buta, që krijon një karakter elegant, i fuqishëm dhe i rafinuar, duke lënë një përshtypje të paharrueshme gjatë gjithë ditës.", img:"../img/parfumet/113.webp"
},
{ id:"114", name:"Invictus EDT", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:8500 },{ ml:100, price:11500 } ],
 desc:"Aromë freskuese dhe energjike me nota agrumesh, akorde marine dhe nuanca të lehta drurore. Jep ndjesi pastërtie, dinamizmi dhe vetëbesimi, ideale për përdorim të përditshëm dhe për stinët e ngrohta.",
  img:"../img/parfumet/114.webp"
},
{ id:"115", name:"Ebene Fume", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:27000 }],
  desc:"Një aromë elegante dhe misterioze me nota druri të ngrohtë, tym të lehtë dhe nuanca të buta florale, që krijon një karakter të sofistikuar dhe magnetik, duke lënë një përshtypje të paharrueshme.", img:"../img/parfumet/115.webp"
},
{ id:"116", name:"The Most Wanted Elixir", brand:"Azzaro", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:12500 }],
  desc:"Eliksir i fuqishëm me vanilje, nota druri dhe ëmbëlsi të ngrohtë. Një aromë moderne, magnetike dhe me performancë shumë të lartë.",
  img:"../img/parfumet/116.webp"
},
{ id:"117", name:"Althaïr", brand:"Parfums de Marly", gender:"male",
  variants:[ { ml:75, price:20500 }, { ml:125, price:27000 } ],
  desc:"Vanilje bourbon e kombinuar me kanellë dhe dru të ngrohtë. Elegant, modern dhe shumë i sofistikuar.",
  img:"../img/parfumet/117.webp"
},
{ id:"118", name:"Aldebaran", brand:"Marc-Antoine Barrois", gender:"unisex",
  variants:[ { ml:100, price:19500 }],
  desc:"Aromë minimaliste dhe elegante me nota lulesh të bardha dhe dru të butë. E pastër, artistike dhe unike.",
  img:"../img/parfumet/118.webp"
},
{ id:"119", name:"Paragon", brand:"Initio Parfums Privés", gender:"unisex",
  variants:[ { ml:90, price:26000 }],
  desc:"Bergamotë, palo santo dhe dru të pasur që krijojnë një aromë misterioze dhe shumë të thellë. Luksoz dhe me performancë të lartë.",
  img:"../img/parfumet/119.webp"
},
{ id:"120", name:"Vanilla Sex", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:33000 }],
  desc:"Vanilje shumë e pasur dhe kremoze me nota të buta bajameje dhe dru të ngrohtë. Luksoz, provokues dhe unik.",
  img:"../img/parfumet/120.webp"
},
 { id:"1", name:"Gentleman Reserve Prive", brand:"Givenchy", gender:"male", 
  variants:[ { ml: 60, price: 9500 }, { ml:100, price:12500 } ],
  desc:"Aromë e thellë dhe elegante me karakter druror dhe nuanca të ngrohta. Jep ndjesi maturie, sofistikimi dhe prezencë të fortë.",
  img:"../img/parfumet/1.webp"
},

{ id:"3", name:"Elixir Absolute", brand:"JPG Jean Paul Gaultier", gender:"male", 
  variants:[ { ml: 75, price: 12500 }, { ml:125, price:16500 } ],
  desc:"Kompozim intensiv dhe magnetik me karakter të ëmbël dhe oriental. Shumë i qëndrueshëm dhe ideal për mbrëmje apo raste speciale.",
  img:"../img/parfumet/3.webp"
},
{ id:"17", name:"Fucking Fabulous", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:19000 }, { ml:50, price:35500 }, { ml:100, price:45000 } ],
  desc:"Aromë intensive dhe ekstravagante me nota të ngrohta druri, vaniljeje dhe lëkure, të kombinuara me nuanca aromatike dhe erëza të sofistikuara, që krijon një karakter të fuqishëm, të rafinuar dhe të paharrueshëm, duke lënë një përshtypje dramatike dhe magnetike.", img:"../img/parfumet/17.webp"
}, 
{ id:"6", name:"Chloe Nomade EDT", brand:"Chloe", gender:"female", 
  variants:[ {ml:30, price:8000 }, { ml:50, price:10000 }, { ml:75, price:13000 }, ],
  desc:"Aromë e freskët dhe elegante me nota frutash të lehta, lule delikate dhe bazë druri që krijojnë një karakter modern dhe të lirë.",
  img:"../img/parfumet/6.webp"
},
{ id:"9", name:"Stronger with You", brand:"Emporio Armani", gender:"male",
  variants:[ { ml:50, price:9500 },{ ml:100, price:12500 } ],
  desc:"Një aromë moderne dhe e ngrohtë, perfekte për elegancë dhe stil të përditshëm.",
  img:"../img/parfumet/9.webp"
},
{ id:"5", name:"Tabacco Vanille", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:14000 }, { ml:50, price:25000 }, { ml:100, price:35000 }],
  desc:"Një aromë e pasur dhe e ngrohtë që ndërthur vaniljen e ëmbël me duhanin aromatik, të mbështjellë me nota kremoze të tonkës dhe frutash të thata, për një ndjesi luksoze dhe të paharrueshme.",
  img:"../img/parfumet/5.webp"
},
{ id:"2", name:"My Burberry Black", brand:"Burberry", gender:"female",
  variants:[ { ml:30, price:9000}, { ml:50, price:11500 }, { ml:100, price:15000 } ],
  desc:"Aromë e thellë dhe sensuale që kombinon nota të ëmbla lulesh dhe frutash të errëta me nuanca të drurit dhe vaniljes, duke krijuar një karakter misterioz, elegant dhe të sofistikuar, ideal për momentet më të veçanta dhe për të lënë një përshtypje të paharrueshme.",
  img:"../img/parfumet/2.webp"
},
{ id:"4", name:"Guilty Pour Homme Absolute", brand:"Gucci", gender:"male", 
  variants:[  {ml:50, price:9000 }, {ml:100, price:12000 }, {ml:150, price:14500 }  ],
  desc:"Aromë e thellë dhe intensive me lëkurë, drurë të errët dhe nuanca pikante, që krijon një karakter të fortë, unik dhe shumë magnetik.",
  img:"../img/parfumet/4.webp"
},
{ id:"7", name:"My Burberry Blush", brand:"Burberry", gender:"female",
  variants:[ { ml:30, price:8000}, { ml:50, price:10500 },{ ml:100, price:13500 }],
  desc:"Aromë e freskët dhe e gjallë me nota lulesh të kuqe dhe pink, frutash të lehta dhe nuanca citrus, që krijon një karakter delikat, elegant dhe plot jetë, duke lënë një përshtypje të sofistikuar dhe të rafinuar.",
  img:"../img/parfumet/7.webp"
},
{ id:"8", name:"Spicebomb Classic", brand:"Viktor & Rolf", gender:"male",
  variants:[  {ml:50, price:10000 },{ ml:100, price:12500 } ],
  desc:"Aromë pikante dhe e ngrohtë me erëza intensive, nota druri dhe nuanca të freskëta, që krijon një karakter të fuqishëm, mashkullor dhe magnetik.",
  img:"../img/parfumet/top10-8.webp"
},
{ id:"10", name:"Erba Pura", brand:"Xerjoff", gender:"unisex",
  variants:[  { ml:50, price:18000 }, { ml:100, price:26000 } ],
  desc:"Një aromë e freskët dhe elegante, me nota frutash të ndritshme dhe musk të butë, që ofron një ndjesi sofistikuese dhe të qetë gjatë gjithë ditës.",
  img:"../img/parfumet/10.webp"
},
{ id:"11", name:"Donna born in Roma Uomo", brand:"Valentino", gender:"male",
  variants:[{ ml:100, price:13000 } ],
  desc:"Aromë elegante dhe moderne me nota citrus dhe druri të butë, që krijon një karakter të sofistikuar, i rafinuar dhe i përshtatshëm për meshkujt që duan të jenë të paharrueshëm.", img:"../img/parfumet/11.webp"
},

{ id:"12", name:"Oud Wood", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:14000 }, { ml:50, price:25000 },  { ml:100, price:35000 } ],
  desc:"Aromë misterioze dhe magnetike, ku oud i rrallë përzihet me drurë të ngrohtë dhe nuanca pikante, duke krijuar një përshtypje të thellë dhe elegante që zgjat gjatë gjithë ditës.", img:"../img/parfumet/12.webp"
},
{ id:"13", name:"Nettare Di Fiori", brand:"Gucci", gender:"female", 
  variants:[ {ml:50, price:14000 }, { ml:100, price:10500 } ],
  desc:"Aromë lulesh e pasur me trëndafil dhe tuberozë, e kombinuar me nuanca të ngrohta dhe sensuale që krijojnë një karakter të sofistikuar.",img:"../img/parfumet/13.webp"
},
{ id:"14", name:"Le Parfum", brand:"JPG Jean Paul Gaultier", gender:"male", 
  variants:[ { ml: 75, price: 10500 }, { ml:125, price:14000 } ],
  desc:"Aromë e thellë dhe elegante me kombinim notash aromatike dhe të ngrohta. Jep ndjesi sofistikimi, vetëbesimi dhe prezencë të fortë.",
  img:"../img/parfumet/14.webp"
},
{ id:"15", name:"Neroni Portofino Forte", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:100, price:45000 }],
  desc:"Një aromë e freskët dhe citrus me neroli të ndritshëm, bergamotë dhe nota detare, e dizajnuar për të sjellë ndjesinë e një dite të ngrohtë mes detit dhe diellit.", img:"../img/parfumet/15.webp"
},
{ id:"16", name:"Alien Goddess Intense", brand:"Mugler", gender:"female", 
  variants:[ {ml:30, price:10500 },{ ml:60, price:14500 },{ ml:90, price:17000 } ],
  desc:"Version më i thellë dhe më i pasur me vanilje kremoze, lule të bardha dhe nota qelibari që krijojnë një aromë të fuqishme dhe shumë tërheqëse.",img:"../img/parfumet/16.webp"
},
{ id:"18", name:"Burberry Brit Men", brand:"Burberry", gender:"male",
  variants:[ { ml:30, price:4000}, { ml:50, price:6000 }, { ml:100, price:8000 } ],
  desc:"Aromë e freskët dhe e sofistikuar me nota citrus, lule të lehta dhe nuanca të buta druri, që krijon një karakter elegant, modern dhe të rafinuar, i përshtatshëm për përdorim gjatë gjithë ditës.", img:"../img/parfumet/18.webp"
},
{ id:"19", name:"Givenchy Gentleman", brand:"Givenchy", gender:"male", 
  variants:[ { ml: 60, price: 9000 },{ ml:100, price:13000 } ],
  desc:"Aromë klasike dhe moderne njëkohësisht, me kombinim notash aromatike dhe të buta. E përshtatshme për përditshmëri dhe evente elegante.",
  img:"../img/parfumet/19.webp"
},
{ id:"20", name:"Versace Eros Eau de Parfum", brand:"Versace", gender:"male", 
  variants:[ { ml: 75, price: 10000 },{ ml:125, price:13000 } ],
  desc:"Aromë intensive dhe energjike me karakter mashkullor. Jep ndjesi force, pasioni dhe vetëbesimi.",
  img:"../img/parfumet/top10-9.webp"
},
{ 
  id:"28", name:"Y EDP", brand:"YSL Yves Saint Laurent", gender:"male",
  variants:[ { ml:100, price:13500 } ],
  desc:"Një aromë moderne dhe energjike me nota fillestare të shkurreve të freskëta dhe mollës, zemrën me geranium dhe salvi, dhe bazën e drurit të qetë dhe ambra-s, që krijon një ekuilibër të fuqishëm dhe të sofistikuar.",
  img:"../img/home/parfumet/top10-3.webp"
},
{ id:"29", name:"Bloom Acqua Di Fiori", brand:"Gucci", gender:"female", 
  variants:[ {ml:50, price:10500 },{ ml:100, price:14000 } ],
  desc:"Aromë e gjallë dhe e freskët me lule të bardha dhe nota të buta agrumesh, që krijon një karakter energjik dhe të ndritshëm.",img:"../img/parfumet/29.webp"
},
{ id:"30", name:"Spicebomb Infrared EDT", brand:"Viktor & Rolf", gender:"male", 
  variants:[ , {ml:50, price:10000 },{ ml:100, price:12500 } ],
  desc:"Aromë energjike me nota pikante, kanellë dhe nuanca të ngrohta druri, që krijon një karakter të zjarrtë dhe plot dinamizëm.",img:"../img/parfumet/30.webp"
},
{ 
  id:"31", name:"Mancera Red Tobacco", brand:"Mancera", gender:"unisex",
  variants:[ {ml:60, price:10500},{ ml:120, price:15000 } ],
  desc: "Aromë e pasur dhe e ngrohtë me nota të duhanit të ëmbël, drurëve dhe vaniljes. Jep një ndjesi sofistikimi dhe karizme të fortë, ideale për mbrëmje dhe raste speciale.",
  img:"../img/parfumet/top10-10.webp"
},
{ id:"32", name:"Rose D'Amalfi", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:34500 }],
  desc:"Një aromë e freskët dhe lule, me trëndafil të ndritshëm dhe nota citrus, që sjell ndjesinë e një mëngjesi të ndritshëm pranë bregut të Amalfit.", img:"../img/parfumet/32.webp"
},    
{ id:"33", name:"Givenchy EDT Intense", brand:"Givenchy", gender:"male", 
  variants:[ { ml:100, price:12000 }],
  desc:"Kompozim intensiv dhe energjik me freski të theksuar dhe baza të ngrohta. Jep vetëbesim dhe qëndrueshmëri gjatë gjithë ditës.",
  img:"../img/parfumet/33.webp"
},
{ id:"34", name:"le beau le parfum", brand:"JPG Jean Paul Gaultier", gender:"male", 
  variants:[ { ml: 75, price: 11000 }, { ml:125, price:14500 } ],
  desc:"Aromë sensuale me nuanca ekzotike dhe drurore. Jep një ndjesi të ngrohtë, moderne dhe tërheqëse.",
  img:"../img/parfumet/34.webp"
},
{ id:"35", name:"Brit for her Eau de Parfum", brand:"Burberry", gender:"female",
  variants:[ { ml:100, price:8500 }],
  desc:"Aromë e ndritshme dhe femërore me nota lulesh të ëmbla, citrus dhe vanilje të butë, që krijon një karakter delikat, elegant dhe magnetik, i përshtatshëm për momentet speciale.", img:"../img/parfumet/35.webp"
},
{ id:"36", name:"Alien Classic", brand:"Mugler", gender:"female", 
  variants:[ {ml:30, price:10000 },{ ml:60, price:14000 },{ ml:90, price:16500 } ],
  desc:"Aromë misterioze dhe magnetike me jasmin të ndritshëm, nota druri dhe qelibar të ngrohtë që krijojnë një prezencë intensive dhe shumë sensuale.",img:"../img/parfumet/36.webp"
},
{ id:"37", name:"Bloom", brand:"Gucci", gender:"female", 
  variants:[  {ml:50, price:11000 }, { ml:100, price:14500 } ],
  desc:"Aromë e pastër dhe e ndritshme me lule të bardha dhe jasmin, që krijon një ndjesi natyrale, elegante dhe shumë femërore.",img:"../img/parfumet/37.webp"
},
{ id:"38", name:"Alien Goddess", brand:"Mugler", gender:"female", 
  variants:[ {ml:30, price:10000 }, { ml:60, price:14000 }, { ml:90, price:16500 } ],
  desc:"Aromë e ndritshme dhe diellore me vanilje të ëmbël, jasmin dhe nuanca kokosi që japin një ndjesi të butë, femërore dhe rrezatuese.",img:"../img/parfumet/38.webp"
},
{ id:"39", name:"Light Blue Intense", brand:"Dolce & Gabbana", gender:"male",
  variants:[ { ml:50, price:8500 }, { ml:100, price:11000 } ],
  desc:"Light Blue Intense është një aromë freskuese dhe energjike me nota citrus, detare dhe druri, e dizajnuar për t'i sjellë një ndjesi të pastër dhe të fuqishme gjatë gjithë ditës.", 
  img:"../img/parfumet/39.webp"
},
{ id:"40", name:"Soleil Blanc", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:14000 }, { ml:50, price:25000 }, { ml:100, price:35000 } ],
  desc:"Aromë e ngrohtë dhe diellore me vanilje, kokosit dhe nota të buta lulesh, që përfaqëson ndjesinë e një dite perfekte në diellin e Mesdheut.", img:"../img/parfumet/40.webp"
},
{ 
  id:"41", name:"Spicebomb Extreme", brand:"Viktor & Rolf", gender:"male", 
  variants:[ {ml:50, price:11500 },{ ml:100, price:14500 }   ],
  desc:"Aromë shumë intensive me vanilje të ngrohtë, duhan dhe erëza të thella, që krijon një prezencë të fortë, sensuale dhe të paharrueshme.",img:"../img/parfumet/41.webp"
},
{ id:"42", name:"Le Beau", brand:"JPG Jean Paul Gaultier", gender:"male", 
  variants:[ { ml: 75, price: 10000 },{ ml:125, price:13000 } ],
  desc:"Aromë e freskët dhe dinamike me prekje të ëmbla dhe drurore. E balancuar për përdorim të përditshëm dhe dalje.",
  img:"../img/parfumet/42.webp"
},    
{ id:"43", name:"Dolce Gabbana Devotion", brand:"Dolce & Gabbana", gender:"female", 
  variants:[ { ml: 75, price: 10000 }, { ml:125, price:13000 } ],
  desc:"Aromë e freskët dhe dinamike me prekje të ëmbla dhe drurore. E balancuar për përdorim të përditshëm dhe dalje.",
  img:"../img/parfumet/43.webp"
},    
{ 
  id:"44", name:"Hugo Boss Bottled", brand:"Hugo Boss", gender:"male",
  variants:[ { ml:50, price:8000 },{ ml:100, price:10500 } ],
  desc:"Një kombinim i freskët dhe i ngrohtë: nota fillestare e mollës dhe limonit, zemra me kanellë dhe trëndafil, dhe baza druri e sandalit dhe vaniljes.", 
  img:"../img/parfumet/top10-4.webp"
},
{ id:"45", name:"Guilty Pour Homme EDT", brand:"Gucci", gender:"male", 
  variants:[  {ml:50, price:8500 }, { ml:100, price:11500 }  ],
  desc:"Aromë e freskët dhe moderne me nota limoni, livando dhe druri të lehtë, që krijon një karakter energjik dhe tërheqës për çdo moment të ditës.",img:"../img/parfumet/45.webp"
},
{ id:"46", name:"Tubereuse nue", brand:"Tom Ford", gender:"female",
  variants:[ { ml:50, price:34500 }],
  desc:"Aromë e ndritshme dhe e butë me tuberozë të pasur dhe nota delikate druri, e krijuar për të lënë një përshtypje të rafinuar dhe elegante.", img:"../img/parfumet/46.webp"
},
{ id:"47", name:"Chloe Classic EDP", brand:"Chloe", gender:"female", 
  variants:[ { ml:75, price:13500 }],
  desc:"Aromë klasike dhe romantike me trëndafil të butë, magnolia dhe nuanca pudre që krijojnë një ndjesi shumë femërore dhe të sofistikuar.",img:"../img/parfumet/47.webp"
},
{ id:"48", name:"Burberry Hero Eau de Parfum", brand:"Burberry", gender:"male",
  variants:[ { ml:50, price:10500 }, { ml:100, price:13500 } ],
  desc:"Aromë e fuqishme dhe elegante me nota të freskëta citrus, erëza të thella dhe drurë të ngrohtë, që krijon një karakter të fortë, modern dhe magnetik, duke lënë një përshtypje të sofistikuar dhe të paharrueshme.", img:"../img/parfumet/48.webp"
},
{ id:"49", name:"Stronger with You Intesely", brand:"Emporio Armani", gender:"male",
  variants:[  { ml:50, price:10000 }, { ml:100, price:13500 }],
  desc:"Një aromë e thellë dhe pasionante për meshkuj, plot intensitet dhe energji.", img:"../img/parfumet/49.webp"
},
{ id:"50", name:"Sole Di Positano", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:9500 }, { ml:50, price:14000 },{ ml:100, price:19000 } ],
  desc:"Aromë e ndritshme dhe e freskët me nota citrus, lule të bardha dhe nuanca të lehta të drurit dhe detit, që sjell ndjesinë e një dite të diellit mes bregdetit të Positanos, duke krijuar një karakter elegant, i gjallë dhe i rafinuar.", img:"../img/parfumet/50.webp"
}, 
{ id:"51", name:"JPG Divine", brand:"JPG Jean Paul Gaultier", gender:"female", 
  variants:[ { ml:30, price:10000},{ ml: 50, price: 13000 },{ ml:100, price:17000 } ],
  desc:"Aromë me karakter modern dhe elegant, që kombinon freskinë me nota të buta dhe sensuale. E përshtatshme për çdo sezon.",
  img:"../img/parfumet/51.webp"
},
{ id:"52", name:"Herod", brand:"Parfums de Marly", gender:"male",
  variants:[ { ml:125, price:29000 } ],
  desc:"Herod është një aromë e pasur dhe e sofistikuar me nota të ngrohta të duhanit, vaniljes dhe drurit, krijuar për të lënë një përshtypje të fuqishme dhe elegante.", 
  img:"../img/parfumet/52.webp"
},
{
  id:"53", name:"Scandal Le Parfum", brand:"JPG Jean Paul Gaultier", gender:"male",
  variants:[ { ml:50, price:11000 }, { ml:100, price:14500 } ],
  desc:"Një aromë e pasur dhe e kompletuar, me nota të mjaltit, karamelit dhe luleve të bardha. Balancim i ëmbël dhe i sofistikuar për përdorim të përditshëm.",
  img:"../img/parfumet/top10-5.webp"
},
{ id:"54", name:"My Way EDP", brand:"Giorgio Armani", gender:"female",
  variants:[ { ml:30, price:9000 }, { ml:50, price:12000 },  { ml:90, price:16500 } ],
  desc:"Një aromë freskuese dhe e harmonishme, që përzien lulen e portokallit, jasminin dhe tuberozën me bazën e vaniljes dhe drurit, duke krijuar një parfum të butë, të natyrshëm dhe të sofistikuar.", img:"../img/parfumet/54.webp"
},
{ id:"55", name:"Acqua di Gio Profondo", brand:"Giorgio Armani", gender:"male",
  variants:[ { ml:100, price:14000 } ],
  desc:"Aromë detare dhe moderne me nota marine, bergamot dhe thellësi minerale. Jep ndjesi freskie, pastërtie dhe maskuliniteti të sofistikuar.",
  img:"../img/parfumet/55.webp"
},
{ id:"56", name:"Burberry Hero Eau de Toilete", brand:"Burberry", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:13000 }, { ml:150, price:15500 } ],
  desc:"Aromë e fuqishme dhe moderne që kombinon nota të freskëta citrus, erëza të pasura dhe drurë të ngrohtë, duke krijuar një karakter të fortë, elegant dhe magnetik, i përshtatshëm për meshkujt që duan të lënë një përshtypje të paharrueshme dhe sofistikuar.",
  img:"../img/parfumet/56.webp"
},
{ id:"57", name:"Donna born in Roma", brand:"Valentino", gender:"female",
  variants:[ { ml:30, price:9500 }, { ml:50, price:13500 }, { ml:100, price:16500 } ],
  desc:"Aromë e ndritshme dhe elegante me nota lulesh, vaniljeje dhe druri të ngrohtë, që krijon një karakter sensual, i rafinuar dhe i sofistikuar.",
  img:"../img/parfumet/57.webp"
},
{ id:"58", name:"Black Orchid", brand:"Tom Ford", gender:"female",
  variants:[ { ml:30, price:10000 }, { ml:50, price:15000 }, { ml:100, price:20000 }, { ml:150, price:25000 } ],
  desc:"Një aromë e thellë dhe misterioze me orkide të zeza, trëndafil dhe nota druri, që përqafon sensualitetin dhe luksin në një mënyrë të papërsëritshme.",
  img:"../img/parfumet/58.webp"
},
{ id:"59", name:"Delina", brand:"Parfums de Marly", gender:"female",
  variants:[ { ml:30, price:17000 }, { ml:75, price:27500 } ],
  desc:"Një aroma delikate dhe femërore me nota freskuese të luleve, trëndafilit dhe frutave të ëmbla. Elegante, e lehtë dhe e sofistikuar, perfekte për çdo ditë.",
  img:"../img/parfumet/top10-6.webp"
},
{ id:"60", name:"Bad Boy Extreme", brand:"Carolina Herrera", gender:"male",
  variants:[ { ml:50, price:11000 }, { ml:100, price:14500 } ],
  desc:"Një aromë e fuqishme dhe magnetizuese, me nota pikante dhe druri, ideale për burrin energjik dhe modern.",
  img:"../img/parfumet/60.webp"
},
{ id:"61", name:"Spicebomb Night Vision EDP", brand:"Viktor & Rolf", gender:"male", 
  variants:[ { ml:50, price:11500 }, { ml:90, price:13500 } ],
  desc:"Aromë misterioze me nota të freskëta jeshile dhe erëza të errëta, që krijon një karakter modern, elegant dhe intensiv.",
  img:"../img/parfumet/61.webp"
},
{ id:"62", name:"Le Male Eau de Toilette", brand:"JPG Jean Paul Gaultier", gender:"male",
  variants:[ { ml:75, price:9500 }, { ml:125, price:12000 } ],
  desc:"Një klasik ikonik mashkullor me nenexhik të freskët, livando aromatike dhe vanilje të ngrohtë. Le Male është sensual, energjik dhe i paharrueshëm — kombinimi perfekt mes freskisë dhe ëmbëlsisë orientale.",
  img:"../img/parfumet/62.webp"
},
{ id:"63", name:"Stronger with You Absolutely", brand:"Emporio Armani", gender:"male",
  variants:[ { ml:50, price:11000 }, { ml:100, price:15000 } ],
  desc:"Bold dhe tërheqës, kjo aromë rrezaton besim dhe karizëm.",
  img:"../img/parfumet/63.webp"
},  
{ id:"64", name:"Santal Blush", brand:"Tom Ford", gender:"female",
  variants:[ { ml:50, price:21500 }, { ml:100, price:31000 } ],
  desc:"Aromë elegante me jasmin të pasur, nota të ëmbla dhe druri të ngrohtë, që krijon një ndjesi sofistikuese dhe delikate.",
  img:"../img/parfumet/64.webp"
},
{ id:"65", name:"Intense Cafe", brand:"Montale", gender:"unisex",
  variants:[ { ml:50, price:10000 }, { ml:100, price:12500 } ],
  desc:"Aromë elegante me nota kafeje të freskët, trëndafili dhe vanilje të butë. Kombinim perfekt mes ëmbëlsisë dhe sensualitetit, ideal për përdorim gjatë gjithë vitit.",
  img:"../img/parfumet/65.webp"
},
{ id:"66", name:"Bloom Gocce Di Fiori", brand:"Gucci", gender:"female", 
  variants:[ { ml:100, price:12500 } ],
  desc:"Aromë e freskët dhe e lehtë me lule të bardha dhe nuanca jeshile, që sjell një ndjesi delikate dhe pranverore.",
  img:"../img/parfumet/66.webp"
},
{ id:"67", name:"Scandal Eau de Parfum", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:7500 }, { ml:50, price:11000 }, { ml:80, price:13500 } ],
  desc:"Një aromë intensive me mjaltë të ëmbël, gardeni dhe patchouli të ngrohtë. Scandal është femërore, e guximshme dhe me prezencë të fortë, krijuar për të lënë gjurmë kudo që shfaqet.",
  img:"../img/parfumet/67.webp"
},
{ id:"68", name:"Uomo born in Roma Yellow Dream", brand:"Valentino", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:13500 } ],
  desc:"Aromë e ndritshme dhe optimiste me nota citrus dhe lulesh të ëmbla, që krijon një karakter të freskët, modern dhe të sofistikuar.",
  img:"../img/parfumet/68.webp"
},
{ id:"69", name:"Donna Coral", brand:"Valentino", gender:"female",
  variants:[ { ml:100, price:16500 } ],
  desc:"Aromë e freskët dhe femërore me nota të buta frutash dhe lulesh, që krijon një karakter delikat, modern dhe i rafinuar.",
  img:"../img/parfumet/69.webp"
},
{ id:"70", name:"Ombre Leather", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:150, price:25000 }],
  desc:"Aromë e ngrohtë dhe e fortë me lëkurë, nota florale dhe druri të thellë, për një karakter të fuqishëm dhe të sofistikuar.", img:"../img/parfumet/70.webp"
},
{ id:"71", name:"Acqua di Gio EDT", brand:"Giorgio Armani", gender:"male",
  variants:[ { ml:50, price:8500 }, { ml:100, price:11500 } ],
  desc:"Klasik freskues me nota agrumesh, detare dhe drurore. Aromë e lehtë dhe energjike, ideale për përdorim të përditshëm.",
  img:"../img/parfumet/71.webp"
},
{ id:"72", name:"Burberry London Femme", brand:"Burberry", gender:"female",
  variants:[ { ml:50, price:7500 }],
  desc:"Aromë e sofistikuar dhe klasike me nota florale, erëza të lehta dhe druri të ngrohtë, që krijon një karakter të rafinuar dhe të elegant për çdo ditë.", img:"../img/parfumet/72.webp"
},
{ id:"73", name:"Xerjoff Torino 21", brand:"Xerjoff", gender:"unisex",
  variants:[ { ml:50, price:19500 }, { ml:100, price:29500 } ],
  desc:"Një aromë luksoze dhe ekskluzive, që kombinon nota të pasura orientale dhe druri, për një përvojë unike dhe elegante.",
  img:"../img/parfumet/73.webp"
},
{ id:"74", name:"Erba Gold", brand:"Xerjoff", gender:"unisex",
  variants:[ { ml:50, price:22000 }, { ml:100, price:31000 } ],
  desc:"Aromë e pasur, luksoze dhe e freskët, ideale për ata që duan të dallohen me stil.",
  img:"../img/parfumet/74.webp"
},
{ id:"75", name:"Cherry Cherry", brand:"Mancera", gender:"unisex",
  variants:[ { ml:60, price:10500 }, { ml:120, price:15000 } ],
  desc:"Një aromë e freskët dhe e ëmbël me nuanca frutash dhe lulesh, ideale për ditët kur dëshiron të dallohesh me elegance.",
  img:"../img/parfumet/75.webp"
},
{ id:"76", name:"Stronger With You Tobacco", brand:"Emporio Armani", gender:"male",
  variants:[ { ml:100, price:13500 } ],
  desc:"Elegancë e fuqishme me nuanca të duhanit dhe aromë të ngrohtë, perfekt për burrin modern dhe të sigurt në vetvete.",
  img:"../img/parfumet/76.webp"
},
{ id:"77", name:"Vanille Fatale", brand:"Tom Ford", gender:"female",
  variants:[ { ml:30, price:14000 }, { ml:50, price:24500 }, { ml:100, price:35000 } ],
  desc:"Aromë e pasur dhe sensuale me vanilje të ëmbël, lule dhe nota druri të ngrohta, që përfaqëson elegancën dhe magnetizmin e një prezence të fortë.", img:"../img/parfumet/77.webp"
},
{ id:"78", name:"Rouge Extraixt de Parfum", brand:"Maison Francis Kurkdjian", gender:"unisex",
  variants:[ { ml:35, price:23500 }, { ml:70, price:35500 }, { ml:200, price:72000 } ],
  desc:"Aromë intensive dhe luksoze, me nuanca orientale dhe druri, që krijon prezencë të fuqishme dhe të paharrueshme.",
  img:"../img/parfumet/78.webp"
},
{ id:"79", name:"Xerjoff Alexandria 2", brand:"Xerjoff", gender:"female",
  variants:[ { ml:30, price:18000 }, { ml:50, price:33000 }, { ml:100, price:48000 } ],
  desc:"Një aromë ekskluzive dhe magnetike me nota të çmuara orientale, e dizajnuar për të lënë një përshtypje të paharrueshme.",
  img:"../img/parfumet/79.webp"
},
{ id:"80", name:"Dolce Gabbana Pour Femme", brand:"Dolce & Gabbana", gender:"female",
  variants:[ { ml:25, price:7500 }, { ml:50, price:10500 }, { ml:100, price:13500 } ],
  desc:"Aromë elegante dhe femërore, me nota lulesh dhe frutash, perfekte për gruan moderne dhe sofistikuese.",
  img:"../img/parfumet/80.webp"
},
{ id:"81", name:"Valentino Purple Malachite", brand:"Valentino", gender:"male",
  variants:[ { ml:50, price:10500 }, { ml:100, price:14000 } ],
  desc:"Aromë luksoze dhe orientale me nota të pasura qelibarike, lulesh të bardha dhe nuanca të ëmbla të vaniljes. Shpreh elegancë, forcë dhe mister, ideale për meshkuj që duan një prezencë të sofistikuar dhe të paharrueshme.",
  img:"../img/parfumet/81.webp"
},
{ id:"82", name:"Libre", brand:"YSL Yves Saint Laurent", gender:"female",
  variants:[ { ml:50, price:12500 }, { ml:90, price:17000 } ],
  desc:"Aromë femërore dhe moderne me lavandë, lule portokalli dhe vanilje. Kombinim perfekt mes freskisë dhe sensualitetit.",
  img:"../img/parfumet/82.webp"
},
{ id:"83", name:"Satin Mood Oud Extraixt", brand:"Maison Francis Kurkdjian", gender:"unisex",
  variants:[ { ml:70, price:35000 } ],
  desc:"Version më intensiv i Satin Mood Oud, me prezencë më të theksuar dhe elegancë maksimale.",
  img:"../img/parfumet/83.webp"
},
{ id:"84", name:"Mr Burberry Eau De Parfum", brand:"Burberry", gender:"male",
  variants:[ { ml:50, price:8000 }, { ml:100, price:11500 }, { ml:150, price:14000 } ],
  desc:"Aromë e fuqishme dhe elegante me nota druri të ngrohtë, erëza dhe citrus të freskët, që krijon një karakter modern, magnetik dhe të sofistikuar, ideal për meshkujt që duan të lënë një përshtypje të paharrueshme.", img:"../img/parfumet/84.webp"
},
{ id:"85", name:"Uomo born in Roma Coral Fantasy", brand:"Valentino", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:13500 } ],
  desc:"Aromë e freskët dhe e ëmbël me nota frutash të ndezura dhe lule të buta, që krijon një karakter energjik, elegant dhe të rafinuar.", img:"../img/parfumet/85.webp"
},
{ id:"86", name:"Cherry Smoke", brand:"Tom Ford", gender:"female",
  variants:[ { ml:50, price:39000 } ],
  desc:"Aromë e ëmbël dhe e tymosur, ku qershia e pjekur shoqërohet me drurë të thellë dhe nuanca pikante, duke krijuar një karakter intrigues dhe të paharrueshëm.", img:"../img/parfumet/86.webp"
},
{ id:"87", name:"My Way Parfum", brand:"Giorgio Armani", gender:"female",
  variants:[ { ml:90, price:19500 } ],
  desc:"Një parfum i rafinuar dhe elegant, me nota lulesh të bardha të freskëta, agrume të ndritshme dhe një prekje të drurit të ngrohtë, që sjell ndjesinë e pasurisë dhe delikatesës.", img:"../img/parfumet/87.webp"
},
{ id:"88", name:"Black Opium EDP Ellicit Green", brand:"YSL Yves Saint Laurent", gender:"female",
  variants:[ { ml:75, price:13000 } ],
  desc:"Aromë e freskët dhe joshëse që kombinon notat ikonike të kafesë me dardhë të gjelbër, fiq të ëmbël dhe vanilje kremoze. Sensuale por njëkohësisht energjike, ideale për femra moderne që duan një parfum të ëmbël me një prekje të gjelbër dhe të sofistikuar.",
  img:"../img/parfumet/88.webp"
},
{ id:"89", name:"The One", brand:"Dolce & Gabbana", gender:"male",
  variants:[ { ml:50, price:9000 }, { ml:100, price:12500 }, { ml:150, price:15000 } ],
  desc:"Aromë klasike me nota duhani, qelibar dhe erëza të ngrohta. Shumë elegante dhe ideale për mbrëmje.",
  img:"../img/parfumet/89.webp"
},
{ id:"90", name:"Ultramale", brand:"JPG Jean Paul Gaultier", gender:"male",
  variants:[ { ml:75, price:9500 }, { ml:125, price:12500 } ],
  desc:"Aromë sensuale dhe e freskët, me nota vaniljeje dhe lavande, ideale për çdo ditë dhe çdo mbrëmje.",
  img:"../img/parfumet/90.webp"
},
{ id:"91", name:"Stronger With You Powerfully", brand:"Emporio Armani", gender:"male",
  variants:[ { ml:50, price:10500 }, { ml:100, price:14000 } ],
  desc:"Aromë intensive dhe magnetike me nota të pasura vaniljeje, karamel të butë dhe erëza të ngrohta që ndërthuren me nuanca drurore. Shumë e qëndrueshme dhe me prezencë të fortë, ideale për mbrëmje, evente speciale dhe për meshkuj që duan të lënë një përshtypje të fuqishme dhe joshëse.",
  img:"../img/parfumet/91.webp"
},
{ id:"92", name:"Pour Homme", brand:"Versace", gender:"male",
  variants:[ { ml:100, price:9500 }, { ml:200, price:13500 } ],
  desc:"Aromë freskuese me limon, neroli dhe nota drurore të lehta. Shumë e pastër dhe perfekte për ditë të ngrohta.",
  img:"../img/parfumet/92.webp"
},
{ id:"93", name:"Terre d’Hermès Eau de Toilette", brand:"Hermès", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:14500 }],
  desc:"Agrume të freskëta, piper dhe vetiver krijojnë një aromë tokësore, të sofistikuar dhe shumë elegante. Minimaliste por me klas absolut.",
  img:"../img/parfumet/93.webp"
},
{ id:"94", name:"Soleil Brulant", brand:"Tom Ford", gender:"female",
  variants:[ { ml:50, price:34500 }],
  desc:"Aromë e ngrohtë dhe diellore me nota të vaniljes, kokosit dhe drurit të lehtë, që lë një ndjesi të këndshme dhe relaksuese gjatë gjithë ditës.", img:"../img/parfumet/94.webp"
},
{ id:"95", name:"Elixir", brand:"JPG Jean Paul Gaultier", gender:"male",
  variants:[ { ml:75, price:11500 }, { ml:125, price:15000} ],
  desc: "Një kombinim intensiv dhe sensuel me nota të vaniljes, lulesh dhe druri të ngrohtë. Elegante dhe magnetike, e përshtatshme për mbrëmje speciale.",
  img:"../img/parfumet/top10-7.webp"
},
{ id:"96", name:"Acqua di Giò Parfum Elixir", brand:"Giorgio Armani", gender:"male",
  variants:[ { ml:50, price:16000 }],
  desc:"Interpretim intensiv me nota detare të thella dhe dru të errët. Elegant, i pastër dhe shumë jetëgjatë.",
  img:"../img/parfumet/95.webp"
},

{ id:"97", name:"Gold Edition", brand:"Al Haramain", gender:"unisex",
  variants:[ { ml:60, price:7500 }, { ml:120, price:11500 } ],
  desc:"Një kombinim i sofisticuar druri dhe aromash florale, ideal për çdo ditë elegante.",
  img:"../img/parfumet/96.webp"
},
{ id:"98", name:"Classique EDT", brand:"JPG Jean Paul Gaultier", gender:"female", 
  variants:[ { ml:25, price:6500 }, { ml:50, price:9500 }, { ml:125, price:11500 } ],
  desc:"Një aromë e ndritshme dhe elegante për femrën moderne, me nota të luleve delikate dhe vaniljes që zgjon sensin e sofistikimit dhe freskisë klasike.",
  img:"../img/parfumet/98.webp"
},
{ id:"99", name:"Spicebomb Night Vision EDT", brand:"Viktor & Rolf", gender:"male", 
  variants:[ { ml:50, price:10000 }, { ml:90, price:12500 }  ],
  desc:"Aromë e freskët dhe pikante me nuanca agrumesh dhe druri të butë, që krijon një karakter energjik dhe të sofistikuar për përdorim të përditshëm.",img:"../img/parfumet/99.webp"
},
{ id:"121", name:"Stronger With You Sandalwood", brand:"Emporio Armani", gender:"male",
  variants:[ { ml:100, price:12500 }],
  desc:"Sandalwood kremoz i kombinuar me nota orientale dhe ëmbëlsi të butë. Aromë e rafinuar, elegante dhe me karakter të qetë por të thellë.",
  img:"../img/parfumet/121.webp"
},
{ id:"122", name:"Ombre Leather Parfum", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:17500 }, { ml:100, price:24500 }],
  desc:"Lëkurë e pasur dhe e thellë e kombinuar me nota florale dhe druri të ngrohtë. Një parfum elegant, intensiv dhe modern me prezencë të fortë dhe shumë jetëgjatësi.",
  img:"../img/parfumet/122.webp"
},
{ id:"123", name:"Greenley", brand:"Parfums de Marly", gender:"male",
  variants:[ { ml:75, price:18000 }, { ml:125, price:24500 }],
  desc:"Mollë jeshile e freskët me agrume dhe dru të pastër. Energjik, modern dhe shumë i freskët për çdo sezon.",
  img:"../img/parfumet/123.webp"
},
{ id:"124", name:"French Riviera", brand:"Mancera", gender:"unisex",
  variants:[ { ml:60, price:10000 }, { ml:120, price:14000 }],
  desc:"Aromë e ndritshme me agrume, nota detare dhe lule mesdhetare. E freskët, verore dhe shumë elegante.",
  img:"../img/parfumet/124.webp"
},
{ id:"125", name:"Oud Fleur", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:14000 }, { ml:50, price:24500 }, { ml:100, price:35000 }],
  desc:"Aromë elegante dhe delikate që kombinon oud të rrallë me lule të bardha dhe nota të ngrohta druri, duke krijuar një karakter sofistikuar, të butë dhe të rafinuar që tërheq vëmendjen pa e tepruar.", img:"../img/parfumet/125.webp"
}, 
{ id:"126", name:"L'Interdit Eau de Parfum", brand:"Givenchy", gender:"male",
  variants:[ { ml:80, price:13000 } ],
  desc:"Aromë elegante dhe e thellë me nota pikante, drurore dhe pak ëmbëlsi. Perfekte për stil serioz dhe të sofistikuar.",
  img:"../img/parfumet/126.webp"
},
{ id:"127", name:"Very Good Girl Eau de Parfum", brand:"Carolina Herrera", gender:"female",
  variants:[ { ml:50, price:13000 }, { ml:80, price:16500 }],
  desc:"Një shpërthim modern me litchi dhe trëndafil të kuq mbi bazë vaniljeje të butë. Sensuale, energjike dhe ultra-femërore.",
  img:"../img/parfumet/127.webp"
},
{ id:"128", name:"So Scandal! Eau de Parfum", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:80, price:13500 }],
  desc:"Një shpërthim lulesh të bardha me nota qumështore dhe ëmbëlsi moderne. So Scandal është energjik, i ndritshëm dhe shumë femëror — një aromë që tërheq vëmendje natyrshëm.",
  img:"../img/parfumet/128.webp"
},
{ id:"129", name:"Donna Intense", brand:"Valentino", gender:"female",
  variants:[ { ml:50, price:13500 }, { ml:100, price:18500 } ],
  desc:"Aromë e fuqishme dhe e pasur me nota druri, vaniljeje dhe lulesh, që krijon një karakter intens, elegant dhe i sofistikuar për momentet e veçanta.", img:"../img/parfumet/129.webp"
},
{ id:"130", name:"Prada La Femme", brand:"Prada", gender:"female",
  variants:[ { ml:50, price:10500 }, { ml:100, price:14500 } ],
  desc:"Elegancë femërore dhe sofistikim, me nota florale dhe vaniljeje që magjepsin çdo çast.",
  img:"../img/parfumet/130.webp"
},
{ id:"131", name:"Mancera Black Noir", brand:"Mancera", gender:"unisex",
  variants:[ { ml:120, price:16000 } ],
  desc:"Një aromë sensuale dhe e fortë, me nuanca të ëmbla dhe druri, për prezencë të paharrueshme.",
  img:"../img/parfumet/131.webp"
},
{ id:"132", name:"Tuscan Leather", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:14000 }, { ml:50, price:24500 }, { ml:100, price:35000 }],
  desc:"Aromë elegante dhe delikate që kombinon oud të rrallë me lule të bardha dhe nota të ngrohta druri, duke krijuar një karakter sofistikuar, të butë dhe të rafinuar që tërheq vëmendjen pa e tepruar.", img:"../img/parfumet/132.webp"
},
{ id:"133", name:"Good Girl Midnight", brand:"Carolina Herrera", gender:"female",
  variants:[ { ml:80, price:14000 } ],
  desc:"Aromë misterioze dhe joshëse, me nota të ëmbla dhe të thella, perfekte për mbrëmjet speciale.",
  img:"../img/parfumet/133.webp"
},
{ id:"134", name:"Armaf Club de Nuit", brand:"Armaf", gender:"male",
  variants:[ { ml:105, price:5000 } ],
  desc:"Një aromë klasike dhe e sofistikuar për burrin modern, me nota freskie dhe druri që mbajnë tërheqësinë gjatë gjithë ditës.",
  img:"../img/parfumet/134.webp"
},
{ id:"135", name:"Arabians Musk", brand:"Montale", gender:"unisex",
  variants:[ { ml:100, price:14000 } ],
  desc:"Një aromë druri dhe musk e rafinuar, që sjell ndjesinë e luksit arabik modern.",
  img:"../img/parfumet/135.webp"
},
{ id:"136", name:"Montale Infinity", brand:"Montale", gender:"unisex",
  variants:[ { ml:100, price:13000 } ],
  desc:"Një aromë intensive dhe e gjatë, që kombinon nota orientale dhe florale për një karakter të paharrueshëm.",
  img:"../img/parfumet/136.webp"
},
{ id:"137", name:"Black Orchid Parfum", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:18000 }, { ml:100, price:24000 } ],
  desc:"Një aromë misterioze dhe e fuqishme, me nota lulesh dhe orientale, për prezencë të paharrueshme.",
  img:"../img/parfumet/137.webp"
},
{ id:"138", name:"Scandal Absolute", brand:"JPG Jean Paul Gaultier", gender:"male",
  variants:[ { ml:100, price:15500 }, { ml:150, price:18000 } ],
  desc:"Parfum i fuqishëm dhe i rafinuar, me nota të pasura druri dhe vaniljeje, që zgjon të gjitha shqisat dhe lë pas një shenjë të paharrueshme elegant dhe sofistikuar.", 
  img:"../img/parfumet/138.webp"
},
{ id:"139", name:"Tobbaco Edition", brand:"Al Haramain", gender:"unisex",
  variants:[ { ml:60, price:7500 }, { ml:100, price:10500 } ],
  desc:"Kompozim i ngrohtë dhe maskulin me nota tobako dhe druri, ideal për mbrëmje elegante.",
  img:"../img/parfumet/139.webp"
},
{ id:"140", name:"Bitter Peach", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:19000 }, { ml:50, price:35500 }, { ml:100, price:45000 }],
  desc:"Aromë e freskët dhe e ndritshme me nota citrus dhe detare, e shoqëruar me nuanca të lehta druri dhe vaniljeje, që krijon ndjesinë e një dite të këndshme pranë bregut.", img:"../img/parfumet/140.webp"
}, 
{ id:"141", name:"MYSLF Eau de Parfum", brand:"YSL Yves Saint Laurent", gender:"male",
  variants:[ { ml:30, price:9500 }, { ml:50, price:11000 }, { ml:100, price:15000 }],
  desc:"Portokall i freskët, lule portokalli dhe dru modern krijojnë një aromë të pastër dhe elegante. MYSLF është identitet, stil dhe vetëbesim.",
  img:"../img/parfumet/141.webp"
},
{ id:"142", name:"1 Million EDT", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:8500 }, { ml:100, price:11500 } ],
  desc:"Aromë ikonike me nota kanellë, lëkurë dhe qelibar. E ngrohtë, e ëmbël dhe shumë joshëse.",
  img:"../img/parfumet/142.webp"
},
{ id:"143", name:"Scandal Le Parfum", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:9000 }, { ml:50, price:13000 }, { ml:80, price:17000 }],
  desc:"Version më i thellë dhe më i pasur i Scandal, me vanilje intensive, jasmin dhe nota të kripura-karamel. Një parfum i fortë, sensual dhe modern për mbrëmje me karakter.",
  img:"../img/parfumet/143.webp"
},
{ id:"144", name:"The Scent Elixir", brand:"Hugo Boss", gender:"male",
  variants:[ { ml:100, price:17000 }],
  desc:"Eliksir intensiv me nota të pasura druri dhe vanilje të thellë. Shumë jetëgjatë dhe me karakter të fortë.",
  img:"../img/parfumet/144.webp"
},
{ id:"145", name:"YSL Y Elixir", brand:"YSL Yves Saint Laurent", gender:"male",
  variants:[ { ml:60, price:16500 } ],
  desc:"Aromë e fuqishme dhe e freskët, me nota agrume dhe druri, perfekte për burrin modern dhe të sofistikuar.",
  img:"../img/parfumet/145.webp"
},
{ id:"146", name:"L’Interdit Eau de Parfum Intense", brand:"Givenchy", gender:"female",
  variants:[ { ml:80, price:14000 }],
  desc:"Tuberozë misterioze, vanilje e errët dhe nuanca druri krijojnë një aromë të thellë dhe sensuale. Elegancë franceze me karakter të fortë.",
  img:"../img/parfumet/146.webp"
},
{ id:"147", name:"Armani Code", brand:"Giorgio Armani", gender:"male",
  variants:[ { ml:125, price:13500 } ],
  desc:"Një aromë sensuale dhe e sofistikuar, me nuanca pikante dhe druri të rafinuar, për burrin modern.",
  img:"../img/parfumet/147.webp"
},
{ id:"148", name:"Montale Honey Aoud", brand:"Montale", gender:"unisex",
  variants:[ { ml:100, price:12500 } ],
  desc:"Një aromë luksoze dhe e ëmbël, ku bashkohen nota mediterane dhe druri, ideale për çdo moment elegant.",
  img:"../img/parfumet/148.webp"
},
{ id:"149", name:"Roses Prick", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:19000 }, { ml:50, price:35500 }, { ml:100, price:45000 }],
  desc:"Një aromë e fuqishme dhe e ndritshme me trëndafila të freskët, nota të ëmbla dhe druri të ngrohtë, që lë një përshtypje elegante dhe magnetike.", img:"../img/parfumet/149.webp"
},
{ id:"150", name:"Ambre Eccentrico", brand:"Giorgio Armani", gender:"unisex",
  variants:[ { ml:50, price:19000 } ],
  desc:"Aromë luksoze orientale me qelibar të pasur, vanilje dhe nota drurore të buta. Shpreh klas, elegancë dhe thellësi të veçantë.",
  img:"../img/parfumet/150.webp"
},
{ id:"151", name:"The Scent Le Parfum", brand:"Hugo Boss", gender:"male",
  variants:[ { ml:100, price:14000 }],
  desc:"Version më intensiv me iris, lëkurë dhe dru të ngrohtë. Elegant, i thellë dhe me prezencë të fortë.",
  img:"../img/parfumet/151.webp"
},
{ id:"152", name:"Good Girl Blush", brand:"Carolina Herrera", gender:"female",
  variants:[ { ml:30, price:9000 }, { ml:50, price:13000 }],
  desc:"Delikate dhe romantike me nota bozhure dhe vanilje të lehtë. Një aromë e ëmbël, e freskët dhe perfekte për çdo ditë.",
  img:"../img/parfumet/152.webp"
},
{ id:"153", name:"Encelade", brand:"Marc-Antoine Barrois", gender:"unisex",
  variants:[ { ml:30, price:11500 }, { ml:100, price:19500 } ],
  desc:"Aromë e sofistikuar dhe e pasur me nuanca druri dhe aromatike, që jep ndjesinë e elegancës dhe luksit modern. Ideale për çdo rast ku dëshiron të dallohesh.",
  img:"../img/parfumet/153.webp"
},
{ id:"154", name:"Invictus Victory", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:9500 }, { ml:100, price:13500 } ],
  desc:"Një aromë e fuqishme dhe e jashtëzakonshme që kombinon freskinë dhe energjinë me elegancën maskuline.",
  img:"../img/parfumet/154.webp"
},
{ id:"155", name:"Explorer EDP", brand:"Montblanc", gender:"male",
  variants:[ { ml:60, price:7000 }, { ml:100, price:10000 }, { ml:200, price:14000 } ],
  desc:"Aromë drurore-aromatike me bergamot, vetiver dhe patchouli. Jep ndjesi aventure dhe freskie moderne.",
  img:"../img/parfumet/155.webp"
},
{ id:"156", name:"Afnan 9PM", brand:"Afnan", gender:"unisex",
  variants:[ { ml:100, price:5000 } ],
  desc:"Aromë e ëmbël dhe magnetizuese me nota frutash dhe vaniljeje, perfekte për mbrëmjet e veçanta.",
  img:"../img/parfumet/156.webp"
},
{ id:"157", name:"Tom Ford Cafe Rose", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:16000 }, { ml:100, price:23000 } ],
  desc:"Një aromë luksoze dhe elegante, me nota trëndafili dhe kafeneje, që sjell një ndjesi pasioni dhe sofistikimi.",
  img:"../img/parfumet/157.webp"
},
{ id:"158", name:"YSL Y Le Parfume", brand:"YSL Yves Saint Laurent", gender:"male",
  variants:[ { ml:100, price:17000 } ],
  desc:"Një aromë e fuqishme dhe magnetizuese, me nota freskie dhe druri, për burrin modern dhe të sofistikuar.",
  img:"../img/parfumet/158.webp"
},
{ id:"159", name:"Azzaro The Most Wanted EDP Intense", brand:"Azzaro", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:12500 } ],
  desc:"Një version më intensiv i klasikut, me nuanca druri dhe agrume për një prezencë të fuqishme.",
  img:"../img/parfumet/159.webp"
},
{ id:"160", name:"Fleur De Portofino", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:9500 }, { ml:50, price:14000 }, { ml:100, price:19000 }],
  desc:"Aromë e freskët dhe e ndritshme me nota citrus, lule të bardha dhe nuanca delikate detare, që sjell ndjesinë e një mëngjesi të ndritshëm pranë bregut të Mesdheut, duke krijuar një karakter elegant, të pastër dhe magnetik.", img:"../img/parfumet/160.webp"
}, 
{ id:"161", name:"Le Belle Eau de Parfum", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:8000 }, { ml:50, price:12000 }, { ml:100, price:15000 } ],
  desc:"Aromë elegante dhe magnetike me nota frutash dhe lulesh, për prezencë të paharrueshme.",
  img:"../img/parfumet/161.webp"
},
{ id:"162", name:"Lattafa Khamrah", brand:"Lattafa", gender:"unisex",
  variants:[ { ml:100, price:5500 } ],
  desc:"Një aromë e freskët dhe e ndritshme, perfekte për çdo ditë, që zgjon energji dhe optimizëm.",
  img:"../img/parfumet/162.webp"
},
{ id:"163", name:"Satin Mood Oud EDP", brand:"Maison Francis Kurkdjian", gender:"unisex",
  variants:[ { ml:70, price:23500 } ],
  desc:"Kompozim sensuel me oud dhe nota të ëmbla, për një prezencë të paharrueshme në çdo moment.",
  img:"../img/parfumet/163.webp"
},
{ id:"164", name:"Le Belle Paradise Garden", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:10500 }, { ml:50, price:14500 } ],
  desc:"Një aromë e ëmbël dhe e freskët, që sjell ndjesinë e një kopshti të lulëzuar pranveror dhe elegancë femërore.",
  img:"../img/parfumet/164.webp"
},
{ id:"165", name:"Givenchy Society", brand:"Givenchy", gender:"female",
  variants:[ { ml:60, price:10500 }, { ml:100, price:13500 } ],
  desc:"Një aromë elegante dhe moderne, me nuanca frutash dhe lulesh që joshin dhe magjepsin.",
  img:"../img/parfumet/165.webp"
},
{ id:"166", name:"Goddess Intense", brand:"Burberry", gender:"female",
  variants:[ { ml:30, price:9000 }, { ml:100, price:17500 }],
  desc:"Vanilje e thellë me kakao dhe lule të bardha. Version më intensiv, i ngrohtë dhe shumë femëror.",
  img:"../img/parfumet/166.webp"
},
{ id:"167", name:"Neroli Portofino", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:30, price:14000 }, { ml:50, price:25000 }, { ml:100, price:36000 }],
  desc:"Aromë e freskët dhe e ndritshme me nota neroli, bergamotë dhe citrus të shtrydhur, e kombinuar me nuanca të lehta detare dhe florale, që sjell ndjesinë e një dite të ngrohtë dhe të pastër pranë bregdetit të Mesdheut, duke krijuar një karakter elegant, energjik dhe të rafinuar.", img:"../img/parfumet/167.webp"
}, 
{ id:"168", name:"Scandal", brand:"JPG Jean Paul Gaultier", gender:"male",
  variants:[ { ml:50, price:9000 }, { ml:100, price:12000 } ],
  desc:"Një aromë energjike dhe magnetike që kombinon freskinë e agrumeve me nota të thella druri, duke krijuar një prezencë të paharrueshme dhe tërheqëse për burrin modern.", 
  img:"../img/parfumet/168.webp"
},
{ id:"169", name:"Ruby Edition", brand:"Al Haramain", gender:"unisex",
  variants:[ { ml:60, price:7500 }, { ml:100, price:10500 } ],
  desc:"Aromë e ëmbël dhe e pasur me nota frutash dhe lulesh, për prezencë të sofistikuar.",
  img:"../img/parfumet/169.webp"
},
{ id:"170", name:"Versace Dylan Blue", brand:"Versace", gender:"male",
  variants:[ { ml:30, price:6500 }, { ml:50, price:8000 }, { ml:100, price:10500 }, { ml:200, price:13500 } ],
  desc:"Një aromë moderne dhe e freskët me nuanca citrus dhe druri, ideale për burrin energjik dhe të sofistikuar.",
  img:"../img/parfumet/170.webp"
},
{ id:"171", name:"Le Belle", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:8500 }, { ml:50, price:11500 }, { ml:100, price:15500 } ],
  desc:"Një kompozim i sofistikuar dhe sensual, me nota të luleve dhe vaniljes, për një prezencë të paharrueshme.",
  img:"../img/parfumet/171.webp"
},
{ id:"172", name:"Invictus Legend", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:9000 }, { ml:100, price:12000 } ],
  desc:"Aromë sportive dhe e freskët me nota detare dhe agrume, për burrin që sfidon çdo ditë.",
  img:"../img/parfumet/172.webp"
},
{ id:"173", name:"Dolce & Gabbana Light Blue", brand:"Dolce & Gabbana", gender:"female",
  variants:[ { ml:40, price:5000 }, { ml:75, price:7500 }, { ml:125, price:10500 }, { ml:200, price:13000 } ],
  desc:"Një aromë e freskët dhe e lehtë, që përmban nota citrus dhe lule, perfekte për ditët e ngrohta verore.",
  img:"../img/parfumet/173.webp"
},
{ id:"174", name:"L'Homme Prada Intense", brand:"Prada", gender:"male",
  variants:[ { ml:100, price:14500 } ],
  desc:"Aromë e thellë, sensuale dhe e rafinuar për burrin modern që dëshiron të lërë gjurmë.",
  img:"../img/parfumet/174.webp"
},
{ id:"175", name:"Azzaro The Most Wanted Parfum", brand:"Azzaro", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:12500 } ],
  desc:"Intens dhe i paharrueshëm, një aromë që magnetizon dhe lë një shenjë të thellë.",
  img:"../img/parfumet/175.webp"
},
{ id:"176", name:"Parfums de Marly Layton", brand:"Parfums de Marly", gender:"unisex",
  variants:[ { ml:75, price:20000 }, { ml:125, price:27500 }, { ml:200, price:36000 } ],
  desc:"Një aromë elegante, e ndërtuar me nota frutash dhe druri, për një prezencë të paharrueshme.",
  img:"../img/parfumet/176.webp"
},
{ id:"177", name:"Good Girl Supreme", brand:"Carolina Herrera", gender:"female",
  variants:[ { ml:50, price:13500 }, { ml:80, price:17000 }],
  desc:"Versioni më intensiv dhe i pasur i Good Girl, me fruta të errëta dhe tonka bean kremoze. Luksoz, i thellë dhe shumë joshës.",
  img:"../img/parfumet/177.webp"
},
{ id:"178", name:"Antoine Ganymeda", brand:"Marc-Antoine Barrois", gender:"male",
  variants:[ { ml:30, price:12500 }, { ml:100, price:19500 } ],
  desc:"Një aromë e rafinuar dhe e fuqishme me nuanca druri dhe lulesh, për burrin elegant dhe modern.",
  img:"../img/parfumet/178.webp"
},
{ id:"179", name:"Azzaro Wanted by Night", brand:"Azzaro", gender:"male",
  variants:[ { ml:50, price:9000 }, { ml:100, price:11500 } ],
  desc:"Një aromë misterioze dhe e thellë për netët e veçanta, me nota të ngrohta druri dhe vaniljeje.",
  img:"../img/parfumet/179.webp"
},
{ id:"180", name:"Fougere D'Argent", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:21000 }, { ml:100, price:31000 }],
  desc:"Aromë elegante me jasmin të pasur, nota të ëmbla dhe druri të ngrohtë, që krijon një ndjesi sofistikuese dhe delikate.", img:"../img/parfumet/180.webp"
},
{ id:"181", name:"Donna born in Roma Uomo Intense", brand:"Valentino", gender:"male",
  variants:[ { ml:50, price:10500 }, { ml:100, price:14000 } ],
  desc:"Aromë e thellë dhe e sofistikuar me nuanca druri dhe erëza të ngrohta, që krijon një karakter të fuqishëm, modern dhe magnetik.", img:"../img/parfumet/181.webp"
},
{ id:"182", name:"Classique Eau de Parfum", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:7000 }, { ml:50, price:10000 }, { ml:100, price:13000 } ],
  desc:"Version i pasuruar i Classique, më i qëndrueshëm dhe sensual.",
  img:"../img/parfumet/182.webp"
},
{ id:"183", name:"Parfum de Marly Pegasus", brand:"Parfums de Marly", gender:"unisex",
  variants:[ { ml:75, price:20500 }, { ml:125, price:27500 }, { ml:200, price:35000 } ],
  desc:"Një aromë legjendare, elegante dhe e fuqishme, me nota të ëmbla dhe druri, ideale për një prezencë të paharrueshme.",
  img:"../img/parfumet/183.webp"
},
{ id:"184", name:"Paradise Garden", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:75, price:11500 }, { ml:125, price:14500 } ],
  desc:"Një aromë freskuese dhe e ëmbël, me nuanca frutash dhe lulesh, që sjell një ndjesi lumturie dhe freskie.",
  img:"../img/parfumet/184.webp"
},
{ id:"185", name:"The Scent Magnetic", brand:"Hugo Boss", gender:"male",
  variants:[ { ml:50, price:10500 }, { ml:100, price:14000 }],
  desc:"Aromë e ëmbël dhe magnetike me vanilje dhe fruta të errëta. Moderne dhe shumë tërheqëse.",
  img:"../img/parfumet/185.webp"
},
{ id:"186", name:"Power of You", brand:"Emporio Armani", gender:"male",
  variants:[ { ml:30, price:8000 }, { ml:50, price:10500 }, { ml:100, price:13500 }],
  desc:"Aromë moderne dhe e fuqishme, me nota druri, vanilje dhe citrus, që jep ndjesinë e forcës dhe vetëbesimit. Perfekte për çdo ditë apo për raste speciale, duke lënë një përshtypje të paharrueshme.",
  img:"../img/parfumet/186.webp"
},
{ id:"187", name:"Le Belle Le Parfume", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:9000 }, { ml:50, price:13000 }, { ml:100, price:16500 } ],
  desc:"Version më intensiv dhe i rafinuar i Le Belle, për elegancë maksimale.",
  img:"../img/parfumet/187.webp"
},
{ id:"188", name:"Mandarino Di Amalfi", brand:"Tom Ford", gender:"unisex",
  variants:[ { ml:50, price:25000 }, { ml:100, price:36000 }],
  desc:"Aromë e freskët dhe e ndritshme me nota të shtrydhura mandarine, citrus dhe nuanca lulesh të buta, që sjell ndjesinë e një mëngjesi të diellit pranë bregdetit të Amalfit, duke krijuar një karakter energjik, i gjallë dhe elegant.", img:"../img/parfumet/188.webp"
},
{ id:"189", name:"Invictus Victory Elixir", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:11000 }, { ml:100, price:14500 } ],
  desc:"Një aromë energjike dhe elegante, që kombinon freskinë e agrumeve me nuanca druri dhe vaniljeje, ideale për fituesin modern.",
  img:"../img/parfumet/189.webp"
},
{ id:"190", name:"1 Million Elixir", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:10500 }, { ml:100, price:14000 }],
  desc:"Shurup frutash të kuqe, vanilje e ëmbël dhe dru të thellë. Një aromë luksoze dhe shumë e fuqishme për praninë që bie në sy.",
  img:"../img/parfumet/190.webp"
},
{ id:"191", name:"Invictus Platinum", brand:"Paco Rabanne", gender:"male",
  variants:[ { ml:50, price:10000 }, { ml:100, price:13500 } ],
  desc:"Elegant dhe i fuqishëm, një përzierje druri dhe citrus për një prezencë të paharrueshme.",
  img:"../img/parfumet/191.webp"
},
{ id:"192", name:"Bianco Latte", brand:"Giardini di Toscana", gender:"unisex",
  variants:[ { ml:100, price:14000 }],
  desc:"Vanilje kremoze me karamel dhe nota qumështore të ngrohta. Aromë shumë e ëmbël, komode dhe jashtëzakonisht jetëgjatë.",
  img:"../img/parfumet/192.webp"
},
{ id:"193", name:"Montale Oud Tobacco", brand:"Montale", gender:"unisex",
  variants:[ { ml:100, price:12000 } ],
  desc:"Një aromë e fuqishme dhe e thellë e oud-it dhe duhanit, që lë pas një shenjë misterioze.",
  img:"../img/parfumet/193.webp"
},
{ id:"194", name:"Montale Starry Nights", brand:"Montale", gender:"unisex",
  variants:[ { ml:100, price:13000 } ],
  desc:"Një aromë misterioze dhe e thellë, me nota orientale dhe druri, ideale për mbrëmjet elegante.",
  img:"../img/parfumet/194.webp"
},
{ id:"195", name:"Scandal Absolu Parfum Concentré", brand:"JPG Jean Paul Gaultier", gender:"female",
  variants:[ { ml:30, price:9500 }, { ml:50, price:13500 }, { ml:80, price:18000 }],
  desc:"Koncentrim maksimal me thellësi orientale, mjaltë të errët dhe nota të pasura lulesh. Absolu është luksoz, intensiv dhe shumë jetëgjatë, për ata që duan aromë me impakt të fortë.",
  img:"../img/parfumet/195.webp"
},
{ id:"196", name:"Mancera Aoud Lemon Mint", brand:"Mancera", gender:"unisex",
  variants:[ { ml:60, price:10000 }, { ml:120, price:14000 } ],
  desc:"Një aromë freskuese dhe e fuqishme, që kombinon citrus dhe nota druri, për një karakter energjik dhe modern.",
  img:"../img/parfumet/196.webp"
},
{ id:"197", name:"Atomic Rose", brand:"Initio Parfums Privés", gender:"unisex",
  variants:[ { ml:100, price:26000 } ],
  desc:"Një aromë e rafinuar dhe e fuqishme, me nota trëndafili dhe druri, ideale për momentet unike.",
  img:"../img/parfumet/197.webp"
},
{ id:"198", name:"Mancera Tonka Cola", brand:"Mancera", gender:"unisex",
  variants:[ { ml:60, price:10000 }, { ml:120, price:14000 } ],
  desc:"Një aromë e ëmbël dhe freskuese, me nuanca kola dhe vaniljeje, perfekte për çdo ditë.",
  img:"../img/parfumet/198.webp"
},
{ id:"199", name:"Azzaro Wanted", brand:"Azzaro", gender:"male",
  variants:[ { ml:100, price:10000 } ],
  desc:"Aromë e freskët dhe e energjike, me karakter të fortë dhe prezencë të paharrueshme.",
  img:"../img/parfumet/199.webp"
},
{ id:"200", name:"Tom Ford Noir Extreme", brand:"Tom Ford", gender:"male",
  variants:[ { ml:50, price:15000 }, { ml:100, price:20000 } ],
  desc:"Një kompozim i sofistikuar dhe i thellë, me nota orientale dhe vaniljeje, për një prezencë të paharrueshme.",
  img:"../img/parfumet/200.webp"
},
{ id:"201", name:"Musc Nude", brand:"Narciso Rodrigues", gender:"female",
  variants:[ { ml:50, price:8000 }, { ml:100, price:13000 } ],
  desc: "Një aromë e butë dhe sensuale me musk, lule të bardha dhe nota të ngrohta, që krijon një efekt 'second skin' shumë tërheqës dhe elegant.",
  img:"../img/parfumet/201.webp"
},
{ id:"202", name:"Jawhara", brand:"Maissa", gender:"unisex",
  variants:[ {ml:20, price:4000}, { ml:50, price:12000 }, { ml:100, price:19000 } ],
  desc: "Një aromë orientale dhe misterioze me nota agrumesh, lule portokalli dhe patchouli, e mbështetur nga baza e ngrohtë me amber dhe vanilje për një prezencë sensuale dhe të paharrueshme.",
  img:"../img/parfumet/202.webp"
},
{ id:"203", name:"Set The One", brand:"Dolce & Gabbana", gender:"female",
  variants:[ {ml:75, price:14000}],
  desc: "Një set luksoz dhe elegant që përfshin parfum 75 ml, mini parfum 10 ml dhe body lotion 50 ml, i ndërtuar rreth aromës ikonike Dolce & Gabbana The One. Me nota të ngrohta të mandarinës, trëndafilit dhe vaniljes, krijon një kombinim perfekt mes elegancës dhe sensualitetit, duke dhënë një prezencë të butë, femërore dhe shumë tërheqëse me qëndrueshmëri të lartë.",
  img:"../img/parfumet/203.webp"
},
{ id:"204", name:"Set King", brand:"Dolce & Gabbana", gender:"male",
  variants:[ {ml:100, price:14000}],
  desc: "Një set modern dhe karizmatik që përfshin parfum 100 ml, deodorant stick dhe shampo 50 ml, i ndërtuar rreth aromës energjike Dolce & Gabbana K. Me nota të freskëta agrumesh, livando dhe bazë druri me patchouli e vetiver, krijon një kombinim perfekt mes freskisë dhe maskulinitetit, duke dhënë një prezencë të fortë, elegante dhe shumë tërheqëse për çdo moment të ditës.",
  img:"../img/parfumet/204.webp"
},

{ id:"205", name:"Ambassador", brand:"Ambassador", gender:"male",
  variants:[ { ml:50, price:9500 }, { ml:100, price:13000 } ],
  desc: "Një aromë moderne dhe karizmatike me kombinim të freskisë frutore dhe thellësisë drunore, me nota të mandarinës, mollës dhe mango të mbështetura nga vanilja dhe amber, për një prezencë të fortë, elegante dhe shumë tërheqëse.",
  img:"../img/parfumet/205.webp"
},

{ id:"206", name:"Crystal Noir", brand:"Versace", gender:"female",
  variants:[ { ml:50, price:9000 }, { ml:90, price:12500 } ],
  desc: "Një aromë misterioze dhe sensuale me nota pikante dhe lule të bardha, e pasuruar me kokos dhe bazë të ngrohtë amber e musk, që krijon një prezencë elegante dhe shumë tërheqëse.",
  img:"../img/parfumet/206.webp"
},
];
