import { Box, Flex, Text } from "@chakra-ui/react";
import {BsLinkedin,BsFillTelephoneOutboundFill,BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
export default function Contact ( ){
    return (
        <>
        <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Contact</Text>

        <Flex w={"90%"} m={"auto"} justifyContent="space-between" mt={"20px"} mb={"20px"}>
            <Text fontSize={{base : '16px', md : '20px'}} fontWeight='600'>Naveed Pasha</Text>
            <Flex fontSize={{base : '20px', md : '20px'}} gap={"30px"} justifyContent='right' >
                <a href="tel:+916362656225"><Text><BsFillTelephoneOutboundFill/></Text></a>
                <a href="mailto:naveedpasha0058@gmail.com" ><Text><AiOutlineMail/></Text></a>
                <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target='_blank'><Text><BsLinkedin/></Text></a>
                <a href="https://github.com/heynaveed/" target='_blank'><Text><BsGithub/></Text></a>
            </Flex>
        </Flex>
        {/* <Flex   fontSize={{base : '22px', md : '25px'}} m='auto' mt={{base : '10px', md : '15px'}} mb={"20px"} justifyContent='space-between' >
            <Box  w={{base : '50%', md : '30%'}} m='auto' textAlign='center' mt={{base : '5px', md : '10px'}} marginBottom='20px'>  
                <Text fontSize={{base : '16px', md : '18px'}}>Get In Touch</Text>
                <Text fontSize={{base : '18px', md : '20px'}} fontWeight='600'>Naveed Pasha</Text>
            </Box>

            <Flex   fontSize={{base : '22px', md : '25px'}} w={{base : '60%', md : '30%', lg : '25%'}} m='auto' mt={{base : '10px', md : '15px'}} mb={"20px"} justifyContent='right' >
                <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target='_blank'><Text><BsLinkedin/></Text></a>
                <a href="https://github.com/heynaveed/" target='_blank'><Text><BsGithub/></Text></a>
                <a href="mailto:naveedpasha0058@gmail.com" ><Text><AiOutlineMail/></Text></a>
                <a href="tel:+916362656225"><Text><BsFillTelephoneOutboundFill/></Text></a>
            </Flex>

        </Flex> */}

        <hr/>

        <Box  w={{base : '80%', md : '40%'}} m='auto' textAlign='center' mt={{base : '20px', md : '30px'}} paddingBottom='20px'>  
           <Text fontSize={{base : '14px', md : '16px'}} mb={"10px"}>Designed and Developed by Naveed Pasha</Text>
           <Text fontSize={{base : '14px', md : '16px'}}>Copyright ©️ 2022</Text>
        </Box>
        </>
    )
}
