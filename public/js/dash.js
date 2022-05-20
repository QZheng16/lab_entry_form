


const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };
  const today = new Date();
  const curDate = today.toLocaleString();


//create a data point template object
class dataTemplate {
    constructor(label, color, borderWidth) {
        this.label = label;
        this.data = [];
        this.backgroundColor = [
            color
        ];
        this.borderColor = [
            color
        ];
        this.borderWidth = borderWidth||2;
    }

    //Return 24 hourly  data of array from database
    getDailyTimeframe(year,month,day){
        let labData = [];

        for(let hour=0;hour<24;hour++){
            let labDataObject = {
                x: `${year}-${(month<10?'0'+month:month)}-${(day<10?'0'+day:day)}T${(hour<10?'0'+hour:hour)}:00:00`,
                y: Math.random() * 2.0 //need to change data from mongodb later
            }

            labData.push(labDataObject);

        }

        this.data = labData;
    };

  }


//Chart Line Data Setup
let datasetArray = [];
let year=2022, month=5, day=1;


datasetArray[0] = new dataTemplate('Raw Turbidity',CHART_COLORS.red);
datasetArray[0].getDailyTimeframe(year, month, day);
datasetArray[1] = new dataTemplate('Finish Turbidity',CHART_COLORS.orange);
datasetArray[1].getDailyTimeframe(year, month, day);
datasetArray[2] = new dataTemplate('Filter Turbidity',CHART_COLORS.yellow);
datasetArray[2].getDailyTimeframe(year, month, day);



//Line Chart Config
const config1 = {
    type: 'line',
    data: {
        datasets: datasetArray
    },
    options: {
        plugins: {
            legend: {
              labels: {
                color: "white", 
                font: {
                  size: 12
                }
              }
            }
          },
        scales: {
            y: {
                ticks:{
                    color: 'white'
                },
                beginAtZero: true,
                suggestedMax:3,
                precision: 2, //Not sure if this property works
                stepSize: 0.1 //Not sure if this property works
            },
            x: {
                type: 'time',
                time:{
                    unit: 'hour'
                },
                ticks:{
                    color: 'white'
                }
            }
  
        }
    }
}

//Bar Chart Config
const config2 = {
    type: 'bar',
    data: {
        datasets: datasetArray
    },
    options: {
        plugins: {
            legend: {
              labels: {
                color: "white", 
                font: {
                  size: 12
                }
              }
            }
          },
        scales: {
            y: {
                ticks:{
                    color: 'white'
                },
                beginAtZero: true,
                suggestedMax:3,
                precision: 2, //Not sure if this property works
                stepSize: 0.1 //Not sure if this property works
            },
            x: {
                type: 'time',
                time:{
                    unit: 'hour'
                },
                ticks:{
                    color: 'white'
                }
            }
  
        }
    }
}

//Chart Init

// Renders chart on dashboard
//Line Chart

const labDashChart1 = new Chart(document.getElementById('labDashChart1'), config1);

const labDashChart3 = new Chart(document.getElementById('labDashChart2'), config2);




//Carousel controls

const btnCarouselSlide = document.querySelectorAll("[data-slide]"); //return array of carousel buttons to control slides


btnCarouselSlide.forEach(element =>{
    element.addEventListener("click", ()=>{

        const glideSlides = document.querySelectorAll(".glide__slide"); //return array of carousel slides
        const activeSlide = document.querySelector("[data-active-slide]"); //return array of active carousel slide
        let offset = element.dataset.slide === "next" ? 1 : -1;


        let oldIndex = [...glideSlides].indexOf(activeSlide)
        let newIndex = [...glideSlides].indexOf(activeSlide) + offset;
        console.log(newIndex);
        if(newIndex < 0){
            newIndex = [...glideSlides].length-1;
        }
        if(newIndex > [...glideSlides].length-1){
            newIndex = 0;
        }
 
        glideSlides[newIndex].dataset.activeSlide = true;
        delete glideSlides[oldIndex].dataset.activeSlide;



    });


});



