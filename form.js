var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
var food=[];
var n=0;
var x=0;

function insert(){

var addrow=document.getElementById("tbl");
var newrow=addrow.insertRow(n);

    list1[x]=document.getElementById("firstname").value;
    list2[x]=document.getElementById("Lastname").value;
    list3[x]=document.getElementById("address").value;
    list4[x]=document.getElementById("pincode").value;
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var other=document.getElementById("other");
    if(male.checked==true){
    list5[x]=document.getElementById("male").value;
    }
    else if(female.checked==true){
    list5[x]=document.getElementById("female").value;
    }
    else if(other.checked==true){
    list5[x]=document.getElementById("other").value;
    }
    var indian=document.getElementById("Indian");
    var italian=document.getElementById("Italian");
    var chinese=document.getElementById("Chinese");
    var arabic=document.getElementById("Arabic");
    var japanese=document.getElementById("Japanese");
    if(indian.checked){
    list6[x]=document.getElementById("Indian").value;
    }
    else if(italian.checked){
    list6[x]=document.getElementById("Italian").value;
    }
    else if(chinese.checked){
    list6[x]=document.getElementById("Chinese").value;
    }
    else if(arabic.checked){
   list6[x]=document.getElementById("Arabic").value;
    }
    else if(japanese.checked){
    list6[x]=document.getElementById("Japanese").value;
    }
    
    list7[x]=document.getElementById("state").value;
    list8[x]=document.getElementById("country").value;


      var cel1=newrow.insertCell(0);
      var cel2=newrow.insertCell(1);
      var cel3=newrow.insertCell(2);
      var cel4=newrow.insertCell(3);
      var cel5=newrow.insertCell(4);
      var cel6=newrow.insertCell(5);
      var cel7=newrow.insertCell(6);
      var cel8=newrow.insertCell(7);

      cel1.innerHTML=list1[x];
      cel2.innerHTML=list2[x];
      cel3.innerHTML=list3[x];
      cel4.innerHTML=list4[x];
      cel5.innerHTML=list5[x];
      cel6.innerHTML=list6[x];
      cel7.innerHTML=list7[x];
      cel8.innerHTML=list8[x];

      n++;
      x++;
};
