const search = document.getElementById("search");
const btnSearch = document.getElementById("btn-search");
const overflow = document.getElementById("overflow");

// Обработчик для кнопки
btnSearch.addEventListener("click", () => {
  const city = search.value; // Получаем значение из поля ввода
  console.log(city);

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e8ae8bc933c77b530ae6844d2a339435`;
  console.log(API);

  // Вы можете использовать этот API для вызова функции, например:
  // getDataBase(API);
  const getDataBase = async (resurs) => {
    overflow.classList.remove("visually-hidden");
    console.log("Loauding...");
    const request = await fetch(resurs);
    overflow.classList.add("visually-hidden");
    if (request.status !== 200) {
      throw new Error("Error !");
    }
    const dataBase = await request.json();
    return dataBase;
  };

  getDataBase(API);

  getDataBase(API)
    .then((dataBase) => {
      return dataBase;
    })
    .catch((error) => {
      return error;
    });

  fetch(API)
    .then((dataBase) => {
      return dataBase.json();
    })
    .then((dataBase) => {
      upDataWeth(dataBase);
    })
    .catch((error) => {
      console.log(error);
    });
});
