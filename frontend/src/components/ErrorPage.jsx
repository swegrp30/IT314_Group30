import React from 'react';
import { Box, Center, Icon, Text, VStack, Button } from '@chakra-ui/react';
import error from '../Images/Eoor.svg';
import { Link } from 'react-router-dom';
function ErrorPage() {


    return (
        <Center
            h="90vh"
            bg="rgba(0, 0, 0, 0.1)" // Semi-transparent overlay
            position="fixed"
            top="10vh"
            left="0"
            right="0"
            bottom="0"
            zIndex="0"
        >
            <Box
                p={4}
                borderRadius="lg"
                boxShadow="xl"
                bg="white"
                textAlign="center"
                minW="300px"
            >
                <Icon as error boxSize={12} color="red.500" />
                <VStack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold" color={'red.500'}>
                        Oops! Something went wrong.
                    </Text>
                    <Text fontSize="lg" color={'red.500'}>
                        We apologize, but there was an error processing your request.
                    </Text>
                    <Link to="/">
                        <Button
                            colorScheme="blue"

                            size="lg"
                            fontSize="md"
                        >
                            Back to Home Page
                        </Button>
                    </Link>

                </VStack>
            </Box>
        </Center>
    );
}

export default ErrorPage;