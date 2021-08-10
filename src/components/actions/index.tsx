import { tw } from 'twind';

const actions = [
    'NFT mint (100% burn)',
    'Buy (default)'
]
export default () => {
    return (
        <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
                <div className={tw(`mb-10 text-center`)}>
                    <p className={tw(`mt-2 pb-4 text-3xl lg:text-3xl font-bold tracking-tight text-gray-900`)}>
                        What actions do RPC accept in Nash Market?
                    </p>
                </div>
                <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
                    <div className={tw(`w-full lg:w-1/2 px-8`)}>
                        <ul className={tw(`space-y-12`)}>
                            {actions.map((item, index) => (
                                <li className={tw(`flex -mx-4`)} >
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
                                        <h3 className={tw(`my-4 text-xl font-semibold`)}>{item}</h3>
                                    </div>
                                </li>
                            ))}


                        </ul>
                    </div>


                </div>
            </div>
        </section>
    )
}