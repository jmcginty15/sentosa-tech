import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="ProductCard">
            <h5 className="ProductCard-title">{product.name}</h5>
            <p>{product.description}</p>
            {product.bulletPoints && <ul>
                {product.bulletPoints.map((point, i) => <li key={i}>{point}</li>)}
            </ul>}
            {(product.sheetLink || product.briefLink || product.presentationLink || product.whitePaperLink) && <h6 className="ProductCard-title">Learn more:</h6>}
            <div className="ProductCard-links">
                {product.sheetLink && <a className="ProductCard-link" href={product.sheetLink} target="_blank" rel="noreferrer">Read the product sheet</a>}
                {product.briefLink && <a className="ProductCard-link" href={product.briefLink} target="_blank" rel="noreferrer">Read the product brief</a>}
                {product.presentationLink && <a className="ProductCard-link" href={product.presentationLink}>Download the product presentation</a>}
                {product.whitePaperLink && <a className="ProductCard-link" href={product.whitePaperLink} target="_blank" rel="noreferrer">Read the white paper</a>}
            </div>
        </div>
    )
}

export default ProductCard;
