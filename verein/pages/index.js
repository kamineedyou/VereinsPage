import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/Header'
import { basePath } from '../next.config'

export default function Home() {

  
  return (
    <>
    <div style={{backgroundColor: "rgba(173,221,255,255)", width: '1920px',
        height: '1087px'}}>

    <Header></Header>

    <div className='grid-wrapper'>

      <div className='fontHeaderFirstGen'>
      First Generation Aachen e. V.
      </div>
      <div className='rocket'>
      <Image 
                src={
                  basePath + "/assets/home/rockets.png"
                }
                width= "295.9518737792969px"
                height= "296.3009033203125px"
                alt="rockets.jpg"
                className="img-fluid img-shadow"
              ></Image>
        </div>
    </div>
    </div>
    <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}}>
    <SummaryVerein>

    </SummaryVerein>
    <VideoFirstGen></VideoFirstGen>
    <StatsBild></StatsBild>
    </div>
    </>
  )
}


function SummaryVerein(){


  return <>
<div>
  <p className='headline'>
  Der Verein
  </p>
  
  <div className='grid-wrapper fontInBody'>
  <Image 
                src={
                  basePath + "/assets/home/FGA Gruppenfoto_01 1.png"
                }
                width= "901px"
                height= "479px"
                alt="rockets.jpg"
                className="img-fluid img-shadow"
              ></Image>

              <p>
              Mit First Generation Aachen e.V. wollen wir ein Netzwerk für Studierende schaffen,
               deren Eltern keinen akademischen Hintergrund besitzen,
              sogenannte First Generation Studierende. 
              <br></br>
              Im Rahmen dessen haben wir zum einen ein Patenschaftsprogramm entwickelt,
               das dir als Studierende:r die Möglichkeit bietet,
               dich schon früh von erfahrenen Alumni unterstützen zu lassen.
              </p>

              <Image 
                src={
                  basePath + "/assets/home/Bild von iOS (17) 1.png"
                }
                width= "901px"
                height= "479px"
                alt="rockets.jpg"
                className="img-fluid img-shadow"
              ></Image>

              <p>
              Zudem profitierst du als Mitglied von Kooperationen mit anderen Vereinen und durch von uns organisierte Workshops,
               zu Themen wie Zeitmanagement, Lernmethoden und Karriereplanung.
               Dadurch kannst du neue Kontakte knüpfen, dir außeruniversitäres Wissen aneignen und dich ehrenamtlich in einem unserer Ressorts engagieren.
               Wir begleiten dich ab dem ersten Semester bis hin zum erfolgreichen Berufseinstieg.
              </p>

  </div>
  </div>
  </>
}


function Kontaktformular(){
  
  return <>
  <div>
    <p className='headline'>
  Kontaktformular   
 </p>
    
    <div className='fontInBody'>
  
  
                <p>
                Im Vergleich zu Akademikerkindern brechen First Generation Studierende
                 ihr Studium fast doppelt
                 so häufig ab. Lediglich 70% der First Generation Studierenden 
                 absolvieren einen Bachelor - diesen Anteil wollen wir anheben!
                </p>
  
    </div>
    </div>
    </>
}

function VideoFirstGen(){

  return (
    <>

    <div className='fontInBody'>

              <Image 
                src={
                  basePath + "/assets/home/testVideo.png"
                }
                width= "1324px"
                height= "741px"
                alt="rockets.jpg"
                className="img-fluid img-shadow"
              ></Image>
              <p style={{width:"577px", height:"235px", marginTop:"30px",marginLeft:"30px"}}>
              Wir sind eine bunte Gruppe aus Studierenden, die sich
               für mehr Chancengleichheit engagiert, indem wir First Generation Studierende
                unterstützen. Dennoch sind bei uns im Verein alle 
              willkommen: First Gen oder nicht. Wichtig ist nur unser gemeinsames Ziel: 
              <br></br>
             <a style={{color:"#AA3131"}}>Gleiche Chancen für alle!</a> 

              </p>

    </div>
    
    </>
  )

}

function StatsBild(){

  return <>
  <div>
    <p className='headline'>
    Unsere Motivation
    </p>
    
    <div className='grid-wrapper fontInBody'>
    <Image 
                  src={
                    basePath + "/assets/home/Screenshot 2021-07-19 131905 1.png"
                  }
                  width= "901px"
                  height= "479px"
                  alt="Screenshot 2021-07-19 131905 1.jpg"
                  className="img-fluid img-shadow"
                ></Image>
  
                <p>
                Im Vergleich zu Akademikerkindern brechen First Generation Studierende
                 ihr Studium fast doppelt
                 so häufig ab. Lediglich 70% der First Generation Studierenden 
                 absolvieren einen Bachelor - diesen Anteil wollen wir anheben!
                </p>
  
    </div>
    </div>
    </>

}