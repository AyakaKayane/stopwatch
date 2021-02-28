{(function(){
    'use strict';

    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

  
    var startTime;
    
    var elapsedTime = 0;

    var timerId;

    var timeToadd = 0;


  
    function updateTimetText(){

        var m = Math.floor(elapsedTime / 60000);
        
        var ss = Math.floor(elapsedTime % 60000 / 10000);
        
        var s = Math.floor(elapsedTime % 60000 / 1000);
      
        var ms = elapsedTime % 1000;


        m = ('0' + m).slice(-1); 
        ss = ('0' + ss).slice(-1);
        s = ('0' + s).slice(-1);
        ms = ('0' + ms).slice(1,2);

       　
        timer.textContent = m + ':' + ss  + s + ':' + ms;
    }


  
    function countUp(){

       
        timerId = setTimeout(function(){
           
            elapsedTime = Date.now() - startTime + timeToadd;
            updateTimetText()
            
            countUp();
       
        },10);
    }

    
    start.addEventListener('click',function(){
      
        startTime = Date.now();
       
        countUp();
    });

  
    stop.addEventListener('click',function(){
      
       clearTimeout(timerId);
      
       timeToadd += Date.now() - startTime;
    });

   
    reset.addEventListener('click',function(){
        
        elapsedTime = 0;
       
        timeToadd = 0;
       
        updateTimetText();

    });

    
    document.getElementById("start").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
      this.classList.toggle("pink");
  
};

})();
}