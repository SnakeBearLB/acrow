
import * as web3 from '@solana/web3.js';
import base58 from 'bs58';

function printLamports(lamports: number): string {
	return (lamports / 1e9).toLocaleString('en', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

(async () => {

  console.log()

  const secret = '2JDAFk17sSHc75p35ti88VjfVqV8DNJCaozR6dnawa4SFqaxSNEV7RbuQSnaBEYUGkFNEJuK4oQkuf66S5ueevHT'

	const cluster = 'https://api.devnet.solana.com'

	const connection = new web3.Connection(cluster, 'processed');

	// decode the base58 encoded private key and use it to create a Keypair
	const keypair = web3.Keypair.fromSecretKey(base58.decode(secret));

	// request the balance
	await connection.getBalance(keypair.publicKey).then((balance) => {
		console.log('Public Key: %s', keypair.publicKey.toBase58());
		console.log('SOL Balance: ', printLamports(balance));
	});
})();