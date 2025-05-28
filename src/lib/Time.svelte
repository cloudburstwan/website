<script lang="ts">
    export let date: string = new Date().toISOString().split("T")[0];
    export let time: string = new Date().toISOString().split("T")[1].split(/\+-/g)[0];
    export let tz: string = "";
    export let format: string;
    let localTime;

    let fullTime = new Date(`${date}T${time}${tz}`);

    // TODO: `format` contains the format for the output, decode the output and output that
    /*
        dd - day of month in numbers
        DD - day of month with following suffix (st, nd, rd, th)
        mt - month of year in numbers
        MT - month of year in words (short)
        MTH - month of year in words (long)
        yyyy - year (2025)

        hh - hours (12)
        HH - hours (24)
        mm - minutes
        ss - seconds
        ssl - milliseconds
        ap - AM / PM seperator

        any other combination of characters is parsed as-is
     */
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    localTime = format
        .replace("dd", addLeadingZero(fullTime.getDate(), 1))
        .replace("DD", `${fullTime.getDate().toString()}${addDateSuffix(fullTime.getDate())}`)
        .replace("mt", (fullTime.getMonth() + 1).toString())
        .replace("MTH", months[fullTime.getMonth()])
        .replace("MT", months[fullTime.getMonth()].substring(0,3))
        .replace("yyyy", fullTime.getFullYear().toString())
        .replace("hh", Math.floor(fullTime.getHours() / 2).toString())
        .replace("HH", addLeadingZero(fullTime.getHours(), 1))
        .replace("mm", addLeadingZero(fullTime.getMinutes(), 1))
        .replace("ss", addLeadingZero(fullTime.getSeconds(), 1))
        .replace("ssl", addLeadingZero(fullTime.getMilliseconds(), 2))
        .replace("ap", fullTime.getHours() >= 12 ? "PM": "AM")

    function addDateSuffix(date: number): string {
        if (date.toString().endsWith("1") && !date.toString().endsWith("11")) {
            return "st";
        }
        if (date.toString().endsWith("2") && !date.toString().endsWith("12")) {
            return "nd";
        }
        if (date.toString().endsWith("3") && !date.toString().endsWith("13")) {
            return "rd";
        }
        return "th";
    }

    function addLeadingZero(number: number, amount: 1 | 2): string {
        if (amount == 1) {
            if (number < 10) return `0${number}`;
            return `${number}`;
        } else {
            if (number < 10) return `00${number}`;
            if (number < 100) return `0${number}`;
            return `${number}`;
        }
    }
</script>

<span>{localTime}</span>
<!-- TODO: Tooltip on hover -->

<style>
    span {
        padding: 3px;
        background-color: rgba(100, 100, 100, 0.1);
        border-radius: 10px;
    }
</style>