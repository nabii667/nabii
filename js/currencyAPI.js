async function getCurrencyRate() {
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log("Ответ API:", data); // Проверяем, что приходит от API
  
      // Проверяем, есть ли в данных курс для KZT
      if (!data.rates || !data.rates.KZT) {
        throw new Error("Курс KZT не найден в API");
      }
  
      // Обновляем текст в HTML
      document.getElementById("currency-rate").textContent =
        "Курс USD: " + data.rates.KZT.toFixed(2) + " KZT";
    } catch (error) {
      console.error("Ошибка при получении курса валют:", error);
      document.getElementById("currency-rate").textContent = "Ошибка загрузки курса";
    }
  }
  
  // Вызываем функцию при загрузке страницы
  getCurrencyRate();