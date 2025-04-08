import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Sabbir Ahmed</div>
        <ul className="nav-links">
          {['home', 'about','gallery', 'education', 'skills', 'projects','experience', 'publications', 'achievements', 'media'].map((item) => (
            <li key={item}>
              <Link 
                to={item}
                smooth={true}
                duration={500}
                offset={-200} 
                className="nav-link"
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}