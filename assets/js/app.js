const ctx = document.getElementById('chart').getContext('2d');

const BAR_COLORS = ['#85d62c', '#f58f24', '#d00720'];

const data = {
  labels: ['Hired', 'Interviewed', 'Rejected'],
  datasets: [
    {
      data: [2, 4, 5],
      backgroundColor: BAR_COLORS,
      borderColor: BAR_COLORS,
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 8,
          fontColor: '#929ba3',
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontSize: 9,
          fontColor: '#929ba3',
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

const myBarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: data,
  options: options,
});
