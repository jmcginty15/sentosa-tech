import { useNavigate } from 'react-router';
import './PartnerCard.css';

const PartnerCard = ({ partner }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (partner.link.slice(0, 1) === '/') navigate(partner.link);
        else window.open(partner.link);
    }

    return (
        <div className="PartnerCard">
            <img className="PartnerCard-img" src={partner.image} width="200" alt={`partner-logo-${partner.id}`} />
            <div className="PartnerCard-overlay" onClick={handleClick} />
        </div>
    )
}

export default PartnerCard;
