
function draw() {
    // Params
    var row = parseInt(document.getElementById("row").value);
    var columns = parseInt(document.getElementById("columns").value);
    var drawArea = document.getElementById("chess"); 
    let setcolor = getRandomColor();
    // Call (Async) Function
    drawArea.innerHTML = "Please wait for a second....";
    // Normal function call
    // setTimeout(function(){        
    //     processDraw(row, columns, drawArea);
    // },500);

    // Arrow function call
    setTimeout(() => {processDraw(row, columns, drawArea,"brown")}, 500);
    clearTimeout();
    setInterval(function() 
    {processDraw(row,columns,drawArea,setcolor)},2000);
}

function processDraw(row, columns, drawArea,colorDraw){
    
    drawArea.innerHTML = "";
    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= columns; j++){
            if( j == 1 || j == columns || i == 1 || i == row)
                drawArea.innerHTML = drawArea.innerHTML + "<button style='background-color: " + colorDraw +";'>"+j+"</button>";
            else
                drawArea.innerHTML = drawArea.innerHTML + "<button>"+j+"</button>";
        }
        drawArea.innerHTML = drawArea.innerHTML + "</br>";
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    //document.getElementById("color").innerHTML = "<button style='background-color: "+ color + ";'" + color + "</button>";
   //console.log(color);
  }