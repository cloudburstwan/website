<script lang="ts">
    let subtitle = $state("");
    let possibleSubtitles: string[] = [
        // TODO: Come up with some silly little strings
        "just a silly goober",
        "silliest little girl"
    ];

    setInterval(() => {
        subtitle = possibleSubtitles[Math.floor(Math.random() * possibleSubtitles.length)];
    }, 5000);

    subtitle = possibleSubtitles[Math.floor(Math.random() * possibleSubtitles.length)];
</script>

<span>{subtitle}</span>

<style>
    /* TODO: Style */
    span {
        font-size: 1.25em;
        animation: fadeInOut 5s infinite;
        animation-delay: 0.25s;
    }

    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }

        2% {
            opacity: 0;
        }

        10% {
            opacity: 1;
        }

        90% {
            opacity: 1;
        }

        98% {
            opacity: 0;
        }

        100% {
            opacity: 0;
        }
    }
</style>