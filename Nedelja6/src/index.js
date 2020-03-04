import LaunchList from "./components/launch_list";
import Header from './components/Header';

const app=document.querySelector('#app');

// const header=Header()
let header=Header();
const launch_list=LaunchList();

const footer=document.createElement('footer');

app.append(header,launch_list,footer);