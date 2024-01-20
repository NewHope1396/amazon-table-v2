import { TypeProfiles } from "./profilesTypes";

export type TypeAccounts = {
  accountId: number;
  email: string;
  authToken: number;
  creationDate: string;
  profiles: TypeProfiles
}[];