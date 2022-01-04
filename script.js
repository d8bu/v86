
const title = document.getElementsByTagName('title');
title[0].innerHTML = Math.random().toString(16).substr(2, 8);

function getInputValue() {
    let inputVal = document.getElementById("inputId").value,
        get = md5(inputVal),
        div = document.getElementById('textId');

    div.textContent = `${(get.substr(0, 14))}Q!`;
}

document.getElementById("copyBtn")
        .onclick = function() {
          let text = document.getElementById("textId").value;
          navigator.clipboard.writeText(text)
            .then(() => {
            // Получилось!
          });
}