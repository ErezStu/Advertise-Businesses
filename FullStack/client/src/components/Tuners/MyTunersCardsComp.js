import { useState, useEffect } from "react";
import { getMeCards, deleteCard } from "../../helpers/FetchHelper";
import TunerCardComp from "./TunerCardComp";

function MyTunersCardsComp({ handleClick }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token"))
      getMeCards(localStorage.getItem("token"), (data) => {
        setCards(data);
        console.log(data);
      });
  }, []);

  console.log(cards);

  return cards.map((c) => (
    <TunerCardComp
      handleClick={(id) => {
        deleteCard(id, localStorage.getItem("token"), (card) => {
          setCards(cards.filter((x) => x._id != id));
        });
      }}
      card={c}
    ></TunerCardComp>
  ));
}

export default MyTunersCardsComp;
