const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const type = card.dataset.cert;
    const img = card.querySelector('img');

    // Set title
    if (type === 'csharp') modalTitle.textContent = 'C# Certificate';
    else if (type === 'clang') modalTitle.textContent = 'C Language Certificate';

    // Set image (add this part)
    if (img) {
      document.getElementById('modal-img').src = img.src;
    }

    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (lightbox && img) {
    img.src = src;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const confetti = [];
const count = 90;

const pinks = [
  '#ffb6c1',
  '#ffc0cb',
  '#ffe4e1',
  '#ff69b4',
  '#f8bbd0',
  '#ff9aa2'
];

function createConfetti() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 8 + 4,
    speed: Math.random() * 2 + 1,
    sway: Math.random() * 2 - 1,
    color: pinks[Math.floor(Math.random() * pinks.length)],
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 4 - 2
  };
}

for (let i = 0; i < count; i++) {
  confetti.push(createConfetti());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach(c => {
    c.y += c.speed;
    c.x += Math.sin(c.y * 0.01) * c.sway;
    c.rotation += c.rotationSpeed;

    if (c.y > canvas.height) {
      c.y = -20;
      c.x = Math.random() * canvas.width;
    }

    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rotation * Math.PI / 180);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
    ctx.restore();
  });

  requestAnimationFrame(animate);
}
animate();

function openLightbox(imageSrc) {
  // Remove old lightbox
  document.querySelectorAll('.lightbox').forEach(el => el.remove());

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="close">&times;</span>
      <img src="${imageSrc}" alt="Hobby">
    </div>
  `;
  document.body.appendChild(lightbox);

  // Close button
  lightbox.querySelector('.close').onclick = () => lightbox.remove();

  // Click outside to close
  lightbox.onclick = (e) => {
    if (e.target === lightbox) lightbox.remove();
  };
}
function openLightbox(imageSrc) {
  const old = document.querySelector('.lightbox');
  if (old) old.remove();

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-box">
      <span class="close-btn">&times;</span>
      <img src="${imageSrc}" alt="Image">
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.querySelector('.close-btn').onclick = () => lightbox.remove();
  lightbox.onclick = (e) => {
    if (e.target === lightbox) lightbox.remove();
  };
}
document.addEventListener("click", function(e) {

    const candies = [
        ["#ff3285", "#ff9bc5", "#a90048"],
        ["#29aaff", "#a4e6ff", "#0754bd"],
        ["#ffb323", "#ffe18a", "#c46a00"],
        ["#a44bff", "#d9a5ff", "#6220b5"],
        ["#35df68", "#a5ffad", "#128c39"]
    ];

    for (let i = 0; i < 12; i++) {
        const candy = document.createElement("div");
        candy.className = "candy";

        const color = candies[Math.floor(Math.random() * candies.length)];

        candy.style.setProperty("--main", color[0]);
        candy.style.setProperty("--light", color[1]);
        candy.style.setProperty("--dark", color[2]);

        candy.style.left = e.clientX + "px";
        candy.style.top = e.clientY + "px";

        candy.style.setProperty("--x", (Math.random() - .5) * 250 + "px");
        candy.style.setProperty("--y", (Math.random() - .5) * 250 + "px");
        candy.style.setProperty("--r", (Math.random() * 360) + "deg");

        document.body.appendChild(candy);

        setTimeout(() => candy.remove(), 900);
    }
});
