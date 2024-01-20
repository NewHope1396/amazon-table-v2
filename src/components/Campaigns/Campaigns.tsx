import { FC } from "react";
import data from "../../data.json";

export const Campaigns: FC<{ accId: number; profileId: number }> = ({
  accId,
  profileId,
}) => {
  const chosenAccount = data.accounts.find((acc) => {
    return acc.accountId === accId;
  });
  const chosenProfile = chosenAccount?.profiles.find((profile) => {
    return profile.profileID === profileId;
  });

  const campaigns = chosenProfile?.campaigns;

  return (
    <div>
      <ul>
        {campaigns?.map((campaign) => {
          return <li key={campaign.campaignId}>{campaign.campaignId}</li>;
        })}
      </ul>
    </div>
  );
};
