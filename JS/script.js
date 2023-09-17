function validarDados() {
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var bairro = document.getElementById("bairro").value;
    var cep = document.getElementById("cep").value;
    var cidade = document.getElementById("cidade").value;
      
    if (nome.trim() === "") {
      console.log("Campo nome não preenchido!");
      return; // Para evitar a verificação adicional
    }
      
    if (endereco.trim() === "") {
      console.log("Campo endereco não preenchido!");
      return;
    }
      
    if (bairro.trim() === "") {
      console.log("Campo bairro não preenchido!");
      return;
    }
      
    if (cep.trim() === "") {
      console.log("Campo cep não preenchido!");
      return;
    }
      
    if (cidade.trim() === "") {
      console.log("Campo cidade não preenchido!");
      return;
    }
      
    // Verifica se há sinais não permitidos nos campos (+, -, *, /, ?, !)
    var caracteresProibidos = /[+\-*\/?!]/;
    if (caracteresProibidos.test(nome) || caracteresProibidos.test(endereco) || caracteresProibidos.test(bairro)) {
      console.log("Os campos não podem conter os seguintes sinais: +, -, *, /, ?, !");
      return;
    }
      
    // Verifica a quantidade adequada de caracteres
    if (nome.length > 51 || endereco.length > 58 || bairro.length > 11 || cep.length > 8 || cidade.length > 31) {
      console.log("Por favor, preencha todos os campos dentro do limite de caracteres.");
      return;
    }

    console.log("Enviando o formulário");
  }
  