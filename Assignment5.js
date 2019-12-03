const button = document.getElementById("button");
    button.onclick = function () { //event handler
        var xhr = new XMLHttpRequest(); //create XMLHttpRequest object
        xhr.onload = function () {
            if(xhr.status === 200) {
                responseObject = JSON.parse(xhr.responseText);
                }
                document.write(responseObject);
            }
        };
        xhr.open('GET', 'Assignment5.json', true);
        xhr.send(null);
