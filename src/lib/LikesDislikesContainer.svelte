<div class="main">
    <p>You wanna get to know me? Here's some basics!</p>
    <span>It's not much though... but maybe some likes and dislikes?</span>
    <div class="container">
        <div class="section likes">
            <p>Yes! I like these!</p>
            <ul>
                <li>anime & manga <span><a href="https://myanimelist.net/profile/cloudburstwan" target="_blank">MyAnimeList doko?</a></span></li>
                <li>sanrio <span>tbh anything pastel & cute really</span></li>
                <li>programming <span>there's an entire section for my projects!</span></li>
                <li>gaming <span>just in general!</span></li>
            </ul>
        </div>
        <div class="section dislikes">
            <p>No! Not these!</p>
            <ul>
                <li>finishing projects <span>(help me)</span></li>
                <li>ai art <span>obvious but needs stating</span></li>
                <li>windows 11 <span>i use it but i do not like it</span></li>
                <li>networks <span>nightmare nightmare nightmare</span></li>
            </ul>
        </div>
    </div>
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
        justify-content: space-around;
    }

    div.section p {
        font-size: 0.95em;
    }

    ul {
        font-size: 0.9em;
    }

    li {
        color: rgba(206, 186, 255);
        text-align: left;
    }

    div.dislikes li {
        direction: rtl;
        text-align: right;
    }

    span {
        font-size: 0.8em;
        opacity: 0.6;
    }
</style>