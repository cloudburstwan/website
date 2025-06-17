<script>
    export const prerender = true;

    import Header from "$lib/Header.svelte";
    import Time from "$lib/Time.svelte";
    import Subtitles from "$lib/Subtitles.svelte";
    import Hero from "$lib/Hero.svelte";
    import Avatar from "$lib/Avatar.svelte";
    import Title from "$lib/Title.svelte";
    import HeaderContainer from "$lib/HeaderContainer.svelte";
    import Foreground from "$lib/Foreground.svelte";
    import MainContainer from "$lib/MainContainer.svelte";
    import TextContainer from "$lib/TextContainer.svelte";
    import ProjectContainer from "$lib/ProjectContainer.svelte";
    import Project from "$lib/Project.svelte";
    import CommissionContainer from "$lib/CommissionContainer.svelte";
    import LikesDislikesContainer from "$lib/LikesDislikesContainer.svelte";
    import CommunityContainer from "$lib/CommunityContainer.svelte";
    import Community from "$lib/Community.svelte";
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
<HeaderContainer> <!--TODO: Not sure what to do for a background. Maybe a solid background?-->
    <Header status="warning">
        <Time date="2025-06-23" time="01:30:00" tz="+01:00" format="DD MTH yyyy at hh:mm ap"/> - Going on holiday, may be unavailable at times
    </Header>
    <Hero>
        <Avatar size="12.5%" slot="avatar" />
        <Title>Hi! I'm Cloudburst!</Title>
        <Subtitles />
    </Hero>
</HeaderContainer>
<MainContainer>
    <!-- TODO: Ideas
          - Likes & Dislikes
          - "find me in my natural habitat" - areas i'm active in
    -->
    <TextContainer>
        Hiii! I'm not really sure what to put here! But I'm a silly little programming girl who makes random stuff!
    </TextContainer>
    <br/>
    <!-- Projects - In the future this will also include the commissioning as part of it the projects -->
    <ProjectContainer>
        <Project image="images/projects/ponycon.svg" name="ponycon.info" blurb="Pony convention listing website" />
        <Project image="images/no-image.png" name="EBS" blurb="Live stream hosting platform" />
        <Project image="images/projects/nwero-bingo.webp" name="Nwero Bingo" blurb="Bingo card for Neuro-sama"/>
    </ProjectContainer>
    <CommissionContainer />
    <!-- Likes & Dislikes -->
    <br/>
    <LikesDislikesContainer />
    <!-- Community -->
    <br/>
    <CommunityContainer>
        <Community image="images/communities/neuro-sama.png" name="Neuro-sama" blurb="goofy ai vtuber" />
        <Community image="images/communities/cerbervt.png" name="Cerber" blurb="cute hellhound vtuber" />
    </CommunityContainer>
</MainContainer>

<style>
</style>