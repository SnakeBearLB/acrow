
import web3 from "@solana/web3.js"

const createConnection = new web3.Connection(web3.clusterApiUrl("devnet"))

export default createConnection
