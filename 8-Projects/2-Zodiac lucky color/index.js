const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBg = () => {
  switch (zodiac.value) {
    case "Aries":
      body.style.backgroundColor = "red";
      break;
    case "Taurus":
      body.style.backgroundColor = "green";
      break;
    case "Gemini":
      body.style.backgroundColor = "yellow";
      break;
    case "Cancer":
      body.style.backgroundColor = "#FFFDD0";
      break;
    case "Leo":
      body.style.backgroundColor = "gold";
      break;
    case "Virgo":
      body.style.backgroundColor = "brown";
      break;
    case "Libra":
      body.style.backgroundColor = "pink";
      break;
    case "Scorpio":
      body.style.backgroundColor = "Black";
      break;
    case "Sagittarius":
      body.style.backgroundColor = "purple";
      break;
    case "Capricorn":
      body.style.backgroundColor = "grey";
      break;
    case "Aquarius":
      body.style.backgroundColor = "blue";
      break;
    case "Pisces":
      body.style.backgroundColor = "green";
      break;

    default:
      body.style.backgroundColor = "white";
      break;
  }
};
