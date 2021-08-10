import { tw } from 'twind';
import Button from '@/components/button';
import Image from 'next/image'
// import logo from '../../public/logo.png'
const resourceLinks = [
    {
        label: 'Github',
        link: ''
    },
    {
        label: 'Twitter',
        link: ''
    },
    {
        label: 'Medium',
        link: ''
    },
    {
        label: 'Discord',
        link: ''
    },
    {
        label: 'Telegram',
        link: ''
    },
    {
        label: 'Audit',
        link: ''
    },
];

const Footer = () => (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
        <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
            <div className={tw(`mb-14 flex items-center w-full`)}>
                <Image className={tw(`h-12 w-12 mr-4`)} src='/logo.png' alt="logo" width={48} height={48} />
                <p>The source code of Nash Market is available on <a href="">Github</a>. Nash Market is a Free Software.</p>
            </div>
            <div >
                <ul className={tw(`text - lg font - light flex flex - wrap w - full`)}>
                    <li className={tw(`flex items - center`)}>
                        <div>
                            <ul className={tw(`flex items - center`)}>
                                {resourceLinks.map((link) => (
                                    <li className={tw(`text - gray - 800 text - sm font - medium leading - 6`)} key={link}>
                                        <a href={link.link}>{link.label} | </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
            <div className={tw(`w-full mb-10 mt-2 border border-gray-400 rounded py-5 px-4`)}>
                <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Get latest news, keep updated.</h4>
                <div className={tw(`flex w-full`)}>
                    <input
                        aria-label="email address"
                        type="text"
                        className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
                        placeholder="Enter your email"
                    />
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>
        <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0`)}>
            <p>© Plato-Twin. All rights Reserved.</p>
            <p>Man is the yardstick of everything, the existence of the being and the non-existence of the non-existent.</p>
        </div>
    </footer >
);

export default Footer;
