const form = document.getElementById('contact-form');
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
