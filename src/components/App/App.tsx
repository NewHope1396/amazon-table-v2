import "./App.scss";
import { Container } from "../Container/Container";
import { Accounts } from "../Accounts/Accounts";
import { Profiles } from "../Profiles/Profiles";
import { useState } from "react";
import { Campaigns } from "../Campaigns/Campaigns";

function App() {
  const [chosenAccount, setChosenAccount] = useState<number>(0);
  const [chosenProfile, setChosenProfile] = useState<number>(0);

  return (
    <Container>
      {!chosenAccount && <Accounts setChosenAccount={setChosenAccount} />}
      {chosenAccount !== 0 && (
        <Profiles
          id={chosenAccount}
          setChosenProfile={setChosenProfile}
          setChosenAccount={setChosenAccount}
        />
      )}
      <Campaigns accId={chosenAccount} profileId={chosenProfile} />
    </Container>
  );
}

export default App;
