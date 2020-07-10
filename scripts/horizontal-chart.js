new Chart(document.getElementById("horizontal-chart"),{
    type: 'horizontalBar',
    data: {
        labels: ["Africa","Asia","Europe","Latin America","North-America"],
        datasets:[
            {
                label: "Population",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5268,734,784,433]
            }
        ]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Predicted world Population"
        }
    }
})