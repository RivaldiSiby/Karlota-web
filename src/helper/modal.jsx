import Swal from "sweetalert2";

const modal = {};

modal.error = (message) => {
  Swal.fire({
    icon: "error",
    title: "Have Error",
    text: message,
  });
};

modal.ask = (message, title) => {
  Swal.fire(`${title}`, `${message}`, "question");
};

modal.success = (message, title) => {
  Swal.fire(`${title}`, `${message}`, "success");
};

modal.confirm = (
  title = "Are you sure?",
  message,
  btnYes = "#3085d6",
  btnNo = "#d33",
  callback
) => {
  Swal.fire({
    title: title,
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: btnYes,
    cancelButtonColor: btnNo,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};

export default modal;
