'use client';
import { useState } from 'react';
import Modal from './modalPopup';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>📦 Modal Utility Demo</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>🎉 Hello from Modal!</h3>
        <p>This is a reusable popup component.</p>
      </Modal>
    </div>
  );
}
