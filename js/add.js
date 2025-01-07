const card = document.getElementById("card");

const upDataWeth = (dataBase) => {
  console.log("up", dataBase);
  card.innerHTML = ""; // Очистка содержимого перед обновлением

  // Деструктуризация данных из объекта
  const { main, name, weather, wind, sys } = dataBase;

  // Формирование HTML-контента
  card.innerHTML = `
        <div class="col-12 col-md-10 col-lg-6 p-5 main-bg border border-3 border-info border-opacity-50 rounded-3">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row" style="height: 100%;">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12 fs-3 text-start">
                                    <span>${name}</span>
                                    <span>${sys.country}</span>
                                </div>
                                <div class="col-4 cloud d-flex align-items-center display-6">
                                    <img src="http://openweathermap.org/img/wn/${
                                      weather[0].icon
                                    }@2x.png" alt="icon" class="weather-icon">
                                </div>
                                <div class="col-6 mx-3 display-1">
                                    <p>${Math.round(main.temp)}°C</p>
                                </div>
                            </div>                         
                        </div>
                        <div class="col-12 text-start">
                            <p class="fs-4" id="weatherNow" >${
                              weather[0].description
                            }</p>
                            <p class="">Feels like <span>${Math.round(
                              main.feels_like
                            )}°C</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-2 my-3">
                    <div class="row">
                        <div class="col-12">
                            <p class="fs-3">${Math.round(main.temp_max)}°C</p>
                            <p class="color-text">Temp max</p>
                        </div>
                        <div class="col-12">
                            <p class="fs-3">${Math.round(main.temp_min)}°C</p>
                            <p class="color-text">Temp min</p> 
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-2 my-3">
                    <div class="row">
                        <div class="col-12">
                            <p class="fs-3">${main.humidity}%</p>
                            <p class="color-text"><i class="bi bi-droplet"></i></p>
                        </div>
                        <div class="col-12">
                            <p class="fs-3">${wind.speed}</p>
                            <p class="color-text">Speed <i class="bi bi-wind"></i></p> 
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-2 my-3">
                    <div class="row">
                        <div class="col-12">
                            <p class="fs-3">${new Date(
                              sys.sunrise * 1000
                            ).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })}</p>
                            <i class="bi fs-4 color-text bi-sunrise"></i>
                        </div>
                        <div class="col-12">
                            <p class="fs-3">${new Date(
                              sys.sunset * 1000
                            ).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            })}</p>
                            <i class="bi fs-4 color-text bi-sunset"></i> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// const sunrise = 1736219802; // UNIX-время
// const sunset = 1736249026;  // UNIX-время

// const sunriseDate = new Date(sunrise * 1000);
// const sunsetDate = new Date(sunset * 1000);

// // Опции для исключения секунд
// const options = { hour: '2-digit', minute: '2-digit' };

// console.log(`Sunrise: ${sunriseDate.toLocaleTimeString(undefined, options)}`); // Восход
// console.log(`Sunset: ${sunsetDate.toLocaleTimeString(undefined, options)}`);   // Закат
