import "./App.scss";
import { Container } from "../Container/Container";
import { Accounts } from "../Accounts/Accounts";
import { Profiles } from "../Profiles/Profiles";
import { useState } from "react";
import { Campaigns } from "../Campaigns/Campaigns";

function App() {
  const [chosenAccount, setChosenAccount] = useState<number>(0);
  const [chosenProfile, setChosenProfile] = useState<number>(0);
  const [perPage, setPerPage] = useState(5);

  return (
    <Container>
      {!chosenAccount && (
        <Accounts
          setChosenAccount={setChosenAccount}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      )}
      {chosenAccount !== 0 && !chosenProfile && (
        <Profiles
          id={chosenAccount}
          setChosenProfile={setChosenProfile}
          setChosenAccount={setChosenAccount}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      )}
      {chosenProfile !== 0 && (
        <Campaigns
          accId={chosenAccount}
          profileId={chosenProfile}
          setChosenProfile={setChosenProfile}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      )}
    </Container>
  );
}

export default App;
