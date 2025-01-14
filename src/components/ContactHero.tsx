import '../styles/ContactHero.css'

function ContactHero(){
    return(
        <>
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>Contact Makayla</h1>
                    <h2>Have a question or need assistance? Reach out to me!</h2>
                </div>
                <div className="contact-hero-img">
                    <img src="/public/assets/contactHero.png" alt="" />
                </div>
            </section>
        </>
    );
}

export default ContactHero;