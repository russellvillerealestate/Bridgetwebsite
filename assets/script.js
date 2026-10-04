const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));

const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (!data.get('consent')) {
      alert('Please confirm that you agree to send this information by email.');
      return;
    }
    const subject = encodeURIComponent(`Website message from ${data.get('name') || 'visitor'}`);
    const body = encodeURIComponent(
`Name: ${data.get('name') || ''}
Email: ${data.get('email') || ''}

Message:
${data.get('message') || ''}`
    );
    window.location.href = `mailto:bridgetbuildscharacter@gmail.com?subject=${subject}&body=${body}`;
  });
}
