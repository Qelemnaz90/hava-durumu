let inp = document.querySelector('.inp')
let inf = document.querySelector('.inf')
let btn = document.querySelector('#btn')

let obj = {
    baku: {
        temp: {
            day: 23,
            night: 12,
            
        },
        wind: {
            speed: '23 m/s'
        },
        humudity: {
            day: '50%',
            night: '23%'
        },
        locat: {
            city_name: 'Baku',
            country: "Azerbaijan",
            timezone: {
                tm: 14400,
                shortN: 'AZ/Baku'
            }
        }
    },

    sumgayit: {
        temp: {
            day: 23,
            night: 12,
            
        },
        wind: {
            speed: '23 m/s'
        },
        humudity: {
            day: '50%',
            night: '23%'
        },
        locat: {
            city_name: 'Sumgait',
            country: "Azerbaijan",
            timezone: {
                tm: 14400,
                
            }
        }
    },

    gence: {
        temp: {
            day: 15,
            night: 12,
            
        },
        wind: {
            speed: '23 m/s'
        },
        humudity: {
            day: '50%',
            night: '23%'
        },
        locat: {
            city_name: 'Gence',
            country: "Azerbaijan",
            timezone: {
                tm: 14400,
                
            }
        }
    }
}









btn.addEventListener('click', function(){
    if (inp.value === 'baku') { 
        let locat = obj.baku.locat; 
        let wind = obj.baku.wind;
        let temperature = obj.baku.temp;
        let humudity = obj.baku.humudity;
        inf.innerText = `City_name: 'Baku',

        Country: "Azerbaijan", 

        Day Temperature: ${temperature.day}°C, 

        Night Temperature: ${temperature.night}°C, 

        Wind Speed: ${wind.speed},

        Humudity: day: '50%', night: '23%'`;


        let sun = document.createElement('img');
        sun.src="./gunes.webp"
        inf.appendChild(sun);
        

    }       else if (inp.value === 'sumgayit') { 
            let locat = obj.sumgayit.locat; 
            let wind = obj.sumgayit.wind;
            let temperature = obj.sumgayit.temp;
            let humudity = obj.sumgayit.humudity;
            inf.innerText = `City_name: 'Sumgait',
    
            Country: "Azerbaijan", 
    
            Day Temperature: ${temperature.day}°C, 
    
            Night Temperature: ${temperature.night}°C, 
    
            Wind Speed: ${wind.speed},
    
            Humudity: day: '50%', night: '23%'`;
    
    
            let cl = document.createElement('img');
            cl.src="./cloudy.avif"
            inf.appendChild(cl)     



    } else {
        inf.innerText = "City not found";
    };





});