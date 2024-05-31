import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image } from "./typings";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

//Set Up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//hopo funtion to go a head an actually get images as well
export const urlFor = (source: SanityImageSource | Image) =>
  createImageUrlBuilder(config).image(source);
