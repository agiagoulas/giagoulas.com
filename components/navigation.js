import Link from 'next/link';
import { siteTitle } from '../components/layout';

function NavigationItem({ currentPage, link, name }) {
    return (
        <>
            <div className="self-center block">
                <hr className="h-0.5 invisible" />
                <Link href={link} className="text-gray-800 md:hover:text-gray-500 font-semibold">{name}</Link>
                {(currentPage == name) ? (
                    <hr className="h-0.5 bg-gray-500 rounded border-0" />
                ) : (
                    <hr className="invisible h-0.5" />
                )}
            </div>

        </>
    );
}

function SocialMediaLink({ url, icon, name }) {
    return (
        <a href={url} target="_blank">
            <img src={icon} className="w-4 h-4" alt={name} />
        </a>
    );
}

export default function Navigation({ currentPage }) {
    return (
        <>
            <div className="container mx-auto flex flex-row py-6">
                <div className="basis-1/4 flex justify-start items-center">
                    <p className="text-xl font-semibold">{siteTitle}</p>
                </div>
                <div className="basis-1/2 flex justify-center items-center">
                    <ul className="flex flex-row md:space-x-6">
                        <li><NavigationItem currentPage={currentPage} link="/" name="Home" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/galleries" name="Images" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/blog" name="Blog" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/about" name="About" /></li>
                    </ul>
                </div>
                <div className="basis-1/4 flex justify-end items-center">
                    <ul className="flex flex-row md:space-x-6">
                        <li><SocialMediaLink url="https://www.instagram.com/giagoulasphoto/" icon="/icons/instagram.svg" name="Instagram" /></li>
                        <li><SocialMediaLink url="https://www.linkedin.com/in/alexander-giagoulas/" icon="/icons/linkedin.svg" name="LinkedIn" /></li>
                        <li><SocialMediaLink url="mailto:alexander@giagoulas.com" icon="/icons/mail.svg" name="Mail" /></li>
                        <li><SocialMediaLink url="https://www.links.giagoulas.com" icon="/icons/links.svg" name="Links" /></li>
                    </ul>
                </div>
            </div>
            <hr />
        </>
    );
}
