  const container = document.querySelector('.container');
  const searchBtn = document.querySelector('button');
  const error = document.querySelector('.not-found');
  const contents = document.querySelector('.contents');
  const weather_details = document.querySelector('.weather-details');

  
  
   searchBtn.addEventListener('click', () => {
       const city = document.querySelector('.input').value;
       const APIkey = '274fb8dc6dcb7ce46e6471d616824344';

       if (city === '') {
        return
     }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
         .then(res => res.json())
         .then(data => {
           

         if (data.cod == '404') {
              container.style.height = '450px';
              error.classList.add('active');
              contents.classList.remove('active');
              weather_details.classList.remove('active');

         } else {

              container.style.height = '600px';
              error.classList.remove('active');
              contents.classList.add('active');
              weather_details.classList.add('active');

         }

           

          



           const image = document.querySelector('.contents img')
           const temperature = document.querySelector('.temperature')
           const description = document.querySelector('.description')
           const humidity = document.querySelector('.weather-details .humidity span')
           const wind = document.querySelector('.weather-details .wind span')
           const date = document.querySelector('.date')

           if (data.weather[0].main === 'Clouds') {
              image.src = './images/cloud.png'
           } else if (data.weather[0].main === 'Clear') {
             image.src = './images/clear.png'
           }  else if (data.weather[0].main === 'Haze') {
             image.src = './images/mist.png'
           } else if (data.weather[0].main === 'Mist') {
            image.src = './images/mist.png'
           } else if (data.weather[0].main === 'Rain') {
            image.src = './images/rain.png'
          } else if (data.weather[0].main === 'Snow') {
           image.src = './images/snow.png'
          } else {
            image.src = './images/clear.png'
          };
           
 
           temperature.innerHTML = `${parseInt(data.main.temp)} <span>°C</span> `;
           description.innerHTML = `${data.weather[0].description}`;
           humidity.innerHTML = `${data.main.humidity}%`;
           wind.innerHTML = `${data.wind.speed}Km/h`;

           const currentDate = new Date()

           date.innerHTML = `${currentDate.toDateString()}`

 






            console.log(data)
         })

   })
