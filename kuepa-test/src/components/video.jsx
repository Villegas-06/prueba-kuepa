import "../styles/video.css";
import SendMessage from "./sendMessage";
import { useEffect, useState } from "react";

function VideoClass() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3000/messages") // Realiza la petición GET al endpoint del servidor Express
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((err) => console.error(err));
    }, 5000); // Realiza la petición cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="video">
              <iframe
                width="800"
                height="500"
                src="https://www.youtube.com/embed/01o0p9bv1hA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-3">
            <div className="container chat">
              <p>Chat</p>
              <div className="container-chat">
                <ul>
                  {messages.map((msg) => {
                    return (
                      <>
                        <div className={msg.rol.toLowerCase() + " mensaje"}>
                          <ol key={msg._id}>
                            <p>{msg.date.split("T")[0].split("-").reverse().join("/")}</p>
                            <p>
                              {msg.username}: {msg.message}
                            </p>
                          </ol>
                        </div>
                      </>
                    );
                  })}
                </ul>
              </div>
              <SendMessage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoClass;
