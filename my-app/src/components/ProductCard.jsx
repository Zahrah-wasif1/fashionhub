export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}