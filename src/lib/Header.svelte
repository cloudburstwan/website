<script>
    import HeaderNav from "$lib/HeaderNav.svelte";
</script>

<header class="justify-content-center py-0" id="top">
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <HeaderNav />
    </nav>
</header>

<style>
    header nav {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        padding: 0.5rem 0;
        background-color: rgba(248, 249, 250, 1) !important;
    }
</style>