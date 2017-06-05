const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  document.querySelector('h1').textContent = f.personName.value
}

personForm.addEventListener('submit', handleSubmit)