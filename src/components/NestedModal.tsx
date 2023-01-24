import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #1565c0",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "1rem",
  color: "navy",
};

function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Start</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 550,
            height: "auto",
            textAlign: "center",
            alignItems: "center",
            padding: "3rem 0",
          }}
        >
          <h2 id="parent-modal-title">Special gifts! 🎁 🎁 🎁</h2>
          <p id="parent-modal-description">Coming soon!</p>
          <a
            href="/"
            style={{
              textDecoration: "none",
              textAlign: "right",
            }}
          >
            Continue shopping.. 🚗
          </a>
        </Box>
      </Modal>
    </div>
  );
}
export default NestedModal;
