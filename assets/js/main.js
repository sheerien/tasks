// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)

//     }
//     console.log("==========================")

// }

// for (let i = 1; i == 1; i++) {
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)

//     }
//     console.log("==========================")

// }


// var height = 8;
// var width = 8;
// var board = "";

// for (var y = 0; y < height; y++) {
//     if (y > 0) board += "\n";
//     for (var x = 0; x < width; x++) {
//         if ((x + y) % 2 == 0) {
//             board += "*";
//         } else {
//             board += "#";
//         }
//     }
// }

// console.log(board);

// var url =
//     "https://drive.google.com/file/d/1kltDqVgmmihmKdVIIhHxA8V53ORx_elh/view?usp=sharing";
// console.log(url);
// var dirct = "uc?export=download&id=";
// var url_split = url.split("/");
// console.log(url_split);
// var id = url_split[url_split.length - 2];
// console.log(id);
// var url_splice = url_split.splice(3, 3, dirct + id);
// var finesh = url_split.pop();
// console.log(url_split.join("/"));

// var url =
//     "https://drive.google.com/file/d/1r75xeVduCptKhMg4V4a-fhQLT_Q5Kv8J/view?usp=sharing";
// console.log(url);
// var dirct = "uc?export=download&id=";
// var url_split = url.split("/");
// console.log(url_split);
// var id = url_split[url_split.length - 2];
// console.log(id);
// var url_splice = url_split.splice(3, 3, dirct + id);
// var finesh = url_split.pop();
// console.log(url_split.join("/"));
var url = "https://reqres.in/api/users?page=2"
fetch(url)
    .then(response => response.json())
    .then(data => {
        var newData = data.data;
        for (let i = 0; i < newData.length; i++) {
            console.log((i + 1) + " - " + newData[i].email);

        }
    })