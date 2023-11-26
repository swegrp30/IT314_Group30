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
    const [searchValue, setSearchValue] = useState('');

    // List of companies
    const companies = [
        'Tesla', 'Apple', 'Amazon', 'Google', 'Netflix', 'Cnbc', 'HDFC', 'Reliance', 'Reliance Global',
        'ICICI Bank', 'Infosys', 'Wipro', 'Make My Trip', 'Yatra', 'Sify Tech', 'Freshworks'
    ];

    // Filtered companies based on search value
    const filteredCompanies = companies.filter(company =>
        company.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <>
            <Button ref={btnRef} style={{color:'white',background:'purple',margin:'10px'}} onClick={onOpen}>
                Filter news by companies
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
                        <Input p={'2'} placeholder='Company Name...'  value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <VStack p={'2'}>
                            {filteredCompanies.map((company, index) => (
                                <Link key={index} to={`/${company.toLowerCase()}`}>
                                    <Button w={'full'} colorScheme='blue' mt={3} mb={3}>
                                        {company}
                                    </Button>
                                </Link>
                            ))}
                        </VStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
export default DrawerExample;

