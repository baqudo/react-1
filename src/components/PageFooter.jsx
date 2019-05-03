import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../sass/components/page-footer.sass";

const footerList = [
  {
    title: "Information",
    links: [
      "The brand",
      "Local stores",
      "Customer service",
      "Privacy & cookies",
      "Site map"
    ]
  },
  {
    title: "Why buy from us",
    links: [
      "Shipping & returns",
      "Secure shopping",
      "Testimonials",
      "Award winning",
      "Ethical trading"
    ]
  },
  {
    title: "Your account",
    links: [
      "Sign in",
      "Register",
      "View cart",
      "View your lookbook",
      "Track an order",
      "Update information"
    ]
  },
  {
    title: "Lookbook",
    links: [
      "Latest posts",
      "Men’s lookbook",
      "Women’s lookbook",
      "Lookbooks RSS feed",
      "View your lookbook",
      "Delete your lookbook"
    ]
  },
  {
    title: "contact details",
    links: [
      "Head Office: Avenue Fashion, 180-182 Regent Street, London.",
      "Telephone: 0123-456-789 ",
      "Email: support@yourwebsite.com"
    ]
  }
];
const socials = [
  {
    icon: "facebook-f"
  },
  {
    icon: "twitter"
  },
  {
    icon: "instagram"
  },
  {
    icon: "pinterest"
  }
]
export default function PageFooter({ title, subtitle }) {
  return (
    <footer className="page-footer">
      <div className="page-footer__main">
        <div className="container">
          <div className="page-footer__nav">
            {footerList.map((item, index) => {
              return (
                <div className="footer-list" key={index}>
                  <h3 className="footer-list__title">{item.title}</h3>
                  <ul>
                    {item.links.map((link, idx) => {
                      const url = "/" + link.replace(/\s+/g, "-").toLowerCase();
                      return (
                        <li key={idx}>
                          <Link to={url}>
                            {link}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="page-footer__blocks">
            <div className="page-footer__block">
              <b>award winner</b>
              <div>fashion awards 2016</div>
            </div>
            <div className="page-footer__block page-footer__socials">
              {
                socials.map((item, index) => {
                  return <Link key={index}><FontAwesomeIcon icon={item.icon}/></Link>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer__bar">
        <div className="page-footer__inner container">
          <div className="page-footer__copy">© 2016 Avenue Fashion™</div>
          <div className="page-footer__dev">
            <span>Design by RobbyDesigns.com</span>
            <span>Dev by Loremipsum.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
