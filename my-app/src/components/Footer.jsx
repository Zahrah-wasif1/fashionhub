export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h3>FashionHub</h3>
          <p>
            Discover curated, ready-to-wear looks for every season. FashionHub
            brings premium styling and effortless outfits to your wardrobe.
          </p>
          <p>
            Shop with confidence for fast shipping, easy returns, and support
            from our style team.
          </p>
        </div>

        <div className="footer__links">
          <h3>CUSTOMER CARE</h3>
          <ul>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h3>INFORMATION</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h3>KEEP IN TOUCH</h3>
          <p>123 Fashion Street, Style City, PK</p>
          <p>Phone: +92 300 1234567</p>
          <p>Email: support@fashionhub.pk</p>
          <div className="footer__social">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 FashionHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}