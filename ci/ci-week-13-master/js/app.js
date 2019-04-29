window.addEventListener('load', ()=> {

    let long;
    let lat;

    let description = document.querySelector('.temp__description');
    let degrees = document.querySelector('.temp__value');
    let timezone = document.querySelector('.location__timezone');

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position => {
            console.log(long);

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'http://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/0b878442f49933e640c7d90a465265cb/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const {temperature, summary, icon} = data.currently;

                    //set DOM element values w/ values from the API
                    description.textContent = summary;
                    degrees.textContent = temperature;
                    timezone.textContent = data.timezone;

                    setIcons(icon, document.querySelector('.icon'));

                });
        });
    }

    function setIcons(icon, iconID) {
    
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();

        return skycons.set(iconID, Skycons[currentIcon]);
    }

});
