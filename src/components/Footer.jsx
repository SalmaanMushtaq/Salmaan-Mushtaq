import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="mt-auto text-center py-8">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <p>&copy; {date} Salmaan Mushtaq</p>
        <small className="flex items-center gap-1 mt-2">
          <a
            className="socialContainer containerOne"
            href="https://www.instagram.com/salmaan4746"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="bg-background socialSvg instagramSvg" />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="socialContainer containerTwo"
          >
            <IoLogoTwitter className="bg-background socialSvg twitterSvg" />
          </a>
          <a
            href="https://www.linkedin.com/in/salmaan-mushtaq-5b4998242"
            target="_blank"
            rel="noopener noreferrer"
            className="socialContainer containerThree"
          >
            <FaLinkedinIn className="bg-background socialSvg linkdinSvg" />
          </a>
          <a
            href="https://wa.me/+917006172734"
            target="_blank"
            rel="noopener noreferrer"
            className="socialContainer containerFour"
          >
            <FaWhatsapp className="bg-background socialSvg whatsappSvg" />
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
