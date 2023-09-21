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

<div className="home-page">
        <UniversityCard 
          name="Urmia University"
          program="bachelor of electronics engineering"
          website="https://en.urmia.ac.ir/"
          imageSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
        />
        <UniversityCard 
          name="Sapienza University"
          program="M.sc of computer science"
          website="https://www.uniroma1.it/"
          imageSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhYZGBgaGBgaHBocHBwYGhwaGBgZGhgYGhgcIS4lHB4rHxgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISExNDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAYHBQj/xAA+EAACAQIEAwYDBAkEAgMAAAABAgADEQQSITEFQVEGEyJhcYEykaEHQlKxFCNicoKSwdHwM6Ky4RU0FkRz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAiEQEBAQEBAQEBAAICAwAAAAAAARECIRIxUYGRQaEDYXH/2gAMAwEAAhEDEQA/AOqUKlpbFdTKFpNZ265lcp1YJ3lmuJa7"
        />
<div/>


<div className="album-page">
      <h1>My Album</h1>
      <AlbumEntry
        image="path_to_image1.jpg"
        year="2020"
        eventName="Event 1"
        description="Description for Event 1."
      />
      <AlbumEntry
        image="path_to_image2.jpg"
        year="2021"
        eventName="Event 2"
        description="Description for Event 2."
      />
      <AlbumEntry
        image="path_to_image3.jpg"
        year="2021"
        eventName="Event 3"
        description="Description for Event 3."
      />
      
    </div>


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
        </div>
      </footer>
    </>
  );
}

export default Home;
