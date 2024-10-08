import Navbar from './Navbar';
import Footer from './Footer';
import AboutUsImg from '../assets/about-us.jpg';
import '../styles/About.css'

function About() {
    
    return(
        <>
        <Navbar></Navbar>
        <section className='about-page'>
            <div className='title'>
                <h2 className='large-header'>Welcome</h2>
                <h3 className='sub-header'>
                    Leafy Greens was founded on the premise
                    that plants make us happier. 
                </h3>
            </div>
            <div className='about-us-main'>
                <img src={AboutUsImg} className='about-us-hero'></img>
                <div className='copy'>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas sapien leo taciti sapien sem. 
                        Nullam urna adipiscing augue et praesent adipiscing montes. Etiam eleifend enim; eget quisque 
                        laoreet vel porta posuere. Nibh vehicula tincidunt dictum class lacinia; aenean posuere. 
                    </p>
                    <p>
                        Placerat praesent et magnis interdum euismod. Viverra donec mattis iaculis augue volutpat auctor 
                        taciti. Elementum quis vestibulum cras egestas arcu netus fames ultricies. Litora aenean 
                        ultricies euismod curabitur ornare neque nostra fringilla.
                    </p>
                    <p>
                        Convallis massa tempus elementum curae; sociosqu primis habitasse erat. Sapien phasellus efficitur
                        est diam neque, taciti turpis. Blandit consequat curabitur quis praesent fermentum nulla 
                        condimentum ipsum. Neque platea adipiscing netus sem ligula fames! Netus phasellus nunc tellus 
                        sagittis suscipit tincidunt quis. Maximus mauris non ad aptent ultricies viverra class justo litora. 
                    </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    )
}

export default About