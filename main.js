var submitted = false;
function music(){
    let musiconoroff = document.getElementById('music-onoroff'),
    musicoffline = document.getElementById('music-off-line'),
    themusic = document.querySelector("audio");

    if (themusic.paused) {
        themusic.play();
        musicoffline.classList.add("playmusic");
        musiconoroff.style.display = "none";
    }
    else {
        themusic.pause();
        musicoffline.classList.remove("playmusic");
    }
}

function JumpTo(id) {
    var jumpto = document.getElementById(id);
    jumpto.scrollIntoView({ block: 'start' , behavior: 'smooth' });
}


//
function reveal(){
    var reveals = document.querySelectorAll(".dress-code,.map,.traffic,.schedule-box,.invite,.intro-content")
    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll",reveal)



function showgallery(id){
    document.getElementById(id).style.display = "block";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("closebutton").style.display = "block";

    if ( document.getElementById('video').style.display == "block" ) {
        let musicoffline = document.getElementById('music-off-line'),
        themusic = document.querySelector("audio");
        
        themusic.pause();
        musicoffline.classList.remove("playmusic");
    };
}

function closegallery(){
    document.getElementById("gallery").style.display = "none";
    document.getElementById("closebutton").style.display = "none";
    document.getElementById("photo-gallery").style.display = "none";
    document.getElementById("video").style.display = "none";

    const iframeVideos = document.querySelectorAll("iframe");
    if (iframeVideos.length > 0) {
      iframeVideos.forEach((iframe) => {
        if (iframe.contentWindow) {
          if (iframe.src.startsWith("https://player.vimeo.com/")) {
            iframe.contentWindow.postMessage('{"method":"pause"}', "*");
          }
        }
      });
    };
}


//form
// function AttendFunction(){
//     let Form1 = document.getElementById('form1'),
//     notAttend = Form1.querySelectorAll(".not-attend"),
//     ATTEND = Form1["ATTEND"],
//     ADULT = Form1["ADULT"],
//     KID = Form1["KID"],
//     VEGAN = Form1["VEGAN"];


//     if ( ATTEND.value == "出席" ){  
//         ADULT.value = "";
//         KID.value = "";
//         VEGAN.value = "";

//         notAttend.forEach(noreply => {
//             noreply.style.display = "flex";
//         });
//     } else {
//         ADULT.value = "0";
//         KID.value = "0";
//         VEGAN.value = "0";

//         notAttend.forEach(noreply => {
//             noreply.style.display = "none";
//         });
//     };

// }

function AttendFunction(){
    let Form1 = document.getElementById('form1'),
    notAttend = Form1.querySelectorAll(".not-attend"),
    ATTEND = Form1["entry.1130099705"],
    ADULT = Form1["entry.1282042653"],
    KID = Form1["entry.401083884"],
    VEGAN = Form1["entry.1580275973"],
    INVITATION = Form1["entry.185161345"],
    ADDRESS = Form1["entry.1677057149"],
    NAME = Form1["entry.332417739"],
    MESSAGE = Form1["entry.1360828809"];

    // 清空所有欄位
    NAME.value = "";
    ADULT.value = "";
    KID.value = "";
    VEGAN.value = "";
    INVITATION.value = "";
    ADDRESS.value = "";
    MESSAGE.value = "";
    ADDRESS.disabled = false; // 確保地址欄位恢復可編輯

    if ( ATTEND.value == "出席" ) {  
        notAttend.forEach(noreply => {
            noreply.style.display = "flex";
        });
    } else {
        ADULT.value = "0";
        KID.value = "0";
        VEGAN.value = "0";
        notAttend.forEach(noreply => {
            noreply.style.display = "none";
        });
    }
}

// function InvitationFunction(){
//     let Form1 = document.getElementById('form1'),
//     INVITATION = Form1["INVITATION"],
//     ADDRESS = Form1["ADDRESS"];


//     if ( INVITATION.value == "需要" || INVITATION.value == "" ){  
//         ADDRESS.value = "";
//         ADDRESS.disabled = false;
//     } else {
//         ADDRESS.value = "X";
//         ADDRESS.disabled = true;
//     };

// }

// function InvitationFunction(){
//     let Form1 = document.getElementById('form1'),
//     INVITATION = Form1["entry.1515955774"],
//     ADDRESS = Form1["entry.1246916581"];

//     if ( INVITATION.value == "不需要" ) {  
//         ADDRESS.value = "X";
//         ADDRESS.disabled = true;
//     } else {
//         ADDRESS.value = "";
//         ADDRESS.disabled = false;
//     }
// }

function InvitationFunction(){
    let Form1 = document.getElementById('form1'),
    INVITATION = Form1["entry.185161345"],
    ADDRESS = Form1["entry.1677057149"];

    if ( INVITATION.value == "不需要" ) {  
        ADDRESS.value = "X";
        ADDRESS.disabled = true;
    } else {
        ADDRESS.value = "";
        ADDRESS.disabled = false;
    }
}

// Add this at the top of main.js
var submitted = false;

// Existing AttendFunction and InvitationFunction remain the same

// function submitform1(){
//     let Form1 = document.getElementById('form1'),
//     NAME = document.getElementById("Name").value,
//     ATTEND = Form1.elements["entry.1130099705"].value,
//     ADULT = document.getElementById("Adult").value,
//     KID = document.getElementById("Kid").value,
//     VEGAN = document.getElementById("Vegan").value,
//     INVITATION = document.getElementById("Invitation").value,
//     ADDRESS = document.getElementById("Address").value,
//     MESSAGE = document.getElementById("Message").value;

//     if( NAME === "" ){
//         document.getElementById('Name').scrollIntoView({ block: 'center' , behavior: 'smooth' });
//         alert('請填寫姓名');
//     } else if( ADULT === "" ){
//         document.getElementById('Adult').scrollIntoView({ block: 'center' , behavior: 'smooth' });
//         alert('請回答大人人數');
//     } else if( KID === "" ){
//         document.getElementById('Kid').scrollIntoView({ block: 'center' , behavior: 'smooth' });
//         alert('請回答小孩人數');
//     } else if( VEGAN === "" ){
//         document.getElementById('Vegan').scrollIntoView({ block: 'center' , behavior: 'smooth' });
//         alert('請問是否有素食需求');
//     } else if( INVITATION === "" ){
//         document.getElementById('Invitation').scrollIntoView({ block: 'center' , behavior: 'smooth' });
//         alert('請問是否需要紙本喜帖');
//     } else if( ADDRESS === "" ){
//         document.getElementById('Address').scrollIntoView({ block: 'center' , behavior: 'smooth' });
//         alert('請留下喜帖收件地址');
//     } else{
//         // Optional: If you want SUBMITTIME, add a hidden input to the form like <input type="hidden" id="SUBMITTIME" name="entry.XXXXX"> and set it here
//         // For now, assuming not needed

//         // document.getElementById('loading').style.display = "block"; // If you have loading, keep; else remove

//         submitted = true;
//         Form1.submit();
//     }
// }  

function submitform1(){
    let Form1 = document.getElementById('form1'),
    NAME = document.getElementById("Name").value,
    ATTEND = Form1.elements["entry.1618816053"].value,
    ADULT = document.getElementById("Adult").value,
    KID = document.getElementById("Kid").value,
    VEGAN = document.getElementById("Vegan").value,
    INVITATION = document.getElementById("Invitation").value,
    ADDRESS = document.getElementById("Address").value,
    MESSAGE = document.getElementById("Message").value;

    if( NAME === "" ){
        document.getElementById('Name').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('請填寫姓名');
    } else if( ATTEND === "出席" && ADULT === "" ){
        document.getElementById('Adult').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('請回答大人人數');
    } else if( ATTEND === "出席" && KID === "" ){
        document.getElementById('Kid').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('請回答小孩人數');
    } else if( ATTEND === "出席" && VEGAN === "" ){
        document.getElementById('Vegan').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('請問是否有素食需求');
    } else if( INVITATION === "" ){
        document.getElementById('Invitation').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('請問是否需要紙本喜帖');
    } else if( INVITATION === "需要" && ADDRESS === "" ){
        document.getElementById('Address').scrollIntoView({ block: 'center' , behavior: 'smooth' });
        alert('請留下喜帖收件地址');
    } else{
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }
        
        const today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth()+1,
        day = today.getDate(),
        h = addZero(today.getHours()),
        m = addZero(today.getMinutes()),
        s = addZero(today.getSeconds()),
        time = h + ":" + m + ":" + s,
        SUBMITTIME = year+"/"+month+"/"+day+" "+time;

        document.getElementById('loading').style.display = "block";
        
        $.ajax({
          type: "get",
          url: "https://docs.google.com/spreadsheets/d/1gYgLgWY9suhtoQZQW05krghZi3G1K4xYVKasXaK1zII/edit?resourcekey=&gid=1026309814#gid=1026309814",
          data: {
            "SUBMITTIME": SUBMITTIME, 
            "NAME": NAME, 
            "ATTEND": ATTEND, 
            "ADULT": ADULT, 
            "KID": KID,
            "VEGAN": VEGAN,
            "INVITATION": INVITATION,
            "ADDRESS": ADDRESS,
            "MESSAGE": MESSAGE,
          },
          dataType: "JSON",
          success: function(response){
            if (response.success) {
              submitform();
            } else {
              alert("傳送異常，請再試一次");
            }
          },
          error: function(xhr, status){
            var errorMsg = xhr.status;
            if(errorMsg === 0){
                alert('異常！請再試一次');
            } else{
                alert (xhr.status + ':' +xhr.statusText);
            }
          },
          complete: function(){
            document.getElementById('loading').style.display = "none";
          }
        });
    }
}  

function submitform(){
    const submitsuccess = document.getElementById('submit-success');
    submitsuccess.style.display = "flex";
}

function submitok(){
    document.getElementById('submit-success').style.display = "none";
}

//
var TheDay = new Date("2026-04-25 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = TheDay - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
    
  document.getElementById("countdown").innerHTML = "距離婚禮還剩 " + days + " 天<br>" + hours + " 小時 "
  + minutes + " 分鐘 " + seconds + " 秒<br>讓我們一起期待吧！";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-area").innerHTML = '<div class="middle-title"><div></div><h1>婚禮倒數</h1></div><br><br><br>跟我們一起慶祝吧 !';
    document.getElementById("countdown").innerHTML = "LET'S CELEBRATE !";
  }
}, 1000);