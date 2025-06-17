<!-- TODO: Should contain mainly styling for the background and stuff. -->
<div>
    <div class="buffer-20"></div>
    <slot name="avatar"></slot>
    <div class="buffer-10"></div>
    <slot></slot>
    <div class="buffer-20-bottom"></div>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.buffer-20 {
        margin: 74px;
    }
    div.buffer-10 {
        margin: 20px;
    }
    div.buffer-20-bottom {
        margin: 40px;
    }
</style>