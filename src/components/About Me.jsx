import React from "react";

function AboutMe() {
  return (
    <div className="own-divAbout" id="about">
      <div className="own-divContent d-flex flex-column justify-content-around">
        <h2 className="own-h2About m-0">Acerca de Mí</h2>
        <p className="own-pAbout m-0">
          ¡Hola! Soy un ingeniero en mecatrónica apasionado por la tecnología en
          todas sus formas. He tenido la oportunidad de crear soluciones de
          automatización para sistemas físicos y digitales en diferentes áreas.
          También he sido formador, compartiendo lo que sé y aprendiendo
          muchísimo de mis alumnos en el camino. ¡Siempre hay algo nuevo por
          descubrir en este inmenso y emocionante mundo de la tecnología!
          <br></br>
          <br></br>
          Si quieres saber más sobre mí, sigue explorando mi página web. Estoy
          aquí para ayudarte con el desarrollo tecnológico que necesitas. No
          dudes en contactarme, estaré encantado de escuchar tus ideas y
          trabajar contigo para convertirlas en realidad. ¡Hagamos equipo y
          logremos algo increíble juntos!
        </p>
        <a
          href="./hv/HV_JYMMY MURILLO.pdf"
          target="_blank"
          /*download="HV_JYMMY MURILLO.pdf"*/
          className="own-aAbout"
        >
          Aquí puedes ver mi CV
        </a>
      </div>

      <span className="own-scroll-down-left d-flex flex-row justify-content-between">
        {`<-`} Scroll Up or Down {`->`}
      </span>
      <span className="own-scroll-down-right d-flex flex-row justify-content-between">
        {`<-`} Scroll Up or Down {`->`}
      </span>
    </div>
  );
}

export default AboutMe;
