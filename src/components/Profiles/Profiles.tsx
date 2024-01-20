import { FC, useEffect, useState } from "react";
import data from "../../data.json";
import { Table } from "react-bootstrap";
import { Pagination } from "../Pagination/Pagination";
import { filterProfiles } from "../../helpers/filter/filterProfiles";
import { TypeProfiles } from "../../types/profilesTypes";
import { sortProfiles } from "../../helpers/sort/sortProfiles";

export const Profiles: FC<{
  id: number;
  setChosenProfile: React.Dispatch<React.SetStateAction<number>>;
  setChosenAccount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ id, setChosenProfile, setChosenAccount }) => {
  const [profiles, setProfiles] = useState<TypeProfiles>([]);
  const [sortBy, setSortBy] = useState({ sortBy: "", reverse: false });

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProfiles, setCurrentProfiles] = useState<TypeProfiles>([]);
  const [perPage, setPerPage] = useState(5);

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const chosenAcc = data.accounts.find((acc) => {
      return acc.accountId === id;
    });
    setProfiles(chosenAcc!.profiles);

    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const newCurrentProfiles = profiles.slice(firstIndex, lastIndex);

    setCurrentProfiles(newCurrentProfiles);
  }, [profiles, currentPage, perPage, id]);

  return (
    <div>
      <Table variant="dark" bordered striped hover>
        <thead>
          <tr>
            <th colSpan={3}>Profiles for account with id {id} </th>
          </tr>
          <tr>
            <th
              onClick={() => {
                sortProfiles.byId(profiles, setProfiles, sortBy, setSortBy);
              }}
            >
              ID
            </th>
            <th>Country</th>
            <th>Marketplace</th>
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
      <div>
        <Pagination
          perPage={perPage}
          totalPage={profiles.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <select
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
          setChosenAccount(0);
        }}
      >
        Go Back
      </button>
    </div>
  );
};
