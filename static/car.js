document.addEventListener('DOMContentLoaded', function() {
    const brandDropdown = document.getElementById('brand-dropdown');
    const carDropdown = document.getElementById('car-dropdown');


const car = {
    //Acura
    0: [{name:'MDX', value: 130},{name:'TL', value: 189}, 
    {name:'RDX', value: 163}, {name:'ZDX', value: 214}, {name: 'TSX', value: 191}],

    //Alphina
    1: [
        {name:'B3', value:7}
    ],


    //Audi
    2: [
        {name:'S6',value:175}
    ],


    //Bentley

    3: [
        {name:'Arnage',value:3}
    ],


    //BMW

    4:[
        {name:'BMW 740',value:14},{name:'BMW 750',value:16},{name:'BMW 730',value:13},
        {name:'BMW 528',value:11},{name:'BMW 525',value:10},{name:'BMW 535',value:12},{name:'BMW 325',value:8},
        {name:'BMW 335',value:9},{name:'BMW 745',value:15},{name:'BMW X3',value:17},{name:'BMW X6',value:18}
    ],


    //Chevrolet

    5: [
        {name:'Traverse',value:198},{name:'Camaro',value:67},{name:'Evanda',value:96}
    ],


    //DAF

    6: [
        {name:'DAF 45',value:79},{name:'DAF 95XF TRACTOR HEAD',value:80},{name:'DAF FA 55.180',value:81}
    ],


    //Dodge

    7: [
        {name:'Charger',value:71}
    ],


    //Fiat
    8: [
        {name:'Ducato', value:85}
    ],


    //Ford
    9: [
        {name:'F 150',value:99},{name:'Escape',value:95},{name:'Fusion',value:105},
        {name:'Explorer',value:98},{name:'Edge',value:92},{name:'Focus',value:103},
        {name:'Expedition',value:97},{name:'Mondeo',value:140},{name:'Mustang',value:143},
        {name:'Transit',value:197}
    ],


    //Gac
    10: [
        {name:'Gonow Other',value:113}
    ],


    //Gmc
    11:[
        {name:'Terrain',value:193}
    ],


    //Honda
    12: [
        {name:'Accord',value:2},{name:'CR-V',value:62},{name:'Odyssey',value:146},
        {name:'Pilot',value:157},{name:'Crosstour',value:78},{name:'Civic',value:73},
        {name:'Element',value:94},{name:'Insight',value:123},{name:'Ridgeline',value:172},
        {name:'Fit',value:102}
    ],


    //Hyundai
    13: [
        {name:'Elantra',value:93},{name:'Sonata',value:183},{name:'Santa Fe',value:177},
        {name:'Azera',value:6},{name:'Tucson',value:199},{name:'ix35',value:215}
    ],


    //Infiniti
    14: [
        {name:'Infiniti JX',value:120},{name:'Infiniti FX',value:119},{name:'Infiniti QX80',value:122},
        {name:'Infiniti M35',value:121}
    ],


    //Isuzu
    15: [
        {name:'NQR',value:144}
    ],

    //Iveco
    16: [
        {name:'TRUCK',value:190},{name:'EUROTECH 7.50E-16',value:90}
    ],



    //Jaguar
    17:[
        {name:'X- Type',value:208},{name:'XJ8',value:211}
    ],

    //Jeep
    18:[
        {name:'Wrangler',value:206},{name:'Cherokee',value:72}
    ],


    //Jmc
    19: [
        {name:'Vigus',value:204}
    ],

    //Kia
    20: [
        {name:'Stinger',value:186},{name:'Cerato',value:70},{name:'Picanto',value:156},
        {name:'Optima',value:147},{name:'Sorento',value:184},{name:'Soul',value:185},
        {name:'Rio',value:173}
    ],


    //Land Rover
    21:[
        {name:'Discovery',value:84},{name:'Range Rover',value:168},{name:'Range Rover Evoque',value:169},
        {name:'Range Rover Sport',value:170},{name:'Range Rover Velar',value:171}
    ],


    //Lexus
    22: [
        {name:'ES 300',value:87},{name:'ES 330',value:88},{name:'ES 350',value:89},
        {name:'GX 460',value:108},{name:'GX 470',value:109},{name:'GS 300',value:106},
        {name:'GS 350',value:107},{name:'RX 300',value:164},{name:'RX 330',value:165},
        {name:'RX 350',value:166},{name:'RX 400',value:167},{name:'LX 570',value:128},
        {name:'IS 250',value:118},{name:'CT 200h',value:63},{name:'LS 460',value:126},
    ],


    //Lincoln
    23: [
        {name:'Mark',value:132}
    ],


    //Mack
    24: [
        {name:'CH613',value:60},{name:'CH613 CONVENTIONAL CAB',value:61},{name:'CXN613',value:64},
        {name:'CXN613 CAB BEHIND ENGINE',value:65}
    ],



    //Man
    25: [
        {name:'BOCKMANN',value:19},{name:'Diesel 19.314 FILT N',value:83},{name:'LE 8.180 PLATFORM TRUCK',value:125}
    ],


    //Mazda
    26: [
        {name:'Mazda 6',value:136},{name:'Mazda Tribute',value:138},{name:'Mazda 323',value:135},
        {name:'Mazda CX-9',value:137}
    ],


    //Mercedes
    27: [
        {name:'Benz GLK 350',value:52},{name:'Benz E 200',value:37},{name:'Benz E 300',value:38},
        {name:'Benz ML 350',value:54},{name:'Benz G 63 AMG',value:43},{name:'Benz S 550',value:58},
        {name:'Benz GLC 300',value:47},{name:'Benz CLA 250',value:35},{name:'Benz E 350',value:40},
        {name:'Benz GL 450',value:44},{name:'Benz E 320',value:39},{name:'Benz C 300',value:30},
        {name:'Benz Maybach',value:56},{name:'Benz GLE 350',value:48},{name:'Benz 320',value:23},
        {name:'Benz E 550',value:41},{name:'Benz CLS 500',value:36},{name:'Benz 300',value:22},
        {name:'Benz 200',value:20}, {name:'Benz 814',value:27},{name:'Benz 709 DB',value:26},
        {name:'Benz 450',value:25},{name:'Benz C 180',value:28},
        {name:'Benz G 550',value:42},{name:'Benz C 350',value:32},{name:'Benz C 450 AMG',value:33},
        {name:'Benz GLA 180',value:45},{name:'Benz GLA 250',value:46},{name:'Benz GLK 300',value:51},
        {name:'Benz 350',value:24},{name:'Benz C 250',value:29},{name:'Benz GLE 450',value:50},
        {name:'Benz 220',value:21},{name:'Benz ML 430',value:55},{name:'Benz C 63 AMG',value:34},
        {name:'Benz GLE 43 AMG',value:49},{name:'Benz ML 320',value:53},{name:'Benz C 320',value:31},
        {name:'Benz S 450',value:57}
    ],
    

    //Mini
    28: [
        {name:'Cooper',value:74},{name:'Cooper Countryman',value:75},{name:'Cooper Coup',value:76}
    ],


    //Mitsubishi
    29: [
        {name:'Pajero',value:148},{name:'Montero',value:141},{name:'Mitsubishi L200',value:139},
        {name:'Eclipse',value:91},{name:'Galant',value:110}
    ],


    //Nissan
    30: [
        {name:'Cabstar',value:66},{name:'Pathfinder',value:151},{name:'Xterra',value:212},
        {name:'Murano',value:142},{name:'Quest',value:161},{name:'Frontier',value:104},
        {name:'Rogue',value:174},{name:'Altima',value:145},{name:'X-Trail',value:207},
        {name:'Titan',value:195},{name:'Sentra',value:178},{name:'Versa',value:202},
        {name:'Maxima',value:134},{name:'Primera',value:159},{name:'Infiniti M90.150',value:117}

    ],


    //Peugeot
    31: [
        {name:'206',value:152},{name:'308',value:154},{name:'307',value:153},
        {name:'607',value:155}
    ],


    //Pontiac
    32: [
        {name:'Vibe',value:203}
    ],


    //Porshe
    33: [
        {name:'Panamera',value:149},{name:'Cayenne',value:69},{name:'Macan',value:131}
    ],


    //Rolls-Royce
    34: [
        {name:'Ghost',value:111}
    ],


    //Toyota
    35: [
        {name:'Corolla',value:77},{name:'C-HR',value:59},{name:'Avalon',value:4},
        {name:'Land Cruiser',value:129},{name:'Venza',value:201},{name:'Prius',value:160},
        {name:'Sienna',value:181},{name:'Highlander',value:115},{name:'Sequoia',value:179},
        {name:'Camry',value:68},{name:'Matrix',value:133},{name:'DYNA',value:86},
        {name:'RAV 4',value:162},{name:'Tundra',value:200},{name:'Vitz',value:205},
        {name:'Hilux',value:116},{name:'Solara',value:182},{name:'Prado',value:158},
        {name:'4-Runner',value:1},{name:'Avensis',value:5},,{name:'Hiace',value:114},
        {name:'Tacoma',value:192},{name:'DYNA 200',value:82},{name:'Yaris',value:213}
    ],


    //Volkswagen
    36: [
        {name:'Passat',value:150},{name:'Jetta',value:124},{name:'Tiguan',value:194},
        {name:'17.22',value:0},{name:'Golf',value:122},{name:'T6',value:188},
        {name:'LT',value:127},{name:'T4 Caravelle',value:187},{name:'Sharan',value:180},{name:'Touareg',value:196}
    ],


    //Volvo
    37: [
        {name:'S80',value:176},{name:'FL6',value:101},{name:'XC60',value:209},
        {name:'XC90',value:210},{name:'FL12',value:100}
    ],









}

// Event listener for state selection
brandDropdown.addEventListener('change', function () {
    carDropdown.innerHTML = ''; // Clear the car dropdown

    const selectedbrand = brandDropdown.value;
    const stateCar = car[selectedbrand] || [];

    if(Array.isArray(stateCar)){

    
        stateCar.forEach(car => {
            const option = document.createElement('option');
            option.value = car.value; // Set the value to the car's integer value
            option.textContent = car.name; // Display the car type in the dropdown
            carDropdown.appendChild(option);
        });
    }
});    

});