const slider = document.querySelector(".circular-slider");
const image = document.querySelector(".imgfx");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menu span");
const descriptions = document.querySelectorAll(".text");

const rotationValues = [-61,-31,0,30,59];

const bgimg = [
	/* "radial-gradient(#a74255,#440412)", 
	"radial-gradient(#ff4b5f,#a40b16)", 
	"radial-gradient(#fdb76d,#f08a00)",
	"radial-gradient(#849ade,#42395f)", 
	"radial-gradient(#e7ad59,#883e2a)", */
	"b1","b2","b3","b4","b5"

];
 const images=["img1","img2","img3","img4","img5"];
 
 let itemIndex= 2 ;
function rotate(rotationValue){
	image.style.transform=`rotate(${rotationValue}deg)`;
	indicator.style.transform=`translate(-50%,-50%) rotate(${rotationValue}deg)`;
}
menuItems.forEach((menuItem,i)=>{
	menuItem.addEventListener( "click",() =>{
	image.style.backgroundImage = "url(../img/" + images[i] + ".png)";
	slider.style.backgroundImage = "url(../img/img1/" + bgimg[i] + ".jpg)";
	if(i>itemIndex){
		rotate(rotationValues[itemIndex]-10);
	} else if(i<itemIndex){
		rotate(rotationValues[itemIndex]+10);
	} else{
		return "";
	}
	setTimeout(()=>{
		rotate(rotationValues[i]);
	},300);
	descriptions.forEach(text=>{
		text.style.display="none";
	});
	descriptions[i].style.display="block";
	itemIndex=i;
});
});