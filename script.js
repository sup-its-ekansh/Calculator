let screen = document.getElementById("value");
let ext = document.getElementById("EXTrow");
let ext1 = document.querySelectorAll(".EXTrow1");
console.log(ext1, 'xyz');
// let ext2 = document.getElementById("EXTrow2");

let buttons = document.querySelectorAll(".keys");
console.log(buttons, 'abc')
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function (event) {
    if (event.target.innerHTML === "=") {
      try {
        string = eval(string);
        screen.value = string;
      } catch (error) {
        screen.value = "ERROR";
      }
    } else if (event.target.innerHTML === "DEL") {
      string = screen.value.slice(0, -1);

      screen.value = string;
    } else if (event.target.innerHTML === "AC") {
      string = "";
      screen.value = string;
    } else if (event.target.innerHTML === "X") {
      string += "*";
      screen.value = string;
    } else if (event.target.innerHTML == "SIN") {
      if (string == "") {
        window.alert("ENTER VALUE FIRST");
      }
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.sin(x);
      string = screen.value;
    } else if (event.target.innerHTML == "COS") {
      if (string == "") {
        window.alert("ENTER VALUE FIRST");
      }
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.cos(x);
      string = screen.value;
    } else if (event.target.innerHTML == "TAN") {
      if (string == "") {
        window.alert("ENTER VALUE FIRST");
      }
      var x = eval(screen.value);
      x = (x * Math.PI) / 180;
      screen.value = Math.tan(x);
      string = screen.value;
    } else if (event.target.innerHTML === "LOG") {
      if (string == "") {
        window.alert("enter value first");
      }
      var x = eval(screen.value);
      screen.value = Math.log10(x);
      string = screen.value;
    } else if (event.target.innerHTML === "ln") {
      if (string == "") {
        window.alert("enter value first");
      }
      var x = eval(screen.value);
      screen.value = Math.log(x);
      string = screen.value;
    } else if (event.target.innerHTML === "π") {
        screen.value= Math.PI;
      
    } else if (event.target.innerHTML === "(^)") {
      if (string == "") {
        window.alert("enter value first");
      }
      var x = eval(screen.value);
      screen.value = Math.log10(x);
      string = screen.value;
    } else if (event.target.innerHTML === "²√") {
      if (string == "") {
        window.alert("enter value first");
      }
      var x = eval(screen.value);
      screen.value = Math.sqrt(x);
      string = screen.value;
    } else if (event.target.innerHTML === "EXT") {
      if (ext.style.display === "none") {
        ext.style.display = "inline";
        ext1.style.display = "inline";
        // ext2.style.display = "inline";
      } else {
        ext1.style.display = "none";
        // ext2.style.display = "none";

        ext.style.display = "none";
      }
    } else {
      string += event.target.innerHTML;
      screen.value = string;
    }
  });
});
