function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar_light.png")
    img.setAttribute(
      "alt",
      "Foto profissional de Pedro Henrique sério, usando terno azul, camisa social branca, óculos quadrado de armação preta, cabelo cacheado castanho escuro e fundo bege."
    )
  } else {
    img.setAttribute("src", "./assets/Avatar_pH.png")
    img.setAttribute(
      "alt",
      "Foto Pedro Henrique sorrindo, usando camisa de esportes dry-fit preta, cabelo cacheado castanho escuro e fundo preto e amarelo."
    )
  }
}
