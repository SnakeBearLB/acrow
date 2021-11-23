
import * as solanaWeb3 from '@solana/web3.js'
import base58 from 'bs58';

const secret_key = '2JDAFk17sSHc75p35ti88VjfVqV8DNJCaozR6dnawa4SFqaxSNEV7RbuQSnaBEYUGkFNEJuK4oQkuf66S5ueevHT';

const signer = solanaWeb3.Keypair.fromSecretKey(base58.decode('2JDAFk17sSHc75p35ti88VjfVqV8DNJCaozR6dnawa4SFqaxSNEV7RbuQSnaBEYUGkFNEJuK4oQkuf66S5ueevHT'));

console.log(signer)


