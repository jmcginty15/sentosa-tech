import PartnerCard from './PartnerCard';
import partners from './partners';
import './TechnologyPartners.css';

const TechnologyPartners = () => {
    return (
        <div className="TechnologyPartners">
            <h1>Technology Partners</h1>
            <div className="TechnologyPartners-info">
                Sentosa Technology actively supports research and development at the academic level. Recent projects include bittorrent detection and anti-piracy strategies.
            </div>
            <div className="TechnologyPartners-list">
                {partners.map(partner => <PartnerCard partner={partner} key={partner.id} />)}
            </div>
        </div>
    )
}

export default TechnologyPartners;
