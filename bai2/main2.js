let Rat = function (name, weight, speed, status, talk) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.talk = talk;
    this.getStatus = function () {
        return this.status;
    }

}
let Cat = function (name, weight, speed, status, talk) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.talk = talk;
    this.catchRat = function (namerat, namecat) {
        if (namerat.speed < namecat.speed) {
            return true;
        } else {
            return false;
        }
    };
    this.eatRat = function (namerat, namecat) {
        if (this.catchRat(namerat, namecat)) {
            this.weight += namerat.weight;
            namerat.status = 'died';
        } else {
            document.getElementById('result').innerHTML += 'Havent caught the mouse yet';
        }
    }
}
let name=' jerry';
let weight=5;
let speed=20;
let status='living';
let talk=
let jerry=new Rat()