<script lang="ts">
    export let status: "hidden" | "info" | "warning" | "danger" = "info";

    let color = "rgba(206, 186, 255, 0.68)"
    let borderColor = "rgba(102, 93, 128, 0.68)"
    let hidden: boolean | "" | "until-found" | null | undefined = "";

    switch (status) {
        case "warning":
            color = "rgba(255,244,116,0.68)";
            borderColor = "rgba(128,122,57,0.68)";
            break;
        case "danger":
            color = "rgba(255,186,186,0.68)";
            borderColor = "rgba(128,93,93,0.68)";
            break;
        case "info":
        default:
            color = "rgba(206, 186, 255, 0.68)";
            borderColor = "rgba(102, 93, 128, 0.68)";
            break;
    }

    if (status == "hidden")
        hidden = true;
</script>

<header {hidden} style="background-color: {color} !important; border-color: {borderColor} !important;" id="top">
    <div class="content"><slot>&nbsp;</slot></div>
    {#if $$props.href}
        <a href="{$$props.href}" style="border-color: {borderColor} !important;" target="_blank">Click to view blog post</a>
    {/if}
</header>

<style>
    header {
        position: absolute;
        top: 5px;
        left: 5px;
        width: calc(100vw - 10px);
        background-color: rgba(206, 186, 255, 0.68) !important;
        border: solid 2px rgba(102, 93, 128, 0.68);
        border-radius: 20px;
        text-align: center;
        font-weight: bolder;
        color: black;
    }

    header .content {
        padding: 10px;
    }

    a {
        display: block;
        border-top: solid 2px rgba(102, 93, 128, 0.68);
        width: 100%;
        font-size: 1em !important;
        text-decoration: none !important;
        background: transparent;
        color: black;
        font-family: inherit;
        font-weight: inherit;
        cursor: pointer;
    }
</style>