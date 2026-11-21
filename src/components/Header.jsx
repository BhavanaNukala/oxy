// function Header({ cartCount }) {
//   return (
//     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="#">
//           ShopEase
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#Products">
//                 Products
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#Categories">
//                 Categories
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#Cart">
//                 🛒 Cart ({cartCount})
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top shadow-sm">

      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-4"
          to="/"
        >
          ShopEase
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
              >
                Categories
              </Link>
            </li>

            <li className="nav-item ms-lg-2">

              <span className="btn btn-warning btn-sm">
                🛒 Cart ({cartCount})
              </span>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Header;