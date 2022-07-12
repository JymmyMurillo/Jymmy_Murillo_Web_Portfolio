function Skills() {
  return (
    <div className="own-divSkills" id="skills">
      <div className="own-divContentSkills d-flex flex-column justify-content-around">
        <h2 className="own-h2Skills m-0">Mis Habilidades</h2>
        <p className="own-pSkills m-0">
          He creado aplicaciones web responsivas, aplicando buenas practicas por
          medio del uso de las siguintes tecnologias:
        </p>
        <div className="own-divTecnologies d-flex flex-wrap justify-content-center p-2">
          <img src="./images/html5.png" alt="Logo html" className="own-logosSkills"/>
          <img src="./images/js.png" alt="Logo javascript" className="own-logosSkills"/>
          <img src="./images/css.png" alt="Logo css" className="own-logosSkills"/>
          <img src="./images/1200px-React.jpg" alt="Logo React" className="own-logosSkills"/>
          <img src="./images/php.png" alt="Logo php" className="own-logosSkills"/>
          <img src="./images/Bootstrap.jpg" alt="Logo Bootstrap" className="own-logosSkills"/>
          <img src="./images/git.png" alt="Logo git" className="own-logosSkills"/>
          <img src="./images/github.png" alt="Logo github" className="own-logosSkills"/>
        </div>
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

export default Skills