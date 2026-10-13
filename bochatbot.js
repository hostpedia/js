/* Floating Smart Chatbot Widget for Paket Belajar Online Terlengkap */
(function() {
	if (document.getElementById('chatbot-widget-container')) return;

	const container = document.createElement('div');
	container.id = 'chatbot-widget-container';
	container.className = 'fixed bottom-5 right-5 z-50 font-poppins text-slate-800 text-sm select-none';
	container.innerHTML = `
    <!-- CHAT TOGGLE BUTTON (FLOATING WHATSAPP / MESSAGE CHAT BALLOON) -->
    <button id="chatbot-toggle-btn" class="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none relative group border-2 border-white/90 cursor-pointer overflow-visible">
      <!-- Iconic WhatsApp / Message Chat Bubble Icon -->
      <i id="chatbot-btn-icon" class="fab fa-whatsapp text-3xl drop-shadow-sm"></i>
      
      <!-- Pulsing Notification Dot -->
      <span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      
      <!-- Hover Tooltip Balloon -->
      <span class="absolute right-16 bg-belajar-navy text-white text-[11px] font-poppins font-medium py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:flex items-center gap-1.5 border border-white/10">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
        Chat CS Maya (AI) 👋
      </span>
    </button>

    <!-- CHATBOT MODAL WINDOW (WA / MESSENGER STYLE) -->
    <div id="chatbot-window" class="hidden fixed sm:absolute bottom-0 sm:bottom-16 right-0 sm:right-0 w-full sm:w-96 max-h-[85vh] sm:max-h-[570px] h-[530px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden transition-all duration-300 z-50">
      
      <!-- HEADER CHATBOT (WhatsApp Green Bar Style) -->
      <div class="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-white/10 shrink-0 shadow-sm">
        <div class="flex items-center gap-3">
          <!-- AVATAR FOTO PEREMPUAN AI DI DALAM BOX FRAME -->
          <div class="relative">
            <div class="w-11 h-11 rounded-xl overflow-hidden shadow-md border-2 border-white/90 bg-white ring-2 ring-emerald-300/40">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBXTC_9OVamtziSfPlGxCEfAxyOjPB4HVn2XgUjHhR0rQUXpzqeBmHjL24iA0fmvbJiEabFAe_i8tV_bUqyCKKzKYecZmhZQhV9q8f2fuiwfAgdxH3snlkJ8JaDMHRFNbJswfYsmTmJGOllc0oG8FV843lO5lBsWYhERmHVZ1V_Pfrtf2OivPxZtuJbGI/s200/cs-ai-maya.jpg" alt="Kak Maya AI Virtual Assistant" class="w-full h-full object-cover object-top">
            </div>
            <span class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#075E54] rounded-full"></span>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <h4 class="font-poppins font-bold text-sm text-white leading-tight">Kak Maya</h4>
              <span class="bg-white/20 text-emerald-100 text-[10px] px-1.5 py-0.2 rounded font-medium border border-white/30">AI CS</span>
            </div>
            <p class="text-[11px] text-emerald-100/90 flex items-center gap-1">
              <span class="w-1.5 h-1.5 bg-emerald-300 rounded-full inline-block animate-ping"></span>
              <span>Online • Asisten Digital Paket Belajar Online Terlengkap</span>
            </p>
          </div>
        </div>
        <button id="chatbot-close-btn" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition-colors cursor-pointer">
          ✕
        </button>
      </div>

      <!-- BODY CHAT LOG (WA CHAT WALLPAPER PATTERN STYLE) -->
      <div id="chatbot-messages" class="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 bg-[#EFEAE2] text-xs sm:text-[13px] leading-relaxed">
        
        <!-- ENCRYPTION / SYSTEM NOTICE BADGE (Khas WA) -->
        <div class="text-center my-1">
          <span class="bg-[#FFF3C4] text-[#856404] text-[10px] font-medium px-2.5 py-1 rounded-lg shadow-2xs border border-[#FFE8A1] inline-flex items-center gap-1">
            <i class="fas fa-lock text-[9px]"></i> Layanan Bantuan Otomatis Paket Belajar Online Terlengkap
          </span>
        </div>

        <!-- PESAN SAMBUTAN AWAL CS (BALLOON CHAT WA MASUK) -->
        <div class="flex items-start gap-2">
          <!-- Mini Avatar Box Photo -->
          <div class="w-8 h-8 rounded-lg overflow-hidden border border-emerald-600/30 shadow-2xs shrink-0 mt-0.5 bg-white">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBXTC_9OVamtziSfPlGxCEfAxyOjPB4HVn2XgUjHhR0rQUXpzqeBmHjL24iA0fmvbJiEabFAe_i8tV_bUqyCKKzKYecZmhZQhV9q8f2fuiwfAgdxH3snlkJ8JaDMHRFNbJswfYsmTmJGOllc0oG8FV843lO5lBsWYhERmHVZ1V_Pfrtf2OivPxZtuJbGI/s200/cs-ai-maya.jpg" alt="Kak Maya" class="w-full h-full object-cover object-top">
          </div>
          
          <!-- Balloon Chat Bubble WA style (White) -->
          <div class="relative bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200/60 shadow-xs max-w-[85%] text-slate-800 space-y-1.5">
            <p>Halo Ayah, Bunda & Rekan Mitra! Saya <strong>Kak Maya</strong>, asisten AI resmi Paket Belajar Online Terlengkap 😊</p>
            <p>Ada yang bisa saya bantu? Silakan pilih topik di bawah ini atau ketik langsung pertanyaan Anda:</p>
            <div class="text-[10px] text-slate-400 text-right mt-1">Baru saja</div>
          </div>
        </div>

        <!-- REKOMENDASI PERTANYAAN CEPAT (QUICK CHIPS WA STYLE) -->
        <div class="pt-1.5">
          <p class="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1">
            <i class="far fa-question-circle text-emerald-700"></i> Pilih Topik Pertanyaan:
          </p>
          <div class="flex flex-wrap gap-1.5">
            <button onclick="handleQuickQuestion('kuota_400')" class="bg-red-50 hover:bg-red-100 text-red-800 text-xs py-1.5 px-3 rounded-full border border-red-300 shadow-2xs transition-all cursor-pointer font-bold flex items-center gap-1">
              🔥 Berapa sisa kuota 400 slot?
            </button>
            <button onclick="handleQuickQuestion('isi_materi')" class="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs py-1.5 px-3 rounded-full border border-slate-300 hover:border-emerald-400 shadow-2xs transition-all cursor-pointer font-medium">
              📚 Apa saja isi 2.000+ materi?
            </button>
            <button onclick="handleQuickQuestion('cara_akses')" class="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs py-1.5 px-3 rounded-full border border-slate-300 hover:border-emerald-400 shadow-2xs transition-all cursor-pointer font-medium">
              📱 Buka materi di HP atau Laptop?
            </button>
            <button onclick="handleQuickQuestion('cuan_reseller')" class="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs py-1.5 px-3 rounded-full border border-slate-300 hover:border-emerald-400 shadow-2xs transition-all cursor-pointer font-medium">
              💼 Toko Reseller Rp 99rb itu apa?
            </button>
            <button onclick="handleQuickQuestion('komisi_bonus')" class="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs py-1.5 px-3 rounded-full border border-slate-300 hover:border-emerald-400 shadow-2xs transition-all cursor-pointer font-medium">
              💰 Berapa komisi & bonus reseller?
            </button>
            <button onclick="handleQuickQuestion('cara_bayar')" class="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs py-1.5 px-3 rounded-full border border-slate-300 hover:border-emerald-400 shadow-2xs transition-all cursor-pointer font-medium">
              💳 Cara pembayaran & rekening resmi
            </button>
          </div>
        </div>

      </div>

      <!-- FOOTER INPUT CHAT & WHATSAPP DIRECT (WA INPUT BAR STYLE) -->
      <div class="p-2.5 sm:p-3 bg-[#F0F2F5] border-t border-slate-200 shrink-0 space-y-2">
        
        <form id="chatbot-form" onsubmit="handleChatSubmit(event)" class="flex items-center gap-2">
          <input type="text" id="chatbot-input" placeholder="Ketik pesan..." class="flex-1 text-xs px-3.5 py-2.5 rounded-2xl border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 bg-white">
          <button type="submit" class="w-9 h-9 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95 cursor-pointer">
            <i class="fas fa-paper-plane text-xs"></i>
          </button>
        </form>

        <!-- DIRECT WHATSAPP ESCALATION BUTTON -->
        <div class="flex items-center justify-between pt-1 border-t border-slate-200/80 text-[11px]">
          <span class="text-slate-500">Butuh bicara langsung?</span>
          <a href="https://wa.me/6281572828128?text=Halo%20Admin%20Belajar%20Online%2C%20saya%20mau%20tanya%20seputar%20paket%20materi%20atau%20reseller..." target="_blank" rel="noopener noreferrer" class="text-[#075E54] hover:text-emerald-700 font-bold hover:underline flex items-center gap-1">
            <i class="fab fa-whatsapp text-sm text-[#25D366]"></i>
            <span>Chat Admin WhatsApp &raquo;</span>
          </a>
        </div>

      </div>

    </div>
  `;

	document.body.appendChild(container);

	// KNOWLEDGE BASE DENGAN RESPON UNIK TIAP TOPIK
	const knowledgeBase = {
		kuota_400: {
			title: "Kuota Akses Server Paket Belajar Online Terlengkap (400 Slot)",
			reply: `⚠️ <strong>Pemberitahuan Kuota Resmi:</strong><br><br>
      Akses promo <strong>Rp 50.000</strong> memang dibatasi hanya untuk <strong>400 keluarga/pembeli pertama</strong>.<br><br>
      • <strong>Alasan Pembatasan:</strong> Demi menjaga kestabilan akses server dan memastikan tim pendampingan VIP kami bisa melayani setiap orang tua dengan maksimal.<br>
      • <strong>Status Terkini:</strong> Kuota saat ini sudah terisi lebih dari 90% dan tersisa kurang dari 30 slot lagi!<br>
      • Begitu kuota 400 habis, pendaftaran ditutup atau harga normal <strong>Rp 240.000</strong> akan kembali diberlakukan.`
		},
		isi_materi: {
			title: "Isi 2.000+ Materi Edukasi Lengkap",
			reply: `<strong>Paket Belajar Online Terlengkap (Rp 50.000)</strong> berisi <strong>2.000+ materi lengkap untuk 1 tahun penuh</strong>:<br><br>
      • <strong>PAUD & TK:</strong> 500+ Lembar Mewarnai HD, Tracing Garis Huruf/Angka, Gunting Tempel, Maze Teka-Teki.<br>
      • <strong>SD (Kelas 1 - 6):</strong> Modul Jarimatika, Singapore Math, IPA Eksperimen, Bhs Indonesia, Bhs Inggris Dasar.<br>
      • <strong>SMP & SMA:</strong> Ringkasan Rumus Hafalan MIPA Cepat, Bank Soal Latihan & Persiapan UTBK SNBT.<br>
      • <strong>Video & Skill Anak:</strong> Ratusan Video Animasi Edukasi Sains, Dasar Coding/Robotik, & Tes CPNS/TKA.<br><br>
      📂 <em>Semua format PDF siap cetak + video interaktif di website resmi kami.</em>`
		},
		cara_akses: {
			title: "Cara Akses & Membuka di HP/Laptop",
			reply: `Sangat praktis dan tidak membebani memori HP Bunda/Ayah! 😊<br><br>
      1. <strong>Akses Instan:</strong> Begitu pemesanan terkonfirmasi, link akses resmi langsung dikirimkan ke WhatsApp & Email Anda.<br>
      2. <strong>Bisa Semua Perangkat:</strong> Cukup klik link tersebut dari <strong>HP Android, iPhone, iPad/Tablet, atau Laptop/Komputer</strong>.<br>
      3. <strong>Hemat Memori:</strong> Seluruh file 2.000+ materi tersimpan aman di cloud. Memori HP Bunda tetap lega dan tidak cepat penuh.<br>
      4. <strong>Siap Cetak Kapan Saja:</strong> Mau cetak untuk anak belajar hari ini? Cukup unduh 1 atau 2 lembar worksheet PDF yang diinginkan dan langsung print!`
		},
		cuan_reseller: {
			title: "Cara Kerja Toko Reseller Rp 99rb",
			reply: `Dengan <strong>Paket Toko Reseller Rp 99.000 (Sekali Bayar Selamanya)</strong>:<br><br>
      1. <strong>Toko Online Atas Nama Anda:</strong> Kami buatkan website toko digital profesional dengan nama & kontak WhatsApp Anda sendiri.<br>
      2. <strong>Sistem Otomatis (Autopilot):</strong> Cukup pasang link toko di status WhatsApp, bio sosmed, atau grup sekolah. Website Anda yang bekerja menjelaskan produk & meyakinkan calon pembeli 24 jam nonstop.<br>
      3. <strong>Bebas Stok & Kirim:</strong> Anda tidak perlu repot packing barang atau download file besar. Admin pusat yang mengurus pengiriman materi ke pembeli.<br>
      4. <strong>Bonus Gratis Langsung:</strong> Anda otomatis mendapatkan seluruh akses 2.000+ materi anak senilai Rp 50.000 secara GRATIS!`
		},
		komisi_bonus: {
			title: "Struktur Komisi & Bonus Mitra Reseller",
			reply: `Reseller mendapatkan <strong>2 Aliran Penghasilan Tunai</strong>:<br><br>
      💵 <strong>1. Komisi Penjualan Materi Edukasi (Rp 10.000 / order):</strong><br>
      Setiap ada orang tua yang membeli paket materi Rp 50.000 lewat website Anda, Anda menerima komisi bersih <strong>Rp 10.000</strong>. Cukup 10 pembeli, Anda sudah <strong>100% Balik Modal</strong>!<br><br>
      🤝 <strong>2. Bonus Kemitraan Reseller Baru (Rp 25.000 / mitra):</strong><br>
      Jika ada teman atau sesama bunda yang tertarik ikut membuka Toko Reseller (Rp 99.000) dari link Anda, Anda langsung mendapatkan bonus tunai <strong>Rp 25.000</strong>!<br><br>
      ⚖️ <em>100% Sistem 1 Tingkat Legal (Single-Tier Referral / Affiliate Resmi, Bukan MLM/Skema Piramida).</em>`
		},
		cara_bayar: {
			title: "Metode Pembayaran & Rekening Resmi",
			reply: `Pembayaran resmi Paket Belajar Online Terlengkap diproses secara instan & aman melalui:<br><br>
      • <strong>Transfer:</strong> Bank Mandiri<br>
      • <strong>QRIS & E-Wallet:</strong> Mendukung GoPay, OVO, DANA, ShopeePay, dan LinkAja.<br><br>
      🔒 <em>Saat checkout, Anda akan mendapatkan 3 digit kode unik (misal: Rp 50.127) untuk proses verifikasi otomatis dalam hitungan menit.</em>`
		},
		jaminan_aman: {
			title: "Garansi & Keamanan Pembelian",
			reply: `Transaksi di Paket Belajar Online Terlengkap dijamin <strong>100% Aman & Terpercaya</strong>! 🛡️<br><br>
      • Pengiriman link akses materi dijamin maksimal 5-10 menit setelah verifikasi transfer.<br>
      • Akses materi berlaku <strong>1 tahun penuh</strong> dan bisa diperpanjang.<br>
      • Tim CS dan Admin pusat kami siap membantu mendampingi jika Anda mengalami kendala teknis saat membuka file.`
		}
	};

	const toggleBtn = document.getElementById('chatbot-toggle-btn');
	const chatWindow = document.getElementById('chatbot-window');
	const closeBtn = document.getElementById('chatbot-close-btn');

	toggleBtn.addEventListener('click', () => {
		chatWindow.classList.toggle('hidden');
		if (!chatWindow.classList.contains('hidden')) {
			document.getElementById('chatbot-input').focus();
		}
	});

	closeBtn.addEventListener('click', () => {
		chatWindow.classList.add('hidden');
	});

	// HANDLE QUICK QUESTION (MAPPING LANGSUNG ID UNIK)
	window.handleQuickQuestion = function(topicKey) {
		let queryText = '';
		if (topicKey === 'kuota_400') queryText = 'Berapa sisa kuota promo 400 slot?';
		else if (topicKey === 'isi_materi') queryText = 'Apa saja isi 2.000+ materi?';
		else if (topicKey === 'cara_akses') queryText = 'Buka materi di HP atau Laptop?';
		else if (topicKey === 'cuan_reseller') queryText = 'Toko Reseller Rp 99rb itu apa?';
		else if (topicKey === 'komisi_bonus') queryText = 'Berapa komisi & bonus reseller?';
		else if (topicKey === 'cara_bayar') queryText = 'Cara pembayaran & rekening resmi apa saja?';

		appendUserMessage(queryText);

		setTimeout(() => {
			const data = knowledgeBase[topicKey];
			if (data) {
				appendBotMessage(`
          <div class="font-poppins font-semibold text-[#075E54] border-b border-emerald-100 pb-1 mb-1.5 text-xs flex items-center gap-1.5">
            <span class="text-emerald-500">●</span> ${data.title}
          </div>
          <div>${data.reply}</div>
          <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Amankan slot sekarang?</span>
            <a href="checkout.html" class="text-emerald-700 font-bold hover:underline">Formulir Pesan &raquo;</a>
          </div>
        `);
			}
		}, 280);
	};

	// HANDLE FREE TEXT SUBMIT
	window.handleChatSubmit = function(e) {
		e.preventDefault();
		const input = document.getElementById('chatbot-input');
		const text = input.value.trim();
		if (!text) return;

		appendUserMessage(text);
		input.value = '';
		matchFreeQuery(text);
	};

	function appendUserMessage(text) {
		const msgBox = document.getElementById('chatbot-messages');
		const el = document.createElement('div');
		el.className = 'flex items-start justify-end gap-2';
		// WhatsApp Outgoing Chat Balloon (#DCF8C6)
		el.innerHTML = `
      <div class="relative bg-[#DCF8C6] text-slate-900 p-3 rounded-2xl rounded-tr-none shadow-xs max-w-[85%] border border-[#C5E8B0]">
        <p>${escapeHtml(text)}</p>
        <div class="text-[10px] text-slate-500 text-right mt-1 flex items-center justify-end gap-1">
          <span>Baru saja</span>
          <i class="fas fa-check-double text-[9px] text-[#34B7F1]"></i>
        </div>
      </div>
    `;
		msgBox.appendChild(el);
		msgBox.scrollTop = msgBox.scrollHeight;
	}

	function appendBotMessage(htmlContent) {
		const msgBox = document.getElementById('chatbot-messages');
		const el = document.createElement('div');
		el.className = 'flex items-start gap-2';
		// WhatsApp Incoming Chat Balloon (White) with AI Assistant Photo in Box Frame
		el.innerHTML = `
      <div class="w-8 h-8 rounded-lg overflow-hidden border border-emerald-600/30 shadow-2xs shrink-0 mt-0.5 bg-white">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBXTC_9OVamtziSfPlGxCEfAxyOjPB4HVn2XgUjHhR0rQUXpzqeBmHjL24iA0fmvbJiEabFAe_i8tV_bUqyCKKzKYecZmhZQhV9q8f2fuiwfAgdxH3snlkJ8JaDMHRFNbJswfYsmTmJGOllc0oG8FV843lO5lBsWYhERmHVZ1V_Pfrtf2OivPxZtuJbGI/s200/cs-ai-maya.jpg" alt="Kak Maya" class="w-full h-full object-cover object-top">
      </div>
      <div class="relative bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200/80 shadow-xs max-w-[88%] text-slate-800 space-y-2">
        ${htmlContent}
        <div class="text-[10px] text-slate-400 text-right mt-1">Baru saja</div>
      </div>
    `;
		msgBox.appendChild(el);
		msgBox.scrollTop = msgBox.scrollHeight;
	}

	function matchFreeQuery(userText) {
		const t = userText.toLowerCase();

		// Prioritas Pencocokan Cerdas Kata Kunci
		let matchedKey = null;

		if (t.includes('kuota') || t.includes('slot') || t.includes('400') || t.includes('sisa') || t.includes('habis') || t.includes('penuh')) {
			matchedKey = 'kuota_400';
		} else if (t.includes('bayar') || t.includes('rekening') || t.includes('bca') || t.includes('bri') || t.includes('qris') || t.includes('transfer') || t.includes('dana') || t.includes('metode') || t.includes('biaya')) {
			matchedKey = 'cara_bayar';
		} else if (t.includes('komisi') || t.includes('bonus') || t.includes('untung') || t.includes('cuan') || t.includes('15') || t.includes('35') || t.includes('referral') || t.includes('mitra')) {
			matchedKey = 'komisi_bonus';
		} else if (t.includes('reseller') || t.includes('toko') || t.includes('bisnis') || t.includes('99') || t.includes('jualan')) {
			matchedKey = 'cuan_reseller';
		} else if (t.includes('buka') || t.includes('akses') || t.includes('laptop') || t.includes('download') || t.includes('drive') || t.includes('memori') || t.includes('cetak') || t.includes('print')) {
			matchedKey = 'cara_akses';
		} else if (t.includes('isi') || t.includes('dapat apa') || t.includes('materi') || t.includes('worksheet') || t.includes('paud') || t.includes('sd') || t.includes('smp') || t.includes('utbk')) {
			matchedKey = 'isi_materi';
		} else if (t.includes('aman') || t.includes('tipu') || t.includes('legal') || t.includes('resmi') || t.includes('percaya')) {
			matchedKey = 'jaminan_aman';
		}

		setTimeout(() => {
			if (matchedKey && knowledgeBase[matchedKey]) {
				const data = knowledgeBase[matchedKey];
				appendBotMessage(`
          <div class="font-poppins font-semibold text-[#075E54] border-b border-emerald-100 pb-1 mb-1.5 text-xs flex items-center gap-1.5">
            <span class="text-emerald-500">●</span> ${data.title}
          </div>
          <div>${data.reply}</div>
          <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Amankan slot sekarang?</span>
            <a href="checkout.html" class="text-emerald-700 font-bold hover:underline">Formulir Pesan &raquo;</a>
          </div>
        `);
			} else {
				const encodedText = encodeURIComponent('Halo Kak Maya / Admin Paket Belajar Online Terlengkap, saya mau tanya: "' + userText + '"');
				appendBotMessage(`
          <p>Pertanyaan bagus! Untuk informasi lebih rinci terkait hal tersebut, yuk langsung hubungi admin WhatsApp resmi kami:</p>
          <div class="pt-1">
            <a href="https://wa.me/6281572828128?text=${encodedText}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-xs">
              <i class="fab fa-whatsapp"></i> Chat WhatsApp Admin Resmi &raquo;
            </a>
          </div>
        `);
			}
		}, 280);
	}

	function escapeHtml(string) {
		const div = document.createElement('div');
		div.innerText = string;
		return div.innerHTML;
	}

})();
