mongodb+srv //maxherold:<Allstar1234%24%21%24%21>@the-band-jpcoi.azure.mongodb.net/test?retryWrites=true&w=majority

 const $icon = document.querySelector(".icon");
      const $arrow = document.querySelector(".arrow");

      $icon.onclick = () => {
        $arrow.animate([{ left: "0" }, { left: "12px" }, { left: "0" }], {
          duration: 999,
          iterations: Infinity
        });
      };