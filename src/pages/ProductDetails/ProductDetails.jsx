import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Firestore Service
import { getProductById } from "../../services/productService";

// Components
import ProductImage from "../../Components/ProductDetails/ProductImage/ProductImage";
import ProductInfo from "../../Components/ProductDetails/ProductInfo/ProductInfo";
import ProductSidebar from "../../Components/ProductDetails/ProductSidebar/ProductSidebar";
import ProductTabs from "../../Components/ProductDetails/ProductTabs/ProductTabs";
import RelatedProducts from "../../Components/ProductDetails/RelatedProducts/RelatedProducts";

// CSS
import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadProduct() {

            try {

                const data = await getProductById(Number(id));
                setProduct(data);

            } catch (error) {

                console.error("Error loading product:", error);

            } finally {

                setLoading(false);

            }

        }

        loadProduct();

    }, [id]);

    if (loading) {

        return (

            <main className="product-details-page">
                <h2>Loading...</h2>
            </main>

        );

    }

    if (!product) {

        return (

            <main className="product-details-page">
                <h2>Product Not Found</h2>
            </main>

        );

    }

    return (

        <main className="product-details-page">

            {/* Breadcrumb */}

            <div className="product-breadcrumb">

                <Link to="/">Home</Link>

                <span>&gt;</span>

                <Link to="/collections">
                    Collections
                </Link>

                <span>&gt;</span>

                <span>{product.name}</span>

            </div>

            {/* Product Section */}

            <section className="product-layout">

                <ProductImage
                    product={product}
                />

                <ProductInfo
                    product={product}
                />

                <ProductSidebar
                    product={product}
                />

            </section>

            {/* Product Tabs */}

            <ProductTabs
                product={product}
            />

            {/* Related Products */}

            <RelatedProducts
                currentProduct={product}
            />

        </main>

    );

}

export default ProductDetails;