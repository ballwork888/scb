<script setup>
const banners = [
  {
    src: "/images/banner/b1-2.jpg",
    alt: "ทายผลบอลลุ้นรับ 30,000 บาททุกสัปดาห์",
    link: null,
  },
  {
    src: "/images/banner/b2.jpg",
    alt: "ทายผลบอลลุ้นรับ 30,000 บาททุกสัปดาห์",
    link: null,
  },
  {
    src: "/images/banner/b3.jpg",
    alt: "ทายผลบอลลุ้นรับ 30,000 บาททุกสัปดาห์",
    link: null,
  },
  {
    src: "/images/banner/b4.jpg",
    alt: "ทายผลบอลลุ้นรับ 30,000 บาททุกสัปดาห์",
    link: null,
  },
  {
    src: "/images/banner/b5.jpg",
    alt: "ทายผลบอลลุ้นรับ 30,000 บาททุกสัปดาห์",
    link: null,
  },
];
</script>
<template>
  <div class="d-flex justify-content-center">
    <div class="-banner-image">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            :class="{ active: index == 0 }"
            aria-current="true"
            :aria-label="'Slide ' + (index + 1)"
            v-for="(banner, index) in banners"
            :key="index"
            v-bind:data-bs-slide-to="index"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{ active: index == 0 }"
            v-for="(banner, index) in banners"
            :key="index"
          >
            <img
              v-bind:src="banner.src"
              class="d-block w-100"
              :alt="banner.alt"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
