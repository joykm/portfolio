var apiKey = "2ef800681313df980f1caa85997c2cfb";

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons(){
    document.getElementById('postSubmit').addEventListener("click", function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var postInput = document.getElementById("postInput");
        
        req.open("POST", "http://httpbin.org/post", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener('load', function() {
            if(req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById("postOutput").innerText = response.data;
            } else {
                console.log("Error in network request: " + req.statusText);  
            }
        });
        req.send(postInput.value);
        document.getElementById('postInput').value = "";
    });
}