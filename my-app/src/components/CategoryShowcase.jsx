const categories = [
  {
    title: "Embroidered",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Printed",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Solids",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Co-Ords",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Formals",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Kurtis",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80",
  },
  {
    title: "Bottoms",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <div className="category-showcase__heading">
        <h2>Shop by Category</h2>
      </div>
      <div className="category-showcase__grid">
        {categories.map((category) => (
          <div key={category.title} className="category-card">
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
