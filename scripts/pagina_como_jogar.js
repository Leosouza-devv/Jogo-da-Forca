 document.getElementById('ano').textContent = new Date().getFullYear();
 
  // ── WORD DEMO ──
  const secret = ['F','O','R','C','A'];
  const revealed = [false, false, false, false, false];
 
  function buildWord() {
    const demo = document.getElementById('wordDemo');
    demo.innerHTML = '';
    secret.forEach((l, i) => {
      const box = document.createElement('div');
      box.classList.add('letter-box');
      if (revealed[i]) { box.classList.add('revealed'); box.textContent = l; }
      else              { box.classList.add('hidden');   box.textContent = l; }
      box.id = 'lb_' + i;
      demo.appendChild(box);
    });
  }
  buildWord();
 
  function revealLetter(letter) {
    secret.forEach((l, i) => {
      if (l === letter.toUpperCase() && !revealed[i]) {
        revealed[i] = true;
        const box = document.getElementById('lb_' + i);
        box.classList.remove('hidden');
        box.classList.add('revealed');
        box.textContent = l;
      }
    });
  }
 
  // ── KEYBOARD DEMO ──
  const rows = [
    ['A','B','C','D','E','F','G','H','I','J'],
    ['K','L','M','N','O','P','Q','R','S'],
    ['T','U','V','W','X','Y','Z']
  ];
  const hitsForSecret = new Set(['F','O','R','C','A']);
 
  function buildKeyboard() {
    const kd = document.getElementById('keyboardDemo');
    kd.innerHTML = '';
    rows.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('kb-row');
      row.forEach(letter => {
        const key = document.createElement('div');
        key.classList.add('key');
        key.textContent = letter;
        key.id = 'key_' + letter;
        key.addEventListener('click', () => handleKey(letter, key));
        rowDiv.appendChild(key);
      });
      kd.appendChild(rowDiv);
    });
  }
 
  function handleKey(letter, keyEl) {
    if (keyEl.classList.contains('hit') || keyEl.classList.contains('miss')) return;
    if (hitsForSecret.has(letter)) {
      keyEl.classList.add('hit');
      revealLetter(letter);
    } else {
      keyEl.classList.add('miss');
      loseLife();
    }
  }
 
  buildKeyboard();
 
  // ── LIVES DEMO ──
  let livesLeft = 7;
  function buildLives() {
    const row = document.getElementById('livesRow');
    row.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const l = document.createElement('div');
      l.classList.add('life');
      l.classList.add(i < livesLeft ? 'active' : 'lost');
      l.textContent = '❤️';
      row.appendChild(l);
    }
  }
  function loseLife() {
    if (livesLeft > 0) { livesLeft--; buildLives(); }
  }
  buildLives();