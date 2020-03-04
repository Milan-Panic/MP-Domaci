import { getCompanyInfo } from '../services/spacex_service';

const createHeader = () => {
    let header = document.createElement('header');

    getCompanyInfo()
    .then(result => {
        const {data} = result;
        let name = document.createElement('p');
        name.innerHTML = data.name;
        let summary = document.createElement('p');
        summary.innerHTML = data.summary;
        header.appendChild(name);
        header.appendChild(summary);
    });

    return header;
}

export default createHeader;