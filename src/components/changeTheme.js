export function changeTheme() {
  let redTheme = document.getElementsByClassName("red")[0];
  redTheme.onclick = () => {
    root.style.setProperty("--Background1", "rgb(255, 207, 207)");
    root.style.setProperty("--Background2", "rgb(255, 107, 107)");
    root.style.setProperty("--blockColor", "rgb(255, 107, 107)");
    root.style.setProperty("--headColor", "var(--bs-red)");
    root.style.setProperty("--hoverBorder", "var(--bs-danger-text-emphasis)");
    root.style.setProperty("--borderColor", "var(--bs-red)");
    root.style.setProperty("--shadowColor", "var(--bs-red)");
  };
  let blueTheme = document.getElementsByClassName("blue")[0];
  console.log(blueTheme);

  blueTheme.onclick = () => {
    root.style.setProperty("--Background1", "rgb(195, 195, 255)");
    root.style.setProperty("--Background2", "rgb(104, 104, 255)");
    root.style.setProperty("--blockColor", "rgb(104, 104, 255)");
    root.style.setProperty("--headColor", "var(--bs-blue)");
    root.style.setProperty("--hoverBorder", "var(--bs-primary-text-emphasis)");
    root.style.setProperty("--borderColor", "var(--bs-blue)");
    root.style.setProperty("--shadowColor", "var(--bs-blue)");
  };

  let orangeTheme = document.getElementsByClassName("orange")[0];
  orangeTheme.onclick = () => {
    root.style.setProperty("--Background1", "palegoldenrod");
    root.style.setProperty("--Background2", "orange");
    root.style.setProperty("--blockColor", "orange");
    root.style.setProperty("--headColor", "var(--bs-orange)");
    root.style.setProperty("--hoverBorder", "var(--bs-warning-text-emphasis)");
    root.style.setProperty("--borderColor", "var(--bs-orange)");
    root.style.setProperty("--shadowColor", "var(--bs-orange)");
  };

  let greenTheme = document.getElementsByClassName("green")[0];
  greenTheme.onclick = () => {
    root.style.setProperty("--Background1", "#b0ffe7");
    root.style.setProperty("--Background2", "#539481");
    root.style.setProperty("--blockColor", "rgb(12, 71, 20)");
    root.style.setProperty("--headColor", "var(--bs-teal)");
    root.style.setProperty("--hoverBorder", "var(--bs-green)");
    root.style.setProperty("--borderColor", "rgb(78, 193, 132)");
    root.style.setProperty("--shadowColor", "#189576aa");
  };
}
