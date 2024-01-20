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

const byClicks = (
  campaigns: TypeCampaigns,
  setCampaigns: React.Dispatch<React.SetStateAction<TypeCampaigns>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const campaignsCopy = [...campaigns];
  campaignsCopy.sort((campaignA, campaignB) => {

    if (sortBy.sortBy !== "clicks") {
      setSortBy({sortBy: "clicks", reverse: false})
      return campaignA.clicks - campaignB.clicks
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return campaignB.clicks - campaignA.clicks
    }

    setSortBy({...sortBy, reverse: false})
    return campaignA.clicks - campaignB.clicks
  });

  setCampaigns(campaignsCopy);
}

const byCost = (
  campaigns: TypeCampaigns,
  setCampaigns: React.Dispatch<React.SetStateAction<TypeCampaigns>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const campaignsCopy = [...campaigns];
  campaignsCopy.sort((campaignA, campaignB) => {

    if (sortBy.sortBy !== "cost") {
      setSortBy({sortBy: "cost", reverse: false})
      return campaignA.cost - campaignB.cost
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return campaignB.cost - campaignA.cost
    }

    setSortBy({...sortBy, reverse: false})
    return campaignA.cost - campaignB.cost
  });

  setCampaigns(campaignsCopy);
}

const byDate = (
  campaigns: TypeCampaigns,
  setCampaigns: React.Dispatch<React.SetStateAction<TypeCampaigns>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const campaignsCopy = [...campaigns];
  campaignsCopy.sort((campaignA, campaignB) => {

    if (sortBy.sortBy !== "date") {
      setSortBy({sortBy: "date", reverse: false})
      return Date.parse(campaignA.date) - Date.parse(campaignB.date)
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return Date.parse(campaignB.date) - Date.parse(campaignA.date)
    }

    setSortBy({...sortBy, reverse: false})
      return Date.parse(campaignA.date) - Date.parse(campaignB.date)
  });

  setCampaigns(campaignsCopy);
}



export const sortCampaigns = {
  byId,
  byClicks,
  byCost,
  byDate
}