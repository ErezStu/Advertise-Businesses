import { useState, useEffect } from "react";
import { getAllCards } from "../../helpers/fetch/FetchHelper";
import TunerCardComp from "./TunerCardComp";

function AllTunersCardComp({ delset }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token"))
      getAllCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  return cards.map((c) => (
    <TunerCardComp
      delset={delset}
      handleClick={(id) => {
        setCards(cards.filter((x) => x._id != id));
      }}
      card={c}
    />
  ));
}
export default AllTunersCardComp;
