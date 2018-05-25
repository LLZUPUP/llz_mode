window.onload = function() {
    var phone = {
        blue: 6,
        red: 4
    } 
    var color = document.querySelector("#cangku");
    var selectedColor = document.querySelector(".selectedColor");
    var inputNumber = document.querySelector("#inputNumber");
    var inputNum = document.querySelector(".inputNum");
    var button = document.querySelector(".button")
    color.onchange=function(e) {
        selectedColor.innerHTML = color.value;
    }
    inputNumber.oninput=function(e) {
        // console.log(phone.blue)
        inputNum.innerHTML='';
        var value = inputNumber.value;
        if(color.value=='blue'&&value>phone.blue){
            button.disabled=true;
            button.innerHTML='库存不足';
        }else if(color.value=='red'&&value>phone.red) {
            button.disabled=true;
            button.innerHTML='库存不足';
        }else if(value=='') {
            button.disabled=true;
            button.innerHTML='请输入正确的购买数量';
        }
        else{
            inputNum.innerHTML=value;
            button.disabled=false;
            button.innerHTML='加入购物车';
        }
    }
}