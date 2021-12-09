import ProductCard from './ProductCard';
import kddiImage from '../../images/kddi.gif';
import products from './products';
import './ProductOfferings.css';

const ProductOfferings = () => {
    return (
        <div className="ProductOfferings">
            <h1 className="ProductOfferings-title">KDDI Labs Technology Solutions</h1>
            <div className="ProductOfferings-info">
                <h5>Sentosa Technology Consultants is the exclusive US representative for the sale of KDDI software and solutions.</h5>
                <img id="ProductOfferings-logo" src={kddiImage} height="100" alt="product-offerings-logo" />
                <h5>KDDI is one of the largest telecommunications companies in the world and second largest in Japan.</h5>
            </div>
            <h3 className="ProductOfferings-subtitle">Product Offerings</h3>
            <div className="ProductOfferings-list">
                {products.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
            <div className="ProductOfferings-info">
                For more information on these products, please contact <a className="ProductOfferings-link" href="mailto:brian@sentosatech.com">Brian Hofstetter</a> (West) or <a className="ProductOfferings-link" href="mailto:adam@sentosatech.com">Adam Goldberg</a> (East).
            </div>
        </div>
    )
}

export default ProductOfferings;
