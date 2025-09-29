const loader = document.createElement("div");
loader.id = "loader";
loader.className =
  "fixed inset-0 flex items-center justify-center bg-[#0084f4] z-50 hidden";
loader.innerHTML = `
  <style>
    .spinner {
      width: 40px;
      height: 40px;
      position: relative;
      text-align: center;
      -webkit-animation: sk-rotate 2.0s infinite linear;
      animation: sk-rotate 2.0s infinite linear;
    }
    .dot1, .dot2 {
      width: 60%;
      height: 60%;
      display: inline-block;
      position: absolute;
      top: 0;
      background-color: #fff;
      border-radius: 100%;
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    .dot2 {
      top: auto;
      bottom: 0;
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
    @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
    @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }
    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  </style>
  <div class="spinner">
    <div class="dot1"></div>
    <div class="dot2"></div>
  </div>
`;
document.body.appendChild(loader);
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loader").classList.remove("hidden");

    const url = this.getAttribute("href");
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  });
});
