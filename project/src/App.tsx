const navigationItems = ['main', 'about us', 'apply now', 'houses', 'blog'];

type MarqueeImage = {
  src: string;
  alt: string;
};

const marqueeImages: MarqueeImage[] = [
  { src: 'https://images.pexels.com/photos/11948442/pexels-photo-11948442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Taj Mahal in Agra, India' },
  { src: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'India Gate in New Delhi' },
  { src: 'https://images.pexels.com/photos/14094276/pexels-photo-14094276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Red Fort in Delhi, India' },
  { src: 'https://images.pexels.com/photos/4727066/pexels-photo-4727066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Lotus Temple in New Delhi, India' },
  { src: 'https://images.pexels.com/photos/28133996/pexels-photo-28133996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Statue of Liberty in New York, USA' },
  { src: 'https://images.pexels.com/photos/8821401/pexels-photo-8821401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Golden Gate Bridge in San Francisco, USA' },
  { src: 'https://images.pexels.com/photos/6477549/pexels-photo-6477549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'The White House in Washington, DC, USA' },
  { src: 'https://images.pexels.com/photos/34934277/pexels-photo-34934277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Times Square in New York City, USA' },
  { src: 'https://images.pexels.com/photos/13420120/pexels-photo-13420120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'CN Tower in Toronto, Canada' },
  { src: 'https://images.pexels.com/photos/16185081/pexels-photo-16185081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Banff National Park in Alberta, Canada' },
  { src: 'https://images.pexels.com/photos/35119417/pexels-photo-35119417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Niagara Falls, Canada' },
  { src: 'https://images.pexels.com/photos/7328/building-architecture-historical-tower.jpg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Parliament Hill in Ottawa, Canada' },
  { src: 'https://images.pexels.com/photos/17160708/pexels-photo-17160708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Big Ben in London, UK' },
  { src: 'https://images.pexels.com/photos/26624348/pexels-photo-26624348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Tower Bridge in London, UK' },
  { src: 'https://images.pexels.com/photos/16333184/pexels-photo-16333184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Buckingham Palace in London, UK' },
  { src: 'https://images.pexels.com/photos/10548993/pexels-photo-10548993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'London Eye on the Thames, UK' },
];

const marqueeRows = [marqueeImages.slice(0, 8), marqueeImages.slice(8)];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#main" aria-label="Headstart home">
          headstart
        </a>

        <nav className="navigation" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              className={item === 'apply now' ? 'navigation-link navigation-link--primary' : 'navigation-link'}
              href={`#${item.replace(/ /g, '-')}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="hero" aria-label="Headstart landing page">
        <div className="hero-content">
          <a className="hero-brand" href="#main" aria-label="Headstart home">
            headstart
          </a>
          <h1>Where the world&apos;s most ambitious teens gather</h1>
          <a className="hero-cta" href="#apply-now">
            apply now
          </a>
        </div>
      </main>

      <section className="marquee" aria-label="Places where Headstart teens gather">
        <div className="marquee-stack">
          {marqueeRows.map((row, rowIndex) => (
            <div className={`marquee-row ${rowIndex === 1 ? 'marquee-row--reverse' : ''}`} key={rowIndex}>
              <div className="marquee-track">
                {[...row, ...row].map((image, imageIndex) => (
                  <figure className="marquee-item" key={`${image.src}-${imageIndex}`}>
                    <img src={image.src} alt={image.alt} loading="lazy" draggable={false} />
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
