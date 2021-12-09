import books from '../../images/books.jpg';
import './Publishing.css';

const Publishing = () => {
    return (
        <div className="Publishing">
            <h1>Sentosa Publishing</h1>
            <div className="Publishing-info">
                <img id="Publishing-img" src={books} height="100" alt="publishing-logo" />
                <p className="Publishing-text">Sentosa Publishing is delivering exciting new books for the digital media programmer and system design professional. At Sentosa Publishing, we believe that technical knowledge is what powers your business. Technical information on MSO delivery systems is changing constantly; we at Sentosa Publishing know this from learning ourselves directly with hands-on experience delivering years of projects in the cable industry. Whether you need an in-depth how-to instruction manual to get you through that tough project, or just an updated reference guide adding to your base of information, Sentosa is dedicated to empowering you!</p>
                <p className="Publishing-text">Contact us at <a className="Publishing-link" href="mailto:books@sentosatech.com">books@sentosatech.com</a> for a complete title list.</p>
            </div>
        </div>
    )
}

export default Publishing;
