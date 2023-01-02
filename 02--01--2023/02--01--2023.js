//  Today i create a slider for my semester project and also design it using css code of my complete project will be uploaded soon to github 

// project is about to clone a website frontend and backened so i choose a website Epic games for project






var slider_two = document.getElementsByClassName('slider-two');

	var div2 = document.getElementsByClassName('div-item2');


 slider_two[1].onclick = ()=>{
    l++;
    for(var i of div2)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1480px";}
        if (l==3) {i.style.left = "-2200px";}
        // if (l==4) {i.style.left = "-2900px";}
        if (l>4) {l=4;}
    }
}
slider_two[0].onclick = ()=>{
    l--; 
    for(var i of div2)
    {	
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1480px";}
        if (l==3) {i.style.left = "-2200px";}
        if (l < 0) {l=0;}
    }
}