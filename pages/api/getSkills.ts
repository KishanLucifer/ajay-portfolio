// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

type Data = {
  skills: Skill[];
};

const query = groq`*[_type == "skill"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
