// loader
let loader = document.getElementById("loader");

window.addEventListener("load", () => {
    loader.classList.remove("active");
    document.body.classList.add("active");

    // internet
    let internet = document.querySelector(".internet");
    let interMessage = document.querySelector(".internet p");
    let internetRefresh = document.querySelector(".internet a");
    let intro = new Audio(),
        onlineAudio = new Audio(),
        offlineAudio = new Audio();
    intro.src = "../assets/best-seller/sounds/intro.mp3";
    onlineAudio.src = "assets/best-seller/sounds/core.mp3";
    onlineAudio.src = "../assets/best-seller/sounds/core.mp3";
    intro.play();

    window.addEventListener("offline", () => {
        internet.style.bottom = "20px";
        interMessage.textContent = "you lost the internet";
        internetRefresh.style.display = "flex";
        internet.style.backgroundColor = "#ff000033";
        offlineAudio.play();
    });
    window.addEventListener("online", () => {
        interMessage.textContent = "keep Going Internet Restored";
        internetRefresh.style.display = "none";
        internet.style.backgroundColor = "#00ff2a28";
        onlineAudio.play();

        setTimeout(() => {
            internet.style.bottom = "-50px";
        }, 5000);
    });

    // internet
});
// loader
