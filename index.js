function loveCalculator(event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let secondName = document.getElementById("secondName").value;

  if (!firstName || !secondName) {
    document.getElementById("resultArea").innerHTML = "Por favor, digite ambos os nomes.";
    return;
  }

  const lovePercentage = Math.floor(Math.random() * 101);
  let Result = ("A compatibilidade entre " + firstName + " e " + secondName + " é de " + lovePercentage + "%");

  console.log(Result); 

  localStorage.setItem('loveResult', Result);
  localStorage.setItem('lovePercentage', lovePercentage);

  window.location.href = "segundoindex.html"; 
}


document.getElementById("loveButton").addEventListener("click", loveCalculator);