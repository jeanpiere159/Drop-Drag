const items = document.querySelectorAll(".list");
const left = document.getElementById("left");
const right = document.getElementById("right");

for (const item of items) {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", item.id);
  });

  item.addEventListener("dragend", (e) => {
    item.removeEventListener("dragstart", item.dragStart);
  });
}

right.addEventListener("dragover", (e) => {
  e.preventDefault();
});

right.addEventListener("drop", (e) => {
  e.preventDefault();
  const itemId = e.dataTransfer.getData("text");
  const item = document.getElementById(itemId);
  if (item) {
    right.appendChild(item);
  } else {
    console.error(`No se encontró un nodo con el ID ${itemId}`);
  }
});

left.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "none";
});

left.addEventListener("drop", (e) => {
  e.preventDefault();
  return false;
});
