<div>
    <img class="background" src="/images/header_bg.png" width="1920" height="616" alt="Background" />
    <slot></slot>
</div>

<style>
    div {
        color: white;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
    }

    img.background {
        z-index: -1;
    }
</style>