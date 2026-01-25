// let bestSellerContent = document.querySelector(".sec4 .content");

// let bestSellerReq = new XMLHttpRequest();
// bestSellerReq.open("GET", "js/json/best-seller.json");
// bestSellerReq.send();

// bestSellerReq.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let bestSellerObject = JSON.parse(this.response);
//         for (let i = 0; i < bestSellerObject.length; i++) {
//             let card = document.createElement("div");
//             card.className = "card";
//             bestSellerContent.append(card);

//             let image = document.createElement("div");
//             image.className = "image";
//             card.append(image);
//             let img = document.createElement("img");
//             img.src = bestSellerObject[i].image;
//             image.append(img);
//             let text = document.createElement("div");
//             text.className = "text";
//             card.append(text);
//             let h3 = document.createElement("h3");
//             h3.textContent = bestSellerObject[i].name;
//             text.append(h3);
//             let span = document.createElement("span");
//             span.textContent = bestSellerObject[i].desc;
//             text.append(span);
//             let p = document.createElement("p");
//             p.textContent = bestSellerObject[i].price;
//             text.append(p);
//         }
//     }
// };

let bestSellerContent = document.querySelector(".sec4 .content");

let bestSellerReq = new XMLHttpRequest();
bestSellerReq.open("GET", "js/json/best-seller.json");
bestSellerReq.send();

bestSellerReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let bestSellerObject = JSON.parse(this.responseText);

        for (let i = 0; i < bestSellerObject.length; i++) {
            let card = document.createElement("div");
            card.classList = "card";

            bestSellerContent.append(card);

            let image = document.createElement("div");
            image.classList = "image";
            card.append(image);

            let img = document.createElement("img");
            img.setAttribute("src", bestSellerObject[i].image);
            image.append(img);

            let text = document.createElement("div");
            text.classList = "text";
            card.append(text);

            text.style.height = card.offsetHeight - image.offsetHeight + "px";

            let title = document.createElement("div");
            text.append(title);

            let name = document.createElement("h4");
            name.textContent = bestSellerObject[i].name;
            title.append(name);

            let desc = document.createElement("p");
            desc.textContent = bestSellerObject[i].desc;
            title.append(desc);

            let price = document.createElement("p");
            price.textContent = bestSellerObject[i].price + "$";
            text.append(price);
        }
    }
};
