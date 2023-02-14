function Calculate(event) {
  // Previne o JavaScript de recarregar a página
  event.preventDefault();

  let bill = document.getElementById("value").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let people = document.getElementById("people").value;

  if ((people == "") | (people <= 1)) {
    people = 1;
    document.getElementById("each").display = "none";
  } else {
    document.getElementById("each").display = "block";
  }

  let total = (bill * serviceQual) / people;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
  document.getElementById("each").innerHTML = people;
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("each").style.display = "block";

  //   // Estrutura de Condicional para teste (funcionou +/-)
//   if ((bill == "") | (people == "")) {
//     alert("Preencha todos os campos");
//   }
}

//Faz o texto da linha de resultado desaparecer
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", Calculate);
