var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var price = document.getElementById("price");
var btn = document.getElementById("button");

var cur = document.getElementById("cur");
var text = document.getElementById("text");
var time = document.getElementById("time");
var alert = document.getElementById("alert");

var XHR = new XMLHttpRequest();

btn.addEventListener("click", function(event) {
    var priceTag = new FormData(document.querySelector("form"));
    if (!FormData) {
        alert.innerHTML = "Please select currency!"
    }
    var currency = "";
    for (const p of priceTag) {

        currency = p[1];

        cur.innerHTML = currency;

    }
    event.preventDefault();

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            console.log(data);
            console.log(data.bpi.USD.rate);
            var unitprice;
            var inr;
            if (currency == "INR") {
                unitprice = (data.bpi.USD.rate);


                unitprice = (rc(unitprice) * 64.43).toFixed(4);

            } else {
                unitprice = data.bpi[currency].rate;
            }
            price.innerHTML = unitprice;
            text.innerHTML = data.disclaimer;
            time.innerHTML = data.time.updated;
        }
    }

    XHR.open("GET", url, true);
    XHR.send();

})


function rc(unitprice) {
    console.log("x is " + unitprice);

    console.log(unitprice.length);
    var str = "";
    for (var i = 0; i < unitprice.length; i++) {
        if (unitprice[i] != ',') {
            str += unitprice[i];
            // console.log(unitprice[i]);
        }
    }

    str = parseFloat(str);
    return str;
}