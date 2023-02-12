fetch("./dashboard.json")
    .then(function (response) { return response.json(); })
    .then(function (json) { return process(json); });
function process(jsonDataArray) {
    var data_string = JSON.stringify(jsonDataArray);
    var objects = JSON.parse(data_string);
    var cardContainer = document.getElementById("card_grid");
    for (var i = 0; i < Object.keys(objects).length; i++) {
        var jsonData = objects[i];
        var card = document.createElement("div");
        card.classList.add("card");
        cardContainer.appendChild(card);
        var card_upper = document.createElement("div");
        card.appendChild(card_upper);
        card_upper.classList.add("card_upper");
        var image = document.createElement("img");
        image.src = jsonData.image;
        image.alt = jsonData.title;
        card_upper.appendChild(image);
        var card_upper_right = document.createElement("div");
        card_upper_right.classList.add("card_upper_right");
        card_upper.appendChild(card_upper_right);
        var card_heading = document.createElement("div");
        card_heading.classList.add("card_heading");
        card_upper_right.appendChild(card_heading);
        var title = document.createElement("h3");
        title.innerText = jsonData.Title;
        card_heading.appendChild(title);
        var star = document.createElement("img");
        star.setAttribute("class", "favourite");
        star.setAttribute("src", "/assets/favourite.svg");
        star.setAttribute("alt", "favourite icon");
        card_heading.appendChild(star);
        var subjectGrade = document.createElement("small");
        subjectGrade.classList.add("text-muted");
        subjectGrade.innerHTML =
            jsonData.Subject + "&nbsp; | &nbsp; Grade " + jsonData.Grade;
        card_upper_right.appendChild(subjectGrade);
        var UnitsLesson = document.createElement("small");
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
        var select = document.createElement("select");
        select.setAttribute("id", "classes");
        select.setAttribute("name", "classes");
        card_upper_right.appendChild(select);
        var option = document.createElement("option");
        option.value = jsonData.Teacher;
        option.text = jsonData.Teacher;
        select.appendChild(option);
        var StudentDates = document.createElement("small");
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
        var card_footer = document.createElement("div");
        card_footer.classList.add("card_footer");
        card.appendChild(card_footer);
        var preview = document.createElement("img");
        preview.src = "./Assets/preview.svg";
        preview.alt = "Preview SVG";
        card_footer.appendChild(preview);
        var course = document.createElement("img");
        course.src = "./Assets/manage course.svg";
        course.alt = "manage course SVG";
        card_footer.appendChild(course);
        var grade = document.createElement("img");
        grade.src = "./Assets/grade submissions.svg";
        grade.alt = "grade submissions SVG";
        card_footer.appendChild(grade);
        var reports = document.createElement("img");
        reports.src = "./Assets/reports.svg";
        reports.alt = "reports SVG";
        card_footer.appendChild(reports);
    }
}
function show() {
    var d = document.querySelector(".desktop_only");
    var e = document.querySelector(".selected");
    if (d.id === "hide") {
        e.setAttribute("id", "selected");
        addButton();
        d.setAttribute("id", "show");
    }
    else {
        d.setAttribute("id", "hide");
        e.removeAttribute("id");
        removeButton();
    }
}
function addButton() {
    var content = document.getElementById("content");
    var image = document.createElement("img");
    image.setAttribute("src", "Assets/arrow-down.svg");
    var b = document.createElement("button");
    b.setAttribute("id", "content-button");
    b.appendChild(image);
    content === null || content === void 0 ? void 0 : content.appendChild(b);
}
function removeButton() {
    var content = document.getElementById("content-button");
    content === null || content === void 0 ? void 0 : content.remove();
}
fetch("/alert.json")
    .then(function (response) { return response.json(); })
    .then(function (json) { return showAlert(json); });
function showAlert(jsonAlertArray) {
    var alert_string = JSON.stringify(jsonAlertArray);
    var alert_objects = JSON.parse(alert_string);
    var alert_list = document.getElementById("alert_list");
    var alert_img = "/Assets/alerts.svg";
    for (var _i = 0, alert_objects_1 = alert_objects; _i < alert_objects_1.length; _i++) {
        var alert_1 = alert_objects_1[_i];
        var li = document.createElement("li");
        li.classList.add("alert_list_item");
        alert_list.appendChild(li);
        var msgdiv = document.createElement("div");
        msgdiv.classList.add("msg");
        li.appendChild(msgdiv);
        var p = document.createElement("p");
        p.innerHTML = alert_1.msg;
        msgdiv.appendChild(p);
        var img = document.createElement("img");
        if (alert_1.isNewAlert) {
            img.src = alert_img;
            li.style.backgroundColor = "#FFFFEE";
        }
        else {
            img.src = "/Assets/checkbox-checked.svg";
        }
        msgdiv.appendChild(img);
        if (alert_1.course != "") {
            var courseclassdiv = document.createElement("div");
            courseclassdiv.classList.add("class_course_alert");
            li.appendChild(courseclassdiv);
            var course_title = document.createElement("span");
            course_title.classList.add("class_or_course");
            course_title.classList.add("faded");
            course_title.innerHTML = "Course: ";
            courseclassdiv.appendChild(course_title);
            var course_name = document.createElement("span");
            course_name.classList.add("class_course_name");
            course_name.innerHTML = alert_1.course;
            courseclassdiv.appendChild(course_name);
        }
        var date_time = document.createElement("span");
        date_time.classList.add("date-time");
        date_time.classList.add("faded");
        date_time.innerHTML = alert_1.date_time;
        li.appendChild(date_time);
    }
}
fetch("/annon.json")
    .then(function (response) { return response.json(); })
    .then(function (json) { return showAnnon(json); });
function showAnnon(jsonAnnouncementArray) {
    var announcement_string = JSON.stringify(jsonAnnouncementArray);
    var announcement_objects = JSON.parse(announcement_string);
    var announcement_list = document.getElementById("announcement_list");
    for (var _i = 0, announcement_objects_1 = announcement_objects; _i < announcement_objects_1.length; _i++) {
        var announcement_1 = announcement_objects_1[_i];
        var li = document.createElement("li");
        li.classList.add("announcement_list_item");
        announcement_list.appendChild(li);
        var pa_header = document.createElement("div");
        pa_header.classList.add("pa_header");
        li.appendChild(pa_header);
        var header_p = document.createElement("p");
        pa_header.appendChild(header_p);
        var pa_title = document.createElement("span");
        pa_title.classList.add("pa_title");
        pa_title.innerHTML = "PA:";
        header_p.appendChild(pa_title);
        var pa_name = document.createElement("span");
        pa_name.classList.add("pa_name");
        pa_name.innerHTML = announcement_1.pa_name;
        header_p.appendChild(pa_name);
        var img = document.createElement("img");
        img.src = "Assets/checkbox-checked.svg";
        pa_header.appendChild(img);
        var pa_msg = document.createElement("p");
        pa_msg.classList.add("pa_msg");
        pa_msg.innerHTML = announcement_1.msg;
        li.appendChild(pa_msg);
        var coursename = document.createElement("div");
        coursename.classList.add("class_course_announcement");
        li.appendChild(coursename);
        var course = document.createElement("span");
        course.classList.add("class_or_course");
        course.innerHTML = "Course: ";
        coursename.appendChild(course);
        var course_title = document.createElement("span");
        course_title.classList.add("class_course_name");
        course_title.innerHTML = announcement_1.course;
        coursename.appendChild(course_title);
        var pa_footer = document.createElement("div");
        pa_footer.classList.add("pa_footer");
        li.appendChild(pa_footer);
        var attachedfile = document.createElement("div");
        attachedfile.classList.add("attachedfile");
        pa_footer.appendChild(attachedfile);
        var attachimg = document.createElement("img");
        attachimg.src = "Assets/attach-file.png";
        attachedfile.appendChild(attachimg);
        var no_of_file_attached = document.createElement("span");
        no_of_file_attached.innerHTML =
            announcement_1.no_of_file_attached + " Files Atteched";
        attachedfile.appendChild(no_of_file_attached);
        var date_time = document.createElement("span");
        date_time.classList.add("announcement_date_time");
        date_time.innerHTML = announcement_1.date_time;
        pa_footer.appendChild(date_time);
    }
}
var alert2 = document.getElementById("alert");
alert2.addEventListener("mouseover", function () {
    alert2.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector(".alert_wrapper");
    // menu.style.display = "block";
    menu.classList.add("show_block");
    var alert_list = document.querySelector(".alert-list");
    alert_list.classList.add("show");
});
function removealertmenu() {
    setTimeout(function () {
        var menu = document.querySelector(".alert_wrapper");
        // menu.style.display = "none";
        alert2.style.filter = "none";
        menu.classList.remove("show_block");
        var alert_list = document.querySelector(".alert-list");
        alert_list.classList.remove("show");
    }, 100);
}
var alert_wrapper = document.getElementById("alert_wrapper");
alert_wrapper.addEventListener("mouseleave", removealertmenu);
alert2.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".alert_wrapper:hover")) {
            removealertmenu();
        }
    }, 100);
});
var announcement = document.getElementById("announcement");
announcement.addEventListener("mouseover", function () {
    announcement.style.filter = "brightness(0)invert(1)";
    var menu = document.querySelector(".announcement_wrapper");
    // menu.style.display = "block";
    menu.classList.add("show_block");
    var announcement_list = document.querySelector(".announcement-list");
    announcement_list.classList.add("show");
});
function remvoveannouncementmenu() {
    setTimeout(function () {
        var menu = document.querySelector(".announcement_wrapper");
        // menu.style.display = "none";
        announcement.style.filter = "none";
        menu.classList.remove("show_block");
        var announcement_list = document.querySelector(".announcement-list");
        announcement_list.classList.remove("show");
    }, 400);
}
// announcement.addEventListener("click",remvoveannouncementmenu);
var announcement_wrapper = document.getElementById("announcement_wrapper");
announcement_wrapper.addEventListener("mouseleave", remvoveannouncementmenu);
announcement.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!document.querySelector(".announcement_wrapper:hover")) {
            remvoveannouncementmenu();
        }
    }, 100);
});
