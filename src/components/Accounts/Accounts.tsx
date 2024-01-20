import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import data from "../../data.json";
import { TypeAccounts } from "../../types/accountsTypes";
import { sortAccounts } from "../../helpers/sortAccounts";
import { Pagination } from "../Pagination/Pagination";
import { filterAccounts } from "../../helpers/filterAccounts";

export const Accounts = () => {
  const [accounts, setAccounts] = useState<TypeAccounts>(data.accounts);
  const [sortBy, setSortBy] = useState({ sortBy: "none", reverse: false });

  const [currentPage, setCurrentPage] = useState(1);
  const [currentAccs, setCurrentAccs] = useState<TypeAccounts>([]);
  const [perPage, setPerPage] = useState(5);

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
          <tr>
            <th
              onClick={() => {
                sortAccounts.byId(accounts, setAccounts, sortBy, setSortBy);
              }}
            >
              ID
            </th>
            <th>Email</th>
            <th>Token</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filterAccounts(filter, currentAccs).map((acc) => {
            return (
              <tr key={acc.accountId}>
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
