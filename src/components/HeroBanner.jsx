function HeroBanner() {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container py-4">
        <div className="row align-items-center">

          <div className="col-lg-7">
            <p className="text-warning fw-bold mb-2">
              LIMITED TIME OFFER
            </p>

            <h1 className="display-4 fw-bold">
              Big Summer Sale
            </h1>

            <p className="lead">
              Get up to 50% off on selected products.
              Shop your favorite products at the best prices.
            </p>

            <button className="btn btn-warning btn-lg px-4">
              Shop Now
            </button>
          </div>

          <div className="col-lg-5 text-center mt-4 mt-lg-0">
            <div className="display-1">
              🛍️
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroBanner