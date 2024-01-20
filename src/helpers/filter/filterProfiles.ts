import { TypeProfiles } from "../../types/profilesTypes";

export const filterProfiles = (value: string, profiles: TypeProfiles) => {
  const filteredProfiles = profiles.filter((profile => {
    
    if (!value) {
      return profiles;
    }

    return (
      profile.profileID.toString().toLowerCase().includes(value) ||
      profile.country.toString().toLowerCase().includes(value) ||
      profile.marketPlace.toString().toLowerCase().includes(value) 
    );
  }))

  return filteredProfiles;
}

  