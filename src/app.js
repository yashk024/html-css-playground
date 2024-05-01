// get 'html' textarea element using ID
html = document.getElementById("html");

// get 'css' textarea element using ID
css = document.getElementById("css");

// get 'preview' iframe element using ID
preview = document.getElementById("preview");

preview.srcdoc = html.value;
preview.srcdoc = html.value + "<style>" + css.value + "</style>";

html.addEventListener("input", function () {
    preview.srcdoc = html.value;
});

css.addEventListener("input", function () {
    preview.srcdoc = html.value + "<style>" + css.value + "</style>";
});
