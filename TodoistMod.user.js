// ==UserScript==
// @name         TodoistMod
// @namespace    https://*.todoist.com
// @version      0.1
// @description  something useful
// @author       Jake Smith
// @match        https://*todoist.com/*
// @grant        none
// ==/UserScript==

function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function otherStyles(color) {
    var newcolor = shadeRGBColor(color, -0.25);
    var css = '.amibutton_red:hover{ border-color:' + newcolor + ' !important; background-color: ' + shadeRGBColor(color, -0.10) + ' !important }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    var style2 = document.createElement('style');
    var style3 = document.createElement('style');
    var css2 = '.amibutton, .amibutton_red, .amibutton_red:visited { background-color: ' + color + ' !important; } ';
    var css3 = '.quick_find:hover { background-color: ' + shadeRGBColor(color, -0.10) + ' !important; } ';
    style.type = 'text/css';
    style2.type = 'text/css';
    style3.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    if (style2.styleSheet){
        style2.styleSheet.cssText = css2;
    } else {
        style2.appendChild(document.createTextNode(css2));
    }
    if (style3.styleSheet){
        style3.styleSheet.cssText = css3;
    } else {
        style3.appendChild(document.createTextNode(css3));
    }
    head.appendChild(style2);
    head.appendChild(style);
    head.appendChild(style3);
    /*
.amibutton, .amibutton_red, .amibutton_red:visited {
	background-color: rgb(33, 0, 243) !important;
}
  */
}

function removeFilters() {
    var elem = document.getElementById("filter_inbox");
    elem.parentNode.removeChild(elem);
    var elem2 = document.getElementsByClassName("cmp_filter_days")[0].parentNode;
    elem2.parentNode.removeChild(elem2);
    document.getElementsByClassName("filter")[1].style.marginTop = "-25px";
    document.getElementById("left_menu_tabs").style.marginTop = "-10px";
    document.getElementById("left_menu").style.marginLeft = "-200px";
    document.getElementById("content").style.marginLeft = "50px";
    document.getElementById("content").style.width = "85%";
}
function updated() {
    //<a href="/premium" class="go_premium" target="_blank" style="display: none;" id="premium_promotion">Upgrade and get more done</a>
    var d = document.createElement("a");
    var quoteArray = ["Your quotes in this array"];
    var quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
    var elem32 = document.getElementById("top_bar");
    var colorArray = ["#ca2100","#E91E63","#9C27B0","#2196F3","#3F51B5","#009688","#EF6C00","#43A047"]; //"",
    var colorArray2 = ["#43A047"];

    var color = colorArray[Math.floor(Math.random()*colorArray.length)];
    var color2 = colorArray2[Math.floor(Math.random()*colorArray2.length)];
    color2 = color;

    console.log(color);
    console.log(hexToRgb(color));
    var colorrgba = "rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+",0.82)";

    otherStyles("rgb("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+")");

    elem32.style.backgroundColor = color;
    elem32.style.borderBottom = "solid 1px " + color;
    d.style.backgroundColor = colorrgba;
    d.innerHTML = '<font size="+0.30" color="white">'+quote+'</font>';
    d.style.color = "white !important";
    d.style.padding = "3px";
    d.style.position = "fixed";
    d.style.bottom = "0";
    d.style.left = "0";
    d.style.width = "100%";
    d.style.textAlign = "center";
    d.style.borderRadius = "0 !important";
    d.style.zIndex = "100";
    d.style.textDecoration = "none";
    var currentDiv = document.getElementById("all_holder");
    document.body.appendChild(d, currentDiv);


    var rightbar = document.createElement("div");
    rightbar.style.float = "right";
    rightbar.style.width = "250px";
    rightbar.style.paddingLeft = "35px";
    rightbar.style.paddingTop = "50px";
    rightbar.style.marginLeft = "868px";
    rightbar.style.position = "fixed";
    rightbar.style.overflowX = "hidden";
    rightbar.style.overflowY = "hidden";
    rightbar.style.borderRadius = "1px solid #f1f1f1";
    rightbar.style.backgroundColor = "#fafafa;";
    //var ndd = getNumber();
    //rightbar.innerHTML = "<p style='font-size: 175px;'>" + ndd + "</p>";
    rightbar.innerHTML = '<iframe src="https://metactf.com/tools/clock/" style="height: 800px;width: 266px;margin-top: -7px;margin-left: -4px;"></iframe>';
    currentDiv.insertBefore(rightbar,document.getElementById('left_menu'));
    document.getElementById('timer-sounds').click();

}
/*
function colorChanges() {
    var elem16 = document.getElementById("premium_promotion");
    var quoteArray = ["your quotes in this array"];
    var quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
    elem16.innerHTML = '<font size="+0.30">'+quote+'</font>';
    elem16.href = "#";
    elem16.target = "";
    var elem32 = document.getElementById("top_bar");
    var colorArray = ["#000","#ca2100","#E91E63","#9C27B0","#2196F3","#3F51B5","#009688","#43A047","#EF6C00"];
    var color = colorArray[Math.floor(Math.random()*colorArray.length)];
    var colorrgba = "rgba("+hexToRgb(color).r+","+hexToRgb(color).g+","+hexToRgb(color).b+",0.82)";
    elem32.style.backgroundColor = color;
    elem32.style.borderBottom = "solid 1px " + color;
    elem16.style.backgroundColor = colorrgba;
}
*/


function addFilters() {
    var elem3 = document.getElementById("top_filters");
    var breaker = document.createElement('hr');
    var newdiv = document.createElement('li');
    if(document.URL.toString().indexOf("tomorrow") != -1) {
        newdiv.setAttribute('class',"filter current");
    } else {
        newdiv.setAttribute('class',"filter");
    }
    newdiv.innerHTML = '<a style="text-decoration:none;" href="https://todoist.com/app?lang=en#agenda%2Ftomorrow"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#5C5C5C" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>&nbsp;&nbsp;<font color="#303333">Tomorrow</font></a>';
    elem3.appendChild(newdiv);
    elem3.appendChild(breaker);
    var namer = document.createElement('font');
    namer.setAttribute('color','white');
    namer.innerHTML = '<font size="+0.7"><span class="count" style="vertical-align: middle"><b>&nbsp;&nbsp;Todoist</b></span></font>';
    document.getElementById('logo').appendChild(namer);
}
/*
document.getElementsByTagName("body").click(function(){
    var elem5 = document.getElementsById("top_filters")[2];
    console.log(elem5);
    if(document.URL.toString().indexOf("tomorrow") != -1) {
        newdiv.addClass("current");
    } else {
        newdiv.removeClass("current");
    }
});
*/

removeFilters();
addFilters();
updated();
