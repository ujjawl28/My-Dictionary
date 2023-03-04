import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// console.log(uuidv4());
var list = document.getElementById("item1");
console.log(list);
var x = [];
var keyid = [];

var addlist = document.forms["add"];
addlist.addEventListener("submit", function (e) {
    e.preventDefault();

    var value = addlist.querySelector("input[type=text]").value;
    solve(value);

});

// 
function solve(value) {
    axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + value)
        .then((res) => {    
            renderhtml(res.data[0].meanings[0].definitions[0].definition);
        })
        .catch((err) => {
          alert("Please Enter The Correct Word");
          addlist.querySelector("input[type=text]").value = "";
            console.log(err);
        });
}

function renderhtml(data) {
    list.innerHTML = "";
    var value = addlist.querySelector("input[type=text]").value;
    var div1 = document.createElement("div");
    var h2 = document.createElement("h2");
    var p1 = document.createElement("p");
    var word = document.createElement("span");
    var btn = document.createElement("button");
    btn.onclick = deleteElement;
    var font = document.createElement("i");
    var uniqueid = uuidv4();

    div1.appendChild(h2);
    div1.appendChild(p1);
    div1.appendChild(btn);
    list.appendChild(div1);
    btn.appendChild(font);
   
    h2.textContent = `word : ${value}`;
    p1.textContent = data;
    var obj = {
        word: value,
        p: data,
        id: uniqueid,
    } 
    if (localStorage.getItem("item1")) {
        x = JSON.parse(localStorage.getItem("item1"))
    }
    if (localStorage.getItem("keyid")) {
        keyid = JSON.parse(localStorage.getItem("keyid"))
    }
    while(x.length >3){
        x.splice(0,1);
    }
    while(keyid.length>4){
        keyid.splice(0,1);
    }
    x.push(obj);
    keyid.push(uniqueid);
    localStorage.setItem("item1", JSON.stringify(x));
    localStorage.setItem("keyid", JSON.stringify(keyid));
    console.log(x[0].word);
    // btn.textContent = "delete";
    div1.classList.add("card");
    div1.id = uniqueid;
    font.className = "fa-solid fa-trash-can";
    h2.classList.add("name");
    p1.classList.add("text");
    btn.classList.add("btn3");
    addlist.querySelector("input[type=text]").value = "";
    
}

function deleteElement(e) {

    e.target.parentElement.parentElement.remove();

}












