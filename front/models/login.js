class Login {
	constructor (email,senha){
		try {
			if ((email == '') || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) || (email.length < 8)){
				alert('E-mail inválido', 'danger')
				throw new Error ('E-mail inválido');
			} else if ((senha == '') || (senha.length < 6)) {
				alert('Senha inválida', 'danger')
				throw new Error ('Senha inválida');
			} else {
				this.email = email;
				this.senha = senha;
				alert('Login realizado com sucesso!', 'success')
				console.log('Login feito com sucesso!')
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
