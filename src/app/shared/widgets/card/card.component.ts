import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label?: string;
  @Input() percentage?: string;
  @Input() total?: string;

  Highcharts = Highcharts;
  chartOptions: any;

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions =
      {
        chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          height: 60,
          margin: [2, 2, 2, 2]
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        tooltip: {
          split: true,
          outside: true
        },
        legend: {
          enabled: false
        },
        xAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        yAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        series: [{
          data: [71, 78, 39, 66]
        }]
      }

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300)
  }

}
