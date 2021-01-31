require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remain mistake good nasty fortune stock'; 
let testAccounts = [
"0x6d12d0e6957dd1b2da5943d1b54c7da4b7f36f32cd3902dcb81e7f796f78d6fd",
"0xf9fe95310787a1af662f7f66ecb855f9f90ae946aeedd50f0d317e7a9db6e79a",
"0xcfeb7acc39a3ce870d87cc80ba773b12d9dd5855447c94eff6401fc281331491",
"0xfc0838bf4ee2c006be0af425e37c82ff762f02aad55b1a3a5ffd8da3ae3ad523",
"0xe0e1201861998e92726783d2f62d4687972b2eb832c0bf74e8bf8245dc4bfef4",
"0xaa1e01d6b85a9439f49d59be5df63fab43a020c504cdbf9148adcd73705c1da3",
"0x1ca759eebdf7bc2e862817d776746fedc5d0ca35d5b49ae1d4f9fd9025956247",
"0x5c9f721dd71ec91c1e94ea5a307d158088f97ef4dd15ca9ec6d0f00c5ebc14f2",
"0x49097f3a9a6c20bbd01faedee8d885de232342af80452378e7411e9de2bb32dc",
"0xce35eb7c1cda5de5bff7c8a07647641f827d51b8305f926ecb8cefddade051c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
