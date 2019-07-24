function Cal() {
    var A = parseFloat(document.getElementById("soA").value);
    var B = parseFloat(document.getElementById("soB").value);
    var C = parseFloat(document.getElementById("soC").value);
    var sum = A+B+C;
    document.getElementById("result").value = "Kết quả = " + sum;
}