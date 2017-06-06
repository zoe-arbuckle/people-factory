const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const favColor = f.favoriteColor.value

  const colorDiv = `<div style="background-color: ${favColor}; width: 50px; height: 50px;"></div>`

  // const boldedName = document.createElement('strong')
  // boldedName.textContent = f.personName.value

  // details.appendChild(boldedName)

  // details.innerHTML = `
  //   <ul>
  //     <li>Name: ${f.personName.value}</li>
  //     <li>Favorite Color: ${colorDiv}</li>
  //     <li>Age: ${f.age.value} 
  //   </ul>`

    const list = document.createElement('ul')
    
    const nameElement = document.createElement('li')
    nameElement.textContent = `Name: ${f.personName.value}`
    
    const colorElement = document.createElement('li')
    colorElement.innerHTML = `Favorite Color: ${colorDiv}`

    const ageElement = document.createElement('li')
    ageElement.textContent = `Age: ${f.age.value}`
  
    list.appendChild(nameElement)
    list.appendChild(colorElement)
    list.appendChild(ageElement)
    details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)