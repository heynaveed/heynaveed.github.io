import { Box, Flex, Text } from "@chakra-ui/react";
import {BsLinkedin,BsInstagram,BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
export default function Contact ( ){
    return (
        <>
        <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Contact</Text>
        <Box  w={{base : '50%', md : '30%'}} m='auto' textAlign='center' mt={{base : '5px', md : '10px'}} marginBottom='20px'>  
            <Text fontSize={{base : '16px', md : '18px'}}>Get In Touch</Text>
            <Text fontSize={{base : '18px', md : '20px'}} fontWeight='600'>Naveed Pasha</Text>
        </Box>

        <Flex   fontSize={{base : '22px', md : '25px'}} w={{base : '60%', md : '30%', lg : '25%'}} m='auto' mt={{base : '10px', md : '15px'}} justifyContent='space-around' >
            <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target='_blank'><Text><BsLinkedin/></Text></a>
            <a href="https://www.instaram.com/nannuba_qureshi_/" target='_blank'><Text><BsInstagram/></Text></a>
            <a href="mailto:naveedpasha0058@gmail.com" ><Text><AiOutlineMail/></Text></a>
            <a href="tel:+916362656225"><Text><BsFillTelephoneOutboundFill/></Text></a>
        </Flex>

        <Box  w={{base : '50%', md : '30%'}} m='auto' textAlign='center' mt={{base : '10px', md : '20px'}} paddingBottom='20px'>  
           <Text>Bengaluru, India</Text>
           <Text>Copyright ©️ 2022</Text>
        </Box>
        </>
    )
}