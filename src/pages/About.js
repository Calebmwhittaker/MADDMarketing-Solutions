import Footer from '../components/Footer';

const About = () => {
    return (
    <>
    <main className='about-page'>
        <h1 className='about-title'>MaddMarketing Solutions</h1>
        <br></br>
        <p> We're MaddMarketing Solutions, a digital marketing agency that provides innovative marketing solutions to small businesses.</p>
        <br></br>
        <img className='headshot' src="/headshot.png" alt="Owner of MaddMarketing Solutions"></img>
        <br></br>
        <br></br>
        <p>We were founded by Maddison Godi, who was raised by entrepreneurs. She knows how hard it is to build a business and grow your community, which is why she's committed to helping you do just that.</p>
        <br></br>
        <p>We offer website design, social media, strategy, and more—all with one goal in mind: helping you build an incredible brand that can thrive in today's webosphere.</p>
        <hr className='about-bottom-border'></hr>
        </main>
        <Footer />

    </>
    );
};

export default About;