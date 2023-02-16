const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  console.log(e);
  if (e.key === "Enter" && tagsEl.children.length !== 0) {
    randomSelect();
    e.target.value = "";
  }
});

console.log(tagsEl.children.length);

function createTags(input) {
  const arr = input
    .split(" ")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(arr);
  tagsEl.innerHTML = "";
  arr.forEach((element) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");

    tag.textContent = element;

    tagsEl.appendChild(tag);
  });
}

function randomSelect() {
  const time = 30;

  const interval = setInterval(() => {
    const randomEl = randomTag();
    if (randomEl !== undefined) {
      bg(randomEl);
    }

    setTimeout(() => {
      bgDelete(randomEl);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const randomEl = randomTag();

    bg(randomEl);
    console.log("SUKA");

    console.log(randomEl);
  }, 100 * time);
}

function randomTag() {
  const teg = document.querySelectorAll(".tag");
  return teg[Math.floor(Math.random() * teg.length)];
}

function bg(teg) {
  teg.classList.add("hightlight");
  console.log("ssss");
}

function bgDelete(teg) {
  teg.classList.remove("hightlight");
}
