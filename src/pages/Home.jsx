import React from "react";




function Home() {
    const date = new Date();
    const currentTime = date.getHours();
    const currentDate = date.getFullYear();
let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 17) {
  greeting = "Good Afternoon"
} else if (currentTime < 21) {
    greeting = "Good evening";
  }else {
  greeting = "Good Night";
}

return (
   <>
   <div className="my-studies">
    <div className="card">
      <div className="top">
        <h2 className="name">Urmia University</h2>
        <img className="circle-img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhEREhIRGBISEhISERIRERISGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISGjEhISE0NDE0NDE0NDQxNDE0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDExNDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEEQAAIBAgMFBQUEBwcFAAAAAAECAAMRBBIhBTFBUXEGImGBkRMyobHBI0JScgczNGKy0fAUJHOCkuHxFVOjs8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQABBAMAAgMAAAAAAAAAAQIRAyExQRIiMmGRQnGB/9oADAMBAAIRAxEAPwDXEmokBCLOWNKmskBGUQgEsjqJMRhJARwj2jxR7Rg1o4Ee0eBFFETbfMrGbdo0794sR91VufU6QNex2KSkjVHYKq8d9zwAHEnlOaxXaF00d8hNyKaKXqEa20A0AFrnxmHtXa1SvU9o7KgT9XTPeVP3uTN4/CYT1m1CksWuWYsBmHUG8XFodvS7WUwcr+2vwNlzea5pqYbtFh3sPaBSdLVAUbyJ7p9Z5fQoVHOlwv4stl9Tvl5dkMR3agBPPNY9dIXk3rKVAwuCCDxEczzzZWKxeDZVY5qRIBIOdLbtRvX4Cegq19eBk88izg95EmImRgEo140UlR7x5GSgCjxo8RHiiiEYKKKKBM0QiwYhRCHU1EIBIrJrKhJCSAjCSEqEcCSjCSAlEQjMQASTYDUk7gJMCVdqNai5HBT4QDku0233LGnTzU0QgE7qjsRfTkLW0385w2J2jUzEKb+JJN/LdN/H16bFmLgsxOYjvm34V5cBrv6b8v8AsdIm+SoRvuzKpPRQDp5w5nlUzb4U8NiSx+0NwfS+ot/XKHwwUK9xfS2h1ynMWIPkolgYEN90jl/tLOH2cQb6i+8c5F6sjWdDVU8ZtAhhlUAWUgAWA8APhM87ZrqfeNz925Cj01+M6Cts5SNxmbitk3vYkev0inVzfI10NekcJ2iqX+0YHoMp6zq9gdqQzLTqObEgd6wyjhr6cZ53i8G9M6g25x8KxBzBhcbwTbTdfpHcy94y7ztp7uGinK9ktsPUHsqhuyqpRr3JUAA68Z095HKuErxSGaPeI044kAZIGBJR5EGOIBKKNHgRRRXigGcIVYMQix5FEWFEgohBKhJLHEYSYEsjiSAiAkhGRpyPbXFVChpoCEHvkfebSw6cZ1rmwJnDdp65Y5RxuQvC34j11sIU5O7lNm4OpUa5FlUi+gbMeQM6Shsvr5y3s3CBKarbUak8ydTNFRYTm1q2u3GZmfyzFwIEkaFpccwLGZVrKqNSEA9AS1VaV2eI2fiMIGFiN85raeC9jUVwO4dG8J2LGUsfhw9MqRw08DLxu5rLqYmozuz200wtW7hsh0DanKOeX13T0rC4unVXPTdXXmpvY77HkdZ5dg9mGpTKi+ZD3Dv1/CfLdOs7Dqy03VlZbMNDbKTbUgb76CbascsldZeIGDzR7yPkYl5JTBgxwYcgUSV4MGTj5JIR5CTEZHtFFFAM8QiSAhUEcKirCLILJqJcTUlhAJFRCASyOBFaPHjCntF8tM+JA9Zy2Jw/tHDcL3623DoPqJ022FJp6bww+Nx9ZkuAAoHAEjpcDX0+ENds1WP1EES0kFvM/EvWe4prYbgzceky6mGxraZsoHHMqhvKc0zy7LrhvVKMC1EwGAwmIUDO+fnrmmrUpkUwTvi1g865Z1WhKVVAOMLtSvZbA2vxnI1MDVqNcPr+cxTHJ3dnp0DOL75FmmIuBrrve/Qky3h6jg5XseRH1kaxwedc+lrA1TTLNYEXsw5qd3x/rWb+yGC1Db3aguD+8Lmx8bes5XFVCrC25rg8ju/2m92cqXNtbjgRaVfHLDU41Y6aKRjgyWaYMkDICSEcAiwgg1hBLhVISQkRJCUR4oooBQELTg1hqYlRNGUSYEZRJqJcJNBCBZFBDKJciajlitCWitK4JUxtPNTYcbXHUa/Sc9TGbzsP5zrcs5tqeR2pjTISR0Y3B9JO/wA1p0v1FXae0aeGp3IzHclNRqx+gnKdp9pYqllOakA4TuIWZu+GIs24+6R15zsKlBS1yLnmYHEYXOMoCqPATHOp7dWs8+GJ2exNQvlZy2gbUai4va/9ec6PaFX7OBweAWmO7fXUxse2lvCRq9mmc93E7UFR2OU7uEpEulHOrkNmK2yuze6WBKqRlBItuO/W02qyAkx0oG2jaeIvFjfHk+r07fDnKO0cQqhmFwTYqQb20114eM18NWFQA2tfdx9DLTYO/wB1fQxkweXW1unGLepSxmzzVbHUcyi2tjb10mx2TQ5mbgB53+m6UKyiwU/euPDRSfkDOk2DhhTorzqd/lod3w+cia+vDPqz7ctGSEjJLBmksIJBZMRwJrCCDWFEuIISYkRJCOEUUUUYUVlinK4lilLiaOIRRILCLNJCEWFWDWFWXIinEeNJASwcTFx6H27EjQrTA8bA3+c2hMvaotUU81+pmfUn1adH9K7UwRulSoLS8jSljAWOUcTr0nPY7c0WipYDKOpgtoYdQBzN7iNVK5MlyFNgQCRceUoV61OnTyIMmW7KBcrfjpK+M4PnhiYildjl0sTFhHu2U7xMsUSlQuD32vdz3m139Jo4ZwCDOe54rWa5jSamAJUrOJbxD928yne5k6ncQqoBtfx+II+RM7ELYAcgB6TkMFT9pVReGYE9OPwnYtCMOrfCMdY8UbFISYkRJLHCoiwgkFkxLiakI8YR5RFFHigFBZZoyussUpplFWFhFEgsIs0kTRUEIBIoIVRNYRBY4WEVY4WMuUQsobYp91X/AAm3kf8AgTTywONp5qbj90kdRqPlJ1OZTxeNSsBd0q1XC3LEADieEspKuJwQqGx3Ag24HrOV3Q1VE3s/xFvWY+LoIG9oGNhwFmvOiTZtG18gFuCgW9LTLx1DDrcmnbrTX03SvTTNz7c1jalMsbd3wzD5SnTqLnAFS9zbLxmzicLSfQUz/oyj5Svh9mU1bNkVbaiwmFs5XZOOw7ucljMgvrL+PrA6CZyCTU8t/s1QJqF/wg+p0/nOjMBsqh7OigO8jMera/K0sGTwx1rmo2jx44jRTiSWRkljSKsmJFZMS4VOIhEI8pKeWKC/tYihwakss0pVWWqM1yirSyaSCQiCaxCwghkEEsOglwJKJMCJRJgRpNaK0laK0A5fF0vZ1Ch4G6+KndBK86HaeEFRL7nQEqeY3kGc7RPe1nNvPFdfT3zBTWmbjbtNCo4AmJXxVnsTob+Gknhr8orvVtodRzmZjsVbTcOM0cWw4WPD/mYGLfgfGY3N5afKcK71ST4TV2FgDWqAW7i2aoeFuXn/ADmLRS7HeL7unOeidl6ajDd21y75+d+F/K3rH8ebwz1qzPK60gRCuIMyKyiNo8UUR0oRRICTWOJEWEEGJMS4mpCSXfIiSWUHF/8AVvGKcF/1Hx+MeWHrqy3QlSnLlCXEVaWFQQawqCaxA6Q6QCQ6SoVFEIIMSYMZHijEyDVlHGMlfazstCoyDM4RyqjexCkgTm2CsAynRgCpHEHUTqadTPfSwGnWc/j8L/Zzu+xY9w8KbN9w8lv7vW3K+XUzfLo6Nk7Vj4mm/AmZeIS+8t8Z0FWZ9caE2mFro4c/WNtQbePGZVS5PXnNbGJe8pinbxkXS5nkKglp2fZE2pm+6pmceIGin/SJzuz9nGqczXFMHU/jI3qPDmfLp01F8hBA921gNBbl6RZll5qerZx8Y1KwgTI/2pW428DJXme/LKGjiNFJ5M4k1kAY4MfJUYGTECphBLlTRBI1Wyox/CrH0BMcSrtapkw1Zvw0qzeiMZcS8F9mYpayxTTmm9qpy7h5TSXsOJeWdWVhUEEkPTUndNZEirDrGFK28xifhNJlPKecCQNU/wDEH7TUDjvkykrgB5iCdb8uMjUq3OgFuJO6GRLyliX1KesVUsbKrmoGP3Q2VPygAfO8vVaaspVlDKwIZWAIIOhBB3iZux+4mVtCWNvG50mqYqHHbU2TUoEvSDVaG809Wq0/ycXXw94fvbhmipSqLcG43aHcRvHgZ3tVZyPafY6FWxNN0oVEGao7ELSqAf8Ac+Wbfu37ph1On7y6On1fWmNWwqHhfzjYXZHtDcjJRU95ho1Qj7qfU8Ou6/sHAPWprWq5BTN7LTdX9pYke8vujw97gQJfxj8BYAaADQAcgOEyz0v8tNNdX1lWcqLKoCqosqgWAA3AQDycdkJ056Q1OWUvCtTQ2EsDMvOGalYCGqLYKec0nSnHdF1eewK1Txk1cR6tO3zkKlMqRyMz10J6ObFBkgYFTJ3mGulrPdc1KKphFMArQiGTmirCzN7TNbBYj/Bqj1Qj6zQSZfa17YCuf3Lf6mUfWbZZvHIoopYe1LL1CUVl6jNMpq0k0sLS7t+LazOpLcgc5soLAToxPbPVAff526nhHAte/AGQbWoo4KSfOFrrfujjqT4S6SjhqZZi53cJZPIRfuruEMq2iNC2USjVa5uBrzlrEtfQcYPIF1MKFc07jUkDw3zSw1XOt+I0PXnKK978ojpWyEEC43HpJU0HYAFmICqCSxNgABcknlaeMdrdvvjqlkJGGXMaKfjYWK1GHEneOQ8b37D9I+0ar01wWHBLVxesy/8Ab4IPzcfDrPPcds6phwqOFJyU6mu9Q18wPOw5Q4CGye0VTBOXp96m5D1KRNldSN4P3XH4vI6aTvsLtBMSi1qTZkbdwZTxVhwYX1HzBBnlZpZ6i076ZmW/guvCdp2WwNSlmqE9xgAaY423NrxHDqZl+uypeO7qETWHppvbqo+p9flAo+ndOr2Cndv+95AE9RaWwoC2GgFgOkM5O1IIClzAYvRV5Ay4i/Z2lXHCyeYl68JnkQC6X8LR1TPS8R9JGg3cseMJgDYspgSph0uLcRE+htyGsO9PI9+BlRn77DpIs4nB/wAkWtDI8dUugvzIPQyohIbKfXnyM5etj4/aNc657VpI8xO3b22fV8TRX/yp/KaSNMHt5V/uLD8T0h8S3/zJxrmnrPDzG8UaKboe2JL1CUKcv0JeUVpYBLtfl9ZpKZUwC2W/O5lqlu8zOnM4yyt7h0k77NGdixsPOEq6aDedZKnTsI6cMlMLExju1pWdiYjM7C94AgsfCHFPnJgCACCWFoJgAIarUAgFUnUxKU8RTDm+UX3XtrblPPO2db2lZ0UZkor7Md7QONCQPID/ACzvdu4r2FB2W2e1kHNzoo9SJ5bWBa+9rhjcGz+N/WAZGFKpiVY5hwN76FgVA6XInpeyxmpr46mebVaWff7TvKRuvqPGd5sDEk00J++iMepUGYXtqfyud810ORbgADTj13/KWGXSCopLBE2Qmg0EpbTGnpL6jSUdoagdZOvAnk6JdPGQFTKQeMs0B9nKVWKm0qgzLeYdU2qTYwj3W0yNoi1STvxKcadJboB0mfiiM+n3SAfP+jNLCt3b8Jiq+YVG45j84utOc8DF4q4JzP6QH/uijnVT+BzOkpm4B8Jyv6Qz9hTHOrf0R/5zz+n+4314cBFGvHnYye105oYeZtOa+z0zMB5+k1xGeq2AMlPoAIfDDujpK2Pa1PqQJcpCyDoJ03wyiCrdryTm0kBYSBElUCIvFYCSY2ld6nCBiM0E78om0EEovAIohY6ywwyi8kiWlbFPfSAcj24qk0lA++40vY2VTu8blZxGKIBHunh3u4/mZ13blxeknd3VGsTlN+4BY+s5FwxTXPoeQdf5x8dgz6iEKbBu6c2lQnQ+fWdf2cXuUxyRBz3KJyeJy3bRNUO+k66/0d87Hskt0TwRP4RMNTnUaZ8V1lJdIW0amukmBNKlO2kzsTrNKUlH2ljuN4qIMi/ZiUXE0WXKluUznN9YtCJYN7G0q7X3gwgNjeC2qbgGZ6v1q55XKL2pX/dJ+Extnm9Niecumpag3gjfEf7yjs39Sx/reY9d/wCinb+1/De700nI/pGf7OiObufRQPrOrwp0nG/pGbvUB4Vj8UnBifdtr8uJvFFeKdbF7ZTM39iJclvwi3mZz9Mzr9nUclMDjvb8xm3TndnqhbXPdUc2AmqBYTL2kLvSHNx8DeB21thaCahtxNwpPkLTos54RFjaW00pkIDeo+iganrCozlAWGptec/2Mw4rUzjnLO+IaoUzC3s6auyIoHDRfUk7yZ1oEm9lKeK0t0laitzeWcXqZGilhEA60eiml4zC7Qt7CBou1hKNVuMsVGlWtAOF7ZuxrKe9lCKPdDrqzE6b7+7OcdQGI7guN9nondNrtVWDYpxdBZUGrGmbZRx85iI5IBBbl3XV/wCKXwTPd7KCCTqV0qg8Dznc9jk+zX8ifITisahyG4bRr6ohsDblO+7GJ9mPBafhwmGp9ouX6104Ee0kBGMqpKVcvelq0EF70ShMUO4ekyEabWI3WmFUBVjFoQVxpKVds2ktu11lMcZjvxwuB4h7UX6D5wWzv2a/MyG03y0X8bfMSeAP91XxsY8362/wLO8/2s4Npxf6Rm+1pDkjn1YfynZYfQzhv0hPfFIPw0l+Lv8AynLjPG2mr9XKxR4p0MntmH94dR8521OKKdPS9steVbH+/S/Of4TM3tH+rHVvlFFNp6SN2N/Y6fWt/wC55vGKKRryaniN/pHXdFFA4Cu+KpHiiCs0r4jd5fWKKBvPdv8A7U/l/Aswanuf5j84opolkvuboPpPTew/6oflT+GNFMNfqLn5rqxItFFHSLhIr70UUFJYjdMjG74opOvAgKe6fOVk4xRTHS4zttfqW/y/OWcJ+zU+g+UUUWfzT15g1KcH2+/ax/hJ/G8aKZT9/wDDv5c1FFFNEP/Z" 
        alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">bachelor of electronics enginnering</p>
        <a href="https://en.urmia.ac.ir/">Urmia University website</a>
      </div>
      </div>
      <div className="card">
      <div className="top">
        <h2 className="name">Sapienza University</h2>
        <img className="circle-img" src="data:image/jpeg;base64,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" 
        alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">M.sc Of computer science</p>
        <a href="https://www.uniroma1.it/en/pagina-strutturale/home">Sapienza University website</a>
      </div>
      </div>
      </div>
        <div id="start">
         <h2>Hamed!! so what?</h2>
        </div>
     <div className="home-page">
        
        <div className="cover-letter1">
            <h3>Skills and Expertise</h3>
            <p>As a front-end developer, I possess a solid command of a wide range of technologies, including Python, JavaScript, TypeScript, React.js, React Router, HTML5, CSS3, Flex, Grid, and Bootstrap. This proficiency has enabled me to craft dynamic and visually captivating user interfaces, setting a strong foundation for user-centric web experiences.</p>
        </div>

        <div className="cover-letter2">
            <h3>Comprehensive Knowledge and Versatility</h3>
            <p>Embarking on the journey into backend development has been an exhilarating experience for me. The intricacies of server-side logic and data management have captured my interest in profound ways. I find immense satisfaction in architecting robust databases, optimizing server performance, and ensuring seamless data flow. This journey is more than a pursuit of skill; it's a genuine passion. The thrill of crafting scalable and efficient systems that power dynamic applications fuels my dedication to mastering the backend realm. I eagerly anticipate delving deeper, embracing every challenge, and continually expanding my proficiency in this dynamic field.</p>
        </div>  

        <div className="cover-letter3">
            <h3>Problem-Solving and Team Collaboration</h3>
        <p>With a practical and analytical mindset, coupled with robust problem-solving skills, I approach challenges with determination and creativity. Thriving in dynamic environments, I am recognized for my adaptability and accountability, qualities that make me an asset to any collaborative project. I am an eager learner, ready to make meaningful contributions to team activities from day one. The prospect of working on real projects, from inception to completion, resonates with me deeply. This hands-on experience allows me to apply theoretical knowledge in practical settings and collaborate with highly skilled engineers to craft innovative solutions. I hold a strong belief in the collective intelligence that emerges from effective teamwork. Moreover, having a designated mentor to guide me not only provides essential support but also aids in navigating and excelling in dynamic and challenging environments. I am now poised to embark on the next chapter of my career, eager to make a positive impact and contribute to cutting-edge projects. Actively seeking opportunities to apply my skills, I am enthusiastic about collaborating with like-minded professionals who share a fervor for technology and innovation.</p>
       </div>     
     </div>
     
     <footer>
       <div className="footer-main">
            <div id="f-header">
                <h2>Hamed Alizde M.sc of computer science from Sapienza University</h2>
            </div>
            <div id="f-body">
                 <h3>Front-end Developer</h3>
            </div>
            <div id="f-footer">
                 <p>{greeting}</p>
                 <p>{currentDate}</p>
                 
            </div>

      </div>
     </footer>
    </>
    )

}

export default Home;