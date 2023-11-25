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

                        <Link to='/news'> 
                            <Button w={'full'} colorScheme='green' mt={3} mb={3} >
                                General News
                            </Button>
                            </Link>

                            <Link to='/tesla'> 
                            <Button w={'full'} colorScheme='blue' >
                                Tesla
                            </Button>
                            </Link>

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



                            <Link to='/reliance'> 
                            <Button w={'full'} colorScheme='blue' >
                               Reliance 
                            </Button>
                            </Link>
                            <Link to='/reliancegolbal'> 
                            <Button w={'full'} colorScheme='blue' >
                            Reliance Global
                            </Button>
                            </Link>
                            <Link to='/icici'> 
                            <Button w={'full'} colorScheme='blue' >
                                ICICI Bank
                            </Button>
                            </Link>
                            <Link to='/infosys'> 
                            <Button w={'full'} colorScheme='blue' >
                                Infosys
                            </Button>
                            </Link>
                            <Link to='/wipro'> 
                            <Button w={'full'} colorScheme='blue' >
                                Wipro
                            </Button>
                            </Link>
                            <Link to='/makemytrip'> 
                            <Button w={'full'} colorScheme='blue' >
                                Make My Trip
                            </Button>
                            </Link>

                            <Link to='/yatra'> 
                            <Button w={'full'} colorScheme='blue' >
                                Yatra
                            </Button>
                            </Link>

                            <Link to='/sify'> 
                            <Button w={'full'} colorScheme='blue' >
                                Sify Tech
                            </Button>
                            </Link>

                            <Link to='/freshworks'> 
                            <Button w={'full'} colorScheme='blue' >
                            Freshworks
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

