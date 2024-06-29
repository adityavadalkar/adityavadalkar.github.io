// components/Modal.js
import { Modal } from 'react-bootstrap';

export default function CustomModal({ show, handleClose, title, videoUrl }) {
  return (
    <Modal size="xl" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%'}}>
          {videoUrl!="#" && <iframe src={videoUrl} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe>}
          {videoUrl==="#" && <p>Details coming soon!</p>}
        </div>
      </Modal.Body>
    </Modal>
  );
}
