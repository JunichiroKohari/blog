<template>
    <header class="l-header">
        <h1 class="blog-title"><img src="../../assets/images/blog-title.png" alt="リーダブルブログ" class="logo"></h1>
    </header>
</template>

<style scoped>
.l-header {
    position: fixed;
    z-index: 10000;
    top: 0.5rem;
    left: 0.5rem;
    width: 35rem;
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
        width: 18rem;
    }
}
</style>