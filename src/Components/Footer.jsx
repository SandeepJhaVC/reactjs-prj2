import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

function Footer() {
    return (
        <Box bgColor={"blackAlpha.900"} miniH={"40"} p="16" color={"white"}>
            <Stack direction={['column', 'row']}>
                <VStack
                    alignItems={"stretch"}
                    w={"full"}
                    px="4"
                >
                    <Heading
                        size='md'
                        textTransform={'uppercase'}
                        textAlign={['center','left']}
                    >
                        Subscribe to get updates
                    </Heading>
                    <HStack
                        borderBottom={"2px solid white"}
                        py="2"
                    >
                        <Input
                            placeholder='Enter Email Here...'
                            border={'none'} borderRadius='none'
                            outline={'none'}
                            focusBorderColor="none"
                        />
                        <Button
                            p={"0"}
                            colorScheme={"purple"}
                            variant={"ghost"} borderRadius={"0 20px 20px 0"}
                        >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack
                    w={"full"}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >

                    <Heading
                        textTransform={"uppercase"}
                        textAlign={"center"}
                    >
                        VIDEO HUB
                    </Heading>
                    <Text>All Rights Received</Text>
                </VStack>

                <VStack
                    w={"full"}
                >
                    <Heading
                        size={"md"}
                        textTransform={"uppercase"}
                    >
                        Social Media
                    </Heading>
                    <Button
                        variant={"link"}
                        colorScheme={"white"}
                    >
                        <a target="blank" href="https://www.linkedin.com/in/sandeep-jha-07878a2a4/">
                            Linkedin
                        </a>
                    </Button>
                    <Button
                        variant={"link"}
                        colorScheme={"white"}
                    >
                        <a target="blank" href="https://github.com/SandeepJhaVC">
                            Github
                        </a>
                    </Button>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer