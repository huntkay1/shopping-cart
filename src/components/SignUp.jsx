import '../styles/Home.css'
import arrowIcon from '../assets/arrow-icon.svg'

function SignUp() {
    return(
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
    )
}

export default SignUp