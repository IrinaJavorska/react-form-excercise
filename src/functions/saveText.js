const saveText = (text) => {
  // Vytvoření nového Blob objektu obsahujícího text z vašeho stavu.
  // Typ 'text/plain' označuje, že obsah blobu je prostý text.
  const blob = new Blob([text], { type: "text/plain" });
  // Vytvoření URL pro Blob objekt. Toto URL bude sloužit jako odkaz pro stahování.
  const fileDownloadUrl = URL.createObjectURL(blob);
  // Vytvoření nového 'a' elementu (odkazu), který budeme používat pro stahování.
  const link = document.createElement("a");
  link.href = fileDownloadUrl;
  link.download = "downloaded_text.txt"; // Název souboru
  // Přidání odkazu do dokumentu a simulace kliknutí pro spuštění stahování.
  document.body.appendChild(link);
  link.click(); // Iniciuje stahování
  // Odstranění odkazu z dokumentu po dokončení stahování.
  document.body.removeChild(link);
  // Uvolnění URL vytvořeného pro Blob objekt, aby se uvolnila systémová paměť.
  URL.revokeObjectURL(fileDownloadUrl);
};

export default saveText;
