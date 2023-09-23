import React, { useState } from "react";
import Greeting from "./greating";
import UniversityCard from "./universityCard";
import Note from "./Note";
import CreateArea from "./CreatArea";
import AlbumEntry from "./album";

function Home() {
  const currentDate = new Date().toLocaleDateString();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>

<div className="university-section">
  <div className="f-card">
    <UniversityCard 
      name="Urmia University"
      program="bachelor of electronics engineering"
      website="https://en.urmia.ac.ir/"
      imageSrc="data:image/jpeg;base64,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"
    />
  </div>
  <div className="f-card">
    <UniversityCard 
      name="Sapienza University"
      program="M.sc of computer science"
      website="https://www.uniroma1.it/"
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUgHVWt5z5u2hRVdTu1cZjDEPf10IkQk2qg&usqp=CAU"
    />
  </div>
</div>

<div className="album-header">
    <h1>My Album</h1>
  </div>

<div className="album-section">

  <AlbumEntry
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8lLDARkBfj7rLwZ5_IUDtUr_T9vb-PFA1g&usqp=CAU"
    year="1991"
    eventName="my city Urmia"
    description="It is a beautiful city that I always miss "
  />
  <AlbumEntry
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbWRLk-O-5LXkgkNympOoIgMsKubGEUuRbQ&usqp=CAU"
    year="2016"
    eventName="Rome"
    description="I moved to rome years ago and I think I am so lucky to live here"
  />
  <AlbumEntry
    image="data:image/jpeg;base64,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"
    year="2023"
    eventName="My Job "
    description="I am so excited to start my dream job as soon as possible. "
  />
</div>


<div className="my-component">
      <div id="start">
        <button onClick={() => handleButtonClick(1)}>Skills and Expertise</button>
        <button onClick={() => handleButtonClick(2)}>Comprehensive Knowledge</button>
        <button onClick={() => handleButtonClick(3)}>Problem-Solving</button>
      </div>


        <div className="cover-letter1">
          {activeButton === 1 && (
            <p>
              As a front-end developer, I possess a solid command of a wide range
              of technologies, including Python, JavaScript, TypeScript,
              React.js, React Router, HTML5, CSS3, Flex, Grid, and Bootstrap. This
              proficiency has enabled me to craft dynamic and visually captivating
              user interfaces, setting a strong foundation for user-centric web experiences.
            </p>
          )}
        </div>

        <div className="cover-letter2">
          
          {activeButton === 2 && (
            <p>
              Embarking on the journey into backend development has been an exhilarating
              experience for me. The intricacies of server-side logic and data management
              have captured my interest in profound ways. I find immense satisfaction in
              architecting robust databases, optimizing server performance, and ensuring
              seamless data flow. This journey is more than a pursuit of skill; it's a
              genuine passion. The thrill of crafting scalable and efficient systems that
              power dynamic applications fuels my dedication to mastering the backend realm.
              I eagerly anticipate delving deeper, embracing every challenge, and continually
              expanding my proficiency in this dynamic field.
            </p>
          )}
        </div>

        <div className="cover-letter3">
          
          {activeButton === 3 && (
            <p>
              With a practical and analytical mindset, coupled with robust problem-solving
              skills, I approach challenges with determination and creativity. Thriving in
              dynamic environments, I am recognized for my adaptability and accountability,
              qualities that make me an asset to any collaborative project. I am an eager learner,
              ready to make meaningful contributions to team activities from day one. The prospect
              of working on real projects, from inception to completion, resonates with me deeply.
              This hands-on experience allows me to apply theoretical knowledge in practical settings
              and collaborate with highly skilled engineers to craft innovative solutions. I hold a
              strong belief in the collective intelligence that emerges from effective teamwork.
              Moreover, having a designated mentor to guide me not only provides essential support
              but also aids in navigating and excelling in dynamic and challenging environments.
              I am now poised to embark on the next chapter of my career, eager to make a positive
              impact and contribute to cutting-edge projects. Actively seeking opportunities to apply
              my skills, I am enthusiastic about collaborating with like-minded professionals who share
              a fervor for technology and innovation.
            </p>
          )}
        </div>
        </div>
  


      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

<footer>
  <div className="footer-main">
    <div id="f-header">
      <h2>Hamed Alizde M.sc of computer science from Sapienza University</h2>
    </div>
    <div id="f-body">
      <h3>Front-end Developer</h3>
    </div>
    <div id="f-footer">
      <Greeting />
      <p>{currentDate}</p>
    </div>
    <div className="contact-info">
      <p>Email: Hamedalizdeh024@gmail.com</p>
      <p>Phone: 3921576993</p>
      <p>Address: Via Edoardo Donofrio 288, 00155, Rome, Italy</p>
    </div>
  </div>
</footer>

    </>
  );
}

export default Home;
