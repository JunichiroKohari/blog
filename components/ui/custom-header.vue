<template>
    <header class="l-header">
        <div class="title-area">
            <h1 class="blog-title">
                <nuxt-link to="/">
                    <img src="../../assets/images/blog-title.png" alt="リーダブルブログ" class="logo">
                </nuxt-link>
            </h1>
        </div>
    </header>
</template>

<style scoped>
.l-header {
    position: fixed;
    top: 0.55em;
    left: calc(50% - 25em / 2);
    z-index: 10000;
    display: flex;
    align-items: center;
    width: 25em;
}
.title-area {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 50px;
    background: #d6efff;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);
}
.blog-title {
    display: flex;
    font-size: 2rem;
    letter-spacing: 0.2rem;
}
.logo {
    width: 100%;
}
@media screen and (max-width: 768px) {
    .l-header {
    left: calc(50% - 20em / 2);
    width: 20em;
    }
}
</style>