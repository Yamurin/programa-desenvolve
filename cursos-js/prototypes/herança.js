const user = {
    name: "Rayane",
    email: "rayane@mail.com",
    birthDate: "2004/04/04",
    role: "student",
    active: true,

    showInfo: function() {
        console.log(this.name, this.email);
    }
}

const admin = {
    name: "Regina",
    email: "regina@mail.com",
    role: "admin",

    addCourse() {
        console.log('Adicionou novo curso')
    }
}

// O objeto admin vai herdar as propriedades do objeto user
// No setPrototypeOf, a ordem dos parâmetros é sempre recebe > cede
Object.setPrototypeOf(admin, user);
admin.addCourse();
admin.showInfo();