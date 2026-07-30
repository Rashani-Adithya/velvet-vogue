import "./CollectionGrid.css";
import CollectionCard from "../CollectionCard/CollectionCard";
import products from "../../data/products";

function CollectionGrid() {
  return (
    <section className="collection-grid">

      {products.map((product) => (
        <CollectionCard
          key={product.id}
          product={product}
        />
      ))}

    </section>
  );
}

export default CollectionGrid;