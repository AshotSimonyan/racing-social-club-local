import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Icon} from "./components/UIKit";
import {fetchData} from "./redux/data/dataActions";
import {checkRuffle, connect} from "./redux/blockchain/blockchainActions";
import {AppStyle} from "./App.style";
import Countdown from 'react-countdown';
import {isAndroid, isIOS} from "react-device-detect";
import {theme} from "./styles/theme";
import addressList from "./data";
const {MerkleTree} = require('merkletreejs')
const keccak256 = require('keccak256')

const errorMessages = [
    'Change network to ETH.',
    'Something went wrong.'
]
const metamaskError = 'Install Metamask.'

const fixImpreciseNumber = (number) => {
    return (parseFloat(number.toPrecision(12)));
}

const truncateText = (text) => {
    return text.substring(0, 5) + "...." + text.substring(text.length - 4, text.length);
}

function App() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    // const [maxMintCount, setMaxMintCount] = useState(1) //comment if you need static maxMintCount
    const [mintCount, setMintCount] = useState(1)
    const [connectingMobile, setConnectingMobile] = useState(false)
    const [walletConnected, setWalletConnected] = useState(false)
    const [fallback, setFallback] = useState('')
    const [notSelected, setNotSelected] = useState(null)

    const minMintCount = 1

    // uncomment if you need static maxMintCount
    const maxMintCount = 5

    useEffect( () => {
        dispatch(checkRuffle())
    }, [])


    useEffect(async () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
            if (blockchain.account) {

                const root = await blockchain?.smartContract?.methods.getRoot().call()
                let tree

                const createMerkleTree = () => {
                    const leaves = addressList.map(v => keccak256(v))
                    tree = new MerkleTree(leaves, keccak256, { sort: true })
                }

                const getRoot = () => {
                    return tree.getHexRoot()
                }

                setWalletConnected(true)


                createMerkleTree()
                const localRoot = getRoot()

                
                if(root === localRoot && addressList.includes(blockchain.account)) {
                    setNotSelected(false)
                } else {
                    setNotSelected(true)
                }
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
            window.location.replace('https://metamask.app.link/dapp/racing-social-club.netlify.com/')
        }
    }, [blockchain.errorMsg])

    const openMobileMetamask = () => {
        if(typeof window.ethereum === 'undefined') {
            if (connectingMobile && !walletConnected && (isIOS || isAndroid)
                || blockchain.errorMsg === metamaskError) {
                window.location.replace('https://metamask.app.link/dapp/racing-social-club.netlify.com/')
            }
        }
    }

    const normalizeMintCount = count =>
        count > maxMintCount
            ? maxMintCount
            : count < minMintCount
                ? minMintCount
                : count

    const handleConnectWallet = async () => {
        dispatch(connect(false));
        openMobileMetamask();
    }

    const claimNFTs = async (_amount) => {
        let tree

        const createMerkleTree = () => {
            const leaves = addressList.map(v => keccak256(v))
            tree = new MerkleTree(leaves, keccak256, { sort: true })
        }

        const getProof = (address) => {
            const leaf = keccak256(address)
            return tree.getHexProof(leaf)
        }

        createMerkleTree()
        const isMintActive = await blockchain.smartContract.methods.isMintActive().call();
        const isRaffleActive = await blockchain.smartContract.methods.isRaffleActive().call();
        const mint = isMintActive ? blockchain.smartContract.methods.mint(blockchain.account, _amount)
            : isRaffleActive ? blockchain.smartContract.methods.raffleMint(_amount, getProof(blockchain.account))
                : null ;

        if (mint) {
            const mintPrice = await blockchain.smartContract.methods?.mintPrice().call() / 10 ** 18

            const balance = await blockchain.web3.eth.getBalance(blockchain.account, async (err, result) => {
                return  blockchain.web3.utils.fromWei(result, "ether")
            })
            const roundedBalance = balance / 10 ** 18
            if(roundedBalance < fixImpreciseNumber(_amount * mintPrice)) {

                return setFallback(`You don’t have enough funds to mint! Please, make sure to have ${fixImpreciseNumber(_amount * mintPrice)} ETH + gas.`)
            }
            if(roundedBalance)
                mint.send({
                    from: blockchain.account,
                    value: blockchain.web3.utils.toWei(fixImpreciseNumber(mintPrice * _amount).toString(), "ether")

                }).once("error", (err) => {
                    if (err.code === -32000 || err.code === '-32000') {
                        setFallback('Insufficient funds, please add funds to your wallet and try again')
                    } else {
                        setFallback('Sorry, something went wrong please try again')
                    }
                }).then(receipt => {
                    setFallback('Success')
                });
        } else {
            setFallback('The mint is not open yet.')
        }
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <>

                {(walletConnected && notSelected) ? (
                        <>
                            <p className='text'>Unfortunately you have not been selected to mint.</p>
                            <p className='yellow-text'>Wallet Address - ${truncateText(blockchain.account)}</p>
                            <Button
                                href='#'
                                withIcon={false}
                                className='mt-24'
                            >
                                BACK TO  HOME PAGE
                            </Button>
                        </>
                    ) : (walletConnected && notSelected === false) ? (
                        <>
                            <h2 className='title'>Mint</h2>
                            <p className='text'>Congrats! You have been selected to mint.</p>
                            <p className='yellow-text'>Wallet Address - ${truncateText(blockchain.account)}</p>
                            <div className="mint-content">
                                <div className="mint-input">
                                    <Icon
                                        name="minus"
                                        size={24}
                                        color={theme.colors.white}
                                        onClick={() => setMintCount(normalizeMintCount(mintCount - 1))}
                                        className={mintCount === minMintCount ? 'disabled' : ''}
                                    />
                                    <strong>{mintCount}</strong>
                                    <Icon
                                        name="plus"
                                        size={24}
                                        color={theme.colors.white}
                                        onClick={() => setMintCount(normalizeMintCount(mintCount + 1))}
                                        className={mintCount === maxMintCount ? 'disabled' : ''}
                                    />
                                </div>

                                <Button
                                    withIcon={false}
                                    className="btn-mint"
                                    onClick={e => {
                                        e.preventDefault();
                                        setFallback('');
                                        claimNFTs(mintCount);
                                    }}
                                >
                                    Mint
                                </Button>
                            </div>
                            {fallback && <p className="warn-text">{fallback}</p>}
                        </>
                    ) : (
                    <>
                        <h2 className='title'>Mint</h2>
                        <p className='text'>Connect Wallet to see if you were selected to mint.</p>
                        <Button
                            as='button'
                            withIcon={false}
                            onClick={handleConnectWallet}
                        >
                            CONNECT WALLET
                        </Button>
                        {fallback && <p className="warn-text">{fallback}</p>}
                    </>
                )
                }
            </>;
        } else {
            // Render a countdown
            return <div>
                {blockchain.registerMessage ? (
                    <>
                        <h2 className='title'>REGISTERed Successfully</h2>
                        <p className='text'>Check back in {hours} hours {minutes} minutes {seconds} seconds to see if you were selected to mint.</p>
                    </>
                ) : (
                    <>
                        <h2>REGISTER FOR RAFFLE</h2>
                        <p className='text'>The registration is free and registering is only available with metamask wallet. <br/> Registration period ends in {hours} hours {minutes} minutes {seconds} seconds.</p>
                        <p className='yellow-text'>You need to have 0.25 ETH + gas fee to participate in Raffle.</p>
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

    return (
        <AppStyle>
            <header>
                <a href="#" rel='noreferrer'>
                    <img src="/assets/logo.svg" alt="Racing"/>
                </a>
            </header>
            <section>
                <div className="content">
                    <Countdown
                        date={'2022-04-21T17:40:55'}
                        // date={1648664657000}
                        renderer={renderer}
                    />
                </div>
            </section>
            <footer>
                <img src="assets/race.png" alt=""/>
            </footer>
        </AppStyle>
    )
}

export default App
