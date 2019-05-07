// http://localhost:8000

let hawaii = document.querySelector('.usahw');
let newyork = document.querySelector('.usany');
let shanghai = document.querySelector('.chinash');
let beijing = document.querySelector('.chinabj');

const proxy = 'https://cors-anywhere.herokuapp.com/';

//beijing - china
fetch(`${proxy}https://api.airvisual.com/v2/nearest_city?lat=39.90&lon=116.40&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res3 => {
			console.log(res3);
			const number3 = res3.data.current.pollution.aqius;
			beijing.innerHTML = number3;
			
			if ( parseInt(number3) < 50 ) {
				beijing.classList += ' good';
			} else if ( 51 < parseInt(number3) && parseInt(number3) < 100 ) {
				beijing.classList += ' moderate';
			} else if ( 101 < parseInt(number3) && parseInt(number3) < 150 ) {
				beijing.classList += ' sensitive';
			} else if ( 151 < parseInt(number3) && parseInt(number3) < 200 ) {
				beijing.classList += ' unhealthy';
			} else if ( 201 < parseInt(number3) && parseInt(number3) < 300 ) {
				beijing.classList += ' veryunhealthy';
			} else if ( 301 < parseInt(number3) && parseInt(number3) < 500 ) {
				beijing.classList += ' hazard';
			}
          });

//shanghai - china
fetch(`${proxy}https://api.airvisual.com/v2/nearest_city?lat=31.23&lon=121.47&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res2 => {
			console.log(res2);
			const number2 = res2.data.current.pollution.aqius;
			shanghai.innerHTML = number2;
			
			if ( parseInt(number2) < 50 ) {
				shanghai.classList += ' good';
			} else if ( 51 < parseInt(number2) && parseInt(number2) < 100 ) {
				shanghai.classList += ' moderate';
			} else if ( 101 < parseInt(number2) && parseInt(number2) < 150 ) {
				shanghai.classList += ' sensitive';
			} else if ( 151 < parseInt(number2) && parseInt(number2) < 200 ) {
				shanghai.classList += ' unhealthy';
			} else if ( 201 < parseInt(number2) && parseInt(number2) < 300 ) {
				shanghai.classList += ' veryunhealthy';
			} else if ( 301 < parseInt(number2) && parseInt(number2) < 500 ) {
				shanghai.classList += ' hazard';
			}
		  });

//newyorkcity - usa
fetch(`${proxy}https://api.airvisual.com/v2/nearest_city?lat=40.71&lon=-74.00&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res1 => {
			console.log(res1);
			const number1 = res1.data.current.pollution.aqius;
			newyork.innerHTML = number1;

			if ( parseInt(number1) < 50 ) {
				newyork.classList += ' good';
			} else if ( 51 < parseInt(number1) && parseInt(number1) < 100 ) {
				newyork.classList += ' moderate';
			} else if ( 101 < parseInt(number1) && parseInt(number1) < 150 ) {
				newyork.classList += ' sensitive';
			} else if ( 151 < parseInt(number1) && parseInt(number1) < 200 ) {
				newyork.classList += ' unhealthy';
			} else if ( 201 < parseInt(number1) && parseInt(number1) < 300 ) {
				newyork.classList += ' veryunhealthy';
			} else if ( 301 < parseInt(number1) && parseInt(number1) < 500 ) {
				newyork.classList += ' hazard';
			}
          });

//hawaii - usa
fetch(`${proxy}https://api.airvisual.com/v2/nearest_city?lat=21.30&lon=-157.85&key=Q3Fau4PDvuHnTyPA9`)
  		.then(response => {
			return response.json();
		  })
  		.then(res => {
			console.log(res);
			const number = res.data.current.pollution.aqius;
			hawaii.innerHTML = number;
				
			if ( parseInt(number) < 50 ) {
				hawaii.classList += ' good';
			} else if ( 51 < parseInt(number) && parseInt(number) < 100 ) {
				hawaii.classList += ' moderate';
			} else if ( 101 < parseInt(number) && parseInt(number) < 150 ) {
				hawaii.classList += ' sensitive';
			} else if ( 151 < parseInt(number) && parseInt(number) < 200 ) {
				hawaii.classList += ' unhealthy';
			} else if ( 201 < parseInt(number) && parseInt(number) < 300 ) {
				hawaii.classList += ' veryunhealthy';
			} else if ( 301 < parseInt(number) && parseInt(number) < 500 ) {
				hawaii.classList += ' hazard';
			}
		  });