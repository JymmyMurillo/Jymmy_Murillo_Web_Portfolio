import emailjs from "emailjs-com";
import swal from "sweetalert";

function Contact() {
  // Check if the fields are filled whit bootstrap
  function validate() {
    console.log("entreeee");
    // "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
    console.log(forms);

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          console.log("entreeee tambien");

          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }

  function enviarEmail(e) {
    e.preventDefault();
    let form = document.getElementById("formulario");
    let send = "";
    emailjs
      .sendForm(
        "service_bm8htrl",
        "template_12wx7eu",
        e.target,
        "bXcdAuryLIQdg1Opo"
      )
      .then((res) => {
        send = res.text;
        console.log(res);
        console.log(send);

        if (send === "OK") {
          console.log("todo ok");
          swal({
            title: "Correcto",
            text: "El Mensaje se ha enviado",
            icon: "success",
            button: "Aceptar",
            // timer: "6000"
          });
        } else {
          swal({
            title: "Error",
            text: "El servicio de mensajeria ha presentado algun problema.",

            icon: "error",
            button: "Aceptar",
          }).then((respuesta) => {
            swal({
              title: "murillojymmy@gmail.com",
              text: "Por favor, comunícate a mi correo desde tu servicio de mensajería.",
              icon: "warning",
              button: "Aceptar",
            });
          });
        }
      });

    form.reset();
    form.classList.remove("was-validated");
  }

  return (
    <div className="own-divContact" id="contact">
      <div className="own-divContentContact d-flex flex-column justify-content-around">
        <h2 className="own-h2Contact m-0">Contáctame</h2>
        <p className="own-pContact m-0">
          Estoy interesado en oportunidades de trabajo formal y tambien en
          proyectos independientes, especialmente proyectos ambiciosos o
          grandes. Sin embargo, si tienes otra solicitud o pregunta, no dudes en
          utilizar el formulario.
        </p>
        <div className="own-divForm d-flex flex-wrap justify-content-center">
          <form
            id="formulario"
            onSubmit={enviarEmail}
            className="w-100 own-NE needs-validation"
            noValidate
          >
            <div className="row">
              <div className="m-1  col own-NE position-relative">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  autoComplete="off"
                  required
                />
                <div className="invalid-tooltip">Nombre Apellido</div>
              </div>
              <div className="m-1  col own-NE  position-relative">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  autoComplete="off"
                  required
                />
                <div className="invalid-tooltip">correo@correo.com</div>
              </div>
            </div>
            <div className="m-1 position-relative">
              <input
                type="text"
                className="form-control"
                id="asunto"
                name="asunto"
                placeholder="Asunto"
                autoComplete="off"
                required
              />
              <div className="invalid-tooltip">Completa el campo</div>
            </div>
            <div className="mx-1 my-2 position-relative">
              <textarea
                type="text"
                className="form-control"
                id="mensaje"
                name="mensaje"
                placeholder="Mensaje"
                autoComplete="off"
                required
              ></textarea>
              <div className="invalid-tooltip">Completa el campo</div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                onClick={validate}
                className="p-0 own-btnSend px-2"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <span className="own-tags own-bottomTags"></span>

      <span className="own-scroll-down-left d-flex flex-row justify-content-between">
        {`<-`} Scroll Up
      </span>
      <span className="own-scroll-down-right d-flex flex-row justify-content-between">
        {`<-`} Scroll Up
      </span>
    </div>
  );
}

export default Contact;
