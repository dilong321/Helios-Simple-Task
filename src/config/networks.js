export const HELIOS_TESTNET = {
  chainId: '0xA410', // 42000 in hex
  chainName: 'Helios Testnet',
  rpcUrls: ['https://testnet1.helioschainlabs.org'],
  nativeCurrency: {
    name: 'Helios',
    symbol: 'HLS',
    decimals: 18
  },
  blockExplorerUrls: ['https://explorer.helioschainlabs.org']
};

export const CONTRACT_TEMPLATES = {
  ERC20: `pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, totalSupply * 10**decimals());
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`,

  ERC721: `pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;
    string private _baseTokenURI;
    
    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) ERC721(name, symbol) {
        _baseTokenURI = baseURI;
    }
    
    function mint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        _safeMint(to, tokenId);
    }
    
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}`
};
