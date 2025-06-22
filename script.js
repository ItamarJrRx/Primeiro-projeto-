function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img") // corrigido (p minúsculo)

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Meuassets/Profile.light.jpg")
  } else {
    img.setAttribute("src", "./Meuassets/Profile.dark.jpg") // corrigido
  }
}
