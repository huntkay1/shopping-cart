import '../styles/App.css'
import '../styles/Home.css'
import Nav from '../components/Navbar.jsx'

import Footer from '../components/Footer.jsx'
import arrowIcon from '../assets/arrow-icon.svg'

function App() {
  return (
    <>
      <Nav />
      <section className='hero'>
            <div className='hero-one'></div>
            <div className='hero-two'></div>
            <div className='hero-cta'>
                <h2>Spring Into Fall</h2>
                <p>Lorem ipsum sit amet, consectetur molestiae possimus odit rerum sapiente.</p>
                <button>Shop Our Fall Collection</button>
            </div>
      </section>

      <section className='popular'>
          <div className='popular-cta'>
              <h2>What's Popular</h2>
              <p>Saepe, cum dolores laborum voluptate voluptas excepturi qui minus ad.</p>
              <button className='green-button'>See More</button>
          </div>
          <div className='popular-images'>
              <div className='container-1'>
                  <div className='popular-1'></div>
              </div>
              <div className='container-2'>
                  <div className='popular-2'></div>
              </div>
          </div>
      </section>

      <section className='signup-section'>
          <h2>Sign up for our newsletter</h2>
          <div className='input-container'>
              <input type='email' placeholder='Email'></input>
              <button type='submit'>
                  <p>Subscribe</p>
                  <img src={arrowIcon}></img>
              </button>
          </div>
      </section>

      <Footer />
    </>

  )

}

export default App
