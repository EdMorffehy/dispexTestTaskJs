import { CircularProgress, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";

import Card from "../../../../layouts/Card";
import { useDeleteClientMutation } from "../../../../services";
import Container from "../../../../layouts/Container";

const CardItems = ({ phone, name, email, clientId }) => {
  const [loading, setLoading] = useState(false);

  const [deleteClient, { isLoading }] = useDeleteClientMutation();

  const handleOnDelete = () => {
    deleteClient(clientId);
  };

  useEffect(() => {
    let timeout;
    if (isLoading) {
      setLoading(true);
    }
    if (!isLoading) {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <Card display='flex' flexDirection='column' width={250} height={100} position='relative'>
      {loading ? (
        <Container height='100%' display='flex' alignItems='center' justifyContent='center'>
          <CircularProgress />
        </Container>
      ) : (
        <>
          <Container position='absolute' top='5px' right='5px' cursor='pointer' onClick={handleOnDelete}>
            <DeleteOutlineIcon />
          </Container>
          <Typography>name: {name}</Typography>
          <Typography>email: {email}</Typography>
          <Typography>phone: {phone}</Typography>
        </>
      )}
    </Card>
  );
};

export default CardItems;
