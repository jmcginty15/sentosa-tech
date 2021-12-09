import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Home.css';

const bulletPoints = [
    'IP based 4K video transmission',
    'Content recommendation engine',
    'Free roaming through 3D video',
    'Mobile living room',
    'Ultra high definition TV',
    'Ad recommendation system',
    'Augmented reality',
    'Feature recognition within videos',
    'Logo recognition',
    'Zero-reference video QA'
];

const Home = () => {
    const [tall, setTall] = useState(window.innerWidth < 768 ? true : false);
    const navigate = useNavigate();

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && tall) setTall(false);
        else if (window.innerWidth < 768 && !tall) setTall(true);
    });

    return (
        <div className="Home">
            <h1>Sentosa Technology Consultants</h1>
            <h4>Delivering high performance technology solutions you can trust!</h4>
            <div className="Home-content" onClick={() => navigate('/product-offerings')}>
                <h3>We're back from Nab!</h3>
                <h3>Check out all our new products!</h3>
                <h3>You just might be surprised!</h3>
                {tall ? <div className="Home-product-list">
                    <ul>
                        {bulletPoints.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div> : <div className="Home-product-list">
                    <ul>
                        {bulletPoints.slice(0, 5).map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                    <ul>
                        {bulletPoints.slice(5).map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default Home;
