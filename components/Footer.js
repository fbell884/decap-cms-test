import Link from "next/link";

function Footer(props) {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center px-2 px-md-4 py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <span className="fa-solid fa-basketball"></span>
        </Link>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link className="text-body-secondary" href="#">
            <span className="fa-brands fa-instagram"></span>
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" href="#">
            <span className="fa-brands fa-linkedin"></span>
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" href="#">
            <span className="fa-brands fa-square-facebook"></span>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
