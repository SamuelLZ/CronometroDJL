// Definição da data de destino da contagem regressiva
const targetDate = new Date("December 15, 2024 23:59:59").getTime();

function updateCountdown() {
    // Data atual
    const now = new Date().getTime();

    // Calculo da diferença entre a data atual e a data de destino
    const distance = targetDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os valores
    document.getElementById("days").textContent = days < 10 ? '0' + days : days;
    document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;

    // Se a contagem regressiva terminar é exibida uma mensagem
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        alert("O site está no ar");
    }
}

// Atualiza a cada segundo
const interval = setInterval(updateCountdown, 1000);