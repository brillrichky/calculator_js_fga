const res = document.getElementById("result");

function calculate(value) {
  try {
    eval(value);
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "ERROR";
      setTimeout(() => {
        res.value = "";
      }, 700);
    } else {
      res.value = calculatedValue;
    }
  } catch (error) {
    res.value = "ERROR";
      setTimeout(() => {
        res.value = "";
      }, 700);
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}
