function ArrayEvenSum() {
  let input = document.getElementById("comma-sep-values").value;
  let numbers = input.split(',').map(Number);
  let evenSum = numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
  document.getElementById("result").innerHTML = `Even Sum: ${evenSum}`;
}

function PasswordValidator() {
  let input = document.getElementById("password").value;
  let cntL = 0, cntU = 0, cntD = 0, cntS = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 'A' && input[i] <= 'Z') {
      cntU++;
    } else if (input[i] >= 'a' && input[i] <= 'z') {
      cntL++;
    } else if (input[i] >= '0' && input[i] <= '9') {
      cntD++;
    } else {
      cntS++;
    }
  }

  let result = document.getElementById('result1');
  if (cntL >= 1 && cntD >= 1 && cntS >= 1 && cntU >= 1) {
    result.innerHTML = `Password is Validated!! It's good!!`;
  } else {
    result.innerHTML = `Password is not Valid`;
  }
}