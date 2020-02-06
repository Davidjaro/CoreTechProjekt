var colors = [["#FFC371", "#FF5F6D"],["#9796f0","#fbc7d4"],["#BE93C5", "#7BC6CC"],["#2C3E50","#4CA1AF"],["#00C9FF","#92FE9D"],["#304352", "#d7d2cc"],["#F1F2B5","#135058"],["#D1913C","#FFD194"]];

var gradient = Math.floor(Math.random() * colors.length);

colors[gradient][0], colors[gradient][0]

document.getElementById("body").style.background = "linear-gradient(to bottom, " + colors[gradient][0] + " , " + colors[gradient][1] + ")";
document.getElementById("Design").style.background = "linear-gradient(to bottom, " + colors[gradient][0] + " , " + colors[gradient][1] + ")";
document.getElementById("CSS3").style.background = "linear-gradient(to bottom, " + colors[gradient][0] + " , " + colors[gradient][1] + ")";
document.getElementById("HTML5").style.background = "linear-gradient(to bottom, " + colors[gradient][0] + " , " + colors[gradient][1] + ")";
document.getElementById("contacting").style.background = "linear-gradient(to bottom, " + colors[gradient][0] + " , " + colors[gradient][1] + ")";
