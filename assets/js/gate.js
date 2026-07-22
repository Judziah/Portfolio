(function () {
  var PASSWORD = '6001';
  var STORAGE_KEY = 'saffron_ai_projects_unlocked';

  if (sessionStorage.getItem(STORAGE_KEY) === 'true') return;

  document.documentElement.classList.add('gate-locked');

  var overlay = document.createElement('div');
  overlay.id = 'site-gate';
  overlay.innerHTML =
    '<div class="gate-card">' +
      '<p class="gate-eyebrow">Private for now</p>' +
      '<h1>Enter password</h1>' +
      '<form id="gate-form" autocomplete="off">' +
        '<input type="password" id="gate-input" placeholder="Password" inputmode="numeric" autocomplete="off">' +
        '<button type="submit">Unlock</button>' +
      '</form>' +
      '<p class="gate-error" id="gate-error" hidden>Wrong password — try again.</p>' +
    '</div>';

  document.body.insertBefore(overlay, document.body.firstChild);

  var input = document.getElementById('gate-input');
  input.focus();

  document.getElementById('gate-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      document.documentElement.classList.remove('gate-locked');
      overlay.remove();
    } else {
      document.getElementById('gate-error').hidden = false;
      input.value = '';
      input.focus();
    }
  });
})();
