<template>
  <div class="cookies" v-if="showNotification">
    <div v-if="!editSettingsState">
      <img class="cookies-image" src="/svg/cookies.svg" alt="" />
      <p class="title">Informacja o plikach cookies</p>
      <p class="text">
        Nasza strona internetowa wykorzystuje pliki cookies w celu prowadzenia
        analityki i poprawy jakości świadczonych usług.
      </p>
      <div class="buttons">
        <button class="cookie-button" @click="acceptCookies">Rozumiem!</button>
        <button @click="editPreferences" class="cookie-manage-button">
          Edytuj ustawienia
        </button>
      </div>
    </div>
    <div v-else>
      <p class="preference-title">Edytuj preferencje</p>
      <div
        class="row"
        v-for="preference in listOfPreferences"
        :key="preference.id"
      >
        <p class="row-title">{{ preference.title }}</p>
        <p class="row-text">{{ preference.text }}</p>
        <div class="button-wrap">
          <button
            @click="editPreferenceState(preference)"
            class="toggle-button"
            :class="{ checked: preference.state === 'granted' }"
          >
            <span v-if="preference.state === 'denied'">Włącz</span>
            <span v-else>Wyłącz</span>
          </button>
        </div>
      </div>
      <div class="buttons">
        <button class="cookie-manage-button" @click="acceptChosenCookies">
          Zaakceptuj wybrane
        </button>
        <button class="cookie-button" @click="acceptCookies">
          Akceptuj wszystkie
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showNotification = ref(false);
const { gtag } = useGtag();
const editSettingsState = ref(false);

const listOfPreferences = ref([
  {
    id: 0,
    title: "Podstawowe reklamy",
    text: "Pozwala na zbieranie i przetwarzanie danych użytkownika w celach reklamowych",
    state: "denied",
  },
  {
    id: 1,
    title: "Personalizacja reklam",
    text: "Pozwala na wyświetlanie spersonalizowanych reklam na podstawie historii przeglądania",
    state: "denied",
  },
  {
    id: 2,
    title: "Przechowywanie danych reklamowych",
    text: "Umożliwia śledzenie konwersji i działań użytkownika w celach reklamowych",
    state: "denied",
  },
  {
    id: 3,
    title: "Przechowywanie danych analitycznych",
    text: "Pozwala na zbieranie danych statystycznych o użytkowaniu strony",
    state: "denied",
  },
]);

function acceptCookies() {
  gtag("consent", "update", {
    ad_user_data: "granted",
    ad_personalization: "granted",
    ad_storage: "granted",
    analytics_storage: "granted",
  });
  showNotification.value = false;
  localStorage.setItem("cookiesAccepted", true);
}

function updatePreferencesList() {
  const adUserData = localStorage.getItem("ad_user_data");
  const adPersonalization = localStorage.getItem("ad_personalization");
  const adStorage = localStorage.getItem("ad_storage");
  const analyticsStorage = localStorage.getItem("analytics_storage");

  if (adUserData || adPersonalization || adStorage || analyticsStorage) {
    listOfPreferences.value[0].state = adUserData;
    listOfPreferences.value[1].state = adPersonalization;
    listOfPreferences.value[2].state = adStorage;
    listOfPreferences.value[3].state = analyticsStorage;
  }
}

function acceptChosenCookies() {
  gtag("consent", "update", {
    ad_user_data: listOfPreferences.value[0].state,
    ad_personalization: listOfPreferences.value[1].state,
    ad_storage: listOfPreferences.value[2].state,
    analytics_storage: listOfPreferences.value[3].state,
  });
  localStorage.setItem("cookiesAccepted", true);
  editSettingsState.value = false;
  showNotification.value = false;
  localStorage.setItem("ad_user_data", listOfPreferences.value[0].state);
  localStorage.setItem("ad_personalization", listOfPreferences.value[1].state);
  localStorage.setItem("ad_storage", listOfPreferences.value[2].state);
  localStorage.setItem("analytics_storage", listOfPreferences.value[3].state);
}

function editPreferences() {
  editSettingsState.value = true;
}
function editPreferenceState(preference) {
  const found = listOfPreferences.value.find(
    (pref) => pref.id === preference.id
  );
  if (found.state === "denied") {
    found.state = "granted";
  } else {
    found.state = "denied";
  }
}
onMounted(() => {
  showNotification.value = true;
  updatePreferencesList();
  let cookiesLocalStorage = localStorage.getItem("cookiesAccepted");
  if (cookiesLocalStorage == "true") {
    showNotification.value = false;
  }
});
</script>
<style scoped lang="scss">
.cookies {
  width: calc(100% - 48px);
  min-height: 400px;
  max-height: 560px;
  padding: 32px 24px;
  background: #fafafa;
  border: 1px solid rgb(214, 214, 214);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  bottom: 24px;
  left: 24px;
  border-radius: 12px;
  z-index: 5;
  overflow-y: scroll;
}
.cookies-image {
  width: 120px;
  object-fit: contain;
  margin-bottom: 48px;
}
.title {
  font-weight: bold;
  font-size: 24px;
  color: #003049;
  margin-bottom: 16px;
}
.preference-title {
  font-weight: bold;
  font-size: 22px;
  color: rgb(49, 49, 49);
}
.text {
  font-weight: 200;
}
.cookie-button {
  background: #003049;
  font-size: 12px;
  padding: 8px 16px;
  margin-top: 48px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fafafa;
  &:hover {
    background: #005a8a;
  }
}
.cookie-manage-button {
  border: none;
  background: none;
  text-decoration: none;
  margin-left: 16px;
  margin-right: 16px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
}
.row {
  border: 1px solid silver;
  margin: 16px 0;
  border-radius: 4px;
}
.row-title {
  font-weight: bold;
  margin-left: 12px;
  margin-top: 8px;
  font-size: 14px;
}
.row-text {
  font-weight: 200;
  margin: 8px 0;
  margin-left: 12px;
  font-size: 14px;
}

.button-wrap {
  border-top: 1px solid silver;
  width: 100%;
  padding: 12px;
}
.toggle-button {
  padding: 4px 8px;
  border: none;
  cursor: pointer;
}
.checked {
  background: #003049;
  color: #f1f1f1;
}

@media (min-width: 744px) {
  .cookies {
    width: 400px;
    left: initial;
    right: 40px;
    bottom: 40px;
  }
}
</style>
