var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, {
                data: [
                  {x: 68.3, y: 5878},
                  ],
                  label: "Indonesia",
                  borderColor: "#943890",
                  backgroundColor:"rgb(248,209,246,0.1)",
                  borderWidth:2,
              }, {
                data: [
                  {x: 71.9, y: 11461},
                  ],
                  label: "Brazil",
                  borderColor: "#f7081d",
                  backgroundColor:"rgb(247,8,29,0.1)",
                  borderWidth:2,
              }
            ]
          },
          options: {
            responsive: true,
            plugins:{
              title:{
                display: true,
                text: 'Life expectancy and GDP per capita, by country',
                font: {
                  size: 24
                }
              }
            ,
            subtitle: {
              display: true,
              text: 'The United States has the largest GDP per capita and longest life expectancy.',
              font: {
                  size: 16
              }
            },
            },

            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });