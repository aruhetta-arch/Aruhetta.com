
import './styles/main.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <button
      class="menu-button"
      id="menuButton"
      aria-label="Buka menu"
      aria-controls="sidebar"
      aria-expanded="false"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <a href="#" class="logo">aruhetta<span>.</span></a>

    <button class="profile-button" aria-label="Profil">
      ♙
    </button>
  </header>

  <div class="sidebar-backdrop" id="sidebarBackdrop"></div>

  <aside
    class="sidebar"
    id="sidebar"
    aria-hidden="true"
    inert
  >
    <div class="sidebar-header">
      <a href="#" class="logo">aruhetta<span>.</span></a>
      <button class="sidebar-close" id="sidebarClose" aria-label="Tutup menu">
        ×
      </button>
    </div>

    <p class="sidebar-label">MAIN MENU</p>

    <nav class="sidebar-nav" aria-label="Navigasi utama">
      <a href="#" class="sidebar-link active">
        <span>⌂</span> Home
      </a>
      <a href="#about" class="sidebar-link">
        <span>◈</span> About
      </a>
      <a href="#arumunity" class="sidebar-link">
        <span>◎</span> Arumunity
      </a>
      <a href="#tools" class="sidebar-link">
        <span>⌘</span> Tools
      </a>
    </nav>

    <div class="sidebar-bottom">
      <p>Explore, Create, and Connect.</p>
      <small>© ${new Date().getFullYear()} Aruhetta</small>
    </div>
  </aside>

  <main>
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">WELCOME TO ARUHETTA</span>
        <h1>Explore more.<br />Be curious.</h1>
        <p>
          A place to explore, discover, and connect
          with things you love.
        </p>
        <a href="#explore" class="primary-button">
          Start Exploring <span>→</span>
        </a>
      </div>

      <div class="hero-art">
        <div class="art-circle"></div>
        <div class="art-orbit"></div>
        <span class="art-star">✦</span>
      </div>
    </section>

    <section class="intro" id="explore">
      <span class="eyebrow">DISCOVER ARUHETTA</span>
      <h2>One place, endless possibilities.</h2>
      <p>
        Aruhetta brings entertainment, useful tools,
        articles, and community together.
      </p>
    </section>

    <section class="features">
      <article class="feature-card" id="about">
        <span>01</span>
        <h3>About</h3>
        <p>Get to know more about Aruhetta.</p>
        <a href="#about">Explore →</a>
      </article>

      <article class="feature-card" id="arumunity">
        <span>02</span>
        <h3>Arumunity</h3>
        <p>Discover a place to connect and share.</p>
        <a href="#arumunity">Explore →</a>
      </article>

      <article class="feature-card" id="tools">
        <span>03</span>
        <h3>Tools</h3>
        <p>Find useful tools for your daily needs.</p>
        <a href="#tools">Explore →</a>
      </article>
    </section>

    <section class="updates">
      <span class="eyebrow">WHAT'S HAPPENING</span>
      <h2>Currently in the works.</h2>
      <p>
        We're preparing something new.
        Stay tuned for the next chapter of Aruhetta.
      </p>
    </section>
  </main>

  <footer class="footer">
    <a href="#" class="logo">aruhetta<span>.</span></a>
    <p>Explore, Create, and Connect.</p>
    <small>© ${new Date().getFullYear()} Aruhetta.</small>
  </footer>
`

const menuButton = document.querySelector('#menuButton')
const sidebar = document.querySelector('#sidebar')
const sidebarBackdrop = document.querySelector('#sidebarBackdrop')
const sidebarClose = document.querySelector('#sidebarClose')
const sidebarLinks = document.querySelectorAll('.sidebar-link')

function openSidebar() {
  sidebar.classList.add('is-open')
  sidebarBackdrop.classList.add('is-visible')
  menuButton.classList.add('active')

  menuButton.setAttribute('aria-expanded', 'true')
  sidebar.setAttribute('aria-hidden', 'false')
  sidebar.inert = false

  document.body.classList.add('sidebar-open')
  sidebarClose.focus()
}

function closeSidebar() {
  sidebar.classList.remove('is-open')
  sidebarBackdrop.classList.remove('is-visible')
  menuButton.classList.remove('active')

  menuButton.setAttribute('aria-expanded', 'false')
  sidebar.setAttribute('aria-hidden', 'true')
  sidebar.inert = true

  document.body.classList.remove('sidebar-open')
  menuButton.focus()
}

menuButton.addEventListener('click', () => {
  if (sidebar.classList.contains('is-open')) {
    closeSidebar()
  } else {
    openSidebar()
  }
})

sidebarClose.addEventListener('click', closeSidebar)
sidebarBackdrop.addEventListener('click', closeSidebar)

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    sidebar.classList.contains('is-open')
  ) {
    closeSidebar()
  }
})

sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach((item) => {
      item.classList.remove('active')
    })

    link.classList.add('active')
    closeSidebar()
  })
})
