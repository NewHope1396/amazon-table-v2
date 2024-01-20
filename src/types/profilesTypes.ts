import { TypeCampaigns } from "./campaignsTypes";

export type TypeProfiles = {
  profileID: number;
  country: string;
  marketPlace: string;
  campaigns: TypeCampaigns
}[];