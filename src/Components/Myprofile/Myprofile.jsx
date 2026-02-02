import { useState,useEffect } from "react";
import Myavatar from "../../assets/Myavatar.png";
import { FiHeart } from "react-icons/fi";
import "./Myprofile.css";

function Myprofile() {
  const initialQuotes = [
    {
      id: 1,
      quote:
        "You do not need to become louder to be stronger; consistency will speak for you when confidence stays quiet.",
      likes: 0,
    },
    {
      id: 2,
      quote:
        "Progress is not the absence of fear, but the decision to move forward even when fear refuses to leave.",
      likes: 0,
    },
    {
      id: 3,
      quote:
        "Some days you grow by conquering the world; other days you grow by simply not giving up on yourself.",
      likes: 0,
    },
    {
      id: 4,
      quote:
        "Your pace does not diminish your purpose. What matters is that you are still choosing to walk.",
      likes: 0,
    },
    {
      id: 5,
      quote:
        "Discipline is self-respect practiced daily, especially on the days motivation does not show up.",
      likes: 0,
    },
    {
      id: 6,
      quote:
        "You are allowed to rebuild yourself as many times as necessary—growth is not a one-time decision.",
      likes: 0,
    },
  ];
  const [quotes, setQuotes] = useState(() => {
  const saved = localStorage.getItem("quotes");
  return saved ? JSON.parse(saved) : initialQuotes;
});
useEffect(() => {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}, [quotes]);

 const handleLike = (id) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((q) =>
        q.id === id ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };
  const totalLikes = quotes.reduce((sum, q) => sum + q.likes, 0);
  return (
    <div>
      <div className="myprofile">
        <div>
          <img src={Myavatar} alt="me" />
        </div>
        <div>
          <h3>Sumandeep Kaur Grewal</h3>
          <p>Words for the days you can’t explain.</p>
        </div>
        <div className="stats">
          <div>Total Quotes: 5 </div>
          <br />
          <span>❤️ {totalLikes}</span>
        </div>
      </div>

      <div className="quote-container">
       {quotes.map((q) => (
          <div key={q.id} className="quote-card">
            <p>{q.quote}</p>
     <button
        className="like"
        onClick={() => handleLike(q.id)} 
      >
        <FiHeart /> {q.likes}
      </button>
  </div>
        ) )}
      
      </div>
    </div>
  );
}

export default Myprofile;
