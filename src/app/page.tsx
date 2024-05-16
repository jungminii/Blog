'use client'


import Sidebar from "../components/Sidebar";
import Specifies from "../components/Specifics";
import Csr from "./Csr";
import {useEffect,useState} from "react";
import { observer } from "mobx-react";
import darkModeStore from "@/store/darkModeStore";

const Home =observer(()=> {
  const darkMode = darkModeStore.isDarkMode;

  return (
    <div>
      {darkMode ? <div>Dark</div>: <div>White</div>}
      <button onClick ={()=> {
        darkModeStore.setDarkMode(!darkMode);
      }}
      >
        Change Mode
      </button>
    </div>
  );
});