import { TypeProfiles } from "../../types/profilesTypes";
import { TypeSortBy } from "../../types/sortByType";

const byId = (
  profiles: TypeProfiles,
  setProfiles: React.Dispatch<React.SetStateAction<TypeProfiles>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const profilesCopy = [...profiles];
  profilesCopy.sort((profileA, profileB) => {

    if (sortBy.sortBy !== "id") {
      setSortBy({sortBy: "id", reverse: false})
      return profileA.profileID - profileB.profileID
    }

    if (sortBy.reverse === false) {
      setSortBy({...sortBy, reverse: true})
      return profileB.profileID - profileA.profileID
    }

    setSortBy({...sortBy, reverse: false})
    return profileA.profileID - profileB.profileID
  });

  setProfiles(profilesCopy);
}

const byCountry = (
  profiles: TypeProfiles,
  setProfiles: React.Dispatch<React.SetStateAction<TypeProfiles>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const profilesCopy = [...profiles];
  profilesCopy.sort((profileA, profileB) => {

    if (sortBy.sortBy !== "country") {
      setSortBy({ sortBy: "country", reverse: false })
      
      if (profileA.country > profileB.country) {
        return 1;
      }
      if (profileA.country < profileB.country) {
        return -1;
      }
      return 0;
    }

    if (sortBy.reverse === false) {
      setSortBy({ ...sortBy, reverse: true })
      
      if (profileA.country < profileB.country) {
        return 1;
      }
      if (profileA.country > profileB.country) {
        return -1;
      }
      return 0;
    }

    setSortBy({...sortBy, reverse: false})
    if (profileA.country > profileB.country) {
        return 1;
      }
      if (profileA.country < profileB.country) {
        return -1;
      }
      return 0;
  });

  setProfiles(profilesCopy);
}

const byMarketplace = (
  profiles: TypeProfiles,
  setProfiles: React.Dispatch<React.SetStateAction<TypeProfiles>>,
  sortBy: TypeSortBy,
  setSortBy: React.Dispatch<React.SetStateAction<TypeSortBy>>,
  ) => {
  const profilesCopy = [...profiles];
  profilesCopy.sort((profileA, profileB) => {

    if (sortBy.sortBy !== "marketplace") {
      setSortBy({ sortBy: "marketplace", reverse: false })
      
      if (profileA.marketPlace > profileB.marketPlace) {
        return 1;
      }
      if (profileA.marketPlace < profileB.marketPlace) {
        return -1;
      }
      return 0;
    }

    if (sortBy.reverse === false) {
      setSortBy({ ...sortBy, reverse: true })
      
      if (profileA.marketPlace < profileB.marketPlace) {
        return 1;
      }
      if (profileA.marketPlace > profileB.marketPlace) {
        return -1;
      }
      return 0;
    }

    setSortBy({...sortBy, reverse: false})
    if (profileA.marketPlace > profileB.marketPlace) {
        return 1;
      }
      if (profileA.marketPlace < profileB.marketPlace) {
        return -1;
      }
      return 0;
  });

  setProfiles(profilesCopy);
}

export const sortProfiles = {
  byId,
  byCountry,
  byMarketplace
}