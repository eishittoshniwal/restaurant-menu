var menu=[]
function add() {
    item=document.getElementById("food_input").value;
    menu.push(item)
    document.getElementById("output").innerHTML=menu
    document.getElementById("food_input").value=""
}