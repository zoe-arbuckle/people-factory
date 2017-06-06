const personForm = document.querySelector('#personForm')

function renderColor(color){
  const div = document.createElement('div')
  div.style.backgroundColor = color
  div.style.width = '50px'
  div.style.height = '50px'
  
  return div
}

function renderListItem(label, value){
  const item = document.createElement('li')
  item.innerHTML = `${label}: ${value}`
  return item
}

function renderList(personData){
  const list = document.createElement('ul')
  //call renderlistitem several times
  Object.keys(personData).map(function(label) {
     const item = renderListItem(label, personData[label])
     list.appendChild(item)
  })
  return list
}

function handleSubmit(ev){
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  // const boldedName = document.createElement('strong')
  // boldedName.textContent = f.personName.value

  // details.appendChild(boldedName)

  // details.innerHTML = `
  //   <ul>
  //     <li>Name: ${f.personName.value}</li>
  //     <li>Favorite Color: ${colorDiv}</li>
  //     <li>Age: ${f.age.value} 
  //   </ul>`

    const person = {
      name: f.personName.value,
      color: renderColor(f.favoriteColor.value).outerHTML,
      age: f.age.value,
    }
  
    details.appendChild(renderList(person))
}

personForm.addEventListener('submit', handleSubmit)