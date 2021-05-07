import { Component, OnDestroy, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import { AreaChart, BarChart, DonutChart, LineChart } from '../utilities/Chart';
import { Options, setOptions } from "highcharts";
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.scss']
})
export class HighChartsComponent implements OnInit, OnDestroy {
  donutChart = new Chart(DonutChart);
  lineChart = new Chart(LineChart);
  areaChart = new Chart(AreaChart);
  barChart = new Chart(BarChart);
  rxjsChartEg = null;
  chartSubs: Subscription;
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.dataFetcher();

  }

  private dataFetcher(): void {
    let idArray: Array<{name: string, y: number, color: string}> = [];

    this.chartSubs = this.rxjsDataObserver.subscribe( (data) => {
      for(let d of data) {
        idArray.push({name: d.email, y: +d.id, color: d.color});
      }

      const res = this.chartOptionHandler('pie', idArray);
      this.rxjsChartEg = new Chart(res);
    });
  }

  private get rxjsDataObserver() {
    return this.http.get<[{postId: number, id: number, email: string, color: string}]>('../../assets/chartData.json')
    .pipe( map( (resData) => {
        let modifiedCommentsData = [];
        resData.filter( (data) => {
            data.postId === 2 ? modifiedCommentsData.push(data) : null;
        });
        return modifiedCommentsData;
    }));
  }

  private chartOptionHandler(_type, dataArray: Array<{name: string, y: number, color: string}>): Options {
    return  {
      chart: {
        type: _type,
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
        text: 'RXJS data Chart',
      },
      legend: {
        enabled: false
      },
      series: [
        {
          type: _type,
          data: dataArray
        }
      ]
    }
  }

  ngOnDestroy() {
    this.chartSubs.unsubscribe();
  }
}
