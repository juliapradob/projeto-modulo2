class LoginController {
    constructor() {
        this.usuario = [];
        this.view = new LoginView()
    }

    addUsuario(){
        const email = $('#email').val();
        const senha = $('#senha').val();
        let user = new Login (email, senha);
        this.usuario.push(user);
        console.log(this.usuario);

        this.view.alertLogin(user)
    }
}


const login = new LoginController()

const submit = document.getElementById('liveAlertBtn');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    login.addUsuario()
})
