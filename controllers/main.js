async function getData() {
    var objAxios = {
        url: "../data/Data.json",
        method: "GET",
        responseType: "json",
    };
    let data = await axios(objAxios);

    return data.data;
}
function renderNavPills(arrPill) {
    let navPill = document.querySelector('.nav-pills');
    let navTab = document.querySelector('.tab-content');
    let pillContent = '';
    let tabContent = '';
    let listUI = `
        <div class="w-100 row g-5">
        </div>
    `
    arrPill.map((pill, index) => {
        if (index == 0) {
            pillContent+= `
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" data-target="#${pill.type}">${pill.showName}</a>
            
        </li>
    `;
            tabContent +=  `
            <div class="tab-pane fade show active" id="${pill.type}" role="tabpanel" aria-labelledby="home-tab">${listUI}</div>
            
            `
            
        }
        else {
            pillContent+= `
        <li class="nav-item">
            <a class="nav-link " data-toggle="tab" data-target="#${pill.type}" >${pill.showName}</a>
        </li>
    `;
    tabContent +=  `
            <div class="tab-pane fade show" id="${pill.type}" role="tabpanel">${listUI}</div>
            ${listUI}
            `

        }
    });
   
    navPill.innerHTML = pillContent;
    navTab.innerHTML = tabContent;
}
function renderProduct(arrProducts){
    
    arrProducts.forEach(item=>{
        let ele = document.querySelector(`#${item.type} .row`);

        let content=`
            <div class="col-4 my-4 text-center" id="${item.id}">
                <img src="${item.imgSrc_jpg}"/>
                <h5>${item.name}</h5>
                <button class="btn btn-primary dressing" data-image='${item.imgSrc_png} data-type='${item.type}'>Thử đồ</button>
            </div>
        `
        ele.innerHTML+= content;

    })
}
function table(){}
async function renderUI() {
    let data = await getData();
    renderNavPills(data.navPills);
    renderProduct(data.tabPanes);

}
function dressing(){
    let dressingBtn = documnent.querySelectorAll('.dressing');
    dressingBtn.addEventListener('click', (e)=>{
        
    })
}
renderUI();