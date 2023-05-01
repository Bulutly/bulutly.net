import { werify } from "@werify/id-ts";

export const useAuth = async () => {
  const auth = werify();
  auth.config.baseURL = "https://api.trader4.net";
  return { auth };
};
