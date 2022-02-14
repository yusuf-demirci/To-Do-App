$("#title").focus();

$(".plus").click(function () {
    let title = $("#title").val();
    let content = $("#content").val();

    $(".tasks").append(
        `<div class="task">
            <div class="task-title">
                <p>${title}</p>
                <button class="done-btn"></button>
            </div>
            <hr>
            <div class="task-content">
                <p>${content}</p>
                <i class="fa-solid fa-trash-can delete"></i>
            </div>
        </div>`
    )
})