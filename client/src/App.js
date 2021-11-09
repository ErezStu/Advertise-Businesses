import { ToastContainer } from "react-toastify";
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import { useState, useEffect, createContext } from "react";
import { getMeData } from "./helpers/fetch/FetchHelper";
import Footer from "./components/footer/FooterComp";

export const UserContext = createContext();

function App() {
  const [user, set] = useState({});

  useEffect(() => {
    getMeData(localStorage.getItem("token"), (data) => {
      set(data);
    });
  }, []);

  return (
    <div className="App">
      <>
        {user.biz ? (
          <div className="bg-success text-dark" style={{ fontSize: "1.5rem" }}>
            {"Welcome " + user.name + " - Buisness user"}
          </div>
        ) : user._id ? (
          <div className="bg-warning text-dark" style={{ fontSize: "1.5rem" }}>
            {"Welcome " + user.name}
          </div>
        ) : null}
        <UserContext.Provider value={user}>
          <SinglePageAppComp set={set} user={user} />
        </UserContext.Provider>
        <br />
        <Footer />
        <ToastContainer autoClose={2000} />
      </>
    </div>
  );
}

export default App;
