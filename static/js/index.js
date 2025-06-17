// Tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Discord social hack
document.getElementById("discord").addEventListener("click", discordCopy)

function discordCopy(evt) {
  console.log(evt);
  evt.preventDefault();
  alert("This is awkward... There's no such thing as a profile page on Discord, so I'm putting my username in your clipboard for you after you dismiss this alert. Hope that works for you!");
  navigator.clipboard.writeText("cloudburst");
}

// "yesscript" to show extra stuff that HAS to use javascript to function
for (let element of document.getElementsByClassName("yesscript")) {
  element.style = "display: initial;";
}

// Put correct timezone in <time> tags for user
function getDateSuffix(date) {
  if ((date.toString().endsWith("1")) && (!date.toString().endsWith("11"))) return "st";
  if ((date.toString().endsWith("2")) && (!date.toString().endsWith("12"))) return "nd";
  if ((date.toString().endsWith("2")) && (!date.toString().endsWith("13"))) return "rd";
  return "th";
}

function getMonthName(month) {
  return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
}


function getMonthMaxes(month, fullYear) {
  return [31, (fullYear % 4 == 0 && fullYear % 100 != 0 ? 29 :28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function fullDigits(number) {
  if (number.toString().length == 1) return `0${number}`;
  return `${number}`;
}

function timeTo12(hours, minutes) {
  if (hours / 12 > 1) {
    return `${hours-12}${minutes != 0 ? `:${fullDigits(minutes)}` : ``}pm`;
  } else {
    if (hours == 0) hours = 12;
    return `${hours}${minutes != 0 ? `:${fullDigits(minutes)}` : ``}am`;
  }
}

// FIXME: Apparently this doesn't work.
function processTimezones(date, timezone) {
    let days = date.getUTCDate();
    let months = date.getUTCMonth();
    let years = date.getUTCFullYear();

    let TZ = [0, 0, date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear()];
    let TZmax = [60, 24, getMonthMaxes(months, years), Number.MAX_SAFE_INTEGER];
    let TZfunc = [date.setUTCMinutes, date.setUTCHours, date.setUTCDate, date.setUTCMonth, date.setUTCFullYear]
    TZ[0] = date.getUTCMinutes() + (timezone != null ? (timezone.mode == "+" ? -timezone.minutes : timezone.minutes) : 0);
    TZ[1] = date.getUTCHours() + (timezone != null ? (timezone.mode == "+" ? -timezone.hours : timezone.hours) : 0);

    for (let i = 0; i < TZ.length; i++) {
        if (TZ[i] >= TZmax[i]) {
            if (TZ[i+1] != undefined) TZ[i+1] + 1;
            TZ[i] = TZ[i] - TZmax[i];
        }

        if (TZ[i] < 0) {
            if (TZ[i-1] != undefined) TZ[i-1] - 1;
            TZ[i] = TZ[i] + TZmax[i];
        }

        switch (i) {
          case 0: date.setUTCMinutes(TZ[i]); break;
          case 1: date.setUTCHours(TZ[i]); break;
          case 2: date.setUTCDate(TZ[i]); break;
          case 3: date.setUTCMonth(TZ[i]); break;
          case 4: date.setUTCFullYear(TZ[i]); break;
        }
    }

    return date;
}

function dateObjectOnTimeOnly(time) {
  let regex = /(\d{1,2}):(\d{2})(?::(\d{2}))?(am|pm)?((\+|-)(\d{1,2})(?::(\d{2})))?/gi;

  let expression = regex.exec(time);

  if (expression != null) {
    console.log(expression);
    let hours = expression[1];
    let minutes = expression[2];
    let seconds = expression[3]; // Optional
    let period = expression[4]; // Optional
    let timezone = expression[5] != undefined ? { // Optional
      mode: expression[6],
      hours: expression[7],
      minutes: expression[8] // Optional
    } : undefined;

    let date = new Date();
    console.log(date);
    date.setUTCHours(0);
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(0);

    if (period == undefined) {
      // 24 hour
      date.setUTCHours(hours);
      date.setUTCMinutes(minutes);
      date.setUTCSeconds(seconds ?? 0);
      date = processTimezones(date, timezone);
    } else {
      // 12 hour
      if (period == "am") {
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
        date.setUTCSeconds(seconds ?? 0);
        date = processTimezones(date, timezone);
      } else {
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
        date.setUTCSeconds(seconds ?? 0);
        date = processTimezones(date, timezone);
      }
    }

    return date;
  }
  return null;
}

for (let element of document.getElementsByTagName("time")) {
  let time = new Date(element.attributes.getNamedItem("datetime").value);
  let format = element.attributes.getNamedItem("format").value;
  if (time == "Invalid Date") time = dateObjectOnTimeOnly(element.attributes.getNamedItem("datetime").value);

  switch (format) {
    case "time_12": // time only, 12 hour clock
      element.innerText = ` ${timeTo12(time.getHours(), time.getMinutes())}`;
      break;
    case "time_24": // time only, 24 hour clock
      element.innerText = ` ${fullDigits(time.getHours())}${minutes != 0 ? `:${fullDigits(minutes)}` : ``}`;
      break;
    case "date": // date only
      element.innerText = `${time.getDate()}${getDateSuffix(time.getDate())} of ${getMonthName(time.getMonth())} ${time.getFullYear()}`;
      break;
    case "full_12": // both date and time, 12 hour clock
      element.innerText = `${time.getDate()}${getDateSuffix(time.getDate())} of ${getMonthName(time.getMonth())} ${time.getFullYear()} at ${timeTo12(time.getHours(), time.getMinutes())}`;
      break;
    case "full_24": // both date and time, 24 hour clock
      element.innerText = `${time.getDate()}${getDateSuffix(time.getDate())} of ${getMonthName(time.getMonth())} ${time.getFullYear()} at ${fullDigits(time.getHours())}${minutes != 0 ? `:${fullDigits(minutes)}` : ``}`;
      break;
    default:
      console.warn(`Unknown time format: ${format} for ${element}`);
  }
}

// "show" tag which only shows content past a specific timeframe, useful for pre-written announcements that aren't *that* sensntive.
for (let element of document.getElementsByTagName("show")) {
  let startTime = element.attributes.getNamedItem("at") != null ? new Date(element.attributes.getNamedItem("at").value) : null;
  let endTime = element.attributes.getNamedItem("until") != null ? new Date(element.attributes.getNamedItem("until").value) : null;

  // starting off as invisible is easier
  let visible = false;

  if (startTime == null) {
    // start off visible
    visible = true;
  }

  if (startTime != null) {
    if (Date.now() > startTime.getTime()) {
      visible = true;
    }
  }

  if (endTime != null) {
    if (Date.now() > endTime.getTime()) {
      visible = false;
    }
  }

  if (visible) element.style = "display: initial;";
  else element.style = "display: none";
}