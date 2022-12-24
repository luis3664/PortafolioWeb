import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }

  section1 = {
    // Title section
    title: "Presentation",
    // Cards
    cards: [{
        // Card 1
        title: "Personal Information",
        text1: "My name is Luis Lopez, i am 30 years old. Im Venezuelan and live in Argentina",
        text2: "Full Stack Developer Jr.",
        imgUrl: "../../../assets/PhotoPersonal.jpg",
        imgName: "Photo Personal",
      }, {
        // Card 2
        title: "Studies",
        text1: "Full Stack Developer jr. in Argentina Programa And Biologist in The University of Zulia (LUZ)",
        text2: "Learning more Languages and Frameworks",
        imgUrl: "../../../assets/LogoArgentinaPrograma.jpg",
        imgName: "Argentina Programa",
      }, {
        // Card 3
        title: "About me",
        text1: "I love science and technology, and I seek to learn more and more.",
        text2: "",
        imgUrl: "../../../assets/ImgAboutMe.jpg",
        imgName: "About Me",
      }
    ]
  }

  section2 = {
    // Title section
    title: "Presentation",
    // Card 1
    titleCard1: "Personal Information",
    text1Card1: "My name is Luis Lopez, i am 30 years old. Im Venezuelan and live in Argentina",
    text2Card1: "Full Stack Developer Jr.",
    // Card 2
    titleCard2: "Studies",
    text1Card2: "Full Stack Developer jr. in Argentina Programa And Biologist in The University of Zulia (LUZ)",
    text2Card2: "Learning more Languages and Frameworks",
    // Card 3
    titleCard3: "About me",
    text1Card3: "I love science and technology, and I seek to learn more and more.",
    text2Card3: "",

  }
  
}
