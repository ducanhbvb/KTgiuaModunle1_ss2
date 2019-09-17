let Pharmacist = function (id, name, age, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.getId = function () {
        return this.id;
    };
    this.getName = function () {
        return this.name;
    };
    this.getAge = function () {
        return this.age;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setId = function (id) {
        this.id = id;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.setAge = function (age) {
        this.age = age;
    };
    this.setAddress = function (address) {
        this.address = address;
    };
}
let PharmacistManager = function (id, name) {
    this.id = [];
    this.name = [];
    this.id.push(id);
    this.name.push(name);
    this.addPharmacist = function (id, name) {
        this.id.push(id);
        this.name.push(name);
    };
    this.getNameManager = function () {
        return this.name;
    };
    this.getIDManager = function () {
        return this.id;
    }
};
function inputPharmacist() {
    for (let i = 0; i < arrayID.length; i++) {
        document.getElementById("result").innerHTML += arrayID[i] + ',';
        document.getElementById("result").innerHTML += arrayName[i] + '<br>';
    }
}
    let TramAnh = new Pharmacist(1, 'TramAnh', 20, 'Hà Nội');
    let NgocTrinh = new Pharmacist(2, 'NgocTrinh', 25, 'Thái Bình');
    let VietNam = new PharmacistManager(1, 'TramAnh');
    VietNam.addPharmacist(2, 'NgocTrinh');
    VietNam.addPharmacist(3, 'NgocMai');
    let arrayName =VietNam.getNameManager();
    let arrayID =  VietNam.getIDManager();



