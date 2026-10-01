const pages={
 about:{title:'認識 M+大雅教會',intro:'一個以耶穌為中心、彼此陪伴、一起祝福大雅的屬靈家。'},
 faith:{title:'我們的信仰宣告',intro:'我們以聖經為信仰與生活的根基，在真理、恩典與盼望中同行。'},
 team:{title:'陪伴我們的團隊',intro:'認識陪伴教會、家庭與下一代一起成長的牧者與同工。'},
 myc:{title:'青年教會 MYC',intro:'在信仰、友情與生活中一起成長，讓年輕世代活出有盼望的生命。'},
 contact:{title:'歡迎來到 M+',intro:'每個主日都為你留了一個位置。期待有機會認識你，陪你一起走一段。'}
};
const pageDescriptions={
 about:'認識 M+大雅教會的異象、故事與服事方向，一起在台中大雅建立彼此陪伴的屬靈家庭。',
 faith:'了解 M+大雅教會以聖經為根基的信仰宣告，以及我們對上帝、耶穌、教會與永恆盼望的相信。',
 team:'認識 M+大雅教會的牧者與同工團隊，一起陪伴教會、家庭、青年與下一代成長。',
 myc:'MYC M+青年教會陪伴年輕人在敬拜、友情與生活中成長，探索信仰、生命方向與呼召。',
 contact:'M+大雅教會主日聚會與聯絡資訊：每週日上午10:00至11:30，台中市大雅區神林南路513巷13號。'
};
const faith=[
 ['聖經','我們相信新舊約聖經都是神所默示的，是基督徒信仰與生活的最高權威。'],
 ['上帝','我們相信聖父、聖子、聖靈，三位一體的獨一真神；祂創造、護理並掌管天地萬有。'],
 ['耶穌基督','我們相信耶穌基督是神的獨生子，是真神也是真人。祂道成肉身來到世間，為拯救世人、承擔世人的罪而被釘十字架；第三日復活、升天，並且將再來。'],
 ['人','我們相信人按照神的形象受造，原為與神相交並領受祝福；人因罪與神隔絕，唯有信靠耶穌才能與神和好、被稱為義，並靠著聖靈活出更新的生命。'],
 ['教會','教會是基督的身體，由神的兒女一同建造。基督是教會的頭，信徒彼此成全、各盡其職，一同建立基督的身體。'],
 ['盼望','我們相信耶穌基督將要再來，審判活人與死人；屬主的人將永遠與主同在，在新天新地中敬拜、相交，享受神的喜樂與榮耀。']
];
const team=[
 {name:'吳俊璋牧師、謝碧鳳師母',role:'主任牧師 · 師母',note:'陪伴教會家庭在信仰中扎根，在生活裡彼此扶持。',initial:'吳'},
 {name:'邵鈺庭姐妹',role:'青年教會輔導 · 牧師辦公室',note:'陪伴青年與教會日常服事，一起探索呼召與方向。',initial:'邵',photo:'assets/team/shao-yuting.png'},
 {name:'曾恩茹姐妹',role:'青年教會輔導 · 小太陽課輔',note:'關心青年與孩子的成長，陪伴每個家庭建立盼望。',initial:'曾',photo:'assets/team/zeng-enru.png'}
];
const history=[
 ['1996','同工看見大雅、上楓地區的福音需要，在禱告中尋求神的心意，並為當地福音工作代禱。'],
 ['2011','經過尋求與禱告，同工開始尋找開拓地點與聚會場所；年初洽談民生路四段一樓約 25 坪的會堂空間，並於 3 月簽約。10 月因聚會空間不足搬遷至民生路四段另一處。'],
 ['2012','一年後因人數增長、租約到期，搬遷至大雅市區學府路 138 號，服事範圍也擴及整個大雅區。'],
 ['2015','11 月因聚會空間不足，搬遷至神林南路 641 巷 1 號 1 樓（藍鵲大樓）。'],
 ['2022–2023','2022 年 12 月 31 日因租約因素暫遷同棟 2 樓的課輔班教室聚會，維持一年。2023 年 12 月尋得現址，預備新的聚會空間。'],
 ['2024','1 月開始整修新會堂，並於 3 月 31 日舉行現堂感恩禮拜。'],
 ['2026','正式以「M+大雅教會」為名，繼續在大雅服事，成為這座城市的祝福。']
];
const content=document.querySelector('#page-content');
const params=new URLSearchParams(location.search);
const page=pages[params.get('page')]?params.get('page'):'about';
document.title=`${pages[page].title}｜M+大雅教會`;
document.querySelector('meta[name="description"]').content=pageDescriptions[page];
const canonical=`https://mchurch.online/about.html?page=${page}`;
document.querySelector('#canonical-url').href=canonical;
document.querySelector('#og-title').content=document.title;
document.querySelector('#og-description').content=pageDescriptions[page];
document.querySelector('#og-url').content=canonical;
document.querySelector('#page-title').textContent=pages[page].title;
document.querySelector('#page-intro').textContent=pages[page].intro;
document.querySelectorAll('.section-nav a').forEach(link=>{if(link.dataset.page===page){link.classList.add('active');link.setAttribute('aria-current','page');}});
const icon=(symbol)=>`<span class="card-icon" aria-hidden="true">${symbol}</span>`;
function renderAbout(){return `
 <section class="intro-grid"><div class="intro-card intro-feature"><span class="eyebrow dark">OUR HEART</span><h2>我們是 M+ CHURCH！</h2><p>一間承接使命、樂於服事、充滿動力的教會。M+ 是我們一起回應呼召的記號，也是向每個人敞開的家。</p><div class="pillars"><div><b>M</b><span>MISSION<small>承接國度使命</small></span></div><div><b>M</b><span>MINISTER<small>樂於服事他人</small></span></div><div><b>M</b><span>MOTIVATION<small>充滿信心與動力</small></span></div></div></div><aside class="verse-card"><span class="verse-label">OUR VISION</span><p>「耶穌走遍各城各鄉，在會堂裡教訓人，宣講天國的福音，又醫治各樣的病症。」</p><small>馬太福音 9:35</small></aside></section>
 <section class="about-photo-story"><div class="photo-frame"><img src="https://images.unsplash.com/photo-1693857072311-0c0ee8e664ba?auto=format&amp;fit=crop&amp;w=1600&amp;q=82" alt="陽光映入教會空間的意境示意圖" loading="lazy" decoding="async"><span class="photo-caption">一束光，為回家的人留一個位置</span></div><div class="photo-story-copy"><span class="eyebrow dark">A PLACE TO BELONG</span><p class="photo-index">01 <i></i> HOME</p><h2>一個留著燈，<br>也留著位置的家。</h2><p>信仰不只在禮拜堂裡，也在每一次傾聽、每一頓飯、每一段願意同行的日常裡。</p><a class="inline-link" href="about.html?page=team">認識陪伴你的人 <span aria-hidden="true">↗</span></a></div><a class="photo-credit" href="https://unsplash.com/photos/sunlight-streaming-through-the-windows-of-a-church-NPY0NlY6QdI" target="_blank" rel="noopener">意境照片：Myrin van Putten / Unsplash ↗</a></section>
 <section class="section-block"><div class="section-heading"><span class="eyebrow dark">OUR VISION</span><h2>作困苦流離者的牧人</h2><p>看見需要，以憐憫回應；傳揚盼望，也陪伴生命。</p></div><div class="vision-grid"><article class="vision-card"><span>01</span><h3>面向世界</h3><p>教導真理、傳揚福音、關懷身心需要。</p></article><article class="vision-card"><span>02</span><h3>面向教會</h3><p>建造門徒、成全彼此、差派工人一起服事。</p></article></div></section>
 <section class="section-block history-block"><div class="section-heading"><span class="eyebrow dark">OUR STORY</span><h2>在大雅，一起寫下故事</h2><p>我們的故事仍在繼續，期待你加入，一起成為這座城市的祝福。</p></div><ol class="timeline">${history.map(([year,text])=>`<li><span>${year}</span><p>${text}</p></li>`).join('')}</ol></section>
 <section class="callout"><div><span class="eyebrow">YOU ARE WELCOME</span><h2>家裡為你留好位置了</h2><p>無論你正走在人生哪一段路，都歡迎來認識我們。</p></div><a class="button light" href="about.html?page=contact">第一次來訪 <span aria-hidden="true">↗</span></a></section>`;}
function renderFaith(){return `<section class="section-block"><div class="section-heading"><span class="eyebrow dark">WHAT WE BELIEVE</span><h2>以真理為根，以愛彼此相連</h2><p>這些信仰核心帶領我們認識神、理解生命，也學習如何一起生活。</p></div><div class="belief-grid">${faith.map(([title,text],i)=>`<article class="belief-card"><span class="belief-number">${String(i+1).padStart(2,'0')}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section><section class="callout"><div><span class="eyebrow">LIFE TOGETHER</span><h2>信仰也在日常裡實踐</h2><p>我們歡迎你來參加聚會，認識 M+ 的家人。</p></div><a class="button light" href="about.html?page=contact">聚會資訊 <span aria-hidden="true">↗</span></a></section>`;}
function renderTeam(){return `<section class="section-block"><div class="section-heading team-heading"><span class="eyebrow dark">MEET OUR TEAM</span><h2>和你一起走的同工</h2><p>以真誠的陪伴服事教會與社區，和不同世代一起成長。</p><span class="team-heading-mark" aria-hidden="true">M+<small>FAMILY</small></span></div><div class="team-grid">${team.map((person,i)=>`<article class="team-card"><div class="portrait portrait-${i+1}">${person.photo?`<img src="${person.photo}" alt="${person.name}" loading="lazy" decoding="async">`:`<span aria-hidden="true">${person.initial}</span>`}<i aria-hidden="true">M+</i><b class="portrait-label" aria-hidden="true">M+ FAMILY</b></div><div class="team-copy"><span class="team-kicker">${person.role.split(' · ')[0]}</span><h3>${person.name}</h3><p class="team-role">${person.role}</p><p class="team-note">${person.note}</p></div></article>`).join('')}</div><p class="note">我們珍惜每一位默默擺上的同工，並持續一起服事、彼此成全。</p></section>`;}
function renderMyc(){return `<section class="myc-hero"><div class="myc-mark">M<span>Y</span>C</div><div><span class="eyebrow dark">M+ YOUNG CHURCH</span><h2>年輕，不必獨自尋找方向</h2><p>MYC 是 M+ 青年教會。讓信仰進入真實生活，在友情、敬拜與陪伴中，探索生命的方向與可能。</p><a class="button" href="https://www.instagram.com/m_plus_young_/" target="_blank" rel="noopener">追蹤 MYC Instagram <span aria-hidden="true">↗</span></a></div></section><section class="section-block"><div class="section-heading"><span class="eyebrow dark">GROW TOGETHER</span><h2>在關係裡成長，在生活裡同行</h2><p>不需要先變得完美才來。帶著真實的自己，一起認識信仰、建立友誼、找到可以同行的群體。</p></div><div class="vision-grid"><article class="vision-card"><span>01</span><h3>一起敬拜</h3><p>用音樂與真誠回應神，讓信仰成為生活的一部分。</p></article><article class="vision-card"><span>02</span><h3>彼此陪伴</h3><p>有問題可以問，有故事可以分享，在關係裡一起成長。</p></article></div></section>`;}
function renderContact(){return `<section class="contact-grid"><div class="contact-card contact-primary"><span class="eyebrow">COME AS YOU ARE</span><h2>歡迎回家</h2><p>主日聚會預留時間給你，第一次來也不用擔心。我們很樂意在門口迎接你、帶你熟悉環境。</p><div class="contact-row">${icon('◷')}<div><b>主日聚會</b><span>每週日 上午 10:00–11:30</span></div></div><div class="contact-row">${icon('⌖')}<div><b>教會地址</b><span>台中市大雅區神林南路 513 巷 13 號</span></div></div><div class="contact-actions"><a class="button light" href="https://maps.google.com/?q=台中市大雅區神林南路513巷13號" target="_blank" rel="noopener">Google 地圖導航 ↗</a><a class="text-link" href="tel:0425658977">04 2565 8977</a></div></div><aside class="contact-side"><span class="eyebrow dark">SAY HELLO</span><h2>想先問問看？</h2><p>歡迎先和我們聯絡，接待同工會協助你找到合適的資訊。</p><a class="contact-method" href="tel:0425658977"><span>電話</span><b>04 2565 8977</b><i>↗</i></a><a class="contact-method" href="mailto:church@tcsc.org.tw"><span>電子郵件</span><b>church@tcsc.org.tw</b><i>↗</i></a><a class="contact-method" href="https://lin.ee/30vz6X6Av" target="_blank" rel="noopener"><span>LINE 官方帳號</span><b>傳訊息給我們</b><i>↗</i></a></aside></section><section class="callout"><div><span class="eyebrow">YOUR FIRST SUNDAY</span><h2>期待與你見面</h2><p>帶著自在的心來就好，我們會在這裡等你。</p></div><a class="button light" href="index.html#welcome">看看第一次來訪指南 <span aria-hidden="true">↗</span></a></section>`;}
const renderers={about:renderAbout,faith:renderFaith,team:renderTeam,myc:renderMyc,contact:renderContact};
content.innerHTML=renderers[page]();
