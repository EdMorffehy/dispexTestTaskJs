import { skipToken } from "@reduxjs/toolkit/query";
import { CircularProgress, Typography } from "@mui/material";

import { useGetClientsByAddressQuery } from "../../services";
import Container from "../../layouts/Container";
import CardItems from "./components/CardItems";
import AddClient from "./components/AddClient";

const UsersListsContainer = ({ selected }) => {
  const { data, isLoading } = useGetClientsByAddressQuery(selected || skipToken);

  if (!selected) return null;

  if (isLoading) {
    return (
      <Container flex='1 1 80%' height='100vh' display='flex' alignItems='center' justifyContent='center'>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container flex='1 1 80%' display='flex' alignItems='flex-start' flexDirection='column' gap={2}>
      <AddClient addressId={selected} />
      <Container
        width='100%'
        display='flex'
        alignItems='flex-start'
        justifyContent='flex-start'
        flexWrap='wrap'
        gap={1}
        height='100vh'
        overflow='auto'
      >
        {data ? (
          data.map(({ id, name, email, phone, bindId }) => (
            <CardItems key={id} clientId={bindId} phone={phone} email={email} name={name} />
          ))
        ) : (
          <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>No Clients</Typography>
        )}
      </Container>
    </Container>
  );
};

export default UsersListsContainer;
