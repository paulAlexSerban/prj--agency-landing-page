import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Product from "core/Product";

export default function ProductList() {
  return (
    <section className="page-section" id="products">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Products</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <Product
              modalRef="productModal1"
              imgSrc="product/1.jpg"
              imgAlt="lorem alt text"
              heading="Laptop"
              subheading="Illustration"
            />
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <Product
              modalRef="productModal3"
              imgSrc="product/3.jpg"
              imgAlt="lorem alt text"
              heading="Desktop"
              subheading="Identity"
            />
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <Product
              modalRef="productModal5"
              imgSrc="product/5.jpg"
              imgAlt="lorem alt text"
              heading="Monitor"
              subheading="Website Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
