// ============ LOCAL STORAGE HELPERS ============
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}

// ============ MODAL FUNCTIONS ============
function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  clearMessages();
}

function switchModal(fromId, toId) {
  closeModal(fromId);
  setTimeout(() => openModal(toId), 150);
}

function showMessage(elementId, text, type) {
  const el = document.getElementById(elementId);
  el.textContent = text;
  el.className = 'message ' + type;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}

function clearMessages() {
  document.querySelectorAll('.message').forEach(m => {
    m.style.display = 'none';
  });
}
// ============ REGISTER HANDLER ============
function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (password !== confirmPassword) {
    showMessage('registerMessage', '❌ Passwords do not match!', 'error');
    return;
  }

  if (password.length < 6) {
    showMessage('registerMessage', '❌ Password must be at least 6 characters!', 'error');
    return;
  }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    showMessage('registerMessage', '❌ Email already registered!', 'error');
    return;
  }

  users.push({ name, email, password });
  saveUsers(users);
  showMessage('registerMessage', '✅ Registration successful! Please login.', 'success');
  document.getElementById('registerForm').reset();

  setTimeout(() => switchModal('registerModal', 'loginModal'), 1500);
}

// ============ LOGIN HANDLER ============
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showMessage('loginMessage', '❌ Invalid email or password!', 'error');
    return;
  }

  setCurrentUser(user);
  showMessage('loginMessage', '✅ Login successful! Welcome back!', 'success');
  if (rememberMe) {
    localStorage.setItem('rememberedEmail', email);
  } else {
    localStorage.removeItem('rememberedEmail');
  }

  setTimeout(() => {
    closeModal('loginModal');
    document.getElementById('loginForm').reset();
    showWelcomePage(user);
  }, 1000);
}

// ============ LOGOUT HANDLER ============
function handleLogout() {
  clearCurrentUser();
  document.getElementById('welcomePage').style.display = 'none';
  document.querySelector('.navbar').style.display = 'flex';
  document.getElementById('navLoginBtn').textContent = 'Login';
  document.getElementById('navLoginBtn').style.display = 'block';
}

// ============ SHOW WELCOME PAGE ============
function showWelcomePage(user) {
  document.getElementById('userName').textContent = user.name;
  document.getElementById('welcomePage').style.display = 'block';
  document.getElementById('navLoginBtn').textContent = user.name;
}

// ============ NAV LOGIN BUTTON ============
document.getElementById('navLoginBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const currentUser = getCurrentUser();
  if (currentUser) {
    showWelcomePage(currentUser);
  } else {
    openModal('loginModal');
  }
});

// ============ CHECK REMEMBERED USER ON LOAD ============
window.addEventListener('load', function() {
  const rememberedEmail = localStorage.getItem('rememberedEmail');
  if (rememberedEmail) {
    document.getElementById('loginEmail').value = rememberedEmail;
  }

  const currentUser = getCurrentUser();
  if (currentUser) {
    showWelcomePage(currentUser);  }
});

// ============ CLOSE MODAL ON OUTSIDE CLICK ============
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
      clearMessages();
    }
  });
});