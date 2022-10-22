import Swal from "sweetalert2";

export const firstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const popupSwa = (title, text, icon, img) => {
  Swal.fire({
    title: title,
    text: text,
    imageUrl: img,
    imageWidth: "10rem",
    icon: icon,
    timer: 3000,
    timerProgressBar: true,
    iconColor: "#e31b6d",
    confirmButtonColor: "#e31b6d",
    customClass: {
      timerProgressBar: "swal2-timer-progress-bar2",
      popup: "popup",
      confirmButton: "button-swal2",
    },
  });
};
