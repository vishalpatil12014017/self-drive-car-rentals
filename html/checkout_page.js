let db_arr_2=localStorage.getItem("pick_drop_points")
        var new_db_location=JSON.parse(db_arr_2)
        document.querySelector(".pick_city").innerText=new_db_location[0].p_city
        document.querySelector(".drop_city").innerText=new_db_location[0].d_city
        document.querySelector(".d_point_car").innerText=new_db_location[0].d_location
        document.querySelector(".p_point_car").innerText=new_db_location[0].p_location
document.querySelector(".left_date").innerText=new_db_location[0].p_date
        document.querySelector(".right_date").innerText=new_db_location[0].d_date
        document.querySelector(".p_day").innerText=new_db_location[0].p_month
        document.querySelector(".d_day").innerText=new_db_location[0].d_month
        document.querySelector(".s_time_date").innerText=new_db_location[0].p_time
        document.querySelector(".e_time_date").innerText=new_db_location[0].d_time
    let db_arr=localStorage.getItem("car_cart")
    let db_cart=JSON.parse(db_arr)
    console.log(db_cart);
    
     var total_join = db_cart[1].split(",").join("")
   
    let total=Number(total_join)
    total=total+2499
    
    console.log(total);
    document.getElementById("total").innerText= `₹ ${total}`
    function zoomnew() {
        var final = total - total*0.3 
        total = final
        total_pay=total
        document.getElementById("total").innerText = `₹ ${total}`

        localStorage.setItem("total_payable", total_pay)
    
        
    }
    
   let div_car=document.getElementById("car_img")
   let car_img=document.createElement("img")
   car_img.src=db_cart[2]
   car_img.setAttribute("class","car_img_prop")
   div_car.append(car_img)
   let price_car=document.getElementById("price_car")
   price_car.innerText=db_cart[1] 
   let car_name=document.querySelector(".Car_details")
   car_name.innerText=db_cart[0]
   