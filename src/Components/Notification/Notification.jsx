import './Notification.css'
import { FiHeart, FiMessageSquare, FiUserPlus } from "react-icons/fi";
function Notification() {
    const notifications = [
    {
      id: 1,
      type: "like",
      text: "Aarav liked your quote",
      time: "2 minutes ago",
      icon: <FiHeart />,
    },
    {
      id: 2,
      type: "comment",
      text: "Ananya commented on your quote",
      time: "10 minutes ago",
      icon: <FiMessageSquare />,
    },
    {
      id: 3,
      type: "follow",
      text: "Rohan started following you",
      time: "1 hour ago",
      icon: <FiUserPlus />,
    },
    {
  id: 4,
  type: "like",
  text: "Priya liked your quote",
  time: "2 hours ago",
  icon: <FiHeart />,
},
{
  id: 5,
  type: "comment",
  text: "Kunal commented on your quote",
  time: "3 hours ago",
  icon: <FiMessageSquare />,
},
{
  id: 6,
  type: "follow",
  text: "Neha started following you",
  time: "5 hours ago",
  icon: <FiUserPlus />,
},
{
  id: 7,
  type: "like",
  text: "Aditya liked your quote",
  time: "Yesterday",
  icon: <FiHeart />,
},
{
  id: 8,
  type: "comment",
  text: "Ishita replied to your comment",
  time: "Yesterday",
  icon: <FiMessageSquare />,
},
{
  id: 9,
  type: "follow",
  text: "Vikram started following you",
  time: "2 days ago",
  icon: <FiUserPlus />,
},
{
  id: 10,
  type: "like",
  text: "Rohan liked your quote",
  time: "2 days ago",
  icon: <FiHeart />,
},
{
  id: 11,
  type: "comment",
  text: "Ananya commented on your quote",
  time: "3 days ago",
  icon: <FiMessageSquare />,
},
{
  id: 12,
  type: "follow",
  text: "Eva started following you",
  time: "3 days ago",
  icon: <FiUserPlus />,
},
{
  id: 13,
  type: "like",
  text: "Aarushi liked your quote",
  time: "4 days ago",
  icon: <FiHeart />,
},
{
  id: 14,
  type: "comment",
  text: "Sahil commented on your quote",
  time: "5 days ago",
  icon: <FiMessageSquare />,
},
{
  id: 15,
  type: "follow",
  text: "Rahul started following you",
  time: "1 week ago",
  icon: <FiUserPlus />,
},

  ];
  
  return (
    <div>
      <div className="notifications">
      <h2>Notifications</h2>

      {notifications.map((n) => (
        <div key={n.id} className="notification-card">
          <span className={`icon ${n.type}`}>{n.icon}</span>
          <div className="notification-text">
            <p>{n.text}</p>
            <small>{n.time}</small>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Notification;
