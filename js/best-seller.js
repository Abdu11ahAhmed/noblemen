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

