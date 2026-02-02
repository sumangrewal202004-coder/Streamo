import "./Message.css";

function Messages() {
  const messages = [
    {
      id: 1,
      name: "Aarav Sharma",
      text: "Your last quote really hit hard.",
      time: "2 min ago",
    },
    {
      id: 2,
      name: "Ananya Verma",
      text: "Loved how simply you expressed that thought.",
      time: "15 min ago",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      text: "Can I repost your quote on my page?",
      time: "1 hour ago",
    },
    {
      id: 4,
      name: "Priya Nair",
      text: "Your words feel very calming.",
      time: "Yesterday",
    },
    {
      id: 5,
      name: "Kunal Singh",
      text: "Consistency line was powerful.",
      time: "2 days ago",
    },
  ];

  return (
    <div className="messages">
      <h2>Messages</h2>

      {messages.map((msg) => (
        <div key={msg.id} className="message-card">
          <div className="message-header">
            <h4>{msg.name}</h4>
            <span>{msg.time}</span>
          </div>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Messages;
