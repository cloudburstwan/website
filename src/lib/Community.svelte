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
        width: 200px;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 20px;
    }

    p {
        padding: 0;
        margin: 0;
    }

    span {
        font-size: 0.8em;
    }
</style>