const notes = $(".notes-box");

function addNotes() {
  let para = $("<p></p>");
  let img = $("<img></img>");
  para.addClass("input-box");
  para.attr("contenteditable", "true");
  img.attr("src", "./images/delete.png");
  notes.append(para.append(img));

  saveNotes();

  img.click(function () {
    para.remove();

    saveNotes();
  });
}

function saveNotes() {
  const noteTextArray = notes
    .find(".input-box")
    .map(function () {
      return $(this).text();
    })
    .get();
  console.log(noteTextArray);
  localStorage.setItem("notes", JSON.stringify(noteTextArray));
}

function loadNotes() {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    const noteTextArray = JSON.parse(storedNotes);
    noteTextArray.forEach(function (noteText) {
      let para = $("<p></p>");
      let img = $("<img></img>");
      para.addClass("input-box");
      para.attr("contenteditable", "true");
      para.text(noteText);
      img.attr("src", "./images/delete.png");
      notes.append(para.append(img));

      img.click(function () {
        para.remove();
        saveNotes();
      });
    });
  }
}

$("#create-notes-btn").click(addNotes);

$("#save").click(saveNotes);

loadNotes();
