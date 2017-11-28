var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var price = document.getElementById("price");
var btn = document.getElementById("button");
var form = document.querySelector("form");
var text = document.getElementById("text");
var time = document.getElementById("time");
var curr = "";

btn.addEventListener("click", function(event) {

    var formData = new FormData(form);
    for (const i of formData) {
        curr = i[1];
    }
    event.preventDefault();

    fetch(url)
        .then(function(res) {
            var data = res.json();
            return data;
        })
        .then(function(data) {
            price.innerHTML = data.bpi[curr].price;

        })
        .catch(function() {
            alert("Something went wrong");
            text.innerHTML = data.disclaimer;
            time.innerHTML = data.time.updated;
        })

})