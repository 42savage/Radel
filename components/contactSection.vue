<template>
  <div class="contact-wrapper">
    <sectionTitle
      :subTitle="'Masz coś na oku?'"
      :title="'Skontaktuj się z nami'"
      :maxWidth="'460px'"
      :content="'Twoja wiadomość jest dla nas niezwykle ważna. Odpowiemy na nią tak szybko jak to tylko możliwe.'"
    />
    <div class="form-wrap">
      <form class="contact-form">
        <p class="form-title">Skorzystaj z formularza kontaktowego</p>
        <div class="row">
          <label for="name" id="name">Imię/Nazwa firmy</label>
          <input type="text" name="name" placeholder="Jan Kowalski" />
        </div>
        <div class="row">
          <label for="email" id="email">Adres e-mail</label>
          <input
            type="email"
            name="email"
            placeholder="jankowalski@poczta.pl"
          />
        </div>
        <div class="row">
          <label for="name" id="message">Treść wiadomości</label>
          <textarea
            placeholder="Podaj szczegóły swojego zapytania. Powiedz czy masz gotowy rysunek, na czym Ci zależy i czego oczekujesz."
          ></textarea>
        </div>
        <input type="submit" value="Wyślij" />
        <p class="additional-info">
          Korzystając z formularza wyrażasz zgodę na przetwarzanie Twoich danych
          przez firmę Radel.
        </p>
      </form>
    </div>
    <div class="extra-contact">
      <p class="extra-title">Wolisz kontakt telefoniczny?</p>
      <div class="phone-grid">
        <div class="phone-info">
          <p class="phone-title">Cezary Fiet</p>
          <a class="number" href="tel:123123123"
            ><img src="/svg/phone.svg" alt="" />123-123-123</a
          >
        </div>

        <div class="phone-info">
          <p class="phone-title">Izabela Fiet</p>
          <a class="number" href="tel:123123123"
            ><img src="/svg/phone.svg" alt="" />123-123-123</a
          >
        </div>

        <div class="phone-info">
          <p class="phone-title">Robert Kwiatkowski</p>
          <a class="number" href="tel:123123123"
            ><img src="/svg/phone.svg" alt="" />123-123-123</a
          >
        </div>
      </div>
    </div>
    <div class="address-info">
      <p class="address-title">Dane adresowe</p>
      <p class="address">RADEL Izabela Fiet</p>
      <p class="address">26-600 Radom</p>
      <p class="address">ul. Biznesowa 25,</p>
      <p class="address">NIP: 796-13-52-761</p>
      <img src="/contact/map-mobile.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.contact-wrapper {
  margin-top: 160px;
  background: #f8f8f8;
  padding: 32px 24px;
  border-radius: 24px;
}
.contact-form {
  background: #ebebeb;
  padding: 32px 24px;
  border-radius: 24px;
}
.form-title {
  font-weight: bold;
  font-size: 32px;
  color: $baseColor;
}
.row {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
}
label {
  font-weight: bold;
  font-size: 16px;
  color: #535353;
  margin-bottom: 8px;
}
input[type="text"],
input[type="email"],
textarea {
  font-size: 12px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #d9d9d9;
  font-family: "Inter";
  font-weight: 300;
}
textarea {
  min-height: 200px;
}
input[type="submit"] {
  border-radius: 8px;
  width: 100%;
  color: #f8f8f8;
  background: $baseColor;
  padding: 8px;
  border: none;
}
.additional-info {
  font-size: 10px;
  color: #9e9e9e;
  margin-top: 16px;
}
.extra-title {
  font-size: 16px;
  color: $baseColor;
  margin: 40px 0 24px 0;
  font-weight: bold;
}
.phone-grid {
  display: flex;
  flex-wrap: wrap;
}
.phone-info {
  margin: 8px 0;
  &:nth-child(1),
  &:nth-child(2) {
    margin-right: 8px;
  }
}
.phone-title {
  font-size: 16px;
  margin: 4px;
  color: $contentColor;
  font-weight: 300;
}
.number {
  padding: 8px 16px;
  background: #d9d9d9;
  border-radius: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 0;
  text-decoration: none;
  color: $baseColor;
  img {
    margin-right: 8px;
  }
}
.address-info {
  border-radius: 16px;
  background: #eaeaea;
  margin-top: 40px;
  padding: 32px 24px;
  position: relative;
  img {
    position: absolute;
    right: 24px;
    bottom: 24px;
    border-radius: 8px;
  }
}
.address-title {
  font-weight: bold;
  font-size: 16px;
  color: $baseColor;
  margin-bottom: 12px;
}
.address {
  font-size: 16px;
  font-weight: 300;
  color: $baseColor;
}

@media (min-width: 744px) {
  .contact-wrapper {
    padding: 56px 48px;
  }
  .form-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0;
  }
  .contact-form {
    width: 648px;
    padding: 56px 48px;
  }
}
@media (min-width: 1440px) {
  .contact-wrapper {
    margin: 80px;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .extra-contact {
    position: absolute;
    left: 48px;
    bottom: 360px;
  }
  .address-info {
    position: absolute;
    left: 48px;
    bottom: 96px;
    width: 480px;
  }
}
@media (min-width: 1920px) {
  .contact-wrapper {
    margin: 80px 240px;
  }
}
</style>
