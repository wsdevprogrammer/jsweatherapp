const form = document.querySelector( "form" );
const btn = document.getElementById( 'btn' );
const input = document.getElementById( 'input' );
let weatherCard = document.getElementById( 'card' );



const getWeather = async ( city ) => {
    const apiKey = `eb112d2208ed428597f62406231301`;
    weatherCard.innerHTML = `<h2>Loading...</h2>`;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const response = await fetch( url );
    const data = await response.json();
    if ( response.status == 400 )
    {
        weatherCard.innerHTML = `<h2>City Data Not Found...</h2>`;
    } else
    {

        return showWeather( data );
    }

}
const showWeather = async ( data ) => {


    weatherCard.innerHTML = await `
     <div id="card"class="card">
                <img src="${data.current.condition.icon}" alt="">
                <h2 id="cityName">${data.location.name}</h2>
                <p id="temp">${data.current.temp_c}°C</p>

            </div>
    `;

}
form.addEventListener( "submit", function ( event ) {
    getWeather( input.value );
    event.preventDefault();
} )

