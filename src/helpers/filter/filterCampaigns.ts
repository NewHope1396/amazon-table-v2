import { TypeCampaigns } from "../../types/campaignsTypes";

export const filterCampaigns = (value: string, campaigns: TypeCampaigns) => {
  const filteredCampaigns = campaigns.filter((campaign => {
    
    if (!value) {
      return campaigns;
    }

    return (
      campaign.campaignId.toString().toLowerCase().includes(value) ||
      campaign.clicks.toString().toLowerCase().includes(value) ||
      campaign.cost.toString().toLowerCase().includes(value) ||
      campaign.date.toString().toLowerCase().includes(value) 
    );
  }))

  return filteredCampaigns;
}

  