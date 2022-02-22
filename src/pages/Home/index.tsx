import React, { useEffect, useState, useRef } from 'react'
import { Anchor, Layout, Row, Col, Button, Menu, Dropdown, Carousel, Collapse
 } from 'antd';
import { CSSTransition } from "react-transition-group";
import Slider from "react-slick";
import { MenuOutlined, LeftOutlined, RightOutlined, MinusOutlined, PlusOutlined} from '@ant-design/icons';
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import Image1 from '../../assets/images/image1.png';
import Picture1 from '../../assets/images/Picture1.png';
import Picture1_1 from '../../assets/images/Picture1-1.png';
import Picture2 from '../../assets/images/Picture2.png';
import Picture2_1 from '../../assets/images/Picture2-1.png';
import Picture3 from '../../assets/images/Picture3.png';
import Picture3_1 from '../../assets/images/Picture3-1.png';
import Picture4 from '../../assets/images/Picture4.png';
import Picture4_1 from '../../assets/images/Picture4-1.png';
import Image3_1 from '../../assets/images/image3-1.png';
import Image3_2 from '../../assets/images/image3-2.png';
import Image3_3 from '../../assets/images/image3-3.png';
import Image5 from '../../assets/images/image5.png';
import Image7_1 from '../../assets/images/image7-1.png';
import Image7_2 from '../../assets/images/image7-2.png';
import Image7_3 from '../../assets/images/image7-3.png';
import GIF4 from '../../assets/images/Hnet-image-5.gif';
import {ReactComponent as TwitterLogo} from '../../assets/images/home/svg/Twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/images/home/svg/Medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/images/home/svg/Telegram.svg'
import {ReactComponent as Discord} from '../../assets/images/home/svg/discord.svg'
import {ReactComponent as Youtube} from '../../assets/images/home/svg/Youtube.svg'

import './index.less';

const { Header, Sider, Content } = Layout;
const { Panel } = Collapse;
const { Link } = Anchor;
const HeaderContent = styled.div`
    max-width: 1050px;
    margin: 0 auto;
    padding: 0 50px;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
`

const Home: React.FC = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [visibleSection, setVisibleSection] = useState('Home');
    const [infrastructureActive, setInfrastructureActive] = useState(false);
    const [elementHeight, setElementHeight] = useState(568);
    const carouselRef = useRef<any>()

    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const tokenomicsRef = useRef(null);
    const productsRef = useRef(null);
    const FAQRef = useRef(null);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const sectionRefs = [
        { section: "Home", ref: homeRef },
        { section: "Tokenomics", ref: tokenomicsRef },
        { section: "Products", ref: productsRef },
        { section: "FAQ", ref: FAQRef },
    ];
    const getDimensions = (ele: any) => {
        if (!ele) {
            return {}
        }
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;

        return {
            height,
            offsetTop,
            offsetBottom,
        };
    };

    const scrollTo = (ele: any) => {
        if (!ele) {
            return
        }
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef && !sectionRefs) {
                return;
            }
            const { height: headerHeight } = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight;

            const selected: any = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected && visibleSection) {
                setVisibleSection('');
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        window.addEventListener("scroll", reveal);
        const revealElement = document.getElementById("infrastructure-list");
        if (revealElement) {
            setElementHeight(revealElement.getBoundingClientRect().height)
        }
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    const handleMediaQueryChange = (mediaQuery: any) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    const reveal = () => {
        const revealElement = document.getElementById("infrastructure-list");
        if (revealElement) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElement.getBoundingClientRect().top;

            if (elementTop < windowHeight - (elementHeight + 50)) {
                setInfrastructureActive(true)
            } else {
                setInfrastructureActive(false)
            }
        }
    }

    return (
        <Layout className="homePage">
            <Header>
                <HeaderContent className="header" ref={headerRef}>
                    <img className="Logo" src={Logo} alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a className={`${visibleSection === "Home" ? "active" : ""}`}
                                onClick={() => {
                                    scrollTo(homeRef.current);
                                }}>Home</a>
                            <a className={`${visibleSection === "Tokenomics" ? "active" : ""}`}
                                onClick={() => {
                                    scrollTo(tokenomicsRef.current);
                                }}>
                                Tokenomics
                            </a>
                            <a className={`${visibleSection === "Products" ? "active" : ""}`}
                                onClick={() => {
                                    scrollTo(productsRef.current);
                                }}>
                                Products
                            </a>
                            <a className={`${visibleSection === "FAQ" ? "active" : ""}`}
                                onClick={() => {
                                    scrollTo(FAQRef.current);
                                }}>
                                FAQ
                            </a>
                            <Button type="primary"><a href="https://docs.sonet.one/-MklGloXKtLum14iiItw/" target="_blank">Learn More</a></Button>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://discord.gg/soda-by-sonet"><Discord/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://mobile.twitter.com/SodaExtension"><TwitterLogo/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://t.me/soda_community"><TelegramLogo/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://soda-extension.medium.com/"><MediumLogo/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.youtube.com/channel/UC01cNc3KuVTDUI_KFjunNNA/featured"><Youtube/></a>
                                </li>
                            </ul>
                        </nav>
                    </CSSTransition>
                    <button onClick={toggleNav} className="Burger">
                        <MenuOutlined />
                    </button>
                </HeaderContent>
            </Header>
            <Content>
                <div className="first-content">
                    <div>
                        <h1>The Web3 Middleware</h1>
                        <p>Open-source middleware project to provide seamless backend services for applications to integrate social features</p>
                        <div className="btns">
                            <Button type="primary" block>Download Now</Button>
                            <Button type="primary" block>Join Us</Button>
                        </div>
                    </div>
                    <div>
                        <img src={Image1}/>
                    </div>
                </div>
                <div className="second-content">
                    <h1>Our Mission</h1>
                    <h2>Unlock meaningful value from all social creation</h2>
                    <div className="list">
                        <div className="item">
                            <img src={Picture1} alt="" />
                            <p>Build a middleware aggregator to connect across protocols and metaverses</p>    
                        </div>
                        <div className="item">
                            <img src={Picture2} alt="" />
                            <p>Social-focused stablecoin supports payment for middleware aggregator</p>    
                        </div>
                        <div className="item">
                            <img src={Picture3} alt="" />
                            <p>Create entry point extensions and apps into different metaverses</p>    
                        </div>
                        <div className="item">
                            <img src={Picture4} alt="" />
                            <p>Single development framework to fully leverage all services in the platform</p>    
                        </div>
                        <div className="item">
                            <img src={Picture1_1} alt="" />
                            <p>Middleware<br/>(Sonet)</p>    
                        </div>
                        <div className="item">
                            <img src={Picture2_1} alt="" />
                            <p>Stablecoin<br/>(Socash)</p>    
                        </div>
                        <div className="item">
                            <img src={Picture3_1} alt="" />
                            <p>Extensions<br/>(Soda)</p>    
                        </div>
                        <div className="item">
                            <img src={Picture4_1} alt="" />
                            <p>Development<br/>Framework</p>    
                        </div>
                    </div>
                </div>
                <div className="third-content">
                    <Carousel ref={carouselRef as any} arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
                        <div className="item">
                            <h1>Current State of App Development</h1>
                            <div><img src={Image3_1} alt="" /></div>
                        </div>
                        <div className="item">
                            <h1>Incoming Solution for Web3 App Development</h1>
                            <div><img src={Image3_2} alt="" /></div>
                        </div>
                        <div className="item">
                            <h1>Our Solution for Web3 App Development</h1>
                            <div><img src={Image3_3} alt="" /></div>
                        </div>
                    </Carousel>
                </div>
                <div className="fourth-content">
                    <h1>Sonet’s Middleware Platform</h1>
                    <img src={GIF4} alt="" />
                    <p>
                    Our middleware combined with a payment system and web gateway serves as a bridge for connecting the best protocols to provide settlement and clearing services across blockchains under a single platform.
                    </p>
                </div>
                <div className="fifth-content" ref={tokenomicsRef}>
                    <h1>Sonet’s Payment System</h1>
                    <h2>In the short term, Sonet will use current stablecoins to settle and clear transactions</h2>
                    <h2>In the long term, we will use our below innovative stablecoin when usage ramps up</h2>
                    <img src={Image5} alt="" />
                </div>
                <div className="sixth-content">
                    <h1>
                    Usage-Balancing Mechanism
                    </h1>
                    <h2>Illustratively, the innovative design of our stablecoin system is that it self-balances between the algorithmic printing on the right side and the consumer usage burning on the left side, which means a portion of supply directly contracts when a user interacts and uses a product in our ecosystem.</h2>
                    <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/T_Pxi2Xehv4?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsonet.one&amp;widgetid=1" id="widget2"></iframe>
                </div>
                <div className="seventh-content" ref={productsRef}>
                    <h1>First App Launch (2022)</h1>
                    <h2>Soda – a Social NFT App and Extension on Twitter, Facebook, and more to come!</h2>
                    <Button type="primary">Install Extension</Button>
                    <div className="images">
                        <div>
                            <img src={Image7_1} alt="" />
                            <h4>Library</h4>
                            <p>Discover, share, and interact with friends in the universal library of social assets</p>
                        </div>
                        <div>
                            <img src={Image7_2} alt="" />
                            <h4>Tokenization</h4>
                            <p>All-in-one extension to create, tokenize and share social creations</p>
                        </div>
                        <div>
                            <img src={Image7_3} alt="" />
                            <h4>Interaction</h4>
                            <p>React, bond and collaborate through tracked activities</p>
                        </div>
                    </div>
                </div>
                <div className="sixth-content">
                    <h1>
                    Demo of MVP
                    </h1>
                    <h2>This is the first native application built on our middleware that allows us to build out the payment system and drive usage through NFT transactions.</h2>
                    <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/dnSFz-HmTkk?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsonet.one&amp;widgetid=3" id="widget4"></iframe>
                </div>
                <div className="eighth-content">
                    <h1>Roadmap</h1>
                    <h2>Full Year 2022</h2>
                    <div className="roadmap">
                        <div>
                            <div>
                                <h4>Q1</h4>
                                <ul>
                                    <li>Tokenomics launch</li>
                                    <li>Middleware aggregator and reconciliation</li>
                                    <li>Payment system using current stablecoins</li>
                                    <li>NFT social platform sharing and marketplace</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Q2</h4>
                                <ul>
                                    <li>Sonet utility token</li>
                                    <li>Development of mobile application</li>
                                    <li>More web app integrations & app publishing</li>
                                    <li>Social investing & trading</li>
                                    <li>Integrate more service partners</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Q3</h4>
                                <ul>
                                    <li>Usage middleware</li>
                                    <li>SDK for application developers</li>
                                    <li>Enhanced framework for service partners</li>
                                    <li>Multi-chain wallet</li>
                                    <li>“Digital Twins” Identity 2.0</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Q4</h4>
                                <ul>
                                    <li>Rich media support including video, audio</li>
                                    <li>Open framework for metaverse apps</li>
                                    <li>Upgrade cache layer and distributed network</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ninth-content" ref={FAQRef}>
                    <h1>FAQ</h1>
                    <Collapse 
                        defaultActiveKey={['1']} 
                        expandIcon={({ isActive }) => isActive ? <MinusOutlined style={{fontWeight: 'bold', fontSize: '20px'}}/> : <PlusOutlined style={{fontWeight: 'bold', fontSize: '20px'}}/>}
                    >
                        <Panel header="What problem are you trying to solve and why is it important?" key="1">
                            <p>App developers today face the integration challenges of different fragmented service providers on different blockchain networks. This creates a lot of barriers and friction for development, that’s a big reason why developers stick to only EVM compatible and dedicate to only one blockchain network. A lot of work is spent to integrate a specific application with several targeted service providers in the current state of app development.</p>
                            <p>The near-term target solution is that top service providers are increasingly multi-chain and building better SDKs, which allows app developers to integrate more easily across different blockchain networks. However, there will always be new and better service providers, which will be behind in accessibility. Moreover, cross-chain protocols are not standard and focus mainly on asset transfer, so business smart contracts are not supported enough at the moment.</p>
                        </Panel>
                        <Panel header="What is your competitive advantage over other projects trying to solve similar problems?" key="2">
                            <p>Middleware platforms today fall short in addressing the three main communication problems of Web3. We are resolving them in the following ways:</p>
                            <ul>
                                <li>Communication entry points – MVP web2 extension, a mobile application in the future.</li>
                                <li>Communication channel for users – leveraging existing web2 applications like popular social networks, and future apps will be created using our SDK middleware development framework.</li>
                                <li>Content communication – Integrated in the channels through our middleware aggregator where end users interact in web2 using web3 infrastructure services.</li>
                            </ul>

                            <h5>Case study: Gaming</h5>

                            <p>Problem: Web3 games are built on various blockchains, whose assets are not compatible with one another. This incompatibility creates the need for bridges, which charge additional fees, and can still result in delayed transactions or other friction across chains</p>
                            <p>Proposed solution: an integrated marketplace built on top of a connected middleware, for transacting top digital gaming assets across different blockchains</p>
                            <p>How Sonet can achieve this solution: Sonet is building a middleware that will partner and integrate with the top gaming projects across different blockchains. Transactions will settle using Sonet’s Stablecoin, which can be easily swapped into, providing users with a seamless and efficient experience across gaming platforms.</p>
                        </Panel>
                        <Panel header="How does your solution solve the problem of focus?" key="3">
                            <p>Our vision is to create a middleware aggregator for all service providers, including the new ones, so that app developers can have more accessibility to the best infrastructure services from Web3. On the frontend it may seem like we’re a traditional web2 cloud service like AWS or Google, easy to use and to develop on. We could also have a marketplace like AWS that allows developers to register and build on top of.</p>
                            <p>Our unique approach is to focus on content, including: content storage, data allocation, and meta-self presentation. Along with content, we are creating the most uniform payment system across all services and blockchains using current stablecoins, and in the future our own innovative stablecoin dedicated to this middleware. We are simplifying for app developers the different pricing and payment models between services, such as swap settlement for different gas fee tokens.</p>
                        </Panel>
                        <Panel header="What is your stablecoin system?" key="4">
                            <p>We are planning to issue a dual-token model, which includes SoCash (Stablecoin) and SoNet (Governance Token).</p>
                            <p>• SoCash will initially target a $1.00 USD price because it’s the easiest for our target web2 users to understand and adopt. But SoCash is actually non-pegged and can change its target based on future market dynamics, which gives us and other non-pegged stablecoins greater flexibility. Socash will represent the virtual world’s social value as a medium of exchange. By channeling philosopher Hobbes’ and Locke’s concept of social contract, societies will require a new social model based on a single currency driven by social usage.</p>
                            <p>• SoNet is our company’s protocol governance token that can be staked for incentives including Socash incentives through what we call the “Govroom”. SoNet token is necessary and required for governance, reward staking and operations for our algorithmic stablecoin system.</p>
                        </Panel>
                        <Panel header="How do you maintain your stablecoin through a bear market?" key="5">
                            <p>In a bear market, the lower stablecoin price encourages more spend and usage, which will conversely raise the price back up. If the usage does not keep up and the price continues to stay under the threshold price set by the algorithm for two weeks, our “SoFed” operator may use dedicated token reserves to lift the Socash price back up as a pre-cautionary measure. With that said, our logic and design is to organically let the price reach back to its target even if it may take longer to do so.</p>
                        </Panel>
                        <Panel header="Where do you see Sonet three years from now?" key="6">
                            <p>In the next three years, we see a middleware that is fully decentralized with a passionate community of different users and contributors. Moreover, we will have a fully integrated infrastructure of tools and services that will allow developers and organizations to build virtually any dApp or protocol. Overall, our ecosystem will be the recognized cloud service for application development to bridge the gap between Web2 and Web3.</p>
                        </Panel>
                    </Collapse>
                </div>
            </Content>
            <div className="footer">
                <ul>
                    <li>
                        <a target="_blank" href="https://discord.gg/soda-by-sonet"><Discord/></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://mobile.twitter.com/SodaExtension"><TwitterLogo/></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/soda_community"><TelegramLogo/></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://soda-extension.medium.com/"><MediumLogo/></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.youtube.com/channel/UC01cNc3KuVTDUI_KFjunNNA/featured"><Youtube/></a>
                    </li>
                </ul>
                <p>© Sonet. All Rights Reserved.</p>
            </div>
        </Layout>
    )
}

export default Home;
