<template>
    <a href="#" class="faceBtn">
        <img src="../../assets/images/face1.png" alt="メニューボタン" class="faceBtn-img">
    </a>
</template>

<style lang="scss" scoped>
.faceBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);
}
.faceBtn:hover {
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}
.faceBtn-img {
    width: 4rem;
    height: 4rem;
}
</style>