require('./css/reset.css');
require('./css/common.css');
require('./css/style.css');


var uls=document.querySelector('ul');
var lis=uls.querySelectorAll('li');

for(let a of lis){  
    a.onclick=function (){ 
       var actlength=document.querySelectorAll('.active')
       var cls=this.className;   
        if(cls.indexOf('active')!=-1){
            this.classList.remove('active')
        }else {
            for(var i in lis){
                lis[i].className=''
            }
            this.classList.add('active')
        }
        
    }
}

var reset=document.querySelector('.reset');
reset.onclick=function (){
    var track=document.querySelectorAll('.track');
    console.log(track)
    for(let item of track){        
        item.style.background='#fff'  
    }
   
    for(let i of lis){
        i.classList.remove('active')
    }


}


