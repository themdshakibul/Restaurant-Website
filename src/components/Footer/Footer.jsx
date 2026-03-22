import navLogo from "../../assets/nav-logo.png";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <footer className="footer grid grid-cols-4 gap-10 text-base-content py-20">
          <aside>
            <div className="flex items-center gap-2">
              <h2 className="bg-green-500 py-2 px-3 w-fit text-white rounded-md text-xl font-bold ">
                F
              </h2>
              <img src={navLogo} alt="Nav" />
            </div>
            <p className="text-2xl font-medium">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </aside>
          <nav>
            <h6 className="footer-title text-2xl font-semibold">Services</h6>
            <a className="link link-hover text-xl font-medium">Branding</a>
            <a className="link link-hover text-xl font-medium">Design</a>
            <a className="link link-hover text-xl font-medium">Marketing</a>
            <a className="link link-hover text-xl font-medium">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl font-semibold">Company</h6>
            <a className="link link-hover text-xl font-medium">About us</a>
            <a className="link link-hover text-xl font-medium">Contact</a>
            <a className="link link-hover text-xl font-medium">Jobs</a>
            <a className="link link-hover text-xl font-medium">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl font-semibold">Legal</h6>
            <a className="link link-hover text-xl font-medium">Terms of use</a>
            <a className="link link-hover text-xl font-medium">
              Privacy policy
            </a>
            <a className="link link-hover text-xl font-medium">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
