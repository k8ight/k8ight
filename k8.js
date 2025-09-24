// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function k8_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


function toggleDropdown(el) {
 let dropdown = el.nextElementSibling;
  if (dropdown) {
    dropdown.classList.toggle("k8-hide");
    console.log("Dropdown toggled!"); // Debugging log
  } else {
    console.error("Dropdown element not found!");
  }
   let icon = el.querySelector("i");
   if (dropdown.classList.contains("k8-hide")) {
      icon.classList.replace("fa-caret-down", "fa-caret-right");
    } else {
      icon.classList.replace("fa-caret-right", "fa-caret-down");
    }
  
  
}

//PHP date function in Javascript UTC only no local timezone convert like php
function date(format, epoch = null) {
  let timestamp = epoch ? Number(epoch) : Date.now();

  // If epoch is in seconds, convert to milliseconds
  if (timestamp.toString().length === 10) {
    timestamp *= 1000;
  }

  const d = new Date(timestamp);

  const pad = (n, c = 2) => String(n).padStart(c, '0');

  const map = {
    // Day
    d: pad(d.getUTCDate()),
    D: d.toLocaleString('en-us', { weekday: 'short', timeZone: 'UTC' }),
    j: d.getUTCDate(),
    l: d.toLocaleString('en-us', { weekday: 'long', timeZone: 'UTC' }),
    N: d.getUTCDay() === 0 ? 7 : d.getUTCDay(),
    S: (() => {
      const day = d.getUTCDate();
      if (day % 10 === 1 && day !== 11) return 'st';
      if (day % 10 === 2 && day !== 12) return 'nd';
      if (day % 10 === 3 && day !== 13) return 'rd';
      return 'th';
    })(),
    w: d.getUTCDay(),
    z: Math.floor((d - Date.UTC(d.getUTCFullYear(), 0, 0)) / 86400000),

    // Week
    W: (() => {
      const onejan = Date.UTC(d.getUTCFullYear(), 0, 1);
      return Math.ceil((((d - onejan) / 86400000) + new Date(onejan).getUTCDay() + 1) / 7);
    })(),

    // Month
    F: d.toLocaleString('en-us', { month: 'long', timeZone: 'UTC' }),
    m: pad(d.getUTCMonth() + 1),
    M: d.toLocaleString('en-us', { month: 'short', timeZone: 'UTC' }),
    n: d.getUTCMonth() + 1,
    t: new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate(),

    // Year
    L: ((d.getUTCFullYear() % 4 === 0 && d.getUTCFullYear() % 100 !== 0) || (d.getUTCFullYear() % 400 === 0)) ? 1 : 0,
    o: d.getUTCFullYear(),
    Y: d.getUTCFullYear(),
    y: String(d.getUTCFullYear()).slice(-2),

    // Time
    a: d.getUTCHours() < 12 ? 'am' : 'pm',
    A: d.getUTCHours() < 12 ? 'AM' : 'PM',
    g: d.getUTCHours() % 12 || 12,
    G: d.getUTCHours(),
    h: pad(d.getUTCHours() % 12 || 12),
    H: pad(d.getUTCHours()),
    i: pad(d.getUTCMinutes()),
    s: pad(d.getUTCSeconds()),
    u: pad(d.getUTCMilliseconds() * 1000, 6),
  };

  return format.replace(/\\?([a-zA-Z])/g, (_, char) =>
    map[char] !== undefined ? map[char] : char
  );
}


function epoachjs(epochTime){
	const date = new Date(epochTime * 1000); // Convert seconds to milliseconds

        // Extract date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        // Extract time components
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');

        // Determine AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        //hours = hours % 12 || 12; // Convert 0 to 12 for midnight

        // Format as "YYYY-MM-DD HH:mm AM/PM"
        return `${day}-${month}-${year}, ${hours}:${minutes} ${ampm}`;

}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
// Close the sidebar with the close button
function k8_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

function v_blur(){
const blr=document.getElementsByClassName('k8-blur');
for (let i = 0; i < blr.length; i++) { 
if(blr[i].style.display==="block"){
	blr[i].style.display="none";
}else{
blr[i].style.display="block";
}}}
 function openInNewTab(imageElement) {
	 //console.log(imageElement.src);
      window.open(imageElement.src, '_blank');
    }
function wclose(el){
	el.parentNode.parentNode.remove();
}

function cfm(el){
	var qs=el.getAttribute('data-q');
	var atrue=el.getAttribute('data-true');
	var afalse=el.getAttribute('data-false');
	var dp='"none"';
	var html=qs +"<a href='"+atrue+"' class='k8-btn k8-green' style='margin-left:8px;'>YES</a><a href='"+afalse+"' style='margin-left:8px;' onclick='this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="+dp+";' class='k8-btn k8-red'>NO</a>";
	
	
	document.getElementsByClassName("ddata")[0].innerHTML=html;
	document.getElementsByClassName("tnot")[0].style.display="block";
	
}
function pview(el){ /*PASSWORD VIEW*/
if(el.previousElementSibling.type==="password"){
	el.previousElementSibling.type="text";
	el.children[0].classList.remove("fa-eye");
	el.children[0].classList.add("fa-eye-slash");
}else{
	el.previousElementSibling.type="password";
	el.children[0].classList.remove("fa-eye-slash");
	el.children[0].classList.add("fa-eye");
}

}
function confirm_action(el){
	var qs=el.getAttribute('data-qs');
	var atrue=el.getAttribute('data-true');
	var afalse=el.getAttribute('data-false');
	var dp='"none"';
	var html=qs +"<a href='"+atrue+"' class='k8-btn k8-green' style='margin-left:8px;'>YES</a><a href='"+afalse+"' style='margin-left:8px;' onclick='this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="+dp+";' class='k8-btn k8-red'>NO</a>";
	
	
	document.getElementsByClassName("ddata")[0].innerHTML=html;
	document.getElementsByClassName("tnot")[0].style.display="block";
	
}




function makeDragable(dragHandle) {

  let dragObj = null; 

  let xOffset = 0; 

  let yOffset = 0;


for (var i = 0, len = document.querySelectorAll(dragHandle).length; i < len; i++) {
    //work with checkboxes[i]
document.querySelectorAll(dragHandle)[i].parentNode.style.zIndex="200";
 document.querySelectorAll(dragHandle)[i].addEventListener("mousedown", startDrag, true);

  document.querySelectorAll(dragHandle)[i].addEventListener("touchstart", startDrag, true);
}


  /*sets offset parameters and starts listening for mouse-move*/

  function startDrag(e) {
  
    e.preventDefault();

    e.stopPropagation();

    dragObj = this.parentNode;
           
    dragObj.style.position = "fixed";
    let rect = dragObj.getBoundingClientRect();

     var onodes= dragObj.querySelectorAll(".whead");
      for (var i = 0; i < onodes.length; i++) {
		console.log(onodes.length); 
	  }
    if (e.type=="mousedown") {
      xOffset = e.clientX - rect.left; 
      dragObj.style.zIndex =  parseInt(dragObj.style.zIndex) + 1;
      yOffset = e.clientY - rect.top;
      window.addEventListener('mousemove', dragObject, true);
  
    } else if(e.type=="touchstart") {

      xOffset = e.targetTouches[0].clientX - rect.left;
      dragObj.style.zIndex =  parseInt(dragObj.style.zIndex) + 1;
      yOffset = e.targetTouches[0].clientY - rect.top;

      window.addEventListener('touchmove', dragObject, true);

    }

  }



  /*Drag object*/

  function dragObject(e) {

    e.preventDefault();

    e.stopPropagation();

  document.onmouseup = function(e) {

    if (dragObj) {

      dragObj = null;

      window.removeEventListener('mousemove', dragObject, true);

      window.removeEventListener('touchmove', dragObject, true);

    }

  }
  
    if(dragObj == null) {

      return;

    } else if(e.type=="mousemove") {

     if(e.clientX-xOffset  >= 0 && (e.clientX-xOffset+ dragObj.clientWidth <= window.screen.width)){
      dragObj.style.left = e.clientX-xOffset +"px"; 
	 }
       dragObj.style.transform = "inherit";
	 if(e.clientY-yOffset  >= 0 && (e.clientY-yOffset+ dragObj.clientHeight <= window.screen.height) ){
      dragObj.style.top = e.clientY-yOffset +"px";
	 }
    } else if(e.type=="touchmove") {

      dragObj.style.left = e.targetTouches[0].clientX-xOffset +"px";
      dragObj.style.transform = "inherit";
      dragObj.style.top = e.targetTouches[0].clientY-yOffset +"px";

    }

  }
  /*End dragging*/



}

makeDragable(".whead");

function show(formId) {
    document.getElementById(formId).style.display = 'block';
	
}

function hide(formId) {
    document.getElementById(formId).style.display = 'none';
}

function showimg(el){
document.getElementsByClassName("k8-box")[0].style.display="block";	
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").style="text-align:center;";
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").innerHTML="<img src='data:image/jpeg;base64,"+ el.value+"' style='width:100%;height:100%;border:1px solid #eee;object-fit: contain;'/>";
}

function addwin(el){
document.getElementsByClassName("k8-box")[0].style.display="block";	
document.getElementsByClassName("k8-box")[0].querySelector(".whead").querySelector("SPAN").innerHTML=el.getAttribute('data-title');
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").style="text-align:center;";
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").innerHTML=el.getAttribute('data-html');
}

function userform(el){
document.getElementsByClassName("k8-box")[0].style.display="block";	
document.getElementsByClassName("k8-box")[0].querySelector(".whead").querySelector("SPAN").innerHTML='EDIT USER -'+el.getAttribute('data-uid');
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").style="text-align:center;";
var html;
html=''+atob(el.getAttribute('data-addr'))+el.getAttribute('data-fname')+el.getAttribute('data-uname')+atob(el.getAttribute('data-gid'))+el.getAttribute('data-type')+el.getAttribute('data-verify');
document.getElementsByClassName("k8-box")[0].querySelector(".wbody").innerHTML=html;
}


function searchTable(input) {
    var  filter, found, table, tr, td, i, j;
    filter = input.value.toUpperCase();
	var inputs = document.getElementsByClassName("filter");
	index = Array.from(inputs).indexOf(input);
	 table = document.getElementsByClassName("sctable");
	 
	 
	if(!table[index]){
	index = 0;	    
	}
		
    tr = table[index].getElementsByTagName("tr");
	
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

function setfilter(el){
document.getElementById("filter").value=el.id;	
searchTable();

}

