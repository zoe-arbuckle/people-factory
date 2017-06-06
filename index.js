const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  // const boldedName = document.createElement('strong')
  // boldedName.textContent = f.personName.value

  // details.appendChild(boldedName)

  details.innerHTML = `
    <ul>
      <li>Name: ${f.personName.value}</li>
      <li>Favorite Color: ${f.favoriteColor.value}</li>
      <li>Age: ${f.age.value} 
    </ul>
    `
}

personForm.addEventListener('submit', handleSubmit)