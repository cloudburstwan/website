<div>
    <img src="{$$props.image}" alt="{$$props.name}" />
    <p>{$$props.name}</p>
    <span>{$$props.blurb}</span>
</div>

<style>
    div {
        margin: 5px;
        background-color: rgba(206, 186, 255, 0.14);
        padding: 10px;
        border-radius: 50px;
        width: 237px;
    }

    img {
        width: 217px;
        height: 205px;
        border-radius: 40px 40px 0 0;
    }

    p {
        padding: 0;
        margin: 0;
    }

    span {
        font-size: 0.8em;
    }
</style>