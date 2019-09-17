let Remote = function (id) {
    this.id = id;
    this.setConTrolpower = function (name) {
        if (name.power === 'on') {
            name.power = 'off';
        } else {
            name.power = 'on';
        }
    };
    this.addVolum = function (check) {
        if (check === 1) {
            tivi.volum++;
        } else {
            tivi.volum--;
        }
    }
}
let Tivi = function (status, volum, power) {
    this.status = status;
    this.volum = volum;
    this.power = power;
    this.setStatus = function (status) {
        this.status = status;
    };
    this.getTivi = function () {
        return 'trang thai ti vi: ' + this.power + ' kenh dang bat= ' + this.status + ' am luong :' + this.volum;
    }
};
function onoff() {
    remote.setConTrolpower(tivi);
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += tivi.power + '<br>';
}

function Volum(check) {
    if (tivi.power === 'on') {
        remote.addVolum(check);
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML += 'volumn '+tivi.volum + '<br>';
    } else {
        printPoweroff();
    }
}

function control(number) {
    if (tivi.power === 'on') {
    tivi.setStatus(number);
    checkstatus();
    } else {
        printPoweroff();
    }
}

function printPoweroff() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += 'tivi ' + tivi.power;
}

function checkstatus() {
    if (tivi.power === 'on') {
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML += tivi.getTivi() + '<br>';
    } else {
        printPoweroff();
    }
}
let idRemote = 1;
let remote = new Remote(idRemote);
let statusTivi = 1;
let volumTivi = 50;
let powerTivi = 'off';
let tivi = new Tivi(statusTivi, volumTivi, powerTivi);

