var list = document.getElementById("item1");
let x = [];
let keyIds = [];
if (localStorage.getItem("item1")) {
    x = JSON.parse(localStorage.getItem("item1"))
}
if (localStorage.getItem("keyid")) {
    keyIds = JSON.parse(localStorage.getItem("keyid"))
}

x.forEach((a, i) => {
    console.log(a)
    var value = a.p;
    var div1 = document.createElement("div");
    var h2 = document.createElement("h2");
    var p1 = document.createElement("p");
    var word = document.createElement("span");
    var btn = document.createElement("button");
    btn.onclick = deleteElement;
    var font = document.createElement("i");
    var word = a.word;

    div1.appendChild(h2);
    div1.appendChild(p1);
    div1.appendChild(btn);
    list.appendChild(div1);
    btn.appendChild(font);

    h2.textContent = `word : ${word}`;
    p1.textContent = value;


    div1.classList.add("card");
    div1.id = keyIds[i];
    font.className = "fa-solid fa-trash-can";
    h2.classList.add("name");
    p1.classList.add("text");
    btn.classList.add("btn3");

})

// 

function deleteElement(e) {

    var id = e.target.parentElement.parentElement.id;
    var x = JSON.parse(localStorage.getItem("item1"));
    var y = JSON.parse(localStorage.getItem("keyid"));

    var idx = y.indexOf(id);
    x.splice(idx, 1);
    y.splice(idx, 1);
    localStorage.setItem("item1", JSON.stringify(x));
    localStorage.setItem("keyid", JSON.stringify(y));
    if (e.target.parentElement.classList.contains("card")) {
        e.target.parentElement.remove();
    } else {
        e.target.parentElement.parentElement.remove();
    }
}








