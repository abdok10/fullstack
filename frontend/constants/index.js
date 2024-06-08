
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export const NavbarLinks = [
    {
        id : 1,
        route : '#',
        link : 'Home',
    },
    {
        id : 2,
        route : '#about',
        link : 'About',
    }
]

export const icons__footer = [
    {
        id: 1,
        icon: <FaFacebook />,
        url: 'https://www.facebook.com',
    },
    {
        id: 2,
        icon: <IoLogoWhatsapp />,
        url: 'https://www.whatsApp.com',
    },
    {
        id: 3,
        icon: <FaLinkedin />,
        url: 'https://www.LinkedIn.com',
    },
    {
        id: 4,
        icon: <FaGithub />,
        url: 'https://www.Github.com',
    },
];
