import SignIn from "./components/signIn/signIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/home";
import { useState } from "react";
import { Routes, route, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import Detail from "./components/cardDetails/details";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function App() {
  const [Id, setId] = useState();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/detail/:id" element={<Detail id={Id} />} />
            <Route path="/home" element={<Home setId={setId} />} />
            <Route exact path="/" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
