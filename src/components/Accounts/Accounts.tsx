import { FC, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import data from "../../data.json";
import { TypeAccounts } from "../../types/accountsTypes";
import { sortAccounts } from "../../helpers/sort/sortAccounts";
import { Pagination } from "../Pagination/Pagination";
import { filterAccounts } from "../../helpers/filter/filterAccounts";
import UP from "../../images/up-chevron.png";
import DOWN from "../../images/down-chevron.png";

export const Accounts: FC<{
  setChosenAccount: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setChosenAccount, perPage, setPerPage }) => {
  const [accounts, setAccounts] = useState<TypeAccounts>(data.accounts);
  const [sortBy, setSortBy] = useState({ sortBy: "", reverse: false });

  const [currentPage, setCurrentPage] = useState(1);
  const [currentAccs, setCurrentAccs] = useState<TypeAccounts>([]);

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const newCurrentAccs = accounts.slice(firstIndex, lastIndex);

    setCurrentAccs(newCurrentAccs);
  }, [accounts, currentPage, perPage]);

  return (
    <div>
      <Table variant="dark" bordered striped hover>
        <thead>
          <tr>
            <th colSpan={4}>Accounts</th>
          </tr>
          <tr className="tr-global">
            <th
              onClick={() => {
                sortAccounts.byId(accounts, setAccounts, sortBy, setSortBy);
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
                sortAccounts.byEmail(accounts, setAccounts, sortBy, setSortBy);
              }}
            >
              <div className="th-content-global">
                <p>Email</p>
                {sortBy.sortBy === "email" && sortBy.reverse === false && (
                  <img src={UP} className="arrow" />
                )}
                {sortBy.sortBy === "email" && sortBy.reverse === true && (
                  <img src={DOWN} className="arrow" />
                )}
              </div>
            </th>
            <th>Token</th>
            <th
              onClick={() => {
                sortAccounts.byDate(accounts, setAccounts, sortBy, setSortBy);
              }}
            >
              <div className="th-content-global">
                <p>Creation Date</p>
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
          {filterAccounts(filter.toLowerCase(), currentAccs).map((acc) => {
            return (
              <tr
                onClick={() => {
                  setChosenAccount(acc.accountId);
                }}
                key={acc.accountId}
              >
                <td>{acc.accountId}</td>
                <td>{acc.email}</td>
                <td>{acc.authToken}</td>
                <td>{acc.creationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <Pagination
          perPage={perPage}
          totalPage={accounts.length}
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
    </div>
  );
};
