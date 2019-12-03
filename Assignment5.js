const button = document.getElementById("button");
    button.onclick = function () { //event handler
        var xhr = new XMLHttpRequest(); //create XMLHttpRequest object
        xhr.onload = function () {
            if(xhr.status === 200) {
                responseObject = JSON.parse(xhr.responseText);
                var degreesContent = '';
                for (var i=0; i<responseObject.my_degrees.length; i++) {
                    degreesContent += '<td></td>'
                    degreesContent += responseObject.my_degrees[i].school;
                    degreesContent += '<td></td>'
                    degreesContent += responseObject.my_degrees[i].major;
                    degreesContent += '<td></td>'
                    degreesContent += responseObject.my_degrees[i].type;
                    degreesContent += '<td></td>'
                    degreesContent += responseObject.my_degrees[i].graduation;
                }
                document.getElementById("empty").innerHTML = degreesContent;
            }
        };
        xhr.open('GET', 'Assignment5.json', true);
        xhr.send(null);
    }
