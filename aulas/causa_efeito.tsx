function Button() {
  // nomear as variavies pela causa e não pelo efeito.
  // const isButtonDisabled = true
  const isFormSubmitting = true

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      {isFormSubmitting ? 'Carregando' : 'Enviar'}
    </button>
  )
}
