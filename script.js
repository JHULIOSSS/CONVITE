// Data alvo: 10 de julho de 2025 às 00:00:00
const countdownDate = new Date("2025-09-06T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const countdown = document.getElementById("countdown");
    const message = document.getElementById("message");

    if (distance < 0) {
        countdown.style.display = "none";
        message.classList.remove("hidden");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);



function copiarTexto() {
    const texto = document.getElementById("textoCopiavel").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        document.getElementById("mensagem").innerText = "Texto copiado com sucesso!";
    }).catch(() => {
        document.getElementById("mensagem").innerText = "Erro ao copiar o texto.";
    });
}

function enviarWhatsapp() {
    const numero = "5598984251495"; // Substitua pelo seu número com DDI e DDD (ex: 55 + 99 + número)
    const mensagem = "Olá, quero confirmar presença na festa de 15 anos da Isadora Martins, que acontecerá às 21h do dia 06 de setembro de 2025 no Excelence Buffet Prime. Nome para confirmação:";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
