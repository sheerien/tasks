var baseApi = "https://api.github.com/users";
var rowApp = document.getElementById("app-row");
// create html template
function templateData(data) {
    return template = `<div class="col">
    <div class="app-img">
        <img src="${data.avatar_url}" alt="">
    </div>
    <div class="app-content">
        <div class="app-title">
            <h1>${data.login}</h1>
        </div>
    </div>
    </div>
    
    `;
}

function fetchData(url) {
    var req = new XMLHttpRequest();
    var temp = ""
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.response);
            for (var i = 0; i < data.length; i++) {
                temp += templateData(data[i])

            }
            rowApp.innerHTML = temp;
        }


    }

    req.open("GET", url);
    req.send();
}

window.onload = function() {
    fetchData(baseApi)
}