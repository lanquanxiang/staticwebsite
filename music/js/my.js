function insertNode(nodeId, str, i) {
	var nodeIndex = document.getElementById(nodeId);
	var newNode = creatNode(str, i);
	nodeIndex.appendChild(newNode);
}

function creatNode(str, i) {
	var newNode = document.createElement("p");
	newNode.addEventListener('click', function() {
		clickMusic(i);
	}, true);
	var newTXt = document.createTextNode(str);
	newNode.appendChild(newTXt);
	return newNode;
}



function asTime(t) {
	t = Math.round(t);
	var s = t % 60;
	var m = Math.floor(t / 60);
	if (m<10) {
		m="0"+m;
	}
	return m + ':' + two(s);
}

function two(s) {
	s += "";
	if(s.length < 2) s = "0" + s;
	return s;
}