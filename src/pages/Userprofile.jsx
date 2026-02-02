import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/avatar5.jpg";
import avatar6 from "../assets/avatar6.jpg";
import avatar7 from "../assets/avatar7.jpg";
import avatar8 from "../assets/avatar8.jpg";
import avatar9 from "../assets/avatar9.jpg";
import avatar10 from "../assets/avatar10.jpg";
import avatar11 from "../assets/avatar11.png";
import avatar12 from "../assets/avatar12.png";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "../Components/Myprofile/Myprofile.css";

function UserProfile() {
  const { id } = useParams();

  const users = [
    {
      id: 1,
      name: "Anayana Verma",
      bio: "Turning late-night thoughts into words.",
      avatar: avatar1,
    },
    {
      id: 2,
      name: "Aarav Sharma",
      bio: "Soft words, strong feelings.",
      avatar: avatar2,
    },
    {
      id: 3,
      name: "Priya Nair",
      bio: "Observing life, one quote at a time.",
      avatar: avatar3,
    },
    {
      id: 4,
      name: "Rohan Mehta",
      bio: "Minimal words. Maximum meaning.",
      avatar: avatar4,
    },
    {
      id: 5,
      name: "Sona Sharma",
      bio: "Emotions, honesty, and a little hope.",
      avatar: avatar5,
    },
    {
      id: 6,
      name: "Neha Gupta",
      bio: "Truth sounds better when written simply.",
      avatar: avatar6,
    },
    {
      id: 7,
      name: "Ishita Kapoor",
      bio: "Writing what silence feels like.",
      avatar: avatar7,
    },
    {
      id: 8,
      name: "Aditya Malhotra",
      bio: "Thoughts inspired by everyday chaos.",
      avatar: avatar8,
    },
    {
      id: 9,
      name: "Kunal Singh",
      bio: "Feelings you didn’t know how to say.",
      avatar: avatar9,
    },
    {
      id: 10,
      name: "Vikram Iyer",
      bio: "Short quotes for long thoughts.",
      avatar: avatar10,
    },
    {
      id: 11,
      name: "Dhruv Sharma",
      bio: "Finding meaning in everyday moments.",
      avatar: avatar11,
    },
    {
      id: 12,
      name: "Virat Kohli",
      bio: "Turning feelings into sentences.",
      avatar: avatar12,
    },
  ];

  const user = users.find((u) => u.id === Number(id));
  if (!user) return <h2>User not found</h2>;

  const userQuotes = {
    1: [
      { id: 1, quote: "Turning thoughts into action.", likes: 0 },
      { id: 2, quote: "Consistency is the key to growth.", likes: 0 },
      { id: 3, quote: "Soft words, strong impact.", likes: 0 },
      { id: 4, quote: "Dreams demand hustle.", likes: 0 },
      { id: 5, quote: "Find beauty in the little things.", likes: 0 },
      { id: 6, quote: "Patience always pays off.", likes: 0 },
    ],

    2: [
      { id: 1, quote: "Words are bridges to hearts.", likes: 0 },
      { id: 2, quote: "Courage starts with one small step.", likes: 0 },
      { id: 3, quote: "Growth comes from discomfort.", likes: 0 },
      { id: 4, quote: "Smile even when it’s hard.", likes: 0 },
      { id: 5, quote: "Silence often speaks loudest.", likes: 0 },
      { id: 6, quote: "Kindness is always fashionable.", likes: 0 },
    ],

    3: [
      { id: 1, quote: "Observe more, judge less.", likes: 0 },
      { id: 2, quote: "Small thoughts can inspire big actions.", likes: 0 },
      { id: 3, quote: "Life is a collection of tiny moments.", likes: 0 },
      { id: 4, quote: "Curiosity fuels learning.", likes: 0 },
      { id: 5, quote: "Writing is my meditation.", likes: 0 },
      { id: 6, quote: "Patience is power.", likes: 0 },
    ],

    4: [
      { id: 1, quote: "Minimal words, maximum meaning.", likes: 0 },
      { id: 2, quote: "Focus on progress, not perfection.", likes: 0 },
      { id: 3, quote: "Strength grows in quiet moments.", likes: 0 },
      { id: 4, quote: "Actions speak louder than words.", likes: 0 },
      { id: 5, quote: "Learn from every experience.", likes: 0 },
      { id: 6, quote: "Discipline beats inspiration.", likes: 0 },
    ],

    5: [
      { id: 1, quote: "Emotions are stories waiting to be told.", likes: 0 },
      { id: 2, quote: "Hope is a quiet kind of power.", likes: 0 },
      { id: 3, quote: "Share honestly, write freely.", likes: 0 },
      { id: 4, quote: "Creativity thrives in freedom.", likes: 0 },
      { id: 5, quote: "Self-expression is essential.", likes: 0 },
      { id: 6, quote: "Passion fuels purpose.", likes: 0 },
    ],

    6: [
      { id: 1, quote: "Truth always resonates.", likes: 0 },
      { id: 2, quote: "Speak what you mean.", likes: 0 },
      { id: 3, quote: "Clarity brings calm.", likes: 0 },
      { id: 4, quote: "Honesty is magnetic.", likes: 0 },
      { id: 5, quote: "Learn, unlearn, relearn.", likes: 0 },
      { id: 6, quote: "Simplicity is beauty.", likes: 0 },
    ],

    7: [
      { id: 1, quote: "Writing captures the invisible.", likes: 0 },
      { id: 2, quote: "Let silence inspire your words.", likes: 0 },
      { id: 3, quote: "Emotions have a language of their own.", likes: 0 },
      { id: 4, quote: "Listening teaches more than speaking.", likes: 0 },
      { id: 5, quote: "Reflection fuels growth.", likes: 0 },
      { id: 6, quote: "Words are my companions.", likes: 0 },
    ],

    8: [
      { id: 1, quote: "Chaos is a canvas for creativity.", likes: 0 },
      { id: 2, quote: "Find patterns in the everyday.", likes: 0 },
      { id: 3, quote: "Observation sparks inspiration.", likes: 0 },
      { id: 4, quote: "Thoughts become ideas.", likes: 0 },
      { id: 5, quote: "Every moment teaches something.", likes: 0 },
      { id: 6, quote: "Curiosity keeps me alive.", likes: 0 },
    ],

    9: [
      { id: 1, quote: "Feelings deserve expression.", likes: 0 },
      { id: 2, quote: "Vulnerability is strength.", likes: 0 },
      { id: 3, quote: "Honesty is the bravest choice.", likes: 0 },
      { id: 4, quote: "Heart speaks what words cannot.", likes: 0 },
      { id: 5, quote: "Understanding begins with listening.", likes: 0 },
      { id: 6, quote: "Empathy changes perspectives.", likes: 0 },
    ],

    10: [
      { id: 1, quote: "Short words, long impact.", likes: 0 },
      { id: 2, quote: "Brevity reveals clarity.", likes: 0 },
      { id: 3, quote: "Simplicity is profound.", likes: 0 },
      { id: 4, quote: "Actions echo louder than speech.", likes: 0 },
      { id: 5, quote: "Small choices shape big lives.", likes: 0 },
      { id: 6, quote: "Focus fuels results.", likes: 0 },
    ],

    11: [
      { id: 1, quote: "Every day brings a lesson.", likes: 0 },
      { id: 2, quote: "Find meaning in little moments.", likes: 0 },
      { id: 3, quote: "Growth is a daily practice.", likes: 0 },
      { id: 4, quote: "Self-reflection sparks change.", likes: 0 },
      { id: 5, quote: "Learning never stops.", likes: 0 },
      { id: 6, quote: "Life is made of stories.", likes: 0 },
    ],

    12: [
      { id: 1, quote: "Feelings turned into words.", likes: 0 },
      { id: 2, quote: "Express yourself freely.", likes: 0 },
      { id: 3, quote: "Passion ignites purpose.", likes: 0 },
      { id: 4, quote: "Courage builds character.", likes: 0 },
      { id: 5, quote: "Moments define memories.", likes: 0 },
      { id: 6, quote: "Reflection brings insight.", likes: 0 },
    ],
  };

  const [quotes, setQuotes] = useState(() => {
    const saved = localStorage.getItem(`quotes_user_${user.id}`);
    return saved ? JSON.parse(saved) : userQuotes[user.id];
  });

  useEffect(() => {
    localStorage.setItem(`quotes_user_${user.id}`, JSON.stringify(quotes));
  }, [quotes, user.id]);


  const handleLike = (qid) => {
    setQuotes((prev) =>
      prev.map((q) => (q.id === qid ? { ...q, likes: q.likes + 1 } : q))
    );
  };

const totalLikes = quotes.reduce((sum, q) => sum + q.likes, 0); 


  return (
    <div>
      <Navbar/>
      <div className="myprofile">
        <div> 
          <img src={user.avatar} alt={user.name} height="170px" width="170px" />
        </div>

        <div>
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
        </div>

        <div className="stats">
          <div>Total Quotes: {quotes.length}</div>
          <span>❤️ {totalLikes}</span>
        </div>
      </div>

      <div className="quote-container">
        {quotes.map((q) => (
          <div key={q.id} className="quote-card">
            <p>{q.quote}</p>
            <button className="like" onClick={() => handleLike(q.id)}>
              <FiHeart /> {q.likes}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
