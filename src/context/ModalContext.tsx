import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ModalContextType, ModalType } from '../types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openModal = useCallback((type: ModalType, productName?: string) => {
    setModalType(type);
    setSelectedProduct(productName);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    setSelectedProduct(undefined);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <ModalContext.Provider value={{ modalType, selectedProduct, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
