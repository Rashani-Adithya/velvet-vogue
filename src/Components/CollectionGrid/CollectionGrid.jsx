import "./CollectionGrid.css";
import CollectionCard from "../CollectionCard/CollectionCard";

function CollectionGrid({ products }) {
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