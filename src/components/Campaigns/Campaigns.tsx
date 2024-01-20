import { FC, useEffect, useState } from "react";
import data from "../../data.json";
import { Table } from "react-bootstrap";
import { Pagination } from "../Pagination/Pagination";
import { filterCampaigns } from "../../helpers/filter/filterCampaigns";
import { sortCampaigns } from "../../helpers/sort/sortCampaigns";
import { TypeCampaigns } from "../../types/campaignsTypes";
import UP from "../../images/up-chevron.png";
import DOWN from "../../images/down-chevron.png";

export const Campaigns: FC<{
  accId: number;
  profileId: number;
  setChosenProfile: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ accId, profileId, setChosenProfile, perPage, setPerPage }) => {
  const [campaigns, setCampaigns] = useState<TypeCampaigns>([]);
  const [sortBy, setSortBy] = useState({ sortBy: "", reverse: false });

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCampaigns, setCurrentCampaigns] = useState<TypeCampaigns>([]);

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const chosenAcc = data.accounts.find((acc) => {
      return acc.accountId === accId;
    });

    const chosenProfile = chosenAcc?.profiles.find((profile) => {
      return profile.profileID === profileId;
    });

    setCampaigns(chosenProfile!.campaigns);
  }, [accId, profileId]);

  useEffect(() => {
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const newCurrentCampaigns = campaigns.slice(firstIndex, lastIndex);

    setCurrentCampaigns(newCurrentCampaigns);
  }, [campaigns, currentPage, perPage]);

  return (
    <div>
      <Table variant="dark" bordered striped hover>
        <thead>
          <tr>
            <th colSpan={4}>Campaigns for profile with id {profileId} </th>
          </tr>
          <tr>
            <th
              onClick={() => {
                sortCampaigns.byId(campaigns, setCampaigns, sortBy, setSortBy);
              }}
            >
              <div className="th-content-global">
                <p>ID</p>
                {sortBy.sortBy === "id" && sortBy.reverse === false && (
                  <img src={UP} className="arrow" />
                )}
                {sortBy.sortBy === "id" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
            <th
              onClick={() => {
                sortCampaigns.byClicks(
                  campaigns,
                  setCampaigns,
                  sortBy,
                  setSortBy
                );
              }}
            >
              <div className="th-content-global">
                <p>Clicks</p>
                {sortBy.sortBy === "clicks" && sortBy.reverse === false && (
                  <img src={UP} className="arrow" />
                )}
                {sortBy.sortBy === "clicks" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
            <th
              onClick={() => {
                sortCampaigns.byCost(
                  campaigns,
                  setCampaigns,
                  sortBy,
                  setSortBy
                );
              }}
            >
              <div className="th-content-global">
                <p>Cost</p>
                {sortBy.sortBy === "cost" && sortBy.reverse === false && (
                  <img src={UP} className="arrow" />
                )}
                {sortBy.sortBy === "cost" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
            <th
              onClick={() => {
                sortCampaigns.byDate(
                  campaigns,
                  setCampaigns,
                  sortBy,
                  setSortBy
                );
              }}
            >
              <div className="th-content-global">
                <p>Date</p>
                {sortBy.sortBy === "date" && sortBy.reverse === false && (
                  <img src={UP} className="arrow" />
                )}
                {sortBy.sortBy === "date" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterCampaigns(filter.toLowerCase(), currentCampaigns).map(
            (campaign) => {
              return (
                <tr key={campaign.campaignId}>
                  <td>{campaign.campaignId}</td>
                  <td>{campaign.clicks}</td>
                  <td>{campaign.cost}</td>
                  <td>{campaign.date}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
      <div>
        <Pagination
          perPage={perPage}
          totalPage={campaigns.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <select
          value={perPage}
          onChange={(e) => {
            setCurrentPage(1);
            setPerPage(Number(e.target.value));
            <p>Кількіть показаних варіантів</p>;
          }}
          name="pagination"
          id="pagination"
        >
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
        />
      </div>
      <button
        onClick={() => {
          setChosenProfile(0);
        }}
      >
        Go Back
      </button>
    </div>
  );
};
