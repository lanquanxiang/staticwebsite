const comments = [
    {
        name: "李华",
        comment:
            "俺也觉得",
  
    },
    {
        name: "张三",
        comment: "五四运动”104周年纪念日。发扬以爱国、进步、民主、科学为主要内容的伟大五四精神，立志做有理想、敢担当、能吃苦、肯奋斗的新时代好青年。",
       
    },
];
const commentsBox = document.querySelector('#comments');
let nameInput = document.querySelector('#name');
let commentInput = document.querySelector('#comment');
const btnSubmit = document.querySelector("#btn-submit");
const btnClose = document.querySelector(".btn-close");

const rennderComments = function (comments) {
    commentsBox.innerHTML = ""
    comments.forEach((item) => {
        commentsBox.insertAdjacentHTML(
            'beforeend',
            `<hr>
            <h4>
                <span>${item.name}</span>
               
            </h4>
            <p>${item.comment}</p>
            `
        )
    }
    )
}

rennderComments(comments);

btnSubmit.onclick = function () {
    let nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
    let commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
    let d=new Date();
    comments.unshift(
        {
            name: nameStr,
            comment: commentStr,
            // time: d.format('yy-MM-dd hh:mm:ss'),
        }
    );
    rennderComments(comments);
}

let isClosed = false;
btnClose.onclick = function () {
    if (!isClosed) {
        btnClose.textContent = "开启留言";
    } else {
        btnClose.textContent = "关闭留言";
    }
    nameInput.disabled = !nameInput.disabled;
    commentInput.disabled = !commentInput.disabled;
    btnSubmit.disabled = !btnSubmit.disabled;
    isClosed = !isClosed;
}
