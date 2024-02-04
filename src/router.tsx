import { createBrowserRouter } from 'react-router-dom';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';

export const Router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <FormStep1 />
      )
    },
  },
  {
    path: "/step2",
    Component() {
      return (
        <FormStep2 />
      )
    },
  },
  {
    path: "/step3",
    Component() {
      return (
        <FormStep3 />
      )
    },
  },
]);

export default Router;