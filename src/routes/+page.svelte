<script>
    import Header from "$lib/Header.svelte";
    import Time from "$lib/Time.svelte";
    import Subtitles from "$lib/Subtitles.svelte";
    import Hero from "$lib/Hero.svelte";
    import Avatar from "$lib/Avatar.svelte";
    import Title from "$lib/Title.svelte";
    import Background from "$lib/Background.svelte";
    import Foreground from "$lib/Foreground.svelte";
</script>

<svelte:head>
    <title>Cloudburst's Website!</title>
    <meta name="theme-color" content="#6da3eb">
    <meta property="url" content="https://cloudburst.lgbt/">
    <meta property="title" content="Cloudburst's Website!">
    <meta property="og:url" content="https://cloudburst.lgbt/">
    <meta property="og:title" content="Cloudbursts Website!">
    <meta name="description" content="Just some basic info about myself really!">
    <meta name="og:description" content="Just some basic info about myself really!">
    <meta name="image" itemprop="image" content="/images/avatar.png">
    <meta name="og:image" itemprop="image" content="/images/avatar.png">
    <link rel="icon" href="/images/avatar.png">
    <!--<link rel="stylesheet" href="css/index.css">-->
</svelte:head>
<!-- TODO: This became website V2, so this'll be fun -->
<!-- TODO: I'm thinking it'd be fun to add pictures of my VRC avatar onto the website? -->
<Foreground />
<Background> <!--TODO: Not sure what to do for a background. Maybe a solid background?-->
    <Header status="info">
        <Time format="DD MTH yyyy at hh:mm:ss"/> - Example alert header
        <div slot="detail">

        </div>
    </Header>
    <Hero>
        <Avatar size="12.5%" slot="avatar" />
        <Title>Hi! I'm Cloudburst!</Title>
        <Subtitles />
    </Hero>
</Background>
<style>
</style>