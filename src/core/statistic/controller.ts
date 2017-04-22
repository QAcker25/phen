import * as $ from 'jquery';
import * as Chart from 'chart.js';
const template = require('./temp.html');

class StatisticController {
    $e: JQuery = null;
    $chart: HTMLCanvasElement = null;

    private renderChart() {
        const ctx = this.$chart.getContext('2d');
        const contentBox = this.$e.find('.statistic--content')[0];
        ctx.canvas.width = contentBox.clientWidth;
        ctx.canvas.height = contentBox.clientHeight;
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }

    init() {
        let $e = $('#statistic');
        if($e.length <= 0) {
            $('body').append(template);
            $e = $('#statistic');
        }
        this.$e = $e;

        $('#closeStatisticButton').on('click', () => {
            this.hide();
        });

        this.$chart = this.$e.find('#statisticChartCanvas')[0] as HTMLCanvasElement;
    }

    open() {
        this.renderChart();
        this.$e.removeClass('hide');
    }

    hide() {
        this.$e.addClass('hide');
    }

}

export default new StatisticController();