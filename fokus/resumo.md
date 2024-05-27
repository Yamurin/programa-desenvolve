O que é um lcoalStorage?
- Armazenamento local de 5-10mb (a depender do domínio) para guardar informaçõs não sensíveis

Como armazenar um item no localStorage?
- Usar API localStorage com método setItem: os parâmetros são o nome da chave em string e o valor
- O localStorage só guarda strings. Passe o valor da chave usando a API stringify do JSON:
    localStorage.setitem('chave', JSON.stringfy(valor))