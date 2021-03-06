var baseApi = "https://api.github.com/users";
var rowApp = document.getElementById("app-row");
var boxPopup = document.getElementById("box-popup");
var popup = document.getElementById("popup");
var req = new XMLHttpRequest();


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
    var temp = ""
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.response);
            for (var i = 0; i < data.length; i++) {
                temp += templateData(data[i])
            }
            tempHtml.innerHTML = temp;
            var tagElements = document.getElementsByTagName("h1");
            var tagArray = Array.from(tagElements);
            for (let i = 0, len = tagArray.length; i < len; i++) {
                tagArray[i].addEventListener("click", getInfo);
            }

            var tagImages = document.getElementsByTagName("img");
            imgArray = Array.from(tagImages);
            for (let i = 0, len = imgArray.length; i < len; i++) {
                imgArray[i].addEventListener("click", getImages)

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

function getImages(e) {
    console.log(e.target.src)
    boxPopup.style.transform = "scale(1, 1)"
    popup.style.backgroundImage = `url(${e.target.src})`
    indexTargetImage = 0
    indexTargetImage = imgArray.indexOf(e.target);
    // console.log(indexTargetImage)

    var closeWindow = document.getElementById("close");
    var leftWindow = document.getElementById("left");
    var rightWindow = document.getElementById("right");
    closeWindow.addEventListener("click", closeWin)
    leftWindow.addEventListener("click", goBack)

    rightWindow.addEventListener("click", goNext)
}

function closeWin() {

    boxPopup.style.transform = "scale(0, 0)"
}

function goBack(e) {
    indexTargetImage--
    if (indexTargetImage < 0) {
        indexTargetImage = imgArray.length - 1
    }
    popup.style.backgroundImage = `url(${imgArray[indexTargetImage].src})`
}


function goNext(e) {
    indexTargetImage++
    if (indexTargetImage == imgArray.length) {
        indexTargetImage = 0
    }
    popup.style.backgroundImage = `url(${imgArray[indexTargetImage].src})`
}

document.addEventListener("keydown", keysOptions)

function keysOptions(e) {
    // console.log(e.key);
    switch (e.key) {
        case "ArrowRight":
            goNext(e)
            break;
        case "ArrowLeft":
            goBack(e)
            break;
        case "Escape":
            closeWin(e)
            break;
        case " ":
            closeWin(e)
            break;

        default:
            break;
    }
    // ArrowRight - ArrowLeft - Escape - " "

}

(function() {
    fetchAllData(req, rowApp, baseApi)

})();