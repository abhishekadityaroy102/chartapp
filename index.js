var ctx, chart;

window.addEventListener("load", function () {
  var btn = document.getElementById("savebtn");
  btn.addEventListener("click", () => {
    let month = document.getElementById("month").value;
    let perfomance = document.getElementById("perfomance").value;
    let attendence = document.getElementById("attendence").value;
    addData(chart, { month, perfomance, attendence });
  });
  var removebtn = document.getElementById("removebtn");
  removebtn.addEventListener("click", () => {
    removefun(chart);
  });
  ctx = document.getElementById("myChart");
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["january", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "attendence",
          data: [2, 3, 5, 6, 3, 5, 3],
          borderWidth: 1,
        },
        {
          label: "perfomance",
          data: [3, 2, 5, 7, 3, 6, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
function addData(chart, { month, perfomance, attendence }) {
  console.log(month, perfomance);
  chart.data.labels.push(month);
  chart.data.datasets[0].data.push(attendence);
  chart.data.datasets[1].data.push(perfomance);
  chart.update();
}
function removefun(chart) {
  console.log("hi", chart);
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => dataset.data.pop());
  chart.update();
}
