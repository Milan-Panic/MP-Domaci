const reset = () => {
    const launchs = document.querySelectorAll('.launch');
    for(let i = 0; i < launchs.length; i++)
        launchs[i].style.display = '';
}

const createFilter = years => {
    const div = document.createElement('div');
    div.setAttribute('id', 'filter');
    let select = document.createElement('select');
    const no_option = document.createElement('option');
    no_option.innerHTML = '';
    no_option.setAttribute('selected', '');
    select.appendChild(no_option);
    years.forEach(year => {
        const option = document.createElement('option');
        option.innerHTML = year;
        select.appendChild(option);
    });

    select.addEventListener('change', e => {
        reset();
        const filter = e.target.value;
        if(filter == '')
            return;
        const launchs = document.querySelectorAll('.launch');
        for(let i = 0; i < launchs.length; i++){
            let launchYear = launchs[i].querySelector('#launch-year').innerHTML;
            if(launchYear != filter)
                launchs[i].style.display = 'none';
        }
    });

    div.appendChild(select);
    return div;
}

export {
    createFilter
}