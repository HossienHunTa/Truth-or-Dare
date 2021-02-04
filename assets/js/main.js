let Q = {
    "Sip":["سوالات جرعت"],
    "Truth":["سولات حقیقت"]
};

let Players = []; 
let Player = null;

const AddPlayer = function() {
    let PlayerName = document.getElementById("player_name");
    if (!PlayerName.value) {
        PlayerName.placeholder = "لطفا نام بازیکن را وارد کنید...";
    }else {
        let div = document.getElementById("player_show");
        let ElementButton = document.createElement("button");
        ElementButton.name, ElementButton.value, ElementButton.innerHTML = PlayerName.value;
        ElementButton.className = "button is-dark is-hovered ml-2 mr-2 mt-2";
        div.appendChild(ElementButton);
        Players.push(PlayerName.value);
    }
    PlayerName.value = "";
};

const RunGame = function() {
    if (Players.length <= 1){
        alert('حداقل بازیکن ها 2 نفر است ابتدا اسم دو نفر را وارد کنید!!')
    }else{
        document.getElementById("PLayersCard").innerHTML = "<p class='control has-text-centered'>👇😮👇</p>";
        document.getElementById("RunGameCard").innerHTML = '<input type="button" class="button is-fullwidth ml-1 is-primary is-rounded modal-button" data-target="modal" aria-haspopup="true" value="بازی بچرخه" name="StartGame" onclick="StartGame()" id="StartGame"><input type="button" class="button mr-1 is-fullwidth is-danger is-rounded" value="پایان بازی" name="EndGame" onclick="EndGame()" id="EndGame">';
        document.getElementById("HelpText").innerHTML = "<b>خوب تبریک میگم شما بازی شروع کردین</b><br><br><b>لطفا تا پایان بازی خود این صفحه را ریفریش یا نبندید!</b><br><br>";
    }
};

const StartGame = function() {
    $(document).ready(function(){
        $(".modal").toggleClass("is-active");
    });
    Player = Players[Math.floor(Math.random() * Players.length)];
    document.getElementById("TextBox").innerText = `خوب ${Player} یکی از گزینه ها رو انتخاب کن :)`;
};

const EndGame = function() {
    window.location.reload(true);
    alert('بازی شما با موفقیت به پایان رسید!');
};

const Sip = function() {
    let Sips = Q.Sip;
    let Sip = Sips[Math.floor(Math.random() * Sips.length)];
    document.getElementById("q").innerText = Sip;
};

const Truth = function() {
    let Truths = Q.Truth;
    let Truth = Truths[Math.floor(Math.random() * Truths.length)];
    document.getElementById("q").innerText = Truth;
};

const CheckAnswer = function() {
    let q = document.getElementById('q');
    if (q.innerText == ''){
        return false;
    }else{
        q.innerText = "";
        return true;
    }
};