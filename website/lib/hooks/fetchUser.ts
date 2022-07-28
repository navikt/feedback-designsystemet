import { useQuery } from "react-query";

export const useUser = async () => {
  const payload = await useQuery("user", fetch("/api/auth"));
  console.log(payload);
  return payload;
};
