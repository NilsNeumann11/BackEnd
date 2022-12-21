const fs = require("fs");
// const data = require("./arraywithobjects.json");
// console.log(data);

// fs.writeFile("./arraywithobjects.txt", data, () => {
//   if (err) {
//     console.log("Du hast verkackt!");
//   }
//   console.log("Die Textdatei wurde erstellt.");
// }); //
//Datei ist nicht vorhanden
//Datei ist vorhanden

// ==================== die Json einlesen und darauf zugreifen =========
fs.readFile("arraywithobjects.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  // ==================== ein buffer kommt heraus =========

  const string = data.toString("utf-8");
  console.log(string);
  // ==================== WIr schreiben jetzt das ergebnis in eine von uns erstellte Textdatei=========

  //   fs.writeFile("arraywithobjects.txt", string, (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(
  //       "arraywithobjects.txt wurde erfolgreich mit Reichtum erstellt."
  //     );
  //   });
  const replaceZeichen = string.replace(/"/g, "");
  const replaceklammern = replaceZeichen.replace(/{/g, "");
  const replaceklammern2 = replaceklammern.replace(/}/g, "");
  const endversion = replaceklammern2.replace(/,/g, "");
  console.log(endversion);

  fs.writeFile("./arraywithobjects.txt", endversion, () => {
    if (err) {
      console.log("Du hast verkackt!");
    }
    console.log("Die Textdatei wurde erstellt.");
  });
});
