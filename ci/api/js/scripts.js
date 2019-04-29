// http://localhost:8000

let sanfran = document.querySelector('.usasf');
let newyork = document.querySelector('.usany');
let shanghai = document.querySelector('.chinash');
let beijing = document.querySelector('.chinabj');

const proxy = 'http://cors-anywhere.herokuapp.com/';

//beijing - china
fetch(`${proxy}http://api.airvisual.com/v2/nearest_city?lat=39.90&lon=116.40&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res3 => {
			console.log(res3);
			const number3 = res3.data.current.pollution.aqius;
			beijing.innerHTML = number3;
			
			if ( parseInt(number3) > 55 ) {
				sanfran.classList += ' bad';
			} else {
				sanfran.classList += ' good';
			}
          });

//shanghai - china
fetch(`${proxy}http://api.airvisual.com/v2/nearest_city?lat=31.23&lon=121.47&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res2 => {
			console.log(res2);
			const number2 = res2.data.current.pollution.aqius;
			shanghai.innerHTML = number2;
			
			if ( parseInt(number2) > 55 ) {
				sanfran.classList += ' bad';
			} else {
				sanfran.classList += ' good';
			}
		  });

//newyorkcity - usa
fetch(`${proxy}http://api.airvisual.com/v2/nearest_city?lat=40.71&lon=-74.00&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res1 => {
			console.log(res1);
			const number1 = res1.data.current.pollution.aqius;
			newyork.innerHTML = number1;
				
			if ( parseInt(number1) > 55 ) {
				sanfran.classList += ' bad';
			} else {
				sanfran.classList += ' good';
			}
          });

//sanfrancisco - usa
fetch(`${proxy}http://api.airvisual.com/v2/nearest_city?lat=37.77&lon=-122.41&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res => {
			console.log(res);
			const number = res.data.current.pollution.aqius;
			sanfran.innerHTML = number;
				
			if ( parseInt(number) > 55 ) {
				sanfran.classList += ' bad';
			} else {
				sanfran.classList += ' good';
			}
		  });