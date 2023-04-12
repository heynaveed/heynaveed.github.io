import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { MdSettingsAccessibility } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

export default function SoftSkills(){
    return(
        <>
        <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Soft Skills</Text>
        <SimpleGrid columns={[2, 4, 4, 4]} fontSize={{ base: '12px', md: '14px' }} fontWeight="600" rowGap="15px" w={{ base: "95%" , md:"85%" }} m='auto' mt={{ base: '5px', md: '10px' }}>
                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }}>
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><BsFillChatLeftFill /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Communication</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><FaPeopleCarry /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Team Work</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><MdSettingsAccessibility /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Adaptibility</Text>
                    </Box>

                    <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} >
                        <Flex><Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'><RiTeamFill /></Text></Flex>
                        <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Leadership</Text>
                    </Box>

                    <br />
                    <br />
                    <br />
                </SimpleGrid>
                <SimpleGrid columns={[2, 2, 4, 4]} w={{ base: '90%', md: '95%', lg: '85%' }} m='auto' rowGap={{ base: '20px' }} gap='20px'>
                <Box border={{ base: '2px solid #4299E1', md: '3px solid #4299E1', lg: '5px solid #4299E1' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>1000+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Hour's of Coding</Text>
                </Box>

                <Box border={{ base: '2px solid #4299E1', md: '3px solid #4299E1', lg: '5px solid #4299E1' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', md: '90%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>400+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Problems Solved</Text>
                </Box>

                <Box border={{ base: '2px solid #4299E1', md: '3px solid #4299E1', lg: '5px solid #4299E1' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', md: '90%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>200+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Soft Skills Sessions</Text>
                </Box>

                <Box border={{ base: '2px solid #4299E1', md: '3px solid #4299E1', lg: '5px solid #4299E1' }} textAlign='center' padding={{ base: '10px', lg: '30px' }} width={{ base: '85%', md: '90%', lg: '80%' }} m='auto' borderRadius='10px' shadow='lg'>
                    <Text fontSize={{ base: '16px', md: '18px', lg: '24px' }} fontWeight='600'><b>10+</b></Text>
                    <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }} fontWeight='500'>Project's Built</Text>
                </Box>
            </SimpleGrid>
        </>
    )
}