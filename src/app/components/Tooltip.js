// components/Tooltip.js
import React from 'react';
import { Tooltip as BootstrapTooltip, OverlayTrigger } from 'react-bootstrap';

const Tooltip = ({ children, title, position="top" }) => (
  <OverlayTrigger
    placement={position}
    overlay={
      <BootstrapTooltip className="d-none d-md-block" id="tooltip-top">
        {title}
      </BootstrapTooltip>
    }
  >
    {children}
  </OverlayTrigger>
);

export default Tooltip;
