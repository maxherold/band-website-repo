const $icon = document.querySelector(".icon");
      const $arrow = document.querySelector(".arrow");

      $icon.onclick = () => {
        $arrow.animate([{ left: "0" }, { left: "12px" }, { left: "0" }], {
          duration: 999,
          iterations: Infinity
        });
      };