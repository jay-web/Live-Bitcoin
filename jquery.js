var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var price = document.getElementById("price");

var cur = document.getElementById("cur");
var text = document.getElementById("text");
var time = document.getElementById("time");

var form = document.querySelector("form");
var curr = "";

$("#button").click(function(event) {

    var formData = new FormData(form);
    for (const i of formData) {
        curr = i[1];
    }
    event.preventDefault();

    $.ajax({
            method: "GET",
            url: url,
            dataType: "json"
        })
        .done(function(data) {
            price.innerHTML = data.bpi[curr].price;
            cur.innerHTML = curr;
            text.innerHTML = data.disclaimer;
            time.innerHTML = data.time.updated;
        })
        .fail(function() {
            alert("Something went Wrong");
        })
})