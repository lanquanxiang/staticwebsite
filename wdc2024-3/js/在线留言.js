// main.js
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;
    
    // 创建新的留言元素
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<span>${name}:</span> ${message}`;
    
    // 将新留言添加到留言板
    document.getElementById('messages').appendChild(newMessage);
    
    // 清空输入框
    document.getElementById('nameInput').value = '';
    document.getElementById('messageInput').value = '';
});