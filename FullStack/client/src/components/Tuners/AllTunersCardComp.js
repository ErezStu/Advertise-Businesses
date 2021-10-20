import { useState, useEffect } from "react";
import { getAllCards } from "../../helpers/FetchHelper";
import TunerCardComp from "./TunerCardComp";
function AllTunersCardComp({ handleClick }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token"))
      getAllCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  return cards.map((c) => (
    <TunerCardComp
      handleClick={(id) => {
        setCards(cards.filter((x) => x._id != id));
      }}
      card={c}
    ></TunerCardComp>
  ));
}
export default AllTunersCardComp;
