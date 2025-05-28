import { items } from "./items.js";

const wavePaths = [
  "M31.8105 4.54688C42.8988 4.07325 54.6142 7.17835 66.9795 12.8262C91.727 24.1296 118.923 45.5432 148.694 68.4873C178.441 91.4123 210.728 115.839 245.591 133.073C279.916 150.042 316.769 160.054 356.192 154.792L358.072 154.53L358.077 154.529C398.191 148.251 433.892 127.955 468.664 104.607C503.466 81.2396 537.304 54.8414 573.811 36.2061C610.289 17.5848 649.366 6.75574 694.571 14.5312C739.788 22.3087 791.204 48.7113 852.329 104.691L852.343 104.704L852.357 104.716C887.835 132.707 919.043 166.03 950.282 195.51C981.496 224.966 1012.73 250.57 1048.17 262.965C1083.64 275.37 1123.28 274.527 1171.26 251.203C1219.22 227.889 1275.52 182.113 1344.37 104.655L1344.39 104.637L1344.4 104.617C1359.85 83.4549 1376.35 72.8081 1393.64 69.9736C1410.94 67.1373 1429.13 72.1084 1447.99 82.376C1485.72 102.923 1525.9 144.544 1566.58 186.482C1607.21 228.379 1648.35 270.589 1687.94 292.132C1707.74 302.909 1727.21 308.543 1746.07 306.346C1764.65 304.181 1782.56 294.425 1799.57 274.658L1800.38 273.709C1831.49 236.92 1849.94 220.258 1878.43 157.273L1879.79 154.239C1883.79 145.288 1893.96 122.556 1903.12 102.062C1907.71 91.8155 1912.04 82.1277 1915.23 75.002C1916.82 71.4393 1918.13 68.517 1919.04 66.4854C1919.21 66.1094 1919.36 65.7636 1919.5 65.4502V1385.5H0.5V17.6328C10.3689 9.0193 20.7984 5.01729 31.8105 4.54688Z",
  "M81.4658 -12.7494C114.002 -15.6423 150.34 -11.2727 185.469 0.249634C255.735 23.2972 321.07 74.9268 341.516 154.16L341.551 154.296L341.65 154.393C466.4 276.137 687.254 253.003 805.906 87.2906L805.929 87.2604L805.945 87.2272C824.931 50.006 843.14 27.8267 860.97 16.8278C878.76 5.85346 896.219 5.98136 913.835 13.5026C931.485 21.0384 949.285 35.9955 967.671 54.6774C986.054 73.3568 1004.97 95.7009 1024.88 117.989C1064.66 162.521 1108.39 206.822 1159.46 220.549C1210.62 234.301 1268.97 217.348 1337.87 139.833L1337.89 139.814L1337.9 139.795C1368.82 97.4364 1401.96 83.1733 1436.42 82.9948C1470.93 82.8159 1506.82 96.7661 1543.25 110.996C1579.64 125.208 1616.55 139.696 1652.98 140.425C1688.89 141.144 1724.29 128.497 1758.26 89.2135L1759.88 87.3229C1761.81 85.0374 1763.83 83.569 1765.91 82.7799C1767.99 81.9919 1770.16 81.8695 1772.42 82.3229C1776.98 83.2342 1781.91 86.4684 1787.1 91.2731C1797.49 100.878 1808.71 116.506 1819.91 131.336C1825.49 138.739 1831.07 145.936 1836.53 152.052C1841.98 158.164 1847.33 163.225 1852.46 166.333C1857.59 169.441 1862.59 170.64 1867.26 168.873C1871.78 167.168 1875.85 162.752 1879.44 155L1879.79 154.239C1883.79 145.287 1893.96 122.556 1903.12 102.062C1907.71 91.8152 1912.04 82.1273 1915.23 75.0016C1916.82 71.4389 1918.13 68.5166 1919.04 66.485C1919.21 66.1089 1919.36 65.7633 1919.5 65.4498V1385.5H0.5V17.6334C20.3891 0.241508 49.0168 -9.86409 81.4658 -12.7494Z",
  "M0.5 31.6328C40.3172 -3.18802 108.728 -4.2827 172.427 23.2158C236.186 50.7403 295.061 106.854 315.516 186.125L315.548 186.251L315.638 186.345C324.16 195.308 338.557 202.919 357.128 209.113C375.711 215.312 398.528 220.111 423.943 223.418C474.774 230.033 536.048 230.688 594.739 224.622C653.423 218.557 709.569 205.767 750.122 185.463C790.603 165.195 815.711 137.344 812.012 101.098C830.965 63.9842 851.856 42.7357 874.044 33.0996C896.247 23.457 919.841 25.403 944.265 34.8721C968.697 44.3444 993.922 61.3311 1019.34 81.7031C1044.75 102.073 1070.33 125.801 1095.48 148.744C1120.61 171.68 1145.32 193.831 1168.98 211.014C1192.64 228.191 1215.29 240.446 1236.33 243.526C1257.41 246.614 1276.82 240.478 1293.9 220.985C1310.68 201.83 1325.21 169.788 1336.93 120.953L1337.49 118.614C1341.93 99.7751 1347.51 88.2937 1354.09 82.2129C1357.37 79.1824 1360.9 77.4918 1364.66 76.8955C1368.44 76.2982 1372.49 76.7941 1376.81 78.1855C1385.47 80.9732 1395.15 87.3238 1405.77 95.4658C1416.39 103.612 1427.87 113.473 1440.21 123.293C1464.83 142.889 1492.73 162.202 1523.13 166.388C1553.1 170.517 1585.4 159.92 1619.27 120.712L1620.88 118.823C1624.68 114.329 1631.03 112.623 1639.47 113.08C1647.89 113.537 1658.28 116.148 1670 120.145C1693.44 128.138 1722.03 141.616 1750.6 154.242C1779.15 166.856 1807.68 178.62 1830.91 183.13C1842.52 185.385 1852.86 185.837 1861.24 183.641C1869.38 181.506 1875.66 176.871 1879.43 169.01L1879.79 168.239C1883.79 159.288 1893.96 136.556 1903.12 116.062C1907.71 105.816 1912.04 96.1277 1915.23 89.002C1916.82 85.4393 1918.13 82.517 1919.04 80.4854C1919.21 80.1094 1919.36 79.7636 1919.5 79.4502V1399.5H0.5V31.6328Z",
];

let lastWave = null;

function getRandomWave() {
  let next;
  do {
    next = wavePaths[Math.floor(Math.random() * wavePaths.length)];
  } while (next === lastWave);
  lastWave = next;
  return next;
}

function renderSlides() {
  const wrapper = document.getElementById("swiper-wrapper");
  wrapper.innerHTML = "";
  items.forEach((item, i) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    // slide.style.backgroundColor = item.backgroundColor;
    slide.innerHTML = `
    <div class="content-wrapper content-wrapper-top" style="display: flex; flex-direction: column;
    justify-content: center;">
      <p class="caption" style="color: ${item.textColor}">${item.caption}</p>
      <h2 class="title" style="color: ${item.textColor}">${item.titleTop}</h2>
      </div>
      <div class="content-wrapper-bottom">
        <div class="bg-image">
            <img class="bg" src="${item.backgroundImage}" />
        </div>
        <div class="image">
            <img src="${item.image}" />
        </div>
        <div class="content-wrapper">
            <h2 class="title" style="color: ${item.textColor}">${item.titleBottom}</h2>
            <p class="description" style="color: ${item.textColor}">${item.description}</p>
        </div>
      </div>
  `;
    wrapper.appendChild(slide);
  });
}

function addWave(color) {
  const container = document.getElementById("wave-bg-container");

  const div = document.createElement("div");
  div.className = "liquid-bg animate-liquid";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "wave-mask");
  svg.setAttribute("viewBox", "0 0 1920 1400");
  svg.setAttribute("preserveAspectRatio", "xMinYMin slice");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", color);
  path.setAttribute("d", getRandomWave());

  svg.appendChild(path);
  div.appendChild(svg);
  container.appendChild(div);

  // Clean up older wave layers
  if (container.children.length > 2) {
    container.removeChild(container.children[0]);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    // Optional: even delay one more frame for smoother layout
    requestAnimationFrame(() => {
      renderSlides();

      const swiper = new Swiper(".mySwiper", {
        loop: false,
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 1200,
        grabCursor: true,
        initialSlide: 0,
        on: {
          slideChange: function () {
            const i = swiper.activeIndex;
            const color = items[i]?.backgroundColor;
            addWave(color);
          },
        },
      });

      // Force Swiper layout recalculation
      swiper.update();

      // Set initial wave color
      addWave(items[0].backgroundColor);

      // Reveal Swiper after it's ready
      document
        .querySelector(".swiper-container-wrapper")
        .classList.remove("hidden");
      document
        .querySelector(".swiper-container-wrapper")
        .classList.add("visible");
    });
  });
});
