import routes from '@navigation/routes';
import Login from './Auth/Login';
import RegisterStep1 from './Auth/Register/Step1';
import RegisterStep2 from './Auth/Register/Step2';
import RegisterStep3 from './Auth/Register/Step3';
import RegisterStep4 from './Auth/Register/Step4';
import RegisterStep5 from './Auth/Register/Step5';

export const auth = {
  [routes.LOGIN_SCREEN]: Login,
  [routes.REGISTER_STEP1_SCREEN]: RegisterStep1,
  [routes.REGISTER_STEP2_SCREEN]: RegisterStep2,
  [routes.REGISTER_STEP3_SCREEN]: RegisterStep3,
  [routes.REGISTER_STEP4_SCREEN]: RegisterStep4,
  [routes.REGISTER_STEP5_SCREEN]: RegisterStep5,
};

export const common = {};
