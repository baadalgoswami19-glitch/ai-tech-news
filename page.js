const categories = ["Mobiles", "Laptops", "GPUs", "CPUs", "Gaming", "AI", "Deals"];

const cards = [
  { tag: "SMARTPHONES", title: "Latest smartphone launches, specs and price updates", text: "Discover what's new in India's fast-moving smartphone market." },
  { tag: "GPU & GAMING", title: "GPU performance and gaming buying guides", text: "Compare graphics cards, laptops and gaming hardware." },
  { tag: "AI & TECH", title: "Technology news explained simply", text: "Fresh developments turned into useful, source-backed stories." }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap nav">
          <div className="logo"><span>TP</span> TechPulse</div>
          <nav>{categories.map(c => <a href={"#"+c.toLowerCase()} key={c}>{c}</a>)}</nav>
          <button className="searchBtn">Search</button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <div className="eyebrow">AI-POWERED TECHNOLOGY INTELLIGENCE</div>
            <h1>Tech news.<br/><em>Smarter.</em> Faster.</h1>
            <p className="lead">Fresh technology information, comparisons and reviews — researched, structured and updated with AI.</p>
            <div className="searchBox">
              <span>⌕</span>
              <input placeholder="Search phones, laptops, GPUs, comparisons..." />
              <button>Search</button>
            </div>
            <div className="chips">
              <span>Trending</span><span>iPhone</span><span>Samsung</span><span>RTX 50 Series</span>
            </div>
          </div>
          <div className="heroCard">
            <div className="live"><i/> LIVE TECH INTELLIGENCE</div>
            <div className="bigNumber">24/7</div>
            <p>New stories and product information can be researched and prepared automatically.</p>
            <div className="miniStats"><b>News</b><b>Reviews</b><b>Compare</b></div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="sectionHead">
          <div><div className="eyebrow">EXPLORE</div><h2>What are you looking for?</h2></div>
          <a href="#latest">View latest →</a>
        </div>
        <div className="cards">
          {cards.map(card => <article className="card" key={card.tag}>
            <div className="cardIcon">◈</div>
            <small>{card.tag}</small><h3>{card.title}</h3><p>{card.text}</p><a href="#latest">Explore →</a>
          </article>)}
        </div>
      </section>

      <section id="latest" className="wrap section latest">
        <div className="eyebrow">LATEST INTELLIGENCE</div>
        <h2>Fresh technology stories</h2>
        <div className="newsGrid">
          <article className="featured"><div className="placeholder">TECH</div><small>COMING SOON</small><h3>Your AI-powered tech newsroom starts here.</h3><p>Once the research pipeline is connected, new source-backed stories can be generated and published automatically.</p></article>
          <div className="side">
            <article><small>MOBILES</small><h3>Compare smartphones by price, camera, battery and performance.</h3></article>
            <article><small>GAMING</small><h3>Find the right GPU and gaming hardware for your budget.</h3></article>
          </div>
        </div>
      </section>

      <footer><div className="wrap footer"><div className="logo"><span>TP</span> TechPulse</div><p>AI-powered technology news & reviews.</p><p>© 2026 TechPulse India</p></div></footer>
    </main>
  );
}
