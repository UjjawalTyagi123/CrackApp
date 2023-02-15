import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "../cards/index";
import Form from "react-bootstrap/Form";
import { Grid } from "@material-ui/core";
import { useAddUsersData, useUserData } from "../Hooks/useUserData";

export const Home = (props) => {
  const [stream, setStream] = useState("ALL");

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 style={{ float: "right" }}>
          <span style={{ color: "orange" }}>>>></span>{" "}
          <span>Go to login Page</span>
        </h3>
      </Link>

      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setStream(e.target.value)}
      >
        <h1> Choose Peoples with your interest</h1>
        <option key="ALL" value="ALL">
          ALL
        </option>
        <option key="UPSC" value="UPSC">
          UPSC
        </option>
        <option key="IIT" value="IIT">
          IIT
        </option>
        <option key="NEET" value="NEET">
          NEET
        </option>
        <option key="UPPCS" value="UPPCS">
          UPPCS
        </option>
        <option key="NDA" value="NDA">
          NDA
        </option>
        <option key="CDS" value="CDS">
          CDS
        </option>
      </Form.Select>
      <Grid item xs={12} sm={8} md={10}>
        <Card stream={stream} props={props.setId} />
      </Grid>
    </>
  );
};
