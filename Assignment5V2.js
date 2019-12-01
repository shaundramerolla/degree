(function() {
    var xhr;
    document.getElementById("button").onclick = function () { makeRequest('Assignment5.json');
    };
function makeRequest (https://shaundramerolla.github.io/degree) {
            xhr = new XMLHttpRequest();
            if(!xhr) {
                alert("Could not create and XMLHTTP instance");
                return false;
            }
            xhr.onreadystatechange = tableContents;
            xhr.open('GET', https://shaundramerolla.github.io/degree);
            xhr.send(null);
        }
        function tablecContents() {
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    console.log(xhr.responseText);
                } else {
                    alert("There was a problem with the request.");
                }
            }
        }
    })
