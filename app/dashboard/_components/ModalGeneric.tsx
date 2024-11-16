'use client'

import { Button, Modal, ModalBody, ModalContent, useDisclosure, Image} from "@nextui-org/react"
import { ReactNode } from "react";

export default function ModalGeneric({children, icon, photo, button, activator}: {children: ReactNode, icon: ReactNode, photo: string, button: ReactNode, activator: ReactNode }){
    const {isOpen, onOpen, onOpenChange}= useDisclosure();

    return(
        <div>
            <Button color="primary" onPress={onOpen}>
            <Image src={photo} onClick={onOpen} 
               {icon}
            />
            </Button>
            <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-full">
                    {()=>(
                        <>
                        <ModalBody>
                            {children}
                        </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}