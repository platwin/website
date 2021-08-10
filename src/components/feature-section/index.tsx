import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
    <section className={tw(`bg-white pb-6`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
            <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(`w-full border-b p-8`)}>
                    <p className={tw(`leading-loose text-gray-500`)}>
                        Tokens Distributed through Yield Farming. RPC and RPS tokens are distributed fairly through yield farming. Providing liquidity to RPC-DAI and RPS-ETH pairs result in additional RPS tokens being distributed. This not only allows us to maintain our censorship resistance, but also acts as an incentive mechanism against lack of liquidity and bond death spirals.
                    </p>
                </div>
                <div className={tw(`w-full border-b   p-8`)}>
                    <p className={tw(`leading-loose text-gray-500 `)}>
                        Fairly Launched and Governed by Community. We have no venture capital funding, backers, or pre-mined tokens. For the development of the ecosystem, the community transparently operates the system through the votes.
                    </p>
                </div>

            </div>
        </div>
    </section>
);

export default FeatureSection;
