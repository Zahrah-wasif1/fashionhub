import ProductCard from "./ProductCard";
import products from "../data/products";

const categories = [
  {
    title: "Women",
    subtitle: "Women Clothes",
    items: products.filter((item) => item.category === "Women"),
  },
  {
    title: "Men",
    subtitle: "Men Clothes",
    items: products.filter((item) => item.category === "Men"),
  },
  {
    title: "Kids",
    subtitle: "Kids Clothes",
    items: products.filter((item) => item.category === "Kids"),
  },
  {
    title: "Unisex",
    subtitle: "Trending Picks",
    items: products.filter((item) => item.category === "Unisex"),
  },
];

export default function Products() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>

      {categories.map((category) => (
        <div key={category.title} className="products-section">
          <h4>{category.title}</h4>
          <h5>{category.subtitle}</h5>
          <div className="products">
            {category.items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}