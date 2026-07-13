// ==================== DATA LAYANAN ====================
const servicesData = [
    { icon: 'fa-weight-scale', name: 'Laundry Kiloan', desc: 'Cuci kering & setrika untuk pakaian sehari-hari. Harga terjangkau per kilogram.', details: 'Layanan laundry kiloan mencakup pencucian, pengeringan, dan penyetrikaan. Menggunakan detergen berkualitas. Estimasi pengerjaan 2-3 hari untuk reguler.' },
    { icon: 'fa-shirt', name: 'Laundry Satuan', desc: 'Layanan per item untuk kemeja, jas, atau pakaian khusus.', details: 'Layanan satuan untuk pakaian yang membutuhkan perawatan khusus. Harga per item mulai dari Rp5.000.' },
    { icon: 'fa-soap', name: 'Dry Clean', desc: 'Pembersihan kering untuk bahan sensitif seperti wol dan sutra.', details: 'Proses dry clean menggunakan solven khusus yang aman untuk bahan sensitif. Cocok untuk jas, gaun, dan pakaian berbahan halus.' },
    { icon: 'fa-shoe-prints', name: 'Shoe Wash', desc: 'Pembersihan sepatu secara menyeluruh hingga ke bagian sol.', details: 'Cuci sepatu menggunakan teknik deep clean dengan sikat khusus dan cairan pembersih yang aman. Hasil seperti baru.' },
    { icon: 'fa-helmet-safety', name: 'Helmet Wash', desc: 'Bersihkan helm dari bakteri dan bau tidak sedap.', details: 'Pembersihan helm secara menyeluruh termasuk bagian dalam dan luar. Menggunakan disinfektan untuk membunuh bakteri.' },
    { icon: 'fa-rug', name: 'Cuci Karpet', desc: 'Pembersihan karpet dengan teknik khusus agar bersih maksimal.', details: 'Cuci karpet menggunakan mesin ekstraktor dan shampoo khusus. Tersedia untuk karpet rumah tangga maupun perkantoran.' },
    { icon: 'fa-paw', name: 'Cuci Boneka', desc: 'Perawatan boneka kesayangan agar bersih dan harum.', details: 'Cuci boneka dengan perlakuan lembut menggunakan detergen hypoallergenic. Boneka kembali bersih tanpa merusak bahan.' },
    { icon: 'fa-building', name: 'Corporate Laundry', desc: 'Solusi laundry untuk hotel, restoran, dan perusahaan.', details: 'Layanan laundry volume besar dengan kontrak bulanan. Tersedia penjemputan rutin dan invoice bulanan. Harga negotiable.' },
];

// ==================== DATA GALERI ====================
const galleryData = [
    { src: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&h=300&fit=crop&auto=format', category: 'proses', alt: 'Proses laundry profesional' },
    { src: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=400&h=300&fit=crop&auto=format', category: 'pengemasan', alt: 'Pengemasan rapi' },
    { src: 'https://images.unsplash.com/photo-1604335398980-eded415a1533?w=400&h=300&fit=crop&auto=format', category: 'shoe', alt: 'Shoe wash profesional' },
    { src: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&auto=format', category: 'corporate', alt: 'Corporate laundry' },
    { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format', category: 'antar', alt: 'Antar jemput laundry' },
    { src: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=400&h=300&fit=crop&auto=format', category: 'proses', alt: 'Proses pencucian' },
];

// ==================== DATA TESTIMONI ====================
const testimoniData = [
    { stars: 5, text: 'Pelayanan sangat profesional. Pakaian bersih, harum, dan rapi. Antar jemput tepat waktu. Sangat direkomendasikan!', author: 'Rina M.', role: 'Pelanggan Reguler' },
    { stars: 5, text: 'Dry clean jas saya hasilnya sempurna. Tidak ada yang rusak sama sekali. Terima kasih Home Laundry!', author: 'Budi S.', role: 'Pelanggan Premium' },
    { stars: 5, text: 'Layanan corporate laundry sangat membantu bisnis kami. Kualitas terjaga dan pengiriman selalu tepat waktu.', author: 'PT Maju Bersama', role: 'Klien Corporate' },
    { stars: 5, text: 'Sepatu saya yang sudah kusam jadi seperti baru lagi. Shoe wash di sini memang terbaik.', author: 'Dian K.', role: 'Pelanggan Setia' },
];

// ==================== DATA FAQ ====================
const faqData = [
    { question: 'Berapa lama proses laundry?', answer: 'Untuk paket reguler, proses memakan waktu 2-3 hari kerja. Paket express selesai dalam 1 hari, dan paket premium hanya 6 jam. Waktu dapat bervariasi tergantung volume.' },
    { question: 'Apakah tersedia layanan antar jemput?', answer: 'Ya, Home Laundry menyediakan layanan antar jemput gratis untuk area Surabaya dan Sidoarjo tertentu. Kurir kami akan menjemput dan mengantar pesanan Anda.' },
    { question: 'Apakah pakaian pelanggan dicampur?', answer: 'Tidak. Setiap pesanan diproses secara terpisah untuk menjaga kualitas dan menghindari tertukar. Kami menggunakan sistem tagging yang rapi untuk setiap pelanggan.' },
    { question: 'Apakah tersedia layanan express?', answer: 'Tersedia. Paket express kami selesai dalam 1 hari dengan harga Rp15.000/kg. Tersedia juga paket premium yang selesai dalam 6 jam.' },
    { question: 'Bagaimana sistem pembayaran?', answer: 'Pembayaran dapat dilakukan secara tunai saat penjemputan/pengantaran, atau melalui transfer bank. Untuk corporate, tersedia invoice bulanan.' },
    { question: 'Apakah bisa melayani kebutuhan hotel atau perusahaan?', answer: 'Tentu. Kami memiliki paket corporate laundry untuk hotel, restoran, dan perusahaan. Tersedia kontrak bulanan dengan penjemputan rutin dan harga khusus.' },
];

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const serviceModal = document.getElementById('serviceModal');
const closeModal = document.getElementById('closeModal');
const servicesGrid = document.querySelector('.services-grid');
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const testimonialSlider = document.getElementById('testimonialSlider');
const testimonialDots = document.getElementById('testimonialDots');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
const faqList = document.querySelector('.faq-list');
const bookingForm = document.getElementById('bookingForm');
const trackButton = document.getElementById('trackButton');
const currentYearSpan = document.getElementById('currentYear');

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// ==================== MOBILE NAVIGATION ====================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== BACK TO TOP ====================
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== COUNTER ANIMATION ====================
function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const isDecimal = element.getAttribute('data-decimal') === 'true';
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = target * progress;
        
        if (isDecimal) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = isDecimal ? target.toFixed(1) : Math.floor(target).toLocaleString() + '+';
        }
    }
    
    requestAnimationFrame(update);
}

// ==================== SCROLL REVEAL ====================
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .stats, .about, .services, .how-to-order, .calculator, .pricing, .booking, .tracking, .service-area, .gallery, .testimonials, .faq, .cta');
    
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
            el.classList.add('visible');
        }
    });
    
    // Animate counters when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection && statsSection.classList.contains('visible') || statsSection.getBoundingClientRect().top < window.innerHeight * 0.85) {
        document.querySelectorAll('.stat-number').forEach(counter => {
            if (counter.textContent === '0') {
                animateCounter(counter);
            }
        });
    }
}

// Add reveal class to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
});

window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);

// ==================== RENDER LAYANAN ====================
function renderServices() {
    servicesGrid.innerHTML = servicesData.map((service, index) => `
        <div class="service-card reveal">
            <div class="service-card-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.name}</h3>
            <p>${service.desc}</p>
            <button class="btn btn-outline" onclick="openServiceModal(${index})">Lihat Detail</button>
        </div>
    `).join('');
}

function openServiceModal(index) {
    const service = servicesData[index];
    document.getElementById('modalIcon').innerHTML = `<i class="fas ${service.icon}"></i>`;
    document.getElementById('modalTitle').textContent = service.name;
    document.getElementById('modalDescription').textContent = service.desc;
    document.getElementById('modalDetails').innerHTML = `<p><strong>Detail:</strong> ${service.details}</p>`;
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
});

serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ==================== KALKULATOR HARGA ====================
const priceData = {
    'kiloan-reguler': { price: 8000, unit: 'kg' },
    'kiloan-express': { price: 15000, unit: 'kg' },
    'dry-clean': { price: 35000, unit: 'item' },
    'shoe-wash': { price: 40000, unit: 'pasang' },
    'helmet-wash': { price: 30000, unit: 'item' },
    'karpet': { price: 25000, unit: 'm²' },
    'boneka': { price: 30000, unit: 'item' },
};

const serviceTypeSelect = document.getElementById('serviceType');
const quantityInput = document.getElementById('quantity');
const unitLabel = document.getElementById('unitLabel');
const calcPrice = document.getElementById('calcPrice');

serviceTypeSelect.addEventListener('change', () => {
    const selected = serviceTypeSelect.value;
    if (selected && priceData[selected]) {
        unitLabel.textContent = priceData[selected].unit;
        updatePrice();
    } else {
        unitLabel.textContent = 'kg';
        calcPrice.textContent = 'Rp0';
    }
});

quantityInput.addEventListener('input', updatePrice);

function updatePrice() {
    const selected = serviceTypeSelect.value;
    const quantity = parseInt(quantityInput.value) || 0;
    
    if (selected && priceData[selected] && quantity > 0) {
        const total = priceData[selected].price * quantity;
        calcPrice.textContent = 'Rp' + total.toLocaleString('id-ID');
    } else {
        calcPrice.textContent = 'Rp0';
    }
}

// ==================== BOOKING WHATSAPP ====================
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const service = document.getElementById('bookingService').value;
    const address = document.getElementById('address').value.trim();
    const date = document.getElementById('pickupDate').value;
    const time = document.getElementById('pickupTime').value;
    const notes = document.getElementById('notes').value.trim();
    
    // Simple validation
    let isValid = true;
    const inputs = [
        { id: 'name', value: name },
        { id: 'whatsapp', value: whatsapp },
        { id: 'bookingService', value: service },
        { id: 'address', value: address },
        { id: 'pickupDate', value: date },
        { id: 'pickupTime', value: time },
    ];
    
    inputs.forEach(input => {
        const el = document.getElementById(input.id);
        if (!input.value) {
            el.classList.add('error');
            isValid = false;
        } else {
            el.classList.remove('error');
        }
    });
    
    if (!isValid) return;
    
    const message = `Halo Home Laundry, saya ingin melakukan booking pickup:%0A%0A` +
        `Nama: ${name}%0A` +
        `No. WhatsApp: ${whatsapp}%0A` +
        `Layanan: ${service}%0A` +
        `Alamat: ${address}%0A` +
        `Tanggal: ${date}%0A` +
        `Jam: ${time}%0A` +
        `Catatan: ${notes || '-'}`;
    
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
});

// ==================== TRACKING ====================
trackButton.addEventListener('click', () => {
    const trackingNumber = document.getElementById('trackingNumber').value.trim();
    const trackingResult = document.getElementById('trackingResult');
    const trackingError = document.querySelector('.tracking-error');
    
    // Remove previous error
    const prevError = document.querySelector('.tracking-error');
    if (prevError) prevError.remove();
    
    if (trackingNumber === 'HL001') {
        trackingResult.classList.add('active');
        trackingResult.innerHTML = `
            <div class="tracking-progress">
                <div class="tracking-step completed">
                    <div class="tracking-step-icon"><i class="fas fa-check"></i></div>
                    <div class="tracking-step-content">
                        <h5>Pesanan Diterima</h5>
                        <p>Pesanan Anda telah diterima oleh sistem</p>
                    </div>
                </div>
                <div class="tracking-step completed">
                    <div class="tracking-step-icon"><i class="fas fa-check"></i></div>
                    <div class="tracking-step-content">
                        <h5>Sedang Dicuci</h5>
                        <p>Pakaian sedang dalam proses pencucian</p>
                    </div>
                </div>
                <div class="tracking-step active">
                    <div class="tracking-step-icon"><i class="fas fa-spinner"></i></div>
                    <div class="tracking-step-content">
                        <h5>Sedang Disetrika</h5>
                        <p>Pakaian sedang disetrika dan quality control</p>
                    </div>
                </div>
                <div class="tracking-step">
                    <div class="tracking-step-icon"><i class="fas fa-box"></i></div>
                    <div class="tracking-step-content">
                        <h5>Siap Diantar</h5>
                        <p>Pesanan siap diantarkan ke alamat Anda</p>
                    </div>
                </div>
            </div>
        `;
    } else if (trackingNumber === '') {
        const errorEl = document.createElement('p');
        errorEl.className = 'tracking-error active';
        errorEl.textContent = 'Silakan masukkan nomor order terlebih dahulu.';
        trackingResult.classList.remove('active');
        trackingResult.innerHTML = '';
        trackingResult.appendChild(errorEl);
    } else {
        const errorEl = document.createElement('p');
        errorEl.className = 'tracking-error active';
        errorEl.textContent = 'Nomor order tidak ditemukan. Silakan coba lagi.';
        trackingResult.classList.remove('active');
        trackingResult.innerHTML = '';
        trackingResult.appendChild(errorEl);
    }
});

// ==================== RENDER GALERI ====================
function renderGallery(filter = 'all') {
    const filtered = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);
    
    galleryGrid.innerHTML = filtered.map(item => `
        <div class="gallery-item" data-category="${item.category}" onclick="openLightbox('${item.src}')">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-magnifying-glass-plus"></i>
            </div>
        </div>
    `).join('');
}

// Gallery filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.getAttribute('data-filter'));
    });
});

// Lightbox
function openLightbox(src) {
    lightbox.classList.add('active');
    lightboxImg.src = src;
    document.body.style.overflow = 'hidden';
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

// ==================== TESTIMONI SLIDER ====================
let currentTestimonial = 0;

function renderTestimonials() {
    testimonialSlider.innerHTML = testimoniData.map((item, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <div class="testimonial-stars">
                ${'<i class="fas fa-star"></i>'.repeat(item.stars)}
            </div>
            <p class="testimonial-text">"${item.text}"</p>
            <p class="testimonial-author">${item.author}</p>
            <p class="testimonial-role">${item.role}</p>
        </div>
    `).join('');
    
    // Render dots
    testimonialDots.innerHTML = testimoniData.map((_, index) => `
        <button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
    `).join('');
    
    // Add dot click events
    document.querySelectorAll('.testimonial-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            goToTestimonial(parseInt(dot.getAttribute('data-index')));
        });
    });
}

function goToTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentTestimonial = index;
}

prevTestimonial.addEventListener('click', () => {
    const newIndex = currentTestimonial === 0 ? testimoniData.length - 1 : currentTestimonial - 1;
    goToTestimonial(newIndex);
});

nextTestimonial.addEventListener('click', () => {
    const newIndex = currentTestimonial === testimoniData.length - 1 ? 0 : currentTestimonial + 1;
    goToTestimonial(newIndex);
});

// Auto slide
setInterval(() => {
    const newIndex = currentTestimonial === testimoniData.length - 1 ? 0 : currentTestimonial + 1;
    goToTestimonial(newIndex);
}, 5000);

// ==================== FAQ ACCORDION ====================
function renderFAQ() {
    faqList.innerHTML = faqData.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" data-index="${index}">
                ${item.question}
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            
            // Open clicked if not already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ==================== FOOTER YEAR ====================
currentYearSpan.textContent = new Date().getFullYear();

// ==================== INITIALIZE ====================
renderServices();
renderGallery();
renderTestimonials();
renderFAQ();
handleScrollReveal();