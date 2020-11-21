import React from 'react';
import './Contact.scss';

function Contact() {

    return (
        <section className="Contact" id="contact">
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
