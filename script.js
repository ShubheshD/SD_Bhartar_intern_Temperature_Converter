const calcTemp = () => {
    const inp = document.getElementById("in").value;
    const temp = document.getElementById("conv_op");
    const conv = conv_op.options[temp.selectedIndex].value;
  
    const celToFah = (cel) => {
      let fahrenheit = ((cel * 9) / 5) + 32;
      return fahrenheit;
    };
  
    const fehToCel = (feh) => {
      let celcius = ((fehr - 32) * 5) / 9 + 32;
      return celcius;
    };
  
    let result = 0;
  
    if (conv == "cel") {
      result = celToFah(inp);
      document.getElementById("result").innerHTML = "= " + result + " Fahrenheit";
    } else {
      result = fehToCel(inp);
      document.getElementById("result").innerHTML = "= " + result + "Celsius";
    }
  };
  