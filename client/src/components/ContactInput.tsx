import '../styles/ContactInput.css'

function ContactInput(){
    return(
        <>
            <section className="contact-input">
                <div className="contact-panel">
                    <h1>Get in touch with me</h1>
                    <h2>Contact me today for information on how you can get started with our services</h2>
                    <input type="text" className="name" placeholder='First & Last Name'/>
                    <input type="text" className="email" placeholder='E-Mail Address*' />
                    <input type="text" className="phone" placeholder='Phone Address*'/>
                    <textarea placeholder='Please leave a brief message about your concerns...'/>
                    <button className="submit-btn">Submit</button>
                </div>
            </section>
        </>
    );
}

export default ContactInput;