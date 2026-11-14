
import './styles/main.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <button class="menu-button" id="menuButton" aria-label="Buka menu">
      ☰
    </button>

    <a href="#" class="logo">aruhetta<span>.</span></a>

    <button class="profile-button" aria-label="Profil">
      ♙
    </button>
  </header>

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
      <article class="feature-card">
        <span>01</span>
        <h3>About</h3>
        <p>Get to know more about Aruhetta.</p>
        <a href="#">Explore →</a>
      </article>

      <article class="feature-card">
        <span>02</span>
        <h3>Arumunity</h3>
        <p>Discover a place to connect and share.</p>
        <a href="#">Explore →</a>
      </article>

      <article class="feature-card">
        <span>03</span>
        <h3>Tools</h3>
        <p>Find useful tools for your daily needs.</p>
        <a href="#">Explore →</a>
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

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active')
})
