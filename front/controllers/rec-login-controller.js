class RecLoginController {
    constructor() {
        this.usuario = [];
        this.view = new RecLoginView() 
    }

    addUsuario(){
        const email = $('#email').val();
        let user = new RecLogin (email);
        this.usuario.push(user);
        console.log(this.usuario);

        this.view.alertRec(user)
    }
}


const recLogin = new RecLoginController()

const submit = document.getElementById('liveAlertBtn');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    recLogin.addUsuario()
})
