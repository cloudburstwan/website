<div class="main">
    <p>My natural habitats!</p>
    <span>You can usually spot me in these communities!</span>
    <div class="container">
        <slot></slot>
    </div>
    <span class="bottom">Or you could just DM me, I don't bite... I think!</span>
</div>

<style>
    div.main {
        font-size: 1.15em;

        background-color: rgba(206, 186, 255, 0.3);
        padding: 5px 20px;
        border-radius: 50px;
        text-align: center;
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    p {
        padding: 0;
        margin: 0;
    }

    span {
        font-size: 0.8em;
        margin-bottom: 10px;
    }

    div.container {
        display: flex;
        justify-content: space-evenly;
    }

    span.bottom {
        margin-bottom: 0;
        margin-top: 10px;
        font-size: 1em;
    }
</style>