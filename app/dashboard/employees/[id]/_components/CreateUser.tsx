'use client'

import { Button, Modal, ModalBody, ModalContent, useDisclosure, Image} from "@nextui-org/react"
import { ReactNode } from "react";

export default function CreateEmployee({children, icon, photo}: {children: ReactNode, icon: ReactNode, photo: string }){
    const {isOpen, onOpen, onOpenChange}= useDisclosure();

    return(
        <div>
            <Image src={photo} onClick={onOpen} 
                isZoomed
                className="object-cover"
                classNames={{
                    img: "size-60"
                }}
            />
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