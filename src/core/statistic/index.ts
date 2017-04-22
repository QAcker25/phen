import * as $ from 'jquery';
import controller from './controller';

const openStatisticButton = $('#openStatisticButton');

if(openStatisticButton.length > 0) {
    controller.init();
    openStatisticButton.on('click', () => {
        controller.open();
    });
}

export default {

}