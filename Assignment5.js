const button = document.getElementById("button");
    button.onclick = function () { //event handler
        var xhr = new XMLHttpRequest(); //create XMLHttpRequest object
        xhr.onload = function () {
            if(xhr.status === 200) {
                responseObject = JSON.parse(xhr.responseText);
                var column = [];
                for (var i=0; i<responseObject.my_degrees.length; i++) {
                    for (var col in responseObject[i]){
                        if (column.indexOf(col) === -1) {
                            column.push(col);
                        }
                    }
                }
                var table = document.createElement("table");
                var tr = table.insertRow(-1);
                for (var i=0; i<column.length; i++){
                    var th = document.createElement("th");
                    th.innerHTML = column[i];
                    tr.appendChild(th);
                }          
                for (var i=0; i<responseObject.my_degrees.length; i++){
                    tr=table.insertRow(-1);
                    for (var c=0; c<column.length; c++){
                        var cell = tr.insertCell(-1);
                        cell.innerHTML = responseObject[i][column[c]]
                    }
                }
                return table;
            }
        };
        xhr.open('GET', 'Assignment5.json', true);
        xhr.send(null);
    }
