let formele = document.getElementById("questionsForm");
let buttonele = document.getElementById("submitBtn");
let hydele = document.getElementById("cityHyderabad");
let chennaiele = document.getElementById("cityChennai");
let delhiele = document.getElementById("cityDelhi");
let mumbaiele = document.getElementById("cityMumbai");

let msgele = document.getElementById("resultMsg");

function tovalidateanswer() {
    if (delhiele.checked) {
        msgele.textContent = "Correct Answer";
        msgele.classList.add("correctstyle");
        msgele.classList.remove("errorstyle");
    } else if (chennaiele.checked || hydele.checked || mumbaiele.checked) {
        msgele.textContent = "Wrong Answer";
        msgele.classList.add("errorstyle");
        msgele.classList.remove("correctstyle");
    } else {
        msgele.textContent = "Please Select the answer";
        msgele.classList.add("errorstyle");
        msgele.classList.remove("correctstyle");
    }
}

formele.addEventListener("submit", function(event) {
    event.preventDefault();
    tovalidateanswer();
});
buttonele.addEventListener("change", tovalidateanswer);