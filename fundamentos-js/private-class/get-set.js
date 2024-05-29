// getter => Acessar informações
// setter => Alterar essas informações

const person = {
    firstName: 'Rayane',
    lastName: 'Reis',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Joao Silva';
console.log(person);