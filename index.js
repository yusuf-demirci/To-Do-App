$("#title").focus();

$(".plus").click(function () {
    let title = $("#title").val();
    let message = $("#message").val();

    if (!title) {
        $("#title").focus(); 
        return;
    }
  
    title = title[0].toUpperCase() + ("" || title.slice(1));
    message && (message = message[0].toUpperCase() + message.slice(1));

    // Create a task
    $(
    `<div class="task">
        <div class="task-content">
            <div class="task-title">
                <p spellcheck="false">${title}</p>
                <div class="task-control">
                    <i class="fa-solid fa-square-check check"></i>
                    <i class="fa-solid fa-pen-to-square edit"></i>
                    <i class="fa-solid fa-trash-can delete"></i>
                </div>
            </div>
            <hr>
            <div class="task-message">
                <p spellcheck="false">${message}</p>
            </div>
        </div>
    </div>`
    ).hide().appendTo(".tasks").fadeIn(300);

    $("#title, #message").val("");
    $("#title").focus();
})

$(document).on("click", ".check", function(e){
    let parentElement = e.currentTarget.offsetParent;
    $(parentElement).toggleClass("done");
})

$(document).on("click", ".edit", function(e){
    let parentElement = e.currentTarget.offsetParent;
    let title = $(parentElement).find("> div > div > p")[0]
    let message = $(parentElement).find("> div > div > p")[1]
    let editable = $(title).attr("contenteditable");
    
    if(editable == "true") $([title, message]).attr("contenteditable", false);
    else $([title, message]).attr("contenteditable", true)
})

$(document).on("click", ".delete", function(e){
    let parentElement = e.currentTarget.offsetParent;
    $(parentElement).toggle("done");
})

$(document).keydown((e) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") $(".plus").click();
})