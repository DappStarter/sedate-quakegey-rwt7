require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan reward stereo coin grace depth furnace genuine'; 
let testAccounts = [
"0x149673bfedf3817601595be4edbde58fd9a7b9f7b86c14a18b1abb9b24a0be29",
"0xae819d0be69c4ff0c315bbde164cf132e29eb1911a1a9e13662084c414e1ed75",
"0x9b4c1289803dea7f5986fdbe4c7265596108c54f735051187b67209f081017a1",
"0x197c3b217bf74305b011a7142547138863f6c90053c21c12c483588c2e36105b",
"0xfd361831668e999bb2e30a160020b3eb58e63835c0d39d556b8fd979c3521c3a",
"0x4f439368bb64e7ca877c54d2e2efef23feae33f789f11e4f58fe47ce515afa47",
"0x8ad84510139f4563a13d7d5eecf6b1807ec2adaa2dc9cde2223ea3ee5b2f8db6",
"0x1653c21be35e81ec220e5bdd05ad9b1da781e9be24cee131243a4953159b7424",
"0x92e23a42f2df60216df6e41b83d56dc9d4ed1144921c2072383387c61bee8229",
"0x1734db8b2d1ea0031c9a924db418461f84f2fc49b46b39a45bb839753a8e2d2c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


