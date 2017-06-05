const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const animal = f.favoriteAnimal.value
  document.querySelector('h1').textContent = name + " has a pet " + animal
}

personForm.addEventListener('submit', handleSubmit)