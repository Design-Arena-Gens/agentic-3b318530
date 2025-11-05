export default function HomePage() {
  return (
    <div className="page">
      <main className="hero">
        <h1 className="title">
          Grokipedia <span className="version">v0.1</span>
        </h1>
        <form className="searchForm" action="#" method="get" role="search" aria-label="Grokipedia search">
          <input
            className="searchInput"
            type="search"
            name="q"
            placeholder="Search Grokipedia..."
            autoComplete="off"
            aria-label="Search Grokipedia"
          />
        </form>
      </main>

      <div className="ticker" aria-live="polite" aria-atomic="true">
        <span className="tickerLabel">Articles Available:</span>
        <span className="tickerValue">885 000</span>
      </div>

      <footer className="footer">
        <nav aria-label="Footer">
          <a href="#" className="footerLink">Terms of Service</a>
          <span className="divider">/</span>
          <a href="#" className="footerLink">Privacy Policy</a>
          <span className="divider">/</span>
          <a href="#" className="footerLink">AUP</a>
        </nav>
      </footer>
    </div>
  );
}
