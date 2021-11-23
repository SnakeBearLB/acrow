declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SOLANA_KEYPAIR: string;
			SOLANA_CLUSTER_URL: string;
      MAGIC_API_KEY: string;
		}
	}
}

export {};