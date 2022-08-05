import type { NextApiRequest, NextApiResponse } from "next";
import { isValidatedApi } from "../../lib/auth/auth";
import client from "../../lib/sanity/sanity";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const payload = await isValidatedApi(req);
  const email = payload?.preferred_username;

  if (!email) {
    res.send(403);
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
      client
        .patch(req.body.id)
        // Add the items after the last item in the array (append)
        .set({ votes: voteList.filter((vote) => vote !== email) })
        .commit();
    } else {
      client
        .patch(req.body.id)
        // Ensure that the `reviews` arrays exists before attempting to add items to it
        .setIfMissing({ votes: [] })
        // Add the items after the last item in the array (append)
        .insert("after", "votes[-1]", [email])
        .commit();
    }
    res.send("ok");
  }
};
