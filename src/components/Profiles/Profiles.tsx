import { FC, useEffect, useState } from "react";
import data from "../../data.json";
import { Table } from "react-bootstrap";
import { Pagination } from "../Pagination/Pagination";
import { filterProfiles } from "../../helpers/filter/filterProfiles";
import { TypeProfiles } from "../../types/profilesTypes";
import { sortProfiles } from "../../helpers/sort/sortProfiles";
import UP from "../../images/up-chevron.png";
import DOWN from "../../images/down-chevron.png";
import FIND from "../../images/search.png";

export const Profiles: FC<{
  id: number;
  setChosenProfile: React.Dispatch<React.SetStateAction<number>>;
  setChosenAccount: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ id, setChosenProfile, setChosenAccount, perPage, setPerPage }) => {
  const [profiles, setProfiles] = useState<TypeProfiles>([]);
  const [sortBy, setSortBy] = useState({ sortBy: "", reverse: false });

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProfiles, setCurrentProfiles] = useState<TypeProfiles>([]);

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const chosenAcc = data.accounts.find((acc) => {
      return acc.accountId === id;
    });
    setProfiles(chosenAcc!.profiles);
  }, [id]);

  useEffect(() => {
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const newCurrentProfiles = profiles.slice(firstIndex, lastIndex);

    setCurrentProfiles(newCurrentProfiles);
  }, [profiles, currentPage, perPage]);

  return (
    <div>
      <div className="upper-table-block-global">
        <div className="filter-block-global">
          <label htmlFor="filter">
            <img src={FIND} />
          </label>
          <input
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            type="text"
            id="filter"
            placeholder="Search"
          />
        </div>
        <button
          onClick={() => {
            setChosenAccount(0);
          }}
        >
          Go Back
        </button>
      </div>
      <Table variant="dark" bordered striped hover>
        <thead>
          <tr>
            <th className="th-main-global" colSpan={3}>
              Profiles for account with id {id}
            </th>
          </tr>
          <tr>
            <th
              className="th-global"
              onClick={() => {
                sortProfiles.byId(profiles, setProfiles, sortBy, setSortBy);
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
              className="th-global"
              onClick={() => {
                sortProfiles.byCountry(
                  profiles,
                  setProfiles,
                  sortBy,
                  setSortBy
                );
              }}
            >
              <div className="th-content-global">
                <p>Country</p>
                {sortBy.sortBy === "country" && sortBy.reverse === false && (
                  <img src={UP} className="arrow" />
                )}
                {sortBy.sortBy === "country" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
            <th
              className="th-global"
              onClick={() => {
                sortProfiles.byMarketplace(
                  profiles,
                  setProfiles,
                  sortBy,
                  setSortBy
                );
              }}
            >
              <div className="th-content-global">
                <p>Marketplace</p>
                {sortBy.sortBy === "marketplace" &&
                  sortBy.reverse === false && (
                    <img src={UP} className="arrow" />
                  )}
                {sortBy.sortBy === "marketplace" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterProfiles(filter.toLowerCase(), currentProfiles).map(
            (profile) => {
              return (
                <tr
                  onClick={() => {
                    setChosenProfile(profile.profileID);
                  }}
                  key={profile.profileID}
                >
                  <td>{profile.profileID}</td>
                  <td>{profile.country}</td>
                  <td>{profile.marketPlace}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
      <div className="pagination-block-global">
        <Pagination
          perPage={perPage}
          totalPage={profiles.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="select-block-global">
          <p>Items per page</p>
          <select
            value={perPage}
            onChange={(e) => {
              setCurrentPage(1);
              setPerPage(Number(e.target.value));
            }}
            name="pagination"
            id="pagination"
          >
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};
