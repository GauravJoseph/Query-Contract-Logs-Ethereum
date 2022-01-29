const Web3 = require('web3'); 
const provider =
  "https://mainnet.infura.io/v3/3b1dfc4111854099a637c85693d73dcb"

const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));

const CONTRACT_ABI = [
    // balanceOf
    {
        inputs: [
          {
            internalType: "address",
            name: "_feeToSetter",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "token0",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "token1",
            type: "address"
          },
          {
            indexed: false,
            internalType: "address",
            name: "pair",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "PairCreated",
        type: "event"
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "allPairs",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "allPairsLength",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "tokenA",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenB",
            type: "address"
          }
        ],
        name: "createPair",
        outputs: [
          {
            internalType: "address",
            name: "pair",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "feeTo",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "feeToSetter",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          },
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        name: "getPair",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_feeTo",
            type: "address"
          }
        ],
        name: "setFeeTo",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "_feeToSetter",
            type: "address"
          }
        ],
        name: "setFeeToSetter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
  ];

const CONTRACT_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
const contract = new Web3Client.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

async function eventQuery(){
    
const START_BLOCK = 14098000;
const END_BLOCK = 14098847;
contract.getPastEvents("allEvents",
    {                               
        fromBlock: START_BLOCK,     
        toBlock: END_BLOCK // You can also specify 'latest'          
    })                              
.then(events => console.log(events))
.catch((err) => console.error(err));
/*    Code to query events here       */    
}

eventQuery();
