// Negação dentro de ifs

const isUserOlderThan18Years = true;
const isUserLivesOnBrasil = true

// evitar
if(!isUserOlderThan18Years && !isUserLivesOnBrasil) {
  console.log()
}

// escreva outras variavies
const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrasil = true

if(isUserYoungerThan18Years && doesUserLivesOutsideBrasil) {
  console.log()
}

// 2 - Early return vs else

// else
function isUserOlderThan18Years(user) {
  if(user) {
    return { error: true }
  } else {
    return user.age >= 18
  }
}

// Early Return
function isUserOlderThan18Years(user) {
  if(user) {
    return { error: true }
  }
  
  return user.age >= 18
}

// quando utilizar o else?
//   -> não é facil identificar um early return


// Evite condicionais aninhadas (Concidional dentro de outra)
// não faça isso
user.age >= 18 ? user.age === 18 ? '': '' : ''

if(user.age > 18){
  return ;
}
if(user.age === 18) {
  return ;
}
return ;
