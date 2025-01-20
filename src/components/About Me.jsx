import React from "react";

function AboutMe() {
  return (
    <div className="own-divAbout" id="about">
      <div className="own-divContent d-flex flex-column justify-content-around">
        <h2 className="own-h2About m-0">Acerca de Mí</h2>
        <p className="own-pAbout m-0">
          Soy un desarrollador full stack ubicado en Tunja-Boyacá. Tengo una
          gran pasión por los efectos de interfaz de usuario, las animaciones y
          la creación de experiencias de usuario intuitivas y dinámicas.{" "}
          <br></br>
          Interesado en todo el espectro frontend y backend, trabajando en
          proyectos ambiciosos con personas positivas.
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
