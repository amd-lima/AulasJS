class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkFields = this.validFields();
  }

  validFields() {
    let valid = true;

    //não acumular erros
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    //validar campo em branco
    for (let campo of this.formulario.querySelectorAll(".validar")) {
      let label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.createError(campo, `Campo ${label} não pode estar em branco`);
        valid = false;
      }

      //validar CPF
      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      //validar usuario
      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
  }

  validaUsuario() {
    return true;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.createError(campo, "CPF inválido.");
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
