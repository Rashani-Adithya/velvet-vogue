import { useEffect, useState } from "react";
import "./RelatedProducts.css";

import { getProducts } from "../../../services/productService";
import CollectionCard from "../../CollectionCard/CollectionCard";

function RelatedProducts({ currentProduct }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadProducts() {

            try {

                const data = await getProducts();
                setProducts(data);

            } catch (error) {

                console.error("Error loading related products:", error);

            } finally {

                setLoading(false);

            }

        }

        loadProducts();

    }, []);

    const relatedProducts = products
        .filter(
            (product) =>
                product.category === currentProduct.category &&
                product.id !== currentProduct.id
        )
        .slice(0, 4);

    if (loading) {
        return <p>Loading related products...</p>;
    }

    return (

        <section className="related-products">

            <h2 className="related-title">
                Related Products
            </h2>

            <div className="related-grid">

                {relatedProducts.map((product) => (

                    <CollectionCard
                        key={product.docId}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

}

export default RelatedProducts;