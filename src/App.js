import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button, Icon} from "./components/UIKit";
import {fetchData} from "./redux/data/dataActions";
import {checkRegistered, checkRuffle, connect} from "./redux/blockchain/blockchainActions";
import {AppStyle} from "./App.style";
import Countdown from 'react-countdown';
import {isAndroid, isIOS} from "react-device-detect";
import {theme} from "./styles/theme";

const errorMessages = [
    'Change network to ETH.',
    'Something went wrong.'
]
const metamaskError = 'Install Metamask.'

function App() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    // const [feedback, setFeedback] = useState("");
    const [connectingMobile, setConnectingMobile] = useState(false)
    const [walletConnected, setWalletConnected] = useState(false)
    const [fallback, setFallback] = useState('')


    useEffect( () => {
        dispatch(checkRuffle())
    }, [])

    useEffect(() => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
            if (blockchain.account) {
                setWalletConnected(true)
            }
        }
    }, [blockchain.smartContract, dispatch]);

    useEffect(() => {
        setConnectingMobile(true)

        setFallback('')
        if (blockchain.errorMsg && errorMessages.includes(blockchain.errorMsg)) {
            setFallback(blockchain.errorMsg)
        }
        if(blockchain.errorMsg === metamaskError && !(isIOS || isAndroid)) {
            window.location.replace('https://metamask.app.link/dapp/summer-vibes.netlify.app/')
        }
    }, [blockchain.errorMsg])

    const openMobileMetamask = () => {
        if(typeof window.ethereum === 'undefined') {
            if (connectingMobile && !walletConnected && (isIOS || isAndroid)
                || blockchain.errorMsg === metamaskError) {
                // mobile redirect
                // for dev
                window.location.replace('https://metamask.app.link/dapp/summer-vibes.netlify.app/')

                // for production
                // window.location.replace('https://metamask.app.link/dapp/' + window.location.hostname ?? 'summer-vlbes.co')
            }
        }
    }



    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <>
                <h2>Register for the raffle is closed.</h2>
            </>;
        } else {
            // Render a countdown
            return <div>
                {blockchain.registerMessage ? (
                    <>
                        <h2 className='title'>REGISTERed Successfully</h2>
                        <p className='text'>Check back tomorrow to see if you were selected to Mint</p>
                    </>
                ) : (
                    <>
                        <h2>REGISTER FOR RAFFLE</h2>
                        <p className='text'>The registration is free and registering is only a metamask wallet registration period ends ind {hours} hours {minutes} minutes {seconds} seconds</p>
                        <p className='yellow-text'>You need to have 0.25 ETH gas fee to participate on Raffle</p>
                        <Button
                            as='button'
                            withIcon={false}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect(true));
                                openMobileMetamask();
                            }}
                        >
                            REGISTER
                        </Button>
                        <p>{fallback}</p>
                    </>
                )
                }
            </div>
        }
    };

    console.log(blockchain)
    console.log(walletConnected)
    return (
        <AppStyle>
            <header>
                <a href="#" rel='noreferrer'>
                    <img src="/assets/logo.svg" alt="Racing"/>
                </a>
            </header>
            <section>
                <div className="content">
                    {/*<Countdown*/}
                    {/*    date={'2022-03-30T20:58:55'}*/}
                    {/*    // date={1648664657000}*/}
                    {/*    renderer={renderer}*/}
                    {/*/>*/}

                    {/*mint checking*/}
                    {/*<h2 className='title'>Mint</h2>*/}
                    {/*<p className='text'>Connect Wallet to see if you were selected to Mint</p>*/}
                    {/*<Button*/}
                    {/*    as='button'*/}
                    {/*    withIcon={false}*/}
                    {/*>*/}
                    {/*    CONNECT WALLET*/}
                    {/*</Button>*/}

                    {/*mint*/}
                    <h2 className='title'>Mint</h2>
                    <p className='text'>Congrats! You have been selected for the Mint</p>
                    <p className='yellow-text'>Wallet Address - 0x9320....2423</p>
                    <div className="mint-content">
                        <div className="mint-input">
                            <Icon
                                name="plus"
                                size={24}
                                color={theme.colors.white}
                                // onClick={() => setMintCount(normalizeMintCount(mintCount - 1))}
                            />
                            {/*<strong>{mintCount}</strong>*/}
                            <strong>0</strong>
                            <Icon
                                name="minus"
                                size={24}
                                color={theme.colors.white}
                                // onClick={() => setMintCount(normalizeMintCount(mintCount + 1))}
                            />
                        </div>

                        <Button
                            withIcon={false}
                            className="btn-mint"
                            // onClick={e => {
                            //     e.preventDefault()
                            //     claimNFTs(mintCount)
                            // }}
                        >
                            Mint
                        </Button>
                    </div>

                    {/*Unselected*/}
                    {/*<p className='text'>Unfortunately you have not been selected for the Mint</p>*/}
                    {/*<p className='yellow-text'>Wallet Address - 0x9320....2423</p>*/}
                    {/*<Button*/}
                    {/*    href='#'*/}
                    {/*    withIcon={false}*/}
                    {/*    className='mt-24'*/}
                    {/*>*/}
                    {/*    BACK TO  HOME PAGE*/}
                    {/*</Button>*/}
                </div>
            </section>
            <footer>
                <img src="assets/race.png" alt=""/>
            </footer>
        </AppStyle>
    )
}

export default App
