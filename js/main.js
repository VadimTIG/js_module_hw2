import './timer.js';
import './dateCalc.js';

import {
    handleCalcFormClick,
    handleTimerClick
} from './handlers.js';

dateRange.addEventListener('click', handleCalcFormClick);
timer.addEventListener('click', handleTimerClick);
