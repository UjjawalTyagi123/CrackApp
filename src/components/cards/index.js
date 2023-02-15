import Student from "./card/card";
import { Grid, CircularProgress } from "@material-ui/core";
import { useUserData } from "../Hooks/useUserData";

function Card(props) {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching");
  };
  const onError = (error) => {
    console.log("Perform sideffect on encountring error");
  };

  const { isLoading, data, isFetching } = useUserData(onSuccess, onError);

  let users = data?.data;
  console.log(users);

  if (props.stream !== "ALL") {
    users = users.filter((data) => {
      return props.stream === data.domain;
    });
    if (!users.length) return `no user found with domain ${props.stream}`;
  }

  return (
    <>
      {isLoading && isFetching ? (
        <div style={{ marginLeft: "50%", marginTop: "10px" }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid
          container
          alignItems="stretch"
          spacing={10}
          style={{ marginLeft: "2rem" }}
        >
          {users.map((user) => (
            <Grid key={user.id} item xs={12} sm={6} md={3}>
              <Student user={user} props={props.props} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Card;
