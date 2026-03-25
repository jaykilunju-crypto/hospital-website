// DATABASE DATA
let patients = [
  { id: 'SJMH-001', name: 'James Mwangi', email: 'james@email.com', phone: '+254 712 345 678', dob: '1978-03-12', dept: 'Cardiology', status: 'active', joined: '2024-01-15', city: 'Naivasha' },
  { id: 'SJMH-002', name: 'Amina Kamau', email: 'amina@email.com', phone: '+254 722 456 789', dob: '1990-07-22', dept: 'Maternity', status: 'active', joined: '2024-02-08', city: 'Gilgil' },
  { id: 'SJMH-003', name: 'Peter Otieno', email: 'peter@email.com', phone: '+254 733 567 890', dob: '1985-11-05', dept: 'Orthopaedics', status: 'active', joined: '2024-03-20', city: 'Naivasha' },
  { id: 'SJMH-004', name: 'Grace Njeri', email: 'grace@email.com', phone: '+254 744 678 901', dob: '1992-04-17', dept: 'General Medicine', status: 'active', joined: '2024-04-01', city: 'Naivasha' },
  { id: 'SJMH-005', name: 'Samuel Kipchoge', email: 'samuel@email.com', phone: '+254 755 789 012', dob: '1965-09-30', dept: 'Neurology', status: 'active', joined: '2023-11-14', city: 'Nakuru' },
  { id: 'SJMH-006', name: 'Mary Wambui', email: 'mary@email.com', phone: '+254 766 890 123', dob: '1988-02-28', dept: 'Paediatrics', status: 'active', joined: '2024-05-10', city: 'Naivasha' },
  { id: 'SJMH-007', name: 'David Ochieng', email: 'david@email.com', phone: '+254 777 901 234', dob: '1975-06-15', dept: 'Cardiology', status: 'active', joined: '2024-06-03', city: 'Gilgil' },
  { id: 'SJMH-008', name: 'Demo Patient', email: 'patient@sjmh.co.ke', phone: '+254 700 000 000', dob: '1990-01-01', dept: 'Cardiology', status: 'active', joined: '2026-01-01', city: 'Naivasha' }
];

let appointments = [
  { id: 'APT-001', patientId: 'SJMH-001', patient: 'James Mwangi', doctor: 'Dr. Sarah Wanjiku', dept: 'Cardiology', date: '2026-04-18', time: '10:30 AM', type: 'Annual Checkup', status: 'confirmed' },
  { id: 'APT-002', patientId: 'SJMH-001', patient: 'James Mwangi', doctor: 'Dr. Sarah Wanjiku', dept: 'Cardiology', date: '2026-04-25', time: '2:00 PM', type: 'Follow-up', status: 'confirmed' },
  { id: 'APT-003', patientId: 'SJMH-002', patient: 'Amina Kamau', doctor: 'Dr. Grace Muthoni', dept: 'Paediatrics', date: '2026-05-02', time: '11:00 AM', type: 'Consultation', status: 'pending' },
  { id: 'APT-004', patientId: 'SJMH-003', patient: 'Peter Otieno', doctor: 'Dr. Michael Kipchoge', dept: 'Orthopaedics', date: '2026-04-22', time: '9:00 AM', type: 'Follow-up', status: 'confirmed' },
  { id: 'APT-005', patientId: 'SJMH-004', patient: 'Grace Njeri', doctor: 'Dr. James Odhiambo', dept: 'General Medicine', date: '2026-04-19', time: '3:00 PM', type: 'Checkup', status: 'pending' },
  { id: 'APT-006', patientId: 'SJMH-008', patient: 'Demo Patient', doctor: 'Dr. Sarah Wanjiku', dept: 'Cardiology', date: '2026-04-18', time: '10:30 AM', type: 'Annual Checkup', status: 'confirmed' },
  { id: 'APT-007', patientId: 'SJMH-008', patient: 'Demo Patient', doctor: 'Dr. Michael Kipchoge', dept: 'Orthopaedics', date: '2026-04-25', time: '2:00 PM', type: 'Follow-up', status: 'pending' }
];

let prescriptions = [
  { id: 'RX-001', patientId: 'SJMH-001', patient: 'James Mwangi', drug: 'Lisinopril', dosage: '10mg', freq: 'Once daily', refill: 'Apr 30, 2026', status: 'active' },
  { id: 'RX-002', patientId: 'SJMH-001', patient: 'James Mwangi', drug: 'Atorvastatin', dosage: '20mg', freq: 'Once daily', refill: 'May 15, 2026', status: 'active' },
  { id: 'RX-003', patientId: 'SJMH-002', patient: 'Amina Kamau', drug: 'Folic Acid', dosage: '5mg', freq: 'Once daily', refill: 'May 10, 2026', status: 'active' },
  { id: 'RX-004', patientId: 'SJMH-008', patient: 'Demo Patient', drug: 'Lisinopril', dosage: '10mg', freq: 'Once daily', refill: 'Apr 30, 2026', status: 'active' }
];

let whatsappMessages = [
  { from: '+254 712 345 678', name: 'James Mwangi', message: 'Hello, I need to reschedule my appointment.', date: 'Mar 23, 2026', status: 'unread' },
  { from: '+254 722 456 789', name: 'Amina Kamau', message: 'What are your visiting hours?', date: 'Mar 22, 2026', status: 'read' },
  { from: '+254 733 567 890', name: 'Peter Otieno', message: 'When can I collect my prescription?', date: 'Mar 21, 2026', status: 'unread' },
  { from: '+254 744 678 901', name: 'Grace Njeri', message: 'Thank you for the excellent care!', date: 'Mar 20, 2026', status: 'read' }
];

let emailMessages = [
  { from: 'james@email.com', name: 'James Mwangi', subject: 'Appointment Change', message: 'I need to change my appointment time.', date: 'Mar 23, 2026', status: 'unread' },
  { from: 'amina@email.com', name: 'Amina Kamau', subject: 'Billing Question', message: 'Do you accept NHIF?', date: 'Mar 22, 2026', status: 'read' },
  { from: 'peter@email.com', name: 'Peter Otieno', subject: 'Prescription Refill', message: 'I need a refill on my medication.', date: 'Mar 21, 2026', status: 'unread' },
  { from: 'info@company.com', name: 'New Patient', subject: 'Registration', message: 'How do I register as a new patient?', date: 'Mar 20, 2026', status: 'unread' }
];

let activityLog = [
  { id: 'ACT-001', user: 'Admin', action: 'Patient added', entity: 'SJMH-008 Demo Patient', time: '2026-03-23 09:14', type: 'create' },
  { id: 'ACT-002', user: 'Admin', action: 'Appointment approved', entity: 'APT-008', time: '2026-03-23 09:32', type: 'update' },
  { id: 'ACT-003', user: 'Pharmacy', action: 'Prescription issued', entity: 'Lisinopril for Demo Patient', time: '2026-03-23 10:05', type: 'create' },
  { id: 'ACT-004', user: 'Admin', action: 'Patient updated', entity: 'SJMH-003 Peter Otieno', time: '2026-03-22 15:22', type: 'update' }
];

let nextId = { patient: 9, appt: 8, msg: 6, rx: 5, activity: 5 };

function formatDate(dateStr) {
  let d = new Date(dateStr);
  return d.toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' });
}

function statusChip(status) {
  const map = { confirmed: 'chip-green', pending: 'chip-amber', cancelled: 'chip-red', active: 'chip-green', inactive: 'chip-gray', unread: 'chip-blue', read: 'chip-gray' };
  return `<span class="chip ${map[status] || 'chip-gray'}">${status}</span>`;
}

function avatarCell(name) {
  let init = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();
  return `<div style="display:flex;align-items:center;gap:.65rem"><div style="width:32px;height:32px;border-radius:50%;background:#1155A4;color:white;display:flex;align-items:center;justify-content:center;font-size:.75rem">${init}</div><span>${name}</span></div>`;
}

function renderStats() {
  document.getElementById('statGrid').innerHTML = `
    <div class="stat-card blue"><div class="stat-top"><div class="stat-icon blue">👤</div><div class="stat-trend trend-up">+12%</div></div><div class="stat-num">${patients.length}</div><div class="stat-lbl">Total Patients</div></div>
    <div class="stat-card green"><div class="stat-top"><div class="stat-icon green">📅</div><div class="stat-trend trend-up">+8%</div></div><div class="stat-num">${appointments.filter(a => a.date >= '2026-04-18').length}</div><div class="stat-lbl">Upcoming Appointments</div></div>
    <div class="stat-card amber"><div class="stat-top"><div class="stat-icon amber">⏳</div><div class="stat-trend trend-up">-</div></div><div class="stat-num">${appointments.filter(a => a.status === 'pending').length}</div><div class="stat-lbl">Pending Approvals</div></div>
    <div class="stat-card purple"><div class="stat-top"><div class="stat-icon purple">💬</div><div class="stat-trend trend-up">+3</div></div><div class="stat-num">${messages.filter(m => m.status === 'unread').length + whatsappMessages.filter(w => w.status === 'unread').length + emailMessages.filter(e => e.status === 'unread').length}</div><div class="stat-lbl">Unread Messages</div></div>`;
  document.getElementById('patientCount').textContent = patients.length;
  document.getElementById('pendingCount').textContent = appointments.filter(a => a.status === 'pending').length;
  document.getElementById('messageCount').textContent = messages.filter(m => m.status === 'unread').length;
}

function renderPatients() {
  let search = document.getElementById('patientSearch')?.value.toLowerCase() || '';
  let filtered = patients.filter(p => p.name.toLowerCase().includes(search) || p.id.toLowerCase().includes(search));
  document.getElementById('patientsTable').innerHTML = `
    <thead><tr><th>Patient</th><th>ID</th><th>Department</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead>
    <tbody>${filtered.map(p => `<tr onclick="openDetail('patient','${p.id}')">
      <td>${avatarCell(p.name)}</td>
      <td><span class="chip chip-gray">${p.id}</span></td>
      <td>${p.dept}</td>
      <td>${statusChip(p.status)}</td>
      <td>${formatDate(p.joined)}</td>
      <td onclick="event.stopPropagation()"><button class="btn btn-ghost btn-xs" onclick="openDetail('patient','${p.id}')">View</button></td>
    </tr>`).join('')}</tbody>`;
}

function renderAppointments() {
  let search = document.getElementById('apptSearch')?.value.toLowerCase() || '';
  let filtered = appointments.filter(a => a.patient.toLowerCase().includes(search) || a.doctor.toLowerCase().includes(search));
  document.getElementById('appointmentsTable').innerHTML = `
    <thead><tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>${filtered.map(a => `<tr onclick="openDetail('appointment','${a.id}')">
      <td><span class="chip chip-gray">${a.id}</span></td>
      <td><a onclick="event.stopPropagation();openDetail('patient','${a.patientId}')" style="color:var(--blue);cursor:pointer">${a.patient}</a></td>
      <td>${a.doctor}</td>
      <td>${formatDate(a.date)}</td>
      <td>${a.time}</td>
      <td>${a.type}</td>
      <td>${statusChip(a.status)}</td>
      <td onclick="event.stopPropagation()">${a.status === 'pending' ? `<button class="btn btn-green btn-xs" onclick="approveAppointment('${a.id}')">✓ Approve</button>` : `<button class="btn btn-ghost btn-xs" onclick="openDetail('appointment','${a.id}')">View</button>`}</td>
    </tr>`).join('')}</tbody>`;
}

function renderMessages() {
  document.getElementById('messagesTable').innerHTML = `
    <thead><tr><th>ID</th><th>From</th><th>To</th><th>Subject</th><th>Date</th><th>Status</th></tr></thead>
    <tbody>${messages.map(m => `<tr onclick="markMessageRead('${m.id}')">
      <td><span class="chip chip-gray">${m.id}</span></td>
      <td>${m.from}</td>
      <td>${m.to}</td>
      <td>${m.subject}</td>
      <td>${m.date}</td>
      <td>${statusChip(m.status)}</td>
    </tr>`).join('')}</tbody>`;
}

function renderPrescriptions() {
  document.getElementById('prescriptionsTable').innerHTML = `
    <thead><tr><th>ID</th><th>Patient</th><th>Medication</th><th>Dosage</th><th>Frequency</th><th>Refill</th><th>Status</th></tr></thead>
    <tbody>${prescriptions.map(r => `<tr>
      <td><span class="chip chip-gray">${r.id}</span></td>
      <td><a style="color:var(--blue);cursor:pointer" onclick="openDetail('patient','${r.patientId}')">${r.patient}</a></td>
      <td>💊 ${r.drug}</td>
      <td>${r.dosage}</td>
      <td>${r.freq}</td>
      <td>${r.refill}</td>
      <td>${statusChip(r.status)}</td>
    </tr>`).join('')}</tbody>`;
}

function renderWhatsApp() {
  document.getElementById('whatsappMessages').innerHTML = whatsappMessages.map(w => `
    <div style="padding:1rem;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-weight:600">${w.name} (${w.from})</div><div style="color:var(--muted);font-size:.78rem;margin-top:4px">${w.message}</div><div style="font-size:.68rem;color:var(--muted);margin-top:4px">${w.date}</div></div>
      <a href="https://wa.me/${w.from.replace(/[^0-9]/g,'')}" target="_blank" class="btn btn-primary btn-xs">💬 Reply</a>
    </div>`).join('');
}

function renderEmails() {
  document.getElementById('emailMessages').innerHTML = emailMessages.map(e => `
    <div style="padding:1rem;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-weight:600">${e.name} (${e.from})</div><div style="font-size:.78rem;color:var(--blue)">${e.subject}</div><div style="color:var(--muted);font-size:.72rem;margin-top:4px">${e.message}</div><div style="font-size:.68rem;color:var(--muted);margin-top:4px">${e.date}</div></div>
      <a href="mailto:${e.from}?subject=Re: ${encodeURIComponent(e.subject)}" class="btn btn-primary btn-xs">✉️ Reply</a>
    </div>`).join('');
}

function renderPendingList() {
  let pending = appointments.filter(a => a.status === 'pending');
  document.getElementById('pendingApptsList').innerHTML = pending.length ? pending.map(a => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:.8rem;border-bottom:1px solid var(--border)">
      <div><div style="font-weight:600">${a.patient}</div><div style="font-size:.78rem;color:var(--muted)">${a.doctor} · ${formatDate(a.date)} at ${a.time}</div></div>
      <button class="btn btn-green btn-sm" onclick="approveAppointment('${a.id}')">✓ Approve</button>
    </div>`).join('') : '<div class="empty-state" style="text-align:center;padding:2rem">No pending approvals</div>';
}

function renderRecentMessages() {
  let recent = messages.filter(m => m.status === 'unread').slice(0,3);
  document.getElementById('recentMessages').innerHTML = recent.length ? recent.map(m => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:.8rem;border-bottom:1px solid var(--border)">
      <div><div style="font-weight:600">${m.from}</div><div style="font-size:.78rem;color:var(--muted)">${m.subject}</div></div>
      <span class="chip chip-blue">● Unread</span>
    </div>`).join('') : '<div class="empty-state" style="text-align:center;padding:2rem">No new messages</div>';
}

function renderDatabase() {
  document.getElementById('dbStats').innerHTML = `
    <div style="margin-bottom:1rem"><div class="db-gauge-label" style="margin-bottom:.5rem">Storage Used</div><div style="height:8px;background:var(--bg2);border-radius:4px"><div style="width:34%;height:100%;background:linear-gradient(90deg,var(--blue),var(--sky));border-radius:4px"></div></div><div style="display:flex;justify-content:space-between;margin-top:.3rem;font-size:.7rem"><span>34% used</span><span>3.4 GB / 10 GB</span></div></div>
    <div><div class="db-gauge-label" style="margin-bottom:.5rem">Patient Records</div><div style="height:8px;background:var(--bg2);border-radius:4px"><div style="width:${(patients.length/50)*100}%;height:100%;background:linear-gradient(90deg,var(--green),#22C55E);border-radius:4px"></div></div><div style="display:flex;justify-content:space-between;margin-top:.3rem;font-size:.7rem"><span>${patients.length} / 50 patients</span><span>${Math.round((patients.length/50)*100)}%</span></div></div>`;
  document.getElementById('recentQueries').innerHTML = activityLog.slice(0,3).map(a => `
    <div style="padding:.6rem;background:var(--bg);border-radius:var(--radius-sm);margin-bottom:.5rem"><div style="font-family:monospace;font-size:.72rem;color:var(--blue)">${a.user} ${a.action}</div><div style="font-size:.68rem;color:var(--muted)">${a.entity} · ${a.time}</div></div>`).join('');
}

function renderActivity() {
  document.getElementById('activityTable').innerHTML = `
    <thead><tr><th>ID</th><th>User</th><th>Action</th><th>Entity</th><th>Type</th><th>Time</th></tr></thead>
    <tbody>${activityLog.map(a => `<tr><td><span class="chip chip-gray">${a.id}</span></td><td><strong>${a.user}</strong></td><td>${a.action}</td><td>${a.entity}</td><td><span class="chip ${a.type === 'create' ? 'chip-green' : a.type === 'update' ? 'chip-blue' : 'chip-gray'}">${a.type}</span></td><td>${a.time}</td></tr>`).join('')}</tbody>`;
}

function addPatient() {
  let firstName = document.getElementById('newFirstName').value;
  let lastName = document.getElementById('newLastName').value;
  if (!firstName || !lastName) { showToast('Please enter name', 'warn'); return; }
  let newPatient = {
    id: `SJMH-${String(patients.length + 1).padStart(3,'0')}`,
    name: `${firstName} ${lastName}`,
    email: document.getElementById('newEmail').value,
    phone: document.getElementById('newPhone').value,
    dob: document.getElementById('newDob').value,
    dept: document.getElementById('newDept').value,
    status: 'active',
    joined: new Date().toISOString().split('T')[0],
    city: 'Naivasha'
  };
  patients.push(newPatient);
  activityLog.unshift({ id: `ACT-${++nextId.activity}`, user: 'Admin', action: 'Patient added', entity: newPatient.id, time: new Date().toLocaleString(), type: 'create' });
  renderAll();
  closeModal('addPatient');
  showToast(`Patient ${newPatient.name} added`, 'success');
  document.getElementById('newFirstName').value = '';
  document.getElementById('newLastName').value = '';
}

function addAppointment() {
  let patientId = document.getElementById('apptPatient').value;
  let patient = patients.find(p => p.id === patientId);
  let newAppt = {
    id: `APT-${String(nextId.appt++).padStart(3,'0')}`,
    patientId: patientId,
    patient: patient.name,
    doctor: document.getElementById('apptDept').value,
    dept: patient.dept,
    date: document.getElementById('apptDate').value,
    time: document.getElementById('apptTime').value,
    type: document.getElementById('apptType').value,
    status: 'pending'
  };
  appointments.push(newAppt);
  activityLog.unshift({ id: `ACT-${++nextId.activity}`, user: 'Admin', action: 'Appointment requested', entity: newAppt.id, time: new Date().toLocaleString(), type: 'create' });
  renderAll();
  closeModal('addAppt');
  showToast(`Appointment requested for ${patient.name}`, 'info');
}

function approveAppointment(apptId) {
  let appt = appointments.find(a => a.id === apptId);
  if (appt) {
    appt.status = 'confirmed';
    activityLog.unshift({ id: `ACT-${++nextId.activity}`, user: 'Admin', action: 'Appointment approved', entity: apptId, time: new Date().toLocaleString(), type: 'update' });
    renderAll();
    showToast(`Appointment ${apptId} approved`, 'success');
  }
}

function addPrescription() {
  let patientId = document.getElementById('rxPatient').value;
  let patient = patients.find(p => p.id === patientId);
  let newRx = {
    id: `RX-${String(nextId.rx++).padStart(3,'0')}`,
    patientId: patientId,
    patient: patient.name,
    drug: document.getElementById('rxDrug').value,
    dosage: document.getElementById('rxDosage').value,
    freq: document.getElementById('rxFreq').value,
    refill: document.getElementById('rxRefill').value,
    status: 'active'
  };
  prescriptions.push(newRx);
  activityLog.unshift({ id: `ACT-${++nextId.activity}`, user: 'Admin', action: 'Prescription issued', entity: newRx.id, time: new Date().toLocaleString(), type: 'create' });
  renderAll();
  closeModal('addRx');
  showToast(`Prescription issued for ${patient.name}`, 'success');
}

function sendBroadcast() {
  let subject = document.getElementById('broadcastSubject').value;
  let message = document.getElementById('broadcastMessage').value;
  if (!subject || !message) { showToast('Please enter subject and message', 'warn'); return; }
  showToast(`Broadcast sent to patients: "${subject}"`, 'success');
  closeModal('sendMsg');
  document.getElementById('broadcastSubject').value = '';
  document.getElementById('broadcastMessage').value = '';
}

function markMessageRead(msgId) {
  let msg = messages.find(m => m.id === msgId);
  if (msg && msg.status === 'unread') {
    msg.status = 'read';
    renderMessages();
    showToast('Message marked as read', 'info');
  }
}

function openDetail(type, id) {
  if (type === 'patient') {
    let p = patients.find(p => p.id === id);
    if (!p) return;
    let age = new Date().getFullYear() - new Date(p.dob).getFullYear();
    let patientAppts = appointments.filter(a => a.patientId === id);
    document.getElementById('detailPanel').innerHTML = `
      <div class="dp-head"><div class="dp-head-top"><span>Patient Record</span><button class="dp-close" onclick="closeDetail()">✕</button></div><div class="dp-patient-row"><div class="dp-avatar">${p.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><div class="dp-name">${p.name}</div><div class="dp-meta">${p.id} · ${p.city} · ${age} years</div></div></div></div>
      <div class="dp-body">
        <div class="dp-section"><div class="dp-section-title">Personal Information</div><div class="dp-info-grid"><div class="dp-info-item"><div class="dp-info-label">Email</div><div class="dp-info-val">${p.email}</div></div><div class="dp-info-item"><div class="dp-info-label">Phone</div><div class="dp-info-val">${p.phone}</div></div><div class="dp-info-item"><div class="dp-info-label">DOB</div><div class="dp-info-val">${formatDate(p.dob)}</div></div><div class="dp-info-item"><div class="dp-info-label">Department</div><div class="dp-info-val">${p.dept}</div></div></div></div>
        <div class="dp-section"><div class="dp-section-title">Appointments (${patientAppts.length})</div>${patientAppts.map(a => `<div style="padding:.6rem;background:var(--bg);border-radius:8px;margin-bottom:.5rem"><div><strong>${a.doctor}</strong> · ${formatDate(a.date)} at ${a.time}</div><div>${a.type} · ${statusChip(a.status)}</div></div>`).join('')}</div>
      </div>
      <div class="dp-actions"><button class="btn btn-primary btn-sm" onclick="openModal('addAppt');closeDetail();setTimeout(()=>document.getElementById('apptPatient').value='${p.id}',100)">📅 Schedule Appointment</button><button class="btn btn-ghost btn-sm" onclick="openModal('addRx');closeDetail();setTimeout(()=>document.getElementById('rxPatient').value='${p.id}',100)">💊 Prescribe</button></div>`;
  }
  document.getElementById('detailOverlay').classList.add('open');
}

function closeDetail() { document.getElementById('detailOverlay').classList.remove('open'); }

function openModal(id) {
  let patientOpts = patients.map(p => `<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
  if (document.getElementById('apptPatient')) document.getElementById('apptPatient').innerHTML = patientOpts;
  if (document.getElementById('rxPatient')) document.getElementById('rxPatient').innerHTML = patientOpts;
  let dateInput = document.getElementById('apptDate');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
  document.getElementById(`modal-${id}`).classList.add('open');
}
function closeModal(id) { document.getElementById(`modal-${id}`).classList.remove('open'); }

function filterPatients() { renderPatients(); }
function filterAppointments() { renderAppointments(); }

function nav(btn, id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(`sec-${id}`).classList.add('active');
  document.getElementById('tbTitle').textContent = document.querySelector(`.nav-btn.active .ni`)?.nextSibling?.textContent || id;
}

function openSidebar() { document.getElementById('sidebar').classList.add('open'); document.getElementById('sbBg').classList.add('open'); }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sbBg').classList.remove('open'); }
function logout() { showToast('Signed out', 'info'); setTimeout(() => window.location.href = 'index.html', 1000); }

function showToast(msg, type) {
  let t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  setTimeout(() => t.className = 'toast', 3000);
}
function updateClock() { document.getElementById('tbTime').textContent = new Date().toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); }
setInterval(updateClock, 1000);
updateClock();

function renderAll() {
  renderStats();
  renderPatients();
  renderAppointments();
  renderMessages();
  renderPrescriptions();
  renderWhatsApp();
  renderEmails();
  renderPendingList();
  renderRecentMessages();
  renderDatabase();
  renderActivity();
}
renderAll();