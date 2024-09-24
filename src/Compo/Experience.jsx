import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Experience(){
    return(
        <>
            <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Experience</Text>

            <Flex w={{base : '85%', md: '60%', lg : '40%'}} m='auto' mt={{base : '30px', lg :'20px'}} columnGap ='25px'>
                <Box className="cardImg" w={{base : '60px', md: '100px', lg : '100px'}} >
                    <Image  m='auto' src="/E1.png" alt="Front Img" borderRadius='8px'/>
                </Box> 

                <Box>
                    <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>SDE-1</Text>
                    <Text fontSize={{base :'12px', md : '16px', lg : '18px'}}>Jun 2023 - Jun 2024</Text>
                    
                </Box>
            </Flex>

            <Box w={{base : '85%', md: '60%', lg : '40%'}} m='auto' mt={{base : '25px', lg :'15px'}}>
                <Text fontSize={{base :'12px', md : '16px', lg : '18px'}} mb="10px">Brandnav.io | B2B Company Data, Contact Details and Sales Leads</Text>
                <Text fontSize={{base :'12px', md : '16px', lg : '18px'}} mb="10px">Pune, Maharashtra, India | Full-time | Remote</Text>
                <Text fontSize={{base :'12px', md : '16px', lg : '18px'}} mb="10px">Software Development Engineer - 1</Text>
            </Box>
        </>
    )
}