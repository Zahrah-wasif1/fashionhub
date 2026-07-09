import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import AboutCompany from "../components/AboutCompany";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CategoryShowcase />
      <AboutCompany />
      <Products />
      <Footer />
    </>
  );
}