<div class="main">
    <p>Here's some stuff that I've worked on that are in production!</p>
    <span>Some of these are open-source, some of them aren't.</span>
    <div class="container">
        <slot></slot>
    </div>
    <a href="https://git.cloudburst.lgbt/" target="_blank">You can check out my open-source projects by clicking this text!</a>
</div>

<style>
    div.main {
        font-size: 1.15em;

        background-color: rgba(206, 186, 255, 0.3);
        padding: 5px 20px;
        border-radius: 50px 50px 0 0;
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

    a {
        margin-top: 10px;
        font-size: 0.8em;
    }
</style>