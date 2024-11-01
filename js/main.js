document.getElementById("h1").textContent = `Daily Routine!`;

var img = document.getElementById("img");

function time() {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();

    const mor = [" wake up", " code", " eat", " party", " repeat"];
    const aft = [" wake up", " code", " eat", " sleep", " repeat"];
    const eve = [" wake up", " code", " eat", " eat more", " repeat"];

    var img = document.getElementById("img");
    var song = document.getElementById("sour");
    var ol = document.getElementById("ol-routine");

    if(hours < 11) {
        img.src = "images/morning.jpg";
        song.src = "songs/morning.mp3";
        if(mins < 10) { 
            document.getElementById("h2").textContent = `GOOD MORNING >v< !!!! It's ` + hrs + ':0' + mins + 'am';
        } else {
            document.getElementById("h2").textContent = `GOOD MORNING >v< !!!! It's ` + hrs + ':' + mins + 'am';
        }
        
        for(i = 0; i < 5; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(mor[i]));
            ol.appendChild(li);
        }

    } else if(hours > 11 && hours < 19) {
        img.src = "images/after.jpg";
        song.src = "songs/afternoon.mp3";
        if(hours > 12) {
            var hrs = hours - 12;
        } else {
            var hrs = hours;
        }
        if(mins < 10) {
            document.getElementById("h2").textContent = `GOOD EVENOON >w< !!!! It's ` + hrs + ':0' + mins + 'pm';
        } else {
            document.getElementById("h2").textContent = `GOOD EVENOON >w< !!!! It's ` + hrs + ':' + mins + 'pm';
        }
        
        for(i = 0; i < 5; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(aft[i]));
            ol.appendChild(li);
        }

    } else {
        img.src = "images/evening.jpg";
        song.src = "songs/evening.mp3";
        if(hours > 12) {
            var hrs = hours - 12;
        } 
        if(mins < 10) {
            document.getElementById("h2").textContent = `GOOD EVENING >:3 !!!! It's ` + hrs + ':0' + mins + 'pm';
        } else {
            document.getElementById("h2").textContent = `GOOD EVENING >:3 !!!! It's ` + hrs + ':' + mins + 'pm';
        }

        for(i = 0; i < 5; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(eve[i]));
            ol.appendChild(li);
        }

    }
    
    var src = document.getElementById("img");
    src.appendChild(img);
    
    song.load();
}
