import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from 'react-icons/bs'

export default function Profile ( ){
    return(
        <>
        <Box height={{base :'50px', md : '80px'}}></Box>
        <Flex w={{base : '90%', md : '80%'}} m='auto' alignItems='center' justifyContent={{base : 'left', md : 'space-around'}} flexDirection={{base : 'row', lg : 'row'}} mt={{base : '8%', md : '10px', lg : '40px'}}>
            <Box  fontSize={{base : '18px', md : '35px', lg : '55px'}} width={{base : '60%', md : '100%', lg : '60%'}} m={{base : 'auto', lg:'0'}} fontWeight='600' textAlign={{base :'left', lg:'left'}}  lineHeight={{base : '28px', md:'50px', lg :'80px'}}>
                <Flex  justifyContent='left'   gap='5px' direction={{base : 'column', lg :'column'}}>

                <Flex>
                    <Text color='white'><b>Hi 👋,</b></Text>
                </Flex>

                <Text color='white'> <b>Myself</b> <b style={{color:'#3182CE'}}>Naveed Pasha</b></Text>
                </Flex>
                <Text color='white   '><b>MERN Developer</b></Text>
               <a href="https://drive.google.com/file/d/1tfgE8dasU-MtL2lpZgNMdnPi2s5ppodK/view" target='_blank'><Button size={{base : 'sm', md : 'md' ,lg :'lg'}}mt={{base : '10px', md :'0'}} colorScheme='blue'>Resume</Button></a>

               <Flex gap={{base : '10px', md : '15px', lg : '22px'}} justifyContent={{base : 'left', lg : 'left'}}  w={{base : '15%', lg : '20%'}} m={{base : '0', lg :'0'}} mt={{base : '15px', md : '15px', lg : '22px'}}>
               <a href="https://github.com/heynaveed" target='_blank'> <Text color='#3182CE' fontSize={{base : '25px', md : '25px', lg : '40px'}}><BsGithub/></Text></a>
               <a href="https://www.linkedin.com/in/naveed-pasha-538790231/" target='_blank'> <Text color='#3182CE' fontSize={{base : '25px', md : '25px', lg : '40px'}}><BsLinkedin/></Text></a>
               </Flex>
            </Box>

            <Box>
                <Image src='https://avatars.githubusercontent.com/u/103996126?s=400&u=79ce7fa13266182c5cda743807f22b96c60aa415&v=4' shadow='lg' mt={{base : '10px',md :'0px'}}  w={{base:'150px', md : '350px', lg : '350px'}} borderRadius='50%' alt="Naveed Pasha"/>
            </Box>
        </Flex>
        </>
    )
}