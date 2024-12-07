<template>
  <section class="partners content">
    <div class="container">
      <h2 class="partners__header mb-4 mt-8">Наши партнеры</h2>
      <div class="columns-3 partner__items">
        <div>
          <div class="partner__item">
            <a class="partner__link" target="_blank">
              <span class="partner__wrapper">
                <img
                  width="381"
                  height="200"
                  loading="lazy"
                  src="../assets/images/holtsovhouse.webp"
                  alt=""
                />
              </span>
              <div class="partner__cover">
                <div class="partner__name">HoltsovHouse</div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="partners__item">
            <div class="partner__item">
              <a class="partner__link" target="_blank">
                <span class="partner__wrapper">
                  <img
                    width="381"
                    height="200"
                    loading="lazy"
                    src="../assets/images/ScoutHouse.webp"
                    alt=""
                  />
                </span>
                <div class="partner__cover">
                  <div class="partner__name">ScoutHouse</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="partners__item">
            <div class="partner__item">
              <a class="partner__link" target="_blank">
                <span class="partner__wrapper">
                  <img
                    width="381"
                    height="200"
                    loading="lazy"
                    src="../assets/images/IMG_4429-min.webp"
                    alt=""
                  />
                </span>
                <div class="partner__cover">
                  <div class="partner__name">NovoDacha</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners__header {
  font-size: 28px;
  font-weight: 600;
  background: #fff;
  display: inline-block;
  border-radius: 32px;
  padding: 3px 10px;
  color: #102938;
}
.partner__items {
  column-gap: 35px;
}
.partner__item {
  position: relative;
}
.partner__link {
  position: relative;
  display: flex;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
}
.partner__wrapper {
  background: #405460;
  top: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
}
.partner__wrapper img {
  object-fit: cover;
  top: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
}
.partner__link .partner__cover {
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #fff;
  padding: 20px;
  transition: opacity 0.2s;
}
.partner__link .partner__cover::before {
  content: " ";
  bottom: 0;
  height: 90px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  position: absolute;
  width: 100%;
  left: 0;
  color: #fff;
}
.partner__link .partner__name {
  font-size: 20px;
  line-height: 24px;
  position: relative;
  color: #fff;
  padding: 0 0 9px;
}
.partner__name {
  margin: 0;
}
</style>
