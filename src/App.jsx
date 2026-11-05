import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Camera as Instagram, Menu, MessageCircle, Phone, Play, X, ChevronDown } from 'lucide-react'
import broverseLogo from './assets/broverse-logo.jpg'
import './App.css'

const instagramUrl = 'https://www.instagram.com/the_broverse.in/'
const whatsappMessage = encodeURIComponent('Hello THE BROVERSE! I visited your website and would like to connect with you.')
const phones = ['7046794631', '9328291558', '7621017281']
const phoneLabels = ['+91 70467 94631', '+91 93282 91558', '+91 7621017281']

const videos = [
  [1,'Celebrating Together','A shared moment from THE BROVERSE.','lifestyle'],
  [2,'Broverse Moments','A glimpse of life through our lens.','lifestyle'],
  [3,'Creator Diary','People, stories, and moments from our world.','lifestyle'],
  [4,'A Celebration in Motion','Colorful festival moments captured in motion.','festivals'],
  [5,'The Pulse of the Night','A high-energy scene from a night out.','entertainment'],
  [6,'Festival Colours','A vivid celebration of culture and community.','festivals'],
  [7,'After Dark','Nightlife atmosphere and movement.','entertainment'],
  [8,'Crowd Energy','The energy of people and the moment.','entertainment'],
  [9,'Festival Street','Street-level festival celebrations.','festivals'],
  [10,'Ganesh Celebration','A devotional celebration scene.','festivals'],
  [11,'Community Celebration','Culture and community on display.','festivals'],
  [12,'Behind the Sound','A memorable music-night moment.','entertainment'],
  [13,'Brotherhood in Focus','People sharing a candid moment together.','lifestyle'],
  [14,'Tradition Comes Alive','A traditional festival performance.','festivals'],
  [15,'Life With Them','A candid glimpse into everyday company.','lifestyle'],
  [16,'A Real Conversation','A candid creator conversation.','lifestyle'],
  [17,'The Details','Small details that make a moment memorable.','lifestyle'],
  [18,'City Celebration','People celebrating together in the city.','events'],
  [19,'Out in the City','An energetic evening gathering.','events'],
  [20,'Around the Table','Friends sharing time and conversation.','lifestyle'],
  [21,'On the Journey','A candid travel and friendship moment.','events'],
  [22,'Creative Visual','A creative visual from the Broverse collection.','lifestyle'],
  [23,'The Road Home','A candid journey shared with friends.','events'],
].map(([id,title,description,category]) => ({
  id,title,description,category,featured:id === 4,
  videoPath:`/videos/${category}/broverse-${String(id).padStart(2,'0')}.mp4`,
  thumbnailPath:`/thumbnails/broverse-${String(id).padStart(2,'0')}.jpg`,
}))

const faq = [
  ['How can I collaborate with THE BROVERSE?','Reach us through WhatsApp, phone, Instagram, or the contact form and share what you have in mind.'],
  ['Where can I follow your latest work?','All current updates are shared on our official Instagram: @the_broverse.in.'],
  ['Can I contact the team about an event?','Yes. Use any of the three contact cards above to call or message the team directly.'],
]

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [filter,setFilter] = useState('all')
  const [activeVideo,setActiveVideo] = useState(null)
  const [openFaq,setOpenFaq] = useState(0)
  const [formStatus,setFormStatus] = useState('')
  const visible = filter === 'all' ? videos : videos.filter(v => v.category === filter)

  useEffect(() => {
    document.body.style.overflow = activeVideo ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeVideo])

  const submitContact = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const text = `Hello THE BROVERSE! I visited your website and would like to connect with you.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nSubject: ${data.get('subject')}\n\n${data.get('message')}`
    window.open(`https://wa.me/917046794631?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
    setFormStatus('Your message is ready in WhatsApp. Send it there to complete delivery.')
  }

  return <>
    <nav className="navbar">
      <a className="brand" href="#home" aria-label="THE BROVERSE home"><span><img src={broverseLogo} alt="" /></span>BROVERSE<sup>®</sup></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['home','about','work','community','contact'].map(item => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </div>
      <a className="nav-instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
      <a className="nav-contact" href="#contact">LET'S TALK <ArrowUpRight/></a>
    </nav>

    <main>
      <section className="hero-section" id="home">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="hero-content">
          <p className="eyebrow">CREATIVE CULTURE FROM INDIA <span>●</span></p>
          <h1>WELCOME TO<br/><em>THE BROVERSE</em></h1>
          <div className="hero-bottom">
            <p>NOT JUST A NAME.<br/>IT'S A WHOLE UNIVERSE.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">EXPLORE OUR WORK <ArrowDown/></a>
              <a className="button ghost" href="#about">DISCOVER OUR WORLD</a>
            </div>
          </div>
        </div>
        <div className="hero-marquee"><span>CREATIVE • CULTURE • COMMUNITY • </span><span>CREATIVE • CULTURE • COMMUNITY • </span></div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 / ABOUT US</div>
        <div className="about-grid">
          <h2>A WORLD BUILT<br/>BY <em>CONNECTION.</em></h2>
          <div className="about-copy">
            <p className="lead">THE BROVERSE is a creative community shaped by culture, everyday moments, and the people who bring stories to life.</p>
            <p>We create, celebrate, and share content that feels energetic and real. From festivals to friendships, our world lives in the moments we experience together.</p>
            <a className="text-link" href="#community">BECOME PART OF THE BROVERSE <ArrowUpRight/></a>
          </div>
        </div>
        <div className="about-tiles">
          <div><span>01</span><h3>OUR VISION</h3><p>Building a space where creativity and community move together.</p></div>
          <div><span>02</span><h3>OUR CREATIVITY</h3><p>Stories rooted in culture, friendship, entertainment, and real life.</p></div>
          <div><span>03</span><h3>OUR PURPOSE</h3><p>Turning shared moments into a universe people can belong to.</p></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-label">02 / OUR WORK</div>
        <div className="work-heading"><h2>MADE TO<br/><em>MOVE YOU.</em></h2><p>Original moments from<br/>the Broverse.</p></div>
        <div className="filters">
          {['all','festivals','lifestyle','entertainment','events'].map(item => <button className={filter === item ? 'active':''} onClick={() => setFilter(item)} key={item}>{item === 'all' ? 'ALL' : item}</button>)}
        </div>
        <div className="video-grid">
          {visible.map(video => <article className="video-card" key={video.id}>
            <button className="poster" onClick={() => setActiveVideo(video)} aria-label={`Watch ${video.title}`}>
              <img src={video.thumbnailPath} alt="" loading="lazy"/><span className="play"><Play fill="currentColor"/></span><span className="category">{video.category}</span>
            </button>
            <h3>{video.title}</h3><p>{video.description}</p>
            <button className="watch" onClick={() => setActiveVideo(video)}>WATCH VIDEO <ArrowUpRight/></button>
          </article>)}
        </div>
      </section>

      <section className="community section" id="community">
        <div className="community-word">BROVERSE</div>
        <div className="community-content">
          <div className="section-label">03 / OUR COMMUNITY</div>
          <h2>THIS IS MORE THAN<br/>A COMMUNITY.<br/><em>THIS IS THE BROVERSE.</em></h2>
          <div className="community-actions"><a className="button primary" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram/> FOLLOW US</a><a className="button ghost" href="#contact">CONTACT THE CREW</a></div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-label">04 / CONTACT</div>
        <div className="contact-heading"><h2>LET'S MAKE<br/><em>SOMETHING.</em></h2><Instagram/></div>
        <div className="contact-grid">
          <div className="contact-cards">
            {phones.map((phone,index) => <article className="contact-card" key={phone}><span>0{index + 1}</span><h3>{phoneLabels[index]}</h3><div>
              <a href={`tel:+91${phone}`}><Phone/> CALL NOW</a>
              <a href={`https://wa.me/91${phone}?text=${whatsappMessage}`} target="_blank" rel="noreferrer"><MessageCircle/> WHATSAPP</a>
            </div></article>)}
            <a className="instagram-card" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram/><span>CONNECT ON INSTAGRAM</span><ArrowUpRight/></a>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <label>FULL NAME<input required name="name" autoComplete="name"/></label>
            <label>EMAIL ADDRESS<input required type="email" name="email" autoComplete="email"/></label>
            <label>SUBJECT<input required name="subject"/></label>
            <label>MESSAGE<textarea required name="message" rows="4"/></label>
            <button className="button primary" type="submit">SEND MESSAGE <ArrowUpRight/></button>
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
          </form>
        </div>
      </section>

      <section className="faq section">
        <div className="section-label">05 / FAQ</div><h2>GOOD QUESTIONS.</h2>
        {faq.map(([question,answer],index) => <div className={`faq-item ${openFaq === index ? 'open':''}`} key={question}>
          <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}<ChevronDown/></button>
          {openFaq === index && <p>{answer}</p>}
        </div>)}
      </section>
    </main>

    <footer>
      <a className="brand" href="#home"><span><img src={broverseLogo} alt="" /></span>BROVERSE<sup>®</sup></a><p>MORE THAN A BRAND.<br/>A WHOLE UNIVERSE.</p>
      <div><a href={instagramUrl} target="_blank" rel="noreferrer">INSTAGRAM</a><a href="#contact">CONTACT</a><a href="#home">BACK TO TOP ↑</a></div>
    </footer>

    <div className="floating-social" aria-label="Quick contact links">
      <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
      <a href={`https://wa.me/917046794631?text=${whatsappMessage}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
    </div>

    {activeVideo && <div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onMouseDown={e => e.target === e.currentTarget && setActiveVideo(null)}>
      <div className="modal-player">
        <button className="modal-close" onClick={() => setActiveVideo(null)} aria-label="Close video"><X/></button>
        <video src={activeVideo.videoPath} poster={activeVideo.thumbnailPath} controls playsInline autoPlay preload="metadata"/>
        <div className="modal-info"><span>{activeVideo.category}</span><h2>{activeVideo.title}</h2><p>{activeVideo.description}</p></div>
      </div>
    </div>}
  </>
}

export default App
