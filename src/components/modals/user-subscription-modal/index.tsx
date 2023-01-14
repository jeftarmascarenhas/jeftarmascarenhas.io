import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'
import { useRef } from 'react'
import { Props } from './types'

export default function UserSubscriptionModal({ isOpen, onClose }: Props) {
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Inscreva-se para ser avisado</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <NewsletterSubscribe title="Seja avisado com antecedência." />
        </ModalBody>
      </ModalContent>
      <ModalFooter>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}
