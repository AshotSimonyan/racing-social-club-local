pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract TestRaffle is ERC721Enumerable, Ownable {
  using MerkleProof for bytes32[];

  uint32 public nextId = 1;
  uint32 public finalId;

  bytes32 public root;

  uint256 public mintPrice = 0.1 ether;

  uint256 private reserveAtATime = 50;
  uint256 private reservedCount = 0;
  uint256 private maxReserveCount = 300;

  string _baseTokenURI;

  bool public isActive = false;
  bool public isClosedMintForever = false;
  bool public isRaffleActive = false;

  uint256 public maximumMintSupply = 10000;
  uint256 public maximumAllowedTokensPerPurchase = 20;
  uint256 public maximumAllowedTokensPerWallet = 20;
  uint256 public allowListMaxMint = 20;

  mapping(address => bool) private _allowList;
  mapping(address => uint256) private _allowListClaimed;

  event AssetMinted(uint256 tokenId, address sender);
  event SaleActivation(bool isActive);

  constructor(string memory baseURI) ERC721("RaffleContract", "RSC") {
    setBaseURI(baseURI);
  }

  modifier saleIsOpen {
    require(totalSupply() <= maximumMintSupply, "Sale has ended.");
    _;
  }

  modifier onlyAuthorized() {
    require(owner() == msg.sender);
    _;
  }

  function setMaximumAllowedTokens(uint256 _count) public onlyAuthorized {
    maximumAllowedTokensPerPurchase = _count;
  }

  function setMaximumAllowedTokensPerWallet(uint256 _count) public onlyAuthorized {
    maximumAllowedTokensPerWallet = _count;
  }

  function setActive(bool val) public onlyAuthorized {
    isActive = val;
    emit SaleActivation(val);
  }

  function setRaffleActive(bool _isRaffleActive) public onlyAuthorized {
    isRaffleActive = _isRaffleActive;
  }

  function setMaxMintSupply(uint256 maxMintSupply) external  onlyAuthorized {
    maximumMintSupply = maxMintSupply;
  }

  function setAllowListMaxMint(uint256 maxMint) external  onlyAuthorized {
    allowListMaxMint = maxMint;
  }

  function addToAllowList(address[] calldata addresses) external onlyAuthorized {
    for (uint256 i = 0; i < addresses.length; i++) {
      require(addresses[i] != address(0), "Can't add a null address");
      _allowList[addresses[i]] = true;
      _allowListClaimed[addresses[i]] > 0 ? _allowListClaimed[addresses[i]] : 0;
    }
  }

  function checkIfOnAllowList(address addr) external view returns (bool) {
    return _allowList[addr];
  }

  function removeFromAllowList(address[] calldata addresses) external onlyAuthorized {
    for (uint256 i = 0; i < addresses.length; i++) {
      require(addresses[i] != address(0), "Can't add a null address");
      _allowList[addresses[i]] = false;
    }
  }

  function allowListClaimedBy(address owner) external view returns (uint256){
    require(owner != address(0), "Zero address not on Allow List");
    return _allowListClaimed[owner];
  }

  function setReserveAtATime(uint256 val) public onlyAuthorized {
    reserveAtATime = val;
  }

  function setMaxReserve(uint256 val) public onlyAuthorized {
    maxReserveCount = val;
  }

  function setPrice(uint256 _price) public onlyAuthorized {
    mintPrice = _price;
  }

  function setBaseURI(string memory baseURI) public onlyAuthorized {
    _baseTokenURI = baseURI;
  }

  function setRoot(bytes32 _root) public onlyAuthorized {
    root = _root;
  }

  function getMaximumAllowedTokens() public view onlyAuthorized returns (uint256) {
    return maximumAllowedTokensPerPurchase;
  }

  function getPrice() external view returns (uint256) {
    return mintPrice;
  }

  function getRoot() external view returns (bytes32) {
    return root;
  }

  function getIsClosedMintForever() external view returns (bool) {
    return isClosedMintForever;
  }

  function setIsClosedMintForever() external onlyAuthorized {
    isClosedMintForever = true;
  }

  function getReserveAtATime() external view returns (uint256) {
    return reserveAtATime;
  }

  function getTotalSupply() external view returns (uint256) {
    return totalSupply();
  }

  function getContractOwner() public view returns (address) {
    return owner();
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  function reserveNft() public onlyAuthorized {
    require(reservedCount <= maxReserveCount, "Max Reserves taken already!");
    uint256 supply = totalSupply();
    uint256 i;

    for (i = 0; i < reserveAtATime; i++) {
      emit AssetMinted(supply + i, msg.sender);
      _safeMint(msg.sender, supply + i);
      reservedCount++;
    }
  }

  function mint(address _to, uint256 _count) public payable saleIsOpen {
    if (msg.sender != owner()) {
      require(isActive, "Sale is not active currently.");
    }

    if(_to != owner()) {
      require(balanceOf(_to) + _count <= maximumAllowedTokensPerWallet, "Max holding cap reached.");
    }

    require(totalSupply() + _count <= maximumMintSupply, "Total supply exceeded.");
    require(totalSupply() <= maximumMintSupply, "Total supply spent.");
    require(
      _count <= maximumAllowedTokensPerPurchase,
      "Exceeds maximum allowed tokens"
    );
    require(!isClosedMintForever, "Mint Closed Forever");

    require(msg.value >= mintPrice * _count, "Insuffient ETH amount sent.");

    for (uint256 i = 0; i < _count; i++) {
      emit AssetMinted(totalSupply(), _to);
      _safeMint(_to, totalSupply());
    }
  }

  function walletOfOwner(address _owner) external view returns(uint256[] memory) {
    uint tokenCount = balanceOf(_owner);
    uint256[] memory tokensId = new uint256[](tokenCount);

    for(uint i = 0; i < tokenCount; i++){
      tokensId[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokensId;
  }

  function withdraw() external onlyAuthorized {
    uint balance = address(this).balance;
    payable(owner()).transfer(balance);
  }

  function raffleMint(uint256 _count, bytes32[] memory _proof) public payable saleIsOpen {
    bytes32 leaf = keccak256(abi.encodePacked(msg.sender));

    require(isRaffleActive, "Raffle is not active");
    require(_proof.verify(root, leaf), "invalid proof");

    require(totalSupply() < maximumMintSupply, "All tokens have been minted");
    require(_count <= allowListMaxMint, "Cannot purchase this many tokens");
    require(_allowListClaimed[msg.sender] + _count <= allowListMaxMint, "Purchase exceeds max allowed");
    require(msg.value >= mintPrice * _count, "Insuffient ETH amount sent.");
    require(!isClosedMintForever, "Mint Closed Forever");

    for (uint256 i = 0; i < _count; i++) {
      emit AssetMinted(totalSupply(), msg.sender);
      _safeMint(msg.sender, totalSupply());
    }
  }

}