import { Box, Flex, Text } from "@chakra-ui/react";
import GitCalenderOffical from "./GithubCalender";
import GitStats from "./Stacks";
import OtherTools from "./OtherDevTools";
import FrontEndSkills from "./FrontEndSkills";
import BackendSkills from "./BackEndSkills";
import VersionControl from "./VersonControl";

export default function Skills ( ){
    return (
        <>
         <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Technical Skills</Text>
        <Flex  m='auto' direction={{base : 'column', lg : 'row'}} justifyContent='space-around' rowGap={{base : '40px'}}>
            <Box w={{base : '90%', lg : '40%'}} m={{base : 'auto', lg : '0'}} >
                <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '75px' }} letterSpacing={{ base: '3px' }}>FRONT END</Text>
                <FrontEndSkills/>
            </Box>
    
            <Box w={{base : '80%', lg : '35%'}} m={{base : 'auto', lg : '0'}}>
                <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '75px' }} letterSpacing={{ base: '3px' }}>BACK END</Text>
                <BackendSkills/>
                <OtherTools/>
            </Box>
        </Flex>

        <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '75px' }} letterSpacing={{ base: '3px' }}>VERSION CONTROL</Text>
        <VersionControl/>

         <Box>
            <GitStats/>
         </Box>

         <Box>
            <GitCalenderOffical/>
         </Box>
        </>
    )
}