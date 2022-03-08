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
    const senhasValidas = this.senhasSaoValidas();

    if(checkFields && senhasValidas){
    //  alert('Formulario enviado');
     // this.formulario.submit();     
    }
  }

  senhasSaoValidas(){
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const rptSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== rptSenha.value){
      valid = false;
      this.createError(senha, 'Campos senhas e repetir senha precisam ser iguais.');
      this.createError(rptSenha, 'Campos senhas e repetir senha precisam ser iguais.');
    }
    if(senha.value.length < 6 || senha.value.length > 12){
      valid = false;
      this.createError(senha, 'Senha deve conter de 6 a 12 caracteres.');
    }

    return valid;
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
    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.createError(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(campo,"Usuário precisa conter apenas letras e/ou números.");
      valid = false;
    }

    return valid;
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
