// loader
let loader = document.getElementById("loader");

window.addEventListener("load", () => {
    loader.classList.remove("active");
    document.body.classList.add("active");

    // internet
    let internet = document.querySelector(".internet");
    let interMessage = document.querySelector(".internet p");
    let internetRefresh = document.querySelector(".internet a");

    window.addEventListener("offline", () => {
        internet.style.bottom = "20px";
        interMessage.textContent = "you lost the internet";
        internetRefresh.style.display = "flex";
        internet.style.backgroundColor = "#ff000033";
        console.log("offline");
    });
    window.addEventListener("online", () => {
        interMessage.textContent = "keep Going Internet Restored";
        internetRefresh.style.display = "none";
        internet.style.backgroundColor = "#00ff2a28";

        setTimeout(() => {
            internet.style.bottom = "-50px";
            internet.style.transition= " 1s bottom cubic-bezier(0.075, 0.82, 0.165, 1)"
        }, 5000);
    });

    // internet
});
// loader
