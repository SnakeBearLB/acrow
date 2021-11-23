
// import connection to program
import * as solanaWeb3 from "@solana/web3.js";
import { programId } from "./program";
import base58 from 'bs58';

export const Main = async () => {

  const data: Buffer = Buffer.from("blah");

  const cluster = 'https://api.devnet.solana.com'

  const connection = new solanaWeb3.Connection(cluster, 'processed');

  const secret_key = '2JDAFk17sSHc75p35ti88VjfVqV8DNJCaozR6dnawa4SFqaxSNEV7RbuQSnaBEYUGkFNEJuK4oQkuf66S5ueevHT';

  const signer = solanaWeb3.Keypair.fromSecretKey(base58.decode(secret_key));

  const transaction = new solanaWeb3.Transaction().add(
    new solanaWeb3.TransactionInstruction({
      keys: [],
      programId: programId,
      data
    })
  );

  // transaction hash to confirm transaction
  const hash = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [signer]);
  console.log(hash);
  return hash
}

Main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);