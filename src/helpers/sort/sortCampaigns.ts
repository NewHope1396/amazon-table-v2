import { TypeCampaigns } from "../../types/campaignsTypes";
import { TypeSortBy } from "../../types/sortByType";

const byId = (
  campaigns: TypeCampaigns,
  setCampaigns: React.Dispatch<React.SetStateAction<TypeCampaigns>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const campaignsCopy = [...campaigns];
  campaignsCopy.sort((campaignA, campaignB) => {

    if (sortBy.sortBy !== "id") {
      setSortBy({sortBy: "id", reverse: false})
      return campaignA.campaignId - campaignB.campaignId
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return campaignB.campaignId - campaignA.campaignId
    }

    setSortBy({...sortBy, reverse: false})
    return campaignA.campaignId - campaignB.campaignId
  });

  setCampaigns(campaignsCopy);
}

export const sortCampaigns = {
  byId,
}