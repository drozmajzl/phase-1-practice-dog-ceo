console.log('%c HI', 'color: firebrick') 

const init = () => {
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(rsp => rsp.json())
    .then(data => renderDogs(data))

        //IMPORTANT FETCH
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(rsp => rsp.json())
        .then(data => {renderBreeds(data)
        })

        //DOG IMAGES ON SCREEN
    function renderDogs(dogs) { 
        const div = document.querySelector('#dog-image-container');
        dogs.message.forEach(singleDog => {
          const dogImg = document.createElement('img');
            dogImg.src = singleDog;
          div.appendChild(dogImg);
        });
      }
        //COLOR CHANGE FUNCTION
      function colorChangeSelector(event){
        event.target.style.color = 'green'
      }

      //DOGNAMES ON SCREEN
      function renderBreeds(dogBreeds) {
          
          const ul = document.querySelector('#dog-breeds')
          let dogArray = Object.keys(dogBreeds.message)
          dogArray.forEach(singleBreed => {
          const li = document.createElement('li')
          li.textContent = singleBreed
          li.addEventListener('click', colorChangeSelector)
          ul.appendChild(li)
          })
      }

      fetch('https://dog.ceo/api/breeds/list/all')
    .then(r => r.json())
    .then(data => {
        const breedObject = (data.message)
        const breedKeys = Object.keys(breedObject)
        const selector = document.querySelector('#breed-dropdown')
        selector.addEventListener('change', filterBreeds)
      
      function filterBreeds (event){

        const inputValue = event.target.value
        console.log(breedKeys)
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ''
        const newDogList = breedKeys.filter(name => name.charAt(0) === inputValue);
        console.log(newDogList)
        
        newDogList.forEach(dog => {
          const li = document.createElement('li')
        li.textContent = dog
        ul.appendChild(li)})
        }
      })
    }
    
document.addEventListener('DOMContentLoaded', init);

      
   
   

   

