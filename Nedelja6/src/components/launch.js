const Launch = (launch) => {
    // Object destructuring
    let {
        mission_name,
        launch_year,
        launch_date_utc,
        links: { mission_patch }
    } = launch;
    const div = document.createElement('div');
    div.className = 'launch';

    const inner_divs = []
    // Inner div 0 je za sliku
    // Inner div 1 je za Naziv
    // Inner div 2 je za Datum
    for (let i = 0; i < 3; i++) {
        let innerDivx = document.createElement('div');
        innerDivx.className = `inner-div-${i}`;
        inner_divs.push(innerDivx);
        div.appendChild(innerDivx);
    }
    //Slika
    const img=document.createElement('img');
    img.src=mission_patch;
    inner_divs[0].appendChild(img);

    // Naziv misije
    inner_divs[1].innerHTML=`<span>${mission_name}</span>`

    //Datum i godina
    let date= new Date(launch_date_utc);
    const options={weekday:'short',year:'numeric',month:'numeric',day:'numeric'}
    // date.toLocaleDateString()
    inner_divs[2].innerHTML=
    `<span id="launch-year">${launch_year}</span><span>${date.toLocaleDateString('sr-RS',options)}</span>`;

    return div;
}

export default Launch;