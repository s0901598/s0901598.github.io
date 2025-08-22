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


function AttendFunction(){
    let Form1 = document.getElementById('form1'),
    notAttend = Form1.querySelectorAll(".not-attend"),
    ATTEND = Form1["entry.1618816053"],
    ADULT = Form1["entry.877657756"],
    KID = Form1["entry.168231074"],
    VEGAN = Form1["entry.1236172646"],
    INVITATION = Form1["entry.830037336"],
    ADDRESS = Form1["entry.1934957082"],
    NAME = Form1["entry.1404975391"],
    MESSAGE = Form1["entry.1207225536"];

    // 清空所有欄位
    NAME.value = "";
    ADULT.value = "";
    KID.value = "";
    VEGAN.value = "";
    INVITATION.value = "";
    ADDRESS.value = "";
    MESSAGE.value = "";
    ADDRESS.disabled = false; // 確保地址欄位恢復可編輯

    if ( ATTEND.value == "出席" ){  
        ADULT.value = "";
        KID.value = "";
        VEGAN.value = "";
        notAttend.forEach(noreply => {
            noreply.style.display = "flex";
        });
    } else {
        console.log("不出席1")
        ADULT.value ="0";
        KID.value ="0";
        VEGAN.value = "0";
        notAttend.forEach(noreply => {
            noreply.style.display = "none";
        }  
        );
        
    };
}

function InvitationFunction(){
    let Form1 = document.getElementById('form1'),
    INVITATION = Form1["entry.830037336"],
    ADDRESS = Form1["entry.1934957082"];

    if ( INVITATION.value == "不需要" ) {  
        ADDRESS.value = "X";
        ADDRESS.disabled = true;
    } else {
        ADDRESS.value = "";
        ADDRESS.disabled = false;
    }
}


// Existing AttendFunction and InvitationFunction remain the same

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
            } else {
                const formData = new FormData(Form1);
                fetch(Form1.action, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                })
                .then(() => {
                    console.log('提交成功');
                    submitted = true;
                    submitform(); // 顯示「感謝填寫！」訊息
                })
                .catch(error => {
                    console.error('提交失敗', error);
                    alert('提交失敗，請檢查網路或表單設置');
                });
            }

        
      
      
}
function submitform(){
    const submitsuccess = document.getElementById('submit-success');
    submitsuccess.style.display = "flex";
    document.getElementById('form1').reset();
    AttendFunction(); // Re-run to handle display after reset
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
