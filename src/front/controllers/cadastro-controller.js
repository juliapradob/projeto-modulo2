class CepController {
    constructor() {
        this.cadastro = [];
        this.view = new View()
    }

    addCadastro(){
        const email = $('#email').val();
        const senha = $('#senha').val();
        const senhaConfirm = $('#senhaConfirm').val()
        const rg = $('#rg').val();
        const cep = $('#cep').val();
        const rua = $('#rua').val();
        const numero = $('#numero').val();
        const complemento = $('#complemento').val();
        const bairro = $('#bairro').val();
        const cidade = $('#cidade').val();
        const estado = $('#uf').val();
        
        let user = new Cadastro (email, senha, senhaConfirm, rg, cep, rua, numero, complemento, bairro, cidade, estado);
        
        this.cadastro.push(user);

        this.view.alertBootstrap()
        
    }
}


$("#cep").on('blur', function() {
  const url = `https://viacep.com.br/ws/${$("#cep").val()}/json/`;

  $.ajax({
    url: `${url}`,
    success: function (results) {
      $("#rua").val(results.logradouro);
      $("#bairro").val(results.bairro);
      $("#cidade").val(results.localidade);
      $("#uf").val(results.uf);
    },
  });
});


const cadastro = new CepController()

const submit = document.getElementById('liveAlertBtn');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    cadastro.addCadastro()
})


function resetaInputs(){
    $('#email').val("");
    $('#rg').val("");
    $('#cep').val("");
    $('#rua').val("");
    $('#numero').val("");
    $('#complemento').val("");
    $('#bairro').val("");
    $('#cidade').val("");
    $('#uf').val("");
}

resetaInputs();