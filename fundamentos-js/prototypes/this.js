const user = {
    name: "Rayane",
    email: "rayane@mail.com",
    birthDate: "2004/04/04",
    role: "admin",
    active: true,

    showInfo: function() {
        console.log(this.name, this.email);
    }
}

user.showInfo();

const show = function() {
    console.log(this.name);
}

const showName = show.bind(user)   
// O método bind vai "anexar" a função ao objeto, ou seja, o this vai passar a se referrir ao objeto user (user vai ser o contexto da função)
showName();
show();