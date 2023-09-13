var n = parseInt(prompt("Enter the number of values:"));
var total = 0;

for (var i = 0; i < n; i++) {
    var num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    total += num;
}

alert("The sum of the " + n + " numbers is: " + total);