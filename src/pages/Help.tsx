import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { OrderStatus } from "../components/OrderStatus";
import { Delivery } from "../components/Delivery";
import { FindStore } from "../components/FindStore";
import { Instruction } from "../components/Instruction";
import { ReplacementParts } from "../components/ReplacementParts";
import { Contact } from "../components/Contact";

export function Help() {
  const [showOrder, setShowOrder] = useState(true);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showFindStore, setShowFindStore] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);
  const [showReplacement, setShowReplacement] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const buttons = [
    <Button key="one" onClick={() => setShowOrder(showOrder)}>
      Check Order Status
      {showOrder === true ? <OrderStatus /> : <OrderStatus />}
    </Button>,
    <Button key="two" onClick={() => setShowDelivery(!showDelivery)}>
      Delivery & Returns
      {showDelivery === true ? <Delivery /> : null}
    </Button>,
    <Button key="three" onClick={() => setShowFindStore(!showFindStore)}>
      Find a LEGO Store
      {showFindStore === true ? <FindStore /> : null}
    </Button>,
    <Button key="four" onClick={() => setShowInstruction(!showInstruction)}>
      Find Building Instructions
      {showInstruction === true ? <Instruction /> : null}
    </Button>,
    <Button key="five" onClick={() => setShowReplacement(!showReplacement)}>
      Replacement Parts
      {showReplacement === true ? <ReplacementParts /> : null}
    </Button>,
    <Button key="six" onClick={() => setShowContact(!showContact)}>
      Contact Us
      {showContact === true ? <Contact /> : null}
    </Button>,
  ];
  return (
    <div className="sub-container">
      <div className="discover-container">
        {/* <img src={CountrieBG} alt="countrie-lego" /> */}
      </div>

      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
        >
          {buttons}
        </ButtonGroup>
      </Box>
      <div className="inProgress">
        <p>** Working in progress..🙋🏼‍♀️</p>
      </div>
    </div>
  );
}
