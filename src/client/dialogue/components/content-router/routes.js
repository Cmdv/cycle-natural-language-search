import billPayments             from '../../pages/bills-payments/bills-payments-index';
import cancelSkyTv              from '../../pages/cancel-sky-tv/cst-index';
import downgradeSkyTv           from '../../pages/downgrade-sky-tv/dst-index';
import Home                     from '../../pages/home/home-index';
import Page404                  from '../../pages/page404/page404-index';
import problemsWithSkyBroadband from '../../pages/problems-with-sky-broadband/pwsb-index';
import problemsWithSkyTalk      from '../../pages/problems-with-sky-talk/pwst-index';
import problemsWithSkyTv      from '../../pages/problems-with-sky-tv/pwstv-index';

const routes = {
  '/': Home,
  '/bills-payments': billPayments,
  '/cancel-sky-tv': cancelSkyTv,
  '/downgrade-sky-tv': downgradeSkyTv,
  '/problems-with-sky-broadband': problemsWithSkyBroadband,
  '/problems-with-sky-talk': problemsWithSkyTalk,
  '/problems-with-sky-tv': problemsWithSkyTv,
  '*': Page404
};

export default routes
