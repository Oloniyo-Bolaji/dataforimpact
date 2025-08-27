import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "wt78w02v",
  dataset: "production",
  apiVersion: "2025-08-11",
  useCdn: false,
});
