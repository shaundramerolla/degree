const button = document.getElementById("button");
    button.onclick = function () { //event handler
        var xhr = new XMLHttpRequest(); //create XMLHttpRequest object
        xhr.onload = function () {
            if(xhr.status === 200) {
                responseObject = JSON.parse(xhr.responseText);
                var degreesContent = '';
                for (var i=0; i<responseObject.my_degrees.length; i++) {
                    degreesContent +='<thead>';
                    degreesContent +='<tr>School</tr>'
                        +responseObject.my_degrees[i].school
                        + '';
                    degreesContent +='<tr>Major</tr>'
                        +responseObject.my_degrees[i].major
                        + '';
                    degreesContent +='<tr>Type</tr>'
                        +responseObject.my_degrees[i].type
                        + '';
                    degreesContent +='<tr>Graduation</tr>'
                        +responseObject.my_degrees[i].graduation
                        + '';
                }
                document.getElementById("table").innerHTML = degreesContent;
            }
        };
        xhr.open('GET', 'Assignment5.json', true);
        xhr.send(null);
    }



