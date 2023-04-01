let mainContainerElement = document.getElementById("mainContainer");

let marksheetMainContainer = document.createElement("div");

mainContainerElement.appendChild(marksheetMainContainer);

function creatingDetailsOfSchool (lstStudentInfo) {
    const {SchoolName, SchoolAddress, SchoolPhoneNumber, SchoolEmail} = lstStudentInfo[0];
    let schoolDetailsContainer = document.createElement("div");
    schoolDetailsContainer.classList.add("school-details-container");

    schoolDetailsContainer.innerHTML = `
    <img src="https://davbundu.org/wp-content/uploads/2020/03/cropped-dav-bundu.png" class="school-logo" />
    <div class="school-details-text-container">
        <h1 class="school-name">${SchoolName}</h1>
        <div class="school-address-container">
           <p class="school-address">${SchoolAddress}</p>
           <p class="school-address">${SchoolPhoneNumber}</P>
        </div>
        <p class="school-address school-email">Visit Us at:  ${SchoolEmail}</p>
    </div>
    `;

    marksheetMainContainer.appendChild(schoolDetailsContainer);

    let reportCardTitleContainer = document.createElement("div");
    reportCardTitleContainer.innerHTML = `
    <p class="report-card-heading">REPORT CARD</P>
    <p class="report-card-heading">ACADAMIC SESSION: 2022 - 2023</P>
    `;

    marksheetMainContainer.appendChild(reportCardTitleContainer);

    let horizontalLineElement = document.createElement("hr");
    horizontalLineElement.classList.add("horizontal-line");
    
    marksheetMainContainer.appendChild(horizontalLineElement);
}

let LstStudentInfo = [{SchoolName: "MAHARAJA INTERNATIONAL SCHOOL", SchoolAddress: "Near Abhilasha Colony, Dewas Road, Affiliated to CBSE, Affiliation No: 103131157", SchoolPhoneNumber: "9926090005", SchoolEmail: "www.maharajinternationalschoolujjain.com", RollNumber: "2", FatherName: "VISHNU BODANA", ClassName: "lX", Name: "Nehal Vishnu Bodana", MotherName: "BHAWNA BODANA", DOB: "10-Aug-2018", StudentID: "18219", Attendance: "131"}]

function creatingStudentDetails (lstStudentInfo){
    const {RollNumber, FatherName, ClassName, Name, MotherName, DOB, StudentID, Attendance} = lstStudentInfo[0];
    let studentDetails = [["Scholar No", StudentID], ["Class", ClassName], ["Roll No", RollNumber], ["Name of Student", Name], ["Father's name", FatherName], ["Mother's Name", MotherName], ["Attendance", Attendance], ["Date of Birth", DOB]];
    let studentDetailsContainer = document.createElement("ul");
    studentDetailsContainer.classList.add("student-details-container")

    marksheetMainContainer.appendChild(studentDetailsContainer);



    studentDetails.map((each) => {
        let studentDetailItem = document.createElement("li");
        studentDetailItem.classList.add("student-detail-item");

        studentDetailsContainer.appendChild(studentDetailItem);

        let studentDetailItemPropertyContainer = document.createElement("div");
        studentDetailItemPropertyContainer.classList.add("student-detail-item-property-container");

        studentDetailItem.appendChild(studentDetailItemPropertyContainer);


        let studentDetailProperty = document.createElement("p");
        studentDetailProperty.classList.add("student-detail-item-property")
        studentDetailProperty.textContent = each[0]

        studentDetailItemPropertyContainer.appendChild(studentDetailProperty);

        let studentDetailItemValueContainer = document.createElement("div");
        studentDetailItemValueContainer.classList.add("student-detail-item-value");

        studentDetailItem.appendChild(studentDetailItemValueContainer);

        let studentDetailValue = document.createElement("p");
        studentDetailValue.classList.add("student-detail-item-value-container")
        studentDetailValue.textContent = ":-  " + each[1]

        studentDetailItemValueContainer.appendChild(studentDetailValue);

    })
}




const getData = async () => {
    const response = await fetch("http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521")
    const jsonData = await response.json()
    console.log(jsonData);
    const {Response} = jsonData
    const {ProgressList} = Response 
    const {ExamMasters, lstInternal, lstStudentInfo, stGrades} = ProgressList;
    console.log(lstStudentInfo);
    creatingDetailsOfSchool(LstStudentInfo);
    creatingStudentDetails(LstStudentInfo);
    
}
getData();

let marksArray = [["TELUGU", "10", "80", "90", "13", "80", "93", "183", "A1"], ["HINDHI", "15", "60", "75", "11", "65", "76", "151", "B1"], ["ENGLISH", "17", "54", "71", "13", "59", "72", "143", "B1"], ["MATHAMATICS", "13", "50", "63", "17", "54", "71", "134", "B2"], ["EVS", "9", "35", "44", "4", "36", "40", "84", "C2"], ["GK", "10", "40", "50", "8", "45", "53", "103", "C1"], ["COMPUTER SCIENCE", "17", "80", "97", "19", "71", "90", "187", "A1"], ["SOCIAL STUDIES", "19", "70", "89", "14", "72", "85", "175", "A2"], ["Total", "110", "469", "579", "98", "523", "621", "1090", "B2"]];

let marksTableElement = document.createElement("table");
marksTableElement.style.width = "100%";

mainContainerElement.appendChild(marksTableElement);


marksTableElement.innerHTML = `
<tr>
<th rowspan="2" style="text-align: left">SUBJECTS</th>
<th colspan="3">Term 1</th>
<th colspan="3">Term 2</th>
<th colspan="2">Final Result</th>
<tr>
    <th>Best Score PT-l, ll<br/>20</th>
    <th>Term l<br/>80</th>
    <th>Marks Obt.<br/>100</th>
    <th>Best Score PT-lll, lv<br/>20</th>
    <th>Term ll<br/>80</th>
    <th>Marks Obt.<br/>100</th>
    <th>T-l  +  T-ll <br/>200</th>
    <th>Grade</th>
</tr>
<tr/>`;


marksArray.map((each) => {
    let marksDetailsRowContainerElement = document.createElement("tr");
    marksDetailsRowContainerElement.innerHTML = `
        <th style="text-align: left">${each[0]}</td>
        <td style="text-align: center">${each[1]}</td>
        <td style="text-align: center">${each[2]}</td>
        <td style="text-align: center">${each[3]}</td>
        <td style="text-align: center">${each[4]}</td>
        <td style="text-align: center">${each[5]}</td>
        <td style="text-align: center">${each[6]}</td>
        <td style="text-align: center">${each[7]}</td>
        <td style="text-align: center">${each[8]}</td>
    `;
    marksTableElement.appendChild(marksDetailsRowContainerElement);
})

let resultContainer = document.createElement("div");
resultContainer.classList.add("result-container");
resultContainer.innerHTML = `
        <p class="result">Result: PASS</p>
        <p class="result">Percentage: 68.00%</p>
        <p class="result">Grade: B2</p>
`;
mainContainerElement.appendChild(resultContainer);

let signatureContainer = document.createElement("table");
signatureContainer.style.width = "100%";
signatureContainer.innerHTML = `
<tr>
    <th>Parents</th>
    <th>Class Teacher</th>
    <th>Principal</th>
</tr>
<tr>
    <td style="padding: 50px"></td>
    <td style="padding: 50px"></td>
    <td style="padding: 50px"></td>
</tr>
`;
mainContainerElement.appendChild(signatureContainer);















