/* CREATION OF ARRAY WITH FETCH */

const services = [
]

const createServiceArray = async () => {
const resp = await fetch("../data.json")

const data = await resp.json()

data.forEach((post) => {
const service = new Object();
    service.name = post.name
    service.price = post.price
    services.push(service);
});
};
createServiceArray();

/*     PROJECT QTY SELECTOR     */

    document.querySelector('#projectsQty').addEventListener("change", function() {
        if (this.value == "1") {
            showServicesField1()
            showSubmitBtn();
        }else if (this.value == "2") {
            showServicesField2()
            showSubmitBtn();
        }else if (this.value == "3") {
            showServicesField3()
            showSubmitBtn();
        }else if (this.value == "4") {
            showServicesField4()
            showSubmitBtn();
        }else if (this.value == "5") {
            showServicesField5()
            showSubmitBtn();
        }
    });

/*     PROJECT FIELDS - GET ELEMENTS & FUNCTIONS     */

    const servicesField1 = document.getElementById('servicesField1');
    const servicesField2 = document.getElementById('servicesField2');
    const servicesField3 = document.getElementById('servicesField3');
    const servicesField4 = document.getElementById('servicesField4');
    const servicesField5 = document.getElementById('servicesField5');

    function showServicesField1() {
        servicesField1.className = 'servicesFieldVisible';
        showSubmitBtn();
    }
    function showServicesField2() {
        servicesField1.className = 'servicesFieldVisible';
        servicesField2.className = 'servicesFieldVisible';
        showSubmitBtn();
    }
    function showServicesField3() {
        servicesField1.className = 'servicesFieldVisible';
        servicesField2.className = 'servicesFieldVisible';
        servicesField3.className = 'servicesFieldVisible';
        showSubmitBtn();
    }
    function showServicesField4() {
        servicesField1.className = 'servicesFieldVisible';
        servicesField2.className = 'servicesFieldVisible';
        servicesField3.className = 'servicesFieldVisible';
        servicesField4.className = 'servicesFieldVisible';
        showSubmitBtn();
    } 
    function showServicesField5() {
        servicesField1.className = 'servicesFieldVisible';
        servicesField2.className = 'servicesFieldVisible';
        servicesField3.className = 'servicesFieldVisible';
        servicesField4.className = 'servicesFieldVisible';
        servicesField5.className = 'servicesFieldVisible';
        showSubmitBtn();
    } 
    

/*     SUBMIT BUTTON - GET ELEMENT & SHOW FUNCTION     */

    const SubmitBtn = document.getElementById('submitProjectsBtn');

    function showSubmitBtn() {
        SubmitBtn.className = 'submitButtonVisible';
    } 


/*     SUBMIT BUTTON - CLICKON FUNCTION AND OTHERS    */

SubmitBtn.onclick=(stop)=>{
    stop.preventDefault();
    confirmation();
    }

    function confirmation(){
    Swal.fire({
        title: 'Are you sure?',
        text: "Make sure all your projects have their services properly selected!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#FE9900',
        cancelButtonColor: 'black',
        confirmButtonText: 'Go ahead!',
        cancelButtonText: 'Modify',
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Amazing!',
            'Here is your budget.',
            'success'
        )
        projectsPush();
        projectsStorage();
        showBudgetArtistField();
        BudgetsShow();
        hideFields();
        } else if (result.isDenied) {
            Swal.fire();
        }
    })
}

const fullNameAndProjectsQtyField = document.getElementById('fullNameAndProjectsQtyField');

function hideFields(){
    fullNameAndProjectsQtyField.className = 'servicesFieldHidden';
    document.getElementById('budgetText').innerHTML = 'Here is an idea of ​​the budget for your projects!';
    }

function projectsPush(){
    project1servicesPush();
    project2servicesPush();
    project3servicesPush();
    project4servicesPush();
    project5servicesPush();
    }

function projectsStorage(){
    firstProjectStorage();
    secondProjectStorage();
    thirdProjectStorage();
    fourthProjectStorage();
    fifthProjectStorage();
    }

function BudgetsShow(){
    showBudgetField1();
    showBudgetField2();
    showBudgetField3();
    showBudgetField4();
    showBudgetField5();
    }


/*     PROJECT 1 - , ARRAY, GET ELEMENTS & FUNCTIONS  */

const project1services = [
]

const songwriting1 = document.getElementById('service-1.1');
const arrangements1 = document.getElementById('service-1.2');
const transcription1 = document.getElementById('service-1.3');
const production1 = document.getElementById('service-1.4');
const mix1 = document.getElementById('service-1.5');
const mastering1 = document.getElementById('service-1.6');
const distribution1 = document.getElementById('service-1.7');


function project1servicesPush(){
songwriting1Push();
arrangements1Push();
transcription1Push();
production1Push();
mix1Push();
mastering1Push();
distribution1Push();
}


function songwriting1Push(){
    if (songwriting1.checked == true){
        project1services.push(services[0]);
    }
}
function arrangements1Push(){
    if (arrangements1.checked == true){
        project1services.push(services[1]);
    }
}
function transcription1Push(){
    if  (transcription1.checked == true){
    project1services.push(services[2]);
}
}
function production1Push(){
    if  (production1.checked == true){
    project1services.push(services[3]);
}
}
function mix1Push(){
    if  (mix1.checked == true){
    project1services.push(services[4]);
}
}
function mastering1Push(){
    if  (mastering1.checked == true){
    project1services.push(services[5]);
}
}
function distribution1Push(){
    if  (distribution1.checked == true){
    project1services.push(services[6]);
}
}

/*     PROJECT 2 - , ARRAY, GET ELEMENTS & FUNCTIONS  */


const project2services = [
]

const songwriting2 = document.getElementById('service-2.1');
const arrangements2 = document.getElementById('service-2.2');
const transcription2 = document.getElementById('service-2.3');
const production2 = document.getElementById('service-2.4');
const mix2 = document.getElementById('service-2.5');
const mastering2 = document.getElementById('service-2.6');
const distribution2 = document.getElementById('service-2.7');


function project2servicesPush(){
songwriting2Push();
arrangements2Push();
transcription2Push();
production2Push();
mix2Push();
mastering2Push();
distribution2Push();
}


function songwriting2Push(){
    if (songwriting2.checked == true){
        project2services.push(services[0]);
    }
}
function arrangements2Push(){
    if (arrangements2.checked == true){
        project2services.push(services[1]);
    }
}
function transcription2Push(){
    if  (transcription2.checked == true){
    project2services.push(services[2]);
}
}
function production2Push(){
    if  (production2.checked == true){
    project2services.push(services[3]);
}
}
function mix2Push(){
    if  (mix2.checked == true){
    project2services.push(services[4]);
}
}
function mastering2Push(){
    if  (mastering2.checked == true){
    project2services.push(services[5]);
}
}
function distribution2Push(){
    if  (distribution2.checked == true){
    project2services.push(services[6]);
}
}

/*     PROJECT 3 - , ARRAY, GET ELEMENTS & FUNCTIONS  */


const project3services = [
]

const songwriting3 = document.getElementById('service-3.1');
const arrangements3 = document.getElementById('service-3.2');
const transcription3 = document.getElementById('service-3.3');
const production3 = document.getElementById('service-3.4');
const mix3 = document.getElementById('service-3.5');
const mastering3 = document.getElementById('service-3.6');
const distribution3 = document.getElementById('service-3.7');


function project3servicesPush(){
songwriting3Push();
arrangements3Push();
transcription3Push();
production3Push();
mix3Push();
mastering3Push();
distribution3Push();
}


function songwriting3Push(){
    if (songwriting3.checked == true){
        project3services.push(services[0]);
    }
}
function arrangements3Push(){
    if (arrangements3.checked == true){
        project3services.push(services[1]);
    }
}
function transcription3Push(){
    if  (transcription3.checked == true){
    project3services.push(services[2]);
}
}
function production3Push(){
    if  (production3.checked == true){
    project3services.push(services[3]);
}
}
function mix3Push(){
    if  (mix3.checked == true){
    project3services.push(services[4]);
}
}
function mastering3Push(){
    if  (mastering3.checked == true){
    project3services.push(services[5]);
}
}
function distribution3Push(){
    if  (distribution3.checked == true){
    project3services.push(services[6]);
}
}

/*     PROJECT 4 - , ARRAY, GET ELEMENTS & FUNCTIONS  */


const project4services = [
]

const songwriting4 = document.getElementById('service-4.1');
const arrangements4 = document.getElementById('service-4.2');
const transcription4 = document.getElementById('service-4.3');
const production4 = document.getElementById('service-4.4');
const mix4 = document.getElementById('service-4.5');
const mastering4 = document.getElementById('service-4.6');
const distribution4 = document.getElementById('service-4.7');


function project4servicesPush(){
songwriting4Push();
arrangements4Push();
transcription4Push();
production4Push();
mix4Push();
mastering4Push();
distribution4Push();
}


function songwriting4Push(){
    if (songwriting4.checked == true){
        project4services.push(services[0]);
    }
}
function arrangements4Push(){
    if (arrangements4.checked == true){
        project4services.push(services[1]);
    }
}
function transcription4Push(){
    if  (transcription4.checked == true){
    project4services.push(services[2]);
}
}
function production4Push(){
    if  (production4.checked == true){
    project4services.push(services[3]);
}
}
function mix4Push(){
    if  (mix4.checked == true){
    project4services.push(services[4]);
}
}
function mastering4Push(){
    if  (mastering4.checked == true){
    project4services.push(services[5]);
}
}
function distribution4Push(){
    if  (distribution4.checked == true){
    project4services.push(services[6]);
}
}

/*     PROJECT 5 - , ARRAY, GET ELEMENTS & FUNCTIONS  */


const project5services = [
]

const songwriting5 = document.getElementById('service-5.1');
const arrangements5 = document.getElementById('service-5.2');
const transcription5 = document.getElementById('service-5.3');
const production5 = document.getElementById('service-5.4');
const mix5 = document.getElementById('service-5.5');
const mastering5 = document.getElementById('service-5.6');
const distribution5 = document.getElementById('service-5.7');


function project5servicesPush(){
songwriting5Push();
arrangements5Push();
transcription5Push();
production5Push();
mix5Push();
mastering5Push();
distribution5Push();
}


function songwriting5Push(){
    if (songwriting5.checked == true){
        projec5services.push(services[0]);
    }
}
function arrangements5Push(){
    if (arrangements5.checked == true){
        project5services.push(services[1]);
    }
}
function transcription5Push(){
    if  (transcription5.checked == true){
    project5services.push(services[2]);
}
}
function production5Push(){
    if  (production5.checked == true){
    project5services.push(services[3]);
}
}
function mix5Push(){
    if  (mix5.checked == true){
    project5services.push(services[4]);
}
}
function mastering5Push(){
    if  (mastering5.checked == true){
    project5services.push(services[5]);
}
}
function distribution5Push(){
    if  (distribution5.checked == true){
    project5services.push(services[6]);
}
}


/*     STORAGE AND SHOW BUDGET FUNCTIONS  */

const budgetField1 = document.getElementById('budgetField1');
const budgetField2 = document.getElementById('budgetField2');
const budgetField3 = document.getElementById('budgetField3');
const budgetField4 = document.getElementById('budgetField4');
const budgetField5 = document.getElementById('budgetField5');

const projectName1 = document.getElementById('projectName1');
const projectName2 = document.getElementById('projectName2');
const projectName3 = document.getElementById('projectName3');
const projectName4 = document.getElementById('projectName4');
const projectName5 = document.getElementById('projectName5');


const fullName = document.getElementById('fullName');
const budgetArtistDiv = document.getElementById('budgetArtist');


function showBudgetArtistField() {
    /* Artist Name --------------------------------------------------------------*/
    sessionStorage.setItem('fullName', fullName.value);
    let artistNameVariable = sessionStorage.getItem('fullName');
    document.getElementById('budgetArtistTitle').innerHTML = artistNameVariable +'´s Budget';
    budgetArtistDiv.className = 'servicesFieldVisible';
}

/*     PROJECT 1  */

function firstProjectStorage() {
    sessionStorage.setItem('servicesFirstProject',JSON.stringify(project1services));
    let firstProjectRecovered = JSON.parse(sessionStorage.getItem('servicesFirstProject'));
    const firstProjectBudget = Object.values(firstProjectRecovered).reduce((t, {price}) => t + price, 0);
    /* firstProjectName --------------------------------------------------------------*/
    sessionStorage.setItem('1stProjectName', projectName1.value);
    let nameOfProject1 = sessionStorage.getItem('1stProjectName');
    document.getElementById('budgetTitle1').innerHTML = nameOfProject1;
    /* firstProjectBudget --------------------------------------------------------------*/
    document.getElementById('budget1Price').innerHTML = 'Project Budget: $ '+ firstProjectBudget;
}

function showBudgetField1() {
    if((songwriting1.checked == true) || (arrangements1.checked == true) || (transcription1.checked == true) || (production1.checked == true) || (mix1.checked == true) || (mastering1.checked == true)  || (distribution1.checked == true)){
        budgetField1.className = 'budgetFieldVisible';
    }
}



/*     PROJECT 2  */

function secondProjectStorage() {
    sessionStorage.setItem('servicesSecondProject',JSON.stringify(project2services));
    let secondProjectRecovered = JSON.parse(sessionStorage.getItem('servicesSecondProject'));
    const secondProjectBudget = Object.values(secondProjectRecovered).reduce((t, {price}) => t + price, 0);
        /* secondProjectName --------------------------------------------------------------*/
        sessionStorage.setItem('2ndProjectName', projectName2.value);
        let nameOfProject2 = sessionStorage.getItem('2ndProjectName');
        document.getElementById('budgetTitle2').innerHTML = nameOfProject2;
        /* secondProjectBudget --------------------------------------------------------------*/
        document.getElementById('budget2Price').innerHTML = 'Project Budget: $ '+ secondProjectBudget;
}

function showBudgetField2() {
    if((songwriting2.checked == true) || (arrangements2.checked == true) || (transcription2.checked == true) || (production2.checked == true) || (mix1.checked == true) || (mastering2.checked == true)  || (distribution2.checked == true)){
        budgetField2.className = 'budgetFieldVisible';
    }
}

/*     PROJECT 3  */

function thirdProjectStorage() {
    sessionStorage.setItem('servicesThirdProject',JSON.stringify(project3services));
    let thirdProjectRecovered = JSON.parse(sessionStorage.getItem('servicesThirdProject'));
    const thirdProjectBudget = Object.values(thirdProjectRecovered).reduce((t, {price}) => t + price, 0);
        /* thirdProjectName --------------------------------------------------------------*/
        sessionStorage.setItem('3rdProjectName', projectName3.value);
        let nameOfProject3 = sessionStorage.getItem('3rdProjectName');
        document.getElementById('budgetTitle3').innerHTML = nameOfProject3;
        /* thirdProjectBudget --------------------------------------------------------------*/
        document.getElementById('budget3Price').innerHTML = 'Project Budget: $ '+ thirdProjectBudget;
}

function showBudgetField3() {
    if((songwriting3.checked == true) || (arrangements3.checked == true) || (transcription3.checked == true) || (production3.checked == true) || (mix3.checked == true) || (mastering3.checked == true)  || (distribution3.checked == true)){
        budgetField3.className = 'budgetFieldVisible';
    }
}


/*     PROJECT 4  */

function fourthProjectStorage() {
    sessionStorage.setItem('servicesFourthProject',JSON.stringify(project4services));
    let fourthProjectRecovered = JSON.parse(sessionStorage.getItem('servicesFourthProject'));
    const fourthProjectBudget = Object.values(fourthProjectRecovered).reduce((t, {price}) => t + price, 0);
        /* fourthProjectName --------------------------------------------------------------*/
        sessionStorage.setItem('4thProjectName', projectName4.value);
        let nameOfProject4 = sessionStorage.getItem('4thProjectName');
        document.getElementById('budgetTitle4').innerHTML = nameOfProject4;
        /* fourthProjectBudget --------------------------------------------------------------*/
        document.getElementById('budget4Price').innerHTML = 'Project Budget: $ '+ fourthProjectBudget;
}

function showBudgetField4() {
    if((songwriting4.checked == true) || (arrangements4.checked == true) || (transcription4.checked == true) || (production4.checked == true) || (mix4.checked == true) || (mastering4.checked == true)  || (distribution4.checked == true)){
        budgetField4.className = 'budgetFieldVisible';
    }
}

/*     PROJECT 5  */

function fifthProjectStorage() {
    sessionStorage.setItem('servicesFifthProject',JSON.stringify(project5services));
    let fifthProjectRecovered = JSON.parse(sessionStorage.getItem('servicesFifthProject'));
    const fifthProjectBudget = Object.values(fifthProjectRecovered).reduce((t, {price}) => t + price, 0);
        /* fifthProjectName --------------------------------------------------------------*/
        sessionStorage.setItem('5thProjectName', projectName5.value);
        let nameOfProject5 = sessionStorage.getItem('5thProjectName');
        document.getElementById('budgetTitle5').innerHTML = nameOfProject5;
        /* fifthProjectBudget --------------------------------------------------------------*/
        document.getElementById('budget5Price').innerHTML = 'Project Budget: $ '+ fifthProjectBudget;
}

function showBudgetField5() {
    if((songwriting5.checked == true) || (arrangements5.checked == true) || (transcription5.checked == true) || (production5.checked == true) || (mix5.checked == true) || (mastering5.checked == true)  || (distribution5.checked == true)){
        budgetField5.className = 'budgetFieldVisible';
    }
}


