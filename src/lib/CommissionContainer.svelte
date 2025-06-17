<div>
    <p>I am <b class="{($$props.active ? 'active' : '')}">{($$props.active ? "accepting" : "not accepting")}</b> commissions for code / software currently!</p>
    {#if $$props.active}
        <a href="https://shop.cloudburst.lgbt/" target="_blank">Go to Shop</a>
    {/if}
</div>

<style>
    div {
        font-size: 1.15em;

        background-color: rgba(206, 186, 255, 0.3);
        padding: 5px 20px;
        border-radius: 0 0 50px 50px;
        text-align: center;
        width: 50%;
    }

    p {
        padding: 0;
        margin: 0;
    }

    b {
        color: #ff7676;
    }

    b.active {
        color: #83ff83;
    }
</style>