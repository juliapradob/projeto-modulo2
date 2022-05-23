class RecLogin {
	constructor (email){
		try {
			if ((email == '') || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) || (email.length < 8)){
				alert('E-mail inválido', 'danger')
				throw new Error ('E-mail inválido');
			} else {
				this.email = email;
				alert(`Um e-mail de recuperação de senha foi enviado para ${this.email}`, 'success')
				console.log('E-mail de recuperação enviado')
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
