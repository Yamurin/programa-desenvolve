const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

  function ligarParaCliente(telComercial, telResidencial) {
    console.log(`Ligando para ${telComercial}`);
    console.log(`Ligando para ${telResidencial}`);
  }

  ligarParaCliente(...cliente.telefone);
  // O spread operator seria equivalente a passar cliente.telefone[0], cliente.telfone[1], etc

  const encomenda = {
        destinatario: cliente.nome,
        ...cliente.enderecos[0]
  }

  //console.log(encomenda);

  /* EXTRA: Spread Operator para juntar as chaves de dois objetos */
  const fichaGuerreiro = {
        nome: "Aragorn",
        classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
        espada: "Andúril",
        capa: "capa élfica +2"
   }

   const personagens = {
        ...fichaGuerreiro,
        ...equipoGuerreiro
   }

   console.log(personagens);    
