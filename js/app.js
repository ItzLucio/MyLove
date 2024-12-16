function formatDuration(date1, date2) {
    const diffMs = Math.abs(date2 - date1);
    const seconds = Math.floor(diffMs / 1000) % 60;
    const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
    const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return `${days} giorni, ${hours} ore, ${minutes} minuti e ${seconds} secondi`;
}

document.addEventListener("DOMContentLoaded", () => {
    const all = document.querySelector("#all")
    const countdown = document.querySelector("#countdown")

    const countdownText = document.querySelector(".countdown-text")

    const nowDateMS_FirstCheck = new Date().getTime()
    const thatDateMS_FirstCheck = new Date("2024-12-17T00:00:00").getTime()

    if (thatDateMS_FirstCheck > nowDateMS_FirstCheck) {
        all.classList.add('hidden')
        countdown.classList.remove('hidden')

        countdownText.textContent = formatDuration(nowDateMS_FirstCheck, thatDateMS_FirstCheck)
    } else {
        all.classList.remove('hidden')
        countdown.classList.add('hidden')
    }

    setInterval(function() {
        const nowDateMS = new Date().getTime()
        const thatDateMS = new Date("2024-12-17T00:00:00").getTime()

        if (thatDateMS > nowDateMS) {
            all.classList.add('hidden')
            countdown.classList.remove('hidden')

            countdownText.textContent = formatDuration(nowDateMS, thatDateMS)
        } else {
            all.classList.remove('hidden')
            countdown.classList.add('hidden')
        }
    }, 1000)
})