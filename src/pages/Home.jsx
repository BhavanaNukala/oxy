import { Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";

function Home() {
  return (
    <>
      <HeroBanner />

      <section className="container py-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Welcome to ShopEase
          </h2>

          <p className="text-muted">
            Discover quality products at the best prices.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">

                <div className="display-5 mb-3">
                  🛍️
                </div>

                <h5 className="fw-bold">
                  Wide Collection
                </h5>

                <p className="text-muted">
                  Explore products across different
                  categories.
                </p>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">

                <div className="display-5 mb-3">
                  💰
                </div>

                <h5 className="fw-bold">
                  Best Prices
                </h5>

                <p className="text-muted">
                  Get great products at affordable prices.
                </p>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">

                <div className="display-5 mb-3">
                  🚚
                </div>

                <h5 className="fw-bold">
                  Easy Shopping
                </h5>

                <p className="text-muted">
                  Browse products and add them to your
                  cart easily.
                </p>

              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-5">
          <Link
            to="/products"
            className="btn btn-dark btn-lg px-5"
          >
            Explore Products
          </Link>
        </div>

      </section>
    </>
  );
}

export default Home;