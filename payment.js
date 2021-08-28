    var book = document.getElementById("booking");
    book.innerText = "";
    book.innerText = "Booking id :  " + Math.floor((Math.random() * 600000));

    var total_rs = document.getElementById("total").innerHTML.split(" ");
    var total_join = total_rs[1].split(",").join("")
    var total = Number(total_join)

    function zoomnew() {
        var final = total - total * 0.3
        total = final
        var total_pay = document.getElementById("total").innerHTML = `₹ ${total}`
        localStorage.setItem("total_payable", total_pay)


    }
    let payment_total = document.getElementById("pa");
    payment_total.innerText = "1295";


    function zoomnew() {
        var final = total - total * 0.3
        total = final
        var total_pay = document.getElementById("total").innerHTML = `₹ ${total}`
        localStorage.setItem("total_payable", total_pay)


    }



    function pay() {
        event.preventDefault();
        var card_number = document.getElementById("card_number").value;
        var card_cvv = document.getElementById("card_CVV").value;
        if ((card_number !== "") && ((card_cvv !== "")) && ((document.getElementById("card_expiry").value !== ""))) {
            document.getElementById("submit").style.backgroundColor = "chocolate"

        }
        if (card_number.length < 12 || card_number == "") {
            alert("Please Enter Valid Card Number");
            return false;
        } else if (card_cvv.length > 3 || card_cvv == "") {
            alert("Please Enter Valid CVV");
            return false;
        }


        setTimeout(function() {
            alert(`Your payment is successful.
                     Enjoy the Ride.`)
            window.location.href = "home.html";
        }, 3000);


    }