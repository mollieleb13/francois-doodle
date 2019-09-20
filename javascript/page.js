        //Class info
        var thisClass = '1.125 Software Engineering & Architecting';
        document.getElementById('class').innerText=thisClass;
        //My Name
        var myName = 'Mollie LeBlanc';
        document.getElementById('whoami').innerText=myName;
        //Date of Webpage Creation
        var createDate = 'September 2019'
        document.getElementById('creation').innerText=createDate;   

        // changing image (like PacMan)
        var flag = 1;
        var img1 = null;
        var pos = 10;
        window.onload = setInterval(Run, 300);
        function Run(){
            img1 = document.getElementById("Image");
            pos += 10;
            if (pos >= 600){
                pos = 0;}
            img1.style.left = pos+"px";
            if(flag ==1){
                img1.src = "pics/Francois.jpg";
                flag=0;}
            else {
                img1.src = "pics/Francois2.jpg";
                flag=1;}
        }