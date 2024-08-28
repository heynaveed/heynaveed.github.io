import { Box, Text } from "@chakra-ui/react";

export default function About ( ){
    return (
        <>
        <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>About</Text>
            <Box width={{base : '90%', md : '60%', lg : '50%'}} m='auto' mt="15px" textAlign='center'>
                <Text fontSize={{base : '18px', md : '20px', lg : '25px'}} fontWeight='600'>I'am Naveed Pasha</Text>
                <Text fontSize={{base : '14px', md : '16px', lg : '18px'}} mt={{base : '7px'}}>Quick learner and an aspiring full-stack web developer with core knowledge of MERN 
                    stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
                </Text>
                <Text fontSize={{base : '14px', md : '16px', lg : '18px'}} mt={{base : '7px'}}>Drop a mail @ naveedpasha0058@gmail.com</Text>
            </Box>
        </>
    )
}