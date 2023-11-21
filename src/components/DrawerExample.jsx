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
import { Link } from 'react-router-dom';



function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Companies
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
                    <DrawerHeader>Companies </DrawerHeader>

                    <DrawerBody>
                        <Input p={'2'} placeholder='Type here...' />
                        <VStack p={'2'}>
                            <Link to='/Apple'> 
                            <Button w={'full'} colorScheme='blue' >
                                Apple
                            </Button>
                            </Link>
                            <Link to='/amazon'> 
                            <Button w={'full'} colorScheme='blue' >
                                Amazon
                            </Button>
                            </Link>
                            <Link to='/google'> 
                            <Button w={'full'} colorScheme='blue' >
                                Google
                            </Button>
                            </Link>
                            <Link to='/netflix'> 
                            <Button w={'full'} colorScheme='blue' >
                                Netflix
                            </Button>
                            </Link>
                            <Link to='/cnbc'> 
                            <Button w={'full'} colorScheme='blue' >
                                Cnbc
                            </Button>
                            </Link>
                            <Link to='/hdfc'> 
                            <Button w={'full'} colorScheme='blue' >
                                HDFC
                            </Button>
                            </Link>
                            

                        </VStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerExample;

