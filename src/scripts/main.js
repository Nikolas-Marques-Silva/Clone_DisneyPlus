AOS.init()

const eventDate = new Date('Dec 31, 2023 00:00:00').getTime();
const intervalo = setInterval(() => {
   const now = new Date().getTime();
   const diff = eventDate - now;

   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (diff < 0) {
        clearInterval(intervalo);
        document.getElementById('contador').innerHTML = 'Evento encerrado';
    }
}, 1000)