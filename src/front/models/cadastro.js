class ViaCep {
	constructor(cep, rua, numero, complemento, bairro, cidade, estado){
		this.cep = cep;
		this.rua = rua;
		this.numero = numero;
		this.complemento = complemento;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = cidade;

        try {

            $(document).ready(function() {

                function limpa_formulário_cep() {
                    $("#rua").val("");
                    $("#bairro").val("");
                    $("#cidade").val("");
                    $("#uf").val("");
                }       

                $("#cep").blur(function() {
                    let cep = $(this).val().replace(/\D/g, '');

                    if (cep != "") {
                        let validacep = /^[0-9]{8}$/;

                        if(validacep.test(cep)) {
                            $("#rua").val("...");
                            $("#bairro").val("...");
                            $("#cidade").val("...");
                            $("#uf").val("...");

                            $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados){
                                if("erro" in dados) {
                                limpa_formulário_cep();
                                alert('CEP não encontrado', 'danger');
                                throw new Error ('CEP não encontrado')
                                }
                            }); 

                        } else {
                            limpa_formulário_cep();
                            alert('Formato de CEP inválido', 'danger');
                            throw new Error ('CEP inválido');
                        }
                    } else {
                        limpa_formulário_cep();
                    }
                });
            });

        } catch(error) {
            console.error(error)
        } 
    }
}

class Cadastro extends ViaCep {
	constructor (email, senha, senhaConfirm, rg, cep, rua, numero, complemento, bairro, cidade, estado){
	
	super(cep, rua, numero, complemento, bairro, cidade, estado)

		try {
			if ((email == '') || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) || (email.length < 8)){
				alert('E-mail inválido', 'danger')
				throw new Error ('E-mail inválido');
			} else if ((senha == '') || (senha.length < 6)) {
				alert('Senha inválida', 'danger')
				throw new Error ('Senha inválida');
			} else if (senha !== senhaConfirm) {
				alert('A senha e confirmação de senha não são iguais', 'danger')
				throw new Error ('Senhas não conferem');
			} else if ((rg == "") || (cep == "") || (rua == "") || (numero == "") || (bairro == "") || (cidade == "") || (estado == "")) {
				alert('Preencha todos os campos', 'danger')
				throw new Error ('Campos vazios')
			} else {
				this.email = email;
				this.senha = senha;
				this.rg = rg;
				alert('Cadastro realizado com sucesso!', 'success')
			}

		} catch(error) {
			console.error(error)
		}
	}

}


const alert = (message, type) => {
		const wrapper = document.getElementById('wrapper')
		wrapper.innerHTML = [
			`<div class="alert alert-${type} alert-dismissible" role="alert">`,
			`   <div>${message}</div>`,
			'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
			'</div>'
		].join('')
	}
