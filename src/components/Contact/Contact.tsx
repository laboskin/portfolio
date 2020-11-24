import React, {useEffect} from 'react';
import './Contact.scss';
import ScrollReveal from "../../ScrollReveal";
import {useTranslation} from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    useEffect(() => {
        ScrollReveal.reveal('.Contact');
    }, []);

    return (
        <section className="Contact sr" id="contact">
            <div className="Contact-Overline">{t('contact.overline')}</div>
            <h2 className="Contact-Title">{t('contact.title')}</h2>
            <p className="Contact-Description">
                {t('contact.description')}
            </p>
            <a href="mailto:artem.laboskin@gmail.com" className="Contact-Button">
                {t('contact.button')}
            </a>

        </section>
    );
}

export default Contact;
