import { getPastLaunches } from '../services/spacex_service'
import Launch from './launch';
import { createFilter } from './Filter';

const getListOfYears = data => {
    let years = [];
    years[0] = data[0].launch_year;
    for(let i = 1; i < data.length; i++){
        let add = true;
        for(let j = 0; j < years.length; j++){
            if(data[i].launch_year == years[j]){
                add = false;
                break;
            }
        }
        if(add)
            years.push(data[i].launch_year);
    }

    return years;
}

const LaunchList = () => {
    const div = document.createElement('div');
    div.className = 'launch-list';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;
        const years = getListOfYears(data);
        const filter = createFilter(years);
        div.appendChild(filter);

        // const launch=Launch()
        data.forEach(element => {
            div.appendChild(Launch(element));
        });

    }, error => { console.log(error) });

    return div;
}
export default LaunchList;