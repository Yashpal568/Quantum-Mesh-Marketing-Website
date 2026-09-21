import React from 'react';
import { useModal } from '../../context/ModalContext';
import { DemoModal } from './DemoModal';
import { InquiryModal } from './InquiryModal';

export const GlobalModal: React.FC = () => {
  const { modalType, selectedProduct, closeModal } = useModal();

  return (
    <>
      <DemoModal
        isOpen={modalType === 'demo'}
        onClose={closeModal}
        defaultProduct={selectedProduct}
      />
      <InquiryModal
        isOpen={modalType === 'inquiry' || modalType === 'quote'}
        onClose={closeModal}
        isQuote={modalType === 'quote'}
        defaultProduct={selectedProduct}
      />
    </>
  );
};
