import React, {useEffect} from 'react';
import './Contact.scss';
import ScrollReveal from "../../ScrollReveal";

function Contact() {
    useEffect(() => {
        ScrollReveal.reveal('.Contact');
    }, []);

    return (
        <section className="Contact sr" id="contact">
            <div className="Contact-Overline">What's Next?</div>
            <h2 className="Contact-Title">Contact Me</h2>
            <p className="Contact-Description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt itaque laborum qui similique, sit tempore veritatis voluptates! Aspernatur fugiat neque nesciunt officia omnis, voluptatem.
            </p>
            <a href="mailto:joe.doe@gmail.com" className="Contact-Button">
                Send a message
            </a>

        </section>
    );
}

export default Contact;
