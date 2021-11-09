import { useState, useEffect } from "react";
import { getMeCards, deleteCard } from "../../helpers/fetch/FetchHelper";
import TunerCardComp from "./TunerCardComp";

function MyTunersCardsComp({ handleClick, delset }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token"))
      getMeCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  return cards.map((c) => (
    <TunerCardComp
      delset={delset}
      handleClick={(id) => {
        deleteCard(id, localStorage.getItem("token"), (card) => {
          setCards(cards.filter((x) => x._id != id));
        });
      }}
      card={c}
    />
  ));
}

export default MyTunersCardsComp;
