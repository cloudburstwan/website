<div class="container-fluid justify-content-center">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-center" id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="#about-me" class="nav-link">About Me</a></li>
            <li class="nav-item only-mobile"><a href="#socials" class="nav-link">My Socials</a></li>
            <li class="nav-item"><a href="#projects" class="nav-link">My Projects</a></li>
            <li class="nav-item"><a href="#faq" class="nav-link">FAQs</a></li>
        </ul>
    </div>

    {#if false}
    <div class="show">
    </div>
    {/if}
</div>

<style>
    div {
        width: 100%;
        padding-right: calc(1.5rem*0.5);
        padding-left: calc(1.5rem*0.5);
        margin-right: auto;
        margin-left: auto;
        justify-content: center !important;
        display: flex;
        flex-wrap: inherit;
        align-items: center;
    }

    div button {
        margin: 0;
        font-family: inherit;
        text-transform: none;
        -webkit-appearance: button;
        padding: 0.25rem 0.75rem;
        font-size: 1.25rem;
        line-height: 1;
        color: rgba(0, 0, 0, 0.6);
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.375rem;
        transition: box-shadow 0.15s ease-in-out;
        cursor: pointer;

    }

    div button span {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
    }

    div div {
        align-items: center;
        text-align: center !important;
        flex-grow: 0;
    }

    div div:not(.show) {
        display: none;
    }

    @media (min-width: 992px) {
        div button {
            display: none;
        }

        div div {
            display: flex !important;
            flex-basis: auto;
        }
    }
</style>