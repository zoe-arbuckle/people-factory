const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  details.innerHTML += `<strong>${f.personName.value}</strong>`
  //const heading = document.querySelector('h1')
  //heading.textContent = f.personName.value + ' likes ' + f.favoriteAnimal.value + 's!'
  // const p = f.querySelector('#edit')
  // p.textContent = 'We asked ' + f.personName.value + ' what their favorite animal is. They said ' + f.favoriteAnimal.value + '!'
  // p.style.color = f.color.value
}

personForm.addEventListener('submit', handleSubmit)