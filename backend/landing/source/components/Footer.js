import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="#!">
              Privacy Policy
            </a>
            <a className="link-dark text-decoration-none" href="#!">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
