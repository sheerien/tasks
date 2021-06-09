var baseApi = "https://api.github.com/users";
var rowApp = document.getElementById("app-row");
var boxPopup = document.getElementById("box-popup");
var popup = document.getElementById("popup");
var req = new XMLHttpRequest();
// var data = []
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


function fetchAllData(req, tempHtml, url) {
    // var req = new XMLHttpRequest();
    var temp = ""
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.response);
            for (var i = 0; i < data.length; i++) {
                temp += templateData(data[i])


            }
            tempHtml.innerHTML = temp;
            var tagElements = document.getElementsByTagName("h1")
            var tagArray = Array.from(tagElements);
            for (let i = 0, len = tagArray.length; i < len; i++) {
                tagArray[i].addEventListener("click", getInfo);
            }
        }
    }

    req.open("GET", url);
    req.send();
}


function getInfo(e) {
    console.log(e.target.textContent);
    try {
        fetchUserData(req, baseApi, e.target.textContent);

    } catch (error) {
        console.log(error)
    }

}

function fetchUserData(req, url, userName) {
    // var userReq = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            var personData = JSON.parse(req.response);
            console.log(personData);
            // boxPopup.style.transform = "scale(1, 1)"
            // popup.style.backgroundImage = `url(${personData.avatar_url})`
        }
    }
    console.log(`${url}/${userName}`)
    req.open("GET", `${url}/${userName}`);
    req.send();
}

(function() {
    fetchAllData(req, rowApp, baseApi)

})();