// components/OffCanvas.js
import { Offcanvas } from 'react-bootstrap';
import Projects from './Projects';

function OffCanvas({ show, handleClose }) {
  return (
    <Offcanvas className={'color-cycle'} show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Projects</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Projects />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
