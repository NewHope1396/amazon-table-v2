import { TypeAccounts } from "../types/accountsTypes";

export const filterAccounts = (value: string, accs: TypeAccounts) => {
  const filteredAccs = accs.filter((acc => {
    // console.log(value)
    
    if (!value) {
      return accs;
    }

    return (
      acc.accountId.toString().toLowerCase().includes(value) ||
      acc.email.toString().toLowerCase().includes(value) ||
      acc.authToken.toString().toLowerCase().includes(value) ||
      acc.creationDate.toString().toLowerCase().includes(value)
    );
  }))

  return filteredAccs;
}

  