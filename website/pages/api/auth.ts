import { isValidatedApi } from "../../lib/auth/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import handler from "./isAlive";
/* import { isValidatedApi } from "@/lib"; */

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const payload = await isValidatedApi(req);
  console.log("Payload 2: " + payload);

  const user = payload
    ? { name: payload?.name, mail: payload?.preferred_username }
    : {};

  res.status(200).json({
    status: payload ? 200 : 401,
    ...user,
  });
};
