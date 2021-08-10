import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Actions from '@/components/actions'
import News from '@/components/news'
import Footer from '@/components/footer';

export default function Home() {
    return (
        <Page>
            <NextSeo
                title="Nash Market"
                description="A marketplace which supports NFT mint with decentralized technology, and transfers through original Internet SNS projects as communication channels"
            />
            <Header />
            <main>
                <ListSection />
                <FeatureSection />
                <Actions />
                <News />
            </main>
            <Footer />
        </Page>
    );
}
