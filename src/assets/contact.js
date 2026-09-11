const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');

if (copyButton && copyStatus && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    copyStatus.textContent = '';
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = 'Email copied.';
    } catch {
      copyStatus.textContent = 'Could not copy automatically. Select the email address to copy it.';
    } finally {
      copyButton.disabled = false;
    }
  });
}
