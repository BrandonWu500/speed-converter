const mph = document.getElementById('mph');
const kph = document.getElementById('kph');

mph.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  kph.value = (val * 1.60934).toFixed(2);
});

kph.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  mph.value = (val / 1.60934).toFixed(2);
});
