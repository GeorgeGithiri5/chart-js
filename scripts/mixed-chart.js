new Chart(document.getElementById('mixed-chart'),{
    type: 'bar',
    data: {
        labels: ["1900","1950","1999","2050"],
        datasets: [{
            label: "Europe",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408,547,675,734],
            fill: false
        },
        {
            label: "Africa",
            type: "line",
            borderColor:"#3e95cd",
            data: [133,221,738,2478],
            fill: false
        },{
            label: "Europe",
            type: "bar",
            borderColor: "#8e5ea2",
            data: [408,547,675,734],
            fill: false
        },{
            label: "Africa",
            type: "bar",
            borderColor:"#3e95cd",
            data: [133,221,738,2478],
            fill: false
        }
    ]
    },
    options: {
        title: {
            display: true,
            text: "Predicted Population"
        },
        legend: {display: false}
    }
})