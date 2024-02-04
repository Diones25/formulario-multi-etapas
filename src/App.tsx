import { RouterProvider } from "react-router-dom";
import Router from "./router";
import { FormProvider } from './contexts/FormContext';

const App = () => {
  return (
    <FormProvider>
      <RouterProvider router={Router} />
    </FormProvider>
  )
}

export default App;