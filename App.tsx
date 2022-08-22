import React from "react";
import { NativeBaseProvider } from "native-base";
import Navigation from './src/navigation/Navigation';

/**
 * @function  App
 * @description This is the initial point of the application, 
 * but the initial configurations of the project are also usually set, such as if a 
 * library is going to be used for managing the global state, 
 * such as redux or the react API, which is context.
 * @links https://redux-toolkit.js.org/ or https://es.reactjs.org/docs/context.html
 */

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
};

