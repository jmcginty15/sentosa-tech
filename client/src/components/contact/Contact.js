import ContactCard from './ContactCard';
import contacts from './contacts';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <div className="Contact-info">
                <b>Sentosa Technology Consultants</b><br />
                2672 Beech Circle<br />
                Longmont, Colorado 80503<br />
                Fax 303-772-6271
            </div>
            <div className="Contact-contents">
                {contacts.map(contact => <ContactCard contact={contact} key={contact.id} />)}
            </div>
        </div>
    )
}

export default Contact;
