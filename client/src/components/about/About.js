import mountains from '../../images/mountains.jpg';
import './About.css';

const About = () => {
    return (
        <div className="About">
            <h1>About Us</h1>
            <div className="About-info">
                <img id="About-img" src={mountains} alt="about-banner" />
                <p className="About-text">Sentosa Technology Consultants, Inc. consists of Steve Saunders as Founder and Principal, along with a number of associated highly talented technology and standards developers. Sentosa is based in Longmont, Colorado and serves clients both nationally and internationally.</p>
                <p className="About-text">Sentosa was formed with the goal of creating a small technology focused consulting company that is driven to do the right thing for the customer. Our passion is delivering flawless results on schedule.</p>
                <a className="About-link" href="http://sentosatech.com/About_Us_files/Sentosatech%20Overview%20080309.ppt">Download our presentation to learn more</a>
            </div>
        </div>
    )
}

export default About;
