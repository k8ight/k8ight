// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");


    window.onload = () => {
      setTimeout(() => {
		 document.getElementsByClassName('k8-loader')[0].style.display = 'none';
       
      }, 1000); 
    };
	
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
function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
// Close the sidebar with the close button
function k8_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
function k8_dash_nav_toggle(){
	var nav=document.getElementsByClassName("k8-dash-nav")[0];
	if(nav.style.display==="block"){
		nav.style.display="none";
	}else{
		nav.style.display="block";
	}
	
}
function v_blur(){
const blr=document.getElementsByClassName('k8-blur');
for (let i = 0; i < blr.length; i++) { 
if(blr[i].style.display==="block"){
	blr[i].style.display="none";
}else{
blr[i].style.display="block";
}}}

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

function k8_drops() {
  document.getElementById("k8_drops").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("k8_drops_input");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("k8_drops");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
	 document.getElementById("display").style.display = ""; 
    } else {
      a[i].style.display = "none";
	   document.getElementById("display").style.display = ""; 
    }
  }
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
    table = document.getElementsByClassName("sctable");
    tr = table[0].getElementsByTagName("tr");
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