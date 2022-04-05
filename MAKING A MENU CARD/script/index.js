
//for samosa  

var samosaArr = [];

var samosa = document.getElementById("samosa");

var samosaObj = {
    name:"samosa",
    image:"https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900",
}

samosaArr.push(samosaObj);

//for chickenfry

var chickenfryArr = [];

var chickenfry = document.getElementById("chickenfry");

var chickenfryObj = {
    name : "Chicken Fry",
    image : "https://i0.wp.com/swatisani.net/kitchen/wp-content/uploads/2014/11/1200px-Chicken_65_Dish.jpg",
}

chickenfryArr.push(chickenfryObj);

//for vegetable roll

var vegetablerollArr = [];

var vegetableroll = document.getElementById("vegetableroll");

var vegetablerollObj = {
    name : "Vegetable Roll",
    image : "https://www.manjulaskitchen.com/wp-content/uploads/vegetable_kathi_roll.jpg",
}

vegetablerollArr.push(vegetablerollObj);

// for burger

var burgerArr = [];

var burger = document.getElementById("burger");

var burgerObj = {
    name: "Burger",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_6MSd7NGZaZioS0cyfr6Y5bBuB7hxIogDQ&usqp=CAU",
}

burgerArr.push(burgerObj);

// for pasta

var pastaArr = [];

var pasta = document.getElementById("pasta");

var pastaObj = {
    name:"Pasta",
    image : "https://thebigmansworld.com/wp-content/uploads/2021/01/almond-flour-pasta4.jpg",
}

pastaArr.push(pastaObj);

// for sandwich

var sandwitchArr = [];

var sandwitch = document.getElementById("sandwitch");

var sandwitchObj = {
    name : "Sandwitch",
    image : "https://doonmemories.com/wp-content/uploads/2018/04/Grilled-Sandwitch.jpg",
};

sandwitchArr.push(sandwitchObj);

// for curd

var curdArr = [];

var curd = document.getElementById("curd");

var curdObj = {
    name : "Curd",
    image : "https://5.imimg.com/data5/DJ/OA/JR/SELLER-23947743/pure-curd-village-curd-no-artificial-only-natural-500x500.jpg",
};

curdArr.push(curdObj);

// for icecream

var icecreamArr = [];

var icecream = document.getElementById("icecream");

var icecreamObj = {
    name : "Ice Cream",
    image : "https://www.milkmaid.in/sites/default/files/2021-06/385x619-2.jpg",
}

icecreamArr.push(icecreamObj);

// for shondesh

var shondeshArr = [];

var shondesh = document.getElementById("shondesh");

var shondeshObj = {
    name : "Shondesh",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJ7yqhIHL4_LaOvIU8roe5RaMw0W6INQ7oA&usqp=CAU",
}

shondeshArr.push(shondeshObj);

// for hotcofee

var hotcofeeArr = [];

var hotcofee = document.getElementById("hotcofee");

var hotcofeeObj = {
    name : "Hot Cofee",
    image : "https://www.yesware.com/wp-content/uploads/2014/05/hot-coffee.jpg",
}

hotcofeeArr.push(hotcofeeObj);

// for coldcofee

var coldcofeeArr = [];

var coldcofee = document.getElementById("coldcofee");

var coldcofeeObj = {
    name : "Cold Cofee",
    image : "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
}

coldcofeeArr.push(coldcofeeObj);

// for milkshake

var milkshakeArr = [];

var milkshake = document.getElementById("milkshake");

var milkshakeObj = {
    name : "Milk Shake",
    image : "https://lifeloveandgoodfood.com/wp-content/uploads/2019/12/Mint-Chocolate-Chip-Milkshake_5663-sq.jpg",
}

milkshakeArr.push(milkshakeObj);

var checkbox = document.querySelectorAll(".checkbox");

async function orderFood()
{
    var time = Math.ceil(Math.random() *5000);
            console.log("time: ",time);
    var arr;
    if(samosa.checked == false && chickenfry.checked == false && vegetableroll.checked == false && burger.checked == false && pasta.checked == false && sandwitch.checked == false && curd.checked == false && icecream.checked == false && shondesh.checked == false && hotcofee.checked == false && coldcofee.checked == false && milkshake.checked == false)
    {
        alert("Please Order Something!!");
    }
    else
    {
        
        //for samosa

    
        if(samosa.checked === true)
        {
            var select_1 = "samosa";
            arr = samosaArr;
            var foodPomise = new Promise(function(resolve, reject){
                // var time = Math.ceil(Math.random() *5000);
                // console.log("time: ",time);
                if(time <= 1000 || time >= 4000)
                {
                    reject(append1());
                }
                else
                {                
                    if(select_1 === samosa.value)
                    {
                        setTimeout(function(){
                            resolve(append2(arr));
                        },time);
                    }                
                }
            }); 
            
            try{
                var res = await foodPomise;
                console.log("res",res);
            }
            catch(err){
                console.log("error",err);
            }
    
        }
    
         // for chickenfry
    
        if(chickenfry.checked === true)
        {
            var select_2 = "chickenfry";
            arr = chickenfryArr
            foodPomise = new Promise(function(resolve, reject){
                // var time = Math.ceil(Math.random() *5000);
                // console.log("time: ",time);
                if(time <= 1000 || time >= 4000)
                {
                    reject(append1());
                }
                else
                {                
                    if(select_2 === chickenfry.value)
                    {
                        setTimeout(function(){
                            resolve(append2(arr));
                        },time);
                    }                
                }
            }); 
            
            try{
                var res = await foodPomise;
                console.log("res",res);
            }
            catch(err){
                console.log("error",err);
            }
    
        }
        
            //for vegetable roll
    
            if(vegetableroll.checked === true)
            {
                var select_3 = "vegetableroll";
                arr = vegetablerollArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_3 === vegetableroll.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }
    
            // for burger

            if(burger.checked === true)
            {
                var select_4 = "burger";
                arr = burgerArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_4 === burger.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for pasta 

            if(pasta.checked === true)
            {
                var select_5 = "pasta";
                arr = pastaArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_5 === pasta.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for sandwitch

            if(sandwitch.checked === true)
            {
                var select_6 = "sandwitch";
                arr = sandwitchArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_6 === sandwitch.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for curd

            if(curd.checked === true)
            {
                var select_7 = "curd";
                arr = curdArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_7 === curd.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            //for icecream

            if(icecream.checked === true)
            {
                var select_8 = "icecream";
                arr = icecreamArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_8 === icecream.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for shondesh

            if(shondesh.checked === true)
            {
                var select_9 = "shondesh";
                arr = shondeshArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_9 === shondesh.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for hotcofee

            if(hotcofee.checked === true)
            {
                var select_10 = "hotcofee";
                arr = hotcofeeArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_10 === hotcofee.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for coldcofee

            if(coldcofee.checked === true)
            {
                var select_11 = "coldcofee";
                arr = coldcofeeArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_11 === coldcofee.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }

            // for milkshake

            if(milkshake.checked === true)
            {
                var select_12 = "milkshake";
                arr = milkshakeArr;
                foodPomise = new Promise(function(resolve, reject){
                    // var time = Math.ceil(Math.random() *5000);
                    // console.log("time: ",time);
                    if(time <= 1000 || time >= 4000)
                    {
                        reject(append1());
                    }
                    else
                    {                
                        if(select_12 === milkshake.value)
                        {
                            setTimeout(function(){
                                resolve(append2(arr));
                            },time+1000);
                        }                
                    }
                });
                
                try{
                    var res = await foodPomise;
                    console.log("res",res);
                }
                catch(err){
                    console.log("error",err);
                }        
            }
    }
    
    return false;
}

var append = document.getElementById("append");

function append1(){
    append.innerHTML = "";
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.src = "https://media.istockphoto.com/photos/sorry-we-are-closed-sign-board-hanging-on-door-of-cafe-picture-id1130208883?b=1&k=20&m=1130208883&s=170667a&w=0&h=m2b4rZDnyjv2M28rMWIoTjIsBPPPEFqAgD-_zgHA5oM=";

    div.append(image);
    append.append(div);

    return "Shop closed";
}



function append2(arr)
{
    
    arr.forEach(function(ele){
        append.innerHTML="";
        var num_p = document.createElement("p");
        num_p.setAttribute("id","num");
        var number = Math.ceil(Math.random()*12)+1;
        num_p.append(`Order NO: ${number}`);
        var data = document.createElement("div");
        data.setAttribute("id","orderplace");
        var data_1 = document.createElement("h5");
        data_1.textContent = "Order Placed!!";
        data.append(num_p,data_1);
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.setAttribute("id","div_p");
        var image = document.createElement("img");
        image.src = ele.image;
        var p = document.createElement("p");
        p.textContent=`Dish Name : ${ele.name}`;
        div2.append(p)
        div1.append(image);
        append.append(data,div1,div2);
    });
    return "You order ready!!";
}