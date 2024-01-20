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

export const sortProfiles = {
  byId,
}