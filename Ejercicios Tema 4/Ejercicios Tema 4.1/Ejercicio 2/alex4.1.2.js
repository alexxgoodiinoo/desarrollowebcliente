function savePreferences() {
  const tema = document.getElementById("themeSelector").value;
  const fuente = document.getElementById("fontSizeSelector").value;
  const idioma = document.getElementById("languageSelector").value;
  localStorage.setItem("tema", tema);
  localStorage.setItem("fuente", fuente);
  localStorage.setItem("idioma", idioma);
  const preferences = {
    theme: tema,
    fontSize: fuente,
    language: idioma,
  };
  localStorage.setItem("preferences", JSON.stringify(preferences));
  applyPreferences(preferences);
}