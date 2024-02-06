document.getElementById("submit-button").addEventListener("click",submitForm);



document.getElementById("input-results-box").addEventListener("click", function(event) {
    if (event.target.id === "label") {
        switchPage();
    }
    if (event.target.id === "box-click"){
        expantion();
    }
});


document.getElementById("nav-bar").addEventListener("click", function(event) {
    if (event.target.id === "economic") {
        ClickedHighlight("economic");
    }
    if (event.target.id === "defence"){
        ClickedHighlight("defence");
    }
    if (event.target.id === "environmental"){
        ClickedHighlight("environmental");
    }
    if (event.target.id === "transportation"){
        ClickedHighlight("transportation");
    }
    if (event.target.id === "other"){
        ClickedHighlight("other");
    }
});



function ClickedHighlight(Eid){
    var ele1 = document.getElementById(Eid);
    
    if (ele1.classList.contains("clickedHighlight")){
        ele1.classList.remove("clickedHighlight");
    }else{
        ele1.classList.add("clickedHighlight");

    }
}


function test(){
    document.getElementById("three").innerText = "hello";
}

function switchPage(){
    window.location.href ='/myapp/adv';

}

function expantion(){
    // var inputbox = document.getElementById("label-");

}


function submitForm() {
    var inputbox = document.getElementById("input-results-box");
    // Get the value from the input field
    var linkValue = document.getElementById("link-ins").value;
    ajaxtest(linkValue);

    var box = document.createElement("div");
    box.classList.add("box")
    box.id = "box-click";

    var label = document.createElement("label");
    label.innerText = "Submitted Link: " + linkValue;
    label.classList.add("box-inner-text");
    label.id = "label"

    box.appendChild(label);

    inputbox.appendChild(box);
    // document.getElementById("three").innerText = box.id;
}

function ajaxtest(linkvalue){

    var data = {
        'number':linkvalue
    }


    fetch('process_number/', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken':getCookie('csrftoken')
        },
        body:JSON.stringify(data)
    })

    .then(response=> response.json())
    .then(data => {
        document.getElementById("three").innerText = data.result
    });

}




// Function to get the CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
