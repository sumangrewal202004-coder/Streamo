
import './Footer.css'
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div>
       <footer>
      <div className="footer">
        <div><img src={logo} alt="logo" height="90px" /></div>
        <div>
          <p>Made with &#10084; by Suman Grewal</p>
          <p>All Rights reserved &copy; 2026</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
