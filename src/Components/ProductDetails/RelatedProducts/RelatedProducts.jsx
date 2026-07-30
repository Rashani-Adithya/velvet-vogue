import "./RelatedProducts.css";
import products from "../../../data/products";
import CollectionCard from "../../CollectionCard/CollectionCard";
function RelatedProducts({ currentProduct }) {

    const relatedProducts = products
        .filter(
            (product) =>
                product.category === currentProduct.category &&
                product.id !== currentProduct.id
        )
        .slice(0, 4);

    return (
        <section className="related-products">

            <h2 className="related-title">
                Related Products
            </h2>

            <div className="related-grid">

                {relatedProducts.map((product) => (

                    <CollectionCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>
    );

}

export default RelatedProducts;