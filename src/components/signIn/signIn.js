import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signIn.css";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";
import groupStudy from "../assets/groupSTudy.jpg";
import { useAddUsersData, useUserData } from "../Hooks/useUserData";

function SignIn() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [UserData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    facebook: "",
    instagram: "",
    domain: "",
    gender: "",
    about: "",
    file: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { mutate: addUser, isLoading: loading } = useAddUsersData();
  const { isLoading, data, isFetching } = useUserData();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const HandleExplore = () => {
    navigate("/home");
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      UserData.username === "" ||
      UserData.email === "" ||
      UserData.password === "" ||
      UserData.ConfirmPassword === "" ||
      UserData.gender === "" ||
      (UserData.facebook === "" && UserData.instagram === "")
    ) {
      alert("All the fields are mandatory!");
    }
    if (UserData.password !== UserData.ConfirmPassword) {
      alert("Password and confirm Password are not same!");
    } else {
      let user = {
        username: UserData.username,
        email: UserData.email,
        password: UserData.password,
        ConfirmPassword: UserData.ConfirmPassword,
        facebook: UserData.facebook,
        instagram: UserData.instagram,
        domain: UserData.domain,
        gender: UserData.gender,
        about: UserData.about,
        file: UserData.file,
      };

      addUser(user);
      navigate("/home");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = data.data;

    let user1 = users.filter((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });

    if (user1.length > 0) {
      navigate("/home");
    } else {
      alert("No user found sign up first!");
    }
  };

  return (
    <>
      <div className="explore-btn">
        <h3 onClick={HandleExplore}>
          <span style={{ color: "orange" }}>>>></span>Explore community
        </h3>
      </div>
      <h1 className="title">
        <span style={{ color: "orange" }}>crack</span>
        <span style={{ color: "blue" }}>Together</span>
      </h1>
      <img className="bg-img" src={groupStudy} />
      <div className="form-main">
        {toggle ? (
          <h1 style={{ marginTop: "5%" }}>Logging an Account</h1>
        ) : (
          <h1>Creating an Account </h1>
        )}

        {toggle ? (
          <Form return="false">
            <div className="login-part">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={loginData.email}
                  name="email"
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  name="password"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </Button>
            </div>

            <Form.Text
              className="text-muted"
              style={{
                paddingLeft: "5px",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={handleToggle}
            >
              Don't have an account?first create it.
            </Form.Text>
            <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>
              Hey Aspirant! This is a amazing platform where you can find people
              with your interest and make them your academic partners via their
              social media platforms.So what are you waiting for just register
              and join the community of your domain...
            </p>
          </Form>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                className="testing"
                type="text"
                placeholder="Enter name...*"
                value={UserData.username}
                name="name"
                onChange={(e) =>
                  setUserData({ ...UserData, username: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email...*"
                value={UserData.email}
                name="email"
                onChange={(e) =>
                  setUserData({ ...UserData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                placeholder=" Set password...*"
                value={UserData.password}
                onChange={(e) =>
                  setUserData({ ...UserData, password: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label> Confirm Password</Form.Label>

              <Form.Control
                type="password"
                placeholder=" Confirm password...*"
                value={UserData.ConfirmPassword}
                onChange={(e) =>
                  setUserData({ ...UserData, ConfirmPassword: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Facebook url</Form.Label>
              <Form.Control
                type="email"
                placeholder="https://www.facebook.com/"
                value={UserData.facebook}
                name="facebook"
                onChange={(e) =>
                  setUserData({ ...UserData, facebook: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Instagram Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="Account Name"
                value={UserData.instagram}
                name="insatgram"
                onChange={(e) =>
                  setUserData({ ...UserData, instagram: e.target.value })
                }
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              value={UserData.domain}
              onChange={(e) =>
                setUserData({ ...UserData, domain: e.target.value })
              }
            >
              <option>Choose your Domain...*</option>
              <option value="UPSC">UPSC</option>
              <option value="IIT">IIT</option>
              <option value="NEET">NEET</option>
              <option value="UPPCS">UPPCS</option>
              <option value="NDA">NDA</option>
              <option value="CDS">CDS</option>
            </Form.Select>
            <br />

            <Form.Select
              aria-label="Default select example"
              value={UserData.gender}
              onChange={(e) =>
                setUserData({ ...UserData, gender: e.target.value })
              }
            >
              <option>Gender...*</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <br />

            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setUserData({ ...UserData, file: base64 })
                }
              />
            </div>
            <br />

            <Form.Group className="mb-3" controlId="about">
              <Form.Label>About</Form.Label>
              <Form.Control
                type="text"
                placeholder="write regarding your preparation in about 10 words..."
                value={UserData.about}
                onChange={(e) =>
                  setUserData({ ...UserData, about: e.target.value })
                }
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
              onClick={HandleSubmit}
            >
              create account
            </Button>
            <Form.Text
              className="text-muted"
              style={{
                paddingLeft: "5px",
                cursor: "pointer",
                fontSize: "18px",
                marginTop: "10px",
              }}
              onClick={handleToggle}
            >
              Already have an account? Login.
            </Form.Text>
          </Form>
        )}
      </div>
    </>
  );
}

export default SignIn;
