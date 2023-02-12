fetch("./dashboard.json")
  .then((response) => response.json())
  .then((json) => process(json));

function process(jsonDataArray): void {
  const data_string: string = JSON.stringify(jsonDataArray);
  const objects: JSON = JSON.parse(data_string);
  const cardContainer = document.getElementById("card_grid")!;
  for (let i = 0; i < Object.keys(objects).length; i++) {
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
    star.setAttribute("class", "favourite");
    star.setAttribute("src", "/assets/favourite.svg");
    star.setAttribute("alt", "favourite icon");
    card_heading.appendChild(star);

    let subjectGrade = document.createElement("small");
    subjectGrade.classList.add("text-muted");
    subjectGrade.innerHTML =
      jsonData.Subject + "&nbsp; | &nbsp; Grade " + jsonData.Grade;
    card_upper_right.appendChild(subjectGrade);

    let UnitsLesson = document.createElement("small");
    UnitsLesson.classList.add("text-muted");
    UnitsLesson.innerHTML =
      "<b>" +
      jsonData.Units +
      "</b>" +
      " Units &nbsp;<b>" +
      jsonData.Lessons +
      "</b> Lessons&nbsp;<b>" +
      jsonData.Topics +
      "</b> Topics";
    card_upper_right.appendChild(UnitsLesson);

    let select = document.createElement("select");
    select.setAttribute("id", "classes");
    select.setAttribute("name", "classes");
    card_upper_right.appendChild(select);
    let option = document.createElement("option");
    option.value = jsonData.Teacher;
    option.text = jsonData.Teacher;
    select.appendChild(option);

    let StudentDates = document.createElement("small");
    StudentDates.classList.add("text-muted");
    StudentDates.innerHTML =
      "<b>" +
      jsonData.Students +
      "</b>" +
      " Students &nbsp; | &nbsp;" +
      jsonData.Start +
      " - " +
      jsonData.End;
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

function show() {
  let d = document.querySelector(".desktop_only")!;
  let e = document.querySelector(".selected")!;
  if (d.id === "hide") {
    e.setAttribute("id", "selected");
    addButton();
    d.setAttribute("id", "show");
  } else {
    d.setAttribute("id", "hide");
    e.removeAttribute("id");
    removeButton();
  }
}

function addButton() {
  let content = document.getElementById("content");
  let image = document.createElement("img");
  image.setAttribute("src", "Assets/arrow-down.svg");
  let b = document.createElement("button");
  b.setAttribute("id", "content-button");
  b.appendChild(image);
  content?.appendChild(b);
}
function removeButton() {
  let content = document.getElementById("content-button");
  content?.remove();
}

fetch("/alert.json")
  .then((response) => response.json())
  .then((json) => showAlert(json));
function showAlert(jsonAlertArray) {
  const alert_string = JSON.stringify(jsonAlertArray);
  const alert_objects = JSON.parse(alert_string);
  var alert_list = document.getElementById("alert_list") as HTMLDivElement;
  const alert_img = "/Assets/alerts.svg";
  for (const alert of alert_objects) {
    const li = document.createElement("li");
    li.classList.add("alert_list_item");
    alert_list.appendChild(li);

    const msgdiv = document.createElement("div") as HTMLDivElement;
    msgdiv.classList.add("msg");
    li.appendChild(msgdiv);

    const p = document.createElement("p") as HTMLParagraphElement;
    p.innerHTML = alert.msg;
    msgdiv.appendChild(p);

    const img = document.createElement("img");
    if (alert.isNewAlert) {
      img.src = alert_img;
      li.style.backgroundColor = "#FFFFEE";
    } else {
      img.src = "/Assets/checkbox-checked.svg";
    }
    msgdiv.appendChild(img);
    if (alert.course != "") {
      const courseclassdiv = document.createElement("div");
      courseclassdiv.classList.add("class_course_alert");
      li.appendChild(courseclassdiv);

      const course_title = document.createElement("span");
      course_title.classList.add("class_or_course");
      course_title.classList.add("faded");
      course_title.innerHTML = "Course: ";
      courseclassdiv.appendChild(course_title);

      const course_name = document.createElement("span");
      course_name.classList.add("class_course_name");
      course_name.innerHTML = alert.course;
      courseclassdiv.appendChild(course_name);
    }

    const date_time = document.createElement("span");
    date_time.classList.add("date-time");
    date_time.classList.add("faded");
    date_time.innerHTML = alert.date_time;

    li.appendChild(date_time);
  }
}

fetch("/annon.json")
  .then((response) => response.json())
  .then((json) => showAnnon(json));

function showAnnon(jsonAnnouncementArray) {
  const announcement_string = JSON.stringify(jsonAnnouncementArray);
  const announcement_objects = JSON.parse(announcement_string);
  var announcement_list = document.getElementById(
    "announcement_list"
  ) as HTMLDivElement;
  for (const announcement of announcement_objects) {
    const li = document.createElement("li");
    li.classList.add("announcement_list_item");
    announcement_list.appendChild(li);

    const pa_header = document.createElement("div");
    pa_header.classList.add("pa_header");
    li.appendChild(pa_header);

    const header_p = document.createElement("p");
    pa_header.appendChild(header_p);

    const pa_title = document.createElement("span");
    pa_title.classList.add("pa_title");
    pa_title.innerHTML = "PA:";
    header_p.appendChild(pa_title);

    const pa_name = document.createElement("span");
    pa_name.classList.add("pa_name");
    pa_name.innerHTML = announcement.pa_name;
    header_p.appendChild(pa_name);

    const img = document.createElement("img");
    img.src = "Assets/checkbox-checked.svg";
    pa_header.appendChild(img);

    const pa_msg = document.createElement("p");
    pa_msg.classList.add("pa_msg");
    pa_msg.innerHTML = announcement.msg;
    li.appendChild(pa_msg);

    const coursename = document.createElement("div");
    coursename.classList.add("class_course_announcement");
    li.appendChild(coursename);

    const course = document.createElement("span");
    course.classList.add("class_or_course");
    course.innerHTML = "Course: ";
    coursename.appendChild(course);

    const course_title = document.createElement("span");
    course_title.classList.add("class_course_name");
    course_title.innerHTML = announcement.course;
    coursename.appendChild(course_title);

    const pa_footer = document.createElement("div");
    pa_footer.classList.add("pa_footer");
    li.appendChild(pa_footer);

    const attachedfile = document.createElement("div");
    attachedfile.classList.add("attachedfile");
    pa_footer.appendChild(attachedfile);

    const attachimg = document.createElement("img");
    attachimg.src = "Assets/attach-file.png";
    attachedfile.appendChild(attachimg);

    const no_of_file_attached = document.createElement("span");
    no_of_file_attached.innerHTML =
      announcement.no_of_file_attached + " Files Atteched";
    attachedfile.appendChild(no_of_file_attached);

    const date_time = document.createElement("span");
    date_time.classList.add("announcement_date_time");
    date_time.innerHTML = announcement.date_time;
    pa_footer.appendChild(date_time);
  }
}

let alert2 = document.getElementById("alert") as HTMLImageElement;
alert2.addEventListener("mouseover", () => {
  alert2.style.filter = "brightness(0)invert(1)";
  const menu = document.querySelector(".alert_wrapper") as HTMLDivElement;
  // menu.style.display = "block";
  menu.classList.add("show_block");
  const alert_list = document.querySelector(".alert-list") as HTMLDivElement;
  alert_list.classList.add("show");
});
function removealertmenu() {
  setTimeout(() => {
    const menu = document.querySelector(".alert_wrapper") as HTMLDivElement;
    // menu.style.display = "none";
    alert2.style.filter = "none";
    menu.classList.remove("show_block");
    const alert_list = document.querySelector(".alert-list") as HTMLDivElement;
    alert_list.classList.remove("show");
  }, 100);
}

let alert_wrapper = document.getElementById("alert_wrapper") as HTMLDivElement;
alert_wrapper.addEventListener("mouseleave", removealertmenu);

alert2.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!document.querySelector(".alert_wrapper:hover")) {
      removealertmenu();
    }
  }, 100);
});

let announcement = document.getElementById("announcement") as HTMLImageElement;
announcement.addEventListener("mouseover", () => {
  announcement.style.filter = "brightness(0)invert(1)";
  const menu = document.querySelector(
    ".announcement_wrapper"
  ) as HTMLDivElement;
  // menu.style.display = "block";
  menu.classList.add("show_block");
  const announcement_list = document.querySelector(
    ".announcement-list"
  ) as HTMLDivElement;
  announcement_list.classList.add("show");
});
function remvoveannouncementmenu() {
  setTimeout(() => {
    const menu = document.querySelector(
      ".announcement_wrapper"
    ) as HTMLDivElement;
    // menu.style.display = "none";
    announcement.style.filter = "none";
    menu.classList.remove("show_block");
    const announcement_list = document.querySelector(
      ".announcement-list"
    ) as HTMLDivElement;
    announcement_list.classList.remove("show");
  }, 400);
}
// announcement.addEventListener("click",remvoveannouncementmenu);
let announcement_wrapper = document.getElementById(
  "announcement_wrapper"
) as HTMLDivElement;
announcement_wrapper.addEventListener("mouseleave", remvoveannouncementmenu);

announcement.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!document.querySelector(".announcement_wrapper:hover")) {
      remvoveannouncementmenu();
    }
  }, 100);
});
