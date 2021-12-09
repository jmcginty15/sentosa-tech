import './ContactCard.css';

const ContactCard = ({ contact }) => {
    return (
        <div className="ContactCard">
            <b>{contact.name}</b><br />
            {contact.role}<br />
            <a className="ContactCard-link" href={`mailto:${contact.email}`}>{contact.email}</a><br />
            {contact.phone}
        </div>
    )
}

export default ContactCard;
