const cliente = {
    nome: "Regina",
    idade: 48,
    email: "regina@gmail.com",
    saldo: 500,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log("Compra realizada.");
        }
    },
};

cliente.efetuaPagamento(2500);

// O 'this' vai acessar o próprio objeto