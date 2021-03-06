new Chart(document.getElementById("polar-chart"),{
    type: "polarArea",
    data: {
        labels: ["Africa","Asia","Europe","Latin America","North America"],
        datasets: [
            {
                label: "Population",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Predicted World Population in 2050"
        }
    }
})