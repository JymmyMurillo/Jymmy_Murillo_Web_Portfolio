import emailjs from "emailjs-com";

function Contact() {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bm8htrl",
        "template_12wx7eu",
        e.target,
        "bXcdAuryLIQdg1Opo"
      )
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="own-divContact">
      <div className="own-divContentContact d-flex flex-column justify-content-around">
        <h2 className="own-h2Contact m-0">Contáctame</h2>
        <p className="own-pContact m-0">
          Estoy interesado en oportunidades de trabajo formal y tambien en
          proyectos independientes, especialmente proyectos ambiciosos o
          grandes. Sin embargo, si tienes otra solicitud o pregunta, no dudes en
          utilizar el formulario.
        </p>
        <div className="own-divForm d-flex flex-wrap justify-content-center">
          <form onSubmit={enviarEmail} className="w-100 own-NE">
            <div className="row">
              <div className="m-1  col own-NE">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                />
              </div>
              <div className="m-1  col own-NE">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Correo Electrónico"
                />
              </div>
            </div>
            <div className="m-1">
              <input
                type="text"
                className="form-control"
                id="asunto"
                name="asunto"
                placeholder="Asunto"
              />
            </div>
            <div className="mx-1 my-2">
              <textarea
                type="text"
                className="form-control"
                id="mensaje"
                name="mensaje"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="p-0 own-btnSend px-2">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <span className="own-tags own-bottomTags"></span>

      <span className="own-scroll-down-left d-flex flex-row justify-content-between">
        {`<-`} Scroll Up or Down {`->`}
      </span>
      <span className="own-scroll-down-right d-flex flex-row justify-content-between">
        {`<-`} Scroll Up or Down {`->`}
      </span>
    </div>
  );
}

export default Contact;
