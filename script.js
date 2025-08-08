const grid = document.getElementById("color-grid");
const status = document.getElementById("status");

let selectedColor = null;

// Generate a full 30x18 grid
// Hue: 0–360 in 30 steps = every 12 degrees
// Lightness: 25% to 85% in 18 steps (to span full range with visibility)
for (let row = 0; row < 18; row++) {
  const lightness = 25 + (row * (60 / 17)); // from 25 to 85

  for (let col = 0; col < 30; col++) {
    const hue = col * 12; // 0 to 348

    const container = document.createElement("div");
    container.className = "color-cell";

    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    const hsl = `hsl(${hue}, 100%, ${lightness}%)`;
    swatch.style.backgroundColor = hsl;

    const label = document.createElement("div");
    label.className = "color-label";
    label.textContent = `H${hue} L${Math.round(lightness)}`;

    container.appendChild(swatch);
    container.appendChild(label);

    container.onclick = () => {
      selectedColor = { hue, lightness };
      status.textContent = `You picked: H${hue} L${Math.round(lightness)}%`;
    };

    grid.appendChild(container);
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
