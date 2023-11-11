import { useState } from "react";

import AppListsContainer from "../containers/ListsContainer";
import UsersListsContainer from "../containers/UsersListsContainer";
import Container from "../layouts/Container";

const App = () => {
  const [selected, setSelected] = useState("");
  return (
    <Container display='flex' alignItems='flex-start' gap={20}>
      <AppListsContainer selected={selected} setSelected={setSelected} />
      <UsersListsContainer selected={selected} />
    </Container>
  );
};

export default App;
