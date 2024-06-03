window.onload = function () {
    var aLi = tab.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var aDiv = tab.getElementsByTagName('div')[0].getElementsByTagName('div');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i]['onclick'] = function () {
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = 'link';
                aDiv[i].style.display = 'none';
            };
            aDiv[this.index].style.display = 'block';
            this.className = 'hover';
        }
    };
};