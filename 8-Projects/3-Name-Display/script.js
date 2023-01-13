const name = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");

const generateName = () => {
  if (name.value === "") {
    return null;
  }
  const div = document.createElement("div");
  div.innerText = `Hi ! I am ${name.value}`;
  div.setAttribute("class", "tag");
  tagsContainer.append(div);
};
