<template>
  <div class="cloud-background" aria-hidden="true">
    <div class="cloud-lane cloud-lane-1">
      <div class="cloud cloud-1"></div>
    </div>
    <div class="cloud-lane cloud-lane-2">
      <div class="cloud cloud-2"></div>
    </div>
    <div class="cloud-lane cloud-lane-3">
      <div class="cloud cloud-3"></div>
    </div>
    <div class="cloud-lane cloud-lane-4">
      <div class="cloud cloud-4"></div>
    </div>
    <div class="cloud-lane cloud-lane-5">
      <div class="cloud cloud-5"></div>
    </div>
  </div>
</template>

<style scoped>
.cloud-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(0, 180, 255, 0.92), rgba(37, 99, 235, 0.86)),
    #00b4ff;
}

.cloud-background::after {
  position: absolute;
  inset: 0;
  content: "";
  background:
    linear-gradient(90deg, rgba(17, 17, 17, 0.15), transparent 36%, rgba(17, 17, 17, 0.18)),
    linear-gradient(180deg, transparent 55%, rgba(17, 17, 17, 0.16));
}

.cloud-lane {
  position: absolute;
  left: -420px;
  width: 360px;
  animation: animate-cloud linear infinite;
  will-change: transform;
}

.cloud-lane-1 {
  top: 28%;
  animation-duration: 36s;
}

.cloud-lane-2 {
  top: 11%;
  animation-duration: 22s;
  animation-delay: -9s;
  transform: scale(0.48);
}

.cloud-lane-3 {
  top: 56%;
  animation-duration: 31s;
  animation-delay: -17s;
  transform: scale(0.74);
}

.cloud-lane-4 {
  top: 41%;
  animation-duration: 19s;
  animation-delay: -5s;
  transform: scale(0.58);
}

.cloud-lane-5 {
  top: 72%;
  animation-duration: 27s;
  animation-delay: -13s;
  transform: scale(0.66);
}

.cloud {
  position: relative;
  width: 350px;
  height: 120px;
  border-radius: 100px;
  background: linear-gradient(180deg, #fff 5%, #f1f7fb 100%);
  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.12);
  opacity: 0.72;
}

.cloud::before,
.cloud::after {
  position: absolute;
  z-index: -1;
  content: "";
  background: #fff;
}

.cloud::after {
  top: -50px;
  left: 50px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
}

.cloud::before {
  top: -90px;
  right: 50px;
  width: 180px;
  height: 180px;
  border-radius: 200px;
}

.cloud-2,
.cloud-4 {
  opacity: 0.56;
}

.cloud-3 {
  opacity: 0.64;
}

@keyframes animate-cloud {
  from {
    translate: 0 0;
  }

  to {
    translate: calc(100vw + 880px) 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cloud-lane {
    animation: none;
  }
}
</style>
