const fs = require("fs");

// ==========================1. 2. 3. DATEI ASYNCRON ERSTELLEN =============================

fs.writeFile("blog1.txt", "Hallo Elvira warum so spät", (err) => {
  if (err) {
    console.log("Achtung! Du hast einen Fehler. Einen Error!");
  }
  console.log(
    "blog1.text erfolgreich angelegt. Nils du bist einfach nur geil!"
  );
});

fs.writeFile(
  "blog2.txt",
  "Was ist denn bitte hier los. Programmieren ist der absolute Hammer",
  (err) => {
    if (err) {
      console.log("Fehler . Fehler");
    }
    console.log("blog2.txt ist erfolgreich erstellt worden.");
  }
);

// ===================4. Ordner erstellen ===============

fs.mkdir("./assets", (err) => {
  if (err) {
    console.log("Fehler deine Css datein wrude nicht erstellt.");
  }
  console.log(
    "Ich bin deine Hammer geile css datei, womit du deine Visualisationen coden kannst ;)."
  );
});

// =================== 5. Ordner löschen ===============

fs.rmdir("./assets", (err) => {
  if (err) {
    console.log("Es wurde leider nicht gelöscht.");
  }
  console.log("Erfolgreiche Löschung der Datei.");
});

// =================== 6.  Datei delete.txt erstellen ===============
fs.writeFile("delete.txt", "hallo", (err) => {});

// =================== 7.  Datei delete.txt löschen ===============

fs.unlink("delete.txt", (err) => {});

// =================== 8.1.  Datei Hello.txt erstellen ===============

fs.writeFile("Hello.txt", "Es folgt weiterer Text.", (err) => {});

// =================== 8.2  Datei Hello.txt umbenennen ===============

fs.rename("Hello.txt", "HelloWorld.txt", (err) => {});

fs.rename("HelloWorld.txt", "HelloWorld111.txt", (err) => {});
