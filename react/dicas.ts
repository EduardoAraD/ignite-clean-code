/*
Quanto separar um components em components menores

1 - Quanto eu tenho algo repetitivo
2 - Quando eu consigo isolar do seu contexto (sem prejudicar o comportamento original)
*/

/*
  FUNÇÕES PURAS

  Compenents Puros
    -> Mover facilmente de um lugar para outro.
    -> Não interfare na lógica de um componente.
*/

/*
  PADRÕES

  handle
    -> função disparada com um evento do usuário
    -> prefixo do nome da função (ex: handleCreateNewTodo)
  on
    -> função de uma propriedade de um componente
    -> prefixo do nome da função (ex: onCreateNewTodo)
*/

/*
  CONFIGURAÇÃO vs COMPOSIÇÃO

  inputs
*/

/*
  CONDICIONAIS NO RENDER

  evitar colocar operações javascript dentro do render

  {todos.length === 0 && <span>Lista vazia!</span>}

  const isTodoListEmpty = todos.length === 0
  {isTodoListEmpty && <span>Lista vazia!</span>}
*/