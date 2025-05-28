<script lang="ts">
    export let status: "hidden" | "info" | "warning" | "danger" = "info";

    let color = "rgba(206, 186, 255, 0.68)"
    let textColor = "rgba(0,0,0,1)";

    switch (status) {
        case "warning":
            color = "rgba(255,244,116,0.68)";
            break;
        case "danger":
            color = "rgba(255,186,186,0.68)";
            break;
        case "hidden":
            color = "rgba(0,0,0,0)";
            break;
        case "info":
        default:
            color = "rgba(206, 186, 255, 0.68)";
            break;
    }

    if (status == "hidden")
        textColor = "rgba(0,0,0,0)";
</script>

<div style="background-color: {color} !important; color: {textColor} !important;" id="top">
    <slot>&nbsp;</slot>
    <slot name="detail"></slot>
</div>

<style>
    div {
        position: absolute;
        top: 5px;
        left: 5px;
        width: calc(100vw - 10px);
        padding: 10px;
        background-color: rgba(206, 186, 255, 0.68) !important;
        border-radius: 20px;
        text-align: center;
        font-weight: bold;
    }
</style>