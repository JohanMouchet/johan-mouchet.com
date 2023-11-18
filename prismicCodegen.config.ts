import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const config = {
  output: "./types.generated.ts",
  repositoryName: "johan-mouchet",
  customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
  models: {
    fetchFromRepository: true,
  },
};

export default config;
