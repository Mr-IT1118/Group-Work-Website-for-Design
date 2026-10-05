const form = document.getElementById('contact-form');
if (form) {
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  for (const key of ['name', 'message']) {
    const field = form.elements.namedItem(key);
    field.setCustomValidity(field.value.trim() ? '' : 'Please enter a ' + key + '.');
  }
  if (!form.reportValidity()) return;
  for (const key of ['name', 'email', 'topic', 'message']) {
    document.getElementById('preview-' + key).textContent = form.elements.namedItem(key).value.trim();
  }
  document.getElementById('preview-status').textContent = 'Preview ready. This demo has not sent or saved your message.';
  const preview = document.getElementById('form-preview');
  preview.hidden = false;
  preview.focus();
});
form.addEventListener('input', (event) => {
  event.target.setCustomValidity('');
  document.getElementById('form-preview').hidden = true;
});

}

// Preserve a useful default even with JavaScript disabled: all skill cards are visible.
const picker = document.querySelector('.skill-picker');
if (picker) {
  picker.hidden = false;
  const buttons = [...picker.querySelectorAll('button[data-skill]')];
  const choose = (id) => {
    document.querySelectorAll('.skill-panel').forEach(panel => { panel.hidden = panel.id !== id; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.skill === id)));
  };
  choose('dribble');
  buttons.forEach(button => button.addEventListener('click', () => choose(button.dataset.skill)));
}
const checklist = document.querySelector('.checklist');
if (checklist) {
  const boxes = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const update = () => {
    const count = boxes.filter(box => box.checked).length;
    document.getElementById('check-progress').textContent = count === boxes.length ? '5 of 5 ready — enjoy your game!' : count + ' of 5 ready';
  };
  boxes.forEach(box => box.addEventListener('change', update));
  checklist.querySelector('.reset-checks').addEventListener('click', () => { boxes.forEach(box => { box.checked = false; }); update(); });
}
if (form && new URLSearchParams(location.search).get('topic') === 'community') {
  form.elements.namedItem('topic').value = 'Community & collaboration';
}
