import dotenv from "dotenv";
import type { Config } from "prismic-ts-codegen";

dotenv.config({ path: ".env.local", override: true });

const config: Config = {
  output: "./types.generated.ts",
  repositoryName: "johan-mouchet",
  customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
  models: {
    fetchFromRepository: true,
  },
};

export default config;
