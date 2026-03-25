  // ── STATE ──
  let currentUser = null;
  const STORAGE_KEY = 'sjmh_user';

  // ── INIT ──
  window.addEventListener('DOMContentLoaded', () => {
    loadUser();
    initReveal();
    initLB();
  });

  // ── NAV ──
  function scrollTo_(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
  function goHome() {
    if (currentUser) {
      showPublic();
    }
    window.scrollTo({top:0, behavior:'smooth'});
  }
  function openMobile() { document.getElementById('mobileMenu').classList.add('open'); }
  function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

  // ── AUTH ──
  function loadUser() {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) {
        const parsed = JSON.parse(s);
        if (parsed && parsed.name && parsed.email) {
          currentUser = parsed;
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch(e) {
      localStorage.removeItem(STORAGE_KEY);
    }
    updateUI();
  }
  function saveUser(u) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    currentUser = u;
    updateUI();
  }
  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    currentUser = null;
    updateUI();
    showToast('Signed out. See you soon!', 'success');
  }
  function updateUI() {
    const pub = document.getElementById('publicContent');
    const dash = document.getElementById('dashboardSection');
    const actions = document.getElementById('navActions');
    if (currentUser) {
      pub.style.display = 'none';
      dash.classList.add('open');
      document.getElementById('dashName').textContent = currentUser.name.split(' ')[0];
      actions.innerHTML = `
        <span style="font-size:0.85rem;font-weight:600;color:var(--blue)">👋 ${currentUser.name.split(' ')[0]}</span>
        <button class="btn btn-ghost" onclick="logout()">Sign Out</button>
      `;
    } else {
      pub.style.display = 'block';
      dash.classList.remove('open');
      actions.innerHTML = `
        <button class="btn btn-ghost" onclick="openModal('login')">Sign In</button>
        <button class="btn btn-primary" onclick="openModal('signup')">Book Appointment</button>
        <button class="btn btn-emergency" onclick="alert('Emergency: +254 716 157 825')">🚨 Emergency</button>
      `;
    }
  }

  function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value;
    if (!email || !pass) { showToast('Please fill in all fields', 'error'); return; }
    if ((email === 'patient@sjmh.co.ke' || email === 'patient@example.com') && pass === 'demo1234') {
      saveUser({id:'demo', name:'Demo Patient', email});
      closeModal();
      showToast('Welcome back! 👋', 'success');
    } else {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const u = JSON.parse(stored);
        if (u.email === email && pass.length >= 6) {
          saveUser(u); closeModal(); showToast('Welcome back! 👋', 'success');
          return;
        }
      }
      showToast('Invalid credentials. Try the demo account.', 'error');
    }
  }
  function handleSignup() {
    const first = document.getElementById('signupFirst').value.trim();
    const last  = document.getElementById('signupLast').value.trim();
    const phone = (document.getElementById('signupPhone').value || '').trim();
    const email = document.getElementById('signupEmail').value.trim();
    const pass  = document.getElementById('signupPass').value;
    if (!first || !last || !email || !pass) { showToast('Please fill in all fields', 'error'); return; }
    if (pass.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
    saveUser({id: Date.now(), name: first + ' ' + last, email, phone});
    document.getElementById('apptAutofillNotice').style.display = 'none';
    closeModal();
    if (pendingAppt) {
      showToast(`Welcome, ${first}! 🎉 Your appointment request with ${pendingAppt.dept} is confirmed — we'll be in touch shortly.`, 'success');
      pendingAppt = null;
    } else {
      showToast(`Welcome, ${first}! Your account is ready. 🎉`, 'success');
    }
  }
  // ── APPOINTMENT → SIGNUP BRIDGE ──
  let pendingAppt = null;

  function handleAppt() {
    const first  = (document.getElementById('apptFirst').value  || '').trim();
    const last   = (document.getElementById('apptLast').value   || '').trim();
    const phone  = (document.getElementById('apptPhone').value  || '').trim();
    const dept   = document.getElementById('apptDept').value;
    const date   = document.getElementById('apptDate').value;
    const time   = document.getElementById('apptTime').value;

    if (!first || !last || !phone || !dept || dept === 'Select Department') {
      showToast('Please fill in all required fields', 'error'); return;
    }

    pendingAppt = { first, last, phone, dept, date, time };

    if (currentUser) {
      showToast('Appointment confirmed! We will call to confirm. 📅', 'success');
      pendingAppt = null;
    } else {
      openModal('signup');
      setTimeout(() => {
        document.getElementById('signupFirst').value = first;
        document.getElementById('signupLast').value  = last;
        document.getElementById('signupPhone').value = phone;
        document.getElementById('apptAutofillNotice').style.display = 'block';
        const sub = document.getElementById('signupSubtitle');
        if (sub) sub.textContent = 'One last step — create a password to secure your account';
        const signupTab = document.getElementById('signupTab');
        if (signupTab) signupTab.textContent = 'Complete Registration';
      }, 50);
    }
  }

  // ── MODAL ──
  function openModal(tab) {
    document.getElementById('authModal').classList.add('open');
    switchTab(tab || 'login');
    if (tab !== 'signup' || !pendingAppt) {
      const notice = document.getElementById('apptAutofillNotice');
      if (notice) notice.style.display = 'none';
    }
  }
  function closeModal() {
    document.getElementById('authModal').classList.remove('open');
    const signupTab = document.getElementById('signupTab');
    if (signupTab) signupTab.textContent = 'Create Account';
    const sub = document.getElementById('signupSubtitle');
    if (sub) sub.textContent = "Create your patient account — it's free";
    const notice = document.getElementById('apptAutofillNotice');
    if (notice) notice.style.display = 'none';
  }
  function switchTab(tab) {
    document.getElementById('loginTab').classList.toggle('active', tab === 'login');
    document.getElementById('signupTab').classList.toggle('active', tab === 'signup');
    document.getElementById('loginPanel').classList.toggle('active', tab === 'login');
    document.getElementById('signupPanel').classList.toggle('active', tab === 'signup');
  }
  document.getElementById('authModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // ── TOAST ──
  function showToast(msg, type) {
    const t = document.getElementById('toast');
    t.textContent = (type === 'success' ? '✅ ' : '❌ ') + msg;
    t.className = 'toast show ' + (type || 'success');
    setTimeout(() => t.className = 'toast', 3200);
  }

  // ── LIGHTBOX ──
  const lbImgs = [
    'A4.jpg',
    'A3.jpg',
    'A5.jpg',
    'A8.jpg',
    'A11.jpg',
  ];
  let lbIdx = 0;
  function initLB() {}

  // ── SCROLL REVEAL ──
  function initReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0 });
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }
  }
  function openLB(i) {
    lbIdx = i;
    document.getElementById('lbImg').src = lbImgs[i];
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLB() { document.getElementById('lightbox').classList.remove('open'); }
  function moveLB(d) {
    lbIdx = (lbIdx + d + lbImgs.length) % lbImgs.length;
    document.getElementById('lbImg').src = lbImgs[lbIdx];
  }