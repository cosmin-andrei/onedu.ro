function calculeaza() {
  let profit = parseFloat(document.getElementById("profit").value) || 0;
  let sumaSponsorizata = parseFloat(document.getElementById("suma-sponsorizata").value) || 0;

  let impozitPeProfit = profit * 0.16;
  let sumaDonare = 0.2 * impozitPeProfit - sumaSponsorizata;

  document.getElementById("circle-result").textContent = sumaDonare > 0 ? sumaDonare.toFixed(2) + " RON" : "0.00 RON";
}