import ProductCard from '../product-offerings/ProductCard';
import products from './products';
import ontologyWorks from '../../images/ontology-works.jpg';
import './OntologyWorks.css';

const OntologyWorks = () => {
    return (
        <div className="OntologyWorks">
            <h1>Ontology Works</h1>
            <div className="OntologyWorks-info">
                <img id="OntologyWorks-img" src={ontologyWorks} width="200" alt="ontology-works-logo" />
                <div className="OntologyWorks-text">
                    Ontology Works, Inc. was founded in 1998 by computer scientists, linguists, and analysts from the National Security Agency. We decided to create software that uses models (ontologies) of the things a customer cares about and uses these models with the customer's databases, providing knowledge discovery, not just data retrieval, and creating question-answering capabilities never before available. Consequently, we call these systems "Ontology Works Knowledge Servers", not "databases". We continue to build on this success and now offer a suite of capabilities that offer proven returns on investment.
                </div>
            </div>
            <h3 className="OntologyWorks-title">Products and Solutions</h3>
            <div className="OntologyWorks-list">
                {products.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
        </div>
    )
}

export default OntologyWorks;
