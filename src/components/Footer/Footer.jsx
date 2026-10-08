import { PROFILE } from '../../data/site'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
