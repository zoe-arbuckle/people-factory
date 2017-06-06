const personForm = document.querySelector('#personForm')

function renderColor(color){
  const div = document.createElement('div')
  div.style.backgroundColor = color
  div.style.width = '50px'
  div.style.height = '50px'
  
  return div
}

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')
  const favColor = f.favoriteColor.value

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
    colorElement.innerHTML = `Favorite Color: ${renderColor(favColor).outerHTML}`

    const ageElement = document.createElement('li')
    ageElement.textContent = `Age: ${f.age.value}`
  
    list.appendChild(nameElement)
    list.appendChild(colorElement)
    list.appendChild(ageElement)
    details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)