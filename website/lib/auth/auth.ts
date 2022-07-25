import { GetServerSidePropsContext, NextApiRequest } from "next";
/* import { isDevelopment } from ".."; */
import { tokenIsValid } from "./verifyToken";

export function getBearerToken(req) {
  console.log("Headers " + req.headers);
  return req.headers?.authorization?.substring("Bearer ".length);
}

/**
 * Used to authenticate Next.JS pages. Assumes application is behind
 * Wonderwall (https://doc.nais.io/security/auth/idporten/sidecar/).
 */
export const isValidated = async (context: GetServerSidePropsContext) => {
  const request = context.req;
  console.log("request: " + request);

  if (request == null) {
    throw new Error("Context is missing request. This should not happen");
  }

  const bearerToken = getBearerToken(request);
  console.log("Bearer token: " + bearerToken);

  if (!bearerToken) {
    process.env.NODE_ENV !== "production" && console.log("No bearer token");
    return false;
  }

  try {
    await tokenIsValid(bearerToken);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const isValidatedApi = async (req: NextApiRequest) => {
  if (req == null) {
    throw new Error("No request given, this should not happen");
  }

  const bearerToken = getBearerToken(req);
  console.log("Bearer token 2: " + bearerToken);

  if (!bearerToken) {
    console.log("No bearer token");
    return null;
  }

  try {
    const payload = await tokenIsValid(bearerToken);
    console.log("Payload: " + payload);
    return payload;
  } catch (e) {
    console.log(e);
    return null;
  }
};
