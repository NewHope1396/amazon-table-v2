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

const byEmail = (
  accs: TypeAccounts,
  setAccs: React.Dispatch<React.SetStateAction<TypeAccounts>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const accsCopy = [...accs];
  accsCopy.sort((accA, accB) => {

    if (sortBy.sortBy !== "email") {
      setSortBy({ sortBy: "email", reverse: false })
      
      if (accA.email > accB.email) {
        return 1;
      }
      if (accA.email < accB.email) {
        return -1;
      }
      return 0;
    }

    if (sortBy.reverse === false) {
      setSortBy({ ...sortBy, reverse: true })
      
      if (accA.email < accB.email) {
        return 1;
      }
      if (accA.email > accB.email) {
        return -1;
      }
      return 0;
    }

    setSortBy({...sortBy, reverse: false})
    if (accA.email > accB.email) {
        return 1;
      }
      if (accA.email < accB.email) {
        return -1;
      }
      return 0;
  });

  setAccs(accsCopy);
}

const byDate = (
  accs: TypeAccounts,
  setAccs: React.Dispatch<React.SetStateAction<TypeAccounts>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const accsCopy = [...accs];
  accsCopy.sort((accA, accB) => {

    if (sortBy.sortBy !== "date") {
      setSortBy({sortBy: "date", reverse: false})
      return Date.parse(accA.creationDate) - Date.parse(accB.creationDate)
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return Date.parse(accB.creationDate) - Date.parse(accA.creationDate)
    }

    setSortBy({...sortBy, reverse: false})
    return Date.parse(accA.creationDate) - Date.parse(accB.creationDate)
  });

  setAccs(accsCopy);
}


export const sortAccounts = {
  byId,
  byEmail,
  byDate
}