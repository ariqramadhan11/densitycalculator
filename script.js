function calculateDensity() {
  // Ambil nilai massa dan volume dari input
  const mass = parseFloat(document.getElementById("mass").value);
  const volume = parseFloat(document.getElementById("volume").value);

  // Validasi input
  if (isNaN(mass) || isNaN(volume) || volume === 0) {
    alert("Masukkan nilai massa dan volume yang valid.");
    return;
  }

  // Hitung densitas
  const density = mass / volume;

  // Tampilkan hasil
  document.getElementById("density").textContent = density.toFixed(2) + " kg/m³";
}