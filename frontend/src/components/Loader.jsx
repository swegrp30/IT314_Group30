import React from 'react';
import { Center, Spinner, Text, VStack } from '@chakra-ui/react';

function LoadingPage() {
    return (
        <Center
            h="100vh"
            bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="9999"
        >
            <VStack
                p={4}
                borderRadius="lg"
                boxShadow="xl"
                bg="white"
                textAlign="center"
                spacing={4}
            >
                <Spinner size="xl" color="blue.500" thickness="4px" />
                <Text fontSize="2xl" fontWeight="bold" color={'blue.500'}>
                    Loading...
                </Text>
            </VStack>
        </Center>
    );
}

export default LoadingPage;