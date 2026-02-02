import "./User.css";
import { Link } from "react-router-dom";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.jpg";
import avatar6 from "../../assets/avatar6.jpg";
import avatar7 from "../../assets/avatar7.jpg";
import avatar8 from "../../assets/avatar8.jpg";
import avatar9 from "../../assets/avatar9.jpg";
import avatar10 from "../../assets/avatar10.jpg";
import avatar11 from "../../assets/avatar11.png";
import avatar12 from "../../assets/avatar12.png";
function User() {
  const mockUsers = [
    {
      id: 1,
      avatar: avatar1,
      name: "Anayana Verma",
      bio: "Turning late-night thoughts into words.",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Aarav Sharma",
      bio: "Soft words, strong feelings.",
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Priya Nair",
      bio: "Observing life, one quote at a time.",
    },
    {
      id: 4,
      avatar: avatar4,
      name: "Rohan Mehta",
      bio: "Minimal words. Maximum meaning.",
    },
    {
      id: 5,
      avatar: avatar5,
      name: "Sona Sharma",
      bio: "Emotions, honesty, and a little hope.",
    },
    {
      id: 6,
      avatar: avatar6,
      name: "Neha Gupta",
      bio: "Truth sounds better when written simply.",
    },
    {
      id: 7,
      avatar: avatar7,
      name: "Ishita Kapoor",
      bio: "Writing what silence feels like.",
    },
    {
      id: 8,
      avatar: avatar8,
      name: "Aditya Malhotra",
      bio: "Thoughts inspired by everyday chaos.",
    },
    {
      id: 9,
      avatar: avatar9,
      name: "Kunal Singh",
      bio: "Feelings you didn’t know how to say.",
    },
    {
      id: 10,
      avatar: avatar10,
      name: "Vikram Iyer",
      bio: "Short quotes for long thoughts.",
    },
    {
      id: 11,
      avatar: avatar11,
      name: "Dhruv Sharma",
      bio: "Finding meaning in everyday moments.",
    },
    {
      id: 12,
      avatar: avatar12,
      name: "Virat Kohli",
      bio: "Turning feelings into sentences.",
    },
  ];
  return (
    <>
      <div className="user">
        {mockUsers.map((user) => (
          <Link key={user.id} to={`/profile/${user.id}`} className="user-link">
            <div className="user-card">
              <img src={user.avatar} height="90" width="90" />
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default User;
