import { TypeAccounts } from "../../types/accountsTypes"
import { TypeSortBy } from "../../types/sortByType";

const byId = (
  accs: TypeAccounts,
  setAccs: React.Dispatch<React.SetStateAction<TypeAccounts>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const accsCopy = [...accs];
  accsCopy.sort((accA, accB) => {

    if (sortBy.sortBy !== "id") {
      setSortBy({sortBy: "id", reverse: false})
      return accA.accountId - accB.accountId
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return accB.accountId - accA.accountId
    }

    setSortBy({...sortBy, reverse: false})
    return accA.accountId - accB.accountId
  });

  setAccs(accsCopy);
}

export const sortAccounts = {
  byId,
}