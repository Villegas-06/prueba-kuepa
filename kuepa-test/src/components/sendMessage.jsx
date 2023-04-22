import axios from "axios";
import { useState } from "react";

function SendMessage() {
  
  const [text, setText] = useState("");

    
  const handleSubmit = (event) => {
    event.preventDefault();

      let username = document.querySelector(".info .userName").textContent.split(",")[1].replace("!","").trim();
      let rol = document.querySelector(".info .rol").textContent.split(":")[1].trim();    

    axios
      .post("http://localhost:3000/messages", {
        username: username,
        rol: rol,
        text,
        datePosted: new Date(),
        
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      if(text != ""){
        // Send to DB
      }else{
        alert("Ingresa texto")
      }

      

  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" id="buttonSendMessage">Send</button>
      </form>
    </>
  );
}

export default SendMessage;
