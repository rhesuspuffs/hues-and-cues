const grid = document.getElementById("color-grid");
const status = document.getElementById("status");

let selectedColor = null;

// generate a grid of 18x10 = 180 hues
for (let h = 0; h < 360; h += 20) {
  for (let l = 30; l <= 80; l += 10) {
    const cell = document.createElement("div");
    cell.className = "color-cell";
    cell.style.backgroundColor = `hsl(${h}, 100%, ${l}%)`;
    cell.dataset.h = h;
    cell.dataset.l = l;
    cell.onclick = () => {
      selectedColor = { h, l };
      status.textContent = `You picked: H=${h}, L=${l}`;
    };
    grid.appendChild(cell);
  }
}

function submitCue() {
  const cue = document.getElementById("cue-input").value;
  if (!cue) {
    alert("Enter a cue word!");
    return;
  }
  alert(`Cue submitted: ${cue} (now let others guess!)`);
}
