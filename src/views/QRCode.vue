<template>
  <main class="main">
    <div class="card">
      <div class="card-header">
        <img
          src="../assets/images/image-qr-code.png"
          alt="qr-code"
        />
      </div>

      <div class="card-body">
        <div class="card-body-header">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif;
}

a {
  color: blue;
  text-decoration: none;
}

.main {
  background-color: hsl(212, 45%, 89%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
}

.card {
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  box-shadow: 0 5px 15px hsl(220, 15%, 55%, 0.3);
  padding: 14px;
  padding-bottom: 10px;
  width: 280px;
}

img {
  width: 100%;
  border-radius: 10px;
}

.card-body {
  padding: 15px 5px;

  text-align: center;
}

h1 {
  color: hsl(218, 44%, 22%);
  font-size: 1.2em;
  font-weight: 700;
}

p {
  padding: 15px 0;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #777;
}
</style>
