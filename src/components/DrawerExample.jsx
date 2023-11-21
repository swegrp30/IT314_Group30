import React, { useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button, Input, useDisclosure, VStack
} from '@chakra-ui/react'




function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Companys </DrawerHeader>

                    <DrawerBody>
                        <Input p={'2'} placeholder='Type here...' />
                        <VStack p={'2'}>
                        <Button w={'full'} colorScheme='blue'>Apple</Button>
                        <Button w={'full'} colorScheme='blue'>Apple</Button>
                        <Button w={'full'} colorScheme='blue'>Apple</Button>
                        <Button w={'full'} colorScheme='blue'>Apple</Button>
                        <Button w={'full'} colorScheme='blue'>Apple</Button>

                        </VStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerExample;