//------------------------------------------navigation bar(hamburger menu)-------------------------------------------------------------------------------------------//
function showSidebar() {
    let sidebar = document.querySelector('.sidebar');   //คำสั่งสำหรับเข้าถึง element(ul) ตัวแรกที่พบ ประกาศตัวแปร ชื่อ sidebar โดยอ้างถึง class sidebar ใช้queryselector
    sidebar.style.display = 'flex';                     //เปลี่ยน display ให้เป็น flex ทำให้พอกด icon ตัว sidebar จะแสดงขึ้น
}
function hideSidebar() {
    let sidebar = document.querySelector('.sidebar');   //ประกาศตัวแปร ชื่อ sidebar โดยอ้างถึง class sidebar ใชัqueryselector
    sidebar.style.display = 'none';                     //เปลี่ยน display ให้เป็น none ทำให้พอกดiconตัวsidebar จะหายไป
}
//-----------------------------------------------------plalist slider-----------------------------------------------------------------------------------------------------//
let next = document.querySelector('.next')              // เข้าถึง element(button) โดย queryselector และถูกรีเทิรน.next node แรกที่เจอ  และประกาศตัวแปร next
let prev = document.querySelector('.prev')              // เข้าถึง element(button) โดย class .prev และประกาศตัวแปร prev


next.addEventListener('click', () => {                  //เรียกตัวแปร next เพื่อเพิ่ม htmlEvent ตอนคลิก
    let items = document.querySelectorAll('.item')      // เข้าถึง element .item ทุกตัว(มี6ตัว มาเป็น array list) และประกาศตัวแปร items
    document.querySelector('.slide').appendChild(items[0]) //ทำให้ background ของ.slideเพิ่มรูปและข้อความถัดไป,ปุ่ม playlist
})

prev.addEventListener('click', () => {  
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]); // ทำให้ background ของ.slideเพิ่มเนื้อหาก่อนหน้า รูปและข้อความก่อนหน้า,ปุ่ม playlist (ใช้ความยาวของช่องarray  มา -1 ก็จะได้item[i]ก่อนหน้า)
})

//---------------------------------------------------------------------Ariana Grande Part------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showSong1a() {
    document.getElementById('songName').innerHTML = 'Moonlight'; //เข้าถึง id songNameใช้ innerHTML แทรกชื่อเพลงแทนที่ข้อความเดิม
    let song1 = document.getElementById("audio1");              //ประกาศตัวแปร song1 และเข้าถึงผ่านชื่อ id
    for (let i = 1; i <= 7; i++) {                              
        let song = document.getElementById("audio" + i);        //ให้ตัวid ที่อ้างถึง update ไปตาม loop 
        song.style.display = 'none';        
        song.pause();
        song.currentTime = 0;
    }
    song1.style.display = 'flex';                               //ทำให้แสดงผล โดยกำหนด display flex
}

function showSong2a() {
    document.getElementById('songName').innerHTML = 'Dangerous Woman';
    let song2 = document.getElementById("audio2");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song2.style.display = 'flex';
}
function showSong3a() {
    document.getElementById('songName').innerHTML = "Be Alright";
    let song3 = document.getElementById("audio3");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song3.style.display = 'flex';
}
function showSong4a() {
    document.getElementById('songName').innerHTML = 'Into You';
    let song4 = document.getElementById("audio4");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song4.style.display = 'flex';
}
function showSong5a() {
    document.getElementById('songName').innerHTML = 'Side To Side';
    let song5 = document.getElementById("audio5");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song5.style.display = 'flex';
}
function showSong6a() {
    document.getElementById('songName').innerHTML = 'Focus';
    let song6 = document.getElementById("audio6");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song6.style.display = 'flex';
}
function showSong7a() {
    document.getElementById('songName').innerHTML = 'Everyday';
    let song7 = document.getElementById("audio7");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song7.style.display = 'flex';
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------Taeyeon part------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showSong1() {
    document.getElementById('songName').innerHTML = 'INVU';
    let song1 = document.getElementById("audio1");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song1.style.display = 'flex';
}

function showSong2() {
    document.getElementById('songName').innerHTML = '그런 밤 Some Night';
    let song2 = document.getElementById("audio2");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song2.style.display = 'flex';
}
function showSong3() {
    document.getElementById('songName').innerHTML = "Can't Control Myself";
    let song3 = document.getElementById("audio3");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song3.style.display = 'flex';
}
function showSong4() {
    document.getElementById('songName').innerHTML = 'Set Myself On Fire';
    let song4 = document.getElementById("audio4");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song4.style.display = 'flex';
}
function showSong5() {
    document.getElementById('songName').innerHTML = '어른아이 Toddler';
    let song5 = document.getElementById("audio5");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song5.style.display = 'flex';
}
function showSong6() {
    document.getElementById('songName').innerHTML = 'Siren';
    let song6 = document.getElementById("audio6");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song6.style.display = 'flex';
}
function showSong7() {
    document.getElementById('songName').innerHTML = 'Cold As Hell';
    let song7 = document.getElementById("audio7");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song7.style.display = 'flex';
}
function showSong8() {
    document.getElementById('songName').innerHTML = 'Timeless';
    let song8 = document.getElementById("audio8");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song8.style.display = 'flex';
}
function showSong9() {
    document.getElementById('songName').innerHTML = '품 Heart';
    let song9 = document.getElementById("audio9");
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song9.style.display= 'flex';
}
function showSong10() {
    //for song name 
    document.getElementById('songName').innerHTML = 'No Love Again';

    let song10 = document.getElementById("audio10");
    //make for loop to clear a previous song
    for (let i = 1; i <= 10; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song10.style.display = 'flex';
}
//-------------------------------------------------------------------------------the weeknd part music play----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showSong1tw() {
    document.getElementById('songName').innerHTML = 'Starboy';
    let song1 = document.getElementById("audio1");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song1.style.display = 'flex';
}

function showSong2tw() {
    document.getElementById('songName').innerHTML = 'Reminder';
    let song2 = document.getElementById("audio2");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song2.style.display = 'flex';
}
function showSong3tw() {
    document.getElementById('songName').innerHTML = "Love To Lay";
    let song3 = document.getElementById("audio3");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song3.style.display = 'flex';
}
function showSong4tw() {
    document.getElementById('songName').innerHTML = 'A Lonely Night';
    let song4 = document.getElementById("audio4");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song4.style.display = 'flex';
}
function showSong5tw() {
    document.getElementById('songName').innerHTML = 'Die For You';
    let song5 = document.getElementById("audio5");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song5.style.display = 'flex';
}
function showSong6tw() {
    document.getElementById('songName').innerHTML = 'I Feel It Comong';
    let song6 = document.getElementById("audio6");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song6.style.display = 'flex';
}
// -----------------------------------------------------------------WOODZ part-----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showSong1wz() {
    document.getElementById('songName').innerHTML = 'Deep Deep Sleep';
    let song1 = document.getElementById("audio1");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song1.style.display = 'flex';
}

function showSong2wz() {
    document.getElementById('songName').innerHTML = 'Journey';
    let song2 = document.getElementById("audio2");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song2.style.display = 'flex';
}
function showSong3wz() {
    document.getElementById('songName').innerHTML = "Drowning";
    let song3 = document.getElementById("audio3");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song3.style.display = 'flex';
}
function showSong4wz() {
    document.getElementById('songName').innerHTML = 'Busted';
    let song4 = document.getElementById("audio4");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song4.style.display = 'flex';
}
function showSong5wz() {
    document.getElementById('songName').innerHTML = 'Who Knows';
    let song5 = document.getElementById("audio5");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song5.style.display = 'flex';
}
function showSong6wz() {
    document.getElementById('songName').innerHTML = 'Ready to Fight';
    let song6 = document.getElementById("audio6");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song6.style.display = 'flex';
}
function showSong7wz() {
    document.getElementById('songName').innerHTML = 'ABYSS (심연)';
    let song7 = document.getElementById("audio7");
    for (let i = 1; i <= 7; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song7.style.display = 'flex';
}
//-----------------------------------------------------------------------------billie eilish part------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showSong1b() {
    document.getElementById('songName').innerHTML = 'Getting Older';
    let song1 = document.getElementById("audio1");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song1.style.display = 'flex';
}
function showSong2b() {
    document.getElementById('songName').innerHTML = 'I Didn’t Change My Number';
    let song2 = document.getElementById("audio2");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song2.style.display = 'flex';
}
function showSong3b() {
    document.getElementById('songName').innerHTML = 'Billie Bossa Nova';
    let song3 = document.getElementById("audio3");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song3.style.display = 'flex';
}
function showSong4b() {
    document.getElementById('songName').innerHTML = 'Oxytocin';
    let song4 = document.getElementById("audio4");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song4.style.display = 'flex';
}
function showSong5b() {
    
    document.getElementById('songName').innerHTML = 'GOLDWING';
    let song5 = document.getElementById("audio5");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song5.style.display = 'flex';
}
function showSong6b() {
    document.getElementById('songName').innerHTML = 'Happier Than Ever';
    let song6 = document.getElementById("audio6");
    for (let i = 1; i <= 6; i++) {
        let song = document.getElementById("audio" + i);
        song.style.display = 'none';
        song.pause();
        song.currentTime = 0;
    }
    song6.style.display = 'flex';
}
