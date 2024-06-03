document.querySelectorAll('.col-m-4').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        this.style.backgroundColor = 'rgb(139, 0, 18)';
        this.style.color = 'white';
    });
    item.addEventListener('mouseout', function () {
        this.style.boxShadow = 'none';
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
