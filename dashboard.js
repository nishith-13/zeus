fetch('./dashboard.json')
    .then((response) => response.json())
    .then((json) => process(json));

function process(jsonDataArray){
  const data_string = JSON.stringify(jsonDataArray);
  const objects = JSON.parse(data_string);
  let cardContainer = document.getElementById('card_grid');
  for (let i = 0; i < objects.length; i++) {
    let jsonData = objects[i];
    let card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);
    
    let card_upper = document.createElement("div");
    card.appendChild(card_upper);
    card_upper.classList.add("card_upper");

    let image = document.createElement("img");
    image.src = jsonData.image;
    image.alt = jsonData.title;
    card_upper.appendChild(image);

    let card_upper_right = document.createElement("div");
    card_upper_right.classList.add("card_upper_right");
    card_upper.appendChild(card_upper_right);

    let card_heading = document.createElement("div");
    card_heading.classList.add("card_heading");
    card_upper_right.appendChild(card_heading);

    let title = document.createElement("h3");
    title.innerText = jsonData.Title;
    card_heading.appendChild(title);

    let star = document.createElement("img");
    star.setAttribute("class","favourite");
    star.setAttribute("src","/assets/favourite.svg");
    star.setAttribute("alt","favourite icon");
    card_heading.appendChild(star);

    let subjectGrade = document.createElement("small");
    subjectGrade.classList.add("text-muted");
    subjectGrade.innerHTML= jsonData.Subject +"&nbsp; | &nbsp; Grade " + jsonData.Grade;
    card_upper_right.appendChild(subjectGrade);
    
    let UnitsLesson = document.createElement("small");
    UnitsLesson.classList.add("text-muted");
    UnitsLesson.innerHTML= "<b>"+jsonData.Units+"</b>" +" Units &nbsp;<b>" + jsonData.Lessons + "</b> Lessons&nbsp;<b>" 
    + jsonData.Topics + "</b> Topics";
    card_upper_right.appendChild(UnitsLesson);

    let select = document.createElement("select");
    select.setAttribute("id","classes");
    select.setAttribute("name","classes");
    card_upper_right.appendChild(select);
    let option = document.createElement("option");
    option.value = jsonData.Teacher;
    option.text = jsonData.Teacher;
    select.appendChild(option);

    let StudentDates = document.createElement("small");
    StudentDates.classList.add("text-muted");
    StudentDates.innerHTML= "<b>"+jsonData.Students+"</b>" +" Students &nbsp; | &nbsp;" + jsonData.Start + " - " 
    + jsonData.End ;
    card_upper_right.appendChild(StudentDates);

    card.appendChild(document.createElement("hr"));

    let card_footer = document.createElement("div");
    card_footer.classList.add("card_footer");
    card.appendChild(card_footer);

    let preview = document.createElement("img");
    preview.src = "./Assets/preview.svg";
    preview.alt = "Preview SVG";
    card_footer.appendChild(preview);
    
    let course = document.createElement("img");
    course.src = "./Assets/manage course.svg";
    course.alt = "manage course SVG";
    card_footer.appendChild(course);
    
    let grade = document.createElement("img");
    grade.src = "./Assets/grade submissions.svg";
    grade.alt = "grade submissions SVG";
    card_footer.appendChild(grade);
    
    let reports = document.createElement("img");
    reports.src = "./Assets/reports.svg";
    reports.alt = "reports SVG";
    card_footer.appendChild(reports);
  }
}
/* <div class="card_footer">
//       <img src="./Assets/preview.svg" />
//       <img src="./Assets/manage course.svg" />
//       <img src="./Assets/grade submissions.svg" />
//       <img src="./Assets/reports.svg" />
//     </div> */
// `<div class="card">
//     <div class="card_upper">
//       <img src=`+objects[object].image+` />
//       <div class="card_upper_right">
//         <div class="card_heading">
//           <h3>`+ objects[object].Title+`</h3>
//           <img src="./Assets/favourite.svg" />
//         </div>
//         <small class="text-muted">`+ objects[object].Subject+` &nbsp; | &nbsp; Grade 7</small>
//         <small class="text-muted"><b>4</b> Units &nbsp;<b>18</b> Lessons&nbsp;
//           <b>24</b> Topics</small>
        
//           <select name="classes" id="classes">
//             <option value="Mr. Frank's Class B">Mr Frank's Class B</option>
//           </select>
        
//         <small class="text-muted">50 Students &nbsp; | &nbsp;21-Jan-2020 - 21-Aug-2020</small>
//       </div>
//     </div>
//     <hr />
//     
//   </div>`;
//     document.body.appendChild(card);
//     // cardGrid.innerHTML = card;
//     console.log(objects[object]);
// } 
// console.log(obj.Teacher);
