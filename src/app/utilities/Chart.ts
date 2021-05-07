import { Options } from "highcharts";

export const DonutChart: Options =  {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0
      }
    }
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '',
  },
  legend: {
    enabled: false
  },
  series: [
    {
      type: 'pie',
      data: [
        {name: 'a', y: 1, color: 'red'},
        {name: 'b', y: 2, color: 'blue'},
        {name: 'c', y: 3, color: 'green'},
        {name: 'd', y: 4, color: 'yellow'},
        {name: 'e', y: 5, color: 'pink'},

      ]
    }
  ]
}

export const LineChart: Options =  {
  chart: {
    type: 'line',
    plotShadow: false,
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0
      }
    }
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '',
  },
  legend: {
    enabled: false
  },
  series: [
    {
      type: 'line',
      data: [
        {name: 'a', y: 1, color: 'red'},
        {name: 'b', y: 2, color: 'blue'},
        {name: 'c', y: 3, color: 'green'},
        {name: 'd', y: 4, color: 'yellow'},
        {name: 'e', y: 5, color: 'pink'},

      ]
    }
  ]
}

export const AreaChart: Options =  {
  chart: {
    type: 'area',
    plotShadow: false,
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0
      }
    }
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '',
  },
  legend: {
    enabled: false
  },
  series: [
    {
      type: 'area',
      data: [
        {name: 'a', y: 1, color: 'red'},
        {name: 'b', y: 2, color: 'blue'},
        {name: 'c', y: 3, color: 'green'},
        {name: 'd', y: 4, color: 'yellow'},
        {name: 'e', y: 5, color: 'pink'},

      ]
    }
  ]
}

export const BarChart: Options =  {
  chart: {
    type: 'bar',
    plotShadow: false,
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0
      }
    }
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '',
  },
  legend: {
    enabled: false
  },
  series: [
    {
      type: 'bar',
      data: [
        {name: 'a', y: 1, color: 'red'},
        {name: 'b', y: 2, color: 'blue'},
        {name: 'c', y: 3, color: 'green'},
        {name: 'd', y: 4, color: 'yellow'},
        {name: 'e', y: 5, color: 'pink'},

      ]
    }
  ]
}



