(function() {
    var xhr;
    document.getElementById("button").onclick = function () { makeRequest('Assignment5.json');
    };
function makeRequest (url) {
            xhr = new XMLHttpRequest();
            if(!xhr) {
                alert("Could not create and XMLHTTP instance");
                return false;
            }
            xhr.onreadystatechange = tableContents;
            xhr.open('GET', url);
            xhr.send(null);
        }
        function tablecContents() {
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    document.write(xhr.responseText);
                } else {
                    alert("There was a problem with the request.");
                }
            }
        }
    })