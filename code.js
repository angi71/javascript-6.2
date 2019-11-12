let slider = document.getElementById('slider');

let folk = [
    { nafn: 'Casey', stig: 60 },
    { nafn: 'Camille', stig: 80 },
    { nafn: 'Gordon', stig: 75 },
    { nafn: 'Nigel', stig: 120 }
];

let radir = [];
const min = document.querySelector('#value-min');          
const max = document.querySelector('#value-max');           
const tafla = document.querySelector('#iniefni');

for (let i = 0; i <= 200; i++){

    let option = document.createElement("option");
    option.text = i;
    option.value = i;

    min.appendChild(option);
    max.appendChild(option);
};

function nyRod(folk){
    for(let i in folk){
        let rod = document.createElement("tr");
        rod.textContent="<tr>"+folk.nafn[i]+"</tr><tr>"+folk.stig[i]+"</tr>"; 
        radir.push({
            folk:folk,
            rod:rod
        });
    };
};

function baetaRod(radir){
    const tb = document.createElement('tbody');  
    for(i in radir) {       
      tb.textContent+=radir.rod[i];      
    };
    tafla.append(tb); 
};

function uppfaera(radir){
    for(i in radir) {       
        if (radir.rod[i].stig >= min && radir.rod[i].stig <= max){
            radir.rod[i].display = "table-row";
        }
        else{
            radir.rod[1].display = "none";
        }
      }      
};

let slider = document.getElementById("slider")
noUiSlider.create(slider,{
    start: [40, 180],
    connect: true,
    margin: 1,
    handle: 2,
    range: {
        'min': 0,
        'max': 200
    },
});

slider.noUiSlider.on('update',function(valuse, handle){
    let value = valuse[handle];
    inputNumber.value = value;
});

inputNumber.addEventListener('change',function(){
    slider.noUiSlider.set([null, this.value]);
});

nyRod();
baetaRod();
uppfaera();