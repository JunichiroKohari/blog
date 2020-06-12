<template>
    <div class="menu-btn">
        <a href="#" class="face-btn" @click="showMenu">
            <img src="../../assets/images/face1.png" alt="メニューボタン" class="faceBtn-img">
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        showMenu: () => {
            if (!$('.contents').hasClass('menu-bubble')) {
                $('.contents').addClass('menu-bubble');
            } else {
                $('.contents').removeClass('menu-bubble');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-btn {
    position: fixed;
    bottom: 4.5rem;
    right: 4rem;
    width: 3rem;

}
.face-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 88%;
    left: 79%;
    width: 115%;
    padding: 0.7rem;
    border-radius: 50%;
    background: #d6efff;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,.12), 0 3px 3px 0 rgba(0,0,0,.24);
}
.face-btn:hover {
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
}
.faceBtn-img {
    width: 100%;
}
</style>