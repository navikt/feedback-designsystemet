import type { NextApiRequest, NextApiResponse } from "next";
import { isValidatedApi } from "../../lib/auth/auth";
import client from "../../lib/sanity/sanity";
/* import { isValidatedApi } from "@/lib"; */

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const payload = await isValidatedApi(req);
  const email = payload?.preferred_username;

  if (!email) {
    console.log("heihei");
    res.status(403);
  } else {
    const voteResponse = await client.fetch(
      `*[_type == "post" && _id == $id] {
        votes,
      }
      `,
      {
        id: req.body.id,
      }
    );

    const voteList = voteResponse[0].votes;

    if (voteList?.includes(email)) {
      console.log(res.json);
      res.status(200).json({ voted: true });
    } else {
      console.log(res.json);
      res.status(200).json({ voted: false });
    }
  }
};
