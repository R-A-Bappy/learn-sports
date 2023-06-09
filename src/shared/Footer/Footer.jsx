import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10 text-base-content w-full md:w-11/12 mx-auto">
                <div>
                    <img className='w-24 h-24' src={logo} alt="company logo" />
                    <p>Learn Sports Ltd.<br />Providing reliable learn since 2005</p>
                </div>
                <div>
                    <span className="footer-title">Facilities</span>
                    <a className="link link-hover">Gym</a>
                    <a className="link link-hover">Canteen</a>
                    <a className="link link-hover">Swimming</a>
                    <a className="link link-hover">Rest Room</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Sponsor</a>
                    <a className="link link-hover">News</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">career</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Help Center</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by LEARN SPORTS Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;