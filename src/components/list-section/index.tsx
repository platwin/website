import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
    {
        title: `Res Publica Cash (RPC)`,
        description: `Every RPC aims a peg to 1 U.S. Dollar, and is intended to be used as a medium of exchange. Its supply is expanded and contracted indirectly through shareholder seigniorage dividends in order to maintain the peg.`,
    },
    {
        title: `Res Publica Share (RPS)`,
        description: `Shares are a medium of governing the protocol, and receiving seigniorage rewards through the Boardroom. RPS are an implementation of the Seigniorage Shares paper ⸺ they are not pegged to anything; as RPC adoption grows, so does RPS' value.`,
    },
    {
        title: `Res Publica Bond (RPB)`,
        description: `Bonds are special IOU tokens designed to contract RPC supply. They can only be bought when the RPC price is below the peg by a pre-set threshold. Bonds promise the holder premiums when RPC pricing returns to its 1 dollar peg.`,
    },
];

const ListSection = () => (
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
            <div className={tw(`mb-16 text-center`)}>
                <p className={tw(`mt-2 pb-4 text-3xl lg:text-3xl font-bold tracking-tight text-gray-900`)}>
                    Nash Market uses an algorithmic decentralized cash system
                </p>
                <p className={tw(`mt-2 text-gray-500  text-xl lg:text-1xl`)}>
                    Res Publica Cash is targeting to provide an Algorithmic Stablecoin for the Res Publica, which "Pegged to 1 USD".
                </p>
            </div>
            <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
                <div className={tw(`w-full lg:w-1/2 px-8`)}>
                    <ul className={tw(`space-y-12`)}>
                        {listItems.map((item, index) => (
                            <li className={tw(`flex -mx-4`)} key={item.title}>
                                <div className={tw(`px-4`)}>
                                    <span
                                        className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                                <div className={tw(`px-4`)}>
                                    <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                                    <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={tw(`w-full lg:w-1/2 px-8`)}>
                    <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
                        <FeatureSvg width="100%" height="100%" />
                    </div>
                </div>


            </div>
            <div className={tw(`mb-2 mt-2 text-center`)}>
                <a href="https://github.com/platwin/nash-cash" className={tw(`text-base text-center text-indigo-600 font-semibold tracking-wide uppercase`)}>Audit our source code</a>
            </div>
        </div>
    </section>
);

export default ListSection;
