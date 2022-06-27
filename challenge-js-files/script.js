let createCanvasOne = document.querySelector("#table1");
let firstCanvas = document.createElement("canvas");
createCanvasOne.before(firstCanvas);
firstCanvas.setAttribute("id", "graph1");


function remplacer_virgule_par_point(decimal) {
	return parseFloat((decimal+"").replace(",","."));
}


//Describe variable graph1

var table = document.getElementById("table1");
var pays=[];
var annee=[];
var period1=[];
var period2=[];
var period3=[];
var period4=[];
var period5=[];
var period6=[];
var period7=[];
var period8=[];
var period9=[];
var period10=[];
var period11=[];
for (let i=2; i<table.rows.length; i++) {
    let row=table.rows[i]
    let payst1 = row.cells[1].innerText;
    pays.push(payst1);
}
let rowyears=table.rows[1];
for (let i=2; i<rowyears.cells.length; i++) {
    let anneet1 = rowyears.cells[i].innerText;
    annee.push(anneet1);
}
for (let i=2; i<table.rows.length; i++) {
    let period1t1 = table.rows[i].cells[2].innerText;
    period1.push(remplacer_virgule_par_point(period1t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period2t1 = table.rows[i].cells[3].innerText;
    period2.push(remplacer_virgule_par_point(period2t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period3t1 = table.rows[i].cells[4].innerText;
    period3.push(remplacer_virgule_par_point(period3t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period4t1 = table.rows[i].cells[5].innerText;
    period4.push(remplacer_virgule_par_point(period4t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period5t1 = table.rows[i].cells[6].innerText;
    period5.push(remplacer_virgule_par_point(period5t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period6t1 = table.rows[i].cells[7].innerText;
    period6.push(remplacer_virgule_par_point(period6t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period7t1 = table.rows[i].cells[8].innerText;
    period7.push(remplacer_virgule_par_point(period7t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period8t1 = table.rows[i].cells[9].innerText;
    period8.push(remplacer_virgule_par_point(period8t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period9t1 = table.rows[i].cells[10].innerText;
    period9.push(remplacer_virgule_par_point(period9t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period10t1 = table.rows[i].cells[11].innerText;
    period10.push(remplacer_virgule_par_point(period10t1));
}
for (let i=2; i<table.rows.length; i++) {
    let period11t1 = table.rows[i].cells[12].innerText;
    period11.push(remplacer_virgule_par_point(period11t1));
}

//Graphique 1
let graph1 = document.getElementById('graph1').getContext('2d');
const myChart = new Chart(graph1, {
    type: 'bar',
    data: {
        labels: pays,
        datasets: [{
            label: annee[0],
            data: period1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },{
            label: annee[1],
            data: period2,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        },{
            label: annee[2],
            data: period3,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        },{
            label: annee[3],
            data: period4,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        },{
            label: annee[4],
            data: period5,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: annee[5],
            data: period6,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        },{
            label: annee[6],
            data: period7,
            backgroundColor: [
                'rgba(250, 90, 125, 0.2)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        },{
            label: annee[7],
            data: period8,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: annee[8],
            data: period9,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },{
            label: annee[9],
            data: period10,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        {
            label: annee[10],
            data: period11,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis:"x",
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});





let createCanvasTwo = document.querySelector("#table2");
let secondCanvas = document.createElement("canvas");
createCanvasTwo.before(secondCanvas);
secondCanvas.setAttribute("id", "graph2");

//Describe variable graph2:
var payst22=[];
var period1t22=[];
var period2t22=[];
var table2 = document.getElementById("table2");
for (let i=1; i<table2.rows.length; i++) {
    let payst2 = table2.rows[i].cells[1].innerText;
    payst22.push(payst2);
}
for (let i=1; i<table2.rows.length; i++) {
    let period1t2 = table2.rows[i].cells[2].innerText;
    period1t22.push(period1t2);
}
for (let i=1; i<table2.rows.length; i++) {
    let period2t2 = table2.rows[i].cells[3].innerText;
    period2t22.push(period2t2);
}

   



//Graphique 2
let graph2 = document.getElementById('graph2').getContext('2d');
const myChart2 = new Chart(graph2, {
    type: 'bar',
    data: {
       labels: payst22,
        datasets: [{
            label: "2007–09",
            data: period1t22,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        },{
            label: "2010–12",
            data: period2t22,

            backgroundColor: [
               
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// graph 3
var graph3 = document.createElement("canvas");
graph3.setAttribute("id", "ajaxTable");
document.querySelector("#here").prepend(graph3);
var x = [];
var y = []
let data3 = {
  labels: x,
  datasets: [{  data: y,
                label: null,
                borderColor : 'green',
                backgroundColor : 'green' 
            }],
};

var graph03 = new Chart(graph3, {
  type: "line",
  data: data3,
  options: {
    scales: {
        y: {
          min: 0,
          max: 60,
        }
      },
    plugins: {
        legend: {
          display: false}
}}});
