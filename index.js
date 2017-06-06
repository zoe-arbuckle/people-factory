const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const heading = document.querySelector('h1')
  heading.textContent = f.personName.value + ' likes the ' + f.favoriteAnimal.value + '!'
  const p = f.querySelector('#edit')
  p.textContent = 'We asked ' + f.personName.value + ' what their favorite animal is. They said ' + f.favoriteAnimal.value + '!'
}

personForm.addEventListener('submit', handleSubmit)