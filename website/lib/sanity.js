import { createClient } from "next-sanity";

import { config } from "./config";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
