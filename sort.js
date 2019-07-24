var array = new Array();
var sophantu ;
function test(){
    //console.log(document.getElementById("1").value);
    for(let i=0; i<array.length; i++)
    {
        console.log(array[i]);
    }
}
function inputN(){
     //var dataRecv = document.getElementById("cacphantu").value;
    //array = ( dataRecv.split(","));
    sophantu = parseInt((document.getElementById("sophantu").value));
    for(let i =0 ; i<sophantu; i++)
    {
        
        document.getElementById("inputNumber").innerHTML += "<p>Nhập phần tử thứ " + (i+1) + "</p>" + "<input type=text id=" + i + ">";
    }
}
function confirm(){
    for(let i=0; i<sophantu; i++)
    {
        array[i] = document.getElementById(i).value;
    }
}

function sortInc(){
    document.getElementById("sortIncResult").innerText = "";
    for(i=0; i< array.length-1;i++)
    {
        let min_pos = i;
        for(j=i+1;j< array.length;j++)
        {
            if(array[j] < array[min_pos])
                min_pos = j 
        } 
        let temp = array[min_pos];
        array[min_pos] = array[i];
        array[i]=temp;
       // swap(array[min_pos],array[i]);
    }
    for(let k =0; k <array.length;k++)
    {
        document.getElementById("sortIncResult").innerText += (" " + array[k]);
    }
}

function sortDec(){
    document.getElementById("sortDecResult").innerText = "";
    for(i=0; i< array.length-1;i++)
    {
        let max_pos = i;
        for(j=i+1;j< array.length;j++)
        {
            if(array[j] > array[max_pos])
                max_pos = j 
        } 
        let temp = array[max_pos];
        array[max_pos] = array[i];
        array[i]=temp;
       // swap(array[min_pos],array[i]);
    }
    for(let k =0; k <array.length;k++)
    {
        document.getElementById("sortDecResult").innerText += (" " + array[k]);
    }
}
function minFind(){
    let min = array[0];
    for(let i =0; i<array.length;i++)
    {
        
        if(min > array[i])
        {
            min = array[i];
        }
    }
    document.getElementById("minFindResult").innerText = min;
}

function maxFind(){
    let max = array[0];
    for(let i =0; i<array.length;i++)
    {
        if(max < array[i])
        {
            max = array[i];
        }
    }
    document.getElementById("maxFindResult").innerText = max;
}

function sortIncChan(){
    document.getElementById("sortIncChanResult").innerText = "";
    for(i=0; i< array.length-1;i++)
    {
        let min_pos = i;
        for(j=i+1;j< array.length;j++)
        {
            if(array[j] < array[min_pos])
                min_pos = j 
        } 
        let temp = array[min_pos];
        array[min_pos] = array[i];
        array[i]=temp;
       // swap(array[min_pos],array[i]);
    }
    for(let k =0; k <array.length;k++)
    {
        if(array[k] %2 == 0)
        {
          document.getElementById("sortIncChanResult").innerText += (" " + array[k]);
        }
    }
}


function sortIncLe(){
    document.getElementById("sortIncLeResult").innerText = "";
    for(i=0; i< array.length-1;i++)
    {
        let min_pos = i;
        for(j=i+1;j< array.length;j++)
        {
            if(array[j] < array[min_pos])
                min_pos = j 
        } 
        let temp = array[min_pos];
        array[min_pos] = array[i];
        array[i]=temp;
       // swap(array[min_pos],array[i]);
    }
    for(let k =0; k <array.length;k++)
    {
        if(array[k] %2 != 0)
        {
          document.getElementById("sortIncLeResult").innerText += (" " + array[k]);
        }
    }
}


function swap(a,b)
{
    let temp = a;
    a=b;
    b=temp;
}