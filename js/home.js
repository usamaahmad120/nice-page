
  function setPreview(device) {
    const frame = document.getElementById("preview-frame");

    if (!frame) {
      alert("Preview frame not found!");
      return;
    }

    switch (device) {
      case "desktop":
        frame.style.width = "100%";
        frame.style.height = "600px";
        break;
      case "laptop":
        frame.style.width = "1366px";
        frame.style.height = "600px";
        break;
      case "tablet":
        frame.style.width = "768px";
        frame.style.height = "1024px";
        break;
      case "phone-horizontal":
        frame.style.width = "812px";
        frame.style.height = "375px";
        break;
      case "phone":
        frame.style.width = "375px";
        frame.style.height = "667px";
        break;
    }
  }

