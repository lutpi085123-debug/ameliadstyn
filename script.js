const fullscreenButton = document.querySelector("#fullscreen-button");
const startButton = document.querySelector("#start-button");
const openingView = document.querySelector("#opening-view");
const channelsView = document.querySelector("#channels-view");
const menuView = document.querySelector("#menu-view");
const menuImage = document.querySelector("#menu-image");
const cultureMenu = document.querySelector("#sumatra-menu");
const cultureMenuArtboard = document.querySelector(".culture-menu-artboard");
const cultureMenuBackground = document.querySelector("#culture-menu-background");
const cultureMenuPopup = document.querySelector("#culture-menu-popup");
const cultureCardGrid = document.querySelector("#culture-card-grid");
const culturePopupOverlay = document.querySelector("#culture-popup-overlay");
const culturePopupTitle = document.querySelector("#culture-popup-title");
const culturePopupDescription = document.querySelector(
  "#culture-popup-description",
);
const culturePopupClose = document.querySelector("#culture-popup-close");
const backButton = document.querySelector("#back-button");
const channelButtons = document.querySelectorAll(".channel-button");
let cultureCardButtons = [];

const cultureMenus = {
  sumatra: {
    background: "assets/bg-sumatra-barat.png",
    popup: "assets/menu-sumatra-barat-popup.png",
    name: "Sumatera Barat",
    cards: [
      ["Rumah Gadang", "assets/sumbar-rumah-adat.png", "Rumah Gadang memiliki atap melengkung dan runcing seperti tanduk kerbau, menjadi ciri khas masyarakat Minangkabau."],
      ["Pakaian Adat Minangkabau", "assets/sumbar-pakaian-adat.png", "Pakaian adat Minangkabau memiliki ragam hias dan aksesoris khas; suntiang sering digunakan pada busana pengantin perempuan."],
      ["Tari Piring", "assets/sumbar-tarian-adat.png", "Tari Piring menggunakan piring sebagai properti dengan gerakan lincah mengikuti irama musik."],
      ["Rendang", "assets/sumbar-makanan-adat.png", "Rendang dibuat dari daging dan rempah yang dimasak lama hingga bumbu meresap."],
      ["Talempong", "assets/sumbar-alat-musik-adat.png", "Talempong adalah alat musik pukul tradisional yang menghasilkan bunyi nyaring dalam ansambel."],
    ],
  },
  "jawa-barat": {
    background: "assets/bg-jawa-barat-menu.png",
    popup: "assets/popup-jawa-barat.png",
    name: "Jawa Barat",
    cards: [
      ["Rumah Adat Julang Ngapak", "assets/jabar-rumah-adat.png", "Rumah adat Julang Ngapak memiliki atap melebar menyerupai burung yang sedang mengepakkan sayap."],
      ["Pakaian Adat Sunda", "assets/jabar-pakaian-adat.png", "Pakaian adat Sunda memiliki beragam bentuk dan hiasan sesuai tradisi dan acara."],
      ["Tari Jaipong", "assets/jabar-tarian-adat.png", "Tari Jaipong dikenal dengan gerakan dinamis, energik, dan ekspresif, diiringi musik tradisional Sunda."],
      ["Sate Maranggi", "assets/jabar-makanan-adat.png", "Sate Maranggi dikenal sebagai makanan khas Purwakarta; daging dibumbui sebelum dibakar."],
      ["Angklung", "assets/jabar-alat-musik-adat.png", "Angklung terbuat dari bambu dan dimainkan dengan cara digoyangkan untuk menghasilkan bunyi berirama."],
    ],
  },
  bali: {
    background: "assets/bg-bali-menu.png",
    popup: "assets/popup-bali.png",
    name: "Bali",
    cards: [
      ["Bale Meten", "assets/bali-rumah-adat.png", "Bale Meten adalah rumah adat Bali yang terletak di sisi utara pekarangan dengan lantai tinggi dan tiang kayu."],
      ["Pakaian Adat Bali", "assets/bali-pakaian-adat.png", "Pakaian adat Bali menggunakan kain dan lilitan khas, sering dilengkapi selendang sesuai kegiatan."],
      ["Tari Legong", "assets/bali-tarian-adat.png", "Tari Legong dikenal dengan gerakan luwes dan ekspresif serta gerakan mata dan tangan yang terperinci."],
      ["Nasi Jinggo", "assets/bali-makanan-adat.png", "Nasi Jinggo adalah sajian nasi porsi kecil dengan lauk dan sambal yang populer di Bali."],
      ["Gamelan Bali", "assets/bali-alat-musik-adat.png", "Gamelan Bali merupakan ansambel musik tradisional dengan bunyi perkusi khas."],
    ],
  },
  papua: {
    background: "assets/bg-papua-menu.png",
    popup: "assets/popup-papua.png",
    name: "Papua",
    cards: [
      ["Honai", "assets/papua-rumah-adat.png", "Honai adalah rumah tradisional masyarakat pegunungan Papua yang berbentuk bundar dengan atap menyerupai kubah."],
      ["Pakaian Adat Papua", "assets/papua-pakaian-adat.png", "Pakaian adat Papua beragam menurut komunitas dan wilayah; beberapa menggunakan bahan alam dan hiasan kepala."],
      ["Tari Yospan", "assets/papua-tarian-adat.png", "Tari Yospan merupakan tarian pergaulan dengan gerakan energik yang dilakukan bersama-sama."],
      ["Papeda", "assets/papua-makanan-adat.png", "Papeda adalah makanan berbahan dasar sagu bertekstur lengket, biasanya disantap bersama kuah ikan."],
      ["Tifa", "assets/papua-alat-musik-adat.png", "Tifa adalah alat musik pukul berbentuk tabung dari kayu yang digunakan dalam musik dan kegiatan adat."],
    ],
  },
  "jawa-tengah": {
    background: "assets/bg-jawa-tengah-menu.png",
    popup: "assets/popup-jawa-tengah.png",
    name: "Jawa Tengah",
    cards: [
      ["Rumah Joglo", "assets/jateng-rumah-adat.png", "Rumah Joglo dikenal dengan atap bertingkat dan struktur utama yang ditopang tiang-tiang kayu."],
      ["Pakaian Tradisional Jawa Tengah", "assets/jateng-pakaian-adat.png", "Pakaian tradisional Jawa Tengah antara lain beskap dan kebaya, digunakan sesuai adat atau acara."],
      ["Tari Gambyong", "assets/jateng-tarian-adat.png", "Tari Gambyong memiliki gerakan lembut dan luwes, umumnya diiringi gamelan Jawa."],
      ["Gudeg", "assets/jateng-makanan-adat.png", "Gudeg merupakan makanan khas Jawa Tengah yang terbuat dari nangka muda yang dimasak dengan santan dan bumbu hingga berwarna cokelat."],
      ["Gamelan Jawa", "assets/jateng-alat-musik-adat.png", "Gamelan Jawa merupakan ansambel alat musik tradisional dengan perpaduan bunyi dan irama khas."],
    ],
  },
};

const configureCultureMenu = (culture) => {
  const menu = cultureMenus[culture] ?? cultureMenus.sumatra;

  cultureMenuBackground.src = menu.background;
  cultureMenuPopup.src = menu.popup;
  cultureMenuPopup.alt = `Menu popup ${menu.name}`;
  cultureMenuArtboard.dataset.culture = culture;
  culturePopupOverlay.dataset.culture = culture;
  cultureCardGrid.setAttribute(
    "aria-label",
    `Pilihan budaya ${menu.name}`,
  );

  cultureCardGrid.innerHTML = menu.cards
    .map(
      ([title, image, description]) => `
        <button
          class="culture-card-button"
          type="button"
          data-title="${title}"
          data-description="${description}"
          aria-label="Pilih ${title}"
          aria-pressed="false"
        >
          <img src="${image}" alt="${title}" />
        </button>
      `,
    )
    .join("");

  cultureCardButtons = [
    ...cultureCardGrid.querySelectorAll(".culture-card-button"),
  ];
  cultureCardButtons.forEach((button) => {
    button.addEventListener("click", showCulturePopup);
  });
};

const showChannelView = () => {
  openingView.hidden = true;
  channelsView.hidden = false;
  menuView.hidden = true;
  menuView.classList.remove("menu-view--full");
  channelButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  cultureMenu.hidden = true;
  culturePopupOverlay.hidden = true;
  menuImage.hidden = false;
  document.activeElement?.blur();
};

const showMenuView = (event) => {
  const selectedButton = event.currentTarget;

  channelButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button === selectedButton));
  });

  const isCultureMenu = selectedButton.dataset.menuLayout === "culture";

  menuImage.hidden = isCultureMenu;
  cultureMenu.hidden = !isCultureMenu;

  if (isCultureMenu) {
    configureCultureMenu(selectedButton.dataset.culture);
  } else {
    menuImage.src = selectedButton.dataset.menuSrc;
    menuImage.alt = selectedButton.dataset.menuAlt;
  }

  menuView.classList.toggle(
    "menu-view--full",
    selectedButton.dataset.menuMode === "full",
  );
  openingView.hidden = true;
  channelsView.hidden = true;
  menuView.hidden = false;
};

const updateFullscreenButton = () => {
  const isFullscreen = Boolean(document.fullscreenElement);
  const label = isFullscreen
    ? "Keluar dari layar penuh"
    : "Masuk ke layar penuh";

  fullscreenButton.setAttribute("aria-label", label);
  fullscreenButton.setAttribute("title", label);
  fullscreenButton.setAttribute("aria-pressed", String(isFullscreen));
};

const toggleFullscreen = async () => {
  if (!document.fullscreenEnabled) {
    fullscreenButton.setAttribute(
      "title",
      "Mode layar penuh tidak didukung browser ini",
    );
    return;
  }

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    fullscreenButton.setAttribute(
      "title",
      "Layar penuh tidak dapat diaktifkan",
    );
  }
};

const startExperience = async () => {
  if (document.fullscreenEnabled && !document.fullscreenElement) {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      fullscreenButton.setAttribute(
        "title",
        "Layar penuh tidak dapat diaktifkan",
      );
    }
  }

  showChannelView();
};

fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenButton);
startButton.addEventListener("click", startExperience);
channelButtons.forEach((button) => {
  button.addEventListener("click", showMenuView);
});
backButton.addEventListener("click", showChannelView);

const closeCulturePopup = () => {
  culturePopupOverlay.hidden = true;
  const selectedCard = document.querySelector(
    '.culture-card-button[aria-pressed="true"]',
  );

  selectedCard?.focus();
};

const showCulturePopup = (event) => {
  const selectedCard = event.currentTarget;
  const selectedTitle = selectedCard.dataset.title;

  cultureCardButtons.forEach((cardButton) => {
    cardButton.setAttribute(
      "aria-pressed",
      String(cardButton === selectedCard),
    );
  });
  culturePopupTitle.textContent = selectedTitle;
  culturePopupDescription.textContent = selectedCard.dataset.description;
  culturePopupTitle.classList.toggle(
    "culture-popup-title--long",
    selectedTitle.length > 18,
  );
  culturePopupOverlay.setAttribute(
    "aria-label",
    `Menu popup ${selectedTitle}`,
  );
  culturePopupOverlay.hidden = false;
  culturePopupClose.focus();
};

culturePopupClose.addEventListener("click", closeCulturePopup);
updateFullscreenButton();