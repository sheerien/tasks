var rowApp = document.getElementById("app-row");
var btnMore = document.getElementById("btn");
var btnLess = document.getElementById("btnn");

// create html template
function templateData(data) {
    return template = `<div class="col">
    <div class="app-img">
        <img src="${data.avatar}" alt="">
    </div>
    <div class="app-content">
        <div class="app-title">
            <h1>${data.first_name}</h1>
        </div>
        <div class="app-desc">
            <p>
                ${data.email}
            </p>
        </div>
    </div>
    </div>
    
    `;
}

// get data from api

function fetchData(rowDiv, pageNumber) {
    var req = new XMLHttpRequest();
    var temp = ""
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            var jsonData = JSON.parse(req.response);
            var data = jsonData.data;
            for (let i = 0; i < data.length; i++) {
                temp += templateData(data[i])

            }
            rowDiv.innerHTML = temp;
        }


    }

    req.open("GET", "https://reqres.in/api/users?page=" + pageNumber, true);
    req.send();
}

// show data from first page 
window.onload = function() {
    fetchData(rowApp, 1)
}

// show data from second page 
btnMore.addEventListener("click", function() {
    var rowAppMore = document.getElementById("app-row-mor");
    rowAppMore.style.display = "flex"
    fetchData(rowAppMore, 2)
})

// hide second page
btnLess.addEventListener("click", function() {
    var rowAppMore = document.getElementById("app-row-mor");
    rowAppMore.style.display = "none"

})