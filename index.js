let btn =document.getElementById('changeStyle');
      let ptext=document.getElementById('text')
      btn.addEventListener('click',changeStyle)



      function changeStyle(){
        ptext.style.fontSize="30px";
        ptext.style.backgroundColor="green";
        ptext.style.color="black";
        ptext.style.fontFamily=" Comic Sans MS, Verdana, Arial, Helvetica, sans-serif";
      }
