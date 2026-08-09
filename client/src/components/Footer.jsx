import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-400">
      {/* Top gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-14" />

      <div className="flex flex-col md:flex-row justify-between w-full gap-12 pb-12 border-b border-gray-800">
        {/* Brand Section */}
        <div className="md:max-w-sm">
          <img className="w-36 h-auto" src={assets.logo} alt="logo" />
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            Your ultimate destination for booking movie tickets. Enjoy the best
            cinematic experience with premium seats and exclusive shows.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            {/* Twitter/X */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <img src={assets.googlePlay} alt="google play" className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-1 items-start md:justify-end gap-16 md:gap-28 flex-wrap">
          <div>
            <h2 className="text-white font-semibold text-base mb-5 tracking-wide">Company</h2>
            <ul className="text-sm space-y-3">
              {["Home", "About us", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-5 tracking-wide">Support</h2>
            <ul className="text-sm space-y-3">
              {["Contact us", "Help Center", "Privacy policy", "Terms of service"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold text-base mb-5 tracking-wide">Get in touch</h2>
            <div className="text-sm space-y-3">
              <a href="tel:+918134566433" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +91-813-456-6433
              </a>
              <a href="mailto:ShowTime@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                ShowTime@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>Copyright {new Date().getFullYear()} © ShowTime. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          <span>·</span>
          <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
